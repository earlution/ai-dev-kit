"""
Status Command

Shows status of installed frameworks.
"""

from cli.config import Config
from cli.backends import GitSubmoduleBackend, GitSubtreeBackend, PackageManagerBackend


class StatusCommand:
    """Status command implementation."""
    
    def __init__(self):
        """Initialize status command."""
        self.config = Config()
    
    def execute(self, args) -> int:
        """Execute status command.
        
        Args:
            args: Parsed command arguments
            
        Returns:
            Exit code (0 for success)
        """
        config = self.config.load()
        frameworks = config.get("frameworks", {})
        
        if args.framework:
            # Show specific framework
            if args.framework not in frameworks:
                print(f"❌ Error: Framework '{args.framework}' not installed")
                return 1
            frameworks = {args.framework: frameworks[args.framework]}
        
        if not frameworks:
            print("No frameworks installed")
            return 0
        
        print("Installed Frameworks:")
        for framework_name, framework_config in frameworks.items():
            backend_type = framework_config.get("backend", "git-submodule")
            version = framework_config.get("version", "unknown")
            
            backend = self._get_backend(backend_type)
            if backend:
                path = framework_config.get("path", "")
                status_info = backend.status(framework_name, path)
                version = status_info.get("version", version)
            
            print(f"  {framework_name}: {version} ({backend_type})")
        
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

