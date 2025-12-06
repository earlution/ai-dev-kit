#!/usr/bin/env python3
"""
Branch Version Sync Script

Syncs version file to highest version from the current epic branch.
This script implements the Branch Context Policy:
- During active work: Version reflects last commit (updated by RW)
- On branch switch: Version reflects highest version from that epic

Usage:
    python scripts/framework-management/sync-branch-version.py [--dry-run] [--epic N]

    --dry-run: Show what would be updated without making changes
    --epic N:  Sync to specific epic number (default: detect from branch)
"""

import argparse
import re
import subprocess
import sys
from pathlib import Path
from typing import Optional, Tuple, List

# Default paths
DEFAULT_CHANGELOG = Path("CHANGELOG.md")
DEFAULT_VERSION_FILE = Path("src/fynd_deals/version.py")


def get_current_branch() -> str:
    """Get current git branch."""
    result = subprocess.run(
        ["git", "branch", "--show-current"],
        capture_output=True,
        text=True,
        check=True
    )
    return result.stdout.strip()


def parse_branch_epic(branch: str) -> Optional[int]:
    """Extract epic number from branch name (e.g., epic/6-framework-management -> 6)."""
    match = re.match(r"^epic/(\d+)", branch)
    if match:
        return int(match.group(1))
    return None


def parse_version(version_str: str) -> Optional[Tuple[int, int, int, int, int]]:
    """Parse version string to (RC, EPIC, STORY, TASK, BUILD).
    
    Supports both formats:
    - Old: RC.EPIC.STORY.PATCH
    - New: RC.EPIC.STORY.TASK+BUILD
    """
    # Try new format first: RC.EPIC.STORY.TASK+BUILD
    match = re.match(r"^(\d+)\.(\d+)\.(\d+)\.(\d+)\+(\d+)$", version_str)
    if match:
        return (
            int(match.group(1)),  # RC
            int(match.group(2)),  # EPIC
            int(match.group(3)),  # STORY
            int(match.group(4)),  # TASK
            int(match.group(5))   # BUILD
        )
    
    # Try old format: RC.EPIC.STORY.PATCH
    match = re.match(r"^(\d+)\.(\d+)\.(\d+)\.(\d+)$", version_str)
    if match:
        return (
            int(match.group(1)),  # RC
            int(match.group(2)),  # EPIC
            int(match.group(3)),  # STORY
            int(match.group(4)),  # TASK (was PATCH)
            0                     # BUILD (default)
        )
    
    return None


def compare_versions(v1: Tuple[int, int, int, int, int], 
                     v2: Tuple[int, int, int, int, int]) -> int:
    """Compare two versions. Returns -1 if v1 < v2, 0 if equal, 1 if v1 > v2."""
    # Compare RC, EPIC, STORY, TASK, BUILD in order
    for i in range(5):
        if v1[i] < v2[i]:
            return -1
        elif v1[i] > v2[i]:
            return 1
    return 0


def find_highest_version_for_epic(changelog_path: Path, epic: int) -> Optional[Tuple[int, int, int, int, int]]:
    """Find highest version for a given epic from CHANGELOG.md.
    
    Returns: (RC, EPIC, STORY, TASK, BUILD) or None if no versions found
    """
    if not changelog_path.exists():
        return None
    
    content = changelog_path.read_text()
    
    # Match version entries: ## [RC.EPIC.STORY.TASK+BUILD] or ## [RC.EPIC.STORY.PATCH]
    pattern = r"^## \[([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+(?:\+\d+)?)\]"
    
    highest = None
    
    for line in content.splitlines():
        match = re.match(pattern, line)
        if match:
            version_str = match.group(1)
            parsed = parse_version(version_str)
            if parsed and parsed[1] == epic:  # Check EPIC matches
                if highest is None or compare_versions(parsed, highest) > 0:
                    highest = parsed
    
    return highest


