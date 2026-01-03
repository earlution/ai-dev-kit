"""
Unit tests for backend implementations.
"""

import pytest
from pathlib import Path
from unittest.mock import patch, MagicMock

from cli.backends.base import BackendBase
from cli.backends.git_submodule import GitSubmoduleBackend
from cli.backends.git_subtree import GitSubtreeBackend
from cli.backends.package_manager import PackageManagerBackend


class TestBackendBase:
    """Tests for BackendBase abstract class."""
    
    def test_backend_base_interface(self):
        """Test that BackendBase defines required interface."""
        # BackendBase should be abstract
        with pytest.raises(TypeError):
            BackendBase("test", "Test backend")


class TestGitSubmoduleBackend:
    """Tests for Git submodule backend."""
    
    def test_git_submodule_backend_initialization(self):
        """Test Git submodule backend initialization."""
        backend = GitSubmoduleBackend()
        assert backend.name == "git-submodule"
        assert backend.description == "Git submodule backend for framework dependencies"
    
    @patch('cli.backends.git_submodule.subprocess.run')
    def test_git_submodule_is_available(self, mock_run):
        """Test checking if Git submodule backend is available."""
        mock_run.return_value = MagicMock(returncode=0)
        backend = GitSubmoduleBackend()
        assert backend.is_available() is True
    
    @patch('cli.backends.git_submodule.subprocess.run')
    def test_git_submodule_is_not_available(self, mock_run):
        """Test when Git is not available."""
        mock_run.side_effect = FileNotFoundError()
        backend = GitSubmoduleBackend()
        assert backend.is_available() is False


class TestGitSubtreeBackend:
    """Tests for Git subtree backend."""
    
    def test_git_subtree_backend_initialization(self):
        """Test Git subtree backend initialization."""
        backend = GitSubtreeBackend()
        assert backend.name == "git-subtree"
        assert backend.description == "Git subtree backend for framework dependencies"
    
    @patch('cli.backends.git_subtree.subprocess.run')
    def test_git_subtree_is_available(self, mock_run):
        """Test checking if Git subtree backend is available."""
        mock_run.return_value = MagicMock(returncode=0)
        backend = GitSubtreeBackend()
        assert backend.is_available() is True


class TestPackageManagerBackend:
    """Tests for package manager backend."""
    
    def test_package_manager_backend_initialization(self):
        """Test package manager backend initialization."""
        backend = PackageManagerBackend("npm")
        assert backend.name == "npm"
        assert "npm" in backend.description.lower()
    
    @patch('cli.backends.package_manager.subprocess.run')
    def test_npm_backend_is_available(self, mock_run):
        """Test checking if npm backend is available."""
        mock_run.return_value = MagicMock(returncode=0)
        backend = PackageManagerBackend("npm")
        assert backend.is_available() is True
    
    @patch('cli.backends.package_manager.subprocess.run')
    def test_pip_backend_is_available(self, mock_run):
        """Test checking if pip backend is available."""
        mock_run.return_value = MagicMock(returncode=0)
        backend = PackageManagerBackend("pip")
        assert backend.is_available() is True

