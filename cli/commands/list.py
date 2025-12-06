"""
List Command

Lists available frameworks.
"""

from pathlib import Path


class ListCommand:
    """List command implementation."""
    
    # Available frameworks (would be fetched from registry in production)
    AVAILABLE_FRAMEWORKS = {
        "numbering-versioning": ["2.0.0", "2.1.0"],
        "workflow-mgt": ["2.0.0"],
        "kanban": ["1.0.0"],
        "debug-path": ["1.0.0"],
        "doc-lifecycle": ["1.0.0"],
    }
    
    def __init__(self):
        """Initialize list command."""
        pass
    
    def execute(self, args) -> int:
        """Execute list command.
        
        Args:
            args: Parsed command arguments
            
        Returns:
            Exit code (0 for success)
        """
        print("Available Frameworks:")
        
        for framework_name, versions in self.AVAILABLE_FRAMEWORKS.items():
            if args.versions:
                versions_str = ", ".join(versions)
                print(f"  {framework_name} ({versions_str})")
            else:
                print(f"  {framework_name}")
        
        return 0

