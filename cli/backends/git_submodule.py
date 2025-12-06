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
            version: Target version (use "latest" for auto-update)
            path: Framework path
            **kwargs: Additional options
                - tag: Specific tag to checkout
                - auto: If True, find latest compatible version
                - pin: Pinning strategy (exact, minor, major, none)
            
        Returns:
            True if update successful
        """
        try:
            path_obj = Path(path)
            
            # Determine target tag
            if version == "latest" or kwargs.get("auto", False):
                # Auto-update: find latest version based on pinning strategy
                pin = kwargs.get("pin", "minor")
                current_version = kwargs.get("current_version", "0.0.0")
                
                # Fetch latest tags
                subprocess.run(
                    ["git", "-C", str(path_obj), "fetch", "--tags", "--quiet"],
                    check=False,
                    capture_output=True
                )
                
                # Find compatible latest version based on pinning
                tag_prefix = f"{framework}-v"
                result = subprocess.run(
                    ["git", "-C", str(path_obj), "tag", "-l", f"{tag_prefix}*"],
                    capture_output=True,
                    text=True,
                    check=True
                )
                
                tags = [tag.strip() for tag in result.stdout.split("\n") if tag.strip()]
                if not tags:
                    print(f"❌ No tags found for framework {framework}")
                    return False
                
                # Filter tags based on pinning strategy (simplified)
                # In production, would use proper semantic version comparison
                tags_sorted = sorted(tags, key=lambda t: t.replace(tag_prefix, ""))
                target_tag = tags_sorted[-1]  # Latest tag
            else:
                # Specific version requested
                tag = kwargs.get("tag", f"{framework}-v{version}")
                target_tag = tag
            
            # Update submodule to target tag
            cmd = ["git", "-C", str(path_obj), "checkout", target_tag]
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
        try:
            path_obj = Path(path)
            if not path_obj.exists():
                return {
                    "current": current_version,
                    "latest": current_version,
                    "update_available": False,
                    "backend": "git-submodule",
                    "error": "Framework path does not exist"
                }
            
            # Fetch latest tags
            subprocess.run(
                ["git", "-C", str(path_obj), "fetch", "--tags", "--quiet"],
                check=False,
                capture_output=True
            )
            
            # Find latest tag for this framework
            tag_prefix = f"{framework}-v"
            result = subprocess.run(
                ["git", "-C", str(path_obj), "tag", "-l", f"{tag_prefix}*"],
                capture_output=True,
                text=True,
                check=True
            )
            
            tags = [tag.strip() for tag in result.stdout.split("\n") if tag.strip()]
            if not tags:
                return {
                    "current": current_version,
                    "latest": current_version,
                    "update_available": False,
                    "backend": "git-submodule",
                    "error": "No tags found for framework"
                }
            
            # Sort tags by version (simplified - would use proper version comparison)
            tags_sorted = sorted(tags, key=lambda t: t.replace(tag_prefix, ""))
            latest_tag = tags_sorted[-1]
            latest_version = latest_tag.replace(tag_prefix, "")
            
            # Compare versions (simplified - would use proper version comparison)
            current_tag = f"{tag_prefix}{current_version}"
            update_available = latest_tag != current_tag
            
            return {
                "current": current_version,
                "current_tag": current_tag,
                "latest": latest_version,
                "latest_tag": latest_tag,
                "update_available": update_available,
                "backend": "git-submodule"
            }
        except Exception as e:
            return {
                "current": current_version,
                "latest": current_version,
                "update_available": False,
                "backend": "git-submodule",
                "error": str(e)
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

