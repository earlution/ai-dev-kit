#!/usr/bin/env python3
"""
Framework Health Metrics Collector

Collects comprehensive health metrics for all framework packages according to
framework health metrics definition.

Usage:
    python3 collect-health-metrics.py [--framework <path>] [--output <file>] [--format json|yaml]
    python3 collect-health-metrics.py --framework packages/frameworks/workflow\ mgt/
    python3 collect-health-metrics.py --output health-report.json
"""

import os
import sys
import json
import yaml
import argparse
from pathlib import Path
from typing import Dict, List, Optional
from datetime import datetime

# Import check modules
sys.path.insert(0, str(Path(__file__).parent))

try:
    from check_documentation import check_documentation
    from check_versioning import check_versioning
    from check_maintenance import check_maintenance
except ImportError:
    # Fallback: run as subprocess
    import subprocess
    
    def check_documentation(path: str) -> Dict:
        result = subprocess.run(
            [sys.executable, str(Path(__file__).parent / 'check-documentation.py'), path],
            capture_output=True,
            text=True,
            timeout=30
        )
        return json.loads(result.stdout) if result.returncode == 0 else {}
    
    def check_versioning(path: str) -> Dict:
        result = subprocess.run(
            [sys.executable, str(Path(__file__).parent / 'check-versioning.py'), path],
            capture_output=True,
            text=True,
            timeout=30
        )
        return json.loads(result.stdout) if result.returncode == 0 else {}
    
    def check_maintenance(path: str) -> Dict:
        result = subprocess.run(
            [sys.executable, str(Path(__file__).parent / 'check-maintenance.py'), path],
            capture_output=True,
            text=True,
            timeout=30
        )
        return json.loads(result.stdout) if result.returncode == 0 else {}


# Health metric weights (from framework-health-metrics.md)
WEIGHTS = {
    'documentation': 0.25,
    'version_management': 0.15,
    'maintenance': 0.20,
    'usability': 0.15,
    'integration': 0.10,
    'code_quality': 0.10,
    'adoption': 0.05,
}


def calculate_overall_health_score(metrics: Dict) -> float:
    """Calculate overall health score from category scores."""
    score = 0.0
    
    # Documentation (25%)
    doc_score = metrics.get('documentation', {}).get('score', 0)
    score += doc_score * WEIGHTS['documentation']
    
    # Version Management (15%)
    version_score = metrics.get('version_management', {}).get('score', 0)
    score += version_score * WEIGHTS['version_management']
    
    # Maintenance (20%)
    maint_score = metrics.get('maintenance', {}).get('score', 0)
    score += maint_score * WEIGHTS['maintenance']
    
    # Usability (15%) - Simplified: based on templates and examples
    usability_score = metrics.get('usability', {}).get('score', 0)
    score += usability_score * WEIGHTS['usability']
    
    # Integration (10%)
    integration_score = metrics.get('integration', {}).get('score', 0)
    score += integration_score * WEIGHTS['integration']
    
    # Code Quality (10%)
    code_score = metrics.get('code_quality', {}).get('score', 0)
    score += code_score * WEIGHTS['code_quality']
    
    # Adoption (5%)
    adoption_score = metrics.get('adoption', {}).get('score', 0)
    score += adoption_score * WEIGHTS['adoption']
    
    return round(score, 2)


def determine_health_status(score: float) -> str:
    """Determine health status from score."""
    if score >= 90:
        return 'excellent'
    elif score >= 70:
        return 'good'
    elif score >= 50:
        return 'fair'
    else:
        return 'poor'


def check_usability(framework_path: Path) -> Dict:
    """Check usability health (simplified)."""
    # Check for templates
    templates_dir = framework_path / 'templates'
    template_count = len(list(templates_dir.glob('*.md'))) if templates_dir.exists() else 0
    
    # Check for examples
    examples_dir = framework_path / 'examples'
    example_count = len(list(examples_dir.glob('*.md'))) if examples_dir.exists() else 0
    
    # Calculate score
    score = 0
    if template_count > 0:
        score += 50
    if example_count > 0:
        score += 30
    if template_count > 3:
        score += 20
    
    return {
        'score': min(100, score),
        'template_count': template_count,
        'example_count': example_count,
    }


def check_integration(framework_path: Path) -> Dict:
    """Check integration health."""
    integration_dir = framework_path / 'integration'
    
    if not integration_dir.exists():
        return {
            'score': 0,
            'integration_guides': 0,
        }
    
    integration_files = list(integration_dir.glob('*.md'))
    guide_count = len(integration_files)
    
    score = min(100, guide_count * 25)  # 25 points per guide, max 100
    
    return {
        'score': score,
        'integration_guides': guide_count,
        'integration_status': 'integrated' if guide_count > 0 else 'standalone',
    }


