"""
Utility functions for the ai-dev-kit CLI tool.
"""

import sys
from pathlib import Path
from typing import Optional


def get_project_root() -> Optional[Path]:
    """
    Find the project root by looking for .ai-dev-kit.yaml or .git directory.
    
    Returns:
        Path to project root, or None if not found
    """
    current = Path.cwd()
    
    # Check current directory and parent directories
    for path in [current] + list(current.parents):
        if (path / ".ai-dev-kit.yaml").exists() or (path / ".git").exists():
            return path
    
    return None


def print_error(message: str) -> None:
    """Print an error message to stderr."""
    print(f"❌ Error: {message}", file=sys.stderr)


def print_success(message: str) -> None:
    """Print a success message to stdout."""
    print(f"✅ {message}")


def print_warning(message: str) -> None:
    """Print a warning message to stdout."""
    print(f"⚠️  Warning: {message}")


def print_info(message: str) -> None:
    """Print an info message to stdout."""
    print(f"ℹ️  {message}")

