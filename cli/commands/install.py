"""
Install command for ai-dev-kit CLI tool.

Installs frameworks as dependencies using the specified backend.
"""

import argparse
import re
from pathlib import Path
from typing import List, Tuple, Optional

from cli.commands import BaseCommand
from cli.config import Config
from cli.utils import print_success, print_error, print_info, print_warning, get_project_root


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
    
    def execute(self) -> int:
        """Execute the install command."""
        try:
            project_root = get_project_root()
            if project_root is None:
                project_root = Path.cwd()
                print_warning("No project root detected, using current directory")
            
            # Load or create configuration
            config = Config(project_root / ".ai-dev-kit.yaml")
            
            # Parse and validate framework specifications
            frameworks_to_install: List[Tuple[str, Optional[str]]] = []
            for spec in self.args.frameworks:
                try:
                    framework, version = validate_framework_spec(spec)
                    frameworks_to_install.append((framework, version))
                except InvalidInputError as e:
                    print_error(str(e))
                    return 1
            
            # Determine and validate backend
            backend_name = self.args.backend or config.get("default_backend", "git-submodule")
            try:
                backend_name = validate_backend(backend_name)
            except InvalidInputError as e:
                print_error(str(e))
                return 1
            
            # Select backend instance
            backend = select_backend(
                preferred_backend=backend_name,
                project_root=project_root,
                default_backend_from_config=config.get("default_backend")
            )
            
            if backend is None:
                available = BackendRegistry.list_available_backends()
                raise BackendNotAvailableError(backend_name, available)
            
            # Validate and determine installation path
            install_path_str = self.args.path or "frameworks"
            try:
                install_path = validate_path(install_path_str, must_exist=False, must_be_directory=True)
            except InvalidInputError as e:
                print_error(str(e))
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
                return 0
            
            # Perform installation
            failed_installations = []
            for framework, version in frameworks_to_install:
                try:
                    framework_path = install_path / framework
                    version_str = version or "latest"
                    
                    print_info(f"Installing {framework}@{version_str}...")
                    
                    # Get source URL from config or use default
                    source = config.get(f"frameworks.{framework}.source")
                    if not source:
                        # Default source (can be enhanced later)
                        source = f"https://github.com/earlution/ai-dev-kit.git"
                    
                    success = backend.install(
                        framework_name=framework,
                        version=version,
                        path=framework_path,
                        source=source
                    )
                    
                    if success:
                        print_success(f"Installed {framework}@{version_str}")
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
                    failed_installations.append(framework)
            
            if failed_installations:
                print_error(f"Failed to install: {', '.join(failed_installations)}")
                return 1
            
            print_success(f"Successfully installed {len(frameworks_to_install)} framework(s)")
            return 0
            
        except AIDevKitError as e:
            return handle_error(e, getattr(self.args, 'debug', False))
        except Exception as e:
            return handle_error(e, getattr(self.args, 'debug', False))  # Return error until backends are implemented

