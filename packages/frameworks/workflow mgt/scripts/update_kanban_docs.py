#!/usr/bin/env python3
"""
Framework-Agnostic Kanban Documentation Update Script

This script implements the deterministic pipeline for RW Step 7 (Auto-update Kanban Docs)
as defined in E2:S08:T01 analysis. It provides high-reliability updates for canonical
Kanban documentation structures while supporting agentic hooks for non-canonical cases.

Based on: E2:S08:T01 - Deterministic vs Agentic Analysis
Implements: Steps 1-7, 9-10, 12-15 (deterministic pipeline)
Provides hooks for: Steps 2 fallback, 9 non-canonical, 11, 16-18 (agentic)

Usage:
    python packages/frameworks/workflow mgt/scripts/update_kanban_docs.py [--version-file PATH] [--config PATH] [--dry-run]

    --version-file: Path to version file (auto-detected if not provided)
    --config: Path to rw-config.yaml (auto-detected if not provided)
    --dry-run: Show what would be updated without making changes
"""

import argparse
import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Tuple

try:
    import yaml
except ImportError:
    yaml = None


def load_rw_config(config_path: Optional[Path] = None) -> Optional[Dict]:
    """Load rw-config.yaml if it exists."""
    if config_path is None:
        config_path = Path.cwd() / "rw-config.yaml"
    
    if not config_path.exists() or yaml is None:
        return None
    
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f)
    except Exception:
        return None


def get_version_file_path(config: Optional[Dict] = None) -> Path:
    """Get version file path from config or use default."""
    if config and 'version_file' in config:
        return Path(config['version_file'])
    # Default fallback
    return Path("src/fynd_deals/version.py")


def get_version_components(version_file: Path) -> Optional[Tuple[int, int, int, int, int]]:
    """
    Extract version components from version file.
    
    Returns:
        (RC, EPIC, STORY, TASK, BUILD) or None if not found
    """
    if not version_file.exists():
        return None
    
    content = version_file.read_text()
    
    rc_match = re.search(r'VERSION_RC\s*=\s*(\d+)', content)
    epic_match = re.search(r'VERSION_EPIC\s*=\s*(\d+)', content)
    story_match = re.search(r'VERSION_STORY\s*=\s*(\d+)', content)
    task_match = re.search(r'VERSION_TASK\s*=\s*(\d+)', content)
    build_match = re.search(r'VERSION_BUILD\s*=\s*(\d+)', content)
    
    if all([rc_match, epic_match, story_match, task_match, build_match]):
        return (
            int(rc_match.group(1)),
            int(epic_match.group(1)),
            int(story_match.group(1)),
            int(task_match.group(1)),
            int(build_match.group(1))
        )
    return None


def resolve_kanban_paths(
    epic: int,
    story: int,
    config: Optional[Dict] = None,
    project_root: Path = None
) -> Dict[str, Path]:
    """
    Resolve Kanban paths for Epic/Story using config + canonical defaults.
    
    Returns:
        Dict with keys: 'story_doc', 'epic_doc', 'kanban_board' (if exists)
    """
    if project_root is None:
        project_root = Path.cwd()
    
    paths = {}
    
    # Determine kanban root
    if config and config.get('use_kanban') and 'kanban_root' in config:
        kanban_root = Path(config['kanban_root'])
    else:
        # Default fallback patterns
        kanban_root = project_root / "KB/PM_and_Portfolio/kanban"
    
    # Resolve Story doc path
    if config and config.get('use_kanban') and 'story_doc_pattern' in config:
        story_pattern = config['story_doc_pattern'].format(epic=epic, story=story)
        story_doc = project_root / story_pattern
    else:
        # Default fallback: try multiple patterns
        story_patterns = [
            kanban_root / f"epics/Epic-{epic}/Story-{story:03d}-*.md",
            kanban_root / f"epics/Epic-{epic}/Story-{story}-*.md",
        ]
        story_doc = None
        for pattern in story_patterns:
            matches = list(project_root.glob(str(pattern.relative_to(project_root))))
            if matches:
                story_doc = matches[0]
                break
    
    if story_doc and story_doc.exists():
        paths['story_doc'] = story_doc
    
    # Resolve Epic doc path
    if config and config.get('use_kanban') and 'epic_doc_pattern' in config:
        epic_pattern = config['epic_doc_pattern'].format(epic=epic)
        epic_doc = project_root / epic_pattern
    else:
        # Default fallback patterns
        epic_patterns = [
            project_root / f"KB/PM_and_Portfolio/epics/overview/Epic {epic}/Epic-{epic}.md",
            project_root / f"KB/PM_and_Portfolio/kanban/epics/Epic-{epic}/Epic-{epic}.md",
        ]
        epic_doc = None
        for pattern in epic_patterns:
            if pattern.exists():
                epic_doc = pattern
                break
    
    if epic_doc and epic_doc.exists():
        paths['epic_doc'] = epic_doc
    
    # Resolve Kanban board (optional)
    if config and config.get('use_kanban') and 'kanban_board' in config:
        board_path = project_root / config['kanban_board']
        if board_path.exists():
            paths['kanban_board'] = board_path
    else:
        # Default fallback
        board_patterns = [
            kanban_root / "kanban-board.md",
            project_root / "KB/PM_and_Portfolio/kanban/kanban-board.md",
        ]
        for pattern in board_patterns:
            if pattern.exists():
                paths['kanban_board'] = pattern
                break
    
    return paths


