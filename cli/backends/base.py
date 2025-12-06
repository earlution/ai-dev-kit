"""
Base Backend Interface

Abstract base class for all dependency backends.
"""

from abc import ABC, abstractmethod
from typing import Dict, Optional, Any


class BaseBackend(ABC):
    """Base class for dependency backends."""
    
    def __init__(self, config: Optional[Dict[str, Any]] = None):
        """Initialize backend.
        
        Args:
            config: Backend-specific configuration
        """
        self.config = config or {}
    
    @abstractmethod
    def install(self, framework: str, version: str, path: str, source: str, **kwargs) -> bool:
        """Install framework as dependency.
        
        Args:
            framework: Framework name
            version: Framework version
            path: Installation path
            source: Source repository URL
            **kwargs: Additional backend-specific options
            
        Returns:
            True if installation successful
        """
        pass
    
    @abstractmethod
    def update(self, framework: str, version: str, path: str, **kwargs) -> bool:
        """Update framework to new version.
        
        Args:
            framework: Framework name
            version: Target version
            path: Framework path
            **kwargs: Additional backend-specific options
            
        Returns:
            True if update successful
        """
        pass
    
    @abstractmethod
    def check(self, framework: str, path: str, current_version: str) -> Dict[str, Any]:
        """Check for available updates.
        
        Args:
            framework: Framework name
            path: Framework path
            current_version: Current installed version
            
        Returns:
            Dictionary with update information
        """
        pass
    
    @abstractmethod
    def status(self, framework: str, path: str) -> Dict[str, Any]:
        """Get framework status.
        
        Args:
            framework: Framework name
            path: Framework path
            
        Returns:
            Dictionary with status information
        """
        pass
    
    @abstractmethod
    def remove(self, framework: str, path: str, keep_files: bool = False) -> bool:
        """Remove framework dependency.
        
        Args:
            framework: Framework name
            path: Framework path
            keep_files: Whether to keep framework files
            
        Returns:
            True if removal successful
        """
        pass

