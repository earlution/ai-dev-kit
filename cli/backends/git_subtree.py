"""
Git Subtree Backend

Manages frameworks as Git subtrees.
"""

import subprocess
from pathlib import Path
from typing import Dict, Optional, Any

from cli.backends.base import BaseBackend


class GitSubtreeBackend(BaseBackend):
    """Git subtree backend implementation."""
    
    def install(self, framework: str, version: str, path: str, source: str, **kwargs) -> bool:
        """Install framework as Git subtree.
        
        Args:
            framework: Framework name
            version: Framework version (tag)
            path: Installation path
            source: Source repository URL
            **kwargs: Additional options
            
        Returns:
            True if installation successful
        """
        try:
            # Create parent directory if needed
            path_obj = Path(path)
            path_obj.parent.mkdir(parents=True, exist_ok=True)
            
            tag = kwargs.get("tag", f"{framework}-v{version}")
            
            # Add subtree at specific tag
            cmd = [
                "git", "subtree", "add",
                "--prefix", str(path_obj),
                source,
                tag,
                "--squash"
            ]
            
            subprocess.run(cmd, check=True)
            return True
        except subprocess.CalledProcessError as e:
            print(f"❌ Error installing subtree: {e}")
            return False
    
    def update(self, framework: str, version: str, path: str, **kwargs) -> bool:
        """Update Git subtree to new version.
        
        Args:
            framework: Framework name
            version: Target version
            path: Framework path
            **kwargs: Additional options
            
        Returns:
            True if update successful
        """
        try:
            path_obj = Path(path)
            tag = kwargs.get("tag", f"{framework}-v{version}")
            source = kwargs.get("source", "https://github.com/earlution/vibe-dev-kit.git")
            
            # Pull subtree updates
            cmd = [
                "git", "subtree", "pull",
                "--prefix", str(path_obj),
                source,
                tag,
                "--squash"
            ]
            
            subprocess.run(cmd, check=True)
            return True
        except subprocess.CalledProcessError as e:
            print(f"❌ Error updating subtree: {e}")
            return False
    
    def check(self, framework: str, path: str, current_version: str) -> Dict[str, Any]:
        """Check for available updates.
        
        Args:
            framework: Framework name
            path: Framework path
            current_version: Current installed version
            
        Returns:
            Dictionary with update information
        """
        # TODO: Implement version checking logic
        return {
            "current": current_version,
            "latest": current_version,  # Placeholder
            "update_available": False,
            "backend": "git-subtree"
        }
    
    def status(self, framework: str, path: str) -> Dict[str, Any]:
        """Get Git subtree status.
        
        Args:
            framework: Framework name
            path: Framework path
            
        Returns:
            Dictionary with status information
        """
        try:
            path_obj = Path(path)
            if not path_obj.exists():
                return {"exists": False, "backend": "git-subtree"}
            
            # Git subtree doesn't have direct version tracking
            # Would need to check commit history or tags
            return {
                "exists": True,
                "version": "unknown",  # Placeholder
                "backend": "git-subtree",
                "path": str(path_obj)
            }
        except Exception as e:
            return {
                "exists": False,
                "error": str(e),
                "backend": "git-subtree"
            }
    
    def remove(self, framework: str, path: str, keep_files: bool = False) -> bool:
        """Remove Git subtree.
        
        Args:
            framework: Framework name
            path: Framework path
            keep_files: Whether to keep framework files
            
        Returns:
            True if removal successful
        """
        try:
            path_obj = Path(path)
            
            if not keep_files:
                # Remove subtree directory
                import shutil
                if path_obj.exists():
                    shutil.rmtree(path_obj)
                
                # Remove from git
                cmd = ["git", "rm", "-r", str(path_obj)]
                subprocess.run(cmd, check=False)
            
            return True
        except Exception as e:
            print(f"❌ Error removing subtree: {e}")
            return False

