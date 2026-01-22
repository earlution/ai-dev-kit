#!/usr/bin/env python3
"""
Kanban Board Sorting Utility

This script sorts the kanban board numerically:
- Epics: E1, E2, E3, ... E21, E24 (canonical 1-23, then project-specific 24+)
- Stories: S01, S02, S03, ... (within each epic)
- Tasks: T01, T02, T03, ... (within each story)

This utility is used by UKW Step 6 (Update Kanban Board) to ensure consistent
numerical ordering of epics, stories, and tasks.

Usage:
    python packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_board.py [--board-path PATH] [--dry-run]

    --board-path: Path to kanban board file (default: from rw-config.yaml or docs/project-management/kanban/kanban-board.md)
    --dry-run: Show what would be sorted without making changes
"""

import argparse
import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple

try:
    import yaml
except ImportError:
    yaml = None


def load_rw_config(config_path: Optional[Path] = None) -> Optional[Dict]:
    """Load rw-config.yaml if it exists."""
    if config_path is None:
        # Try project root
        project_root = Path.cwd()
        config_path = project_root / "rw-config.yaml"
        if not config_path.exists():
            return None
    
    if not config_path.exists():
        return None
    
    if yaml is None:
        return None
    
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f)
    except Exception:
        return None


def extract_epic_number(epic_header: str) -> Optional[int]:
    """Extract epic number from header like '### Epic 6: ...' or '### Epic 24: ...'."""
    match = re.search(r'^### Epic (\d+):', epic_header, re.MULTILINE)
    if match:
        return int(match.group(1))
    return None


def extract_story_number(story_line: str) -> Optional[int]:
    """Extract story number from line like '- [x] **E6:S01 – ...' or '- [ ] **E6:S02 – ...'."""
    match = re.search(r'\*\*E\d+:S(\d+)', story_line)
    if match:
        return int(match.group(1))
    return None


def extract_task_number(task_line: str) -> Optional[int]:
    """Extract task number from line like '- [x] **E6:S01:T01 – ...' or '- [ ] **E6:S01:T02 – ...'."""
    match = re.search(r'\*\*E\d+:S\d+:T(\d+)', task_line)
    if match:
        return int(match.group(1))
    return None


def parse_epic_section(lines: List[str], start_idx: int, epics_section_start: int) -> Tuple[Optional[Dict], int]:
    """
    Parse an epic section from the kanban board.
    Returns (epic_dict, next_idx) where epic_dict contains:
    - 'number': epic number
    - 'header': full epic header line
    - 'content': full epic section content
    - 'stories': list of story lines (sorted)
    """
    # Find epic header (must be in epics section)
    epic_header = None
    epic_number = None
    for i in range(start_idx, len(lines)):
        if lines[i].startswith('### Epic ') and i >= epics_section_start:
            epic_header = lines[i]
            epic_number = extract_epic_number(epic_header)
            break
    
    if epic_number is None:
        return None, start_idx
    
    # Find epic content (until next epic or end of file)
    epic_start = start_idx
    epic_end = len(lines)
    
    # Epic sections end with '---' separator followed by blank line or next epic
    for i in range(start_idx + 1, len(lines)):
        if lines[i].startswith('### Epic '):
            epic_end = i
            break
        # Epic sections end with '---' separator
        if lines[i].strip() == '---' and i > start_idx + 5:
            # Check if next line is blank or next epic
            if i + 1 < len(lines):
                next_line = lines[i + 1].strip()
                if next_line == '' or lines[i + 1].startswith('### Epic '):
                    epic_end = i + 1
                    break
    
    epic_content_lines = lines[epic_start:epic_end]
    epic_content = '\n'.join(epic_content_lines)
    
    # Extract story lines from epic content
    stories = []
    for line in epic_content_lines:
        if re.search(r'\*\*E\d+:S\d+', line):
            stories.append(line)
    
    # Sort stories numerically
    stories_with_numbers = []
    for story in stories:
        story_num = extract_story_number(story)
        if story_num is not None:
            stories_with_numbers.append((story_num, story))
    
    stories_with_numbers.sort(key=lambda x: x[0])
    sorted_stories = [story for _, story in stories_with_numbers]
    
    # Extract task lines (if any in epic section - though tasks are usually in story sections)
    tasks = []
    for line in epic_content_lines:
        if re.search(r'\*\*E\d+:S\d+:T\d+', line):
            tasks.append(line)
    
    # Sort tasks numerically
    tasks_with_numbers = []
    for task in tasks:
        task_num = extract_task_number(task)
        if task_num is not None:
            tasks_with_numbers.append((task_num, task))
    
    tasks_with_numbers.sort(key=lambda x: x[0])
    sorted_tasks = [task for _, task in tasks_with_numbers]
    
    return {
        'number': epic_number,
        'header': epic_header,
        'content': epic_content,
        'stories': sorted_stories,
        'tasks': sorted_tasks,
        'start_idx': epic_start,
        'end_idx': epic_end
    }, epic_end


