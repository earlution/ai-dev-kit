#!/usr/bin/env python3
"""
Framework Maintenance Health Checker

Checks maintenance status for framework packages according to
framework health metrics definition.

Usage:
    python3 check-maintenance.py <framework_path>
    python3 check-maintenance.py packages/frameworks/workflow\ mgt/
"""

import os
import sys
import json
import subprocess
from pathlib import Path
from datetime import datetime, timedelta
from typing import Dict, Optional

# Maintenance status levels
MAINTENANCE_ACTIVE = 'active'
MAINTENANCE_MODE = 'maintenance_mode'
MAINTENANCE_DEPRECATED = 'deprecated'


def get_last_commit_date(framework_path: Path) -> Optional[datetime]:
    """Get the date of the last commit affecting the framework."""
    try:
        # Get the last commit date for files in this directory
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%ai', '--', str(framework_path)],
            capture_output=True,
            text=True,
            cwd=framework_path.parent.parent.parent,  # Go to repo root
            timeout=5
        )
        
        if result.returncode == 0 and result.stdout.strip():
            date_str = result.stdout.strip().split()[0]  # Get date part
            return datetime.strptime(date_str, '%Y-%m-%d')
    except Exception:
        pass
    
    return None


def get_commit_frequency(framework_path: Path, days: int = 90) -> Dict:
    """Get commit frequency for the framework over the last N days."""
    try:
        since_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')
        
        result = subprocess.run(
            ['git', 'log', '--since', since_date, '--format=%ai', '--', str(framework_path)],
            capture_output=True,
            text=True,
            cwd=framework_path.parent.parent.parent,
            timeout=5
        )
        
        if result.returncode == 0:
            commits = [line.strip() for line in result.stdout.strip().split('\n') if line.strip()]
            return {
                'commit_count': len(commits),
                'days': days,
                'commits_per_week': round(len(commits) / (days / 7), 2) if days > 0 else 0,
            }
    except Exception:
        pass
    
    return {
        'commit_count': 0,
        'days': days,
        'commits_per_week': 0,
    }


def check_deprecation_status(framework_path: Path) -> Dict:
    """Check if framework is marked as deprecated."""
    # Check README for deprecation notices
    readme_path = framework_path / 'README.md'
    if readme_path.exists():
        content = readme_path.read_text(encoding='utf-8', errors='ignore').lower()
        
        deprecated_keywords = ['deprecated', 'deprecation', 'no longer maintained', 'archived']
        if any(keyword in content for keyword in deprecated_keywords):
            return {
                'is_deprecated': True,
                'reason': 'Marked as deprecated in README',
            }
    
    return {
        'is_deprecated': False,
    }


def check_breaking_changes(framework_path: Path) -> Dict:
    """Check for breaking changes documentation."""
    # Check for BREAKING_CHANGES.md or similar
    breaking_changes_files = [
        'BREAKING_CHANGES.md',
        'BREAKING.md',
        'MIGRATION.md',
        'CHANGELOG.md',
    ]
    
    for filename in breaking_changes_files:
        file_path = framework_path / filename
        if file_path.exists():
            content = file_path.read_text(encoding='utf-8', errors='ignore').lower()
            
            # Look for breaking change indicators
            breaking_keywords = ['breaking', 'breaking change', 'incompatible', 'migration required']
            if any(keyword in content for keyword in breaking_keywords):
                return {
                    'has_breaking_changes': True,
                    'documented': True,
                    'filename': filename,
                }
    
    return {
        'has_breaking_changes': False,
        'documented': False,
    }


def determine_maintenance_status(last_update: Optional[datetime], commit_freq: Dict, is_deprecated: bool) -> str:
    """Determine maintenance status based on metrics."""
    if is_deprecated:
        return MAINTENANCE_DEPRECATED
    
    if not last_update:
        return MAINTENANCE_DEPRECATED  # No updates = likely deprecated
    
    days_since_update = (datetime.now() - last_update).days
    
    # Active: updated within last 3 months, regular commits
    if days_since_update < 90 and commit_freq.get('commits_per_week', 0) > 0.5:
        return MAINTENANCE_ACTIVE
    
    # Maintenance mode: updated within last year, occasional commits
    if days_since_update < 365 and commit_freq.get('commits_per_week', 0) > 0:
        return MAINTENANCE_MODE
    
    # Deprecated: no updates in over a year
    return MAINTENANCE_DEPRECATED


def check_maintenance(framework_path: str) -> Dict:
    """Check maintenance health for a framework."""
    framework_path = Path(framework_path)
    
    if not framework_path.exists():
        return {
            'error': f'Framework path does not exist: {framework_path}',
            'score': 0
        }
    
    results = {
        'framework_path': str(framework_path),
        'last_update': None,
        'update_frequency': None,
        'maintenance_status': None,
        'breaking_changes': 0,
        'deprecation_status': None,
        'score': 0,
    }
    
    # Get last update date
    last_update = get_last_commit_date(framework_path)
    if last_update:
        results['last_update'] = last_update.isoformat()
        days_since_update = (datetime.now() - last_update).days
        results['days_since_update'] = days_since_update
    
    # Get commit frequency
    commit_freq = get_commit_frequency(framework_path, days=90)
    results['update_frequency'] = commit_freq.get('commits_per_week', 0)
    results['commit_count_90d'] = commit_freq.get('commit_count', 0)
    
    # Check deprecation status
    deprecation = check_deprecation_status(framework_path)
    results['deprecation_status'] = deprecation.get('is_deprecated', False)
    
    # Check breaking changes
    breaking_changes = check_breaking_changes(framework_path)
    results['breaking_changes'] = 1 if breaking_changes.get('has_breaking_changes') else 0
    results['breaking_changes_documented'] = breaking_changes.get('documented', False)
    
    # Determine maintenance status
    maintenance_status = determine_maintenance_status(
        last_update,
        commit_freq,
        results['deprecation_status']
    )
    results['maintenance_status'] = maintenance_status
    
    # Calculate score
    score = 0
    
    # Maintenance status: 40 points
    if maintenance_status == MAINTENANCE_ACTIVE:
        score += 40
    elif maintenance_status == MAINTENANCE_MODE:
        score += 25
    else:
        score += 0  # Deprecated gets 0
    
    # Update frequency: 30 points
    commits_per_week = commit_freq.get('commits_per_week', 0)
    if commits_per_week > 1:
        score += 30
    elif commits_per_week > 0.5:
        score += 20
    elif commits_per_week > 0:
        score += 10
    
    # Recent update: 20 points
    if last_update:
        days_since = (datetime.now() - last_update).days
        if days_since < 90:
            score += 20
        elif days_since < 180:
            score += 15
        elif days_since < 365:
            score += 10
    
    # Breaking changes documented: 10 points
    if results['breaking_changes_documented']:
        score += 10
    
    # Cap at 100
    results['score'] = min(100, score)
    
    return results


def main():
    """Main entry point."""
    if len(sys.argv) < 2:
        print("Usage: python3 check-maintenance.py <framework_path>")
        sys.exit(1)
    
    framework_path = sys.argv[1]
    results = check_maintenance(framework_path)
    
    # Output as JSON
    print(json.dumps(results, indent=2))
    
    # Exit with error code if score is low
    if results.get('score', 0) < 50:
        sys.exit(1)


if __name__ == '__main__':
    main()

