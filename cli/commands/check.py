"""
Check Command

Checks for available framework updates.
"""

from cli.config import Config
from cli.backends import GitSubmoduleBackend, GitSubtreeBackend, PackageManagerBackend


class CheckCommand:
    """Check command implementation."""
    
    def __init__(self):
        """Initialize check command."""
        self.config = Config()
    
    def execute(self, args) -> int:
        """Execute check command.
        
        Args:
            args: Parsed command arguments
            
        Returns:
            Exit code (0 for success)
        """
        config = self.config.load()
        frameworks = config.get("frameworks", {})
        
        if args.framework:
            # Check specific framework
            if args.framework not in frameworks:
                print(f"❌ Error: Framework '{args.framework}' not installed")
                return 1
            frameworks = {args.framework: frameworks[args.framework]}
        
        if not frameworks:
            print("No frameworks installed")
            return 0
        
        for framework_name, framework_config in frameworks.items():
            backend_type = framework_config.get("backend", "git-submodule")
            backend = self._get_backend(backend_type)
            
            if not backend:
                print(f"❌ Error: Backend '{backend_type}' not available for {framework_name}")
                continue
            
            current_version = framework_config.get("version", "unknown")
            path = framework_config.get("path", "")
            
            update_info = backend.check(framework_name, path, current_version)
            
            print(f"Framework: {framework_name}")
            print(f"  Current: {update_info.get('current', 'unknown')}")
            print(f"  Latest:  {update_info.get('latest', 'unknown')}")
            
            if update_info.get("update_available"):
                print(f"  Status:  Update available")
            else:
                print(f"  Status:  Up to date")
            print()
        
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

