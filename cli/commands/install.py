"""
Install Command

Installs framework(s) as dependencies.
"""

import sys
from pathlib import Path

from cli.config import Config
from cli.utils import parse_framework_spec, normalize_framework_name, get_framework_path
from cli.backends import GitSubmoduleBackend, GitSubtreeBackend, PackageManagerBackend


class InstallCommand:
    """Install command implementation."""
    
    DEFAULT_SOURCE = "https://github.com/earlution/vibe-dev-kit.git"
    
    def __init__(self):
        """Initialize install command."""
        self.config = Config()
    
    def execute(self, args) -> int:
        """Execute install command.
        
        Args:
            args: Parsed command arguments
            
        Returns:
            Exit code (0 for success)
        """
        config = self.config.load()
        default_backend = args.backend or config.get("default_backend", "git-submodule")
        
        for framework_spec in args.frameworks:
            try:
                framework_name, version = parse_framework_spec(framework_spec)
                
                if not version:
                    # TODO: Fetch latest version
                    version = "latest"
                    print(f"⚠️  No version specified for {framework_name}, using latest")
                
                # Determine backend
                backend_type = args.backend or default_backend
                backend = self._get_backend(backend_type)
                
                if not backend:
                    print(f"❌ Error: Backend '{backend_type}' not available")
                    return 1
                
                # Get installation path
                install_path = args.path or get_framework_path(framework_name)
                
                if args.dry_run:
                    print(f"🔍 [DRY RUN] Would install {framework_name}@{version}")
                    print(f"   Backend: {backend_type}")
                    print(f"   Path: {install_path}")
                    continue
                
                # Install framework
                print(f"📦 Installing {framework_name}@{version}...")
                
                tag = f"{framework_name}-v{version}"
                success = backend.install(
                    framework=framework_name,
                    version=version,
                    path=install_path,
                    source=self.DEFAULT_SOURCE,
                    tag=tag
                )
                
                if success:
                    # Save configuration
                    framework_config = {
                        "version": version,
                        "backend": backend_type,
                        "path": install_path,
                        "source": self.DEFAULT_SOURCE,
                        "tag": tag
                    }
                    self.config.add_framework(framework_name, framework_config)
                    print(f"✅ Installed {framework_name}@{version}")
                else:
                    print(f"❌ Failed to install {framework_name}")
                    return 1
                    
            except Exception as e:
                print(f"❌ Error installing {framework_spec}: {e}")
                return 1
        
        return 0
    
    def _get_backend(self, backend_type: str):
        """Get backend instance.
        
        Args:
            backend_type: Backend type name
            
        Returns:
            Backend instance or None
        """
        if backend_type == "git-submodule":
            return GitSubmoduleBackend()
        elif backend_type == "git-subtree":
            return GitSubtreeBackend()
        elif backend_type == "npm":
            return PackageManagerBackend({"type": "npm"})
        elif backend_type == "pip":
            return PackageManagerBackend({"type": "pip"})
        else:
            return None

