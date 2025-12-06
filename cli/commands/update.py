"""
Update Command

Updates framework(s) to latest compatible version.
"""

from cli.config import Config
from cli.utils import parse_framework_spec
from cli.backends import GitSubmoduleBackend, GitSubtreeBackend, PackageManagerBackend


class UpdateCommand:
    """Update command implementation."""
    
    def __init__(self):
        """Initialize update command."""
        self.config = Config()
    
    def execute(self, args) -> int:
        """Execute update command.
        
        Args:
            args: Parsed command arguments
            
        Returns:
            Exit code (0 for success)
        """
        config = self.config.load()
        frameworks = config.get("frameworks", {})
        
        if args.all:
            # Update all frameworks
            framework_names = list(frameworks.keys())
        elif args.frameworks:
            # Update specified frameworks
            framework_names = []
            for spec in args.frameworks:
                framework_name, _ = parse_framework_spec(spec)
                framework_names.append(framework_name)
        else:
            print("❌ Error: Specify framework(s) or use --all")
            return 1
        
        for framework_name in framework_names:
            if framework_name not in frameworks:
                print(f"❌ Error: Framework '{framework_name}' not installed")
                continue
            
            framework_config = frameworks[framework_name]
            backend_type = framework_config.get("backend", "git-submodule")
            backend = self._get_backend(backend_type)
            
            if not backend:
                print(f"❌ Error: Backend '{backend_type}' not available")
                continue
            
            current_version = framework_config.get("version", "unknown")
            path = framework_config.get("path", "")
            
            if args.check:
                # Just check for updates
                update_info = backend.check(framework_name, path, current_version)
                print(f"Framework: {framework_name}")
                print(f"  Current: {update_info.get('current', 'unknown')}")
                print(f"  Latest:  {update_info.get('latest', 'unknown')}")
                if update_info.get("update_available"):
                    print(f"  Status:  Update available")
                else:
                    print(f"  Status:  Up to date")
                continue
            
            # Determine target version
            target_version = "latest"  # TODO: Implement version resolution
            
            if args.dry_run:
                print(f"🔍 [DRY RUN] Would update {framework_name} from {current_version} to {target_version}")
                continue
            
            # Update framework
            print(f"🔄 Updating {framework_name}...")
            
            success = backend.update(
                framework=framework_name,
                version=target_version,
                path=path,
                tag=framework_config.get("tag", f"{framework_name}-v{target_version}"),
                source=framework_config.get("source", "")
            )
            
            if success:
                # Update configuration
                framework_config["version"] = target_version
                self.config.add_framework(framework_name, framework_config)
                print(f"✅ Updated {framework_name} to {target_version}")
            else:
                print(f"❌ Failed to update {framework_name}")
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

