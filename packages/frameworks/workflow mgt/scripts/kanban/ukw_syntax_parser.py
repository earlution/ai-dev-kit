#!/usr/bin/env python3
"""
UKW Task Targeting Syntax Parser

Parses flexible task targeting syntax for UKW priority assignment operations.
Supports canonical format (E09S01T01), compact format (E9S1T1), case-insensitive,
optional separators, ranges, and multiple tasks.

Usage:
    from ukw_syntax_parser import parse_task_target
    
    # Single task
    tasks = parse_task_target("E09S01T01")
    
    # Multiple tasks
    tasks = parse_task_target("E09S01T01,E08S02T11")
    
    # Range
    tasks = parse_task_target("E09S01T01-E09S01T06")
    
    # Story
    tasks = parse_task_target("E09S01")
    
    # Epic
    tasks = parse_task_target("E09")
    
    # All
    tasks = parse_task_target("all")
"""

import re
from typing import List, Tuple, Optional, Set
from pathlib import Path


def normalize_task_id(epic: int, story: int, task: int) -> str:
    """
    Normalize task ID to canonical format: E{epic:02d}:S{story:03d}:T{task:02d}
    
    Examples:
        (9, 1, 1) -> "E09:S01:T01"
        (4, 16, 5) -> "E04:S16:T05"
    """
    return f"E{epic:02d}:S{story:03d}:T{task:02d}"


def parse_single_task_id(task_str: str) -> Optional[Tuple[int, int, int]]:
    """
    Parse a single task ID in various formats.
    
    Supported formats:
    - Canonical: E09S01T01, E09:S01:T01, E09-S01-T01
    - Compact: E9S1T1, e9s1t1
    - Case-insensitive
    
    Returns:
        Tuple of (epic, story, task) or None if invalid
    """
    # Normalize input (uppercase, remove separators for parsing)
    normalized = task_str.upper().replace(':', '').replace('-', '').strip()
    
    # Pattern: E followed by digits, S followed by digits, T followed by digits
    pattern = r'^E(\d+)S(\d+)T(\d+)$'
    match = re.match(pattern, normalized)
    
    if not match:
        return None
    
    try:
        epic = int(match.group(1))
        story = int(match.group(2))
        task = int(match.group(3))
        return (epic, story, task)
    except (ValueError, IndexError):
        return None


def parse_story_id(story_str: str) -> Optional[Tuple[int, int]]:
    """
    Parse a story ID in various formats.
    
    Supported formats:
    - E09S01, E09:S01, E09-S01
    - E9S1, e9s1
    - Case-insensitive
    
    Returns:
        Tuple of (epic, story) or None if invalid
    """
    normalized = story_str.upper().replace(':', '').replace('-', '').strip()
    
    pattern = r'^E(\d+)S(\d+)$'
    match = re.match(pattern, normalized)
    
    if not match:
        return None
    
    try:
        epic = int(match.group(1))
        story = int(match.group(2))
        return (epic, story)
    except (ValueError, IndexError):
        return None


def parse_epic_id(epic_str: str) -> Optional[int]:
    """
    Parse an epic ID in various formats.
    
    Supported formats:
    - E09, E9, e9
    - Case-insensitive
    
    Returns:
        Epic number or None if invalid
    """
    normalized = epic_str.upper().strip()
    
    # Remove E prefix if present
    if normalized.startswith('E'):
        normalized = normalized[1:]
    
    try:
        epic = int(normalized)
        return epic
    except ValueError:
        return None


def expand_task_range(start_str: str, end_str: str) -> List[Tuple[int, int, int]]:
    """
    Expand a linear task range.
    
    Example: E09S01T01-E09S01T06
    Returns: [(9, 1, 1), (9, 1, 2), (9, 1, 3), (9, 1, 4), (9, 1, 5), (9, 1, 6)]
    
    Requirements:
    - Both start and end must be in the same epic and story
    - Start task number must be <= end task number
    """
    start_task = parse_single_task_id(start_str)
    end_task = parse_single_task_id(end_str)
    
    if not start_task or not end_task:
        return []
    
    start_epic, start_story, start_task_num = start_task
    end_epic, end_story, end_task_num = end_task
    
    # Must be in same epic and story
    if start_epic != end_epic or start_story != end_story:
        return []
    
    # Start must be <= end
    if start_task_num > end_task_num:
        return []
    
    # Generate range
    tasks = []
    for task_num in range(start_task_num, end_task_num + 1):
        tasks.append((start_epic, start_story, task_num))
    
    return tasks


def find_tasks_in_story(epic: int, story: int, kanban_root: Path) -> List[Tuple[int, int, int]]:
    """
    Find all tasks in a story by scanning task documents.
    
    Returns:
        List of (epic, story, task) tuples
    """
    tasks = []
    story_dir = kanban_root / f"epics/Epic-{epic}/Story-{story:03d}-*"
    
    # Find story directory
    story_dirs = list(kanban_root.glob(f"epics/Epic-{epic}/Story-{story:03d}-*"))
    if not story_dirs:
        # Try without zero-padding
        story_dirs = list(kanban_root.glob(f"epics/Epic-{epic}/Story-{story}-*"))
    
    if not story_dirs:
        return tasks
    
    story_path = story_dirs[0]
    
    # Find all task documents in story directory
    task_pattern = story_path / "T*-*.md"
    task_files = list(story_path.glob("T*-*.md"))
    
    for task_file in task_files:
        # Extract task number from filename: T{task}-*.md
        match = re.match(r'T(\d+)-', task_file.name)
        if match:
            task_num = int(match.group(1))
            tasks.append((epic, story, task_num))
    
    return sorted(tasks)


