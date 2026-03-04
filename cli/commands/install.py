"""
Install command for ai-dev-kit CLI tool.

Installs frameworks as dependencies using the specified backend.
"""

import argparse
import os
import re
from datetime import datetime
from pathlib import Path
from typing import List, Tuple, Optional, Callable

from cli.commands import BaseCommand
from cli.config import Config
from cli.exceptions import AIDevKitError, InvalidInputError, BackendNotAvailableError, InstallationError
from cli.validation import validate_framework_spec, validate_backend, validate_path
from cli.backends import BackendRegistry, select_backend, get_backend
from cli.utils import (
    print_success,
    print_error,
    print_info,
    print_warning,
    get_project_root,
    handle_error,
)


def parse_framework_spec(spec: str) -> Tuple[str, Optional[str]]:
    """
    Parse framework specification (framework[@version]).
    
    Args:
        spec: Framework specification string
    
    Returns:
        Tuple of (framework_name, version)
    """
    match = re.match(r"^([^@]+)(?:@(.+))?$", spec)
    if not match:
        raise ValueError(f"Invalid framework specification: {spec}")
    
    framework = match.group(1)
    version = match.group(2) if match.group(2) else None
    
    return framework, version


class InstallCommand(BaseCommand):
    """Command to install frameworks."""
    
    @staticmethod
    def get_description() -> str:
        """Get command description."""
        return "Install frameworks as dependencies"
    
    @staticmethod
    def add_arguments(parser: argparse.ArgumentParser) -> None:
        """Add install command arguments."""
        parser.add_argument(
            "frameworks",
            nargs="+",
            help="Framework(s) to install (format: framework[@version])",
        )
        parser.add_argument(
            "--backend",
            type=str,
            choices=["git-submodule", "git-subtree", "npm", "pip"],
            help="Dependency backend to use (overrides default)",
        )
        parser.add_argument(
            "--path",
            type=str,
            help="Custom installation path",
        )
        parser.add_argument(
            "--dry-run",
            action="store_true",
            help="Preview changes without applying",
        )
        parser.add_argument(
            "--log-path",
            type=str,
            help="Custom directory for install logs (overrides install_logging.path in config)",
        )
        parser.add_argument(
            "--no-install-log",
            action="store_true",
            help="Disable per-run install logging (overrides install_logging.enabled in config)",
        )
    
    def execute(self) -> int:
        """Execute the install command."""
        try:
            project_root = get_project_root()
            if project_root is None:
                project_root = Path.cwd()
                print_warning("No project root detected, using current directory")
            
            # Load or create configuration
            config = Config(project_root / ".ai-dev-kit.yaml")
            
            # ------------------------------------------------------------------
            # Install logging setup (FR-047)
            # ------------------------------------------------------------------
            log_file = None
            log_dir: Optional[Path] = None
            log: Callable[[str, str, str], None]

            def _noop_log(_level: str, _context: str, _message: str) -> None:
                return

            def _redact(message: str) -> str:
                """
                Very simple redaction helper to avoid logging obvious secrets.
                """
                patterns = ["GITHUB_TOKEN=", "password=", "PASSWORD=", "Bearer "]
                redacted = message
                for pattern in patterns:
                    if pattern in redacted:
                        redacted = redacted.replace(pattern, f"{pattern}***")
                return redacted

            fh = None
            try:
                logging_enabled = not getattr(self.args, "no_install_log", False)
                if logging_enabled:
                    logging_enabled = config.get("install_logging.enabled", True)

                if logging_enabled:
                    # Resolve log directory
                    if getattr(self.args, "log_path", None):
                        log_dir = Path(self.args.log_path).resolve()
                    else:
                        default_rel = config.get("install_logging.path", "logs/ai-dev-kit/install")
                        log_dir = (project_root / default_rel).resolve()

                    log_dir.mkdir(parents=True, exist_ok=True)

                    # Open timestamped log file
                    timestamp = datetime.utcnow().strftime("%Y%m%d-%H%M%S")
                    log_file = log_dir / f"install-{timestamp}.log"
                    fh = log_file.open("a", encoding="utf-8")

                    def _log(level: str, context: str, message: str) -> None:
                        ts = datetime.utcnow().isoformat(timespec="seconds") + "Z"
                        safe = _redact(message)
                        fh.write(f"[{ts}] [{level}] [{context}] {safe}\n")
                        fh.flush()

                    log = _log

                    # Per-run header
                    log("INFO", "install.main", f"ai-dev-kit install started in {project_root}")
                    log("INFO", "install.main", f"Config file: {config.config_path}")
                    # Expose log path for framework installers (e.g. Kanban) via env var
                    os.environ["AI_DEV_KIT_INSTALL_LOG_PATH"] = str(log_file)
                else:
                    log = _noop_log
            except Exception as e:
                print_warning(f"Install logging disabled due to logger setup error: {e}")
                log = _noop_log
                log_file = None
                log_dir = None
                # Ensure no stale env-based log wiring leaks into child processes
                os.environ.pop("AI_DEV_KIT_INSTALL_LOG_PATH", None)
            
            # Parse and validate framework specifications
            frameworks_to_install: List[Tuple[str, Optional[str]]] = []
            for spec in self.args.frameworks:
                try:
                    framework, version = validate_framework_spec(spec)
                    frameworks_to_install.append((framework, version))
                except InvalidInputError as e:
                    print_error(str(e))
                    log("ERROR", "install.spec", f"Invalid framework spec '{spec}': {e}")
                    return 1
            
            # Determine and validate backend
            backend_name = self.args.backend or config.get("default_backend", "git-submodule")
            try:
                backend_name = validate_backend(backend_name)
            except InvalidInputError as e:
                print_error(str(e))
                log("ERROR", "install.backend", f"Invalid backend '{backend_name}': {e}")
                return 1
            
            # Select backend
            selected_backend_name = select_backend(
                preferred=backend_name,
                project_root=project_root,
                auto_detect=True,
            )
            
            if selected_backend_name is None:
                available = BackendRegistry.list_available_backends()
                log("ERROR", "install.backend", f"Backend '{backend_name}' not available. Available: {available}")
                raise BackendNotAvailableError(backend_name, available)
            
            backend_class = get_backend(selected_backend_name)
            if backend_class is None:
                available = BackendRegistry.get_registry().get_available_backends()
                log("ERROR", "install.backend", f"Backend '{selected_backend_name}' not registered. Available: {available}")
                raise BackendNotAvailableError(selected_backend_name, available)
            backend = backend_class()
            
            # Validate and determine installation path
            install_path_str = self.args.path or "frameworks"
            try:
                install_path = validate_path(install_path_str, must_exist=False, must_be_directory=True)
            except InvalidInputError as e:
                print_error(str(e))
                log("ERROR", "install.path", f"Invalid install path '{install_path_str}': {e}")
                return 1
            
            if self.args.dry_run:
                print_info("DRY RUN MODE - No changes will be made")
                print_info(f"Project root: {project_root}")
                print_info(f"Backend: {backend_name}")
                print_info(f"Installation path: {install_path}")
                print_info("Frameworks to install:")
                for framework, version in frameworks_to_install:
                    version_str = f"@{version}" if version else " (latest)"
                    print_info(f"  - {framework}{version_str}")
                log("INFO", "install.main", "Dry run only - no changes will be made")
                return 0
            
            # Perform installation
            failed_installations = []
            for framework, version in frameworks_to_install:
                try:
                    framework_path = install_path / framework
                    version_str = version or "latest"
                    
                    print_info(f"Installing {framework}@{version_str}...")
                    log("INFO", "install.framework", f"Installing {framework}@{version_str} to {framework_path}")
                    
                    # Get source URL from config or use default
                    source = config.get(f"frameworks.{framework}.source")
                    if not source:
                        # Default source (can be enhanced later)
                        source = f"https://github.com/earlution/ai-dev-kit.git"
                    log("INFO", "install.framework", f"Using source {source} via backend {backend_name}")
                    
                    success = backend.install(
                        framework_name=framework,
                        version=version,
                        path=framework_path,
                        source=source
                    )
                    
                    if success:
                        print_success(f"Installed {framework}@{version_str}")
                        log("INFO", "install.framework", f"Installed {framework}@{version_str} successfully")
                        # Update configuration
                        config.add_framework(
                            name=framework,
                            version=version_str,
                            backend=backend_name,
                            path=str(framework_path),
                            source=source
                        )
                        config.save()
                    else:
                        log("ERROR", "install.framework", f"Backend install reported failure for {framework}@{version_str}")
                        raise InstallationError(
                            framework,
                            "Installation failed (see error messages above)",
                            backend_name
                        )
                except Exception as e:
                    if isinstance(e, (AIDevKitError, InstallationError)):
                        print_error(str(e))
                    else:
                        print_error(f"Failed to install {framework}: {str(e)}")
                    log("ERROR", "install.framework", f"Failed to install {framework}: {e}")
                    failed_installations.append(framework)
            
            if failed_installations:
                print_error(f"Failed to install: {', '.join(failed_installations)}")
                log("ERROR", "install.main", f"Failed installations: {', '.join(failed_installations)}")
                # Close log and perform simple retention
                if fh and log_dir:
                    try:
                        keep = config.get("install_logging.keep")
                        if isinstance(keep, int) and keep > 0:
                            logs = sorted(log_dir.glob("install-*.log"))
                            if len(logs) > keep:
                                for old in logs[0 : len(logs) - keep]:
                                    try:
                                        old.unlink()
                                    except Exception:
                                        pass
                    except Exception:
                        # Do not fail install because of log rotation
                        pass
                    finally:
                        try:
                            fh.close()
                        except Exception:
                            pass
                return 1
            
            print_success(f"Successfully installed {len(frameworks_to_install)} framework(s)")
            log("INFO", "install.main", f"Successfully installed {len(frameworks_to_install)} framework(s)")

            # Close log and perform simple retention
            if fh and log_dir:
                try:
                    keep = config.get("install_logging.keep")
                    if isinstance(keep, int) and keep > 0:
                        logs = sorted(log_dir.glob("install-*.log"))
                        if len(logs) > keep:
                            for old in logs[0 : len(logs) - keep]:
                                try:
                                    old.unlink()
                                except Exception:
                                    pass
                except Exception:
                    # Do not fail install because of log rotation
                    pass
                finally:
                    try:
                        fh.close()
                    except Exception:
                        pass
            return 0
            
        except AIDevKitError as e:
            return handle_error(e, getattr(self.args, 'debug', False))
        except Exception as e:
            return handle_error(e, getattr(self.args, 'debug', False))  # Return error until backends are implemented