def update_version_file(version_file: Path, 
                       version: Tuple[int, int, int, int, int],
                       epic_name: str = "",
                       story_name: str = "",
                       task_name: str = "") -> bool:
    """Update version file with new version values.
    
    Args:
        version_file: Path to version.py file
        version: (RC, EPIC, STORY, TASK, BUILD) tuple
        epic_name: Optional epic name for comment
        story_name: Optional story name for comment
        task_name: Optional task name for comment
    """
    if not version_file.exists():
        print(f"❌ Error: Version file not found: {version_file}")
        return False
    
    content = version_file.read_text()
    
    rc, epic, story, task, build = version
    
    # Update version components
    content = re.sub(
        r"VERSION_RC\s*=\s*\d+",
        f"VERSION_RC = {rc}",
        content
    )
    content = re.sub(
        r"VERSION_EPIC\s*=\s*\d+",
        f"VERSION_EPIC = {epic}      # Epic number (Epic {epic}: {epic_name})" if epic_name else f"VERSION_EPIC = {epic}",
        content
    )
    content = re.sub(
        r"VERSION_STORY\s*=\s*\d+",
        f"VERSION_STORY = {story}     # Story number (Story {story}: {story_name})" if story_name else f"VERSION_STORY = {story}",
        content
    )
    content = re.sub(
        r"VERSION_TASK\s*=\s*\d+",
        f"VERSION_TASK = {task}      # Task number (Task {task}: {task_name})" if task_name else f"VERSION_TASK = {task}",
        content
    )
    content = re.sub(
        r"VERSION_BUILD\s*=\s*\d+",
        f"VERSION_BUILD = {build}     # Build number (increments per release within task, bumped by RW)",
        content
    )
    
    version_file.write_text(content)
    return True


def sync_version(dry_run: bool = False, epic: Optional[int] = None) -> int:
    """Sync version file to highest version from epic.
    
    Returns:
        0 on success, 1 on error
    """
    # Detect epic from branch if not provided
    if epic is None:
        branch = get_current_branch()
        epic = parse_branch_epic(branch)
        
        if epic is None:
            print(f"❌ Error: Could not detect epic from branch '{branch}'")
            print("   Use --epic N to specify epic number manually")
            return 1
    
    print(f"🔍 Finding highest version for Epic {epic}...")
    
    # Find highest version
    highest = find_highest_version_for_epic(DEFAULT_CHANGELOG, epic)
    
    if highest is None:
        print(f"⚠️  Warning: No versions found for Epic {epic} in CHANGELOG.md")
        return 0  # Not an error, just no versions yet
    
    rc, epic_num, story, task, build = highest
    version_str = f"{rc}.{epic_num}.{story}.{task}+{build}"
    
    print(f"📦 Highest version for Epic {epic}: {version_str}")
    
    # Check current version
    try:
        import sys
        import importlib.util
        spec = importlib.util.spec_from_file_location("version", DEFAULT_VERSION_FILE)
        version_module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(version_module)
        current_version_str = version_module.VERSION_STRING
        current_parsed = parse_version(current_version_str)
        
        if current_parsed and compare_versions(current_parsed, highest) == 0:
            print(f"✅ Version file already at highest version: {version_str}")
            return 0
    except Exception:
        pass
    
    if dry_run:
        print(f"🔍 [DRY RUN] Would update version file to: {version_str}")
        return 0
    
    # Update version file
    print(f"🔄 Updating version file to: {version_str}")
    if update_version_file(DEFAULT_VERSION_FILE, highest):
        print(f"✅ Version file updated successfully")
        return 0
    else:
        print(f"❌ Failed to update version file")
        return 1


def main():
    parser = argparse.ArgumentParser(
        description="Sync version file to highest version from epic (Branch Context Policy)"
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
    
    args = parser.parse_args()
    
    exit_code = sync_version(dry_run=args.dry_run, epic=args.epic)
    sys.exit(exit_code)


if __name__ == "__main__":
    main()

