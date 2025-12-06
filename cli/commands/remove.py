"""
Remove Command

Removes framework dependency.
"""

from cli.config import Config
from cli.backends import GitSubmoduleBackend, GitSubtreeBackend, PackageManagerBackend


class RemoveCommand:
    """Remove command implementation."""
    
    def __init__(self):
        """Initialize remove command."""
        self.config = Config()
    
    def execute(self, args) -> int:
        """Execute remove command.
        
        Args:
            args: Parsed command arguments
            
        Returns:
            Exit code (0 for success)
        """
        config = self.config.load()
        frameworks = config.get("frameworks", {})
        
        framework_name = args.framework
        
        if framework_name not in frameworks:
            print(f"❌ Error: Framework '{framework_name}' not installed")
            return 1
        
        framework_config = frameworks[framework_name]
        backend_type = framework_config.get("backend", "git-submodule")
        backend = self._get_backend(backend_type)
        
        if not backend:
            print(f"❌ Error: Backend '{backend_type}' not available")
            return 1
        
        path = framework_config.get("path", "")
        
        # Remove framework
        print(f"🗑️  Removing {framework_name}...")
        
        success = backend.remove(
            framework=framework_name,
            path=path,
            keep_files=args.keep_files
        )
        
        if success:
            # Remove from configuration
            self.config.remove_framework(framework_name)
            print(f"✅ Removed {framework_name}")
            return 0
        else:
            print(f"❌ Failed to remove {framework_name}")
            return 1
    
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