def sort_kanban_board(board_path: Path, dry_run: bool = False) -> bool:
    """
    Sort the kanban board numerically.
    Returns True if sorting was successful, False otherwise.
    """
    if not board_path.exists():
        print(f"❌ Error: Kanban board not found at {board_path}", file=sys.stderr)
        return False
    
    # Read board content
    try:
        with open(board_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading kanban board: {e}", file=sys.stderr)
        return False
    
    lines = content.split('\n')
    
    # Find the start of Epics section (after MoSCOW section)
    epics_section_start = None
    for i, line in enumerate(lines):
        if line.startswith('## Epics') or line.startswith('## Epic Status'):
            # Find the first epic after this header
            for j in range(i + 1, len(lines)):
                if lines[j].startswith('### Epic '):
                    epics_section_start = j
                    break
            break
    
    if epics_section_start is None:
        print("⚠️  Warning: Could not find '## Epics' section, trying to find first epic", file=sys.stderr)
        # Try to find first epic
        for i, line in enumerate(lines):
            if line.startswith('### Epic '):
                epics_section_start = i
                break
    
    if epics_section_start is None:
        print("❌ Error: Could not locate epics section in board", file=sys.stderr)
        return False
    
    # Find all epic sections (only in the Epics section)
    epics = []
    idx = epics_section_start
    found_epic_numbers = set()
    
    while idx < len(lines):
        # Find next epic header
        epic_header_idx = None
        for i in range(idx, len(lines)):
            if lines[i].startswith('### Epic '):
                epic_num = extract_epic_number(lines[i])
                if epic_num is not None and epic_num not in found_epic_numbers:
                    epic_header_idx = i
                    found_epic_numbers.add(epic_num)
                    break
        
        if epic_header_idx is None:
            break
        
        # Parse this epic section
        epic, next_idx = parse_epic_section(lines, epic_header_idx, epics_section_start)
        if epic is None:
            break
        
        epics.append(epic)
        idx = next_idx
        if idx >= len(lines):
            break
    
    if not epics:
        print("⚠️  Warning: No epic sections found in kanban board", file=sys.stderr)
        return False
    
    # Sort epics numerically
    # Canonical epics (1-23) come first, then project-specific (24+)
    def epic_sort_key(epic: Dict) -> Tuple[int, int]:
        epic_num = epic['number']
        # Canonical epics (1-23) sort first, then project-specific (24+)
        if epic_num <= 23:
            return (0, epic_num)  # Canonical epics
        else:
            return (1, epic_num)  # Project-specific epics
    
    epics.sort(key=epic_sort_key)
    
    if dry_run:
        print("🔍 DRY RUN: Would sort epics in the following order:")
        for epic in epics:
            print(f"  - Epic {epic['number']}")
        return True
    
    # epics_section_start already found above
    
    # Build new content: everything before epics section + sorted epics + everything after
    before_epics = '\n'.join(lines[:epics_section_start])
    
    # Reconstruct epic sections in sorted order
    sorted_epic_sections = []
    for epic in epics:
        sorted_epic_sections.append(epic['content'])
        sorted_epic_sections.append('')  # Add blank line between epics
    
    # Find end of epics section (before any trailing content)
    epics_section_end = len(lines)
    for i in range(len(lines) - 1, epics_section_start, -1):
        if lines[i].strip() and not lines[i].startswith('### Epic ') and not lines[i].startswith('---'):
            # Check if this is content after epics
            if i + 1 < len(lines) and not any(lines[j].startswith('### Epic ') for j in range(i + 1, len(lines))):
                epics_section_end = i + 1
                break
    
    after_epics = '\n'.join(lines[epics_section_end:]) if epics_section_end < len(lines) else ''
    
    # Combine
    new_content = before_epics + '\n\n' + '\n'.join(sorted_epic_sections).rstrip() + '\n\n' + after_epics
    
    # Write back
    try:
        with open(board_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✅ Successfully sorted kanban board: {board_path}")
        print(f"   Sorted {len(epics)} epics numerically")
        return True
    except Exception as e:
        print(f"❌ Error writing sorted board: {e}", file=sys.stderr)
        return False


def main():
    parser = argparse.ArgumentParser(
        description='Sort kanban board numerically (epics, stories, tasks)'
    )
    parser.add_argument(
        '--board-path',
        type=Path,
        help='Path to kanban board file (default: from rw-config.yaml or docs/project-management/kanban/kanban-board.md)'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be sorted without making changes'
    )
    parser.add_argument(
        '--config',
        type=Path,
        help='Path to rw-config.yaml (default: auto-detect)'
    )
    
    args = parser.parse_args()
    
    # Determine board path
    board_path = args.board_path
    if board_path is None:
        # Try config first
        config = load_rw_config(args.config)
        if config and 'kanban_root' in config and 'kanban_board' in config:
            kanban_root = Path(config['kanban_root'])
            kanban_board = config['kanban_board']
            board_path = kanban_root / kanban_board
        else:
            # Default path
            board_path = Path('docs/project-management/kanban/kanban-board.md')
    
    if not board_path.is_absolute():
        board_path = Path.cwd() / board_path
    
    # Sort board
    success = sort_kanban_board(board_path, dry_run=args.dry_run)
    sys.exit(0 if success else 1)


if __name__ == '__main__':
    main()
