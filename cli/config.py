"""
Configuration management for the ai-dev-kit CLI tool.

Handles reading and writing of .ai-dev-kit.yaml configuration files.
"""

import yaml
from pathlib import Path
from typing import Dict, Optional, Any
from cli.utils import get_project_root, print_error


CONFIG_FILENAME = ".ai-dev-kit.yaml"


class Config:
    """
    Configuration manager for ai-dev-kit.
    
    Manages the .ai-dev-kit.yaml configuration file.
    """
    
    def __init__(self, config_path: Optional[Path] = None):
        """
        Initialize configuration manager.
        
        Args:
            config_path: Path to configuration file. If None, searches for .ai-dev-kit.yaml
                         in project root.
        """
        if config_path is None:
            project_root = get_project_root()
            if project_root:
                config_path = project_root / CONFIG_FILENAME
            else:
                config_path = Path.cwd() / CONFIG_FILENAME
        
        self.config_path = config_path
        self._config: Dict[str, Any] = {}
        self.load()
    
    def load(self) -> None:
        """Load configuration from file."""
        if self.config_path.exists():
            try:
                with open(self.config_path, 'r', encoding='utf-8') as f:
                    self._config = yaml.safe_load(f) or {}
            except Exception as e:
                print_error(f"Failed to load configuration: {e}")
                self._config = {}
        else:
            self._config = {
                "version": "1.0.0",
                "default_backend": "git-submodule",
                "frameworks": {},
            }
    
    def save(self) -> None:
        """Save configuration to file."""
        try:
            # Ensure directory exists
            self.config_path.parent.mkdir(parents=True, exist_ok=True)
            
            with open(self.config_path, 'w', encoding='utf-8') as f:
                yaml.dump(self._config, f, default_flow_style=False, sort_keys=False)
        except Exception as e:
            print_error(f"Failed to save configuration: {e}")
            raise
    
    def get(self, key: str, default: Any = None) -> Any:
        """
        Get a configuration value.
        
        Args:
            key: Configuration key (supports dot notation, e.g., 'frameworks.workflow-mgt.version')
            default: Default value if key not found
        
        Returns:
            Configuration value or default
        """
        keys = key.split('.')
        value = self._config
        
        for k in keys:
            if isinstance(value, dict) and k in value:
                value = value[k]
            else:
                return default
        
        return value
    
    def set(self, key: str, value: Any) -> None:
        """
        Set a configuration value.
        
        Args:
            key: Configuration key (supports dot notation)
            value: Value to set
        """
        keys = key.split('.')
        config = self._config
        
        # Navigate/create nested structure
        for k in keys[:-1]:
            if k not in config:
                config[k] = {}
            config = config[k]
        
        # Set final value
        config[keys[-1]] = value
    
    def get_frameworks(self) -> Dict[str, Any]:
        """Get all configured frameworks."""
        return self._config.get("frameworks", {})
    
    def add_framework(self, name: str, version: str, backend: str, path: str, **kwargs) -> None:
        """
        Add a framework to the configuration.
        
        Args:
            name: Framework name
            version: Framework version
            backend: Dependency backend
            path: Installation path
            **kwargs: Additional framework metadata
        """
        if "frameworks" not in self._config:
            self._config["frameworks"] = {}
        
        self._config["frameworks"][name] = {
            "version": version,
            "backend": backend,
            "path": path,
            **kwargs,
        }
    
    def remove_framework(self, name: str) -> bool:
        """
        Remove a framework from the configuration.
        
        Args:
            name: Framework name
        
        Returns:
            True if framework was removed, False if not found
        """
        if "frameworks" in self._config and name in self._config["frameworks"]:
            del self._config["frameworks"][name]
            return True
        return False

