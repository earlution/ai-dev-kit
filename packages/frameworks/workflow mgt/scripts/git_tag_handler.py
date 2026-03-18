#!/usr/bin/env python3
"""
Git Tag Handler for Release Workflow

Supports dual tag strategy for both registry and task-touch SemVer mapping.
Creates appropriate tags based on semver_mapping_strategy configuration.

Supports:
- Registry mode: Creates internal version tags (v0.5.1.48+1)
- Task-touch mode: Creates SemVer tags (v0.5.39+1) with optional internal tags
- Auto-detection: Reads strategy from rw-config.yaml
"""

import subprocess
import yaml
import sys
import os
from pathlib import Path
from typing import Dict, Any, Optional, Tuple

# Add version scripts to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'version'))
try:
    from semver_converter import convert_version_string, get_semver_mapping_strategy
except ImportError:
    print("⚠️  Warning: semver_converter not available")
    convert_version_string = None
    get_semver_mapping_strategy = None


class GitTagHandler:
    """Handles git tag creation with dual strategy support."""
    
    def __init__(self, config: Dict[str, Any]):
        """Initialize with configuration."""
        self.config = config
        self.detect_strategy = config.get('detect_semver_strategy', True)
        self.create_internal_tag = config.get('create_internal_tag', False)
        self.strategy = config.get('semver_mapping_strategy', 'auto')
        
    def load_rw_config(self) -> Dict[str, Any]:
        """Load RW configuration from rw-config.yaml."""
        config_paths = [
            Path('rw-config.yaml'),
            Path('config/rw-config.yaml'),
            Path('packages/frameworks/workflow mgt/config/rw-config.yaml')
        ]
        
        for config_path in config_paths:
            if config_path.exists():
                try:
                    with open(config_path, 'r', encoding='utf-8') as f:
                        return yaml.safe_load(f) or {}
                except Exception as e:
                    print(f"⚠️  Warning: Failed to load {config_path}: {e}")
        
        return {}
    
    def get_semver_strategy(self) -> str:
        """Get SemVer mapping strategy."""
        if self.strategy != 'auto':
            return self.strategy
            
        # Try to get from semver_converter
        if get_semver_mapping_strategy:
            try:
                return get_semver_mapping_strategy()
            except Exception:
                pass
        
        # Fallback to rw-config.yaml
        rw_config = self.load_rw_config()
        return rw_config.get('semver_mapping_strategy', 'registry')
    
    def convert_to_semver(self, internal_version: str) -> Optional[str]:
        """Convert internal version to SemVer."""
        if not convert_version_string:
            return None
            
        try:
            strategy = self.get_semver_strategy()
            return convert_version_string(internal_version, strategy=strategy)
        except Exception as e:
            print(f"⚠️  Warning: Failed to convert {internal_version} to SemVer: {e}")
            return None
    
    def create_tag(self, tag_name: str, message: str, annotated: bool = True) -> bool:
        """Create a git tag."""
        try:
            cmd = ['git', 'tag']
            if annotated:
                cmd.extend(['-a', tag_name, '-m', message])
            else:
                cmd.extend([tag_name, '-m', message])
            
            result = subprocess.run(cmd, capture_output=True, text=True, check=True)
            print(f"✅ Created tag: {tag_name}")
            return True
            
        except subprocess.CalledProcessError as e:
            print(f"❌ Failed to create tag {tag_name}: {e}")
            print(f"   Error output: {e.stderr}")
            return False
    
    def create_tags(self, internal_version: str, summary: str) -> Tuple[bool, Dict[str, str]]:
        """Create tags based on strategy."""
        strategy = self.get_semver_strategy()
        semver_version = self.convert_to_semver(internal_version)
        
        results = {
            'strategy': strategy,
            'internal_version': internal_version,
            'semver_version': semver_version,
            'tags_created': [],
            'primary_tag': None
        }
        
        # Determine primary tag
        if strategy == 'task_touch' and semver_version:
            primary_tag = f"v{semver_version}"
            internal_tag = f"v{internal_version}" if self.create_internal_tag else None
        else:
            primary_tag = f"v{internal_version}"
            internal_tag = None
        
        # Create primary tag
        message = f"Release {primary_tag}: {summary}"
        if self.create_tag(primary_tag, message):
            results['tags_created'].append(primary_tag)
            results['primary_tag'] = primary_tag
        else:
            return False, results
        
        # Create optional internal tag
        if internal_tag and internal_tag != primary_tag:
            internal_message = f"Internal tag for {primary_tag}: {summary}"
            if self.create_tag(internal_tag, internal_message):
                results['tags_created'].append(internal_tag)
        
        return True, results
    
    def validate_tag_format(self, tag_name: str) -> bool:
        """Validate tag format."""
        if not tag_name.startswith('v'):
            return False
        
        # Remove 'v' prefix and validate
        version_part = tag_name[1:]
        
        # Check for valid SemVer format (X.Y.Z or X.Y.Z+BUILD)
        parts = version_part.split('+')
        if len(parts) > 2:
            return False
        
        # Validate main version part
        main_parts = parts[0].split('.')
        if len(main_parts) != 3:
            return False
        
        try:
            int(main_parts[0])
            int(main_parts[1])
            int(main_parts[2])
        except ValueError:
            return False
        
        return True


def main():
    """Main execution function."""
    if len(sys.argv) < 3:
        print("Usage: git_tag_handler.py <internal_version> <summary> [config_json]")
        print("Example: git_tag_handler.py '0.5.1.48+1' 'Release summary' '{\"detect_semver_strategy\": true}'")
        sys.exit(1)
    
    internal_version = sys.argv[1]
    summary = sys.argv[2]
    
    # Parse configuration
    config = {}
    if len(sys.argv) > 3:
        try:
            config = json.loads(sys.argv[3])
        except json.JSONDecodeError as e:
            print(f"❌ Invalid configuration JSON: {e}")
            sys.exit(1)
    
    # Create handler and create tags
    handler = GitTagHandler(config)
    
    print(f"🏷️  Creating tags for version {internal_version}")
    print(f"📝 Summary: {summary}")
    print(f"⚙️  Strategy: {handler.get_semver_strategy()}")
    
    success, results = handler.create_tags(internal_version, summary)
    
    if success:
        print("✅ Tag creation successful!")
        print(f"📊 Results: {results}")
        sys.exit(0)
    else:
        print("❌ Tag creation failed!")
        sys.exit(1)


if __name__ == "__main__":
    import json
    main()