def check_code_quality(framework_path: Path) -> Dict:
    """Check code quality health."""
    scripts_dir = framework_path / 'scripts'
    
    if not scripts_dir.exists():
        return {
            'score': 100,  # No scripts = no code quality issues
            'script_count': 0,
        }
    
    scripts = list(scripts_dir.rglob('*.py'))
    script_count = len(scripts)
    
    # Basic quality check: scripts exist
    score = 80 if script_count > 0 else 100
    
    return {
        'score': score,
        'script_count': script_count,
    }


def check_adoption(framework_path: Path) -> Dict:
    """Check adoption health (simplified)."""
    # Check for usage examples
    examples_dir = framework_path / 'examples'
    example_count = len(list(examples_dir.glob('*.md'))) if examples_dir.exists() else 0
    
    score = min(100, example_count * 20)  # 20 points per example
    
    return {
        'score': score,
        'usage_examples': example_count,
    }


def collect_framework_health(framework_path: str) -> Dict:
    """Collect health metrics for a single framework."""
    framework_path = Path(framework_path)
    
    if not framework_path.exists():
        return {
            'error': f'Framework path does not exist: {framework_path}',
        }
    
    # Collect all metrics
    metrics = {
        'framework': framework_path.name,
        'framework_path': str(framework_path),
        'collected_at': datetime.now().isoformat(),
        'documentation': check_documentation(str(framework_path)),
        'version_management': check_versioning(str(framework_path)),
        'maintenance': check_maintenance(str(framework_path)),
        'usability': check_usability(framework_path),
        'integration': check_integration(framework_path),
        'code_quality': check_code_quality(framework_path),
        'adoption': check_adoption(framework_path),
    }
    
    # Calculate overall health score
    health_score = calculate_overall_health_score(metrics)
    health_status = determine_health_status(health_score)
    
    metrics['health_score'] = health_score
    metrics['status'] = health_status
    
    # Extract version if available
    version = (
        metrics['version_management'].get('latest_version') or
        metrics['documentation'].get('version') or
        'unknown'
    )
    metrics['version'] = version
    
    return metrics


def find_all_frameworks(frameworks_dir: Path) -> List[Path]:
    """Find all framework directories."""
    frameworks = []
    
    if not frameworks_dir.exists():
        return frameworks
    
    for item in frameworks_dir.iterdir():
        if item.is_dir() and not item.name.startswith('.'):
            # Check if it looks like a framework (has README.md)
            if (item / 'README.md').exists():
                frameworks.append(item)
    
    return sorted(frameworks)


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Collect framework health metrics')
    parser.add_argument(
        '--framework',
        type=str,
        help='Path to specific framework (default: all frameworks)'
    )
    parser.add_argument(
        '--output',
        type=str,
        help='Output file path (default: stdout)'
    )
    parser.add_argument(
        '--format',
        choices=['json', 'yaml'],
        default='json',
        help='Output format (default: json)'
    )
    parser.add_argument(
        '--frameworks-dir',
        type=str,
        default='packages/frameworks',
        help='Frameworks directory (default: packages/frameworks)'
    )
    
    args = parser.parse_args()
    
    # Collect metrics
    if args.framework:
        # Single framework
        results = {
            'frameworks': [collect_framework_health(args.framework)],
            'collected_at': datetime.now().isoformat(),
        }
    else:
        # All frameworks
        frameworks_dir = Path(args.frameworks_dir)
        frameworks = find_all_frameworks(frameworks_dir)
        
        results = {
            'frameworks': [],
            'collected_at': datetime.now().isoformat(),
        }
        
        for framework_path in frameworks:
            metrics = collect_framework_health(str(framework_path))
            results['frameworks'].append(metrics)
    
    # Calculate summary statistics
    if results['frameworks']:
        scores = [f.get('health_score', 0) for f in results['frameworks'] if 'error' not in f]
        if scores:
            results['summary'] = {
                'total_frameworks': len(results['frameworks']),
                'average_score': round(sum(scores) / len(scores), 2),
                'min_score': min(scores),
                'max_score': max(scores),
                'excellent_count': sum(1 for s in scores if s >= 90),
                'good_count': sum(1 for s in scores if 70 <= s < 90),
                'fair_count': sum(1 for s in scores if 50 <= s < 70),
                'poor_count': sum(1 for s in scores if s < 50),
            }
    
    # Output results
    output = None
    if args.format == 'yaml':
        try:
            output = yaml.dump(results, default_flow_style=False, sort_keys=False)
        except ImportError:
            print("Error: PyYAML not installed. Use --format json instead.", file=sys.stderr)
            sys.exit(1)
    else:
        output = json.dumps(results, indent=2)
    
    if args.output:
        with open(args.output, 'w') as f:
            f.write(output)
        print(f"Health metrics written to {args.output}")
    else:
        print(output)


if __name__ == '__main__':
    main()