def parse_story_task_checklist(story_content: str, epic: int, story: int, task: int) -> Optional[Dict]:
    """
    Parse Story Task Checklist to find the completed task row.
    
    Returns:
        Dict with task info if found, None otherwise
    """
    # Pattern: [x] **E{epic}:S{story}:T{task} – Task description** ✅ COMPLETE (v0.X.Y.Z+B)
    pattern = re.compile(
        rf'\[x\]\s+\*\*E{epic}:S{story}:T{task:02d}[^\*]*\*\*\s+✅\s+COMPLETE\s+\(v([^\)]+)\)',
        re.IGNORECASE | re.MULTILINE
    )
    
    match = pattern.search(story_content)
    if match:
        return {
            'task_id': f"E{epic}:S{story}:T{task:02d}",
            'version': match.group(1),
            'line': match.group(0)
        }
    
    # Try non-zero-padded task number
    pattern2 = re.compile(
        rf'\[x\]\s+\*\*E{epic}:S{story}:T{task}[^\*]*\*\*\s+✅\s+COMPLETE\s+\(v([^\)]+)\)',
        re.IGNORECASE | re.MULTILINE
    )
    match2 = pattern2.search(story_content)
    if match2:
        return {
            'task_id': f"E{epic}:S{story}:T{task}",
            'version': match2.group(1),
            'line': match2.group(0)
        }
    
    return None


def parse_story_header(story_content: str) -> Dict:
    """
    Parse Story header to read canonical Story-level status, dates, and version.
    
    Returns:
        Dict with header fields
    """
    header_info = {}
    
    # Extract Status
    status_match = re.search(r'\*\*Status:\*\*\s*(.+?)(?:\n|$)', story_content, re.IGNORECASE)
    if status_match:
        header_info['status'] = status_match.group(1).strip()
    
    # Extract Last updated
    last_updated_match = re.search(r'\*\*Last updated:\*\*\s*(.+?)(?:\n|$)', story_content, re.IGNORECASE)
    if last_updated_match:
        header_info['last_updated'] = last_updated_match.group(1).strip()
    
    # Extract Version
    version_match = re.search(r'\*\*Version:\*\*\s*(.+?)(?:\n|$)', story_content, re.IGNORECASE)
    if version_match:
        header_info['version'] = version_match.group(1).strip()
    
    # Extract Completed date
    completed_match = re.search(r'\*\*Completed:\*\*\s*(.+?)(?:\n|$)', story_content, re.IGNORECASE)
    if completed_match:
        header_info['completed'] = completed_match.group(1).strip()
    
    return header_info


def compute_story_completion_state(story_content: str) -> Dict:
    """
    Compute derived Story/Epic state (e.g., whether all tasks are complete).
    
    Returns:
        Dict with completion state info
    """
    # Count completed vs total tasks in Task Checklist
    completed_tasks = len(re.findall(r'\[x\]\s+\*\*E\d+:S\d+:T\d+', story_content, re.IGNORECASE))
    total_tasks = len(re.findall(r'\[[x\s]\]\s+\*\*E\d+:S\d+:T\d+', story_content, re.IGNORECASE))
    
    all_tasks_complete = (completed_tasks > 0 and completed_tasks == total_tasks)
    
    # Check if story is marked complete
    story_complete = bool(re.search(r'\*\*Status:\*\*\s*.*COMPLETE', story_content, re.IGNORECASE))
    
    return {
        'completed_tasks': completed_tasks,
        'total_tasks': total_tasks,
        'all_tasks_complete': all_tasks_complete,
        'story_complete': story_complete
    }


