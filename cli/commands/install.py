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
        project_root = get_project_root()
        if project_root is None:
            project_root = Path.cwd()
            print_warning("No project root detected, using current directory")
        
        # Load or create configuration
        config = Config(project_root / ".ai-dev-kit.yaml")
        
        # Parse framework specifications
        frameworks_to_install: List[Tuple[str, Optional[str]]] = []
        for spec in self.args.frameworks:
            try:
                framework, version = parse_framework_spec(spec)
                frameworks_to_install.append((framework, version))
            except ValueError as e:
                print_error(str(e))
                return 1
        
        # Determine backend
        backend = self.args.backend or config.get("default_backend", "git-submodule")
        
        # Determine installation path
        install_path = self.args.path or "frameworks"
        
        if self.args.dry_run:
            print_info("DRY RUN MODE - No changes will be made")
            print_info(f"Project root: {project_root}")
            print_info(f"Backend: {backend}")
            print_info(f"Installation path: {install_path}")
            print_info("Frameworks to install:")
            for framework, version in frameworks_to_install:
                version_str = f"@{version}" if version else " (latest)"
                print_info(f"  - {framework}{version_str}")
            return 0
        
        # TODO: Implement actual installation logic
        # This will be implemented when backends are available (T05-T07)
        print_error("Installation not yet implemented. Backend implementations required (T05-T07).")
        print_info("Framework specifications parsed:")
        for framework, version in frameworks_to_install:
            version_str = f"@{version}" if version else " (latest)"
            print_info(f"  - {framework}{version_str}")
        
        return 1  # Return error until backends are implemented

