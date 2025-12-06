"""
Configuration Management for Vibe Dev Kit CLI

Manages `.vibe-dev-kit.yaml` configuration file.
"""

import yaml
from pathlib import Path
from typing import Dict, Optional, Any


class Config:
    """Configuration manager for framework dependencies."""
    
    CONFIG_FILE = ".vibe-dev-kit.yaml"
    DEFAULT_BACKEND = "git-submodule"
    DEFAULT_SOURCE = "https://github.com/earlution/vibe-dev-kit.git"
    
    def __init__(self, project_root: Optional[Path] = None):
        """Initialize configuration manager.
        
        Args:
            project_root: Project root directory (defaults to current directory)
        """
        if project_root is None:
            project_root = Path.cwd()
        self.project_root = Path(project_root).resolve()
        self.config_path = self.project_root / self.CONFIG_FILE
    
    def load(self) -> Dict[str, Any]:
        """Load configuration from file.
        
        Returns:
            Configuration dictionary
        """
        if not self.config_path.exists():
            return {
                "version": "1.0.0",
                "default_backend": self.DEFAULT_BACKEND,
                "frameworks": {}
            }
        
        with open(self.config_path, "r") as f:
            return yaml.safe_load(f) or {}
    
    def save(self, config: Dict[str, Any]) -> None:
        """Save configuration to file.
        
        Args:
            config: Configuration dictionary
        """
        # Ensure default values
        if "version" not in config:
            config["version"] = "1.0.0"
        if "default_backend" not in config:
            config["default_backend"] = self.DEFAULT_BACKEND
        if "frameworks" not in config:
            config["frameworks"] = {}
        
        with open(self.config_path, "w") as f:
            yaml.dump(config, f, default_flow_style=False, sort_keys=False)
    
    def get_framework(self, framework_name: str) -> Optional[Dict[str, Any]]:
        """Get framework configuration.
        
        Args:
            framework_name: Framework name
            
        Returns:
            Framework configuration or None
        """
        config = self.load()
        return config.get("frameworks", {}).get(framework_name)
    
    def add_framework(self, framework_name: str, framework_config: Dict[str, Any]) -> None:
        """Add or update framework configuration.
        
        Args:
            framework_name: Framework name
            framework_config: Framework configuration
        """
        config = self.load()
        if "frameworks" not in config:
            config["frameworks"] = {}
        config["frameworks"][framework_name] = framework_config
        self.save(config)
    
    def remove_framework(self, framework_name: str) -> None:
        """Remove framework configuration.
        
        Args:
            framework_name: Framework name
        """
        config = self.load()
        if "frameworks" in config and framework_name in config["frameworks"]:
            del config["frameworks"][framework_name]
            self.save(config)
    
    def list_frameworks(self) -> Dict[str, Dict[str, Any]]:
        """List all configured frameworks.
        
        Returns:
            Dictionary of framework configurations
        """
        config = self.load()
        return config.get("frameworks", {})

