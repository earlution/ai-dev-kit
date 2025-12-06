#!/usr/bin/env python3
"""
Framework Version Management Health Checker

Checks version management health for framework packages according to
framework health metrics definition.

Usage:
    python3 check-versioning.py <framework_path>
    python3 check-versioning.py packages/frameworks/workflow\ mgt/
"""

import os
import sys
import json
import re
import subprocess
from pathlib import Path
from typing import Dict, Optional

# SemVer pattern
SEMVER_PATTERN = re.compile(r'^(\d+)\.(\d+)\.(\d+)(?:-([\w\-]+))?(?:\+([\w\-]+))?$')


def check_version_in_readme(framework_path: Path) -> Optional[str]:
    """Extract version from README.md."""
    readme_path = framework_path / 'README.md'
    if not readme_path.exists():
        return None
    
    content = readme_path.read_text(encoding='utf-8', errors='ignore')
    
    # Look for version patterns
    patterns = [
        r'version[:\s]+([\d\.]+)',
        r'Version[:\s]+([\d\.]+)',
        r'v([\d\.]+)',
        r'**Version:**\s*([\d\.]+)',
    ]
    
    for pattern in patterns:
        match = re.search(pattern, content, re.IGNORECASE)
        if match:
            return match.group(1)
    
    return None


def check_version_format(version: str) -> bool:
    """Check if version follows SemVer format."""
    return bool(SEMVER_PATTERN.match(version))


def check_git_tags(framework_path: Path) -> Dict:
    """Check Git tags for the framework."""
    # Note: This checks tags in the current repo, not framework-specific tags
    # For framework-specific tags, we'd need to check the framework's Git history
    # or a separate tagging system
    
    try:
        # Get all tags
        result = subprocess.run(
            ['git', 'tag', '--list'],
            capture_output=True,
            text=True,
            cwd=framework_path.parent.parent.parent,  # Go to repo root
            timeout=5
        )
        
        tags = result.stdout.strip().split('\n') if result.stdout.strip() else []
        
        # Filter tags that might be related to this framework
        framework_name = framework_path.name
        framework_tags = [t for t in tags if framework_name.lower() in t.lower() or 'v' in t]
        
        return {
            'has_tags': len(tags) > 0,
            'tag_count': len(tags),
            'framework_tags': len(framework_tags),
            'tags': tags[:10],  # First 10 tags
        }
    except Exception as e:
        return {
            'has_tags': False,
            'tag_count': 0,
            'framework_tags': 0,
            'error': str(e),
        }


def check_changelog(framework_path: Path) -> Dict:
    """Check for changelog or release notes."""
    changelog_files = [
        'CHANGELOG.md',
        'CHANGELOG.txt',
        'RELEASE_NOTES.md',
        'RELEASES.md',
        'HISTORY.md',
    ]
    
    for changelog_file in changelog_files:
        changelog_path = framework_path / changelog_file
        if changelog_path.exists():
            content = changelog_path.read_text(encoding='utf-8', errors='ignore')
            size = changelog_path.stat().st_size
            
            return {
                'exists': True,
                'filename': changelog_file,
                'size': size,
                'has_content': len(content.strip()) > 100,
                'has_versions': bool(re.search(r'v?[\d\.]+', content)),
            }
    
    return {
        'exists': False,
    }


def check_version_tracking(framework_path: Path) -> Dict:
    """Check for version tracking files."""
    version_files = [
        'version.py',
        'version.txt',
        'VERSION',
        '.version',
    ]
    
    for version_file in version_files:
        version_path = framework_path / version_file
        if version_path.exists():
            content = version_path.read_text(encoding='utf-8', errors='ignore')
            
            # Try to extract version
            version_match = re.search(r'[\d\.]+', content)
            version = version_match.group(0) if version_match else None
            
            return {
                'exists': True,
                'filename': version_file,
                'version': version,
                'is_semver': check_version_format(version) if version else False,
            }
    
    return {
        'exists': False,
    }


def check_versioning(framework_path: str) -> Dict:
    """Check version management health for a framework."""
    framework_path = Path(framework_path)
    
    if not framework_path.exists():
        return {
            'error': f'Framework path does not exist: {framework_path}',
            'score': 0
        }
    
    results = {
        'framework_path': str(framework_path),
        'version_tracked': False,
        'version_format': None,
        'release_tagged': False,
        'changelog': False,
        'version_history': False,
        'latest_version': None,
        'score': 0,
    }
    
    # Check version tracking
    version_tracking = check_version_tracking(framework_path)
    if version_tracking.get('exists'):
        results['version_tracked'] = True
        results['latest_version'] = version_tracking.get('version')
        results['version_format'] = 'semver' if version_tracking.get('is_semver') else 'unknown'
    
    # Check README for version
    readme_version = check_version_in_readme(framework_path)
    if readme_version:
        results['latest_version'] = readme_version
        results['version_format'] = 'semver' if check_version_format(readme_version) else 'unknown'
        if not results['version_tracked']:
            results['version_tracked'] = True
    
    # Check Git tags
    git_tags = check_git_tags(framework_path)
    results['release_tagged'] = git_tags.get('has_tags', False)
    results['tag_count'] = git_tags.get('tag_count', 0)
    
    # Check changelog
    changelog = check_changelog(framework_path)
    results['changelog'] = changelog.get('exists', False)
    results['changelog_has_content'] = changelog.get('has_content', False)
    
    # Calculate score
    score = 0
    
    # Version tracked: 30 points
    if results['version_tracked']:
        score += 30
    
    # Version format: 20 points (SemVer)
    if results['version_format'] == 'semver':
        score += 20
    elif results['version_format']:
        score += 10
    
    # Release tagged: 20 points
    if results['release_tagged']:
        score += 20
    
    # Changelog: 20 points
    if results['changelog']:
        score += 20
        if results.get('changelog_has_content'):
            score += 10  # Bonus for content
    
    # Cap at 100
    results['score'] = min(100, score)
    
    return results


def main():
    """Main entry point."""
    if len(sys.argv) < 2:
        print("Usage: python3 check-versioning.py <framework_path>")
        sys.exit(1)
    
    framework_path = sys.argv[1]
    results = check_versioning(framework_path)
    
    # Output as JSON
    print(json.dumps(results, indent=2))
    
    # Exit with error code if score is low
    if results.get('score', 0) < 50:
        sys.exit(1)


if __name__ == '__main__':
    main()