def find_tasks_in_epic(epic: int, kanban_root: Path) -> List[Tuple[int, int, int]]:
    """
    Find all tasks in an epic by scanning story and task documents.
    
    Returns:
        List of (epic, story, task) tuples
    """
    tasks = []
    epic_dir = kanban_root / f"epics/Epic-{epic}"
    
    if not epic_dir.exists():
        return tasks
    
    # Find all story directories
    story_dirs = [d for d in epic_dir.iterdir() if d.is_dir() and d.name.startswith("Story-")]
    
    for story_dir in story_dirs:
        # Extract story number from directory name
        match = re.match(r'Story-(\d+)', story_dir.name)
        if match:
            story = int(match.group(1))
            story_tasks = find_tasks_in_story(epic, story, kanban_root)
            tasks.extend(story_tasks)
    
    return sorted(tasks)


def find_all_unprioritized_tasks(kanban_root: Path) -> List[Tuple[int, int, int]]:
    """
    Find all unprioritized tasks by scanning all task documents.
    
    Returns:
        List of (epic, story, task) tuples for tasks without priorities
    """
    tasks = []
    epics_dir = kanban_root / "epics"
    
    if not epics_dir.exists():
        return tasks
    
    # Scan all epic directories
    for epic_dir in epics_dir.iterdir():
        if not epic_dir.is_dir() or not epic_dir.name.startswith("Epic-"):
            continue
        
        # Extract epic number
        match = re.match(r'Epic-(\d+)', epic_dir.name)
        if not match:
            continue
        
        epic = int(match.group(1))
        epic_tasks = find_tasks_in_epic(epic, kanban_root)
        
        # Filter for unprioritized tasks (would need to read task docs to check priority)
        # For now, return all tasks - filtering can be done later
        tasks.extend(epic_tasks)
    
    return sorted(tasks)


def parse_task_target(target_str: str, kanban_root: Optional[Path] = None) -> List[Tuple[int, int, int]]:
    """
    Parse flexible task targeting syntax.
    
    Supported formats:
    - Single task: E09S01T01, e9s1t1, E09:S01:T01
    - Multiple tasks: E09S01T01,E08S02T11
    - Linear range: E09S01T01-E09S01T06
    - Story: E09S01, e9s1
    - Epic: E09, e9
    - All unprioritized: all, *
    
    Returns:
        List of (epic, story, task) tuples in canonical order
    """
    if kanban_root is None:
        kanban_root = Path("docs/project-management/kanban")
    
    target_str = target_str.strip()
    
    # Handle "all" or "*"
    if target_str.lower() in ['all', '*']:
        return find_all_unprioritized_tasks(kanban_root)
    
    # Check for range syntax: E09S01T01-E09S01T06
    if '-' in target_str and 'E' in target_str:
        parts = target_str.split('-', 1)
        if len(parts) == 2:
            start_str, end_str = parts
            range_tasks = expand_task_range(start_str.strip(), end_str.strip())
            if range_tasks:
                return range_tasks
    
    # Check for multiple tasks: E09S01T01,E08S02T11
    if ',' in target_str:
        all_tasks = []
        parts = target_str.split(',')
        for part in parts:
            part_tasks = parse_task_target(part.strip(), kanban_root)
            all_tasks.extend(part_tasks)
        # Remove duplicates and sort
        return sorted(list(set(all_tasks)))
    
    # Try parsing as single task
    task = parse_single_task_id(target_str)
    if task:
        return [task]
    
    # Try parsing as story
    story = parse_story_id(target_str)
    if story:
        epic, story_num = story
        return find_tasks_in_story(epic, story_num, kanban_root)
    
    # Try parsing as epic
    epic = parse_epic_id(target_str)
    if epic is not None:
        return find_tasks_in_epic(epic, kanban_root)
    
    # Invalid syntax
    return []


def validate_task_target(target_str: str, kanban_root: Optional[Path] = None) -> Tuple[bool, Optional[str]]:
    """
    Validate task targeting syntax.
    
    Returns:
        (is_valid, error_message)
    """
    if kanban_root is None:
        kanban_root = Path("docs/project-management/kanban")
    
    target_str = target_str.strip()
    
    if not target_str:
        return False, "Empty target string"
    
    # Try parsing
    tasks = parse_task_target(target_str, kanban_root)
    
    if not tasks:
        return False, f"Invalid task target syntax: {target_str}"
    
    return True, None


if __name__ == '__main__':
    # Test the parser
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python ukw_syntax_parser.py <target>")
        sys.exit(1)
    
    target = sys.argv[1]
    tasks = parse_task_target(target)
    
    if tasks:
        print(f"Parsed {len(tasks)} task(s):")
        for epic, story, task in tasks:
            print(f"  {normalize_task_id(epic, story, task)}")
    else:
        print(f"Failed to parse: {target}")
        sys.exit(1)
