#!/usr/bin/env python3
"""
Package Builder Script for AI Dev Kit Frameworks

Creates tar.gz package files from framework source with MANIFEST.json and SHA-256 hash verification.

Usage:
    python build_package.py <framework-name> <version> [--output-dir <dir>] [--framework-dir <dir>]

Example:
    python build_package.py kanban 2.0.0 --output-dir ./packages
    python build_package.py "workflow mgt" 2.1.0
"""

import argparse
import json
import hashlib
import tarfile
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Optional


def parse_arguments() -> argparse.Namespace:
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description="Build tar.gz package from framework source",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )
    
    parser.add_argument(
        "framework_name",
        help="Name of the framework (e.g., 'kanban', 'workflow mgt')"
    )
    
    parser.add_argument(
        "version",
        help="Framework version (e.g., '2.0.0')"
    )
    
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path.cwd(),
        help="Output directory for package files (default: current directory)"
    )
    
    parser.add_argument(
        "--framework-dir",
        type=Path,
        default=None,
        help="Framework source directory (default: auto-detect from framework name)"
    )
    
    parser.add_argument(
        "--frameworks-root",
        type=Path,
        default=Path(__file__).parent.parent.parent,  # packages/frameworks/
        help="Root directory containing all frameworks (default: packages/frameworks/)"
    )
    
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Enable verbose output"
    )
    
    return parser.parse_args()


def validate_framework_name(framework_name: str) -> str:
    """Validate and normalize framework name."""
    if not framework_name or not framework_name.strip():
        raise ValueError("Framework name cannot be empty")
    
    # Normalize framework name (handle spaces, case)
    normalized = framework_name.strip()
    
    return normalized


def validate_version(version: str) -> str:
    """Validate version format (Semantic Versioning)."""
    if not version or not version.strip():
        raise ValueError("Version cannot be empty")
    
    version = version.strip()
    
    # Basic semantic version validation (major.minor.patch)
    parts = version.split('.')
    if len(parts) != 3:
        raise ValueError(f"Invalid version format: {version}. Expected format: major.minor.patch (e.g., 2.0.0)")
    
    for part in parts:
        if not part.isdigit():
            raise ValueError(f"Invalid version format: {version}. Version parts must be numeric")
    
    return version


def find_framework_directory(framework_name: str, frameworks_root: Path) -> Path:
    """Find framework directory by name."""
    frameworks_root = frameworks_root.resolve()
    
    # Direct match
    framework_dir = frameworks_root / framework_name
    if framework_dir.exists() and framework_dir.is_dir():
        return framework_dir
    
    # Try case-insensitive match
    for item in frameworks_root.iterdir():
        if item.is_dir() and item.name.lower() == framework_name.lower():
            return item
    
    # Try partial match (e.g., "workflow mgt" -> "workflow mgt" directory)
    for item in frameworks_root.iterdir():
        if item.is_dir() and framework_name.lower() in item.name.lower():
            return item
    
    raise FileNotFoundError(
        f"Framework '{framework_name}' not found in {frameworks_root}. "
        f"Available frameworks: {[d.name for d in frameworks_root.iterdir() if d.is_dir()]}"
    )


def validate_framework_structure(framework_dir: Path) -> None:
    """Validate that framework directory has required structure."""
    if not framework_dir.exists():
        raise FileNotFoundError(f"Framework directory does not exist: {framework_dir}")
    
    if not framework_dir.is_dir():
        raise ValueError(f"Framework path is not a directory: {framework_dir}")
    
    # Check for required files (optional - frameworks may have different structures)
    # This is just a basic validation
    required_files = ["README.md"]  # Most frameworks should have README
    missing_files = []
    
    for required_file in required_files:
        if not (framework_dir / required_file).exists():
            missing_files.append(required_file)
    
    if missing_files:
        # Warning, not error - some frameworks might not have all files
        print(f"Warning: Framework directory missing some expected files: {missing_files}", file=sys.stderr)


def main() -> int:
    """Main execution function."""
    try:
        # Parse arguments
        args = parse_arguments()
        
        # Validate arguments
        framework_name = validate_framework_name(args.framework_name)
        version = validate_version(args.version)
        
        # Resolve paths
        output_dir = args.output_dir.resolve()
        output_dir.mkdir(parents=True, exist_ok=True)
        
        frameworks_root = args.frameworks_root.resolve()
        
        # Find framework directory
        if args.framework_dir:
            framework_dir = Path(args.framework_dir).resolve()
        else:
            framework_dir = find_framework_directory(framework_name, frameworks_root)
        
        # Validate framework structure
        validate_framework_structure(framework_dir)
        
        if args.verbose:
            print(f"Framework: {framework_name}")
            print(f"Version: {version}")
            print(f"Framework directory: {framework_dir}")
            print(f"Output directory: {output_dir}")
        
        # TODO: Implement package building in subsequent tasks
        # - Task 3.1.1.2: Package Archive Creation (tar.gz)
        # - Task 3.1.1.3: MANIFEST.json Generation
        # - Task 3.1.1.4: SHA-256 Hash Computation
        
        print(f"✅ Package builder script structure ready for {framework_name} v{version}")
        print(f"   Framework directory: {framework_dir}")
        print(f"   Output directory: {output_dir}")
        print("\n   Next steps:")
        print("   - Task 3.1.1.2: Implement tar.gz archive creation")
        print("   - Task 3.1.1.3: Implement MANIFEST.json generation")
        print("   - Task 3.1.1.4: Implement SHA-256 hash computation")
        
        return 0
        
    except (ValueError, FileNotFoundError) as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        return 1
    except Exception as e:
        print(f"❌ Unexpected error: {e}", file=sys.stderr)
        if args.verbose if 'args' in locals() else False:
            import traceback
            traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())

