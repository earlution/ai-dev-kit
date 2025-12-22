"""
Backend implementations for framework dependency management.

This package contains backend implementations for different dependency management
systems (Git submodules, Git subtrees, package managers, etc.).
"""

from typing import Protocol, Optional
from pathlib import Path


class Backend(Protocol):
    """
    Protocol for backend implementations.
    
    All backends must implement these methods.
    """
    
    def install(self, framework: str, version: str, path: Path) -> bool:
        """
        Install a framework using this backend.
        
        Args:
            framework: Framework name
            version: Framework version
            path: Installation path
        
        Returns:
            True if installation succeeded, False otherwise
        """
        ...
    
    def update(self, framework: str, version: str, path: Path) -> bool:
        """
        Update a framework to a new version.
        
        Args:
            framework: Framework name
            version: Target version
            path: Installation path
        
        Returns:
            True if update succeeded, False otherwise
        """
        ...
    
    def check(self, framework: str, path: Path) -> Optional[str]:
        """
        Check for available updates.
        
        Args:
            framework: Framework name
            path: Installation path
        
        Returns:
            Latest available version, or None if up to date or error
        """
        ...
    
    def status(self, framework: str, path: Path) -> dict:
        """
        Get status information for a framework.
        
        Args:
            framework: Framework name
            path: Installation path
        
        Returns:
            Dictionary with status information (version, backend, etc.)
        """
        ...
    
    def remove(self, framework: str, path: Path, keep_files: bool = False) -> bool:
        """
        Remove a framework dependency.
        
        Args:
            framework: Framework name
            path: Installation path
            keep_files: If True, keep framework files but remove dependency tracking
        
        Returns:
            True if removal succeeded, False otherwise
        """
        ...

