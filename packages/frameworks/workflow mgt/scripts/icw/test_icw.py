#!/usr/bin/env python3
"""
Test script for Implementation Cycle Workflow (ICW)
Validates the basic functionality of the ICW handler
"""

import os
import sys
import json
import tempfile
import shutil
from pathlib import Path

# Add the ICW handler to the path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from icw_handler import ICWHandler

def test_icw_basic():
    """Test basic ICW functionality"""
    print("🧪 Testing ICW Basic Functionality")
    
    # Create temporary directory for testing
    with tempfile.TemporaryDirectory() as temp_dir:
        # Create test config with correct paths
        test_config = {
            'paths': {
                'templates_dir': '/Users/rms/Documents/projects/ai-dev-kit/packages/frameworks/workflow mgt/templates/icw',
                'output_dir': temp_dir,
                'scripts_dir': '.',
                'kanban_root': '/Users/rms/Documents/projects/ai-dev-kit/docs/project-management/kanban'
            },
            'templates': {
                'specification': {'file': 'specification-template.md'},
                'test_design': {'file': 'test-design-template.md'},
                'implementation_plan': {'file': 'implementation-plan-template.md'}
            }
        }
        
        # Save test config
        config_file = Path(temp_dir) / 'icw-config.yaml'
        import yaml
        with open(config_file, 'w') as f:
            yaml.dump(test_config, f)
        
        # Initialize ICW handler
        handler = ICWHandler(str(config_file))
        
        # Test parameters
        test_params = {
            'implementation_title': 'Test Implementation',
            'problem_context': 'This is a test implementation for validation',
            'scope': 'feature',
            'priority': 'medium',
            'stakeholders': 'Test Team',
            'constraints': 'Test constraints only',
            'existing_documentation': 'N/A'
        }
        
        # Test Step 1: Initialize
        print("📋 Step 1: Initialize Cycle")
        result = handler.initialize_cycle(test_params)
        assert result['success'], f"Initialize failed: {result}"
        cycle_id = result['cycle_id']
        print(f"✅ Cycle initialized: {cycle_id}")
        
        # Test Step 2: Specification Definition
        print("📋 Step 2: Specification Definition")
        result = handler.specification_definition(test_params)
        assert result['success'], f"Specification failed: {result}"
        print(f"✅ Specification created: {result['output_file']}")
        
        # Test Step 3: Test Design
        print("📋 Step 3: Test Design")
        result = handler.test_design(test_params)
        assert result['success'], f"Test design failed: {result}"
        print(f"✅ Test design created: {result['output_file']}")
        
        # Test Step 4: Implementation Planning
        print("📋 Step 4: Implementation Planning")
        result = handler.implementation_planning(test_params)
        assert result['success'], f"Implementation planning failed: {result}"
        print(f"✅ Implementation plan created: {result['output_file']}")
        
        # Test Step 5: Generate Package
        print("📋 Step 5: Generate Package")
        result = handler.generate_package(test_params)
        assert result['success'], f"Package generation failed: {result}"
        print(f"✅ Package generated: {result['package_summary']}")
        
        # Test Step 6: Quality Validation
        print("📋 Step 6: Quality Validation")
        result = handler.validate_quality(test_params)
        assert result['success'], f"Quality validation failed: {result}"
        print("✅ Quality validation passed")
        
        # Test Step 7: Archive Cycle
        print("📋 Step 7: Archive Cycle")
        result = handler.archive_cycle(test_params)
        assert result['success'], f"Archive failed: {result}"
        print(f"✅ Cycle archived: {result['cycle_id']}")
        
        # Verify output files exist
        output_files = list(Path(temp_dir).glob(f"{cycle_id}*.md"))
        assert len(output_files) >= 4, f"Expected at least 4 output files, got {len(output_files)}"
        
        print(f"✅ Generated {len(output_files)} output files:")
        for file in output_files:
            print(f"  - {file.name}")
        
        print("🎉 All ICW tests passed!")
        return True

def test_template_processing():
    """Test template processing functionality"""
    print("🧪 Testing Template Processing")
    
    # Create temporary directory for testing
    with tempfile.TemporaryDirectory() as temp_dir:
        # Create test template
        test_template = """# Test Template for {{implementation_title}}

**Date:** {{current_date}}
**Cycle:** {{cycle_id}}

## Problem
{{problem_context}}

## Scope
{{scope}}

## Priority
{{priority}}
"""
        
        # Save test template
        template_file = Path(temp_dir) / 'test-template.md'
        with open(template_file, 'w') as f:
            f.write(test_template)
        
        # Create test config
        test_config = {
            'paths': {
                'templates_dir': temp_dir,
                'output_dir': temp_dir,
                'scripts_dir': '.',
                'kanban_root': '.'
            },
            'templates': {
                'specification': {'file': 'test-template.md'}
            }
        }
        
        # Save test config
        config_file = Path(temp_dir) / 'icw-config.yaml'
        import yaml
        with open(config_file, 'w') as f:
            yaml.dump(test_config, f)
        
        # Initialize ICW handler
        handler = ICWHandler(str(config_file))
        
        # Initialize cycle
        test_params = {
            'implementation_title': 'Template Test',
            'problem_context': 'Testing template processing',
            'scope': 'test',
            'priority': 'high'
        }
        
        result = handler.initialize_cycle(test_params)
        assert result['success'], f"Initialize failed: {result}"
        
        # Process template
        processed = handler._process_template(test_template, test_params)
        
        # Verify template processing
        assert "{{implementation_title}}" not in processed, "Template variable not replaced"
        assert "Template Test" in processed, "Title not found in processed template"
        assert "Testing template processing" in processed, "Problem context not found"
        assert "test" in processed, "Scope not found"
        assert "high" in processed, "Priority not found"
        
        print("✅ Template processing test passed!")
        return True

def main():
    """Run all ICW tests"""
    print("🚀 Starting ICW Tests")
    
    try:
        # Test basic functionality
        test_icw_basic()
        
        # Test template processing
        test_template_processing()
        
        print("\n🎉 All ICW tests completed successfully!")
        return True
        
    except Exception as e:
        print(f"\n❌ ICW test failed: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
