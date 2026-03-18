"""
Unit tests for validation functions.
"""

import pytest
from cli.validation import (
    validate_framework_name,
    validate_framework_spec,
    validate_backend,
    validate_version,
)


class TestFrameworkValidation:
    """Tests for framework validation."""
    
    def test_validate_framework_name_valid(self):
        """Test validating valid framework names."""
        assert validate_framework_name("workflow-mgmt") is True
        assert validate_framework_name("kanban") is True
        assert validate_framework_name("numbering-versioning") is True
    
    def test_validate_framework_name_invalid(self):
        """Test validating invalid framework names."""
        # Empty name
        result = validate_framework_name("")
        assert result is False
        
        # Name with spaces
        result = validate_framework_name("workflow mgmt")
        assert result is False
    
    def test_validate_framework_spec(self):
        """Test validating framework specification."""
        name, version = validate_framework_spec("workflow-mgmt")
        assert name == "workflow-mgmt"
        assert version is None
        
        name, version = validate_framework_spec("workflow-mgmt@2.0.0")
        assert name == "workflow-mgmt"
        assert version == "2.0.0"
    
    def test_validate_backend(self):
        """Test validating backend names."""
        assert validate_backend("git-submodule") is True
        assert validate_backend("git-subtree") is True
        assert validate_backend("npm") is True
        assert validate_backend("pip") is True
        assert validate_backend("invalid") is False
    
    def test_validate_version(self):
        """Test validating version strings."""
        assert validate_version("2.0.0") is True
        assert validate_version("1.0.0") is True
        assert validate_version("latest") is True
        assert validate_version("") is False

