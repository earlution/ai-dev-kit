"""
Package Manager Backend

Manages frameworks via package managers (npm, pip).
"""

import subprocess
from pathlib import Path
from typing import Dict, Optional, Any

from cli.backends.base import BaseBackend


class PackageManagerBackend(BaseBackend):
    """Package manager backend implementation."""
    
    def __init__(self, config: Optional[Dict[str, Any]] = None):
        """Initialize package manager backend.
        
        Args:
            config: Backend configuration (e.g., {"type": "npm"})
        """
        super().__init__(config)
        self.pm_type = config.get("type", "npm") if config else "npm"
    
    def _get_package_name(self, framework: str) -> str:
        """Get package name for framework.
        
        Args:
            framework: Framework name
            
        Returns:
            Package name
        """
        if self.pm_type == "npm":
            return f"@vibe-dev-kit/{framework}"
        elif self.pm_type == "pip":
            return f"vibe-dev-kit-{framework}"
        else:
            return framework
    
    def install(self, framework: str, version: str, path: str, source: str, **kwargs) -> bool:
        """Install framework via package manager.
        
        Args:
            framework: Framework name
            version: Framework version
            path: Installation path (not used for package managers)
            source: Source repository URL (not used for package managers)
            **kwargs: Additional options
            
        Returns:
            True if installation successful
        """
        try:
            package_name = self._get_package_name(framework)
            
            if self.pm_type == "npm":
                cmd = ["npm", "install", f"{package_name}@{version}"]
            elif self.pm_type == "pip":
                cmd = ["pip", "install", f"{package_name}=={version}"]
            else:
                raise ValueError(f"Unsupported package manager: {self.pm_type}")
            
            subprocess.run(cmd, check=True)
            return True
        except subprocess.CalledProcessError as e:
            print(f"❌ Error installing package: {e}")
            return False
    
    def update(self, framework: str, version: str, path: str, **kwargs) -> bool:
        """Update framework package.
        
        Args:
            framework: Framework name
            version: Target version
            path: Framework path (not used)
            **kwargs: Additional options
            
        Returns:
            True if update successful
        """
        try:
            package_name = self._get_package_name(framework)
            
            if self.pm_type == "npm":
                cmd = ["npm", "update", f"{package_name}@{version}"]
            elif self.pm_type == "pip":
                cmd = ["pip", "install", "--upgrade", f"{package_name}=={version}"]
            else:
                raise ValueError(f"Unsupported package manager: {self.pm_type}")
            
            subprocess.run(cmd, check=True)
            return True
        except subprocess.CalledProcessError as e:
            print(f"❌ Error updating package: {e}")
            return False
    
    def check(self, framework: str, path: str, current_version: str) -> Dict[str, Any]:
        """Check for available updates.
        
        Args:
            framework: Framework name
            path: Framework path (not used)
            current_version: Current installed version
            
        Returns:
            Dictionary with update information
        """
        # TODO: Implement version checking via package manager
        return {
            "current": current_version,
            "latest": current_version,  # Placeholder
            "update_available": False,
            "backend": f"package-manager-{self.pm_type}"
        }
    
    def status(self, framework: str, path: str) -> Dict[str, Any]:
        """Get package status.
        
        Args:
            framework: Framework name
            path: Framework path (not used)
            
        Returns:
            Dictionary with status information
        """
        try:
            package_name = self._get_package_name(framework)
            
            if self.pm_type == "npm":
                cmd = ["npm", "list", package_name, "--depth=0"]
            elif self.pm_type == "pip":
                cmd = ["pip", "show", package_name]
            else:
                raise ValueError(f"Unsupported package manager: {self.pm_type}")
            
            result = subprocess.run(cmd, capture_output=True, text=True)
            
            version = "unknown"
            if result.returncode == 0:
                # Parse version from output (simplified)
                for line in result.stdout.split("\n"):
                    if "version" in line.lower():
                        parts = line.split()
                        if len(parts) > 1:
                            version = parts[-1]
                            break
            
            return {
                "exists": result.returncode == 0,
                "version": version,
                "backend": f"package-manager-{self.pm_type}",
                "package": package_name
            }
        except Exception as e:
            return {
                "exists": False,
                "error": str(e),
                "backend": f"package-manager-{self.pm_type}"
            }
    
    def remove(self, framework: str, path: str, keep_files: bool = False) -> bool:
        """Remove framework package.
        
        Args:
            framework: Framework name
            path: Framework path (not used)
            keep_files: Whether to keep framework files (not applicable)
            
        Returns:
            True if removal successful
        """
        try:
            package_name = self._get_package_name(framework)
            
            if self.pm_type == "npm":
                cmd = ["npm", "uninstall", package_name]
            elif self.pm_type == "pip":
                cmd = ["pip", "uninstall", "-y", package_name]
            else:
                raise ValueError(f"Unsupported package manager: {self.pm_type}")
            
            subprocess.run(cmd, check=True)
            return True
        except subprocess.CalledProcessError as e:
            print(f"❌ Error removing package: {e}")
            return False