def derive_target_state(
    version: Tuple[int, int, int, int, int],
    story_header: Dict,
    task_info: Dict,
    completion_state: Dict,
    current_date: str = None
) -> Dict:
    """
    Derive desired target state for each artefact from authoritative Story state.
    
    Returns:
        Dict with target states for Story doc, Epic doc, Kanban board
    """
    if current_date is None:
        current_date = datetime.now().strftime('%Y-%m-%d')
    
    rc, epic, story, task, build = version
    version_string = f"v{rc}.{epic}.{story}.{task}+{build}"
    
    # Target Story header state
    story_target = {
        'status': 'IN PROGRESS' if not completion_state['story_complete'] else '✅ COMPLETE',
        'last_updated': f"{current_date} ({version_string} – T{task:02d} complete: {task_info.get('task_id', 'Task')})",
        'version': version_string,
        'completed': current_date if completion_state['story_complete'] else None
    }
    
    # Target Epic Story Checklist entry
    epic_checklist_entry = {
        'status': '✅ COMPLETE' if completion_state['story_complete'] else 'IN PROGRESS',
        'version': version_string,
        'task_info': f"T{task:02d} complete" if not completion_state['all_tasks_complete'] else "All tasks complete"
    }
    
    # Target Epic header
    epic_header = {
        'last_updated': f"{current_date} ({version_string} – Story {story} Task {task} complete)"
    }
    
    return {
        'story': story_target,
        'epic_checklist': epic_checklist_entry,
        'epic_header': epic_header,
        'version_string': version_string
    }


def update_story_doc(
    story_path: Path,
    target_state: Dict,
    task_info: Dict,
    dry_run: bool = False
) -> Tuple[bool, List[str]]:
    """
    Apply structured text transforms to Story doc: update header fields and ALL references.
    
    Returns:
        (success, list_of_changes)
    """
    if not story_path.exists():
        return False, [f"Story doc not found: {story_path}"]
    
    content = story_path.read_text()
    changes = []
    
    # Update Story header Status
    status_pattern = r'(\*\*Status:\*\*)\s*(.+?)(?:\n|$)'
    if re.search(status_pattern, content, re.IGNORECASE):
        new_status = f"**Status:** {target_state['story']['status']}"
        content = re.sub(status_pattern, rf'\1 {target_state["story"]["status"]}\n', content, flags=re.IGNORECASE)
        changes.append(f"Updated Status: {target_state['story']['status']}")
    
    # Update Story header Last updated
    last_updated_pattern = r'(\*\*Last updated:\*\*)\s*(.+?)(?:\n|$)'
    if re.search(last_updated_pattern, content, re.IGNORECASE):
        content = re.sub(
            last_updated_pattern,
            rf'\1 {target_state["story"]["last_updated"]}\n',
            content,
            flags=re.IGNORECASE
        )
        changes.append(f"Updated Last updated: {target_state['story']['last_updated']}")
    
    # Update Story header Version
    version_pattern = r'(\*\*Version:\*\*)\s*(.+?)(?:\n|$)'
    if re.search(version_pattern, content, re.IGNORECASE):
        content = re.sub(
            version_pattern,
            rf'\1 {target_state["story"]["version"]}\n',
            content,
            flags=re.IGNORECASE
        )
        changes.append(f"Updated Version: {target_state['story']['version']}")
    
    # Update Completed date if story is complete
    if target_state['story']['completed']:
        completed_pattern = r'(\*\*Completed:\*\*)\s*(.+?)(?:\n|$)'
        if re.search(completed_pattern, content, re.IGNORECASE):
            content = re.sub(
                completed_pattern,
                rf'\1 {target_state["story"]["completed"]}\n',
                content,
                flags=re.IGNORECASE
            )
            changes.append(f"Updated Completed: {target_state['story']['completed']}")
        else:
            # Add Completed field if missing
            # Find Version line and add Completed after it
            version_line_match = re.search(r'(\*\*Version:\*\*.*\n)', content, re.IGNORECASE)
            if version_line_match:
                insert_pos = version_line_match.end()
                content = content[:insert_pos] + f"**Completed:** {target_state['story']['completed']}\n" + content[insert_pos:]
                changes.append(f"Added Completed: {target_state['story']['completed']}")
    
    if not dry_run:
        story_path.write_text(content)
    
    return True, changes


