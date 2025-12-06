"""
Sync Version Command

CLI command to sync version file to highest version from epic.
Implements Branch Context Policy automation.
"""

import argparse
from pathlib import Path
import subprocess
import sys


def sync_version_command(args):
    """Execute sync-version command."""
    script_path = Path("scripts/framework-management/sync-branch-version.py")
    
    if not script_path.exists():
        print("❌ Error: sync-branch-version.py script not found")
        print(f"   Expected at: {script_path.absolute()}")
        return 1
    
    # Build command arguments
    cmd = ["python3", str(script_path)]
    
    if args.dry_run:
        cmd.append("--dry-run")
    
    if args.epic:
        cmd.extend(["--epic", str(args.epic)])
    
    # Execute script
    try:
        result = subprocess.run(cmd, check=False)
        return result.returncode
    except Exception as e:
        print(f"❌ Error executing sync script: {e}")
        return 1


def add_sync_version_parser(subparsers):
    """Add sync-version command to CLI."""
    parser = subparsers.add_parser(
        "sync-version",
        help="Sync version file to highest version from epic (Branch Context Policy)"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be updated without making changes"
    )
    parser.add_argument(
        "--epic",
        type=int,
        help="Sync to specific epic number (default: detect from branch)"
    )
    parser.set_defaults(func=sync_version_command)

