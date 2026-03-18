"""
Remove command for ai-dev-kit CLI tool.

Removes framework dependencies and cleans up all traces.
"""

import argparse
import shutil
from pathlib import Path
from typing import Optional

from cli.commands import BaseCommand
from cli.config import Config
from cli.utils import print_success, print_error, print_info, print_warning, get_project_root, handle_error
from cli.exceptions import AIDevKitError, FrameworkNotFoundError
from cli.backends.registry import BackendRegistry
from cli.backends.selector import select_backend


class RemoveCommand(BaseCommand):
    """Command to remove framework dependencies."""
    
    @staticmethod
    def get_description() -> str:
        """Get command description."""
        return "Remove framework dependencies and clean up all traces"
    
    @staticmethod
    def add_arguments(parser: argparse.ArgumentParser) -> None:
        """Add remove command arguments."""
        parser.add_argument(
            "framework",
            help="Framework to remove",
        )
        parser.add_argument(
            "--keep-files",
            action="store_true",
            help="Keep framework files but remove dependency tracking",
        )
        parser.add_argument(
            "--force",
            action="store_true",
            help="Remove without confirmation",
        )
        parser.add_argument(
            "--recovery",
            action="store_true",
            help="Recovery mode: clean up failed installations",
        )
        parser.add_argument(
            "--dry-run",
            action="store_true",
            help="Preview removal without applying changes",
        )
    
    def execute(self) -> int:
        """Execute the remove command."""
        try:
            project_root = get_project_root()
            if project_root is None:
                project_root = Path.cwd()
                print_warning("No project root detected, using current directory")
            
            # Load configuration
            config = Config(project_root / ".ai-dev-kit.yaml")
            frameworks = config.get_frameworks()
            
            # Check if framework is installed
            if self.args.framework not in frameworks:
                available = list(frameworks.keys())
                raise FrameworkNotFoundError(self.args.framework, available)
            
            framework_info = frameworks[self.args.framework]
            backend_name = framework_info.get("backend", "git-submodule")
            framework_path = Path(framework_info.get("path", ""))
            
            if not framework_path:
                print_error(f"Framework '{self.args.framework}' has no path configured")
                return 1
            
            # Resolve path relative to project root
            if not framework_path.is_absolute():
                framework_path = project_root / framework_path
            
            if self.args.dry_run:
                print_info("DRY RUN MODE - No changes will be made")
                print_info("")
                print_info(f"Framework: {self.args.framework}")
                print_info(f"Path: {framework_path}")
                print_info(f"Backend: {backend_name}")
                print_info(f"Keep files: {self.args.keep_files}")
                print_info("")
                print_info("Would remove:")
                if not self.args.keep_files:
                    print_info(f"  - Framework files: {framework_path}")
                print_info(f"  - Configuration entry: {self.args.framework}")
                if backend_name in ["git-submodule", "git-subtree"]:
                    print_info(f"  - Git dependency: {backend_name}")
                return 0
            
            # Confirm removal (unless --force)
            if not self.args.force:
                print_warning(f"This will remove framework '{self.args.framework}'")
                if not self.args.keep_files:
                    print_warning(f"Framework files at {framework_path} will be deleted")
                print_warning("Use --force to proceed without confirmation")
                return 1
            
            # Recovery mode: detect and clean up failed installations
            if self.args.recovery:
                return self._handle_recovery(project_root, config, self.args.framework, framework_path, backend_name)
            
            # Normal removal
            return self._handle_removal(project_root, config, self.args.framework, framework_path, backend_name)
            
        except AIDevKitError as e:
            return handle_error(e, getattr(self.args, 'debug', False))
        except Exception as e:
            return handle_error(e, getattr(self.args, 'debug', False))
    
    def _handle_removal(
        self,
        project_root: Path,
        config: Config,
        framework_name: str,
        framework_path: Path,
        backend_name: str
    ) -> int:
        """Handle normal framework removal."""
        print_info(f"Removing framework '{framework_name}'...")
        print_info("")
        
        # Step 1: Remove via backend
        backend = select_backend(
            preferred_backend=backend_name,
            project_root=project_root,
            default_backend_from_config=config.get("default_backend")
        )
        
        if backend is None:
            print_warning(f"Backend '{backend_name}' not available. Proceeding with file cleanup only.")
        else:
            print_info(f"Removing via {backend_name} backend...")
            try:
                success = backend.remove(
                    framework=framework_name,
                    path=framework_path,
                    keep_files=self.args.keep_files
                )
                if success:
                    print_success(f"Backend removal successful")
                else:
                    print_warning(f"Backend removal had issues. Proceeding with cleanup...")
            except Exception as e:
                print_warning(f"Backend removal failed: {e}. Proceeding with cleanup...")
        
        # Step 2: Remove framework files (unless --keep-files)
        if not self.args.keep_files and framework_path.exists():
            print_info(f"Removing framework files: {framework_path}")
            try:
                if framework_path.is_dir():
                    shutil.rmtree(framework_path)
                else:
                    framework_path.unlink()
                print_success(f"Framework files removed")
            except Exception as e:
                print_error(f"Failed to remove framework files: {e}")
                return 1
        
        # Step 3: Remove from configuration
        print_info(f"Removing from configuration...")
        if config.remove_framework(framework_name):
            config.save()
            print_success(f"Configuration updated")
        else:
            print_warning(f"Framework not found in configuration (may have been removed already)")
        
        # Step 4: Cleanup additional traces
        self._cleanup_additional_traces(project_root, framework_name, backend_name)
        
        print_success(f"Framework '{framework_name}' removed successfully")
        return 0
    
    def _handle_recovery(
        self,
        project_root: Path,
        config: Config,
        framework_name: str,
        framework_path: Path,
        backend_name: str
    ) -> int:
        """Handle recovery mode: clean up failed installations."""
        print_info(f"Recovery mode: Cleaning up failed installation of '{framework_name}'...")
        print_info("")
        
        # Detect failed installation state
        issues = []
        
        # Check if path exists but is incomplete
        if framework_path.exists():
            # Check for common failure indicators
            if framework_path.is_dir():
                # Check if directory is empty or has only partial files
                try:
                    files = list(framework_path.rglob("*"))
                    if len(files) < 5:  # Arbitrary threshold
                        issues.append(f"Incomplete installation: only {len(files)} files found")
                except Exception:
                    issues.append("Cannot read framework directory")
        
        # Check if config exists but path doesn't
        if not framework_path.exists() and framework_name in config.get_frameworks():
            issues.append("Configuration exists but framework files missing")
        
        if not issues:
            print_info("No obvious failure indicators found.")
            print_info("Proceeding with normal removal...")
            return self._handle_removal(project_root, config, framework_name, framework_path, backend_name)
        
        print_warning(f"Detected {len(issues)} issue(s):")
        for issue in issues:
            print_warning(f"  • {issue}")
        print_info("")
        
        # Clean up failed installation
        print_info("Cleaning up failed installation...")
        
        # Remove configuration entry
        if config.remove_framework(framework_name):
            config.save()
            print_success("Configuration cleaned")
        
        # Remove any partial files
        if framework_path.exists():
            try:
                if framework_path.is_dir():
                    shutil.rmtree(framework_path)
                else:
                    framework_path.unlink()
                print_success("Partial files removed")
            except Exception as e:
                print_warning(f"Could not remove partial files: {e}")
        
        # Cleanup additional traces
        self._cleanup_additional_traces(project_root, framework_name, backend_name)
        
        print_success(f"Recovery complete for '{framework_name}'")
        print_info("")
        print_info("You can now reinstall the framework if needed:")
        print_info(f"  ai-dev-kit install {framework_name}")
        
        return 0
    
    def _cleanup_additional_traces(
        self,
        project_root: Path,
        framework_name: str,
        backend_name: str
    ) -> None:
        """Clean up additional traces of the framework."""
        # Clean up Git submodule references
        if backend_name == "git-submodule":
            gitmodules_path = project_root / ".gitmodules"
            if gitmodules_path.exists():
                try:
                    # Read .gitmodules
                    with open(gitmodules_path, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                    
                    # Remove lines related to this framework
                    filtered_lines = []
                    skip_next = False
                    for i, line in enumerate(lines):
                        if skip_next:
                            skip_next = False
                            continue
                        if f"[submodule" in line and framework_name in line:
                            # Skip this line and the next few lines (path, url)
                            skip_next = True
                            continue
                        if framework_name in line and ("path" in line.lower() or "url" in line.lower()):
                            continue
                        filtered_lines.append(line)
                    
                    # Write back if changed
                    if len(filtered_lines) != len(lines):
                        with open(gitmodules_path, 'w', encoding='utf-8') as f:
                            f.writelines(filtered_lines)
                        print_info("Cleaned up .gitmodules")
                except Exception as e:
                    print_warning(f"Could not clean up .gitmodules: {e}")
        
        # Clean up backup files from migration
        backup_dir = project_root / ".ai-dev-kit-migration-backup" / framework_name
        if backup_dir.exists():
            try:
                shutil.rmtree(backup_dir)
                print_info("Cleaned up migration backup")
            except Exception as e:
                print_warning(f"Could not clean up migration backup: {e}")