def update_epic_doc(
    epic_path: Path,
    story: int,
    target_state: Dict,
    dry_run: bool = False
) -> Tuple[bool, List[str]]:
    """
    Apply structured text transforms to Epic doc: update Story Checklist entry and header metadata.
    
    Returns:
        (success, list_of_changes)
    """
    if not epic_path.exists():
        return False, [f"Epic doc not found: {epic_path}"]
    
    content = epic_path.read_text()
    changes = []
    
    # Update Epic Story Checklist entry
    # Pattern: - [ ] **E2:S08** - Story description - IN PROGRESS (v0.2.8.1+1)
    checklist_pattern = re.compile(
        rf'(- \[[x\s]\]\s+\*\*E\d+:S{story}[^\n]*)',
        re.IGNORECASE | re.MULTILINE
    )
    
    def update_checklist_entry(match):
        line = match.group(1)
        # Update checkbox if story complete
        if target_state['epic_checklist']['status'] == '✅ COMPLETE':
            line = re.sub(r'\[ \]', '[x]', line)
        # Update status and version
        if 'IN PROGRESS' in line or 'TODO' in line:
            line = re.sub(
                r'(IN PROGRESS|TODO).*$',
                f"{target_state['epic_checklist']['status']} ({target_state['version_string']})",
                line
            )
        elif 'COMPLETE' not in line:
            # Add status if missing
            line = f"{line.rstrip()} {target_state['epic_checklist']['status']} ({target_state['version_string']})"
        return line
    
    if checklist_pattern.search(content):
        content = checklist_pattern.sub(update_checklist_entry, content)
        changes.append(f"Updated Story {story} checklist entry")
    
    # Update Epic header Last updated
    epic_last_updated_pattern = r'(\*\*Last updated:\*\*)\s*(.+?)(?:\n|$)'
    if re.search(epic_last_updated_pattern, content, re.IGNORECASE):
        content = re.sub(
            epic_last_updated_pattern,
            rf'\1 {target_state["epic_header"]["last_updated"]}\n',
            content,
            flags=re.IGNORECASE
        )
        changes.append(f"Updated Epic Last updated: {target_state['epic_header']['last_updated']}")
    
    if not dry_run:
        epic_path.write_text(content)
    
    return True, changes


