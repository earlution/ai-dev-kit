"""
Utility Functions for Vibe Dev Kit CLI
"""

import re
from typing import Tuple, Optional


def parse_framework_spec(spec: str) -> Tuple[str, Optional[str]]:
    """Parse framework specification string.
    
    Args:
        spec: Framework specification (e.g., "numbering-versioning@2.0.0")
        
    Returns:
        Tuple of (framework_name, version)
    """
    match = re.match(r"^([^@]+)(?:@(.+))?$", spec)
    if not match:
        raise ValueError(f"Invalid framework specification: {spec}")
    
    framework_name = match.group(1)
    version = match.group(2) if match.group(2) else None
    
    return framework_name, version


def normalize_framework_name(name: str) -> str:
    """Normalize framework name to match directory structure.
    
    Args:
        name: Framework name (e.g., "numbering-versioning")
        
    Returns:
        Normalized framework name (e.g., "numbering & versioning")
    """
    # Map CLI names to directory names
    name_mapping = {
        "numbering-versioning": "numbering & versioning",
        "workflow-mgt": "workflow mgt",
        "workflow-management": "workflow mgt",
    }
    
    return name_mapping.get(name, name)


def denormalize_framework_name(name: str) -> str:
    """Convert directory name to CLI-friendly name.
    
    Args:
        name: Framework directory name (e.g., "numbering & versioning")
        
    Returns:
        CLI-friendly name (e.g., "numbering-versioning")
    """
    # Map directory names to CLI names
    name_mapping = {
        "numbering & versioning": "numbering-versioning",
        "workflow mgt": "workflow-mgt",
    }
    
    return name_mapping.get(name, name.replace(" ", "-"))


def get_framework_path(framework_name: str, base_path: str = "frameworks/vibe-dev-kit") -> str:
    """Get framework installation path.
    
    Args:
        framework_name: Framework name
        base_path: Base installation path
        
    Returns:
        Full framework path
    """
    normalized = normalize_framework_name(framework_name)
    return f"{base_path}/packages/frameworks/{normalized}"

