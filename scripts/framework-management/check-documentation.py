#!/usr/bin/env python3
"""
Framework Documentation Health Checker

Checks documentation completeness for framework packages according to
framework health metrics definition.

Usage:
    python3 check-documentation.py <framework_path>
    python3 check-documentation.py packages/frameworks/workflow\ mgt/
"""

import os
import sys
import json
from pathlib import Path
from typing import Dict, List, Optional

# Required documentation files
REQUIRED_DOCS = {
    'README.md': 'Framework overview and quick start',
    'PACKAGE_OVERVIEW.md': 'Package structure and concepts',
}

# Optional but recommended documentation files
OPTIONAL_DOCS = {
    'IMPLEMENTATION_GUIDE.md': 'Step-by-step setup guide',
}

# Documentation directories to check
DOC_DIRS = {
    'templates/': 'Template files',
    'examples/': 'Usage examples',
    'integration/': 'Integration guides',
    'policies/': 'Policy documents',
    'KB/': 'Knowledge base documentation',
    'scripts/': 'Script documentation',
}


def check_file_exists(framework_path: Path, filename: str) -> bool:
    """Check if a file exists in the framework directory."""
    file_path = framework_path / filename
    return file_path.exists() and file_path.is_file()


def check_directory_exists(framework_path: Path, dirname: str) -> bool:
    """Check if a directory exists in the framework directory."""
    dir_path = framework_path / dirname
    return dir_path.exists() and dir_path.is_dir()


def count_files_in_directory(framework_path: Path, dirname: str) -> int:
    """Count markdown files in a directory."""
    dir_path = framework_path / dirname
    if not dir_path.exists():
        return 0
    
    count = 0
    for item in dir_path.rglob('*.md'):
        if item.is_file():
            count += 1
    return count


def check_documentation_quality(framework_path: Path, filename: str) -> Dict:
    """Check quality of a documentation file."""
    file_path = framework_path / filename
    if not file_path.exists():
        return {'exists': False, 'size': 0, 'has_content': False}
    
    size = file_path.stat().st_size
    content = file_path.read_text(encoding='utf-8', errors='ignore')
    
    # Basic quality checks
    has_content = len(content.strip()) > 100  # At least 100 characters
    has_structure = '#' in content  # Has markdown headers
    has_metadata = '---' in content[:200]  # Has frontmatter (common pattern)
    
    return {
        'exists': True,
        'size': size,
        'has_content': has_content,
        'has_structure': has_structure,
        'has_metadata': has_metadata,
    }


def check_documentation(framework_path: str) -> Dict:
    """Check documentation completeness for a framework."""
    framework_path = Path(framework_path)
    
    if not framework_path.exists():
        return {
            'error': f'Framework path does not exist: {framework_path}',
            'score': 0
        }
    
    results = {
        'framework_path': str(framework_path),
        'required_docs': {},
        'optional_docs': {},
        'directories': {},
        'score': 0,
        'completeness': 0,
        'missing_docs': [],
        'quality_issues': [],
    }
    
    # Check required documentation
    required_count = 0
    required_total = len(REQUIRED_DOCS)
    
    for doc_file, description in REQUIRED_DOCS.items():
        exists = check_file_exists(framework_path, doc_file)
        quality = check_documentation_quality(framework_path, doc_file) if exists else {}
        
        results['required_docs'][doc_file] = {
            'exists': exists,
            'description': description,
            'quality': quality,
        }
        
        if exists:
            required_count += 1
            if not quality.get('has_content', False):
                results['quality_issues'].append(f'{doc_file}: Missing substantial content')
        else:
            results['missing_docs'].append(doc_file)
    
    # Check optional documentation
    optional_count = 0
    optional_total = len(OPTIONAL_DOCS)
    
    for doc_file, description in OPTIONAL_DOCS.items():
        exists = check_file_exists(framework_path, doc_file)
        quality = check_documentation_quality(framework_path, doc_file) if exists else {}
        
        results['optional_docs'][doc_file] = {
            'exists': exists,
            'description': description,
            'quality': quality,
        }
        
        if exists:
            optional_count += 1
    
    # Check documentation directories
    for dir_name, description in DOC_DIRS.items():
        exists = check_directory_exists(framework_path, dir_name)
        file_count = count_files_in_directory(framework_path, dir_name) if exists else 0
        
        results['directories'][dir_name] = {
            'exists': exists,
            'description': description,
            'file_count': file_count,
        }
    
    # Calculate completeness score
    # Required docs: 70% weight, Optional docs: 20% weight, Directories: 10% weight
    required_score = (required_count / required_total) * 70 if required_total > 0 else 0
    optional_score = (optional_count / optional_total) * 20 if optional_total > 0 else 0
    
    # Directory score: check if key directories exist
    key_dirs = ['templates/', 'integration/']
    dir_score = sum(1 for d in key_dirs if results['directories'].get(d, {}).get('exists', False)) / len(key_dirs) * 10
    
    completeness = required_score + optional_score + dir_score
    results['completeness'] = round(completeness, 2)
    
    # Calculate overall score (0-100)
    # Base score from completeness, reduced by quality issues
    quality_penalty = len(results['quality_issues']) * 5
    score = max(0, completeness - quality_penalty)
    results['score'] = round(score, 2)
    
    return results


def main():
    """Main entry point."""
    if len(sys.argv) < 2:
        print("Usage: python3 check-documentation.py <framework_path>")
        sys.exit(1)
    
    framework_path = sys.argv[1]
    results = check_documentation(framework_path)
    
    # Output as JSON
    print(json.dumps(results, indent=2))
    
    # Exit with error code if score is low
    if results.get('score', 0) < 50:
        sys.exit(1)


if __name__ == '__main__':
    main()