def validate_updates(
    story_path: Path,
    epic_path: Optional[Path],
    version_string: str,
    version_components: Tuple[int, int, int, int, int],
    task_info: Optional[Dict] = None
) -> Tuple[bool, List[str], List[str]]:
    """
    Comprehensive validation of Kanban docs updates (Steps 12-14 from T01 analysis).
    
    Step 12: Re-parse updated docs to ensure internal consistency
    Step 13: Validate against policy & FRs
    Step 14: Detect drift between Kanban docs and version file / CHANGELOG
    
    Returns:
        (is_valid, list_of_errors, list_of_warnings)
    """
    errors = []
    warnings = []
    rc, epic, story, task, build = version_components
    
    # ===== Step 12: Internal Consistency Checks =====
    
    # Validate Story doc exists and is readable
    if not story_path or not story_path.exists():
        errors.append(f"❌ REQUIRED DOC MISSING: Story doc not found: {story_path}")
        return False, errors, warnings
    
    try:
        story_content = story_path.read_text()
    except Exception as e:
        errors.append(f"❌ FILE READ ERROR: Cannot read Story doc {story_path}: {e}")
        return False, errors, warnings
    
    story_header = parse_story_header(story_content)
    
    # Check Story header version matches expected version
    if story_header.get('version') != version_string:
        errors.append(
            f"❌ VERSION MISMATCH: Story header version mismatch\n"
            f"   Expected: {version_string}\n"
            f"   Found: {story_header.get('version')}\n"
            f"   File: {story_path}"
        )
    
    # Check Story header Last updated contains version
    if version_string not in story_header.get('last_updated', ''):
        errors.append(
            f"❌ VERSION MISSING IN LAST UPDATED: Story Last updated field missing version\n"
            f"   Expected version: {version_string}\n"
            f"   Found: {story_header.get('last_updated')}\n"
            f"   File: {story_path}"
        )
    
    # Check status consistency (if COMPLETE, should have Completed date)
    if 'COMPLETE' in story_header.get('status', ''):
        if not story_header.get('completed'):
            errors.append(
                f"❌ STATUS INCONSISTENCY: Story marked COMPLETE but missing Completed date\n"
                f"   File: {story_path}"
            )
    
    # Check Task Checklist entry for completed task
    if task_info:
        task_checklist_pattern = re.compile(
            rf'\[x\]\s+\*\*E{epic}:S{story}:T{task:02d}[^\*]*\*\*\s+✅\s+COMPLETE\s+\(v([^\)]+)\)',
            re.IGNORECASE | re.MULTILINE
        )
        if not task_checklist_pattern.search(story_content):
            # Try non-zero-padded
            task_checklist_pattern2 = re.compile(
                rf'\[x\]\s+\*\*E{epic}:S{story}:T{task}[^\*]*\*\*\s+✅\s+COMPLETE\s+\(v([^\)]+)\)',
                re.IGNORECASE | re.MULTILINE
            )
            if not task_checklist_pattern2.search(story_content):
                errors.append(
                    f"❌ TASK CHECKLIST MISSING: Completed task E{epic}:S{story}:T{task} not found in Story Task Checklist\n"
                    f"   File: {story_path}"
                )
            else:
                # Check version in checklist matches
                match = task_checklist_pattern2.search(story_content)
                if match and match.group(1) != version_string:
                    errors.append(
                        f"❌ TASK CHECKLIST VERSION MISMATCH: Task checklist version mismatch\n"
                        f"   Expected: {version_string}\n"
                        f"   Found in checklist: v{match.group(1)}\n"
                        f"   File: {story_path}"
                    )
        else:
            # Check version in checklist matches
            match = task_checklist_pattern.search(story_content)
            if match and match.group(1) != version_string:
                errors.append(
                    f"❌ TASK CHECKLIST VERSION MISMATCH: Task checklist version mismatch\n"
                    f"   Expected: {version_string}\n"
                    f"   Found in checklist: v{match.group(1)}\n"
                    f"   File: {story_path}"
                )
    
    # Validate Epic doc consistency (if exists)
    if epic_path and epic_path.exists():
        try:
            epic_content = epic_path.read_text()
            epic_header = parse_story_header(epic_content)
            
            # Check that version appears in Epic Last updated
            if version_string not in epic_header.get('last_updated', ''):
                errors.append(
                    f"❌ EPIC VERSION MISSING: Epic Last updated field missing version\n"
                    f"   Expected version: {version_string}\n"
                    f"   Found: {epic_header.get('last_updated')}\n"
                    f"   File: {epic_path}"
                )
            
            # Check Epic Story Checklist entry exists and has correct status
            checklist_pattern = re.compile(
                rf'(- \[[x\s]\]\s+\*\*E{epic}:S{story}[^\n]*)',
                re.IGNORECASE | re.MULTILINE
            )
            checklist_match = checklist_pattern.search(epic_content)
            if not checklist_match:
                warnings.append(
                    f"⚠️  EPIC CHECKLIST ENTRY MISSING: Story {story} entry not found in Epic Story Checklist\n"
                    f"   File: {epic_path}"
                )
            else:
                checklist_line = checklist_match.group(1)
                # Check version appears in checklist entry
                if version_string not in checklist_line:
                    errors.append(
                        f"❌ EPIC CHECKLIST VERSION MISSING: Epic Story Checklist entry missing version\n"
                        f"   Expected version: {version_string}\n"
                        f"   Checklist line: {checklist_line.strip()}\n"
                        f"   File: {epic_path}"
                    )
        except Exception as e:
            warnings.append(f"⚠️  EPIC DOC READ WARNING: Cannot read Epic doc {epic_path}: {e}")
    elif epic_path:
        warnings.append(f"⚠️  EPIC DOC OPTIONAL: Epic doc not found (optional): {epic_path}")
    
    # ===== Step 13: Policy & FR Validation =====
    
    # Validate Story header has required fields
    required_story_fields = ['status', 'last_updated', 'version']
    for field in required_story_fields:
        if not story_header.get(field):
            errors.append(
                f"❌ REQUIRED FIELD MISSING: Story header missing required field: {field}\n"
                f"   File: {story_path}"
            )
    
    # Validate format of version string in header
    version_in_header = story_header.get('version', '')
    if version_in_header and not re.match(r'^v\d+\.\d+\.\d+\.\d+\+\d+$', version_in_header):
        errors.append(
            f"❌ VERSION FORMAT INVALID: Story header version format invalid\n"
            f"   Expected format: vRC.EPIC.STORY.TASK+BUILD\n"
            f"   Found: {version_in_header}\n"
            f"   File: {story_path}"
        )
    
    # ===== Step 14: Cross-check with version file =====
    # (Version file validation is done separately in validate_version_bump.py,
    # but we verify consistency here)
    
    # Verify version components match
    version_match = re.match(r'^v(\d+)\.(\d+)\.(\d+)\.(\d+)\+(\d+)$', version_string)
    if version_match:
        v_rc, v_epic, v_story, v_task, v_build = map(int, version_match.groups())
        if (v_rc, v_epic, v_story, v_task, v_build) != (rc, epic, story, task, build):
            errors.append(
                f"❌ VERSION COMPONENT MISMATCH: Version string components don't match\n"
                f"   Version string: {version_string}\n"
                f"   Components: RC={rc}, EPIC={epic}, STORY={story}, TASK={task}, BUILD={build}\n"
                f"   Parsed from string: RC={v_rc}, EPIC={v_epic}, STORY={v_story}, TASK={v_task}, BUILD={v_build}"
            )
    
    return len(errors) == 0, errors, warnings


