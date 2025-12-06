"""
Backend Implementations for Framework Dependency Management

Supports multiple backends: Git submodules, Git subtrees, and package managers.
"""

from cli.backends.base import BaseBackend
from cli.backends.git_submodule import GitSubmoduleBackend
from cli.backends.git_subtree import GitSubtreeBackend
from cli.backends.package_manager import PackageManagerBackend

__all__ = [
    "BaseBackend",
    "GitSubmoduleBackend",
    "GitSubtreeBackend",
    "PackageManagerBackend",
]

