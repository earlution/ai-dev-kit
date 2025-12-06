"""
Git Submodule Backend

Manages frameworks as Git submodules.
"""

import subprocess
from pathlib import Path
from typing import Dict, Optional, Any

from cli.backends.base import BaseBackend


class GitSubmoduleBackend(BaseBackend):
    """Git submodule backend implementation."""
    
    def install(self, framework: str, version: str, path: str, source: str, **kwargs) -> bool:
        """Install framework as Git submodule.
        
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
            
            # Add submodule at specific tag
            tag = kwargs.get("tag", f"{framework}-v{version}")
            submodule_path = str(path_obj)
            
            # Git submodule add command
            cmd = [
                "git", "submodule", "add",
                "-b", tag,  # Use tag as branch (may need adjustment)
                source,
                submodule_path
            ]
            
            result = subprocess.run(cmd, capture_output=True, text=True, check=False)
            
            if result.returncode != 0:
                # Try alternative: add submodule then checkout tag
                cmd = ["git", "submodule", "add", source, submodule_path]
                subprocess.run(cmd, check=True)
                
                # Checkout specific tag
                submodule_dir = path_obj
                cmd = ["git", "-C", str(submodule_dir), "checkout", tag]
                subprocess.run(cmd, check=True)
            
            return True
        except subprocess.CalledProcessError as e:
            print(f"❌ Error installing submodule: {e}")
            return False
    
    def update(self, framework: str, version: str, path: str, **kwargs) -> bool:
        """Update Git submodule to new version.
        
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
            
            # Update submodule to new tag
            cmd = ["git", "-C", str(path_obj), "checkout", tag]
            subprocess.run(cmd, check=True)
            
            # Update parent repository reference
            cmd = ["git", "submodule", "update", "--remote", str(path_obj)]
            subprocess.run(cmd, check=True)
            
            return True
        except subprocess.CalledProcessError as e:
            print(f"❌ Error updating submodule: {e}")
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
        # This would fetch tags from remote and compare versions
        return {
            "current": current_version,
            "latest": current_version,  # Placeholder
            "update_available": False,
            "backend": "git-submodule"
        }
    
    def status(self, framework: str, path: str) -> Dict[str, Any]:
        """Get Git submodule status.
        
        Args:
            framework: Framework name
            path: Framework path
            
        Returns:
            Dictionary with status information
        """
        try:
            path_obj = Path(path)
            if not path_obj.exists():
                return {"exists": False, "backend": "git-submodule"}
            
            # Get current commit/tag
            cmd = ["git", "-C", str(path_obj), "describe", "--tags", "--exact-match"]
            result = subprocess.run(cmd, capture_output=True, text=True)
            
            version = "unknown"
            if result.returncode == 0:
                version = result.stdout.strip()
            
            return {
                "exists": True,
                "version": version,
                "backend": "git-submodule",
                "path": str(path_obj)
            }
        except Exception as e:
            return {
                "exists": False,
                "error": str(e),
                "backend": "git-submodule"
            }
    
    def remove(self, framework: str, path: str, keep_files: bool = False) -> bool:
        """Remove Git submodule.
        
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
                # Remove submodule
                cmd = ["git", "submodule", "deinit", "-f", str(path_obj)]
                subprocess.run(cmd, check=False)
                
                cmd = ["git", "rm", "-f", str(path_obj)]
                subprocess.run(cmd, check=False)
            
            # Remove .gitmodules entry (if exists)
            gitmodules = Path(".gitmodules")
            if gitmodules.exists():
                # TODO: Remove entry from .gitmodules file
                pass
            
            return True
        except Exception as e:
            print(f"❌ Error removing submodule: {e}")
            return False