def main():
    parser = argparse.ArgumentParser(description="Update Kanban documentation for completed task")
    parser.add_argument(
        "--version-file",
        type=Path,
        help="Path to version file (auto-detected if not provided)",
    )
    parser.add_argument(
        "--config",
        type=Path,
        help="Path to rw-config.yaml (auto-detected if not provided)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be updated without making changes",
    )
    args = parser.parse_args()
    
    # Load config
    config = load_rw_config(args.config)
    
    # Get version components
    version_file = args.version_file or get_version_file_path(config)
    if not version_file.exists():
        print(f"❌ Version file not found: {version_file}")
        sys.exit(1)
    
    version_components = get_version_components(version_file)
    if not version_components:
        print(f"❌ Could not extract version components from {version_file}")
        sys.exit(1)
    
    rc, epic, story, task, build = version_components
    version_string = f"v{rc}.{epic}.{story}.{task}+{build}"
    
    print(f"🔍 Updating Kanban docs for {version_string} (E{epic}:S{story}:T{task})")
    
    # Resolve Kanban paths
    paths = resolve_kanban_paths(epic, story, config)
    
    if 'story_doc' not in paths:
        print(f"❌ Story doc not found for Epic {epic}, Story {story}")
        sys.exit(1)
    
    story_path = paths['story_doc']
    print(f"📄 Story doc: {story_path}")
    
    # Load Story doc
    story_content = story_path.read_text()
    
    # Parse Story Task Checklist
    task_info = parse_story_task_checklist(story_content, epic, story, task)
    if not task_info:
        print(f"⚠️  Task {task} not found in Story Task Checklist (may not be marked complete yet)")
        # Continue anyway - might be updating for other reasons
    
    # Parse Story header
    story_header = parse_story_header(story_content)
    
    # Compute completion state
    completion_state = compute_story_completion_state(story_content)
    
    # Derive target state
    target_state = derive_target_state(
        version_components,
        story_header,
        task_info or {},
        completion_state
    )
    
    # Update Story doc
    if 'story_doc' in paths:
        success, changes = update_story_doc(paths['story_doc'], target_state, task_info or {}, args.dry_run)
        if success:
            print(f"✅ Story doc updated: {', '.join(changes)}")
        else:
            print(f"❌ Failed to update Story doc: {changes}")
            sys.exit(1)
    
    # Update Epic doc
    if 'epic_doc' in paths:
        success, changes = update_epic_doc(paths['epic_doc'], story, target_state, args.dry_run)
        if success:
            print(f"✅ Epic doc updated: {', '.join(changes)}")
        else:
            print(f"⚠️  Epic doc update: {changes}")
            # Don't fail if Epic doc update fails (may not exist in all projects)
    
    # Validate updates (Steps 12-14: comprehensive validation)
    if not args.dry_run:
        is_valid, errors, warnings = validate_updates(
            paths.get('story_doc'),
            paths.get('epic_doc'),
            version_string,
            version_components,
            task_info
        )
        
        # Print warnings (non-blocking)
        if warnings:
            for warning in warnings:
                print(warning)
        
        # Print errors and fail if validation fails (blocking)
        if errors:
            print("\n❌ VALIDATION FAILED: Kanban docs update validation errors detected")
            print("=" * 80)
            for error in errors:
                print(error)
            print("=" * 80)
            print("\n🚫 RW BLOCKED at Step 7: Kanban docs update validation failed")
            print("   Fix the errors above and retry the Release Workflow.")
            sys.exit(1)
        
        if is_valid:
            print("✅ Validation passed: All Kanban docs updates verified")
    
    print(f"✅ Kanban docs update complete for {version_string}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
