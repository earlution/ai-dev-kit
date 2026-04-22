#!/usr/bin/env python3
"""
Framework-Agnostic Kanban Documentation Update Script

This script implements the deterministic pipeline for RW Step 7 (Auto-update Kanban Docs)
as defined in E2:S08:T01 analysis. It provides high-reliability updates for canonical
Kanban documentation structures while supporting agentic hooks for non-canonical cases.

Based on: E2:S08:T01 - Deterministic vs Agentic Analysis
Implements: Steps 1-7, 9-10, 12-15 (deterministic pipeline)
Provides hooks for: Steps 2 fallback, 9 non-canonical, 11, 16-18 (agentic)

Enhanced in E5:S01:T36: Added Kanban board update functionality.
Updates board metadata (Last Updated, Version) and epic/story status sections.

Usage:
    python packages/frameworks/workflow mgt/scripts/update_kanban_docs.py [--version-file PATH] [--config PATH] [--dry-run]

    --version-file: Path to version file (auto-detected if not provided)
    --config: Path to rw-config.yaml (auto-detected if not provided)
    --dry-run: Show what would be updated without making changes
"""

import argparse
from dataclasses import dataclass
import hashlib
import os
import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

try:
    import yaml
except ImportError:
    yaml = None


# Recovery playbooks for common error scenarios (Step 16-17 from T01 analysis)
RECOVERY_PLAYBOOKS = {
    'REQUIRED_DOC_MISSING': {
        'description': 'Required Kanban document is missing',
        'recovery_steps': [
            '1. Verify the Story doc path is correct in rw-config.yaml or canonical defaults',
            '2. Check if the Story doc exists at the expected location',
            '3. If doc doesn\'t exist, create it using the Story template',
            '4. Ensure the doc follows the canonical structure (header, Task Checklist, etc.)',
            '5. Retry the Release Workflow'
        ],
        'auto_repairable': False,
        'override_allowed': False
    },
    'FILE_READ_ERROR': {
        'description': 'Cannot read Kanban document file',
        'recovery_steps': [
            '1. Check file permissions (ensure file is readable)',
            '2. Verify file is not corrupted or locked by another process',
            '3. Check disk space and filesystem health',
            '4. If file is corrupted, restore from git history: `git checkout HEAD -- <file_path>`',
            '5. Retry the Release Workflow'
        ],
        'auto_repairable': False,
        'override_allowed': False
    },
    'VERSION_MISMATCH': {
        'description': 'Version mismatch between expected and found values',
        'recovery_steps': [
            '1. Verify version file has correct version components',
            '2. Check if Story doc header was manually edited (should be auto-updated)',
            '3. Restore Story doc header from git: `git checkout HEAD -- <story_path>`',
            '4. Re-run Release Workflow to auto-update header',
            '5. Do not manually edit version markers in Kanban docs'
        ],
        'auto_repairable': True,
        'override_allowed': False
    },
    'VERSION_MISSING_IN_LAST_UPDATED': {
        'description': 'Version string missing in Last updated field',
        'recovery_steps': [
            '1. This indicates the update script did not properly update the Last updated field',
            '2. Check if Story doc header format matches canonical structure',
            '3. Restore Story doc from git: `git checkout HEAD -- <story_path>`',
            '4. Re-run Release Workflow',
            '5. If issue persists, check script logs for update failures'
        ],
        'auto_repairable': True,
        'override_allowed': False
    },
    'STATUS_INCONSISTENCY': {
        'description': 'Status field inconsistency (e.g., COMPLETE without Completed date)',
        'recovery_steps': [
            '1. If Story is marked COMPLETE, ensure Completed date field exists',
            '2. Add Completed date manually if missing: `**Completed:** YYYY-MM-DD`',
            '3. Or restore from git and re-run Release Workflow',
            '4. Ensure status and dates are consistent across header and checklists'
        ],
        'auto_repairable': True,
        'override_allowed': False
    },
    'TASK_CHECKLIST_MISSING': {
        'description': 'Completed task not found in Story Task Checklist',
        'recovery_steps': [
            '1. Verify task was actually completed (check git diff)',
            '2. Ensure Task Checklist entry exists with format: `- [x] **E{epic}:S{story}:T{task} – Description** ✅ COMPLETE (vX.Y.Z.T+B)`',
            '3. Add Task Checklist entry manually if missing',
            '4. Ensure task number matches version components',
            '5. Re-run Release Workflow'
        ],
        'auto_repairable': False,
        'override_allowed': False
    },
    'TASK_CHECKLIST_VERSION_MISMATCH': {
        'description': 'Task Checklist version mismatch',
        'recovery_steps': [
            '1. Verify version in Task Checklist entry matches version file',
            '2. Update Task Checklist entry: `- [x] **E{epic}:S{story}:T{task} – Description** ✅ COMPLETE (v{version})`',
            '3. Or restore from git and re-run Release Workflow',
            '4. Do not manually edit version markers'
        ],
        'auto_repairable': True,
        'override_allowed': False
    },
    'EPIC_VERSION_MISSING': {
        'description': 'Version missing in Epic Last updated or Story Checklist',
        'recovery_steps': [
            '1. Check Epic doc Last updated field format',
            '2. Update Epic Last updated: `**Last updated:** YYYY-MM-DD (v{version} – Story {story} Task {task} complete)`',
            '3. Update Epic Story Checklist entry with version marker',
            '4. Or restore from git and re-run Release Workflow'
        ],
        'auto_repairable': True,
        'override_allowed': False
    },
    'REQUIRED_FIELD_MISSING': {
        'description': 'Required field missing in Story header',
        'recovery_steps': [
            '1. Verify Story doc header has all required fields: Status, Last updated, Version',
            '2. Add missing fields using canonical format',
            '3. Reference Story template: `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`',
            '4. Or restore from git and re-run Release Workflow'
        ],
        'auto_repairable': True,
        'override_allowed': False
    },
    'VERSION_FORMAT_INVALID': {
        'description': 'Version string format is invalid',
        'recovery_steps': [
            '1. Verify version format: `vRC.EPIC.STORY.TASK+BUILD` (e.g., v0.2.8.4+1)',
            '2. Check version file has correct format',
            '3. Update Story header Version field to match version file',
            '4. Do not use non-standard version formats'
        ],
        'auto_repairable': True,
        'override_allowed': False
    },
    'VERSION_COMPONENT_MISMATCH': {
        'description': 'Version components don\'t match between version string and parsed components',
        'recovery_steps': [
            '1. Verify version file has correct components',
            '2. Check version string parsing logic',
            '3. This is a script bug - report issue if it persists',
            '4. Verify version file format matches expected schema'
        ],
        'auto_repairable': False,
        'override_allowed': False
    },
    'PERMISSION_ERROR': {
        'description': 'Permission error when reading/writing files',
        'recovery_steps': [
            '1. Check file permissions: `ls -l <file_path>`',
            '2. Ensure user has read/write permissions',
            '3. Fix permissions: `chmod 644 <file_path>` (read) or `chmod 664 <file_path>` (read/write)',
            '4. Check directory permissions if creating new files',
            '5. Retry Release Workflow'
        ],
        'auto_repairable': False,
        'override_allowed': False
    },
    'MALFORMED_DOC': {
        'description': 'Kanban document has malformed structure',
        'recovery_steps': [
            '1. Verify document follows canonical structure (header, checklists, etc.)',
            '2. Check for syntax errors in markdown',
            '3. Validate against Story template: `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`',
            '4. Restore from git: `git checkout HEAD -- <file_path>`',
            '5. Re-run Release Workflow'
        ],
        'auto_repairable': False,
        'override_allowed': False
    }
}


def get_recovery_guidance(error_type: str, file_path: Optional[Path] = None) -> str:
    """
    Generate human-readable recovery guidance for an error type (Step 17 from T01 analysis).
    
    Returns:
        Formatted recovery guidance string
    """
    playbook = RECOVERY_PLAYBOOKS.get(error_type)
    if not playbook:
        return f"⚠️  No recovery playbook available for error type: {error_type}"
    
    guidance = f"\n📋 RECOVERY GUIDANCE: {playbook['description']}\n"
    guidance += "=" * 80 + "\n"
    
    if file_path:
        guidance += f"📄 Affected file: {file_path}\n\n"
    
    guidance += "🔧 Recovery Steps:\n"
    for step in playbook['recovery_steps']:
        guidance += f"   {step}\n"
    
    if playbook['auto_repairable']:
        guidance += "\n💡 Note: This error may be auto-repairable by restoring from git and re-running RW.\n"
    
    if playbook['override_allowed']:
        guidance += "\n⚠️  Override available: Use --allow-override flag (use with caution).\n"
    else:
        guidance += "\n🚫 Override not available: This error must be fixed before proceeding.\n"
    
    guidance += "=" * 80 + "\n"
    
    return guidance


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
        kanban_root_str = config['kanban_root']
        if Path(kanban_root_str).is_absolute():
            kanban_root = Path(kanban_root_str)
        else:
            kanban_root = project_root / kanban_root_str
    else:
        # Default fallback patterns
        kanban_root = project_root / "docs/project-management/kanban"
    
    # Ensure kanban_root is absolute
    if not kanban_root.is_absolute():
        kanban_root = (project_root / kanban_root).resolve()
    
    # Resolve Story doc path
    if config and config.get('use_kanban') and 'story_doc_pattern' in config:
        story_pattern = config['story_doc_pattern'].format(epic=epic, story=story)
        # IMPORTANT: Pattern is relative to kanban_root, not project_root
        full_pattern = kanban_root / story_pattern
        matches = list(full_pattern.parent.glob(full_pattern.name)) if full_pattern.parent.exists() else []
        story_doc = matches[0].resolve() if matches else None
    else:
        # Default fallback: try multiple patterns
        story_patterns = [
            f"epics/Epic-{epic}/Story-{story:03d}-*.md",
            f"epics/Epic-{epic}/Story-{story}-*.md",
        ]
        story_doc = None
        for pattern in story_patterns:
            # Construct pattern relative to kanban_root, then make relative to project_root for glob
            if kanban_root.is_absolute():
                # If kanban_root is absolute, use it directly with glob
                full_pattern = kanban_root / pattern
                matches = list(full_pattern.parent.glob(full_pattern.name))
            else:
                # kanban_root is relative to project_root, so construct relative pattern
                rel_pattern = str(kanban_root / pattern)
                matches = list(project_root.glob(rel_pattern))
            if matches:
                # Ensure we have an absolute path
                story_doc = matches[0] if matches[0].is_absolute() else (project_root / matches[0])
                # Normalize to absolute path
                story_doc = story_doc.resolve()
                break
    
    if story_doc and story_doc.exists():
        paths['story_doc'] = story_doc
    
    # Resolve Epic doc path
    if config and config.get('use_kanban') and 'epic_doc_pattern' in config:
        epic_pattern = config['epic_doc_pattern'].format(epic=epic)
        # IMPORTANT: Pattern is relative to kanban_root, not project_root
        full_pattern = kanban_root / epic_pattern
        matches = list(full_pattern.parent.glob(full_pattern.name)) if full_pattern.parent.exists() else []
        epic_doc = matches[0].resolve() if matches else None
    else:
        # Default fallback patterns
        epic_patterns = [
            project_root / f"docs/project-management/epics/overview/Epic {epic}/Epic-{epic}.md",
            project_root / f"docs/project-management/kanban/epics/Epic-{epic}/Epic-{epic}.md",
        ]
        epic_doc = None
        for pattern in epic_patterns:
            if pattern.exists():
                epic_doc = pattern
                break
    
    if epic_doc and epic_doc.exists():
        paths['epic_doc'] = epic_doc
    
    # Resolve Kanban board (optional)
    board_found = False
    if config and config.get('use_kanban') and 'kanban_board' in config:
        board_path = project_root / config['kanban_board']
        if board_path.exists():
            paths['kanban_board'] = board_path.resolve()
            board_found = True
    if not board_found:
        # Default fallback - try multiple locations
        board_candidates = [
            kanban_root / "kboard.md",
            kanban_root / "kanban-board.md",
            project_root / "docs/project-management/kanban/kboard.md",
            project_root / "docs/project-management/kanban/kanban-board.md",
        ]
        for candidate in board_candidates:
            # Resolve candidate to absolute path
            try:
                if candidate.is_absolute():
                    abs_candidate = candidate
                else:
                    abs_candidate = (project_root / candidate).resolve()
                if abs_candidate.exists() and abs_candidate.is_file():
                    paths['kanban_board'] = abs_candidate
                    board_found = True
                    break
            except Exception:
                continue
    
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
    task_info: Dict,
    story_header: Dict,
    completion_state: Dict,
    current_date: str = None,
    mode: str = "full"
) -> Dict:
    """
    Derive desired target state for each artefact from authoritative Story state.
    
    Args:
        version: Version components (rc, epic, story, task, build)
        task_info: Task information from checklist
        story_header: Story header information
        completion_state: Story completion state
        current_date: Current date string
        mode: Update mode ('full' or 'kanban_init')
    
    Returns:
        Dict with target states for Story doc, Epic doc, Kanban board
    """
    if current_date is None:
        current_date = datetime.now().strftime('%Y-%m-%d')
    
    rc, epic, story, task, build = version
    version_string = f"v{rc}.{epic}.{story}.{task}+{build}"
    
    # Target Story header state
    # Use all_tasks_complete (actual completion state) not story_complete (current status in doc)
    story_target = {
        'status': 'IN PROGRESS' if not completion_state['all_tasks_complete'] else '✅ COMPLETE',
        'last_updated': f"{current_date} ({version_string} – T{task:02d} complete: {task_info.get('task_id', 'Task')})" if task_info else f"{current_date} ({version_string} – Kanban documentation setup)",
        'version': version_string,
        'completed': current_date if completion_state['all_tasks_complete'] else None
    }
    
    # Target Epic Story Checklist entry
    epic_checklist_entry = {
        'status': '✅ COMPLETE' if completion_state['all_tasks_complete'] else 'IN PROGRESS',
        'version': version_string,
        'task_info': f"T{task:02d} complete" if not completion_state['all_tasks_complete'] else "All tasks complete"
    }
    
    # Target Epic header
    epic_header = {
        'last_updated': f"{current_date} ({version_string} – Story {story} Task {task} complete)"
    }
    
    # Mode-specific filtering
    if mode == "kanban_init":
        # In kanban_init mode, only update version-related fields
        return {
            'story': {
                'version': version_string,
                'last_updated': f"{current_date} ({version_string} – Kanban documentation setup)"
            },
            'epic_checklist': {
                'version': version_string,
                'status': 'IN PROGRESS'  # Don't mark complete in init mode
            },
            'epic_header': {
                'last_updated': f"{current_date} ({version_string} – Kanban documentation setup)"
            },
            'version_string': version_string,
            'mode': 'kanban_init'
        }
    else:
        # Full mode - return all target states
        return {
            'story': story_target,
            'epic_checklist': epic_checklist_entry,
            'epic_header': epic_header,
            'version_string': version_string,
            'mode': 'full'
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
    mode = target_state.get('mode', 'full')
    
    # Update Story header Version (always updated)
    version_pattern = r'(\*\*Version:\*\*)\s*(.+?)(?:\n|$)'
    if re.search(version_pattern, content, re.IGNORECASE):
        content = re.sub(
            version_pattern,
            rf'\1 {target_state["story"]["version"]}\n',
            content,
            flags=re.IGNORECASE
        )
        changes.append(f"Updated Version: {target_state['story']['version']}")
    
    # Update Story header Last updated (always updated)
    if 'last_updated' in target_state['story']:
        last_updated_pattern = r'(\*\*Last updated:\*\*)\s*(.+?)(?:\n|$)'
        if re.search(last_updated_pattern, content, re.IGNORECASE):
            content = re.sub(
                last_updated_pattern,
                rf'\1 {target_state["story"]["last_updated"]}\n',
                content,
                flags=re.IGNORECASE
            )
            changes.append(f"Updated Last updated: {target_state['story']['last_updated']}")
    
    # In full mode, update additional fields
    if mode == 'full':
        # Update Story header Status
        if 'status' in target_state['story']:
            status_pattern = r'(\*\*Status:\*\*)\s*(.+?)(?:\n|$)'
            if re.search(status_pattern, content, re.IGNORECASE):
                content = re.sub(status_pattern, rf'\1 {target_state["story"]["status"]}\n', content, flags=re.IGNORECASE)
                changes.append(f"Updated Status: {target_state['story']['status']}")
        
        # Update Completed date if story is complete
        if target_state['story'].get('completed'):
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
                # Add completed date if not present
                status_match = re.search(r'(\*\*Status:\*\*)\s*(.+?)(?:\n|$)', content, re.IGNORECASE)
                if status_match and 'COMPLETE' in target_state['story']['status']:
                    completed_line = f"**Completed:** {target_state['story']['completed']}\n"
                    content = content[:status_match.end()] + completed_line + content[status_match.end():]
                    changes.append(f"Added Completed: {target_state['story']['completed']}")
    
    # Write changes
    if not dry_run and changes:
        story_path.write_text(content)
        changes.append(f"✅ Story doc updated: {story_path}")
    elif dry_run and changes:
        changes.append(f"🔍 DRY RUN: Would update Story doc: {story_path}")
    
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
        rf'(- \[[x\s]\]\s+\*\*E\d+:S{story}(?!\d)[^\n]*)',
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


def parse_kanban_board_metadata(board_content: str) -> Dict:
    """
    Parse Kanban board metadata (Last Updated, Version).
    
    Returns:
        Dict with 'last_updated' and 'version' fields
    """
    metadata = {}
    
    # Parse Last Updated
    last_updated_pattern = r'\*\*Last Updated:\*\*\s*(.+?)(?:\n|$)'
    last_updated_match = re.search(last_updated_pattern, board_content, re.IGNORECASE)
    if last_updated_match:
        metadata['last_updated'] = last_updated_match.group(1).strip()
    
    # Parse Version
    version_pattern = r'\*\*Version:\*\*\s*(.+?)(?:\n|$)'
    version_match = re.search(version_pattern, board_content, re.IGNORECASE)
    if version_match:
        metadata['version'] = version_match.group(1).strip()
    
    return metadata


def find_epic_section(board_content: str, epic: int) -> Optional[Tuple[int, int]]:
    """
    Find the epic section in the board content.
    
    Returns:
        Tuple of (start_index, end_index) or None if not found
    """
    lines = board_content.split('\n')
    start_idx = None
    end_idx = len(lines)
    
    # Look for epic section header: "### Epic {epic}:"
    epic_header_pattern = re.compile(rf'^### Epic {epic}:', re.IGNORECASE)
    
    for i, line in enumerate(lines):
        if epic_header_pattern.match(line):
            start_idx = i
            break
    
    if start_idx is None:
        return None
    
    # Find the end of the epic section (next epic or end of epics section)
    for i in range(start_idx + 1, len(lines)):
        line = lines[i]
        # Stop at next epic section
        if re.match(r'^### Epic \d+:', line):
            end_idx = i
            break
        # Stop at major section boundary (## header)
        if line.startswith('##') and not line.startswith('###'):
            end_idx = i
            break
    
    return (start_idx, end_idx)


def _parse_task_id(task_id: str) -> Optional[Tuple[int, int, int]]:
    """Parse task ID token like `E4:S19:T04` into numeric components."""
    match = re.fullmatch(r"E(\d+):S(\d+):T(\d+)", task_id.strip(), re.IGNORECASE)
    if not match:
        return None
    return int(match.group(1)), int(match.group(2)), int(match.group(3))


def resolve_planning_artifact_for_task(task_id: str, project_root: Path) -> Optional[Path]:
    """
    Resolve planning artifact path for a task with deterministic precedence:
    1) Canonical IPP-E{epic}S{story}T{task}-*.md
    2) Legacy IPW-E{epic}S{story}T{task}-*.md (compatibility fallback)
    """
    parsed = _parse_task_id(task_id)
    if not parsed:
        return None

    epic, story, task = parsed
    planning_dir = project_root / "docs" / "implementation-cycles"
    if not planning_dir.exists():
        return None

    # Support both padded and non-padded story/task tokens.
    token_variants = {
        (f"S{story}", f"T{task}"),
        (f"S{story}", f"T{task:02d}"),
        (f"S{story:02d}", f"T{task}"),
        (f"S{story:02d}", f"T{task:02d}"),
    }

    for story_token, task_token in sorted(token_variants):
        canonical_pattern = f"IPP-E{epic}{story_token}{task_token}-*.md"
        canonical_matches = sorted(planning_dir.glob(canonical_pattern))
        if canonical_matches:
            return canonical_matches[0]

    for story_token, task_token in sorted(token_variants):
        legacy_pattern = f"IPW-E{epic}{story_token}{task_token}-*.md"
        legacy_matches = sorted(planning_dir.glob(legacy_pattern))
        if legacy_matches:
            return legacy_matches[0]

    return None


def render_ipp_segment_for_task(task_id: str, project_root: Path) -> str:
    """
    Return markdown segment token for IPP traceability:
    - linked `—IPP—` when a planning artifact exists
    - plain `—No IPP—` when absent
    """
    artifact_path = resolve_planning_artifact_for_task(task_id, project_root)
    if not artifact_path:
        return "—No IPP—"

    # Boards live in docs/project-management/kanban, so link up two levels.
    rel_path = Path("..") / ".." / "implementation-cycles" / artifact_path.name
    return f"[—IPP—]({rel_path.as_posix()})"


def _normalize_traceability_segments_for_row(line: str, project_root: Path) -> str:
    """
    Normalize a MoSCOW bullet row by appending deterministic traceability tokens:
    `| [FBU token] | [Task token] | [IPP token/No IPP]`

    Non-destructive behavior:
    - If required link evidence is missing, the row is left unchanged.
    - Existing IPP/No-IPP tokens are replaced in place when task context is available.
    """
    if not line.strip().startswith("- **"):
        return line

    # Remove pre-existing IPP segment to avoid duplicates before rebuilding.
    line = re.sub(r"\s*\|\s*(?:\[—IPP—\]\([^)]+\)|—No IPP—)\s*", " | ", line)
    line = re.sub(r"\s+\|\s+\|\s+", " | ", line)

    fbu_link_match = re.search(r"\[(FR|BR|UXR)-(\d+)\]\(([^)]+)\)", line)
    task_link_match = re.search(r"\[(E\d+:S\d+:T\d+)\]\(([^)]+)\)", line)
    task_id_bold_match = re.search(r"-\s+\*\*(E\d+:S\d+:T\d+)\*\*", line)

    if fbu_link_match and task_link_match:
        fbu_token = f"[{fbu_link_match.group(1)}-{fbu_link_match.group(2)}]({fbu_link_match.group(3)})"
        task_token = f"[{task_link_match.group(1)}]({task_link_match.group(2)})"
        ipp_token = render_ipp_segment_for_task(task_link_match.group(1), project_root)
        return f"{line.rstrip()} | {fbu_token} | {task_token} | {ipp_token}"

    # kboard compatibility path: task row has bold task id + Task Document link.
    task_doc_match = re.search(r"\[Task Document\]\(([^)]+)\)", line)
    if task_id_bold_match and task_doc_match:
        task_id = task_id_bold_match.group(1)
        task_token = f"[{task_id}]({task_doc_match.group(1)})"
        ipp_token = render_ipp_segment_for_task(task_id, project_root)
        # FBU token cannot be deterministically inferred here; leave row unchanged.
        return f"{line.rstrip()} | {task_token} | {ipp_token}"

    return line


def normalize_board_traceability_segments(board_content: str, project_root: Path) -> str:
    """Apply traceability segment normalization to all MoSCOW bullet rows."""
    lines = board_content.split("\n")
    in_moscow = False
    out_lines: List[str] = []

    for line in lines:
        stripped = line.strip()
        if stripped.startswith("## MoSCOW"):
            in_moscow = True
        elif in_moscow and stripped.startswith("## ") and not stripped.startswith("## MoSCOW"):
            in_moscow = False

        if in_moscow and stripped.startswith("- **"):
            line = _normalize_traceability_segments_for_row(line, project_root)

        out_lines.append(line)

    return "\n".join(out_lines)


@dataclass(frozen=True)
class RowTransformContract:
    """
    Board-specific row transform contract.

    NOTE: Phase 1 introduces a shared entrypoint and explicit contract surface
    while preserving existing per-context transform order. Phase 2 can converge
    these contracts to remove RW/UKW divergence.
    """

    name: str
    step_order: Tuple[str, ...]


ROW_TRANSFORM_CONTRACT_RW_STEP7 = RowTransformContract(
    name="rw_step_7",
    step_order=("traceability", "duplicate_footer_reconcile", "timestamp_enforce"),
)

ROW_TRANSFORM_CONTRACT_STANDALONE = RowTransformContract(
    name="standalone",
    step_order=("duplicate_footer_reconcile", "traceability", "timestamp_enforce"),
)


def apply_canonical_row_transform_pipeline(
    board_content: str,
    project_root: Path,
    timestamp_value: str,
    contract: RowTransformContract,
) -> Tuple[str, Dict[str, Any]]:
    """
    Apply canonical parse-normalize-render row transforms through a selected contract.

    Returns transformed content plus diagnostics (including duplicate-footer report).
    """
    transformed = board_content
    dup_report: Dict[str, object] = {
        "rows_with_duplicate_footers": 0,
        "duplicate_footer_row_ids": [],
        "timestamp_order_divergence_rows": 0,
        "timestamp_order_divergence_row_ids": [],
    }
    executed_steps: List[str] = []

    for step in contract.step_order:
        if step == "traceability":
            transformed = normalize_board_traceability_segments(transformed, project_root)
            executed_steps.append(step)
        elif step == "duplicate_footer_reconcile":
            transformed, dup_report = reconcile_duplicate_moscow_row_footers(transformed)
            executed_steps.append(step)
        elif step == "timestamp_enforce":
            transformed = enforce_moscow_row_timestamps(transformed, timestamp_value)
            executed_steps.append(step)
        else:
            raise ValueError(f"Unknown row-transform step '{step}' in contract '{contract.name}'")

    diagnostics: Dict[str, Any] = {
        "contract": contract.name,
        "executed_steps": executed_steps,
        "dup_report": dup_report,
    }
    return transformed, diagnostics


def update_kanban_board(
    board_path: Path,
    epic: int,
    story: int,
    task: int,
    target_state: Dict,
    story_completion_state: Dict,
    dry_run: bool = False
) -> Tuple[bool, List[str]]:
    """
    Update Kanban board with task completion information.
    
    Updates:
    - Board metadata (Last Updated, Version)
    - Epic section status
    - Story listing in epic section
    - MoSCOW section task status (mark complete tasks as COMPLETE)
    """
    if not board_path.exists():
        return False, ["Kanban board not found"]
    
    changes = []
    
    try:
        content = board_path.read_text()
    except Exception as e:
        return False, [f"Error reading board: {e}"]
    
    # Update board metadata
    from datetime import datetime
    today = datetime.now().strftime("%Y-%m-%d")
    version_string = target_state['version_string']
    
    # Update Last Updated
    last_updated_pattern = r'(\*\*Last Updated:\*\*)\s*(.+?)(?:\n|$)'
    if re.search(last_updated_pattern, content, re.IGNORECASE):
        new_last_updated = f"{today} (RW: E{epic}:S{story}:T{task})"
        content = re.sub(
            last_updated_pattern,
            rf'\1 {new_last_updated}\n',
            content,
            flags=re.IGNORECASE
        )
        changes.append(f"Updated board Last Updated: {new_last_updated}")
    
    # Update Version
    version_pattern = r'(\*\*Version:\*\*)\s*(.+?)(?:\n|$)'
    if re.search(version_pattern, content, re.IGNORECASE):
        content = re.sub(
            version_pattern,
            rf'\1 {version_string}\n',
            content,
            flags=re.IGNORECASE
        )
        changes.append(f"Updated board Version: {version_string}")

    # Phase 1 canonical pipeline entrypoint (RW Step 7 contract).
    timestamp_now = datetime.now().strftime("%Y-%m-%d %H:%M UTC")
    content, row_pipeline_diagnostics = apply_canonical_row_transform_pipeline(
        board_content=content,
        project_root=Path.cwd(),
        timestamp_value=timestamp_now,
        contract=ROW_TRANSFORM_CONTRACT_RW_STEP7,
    )
    dup_report = row_pipeline_diagnostics["dup_report"]
    if dup_report["rows_with_duplicate_footers"] > 0:
        changes.append(
            "Duplicate footer audit: "
            f"rows_with_duplicate_footers={dup_report['rows_with_duplicate_footers']} "
            f"row_ids={dup_report['duplicate_footer_row_ids']}"
        )
    if dup_report["timestamp_order_divergence_rows"] > 0:
        changes.append(
            "Timestamp-order divergence: "
            f"rows={dup_report['timestamp_order_divergence_rows']} "
            f"row_ids={dup_report['timestamp_order_divergence_row_ids']}"
        )

    # Find and update epic section
    epic_section = find_epic_section(content, epic)
    if epic_section:
        start_idx, end_idx = epic_section
        lines = content.split('\n')
        epic_section_lines = lines[start_idx:end_idx]
        epic_section_content = '\n'.join(epic_section_lines)
        
        # Update epic status if story is complete
        if story_completion_state.get('is_complete'):
            # Update epic status to COMPLETE if all stories complete, otherwise keep current
            status_pattern = r'(\*\*Status:\*\*)\s*(.+?)(?:\n|$)'
            if re.search(status_pattern, epic_section_content, re.IGNORECASE):
                # For now, we'll keep the status as-is unless we can detect all stories complete
                # This is a conservative approach - epic completion detection is complex
                pass
        
        # Update story listing in epic section
        story_listing_pattern = re.compile(
            rf'(- \[[x\s]\]\s+\*\*E{epic}:S{story}[^\n]*)',
            re.IGNORECASE | re.MULTILINE
        )
        
        def update_story_listing(match):
            line = match.group(1)
            # Mark as complete if story is complete
            if story_completion_state.get('is_complete'):
                line = re.sub(r'\[ \]', '[x]', line)
                # Update status to COMPLETE
                if 'COMPLETE' not in line:
                    line = re.sub(
                        r'(IN PROGRESS|TODO).*$',
                        f"COMPLETE ✅ ({version_string})",
                        line
                    )
            else:
                # Update version in listing
                if version_string not in line:
                    line = re.sub(
                        r'(IN PROGRESS|TODO).*$',
                        f"IN PROGRESS ({version_string})",
                        line
                    )
            return line
        
        if story_listing_pattern.search(epic_section_content):
            new_epic_section_content = story_listing_pattern.sub(update_story_listing, epic_section_content)
            # Reconstruct content
            new_lines = lines[:start_idx] + new_epic_section_content.split('\n') + lines[end_idx:]
            content = '\n'.join(new_lines)
            changes.append(f"Updated story {story} listing in Epic {epic} section")
    
    # In kanban_init mode, prune stale completed rows for the target task from
    # the active in-progress MoSCOW list. This preserves init-mode metadata updates
    # while preventing contradictory board state for already completed tasks.
    mode = target_state.get('mode', 'full')
    if mode == 'kanban_init':
        moscow_completed_row_pattern = re.compile(
            rf'^- \*\*E{epic}:S0?{story}:T0?{task}\*\*[^\n]*✅\s*COMPLETE[^\n]*$',
            re.IGNORECASE | re.MULTILINE
        )
        content, removed_count = moscow_completed_row_pattern.subn('', content)
        if removed_count > 0:
            # Collapse any double blank lines introduced by row removal.
            content = re.sub(r'\n{3,}', '\n\n', content)
            changes.append(
                f"Pruned stale MoSCOW completed row(s): E{epic}:S{story}:T{task} ({removed_count} removed)"
            )

    # Update MoSCOW section - mark task as COMPLETE
    # Pattern: - **E{epic}:S{story}:T{task}** – ... - TODO/IN PROGRESS ...
    # Note: Story number might be zero-padded (S01) or not (S1)
    moscow_task_pattern = re.compile(
        rf'(- \*\*E{epic}:S0?{story}:T0?{task}\*\*[^\n]*(?:TODO|IN PROGRESS)[^\n]*)',
        re.IGNORECASE | re.MULTILINE
    )
    
    def update_moscow_task(match):
        line = match.group(1)
        # Replace TODO/IN PROGRESS with COMPLETE and update Last updated
        today = datetime.now().strftime("%Y-%m-%d")
        if 'TODO' in line.upper() or 'IN PROGRESS' in line.upper():
            # Replace status (handle various formats)
            line = re.sub(
                r'\s-\s(TODO|IN PROGRESS)\s',
                f' - ✅ COMPLETE ',
                line,
                flags=re.IGNORECASE
            )
            # Update Last updated date (handle various formats)
            line = re.sub(
                r'Last updated:\s*\d{4}-\d{2}-\d{2}',
                f'Last updated: {today}',
                line,
                flags=re.IGNORECASE
            )
            # Add version if not present (insert after task description, before links)
            if version_string not in line:
                # Insert version in parentheses before the dash before links
                line = re.sub(
                    r'(\s-\s[^|]+)(\s\|)',
                    rf'\1 (v{version_string})\2',
                    line,
                    count=1
                )
        return line
    
    if moscow_task_pattern.search(content):
        content = moscow_task_pattern.sub(update_moscow_task, content)
        changes.append(f"Updated MoSCOW section: E{epic}:S{story}:T{task} marked as COMPLETE")

    # Always enforce active-board semantics: "In-Progress" lists must not retain
    # rows already marked COMPLETE. This applies to both full RW Step 7 and
    # kanban_init mode so completed tasks never remain on active MoSCOW lists.
    content, removed_complete_rows = _cleanup_kboard_active_rows(content)
    if removed_complete_rows > 0:
        changes.append(f"Pruned COMPLETE rows from active kboard MoSCOW sections ({removed_complete_rows} removed)")
    
    if not dry_run:
        try:
            board_path.write_text(content)
        except Exception as e:
            return False, [f"Error writing board: {e}"]
    
    return True, changes


def enforce_moscow_row_timestamps(board_content: str, timestamp_value: str) -> str:
    """
    Ensure all MoSCOW bullet rows include:
    `| Last modified: YYYY-MM-DD HH:MM UTC`

    Guardrail: preserve existing timestamp values. Only add a timestamp when one
    is missing; do not rewrite existing values during touch-only board updates.
    """
    lines = board_content.split("\n")
    in_moscow = False
    out_lines: List[str] = []
    ts_pattern = re.compile(r"\|\sLast modified:\s\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}\sUTC\s*$")

    for line in lines:
        stripped = line.strip()
        if stripped.startswith("## MoSCOW"):
            in_moscow = True
        elif in_moscow and stripped.startswith("## ") and not stripped.startswith("## MoSCOW"):
            in_moscow = False

        if in_moscow and stripped.startswith("- **"):
            if not ts_pattern.search(line):
                line = f"{line} | Last modified: {timestamp_value}"

        out_lines.append(line)

    return "\n".join(out_lines)


def _extract_row_id_for_reporting(line: str) -> str:
    """Extract a stable row identifier for diagnostics."""
    for pattern in [
        r"-\s+\*\*(E\d+:S\d+:T\d+)\*\*",
        r"-\s+\*\*((?:FR|BR|UXR)-\d+)\*\*",
        r"\[(E\d+:S\d+:T\d+)\]\(",
        r"\[((?:FR|BR|UXR)-\d+)\]\(",
    ]:
        match = re.search(pattern, line)
        if match:
            return match.group(1)
    return "unknown-row"


def _parse_last_modified_chunks(line: str) -> List[Dict[str, object]]:
    """Return ordered Last modified chunks with offsets and parsed timestamps."""
    chunks: List[Dict[str, object]] = []
    chunk_pattern = re.compile(r"\|\sLast modified:\s(\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}\sUTC)")
    for idx, match in enumerate(chunk_pattern.finditer(line)):
        ts_text = match.group(1)
        parsed_dt = None
        try:
            parsed_dt = datetime.strptime(ts_text, "%Y-%m-%d %H:%M UTC")
        except ValueError:
            parsed_dt = None
        chunks.append(
            {
                "index": idx,
                "timestamp_text": ts_text,
                "timestamp_dt": parsed_dt,
            }
        )
    return chunks


def _normalize_duplicate_footer_chunks(
    line: str,
    duplicate_row_ids: List[str],
    divergence_row_ids: List[str],
) -> str:
    """
    Normalize duplicate footer chunks using dual-agreement policy.

    If oldest timestamp and first footer chunk disagree, keep row unchanged and
    record anomaly to avoid silent evidence destruction.
    """
    chunks = _parse_last_modified_chunks(line)
    if len(chunks) <= 1:
        return line

    row_id = _extract_row_id_for_reporting(line)
    duplicate_row_ids.append(row_id)

    dated_chunks = [chunk for chunk in chunks if chunk["timestamp_dt"] is not None]
    if not dated_chunks:
        divergence_row_ids.append(row_id)
        return line

    oldest_time_chunk = min(dated_chunks, key=lambda chunk: chunk["timestamp_dt"])
    first_chunk = chunks[0]

    if oldest_time_chunk["index"] != first_chunk["index"]:
        divergence_row_ids.append(row_id)
        return line

    canonical_ts = oldest_time_chunk["timestamp_text"]
    line_without_chunks = re.sub(r"\s*\|\sLast modified:\s\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}\sUTC", "", line)
    line_without_chunks = re.sub(r"\s+\|\s+\|\s+", " | ", line_without_chunks).rstrip()
    return f"{line_without_chunks} | Last modified: {canonical_ts}"


def reconcile_duplicate_moscow_row_footers(board_content: str) -> Tuple[str, Dict[str, object]]:
    """Audit and reconcile duplicate row footer chunks in MoSCOW sections."""
    lines = board_content.split("\n")
    in_moscow = False
    out_lines: List[str] = []
    duplicate_row_ids: List[str] = []
    divergence_row_ids: List[str] = []

    for line in lines:
        stripped = line.strip()
        if stripped.startswith("## MoSCOW"):
            in_moscow = True
        elif in_moscow and stripped.startswith("## ") and not stripped.startswith("## MoSCOW"):
            in_moscow = False

        if in_moscow and stripped.startswith("- **"):
            line = _normalize_duplicate_footer_chunks(line, duplicate_row_ids, divergence_row_ids)

        out_lines.append(line)

    report = {
        "rows_with_duplicate_footers": len(set(duplicate_row_ids)),
        "duplicate_footer_row_ids": sorted(set(duplicate_row_ids)),
        "timestamp_order_divergence_rows": len(set(divergence_row_ids)),
        "timestamp_order_divergence_row_ids": sorted(set(divergence_row_ids)),
    }
    return "\n".join(out_lines), report


def _cleanup_kboard_active_rows(board_content: str) -> Tuple[str, int]:
    """
    Remove COMPLETE rows from active MoSCOW sections in kboard.md.

    Active sections:
    - Must Have
    - Should Have
    - Could Have
    - Ongoing
    """
    lines = board_content.split("\n")
    cleaned: List[str] = []
    section = None
    active_sections = {"must", "should", "could", "ongoing"}
    removed = 0

    for line in lines:
        stripped = line.strip()
        if stripped.startswith("### Must Have"):
            section = "must"
        elif stripped.startswith("### Should Have"):
            section = "should"
        elif stripped.startswith("### Could Have"):
            section = "could"
        elif stripped.startswith("### Ongoing"):
            section = "ongoing"
        elif stripped.startswith("### Won't Have"):
            section = "wont"

        if section in active_sections and stripped.startswith("- **"):
            if re.search(r"\b✅\s*COMPLETE\b|\bCOMPLETE\s*✅\b|\bCOMPLETE\b", stripped, re.IGNORECASE):
                removed += 1
                continue

        cleaned.append(line)

    updated = "\n".join(cleaned)
    updated = re.sub(r"\n{3,}", "\n\n", updated)
    return updated, removed


def _is_terminal_frbr_status(status_text: str) -> bool:
    """Return True if FR/BR/UXR status is terminal and safe to prune."""
    if not status_text:
        return False
    upper = status_text.upper()
    has_terminal = bool(re.search(r"\bCOMPLETE(?:D)?\b|\bIMPLEMENTED\b|\bFIXED\b|\bRESOLVED\b", upper))
    if not has_terminal:
        return False

    # Exception guard: keep rows active if status explicitly signals unresolved validation/product verification.
    unresolved_markers = [
        "UNVERIFIED",
        "PENDING VERIFICATION",
        "VERIFICATION PENDING",
        "IN PROGRESS",
        "ACTIVE",
        "OPEN",
        "REOPENED",
        "TODO",
    ]
    return not any(marker in upper for marker in unresolved_markers)


def _cleanup_fbuboard_active_rows(board_content: str, board_path: Path, timestamp_value: str) -> Tuple[str, Dict[str, int]]:
    """
    Cleanup active MoSCOW rows in fbuboard.md by removing terminal items.
    Preserve existing active-row timestamps while pruning terminal rows and
    maintaining deterministic cleanup behavior.
    """
    lines = board_content.split("\n")
    cleaned: List[str] = []
    section = None
    active_sections = {"must", "should", "could", "ongoing"}
    stats = {
        "audited": 0,
        "removed": 0,
        "kept_exception": 0,
        "timestamps_added_missing": 0,
    }

    ts_pattern = re.compile(r"\|\sLast modified:\s\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}\sUTC\s*$")
    frbr_link_pattern = re.compile(r"\((fr-br/[^)]+\.md)\)")

    for line in lines:
        stripped = line.strip()

        if stripped.startswith("### Must Have"):
            section = "must"
        elif stripped.startswith("### Should Have"):
            section = "should"
        elif stripped.startswith("### Could Have"):
            section = "could"
        elif stripped.startswith("### Ongoing"):
            section = "ongoing"
        elif stripped.startswith("### Won't Have"):
            section = "wont"

        if section in active_sections and stripped.startswith("- **"):
            stats["audited"] += 1
            if not ts_pattern.search(line):
                line = f"{line} | Last modified: {timestamp_value}"
                stats["timestamps_added_missing"] += 1

            link_match = frbr_link_pattern.search(line)
            if link_match:
                doc_path = board_path.parent / link_match.group(1)
                if doc_path.exists():
                    doc_content = doc_path.read_text(encoding="utf-8", errors="ignore")
                    status_match = re.search(r"\*\*Status:\*\*\s*([^\n]+)", doc_content)
                    status_text = status_match.group(1).strip() if status_match else ""
                    if _is_terminal_frbr_status(status_text):
                        stats["removed"] += 1
                        continue
                    if re.search(r"\bCOMPLETE(?:D)?\b|\bIMPLEMENTED\b|\bFIXED\b|\bRESOLVED\b", status_text.upper()):
                        stats["kept_exception"] += 1

        cleaned.append(line)

    updated = "\n".join(cleaned)
    updated = re.sub(r"\n{3,}", "\n\n", updated)

    return updated, stats


def enforce_terminal_timestamps_on_boards(project_root: Path, dry_run: bool = False) -> List[str]:
    """
    Enforce terminal row timestamps on both active boards:
    - kboard.md
    - fbuboard.md
    """
    boards = [
        project_root / "docs/project-management/kanban/kboard.md",
        project_root / "docs/project-management/kanban/fbuboard.md",
        project_root / "docs/project-management/kanban/kanban-board.md",
        project_root / "docs/project-management/kanban/fr-br-uxr-board.md",
    ]
    timestamp_now = datetime.now().strftime("%Y-%m-%d %H:%M UTC")
    changes: List[str] = []

    for board in boards:
        if not board.exists():
            continue
        original = board.read_text()
        pre_hash = hashlib.sha256(original.encode("utf-8")).hexdigest()

        if board.name in {"fbuboard.md", "fr-br-uxr-board.md"}:
            updated, stats = _cleanup_fbuboard_active_rows(original, board, timestamp_now)
            updated, row_pipeline_diagnostics = apply_canonical_row_transform_pipeline(
                board_content=updated,
                project_root=project_root,
                timestamp_value=timestamp_now,
                contract=ROW_TRANSFORM_CONTRACT_STANDALONE,
            )
            dup_report = row_pipeline_diagnostics["dup_report"]
        else:
            updated, row_pipeline_diagnostics = apply_canonical_row_transform_pipeline(
                board_content=original,
                project_root=project_root,
                timestamp_value=timestamp_now,
                contract=ROW_TRANSFORM_CONTRACT_STANDALONE,
            )
            dup_report = row_pipeline_diagnostics["dup_report"]
            stats = None

        if updated != original:
            # Concurrency-safe revalidation before final write.
            live = board.read_text()
            live_hash = hashlib.sha256(live.encode("utf-8")).hexdigest()
            if live_hash != pre_hash:
                # Re-apply transforms to latest content to avoid stale writes.
                if board.name in {"fbuboard.md", "fr-br-uxr-board.md"}:
                    updated, stats = _cleanup_fbuboard_active_rows(live, board, timestamp_now)
                    updated, row_pipeline_diagnostics = apply_canonical_row_transform_pipeline(
                        board_content=updated,
                        project_root=project_root,
                        timestamp_value=timestamp_now,
                        contract=ROW_TRANSFORM_CONTRACT_STANDALONE,
                    )
                    dup_report = row_pipeline_diagnostics["dup_report"]
                else:
                    updated, row_pipeline_diagnostics = apply_canonical_row_transform_pipeline(
                        board_content=live,
                        project_root=project_root,
                        timestamp_value=timestamp_now,
                        contract=ROW_TRANSFORM_CONTRACT_STANDALONE,
                    )
                    dup_report = row_pipeline_diagnostics["dup_report"]
                changes.append(f"Concurrency revalidation: board changed during run, re-applied transforms: {board}")

            if not dry_run:
                board.write_text(updated)
            changes.append(f"Enforced terminal row timestamps: {board}")
            if dup_report["rows_with_duplicate_footers"] > 0:
                changes.append(
                    "duplicate-footer audit: "
                    f"rows_with_duplicate_footers={dup_report['rows_with_duplicate_footers']}, "
                    f"row_ids={dup_report['duplicate_footer_row_ids']}"
                )
            if dup_report["timestamp_order_divergence_rows"] > 0:
                changes.append(
                    "timestamp-order divergence: "
                    f"rows={dup_report['timestamp_order_divergence_rows']}, "
                    f"row_ids={dup_report['timestamp_order_divergence_row_ids']}"
                )
            if stats is not None:
                changes.append(
                    "fbuboard reconciliation: "
                    f"audited={stats['audited']}, removed={stats['removed']}, "
                    f"kept_exceptions={stats['kept_exception']}, "
                    f"timestamps_added_missing={stats['timestamps_added_missing']}"
                )
    return changes


def detect_error_type(error_message: str) -> str:
    """
    Detect error type from error message (Step 15 from T01 analysis).
    
    Returns:
        Error type key for recovery playbook lookup
    """
    if 'REQUIRED DOC MISSING' in error_message:
        return 'REQUIRED_DOC_MISSING'
    elif 'FILE READ ERROR' in error_message:
        return 'FILE_READ_ERROR'
    elif 'VERSION MISMATCH' in error_message and 'COMPONENT' not in error_message:
        return 'VERSION_MISMATCH'
    elif 'VERSION MISSING IN LAST UPDATED' in error_message:
        return 'VERSION_MISSING_IN_LAST_UPDATED'
    elif 'STATUS INCONSISTENCY' in error_message:
        return 'STATUS_INCONSISTENCY'
    elif 'TASK CHECKLIST MISSING' in error_message:
        return 'TASK_CHECKLIST_MISSING'
    elif 'TASK CHECKLIST VERSION MISMATCH' in error_message:
        return 'TASK_CHECKLIST_VERSION_MISMATCH'
    elif 'EPIC VERSION MISSING' in error_message:
        return 'EPIC_VERSION_MISSING'
    elif 'REQUIRED FIELD MISSING' in error_message:
        return 'REQUIRED_FIELD_MISSING'
    elif 'VERSION FORMAT INVALID' in error_message:
        return 'VERSION_FORMAT_INVALID'
    elif 'VERSION COMPONENT MISMATCH' in error_message:
        return 'VERSION_COMPONENT_MISMATCH'
    else:
        return 'UNKNOWN_ERROR'


def add_error(
    errors: List[str],
    error_details: List[Dict],
    error_type: str,
    error_msg: str,
    file_path: Optional[Path] = None
) -> None:
    """
    Helper function to add error with details tracking.
    """
    errors.append(error_msg)
    error_details.append({
        'error_type': error_type,
        'file_path': file_path,
        'message': error_msg
    })


def validate_updates(
    story_path: Path,
    epic_path: Optional[Path],
    board_path: Optional[Path],
    version_string: str,
    version_components: Tuple[int, int, int, int, int],
    task_info: Optional[Dict] = None
) -> Tuple[bool, List[str], List[str], List[Dict]]:
    """
    Comprehensive validation of Kanban docs updates (Steps 12-14 from T01 analysis).
    
    Step 12: Re-parse updated docs to ensure internal consistency
    Step 13: Validate against policy & FRs
    Step 14: Detect drift between Kanban docs and version file / CHANGELOG
    
    Returns:
        (is_valid, list_of_errors, list_of_warnings, list_of_error_details)
    """
    errors = []
    warnings = []
    error_details = []  # List of dicts with error_type, file_path, message
    rc, epic, story, task, build = version_components
    
    # ===== Step 12: Internal Consistency Checks =====
    
    # Validate Story doc exists and is readable
    if not story_path or not story_path.exists():
        error_msg = f"❌ REQUIRED DOC MISSING: Story doc not found: {story_path}"
        add_error(errors, error_details, 'REQUIRED_DOC_MISSING', error_msg, story_path)
        return False, errors, warnings, error_details
    
    # Check file permissions
    if not os.access(story_path, os.R_OK):
        error_msg = f"❌ PERMISSION ERROR: Cannot read Story doc {story_path} (permission denied)"
        add_error(errors, error_details, 'PERMISSION_ERROR', error_msg, story_path)
        return False, errors, warnings, error_details
    
    try:
        story_content = story_path.read_text()
    except Exception as e:
        error_msg = f"❌ FILE READ ERROR: Cannot read Story doc {story_path}: {e}"
        add_error(errors, error_details, 'FILE_READ_ERROR', error_msg, story_path)
        return False, errors, warnings, error_details
    
    story_header = parse_story_header(story_content)
    
    # Check Story header version matches expected version
    if story_header.get('version') != version_string:
        error_msg = (
            f"❌ VERSION MISMATCH: Story header version mismatch\n"
            f"   Expected: {version_string}\n"
            f"   Found: {story_header.get('version')}\n"
            f"   File: {story_path}"
        )
        add_error(errors, error_details, 'VERSION_MISMATCH', error_msg, story_path)
    
    # Check Story header Last updated contains version
    if version_string not in story_header.get('last_updated', ''):
        error_msg = (
            f"❌ VERSION MISSING IN LAST UPDATED: Story Last updated field missing version\n"
            f"   Expected version: {version_string}\n"
            f"   Found: {story_header.get('last_updated')}\n"
            f"   File: {story_path}"
        )
        add_error(errors, error_details, 'VERSION_MISSING_IN_LAST_UPDATED', error_msg, story_path)
    
    # Check status consistency (if COMPLETE, should have Completed date)
    if 'COMPLETE' in story_header.get('status', ''):
        if not story_header.get('completed'):
            error_msg = (
                f"❌ STATUS INCONSISTENCY: Story marked COMPLETE but missing Completed date\n"
                f"   File: {story_path}"
            )
            add_error(errors, error_details, 'STATUS_INCONSISTENCY', error_msg, story_path)
    
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
                error_msg = (
                    f"❌ TASK CHECKLIST MISSING: Completed task E{epic}:S{story}:T{task} not found in Story Task Checklist\n"
                    f"   File: {story_path}"
                )
                add_error(errors, error_details, 'TASK_CHECKLIST_MISSING', error_msg, story_path)
            else:
                # Check version in checklist matches
                match = task_checklist_pattern2.search(story_content)
                if match:
                    checklist_version = f"v{match.group(1)}"
                    if checklist_version != version_string:
                        error_msg = (
                            f"❌ TASK CHECKLIST VERSION MISMATCH: Task checklist version mismatch\n"
                            f"   Expected: {version_string}\n"
                            f"   Found in checklist: {checklist_version}\n"
                            f"   File: {story_path}"
                        )
                        add_error(errors, error_details, 'TASK_CHECKLIST_VERSION_MISMATCH', error_msg, story_path)
        else:
            # Check version in checklist matches
            match = task_checklist_pattern.search(story_content)
            if match:
                checklist_version = f"v{match.group(1)}"
                if checklist_version != version_string:
                    error_msg = (
                        f"❌ TASK CHECKLIST VERSION MISMATCH: Task checklist version mismatch\n"
                        f"   Expected: {version_string}\n"
                        f"   Found in checklist: {checklist_version}\n"
                        f"   File: {story_path}"
                    )
                    add_error(errors, error_details, 'TASK_CHECKLIST_VERSION_MISMATCH', error_msg, story_path)
    
    # Validate Epic doc consistency (if exists)
    if epic_path and epic_path.exists():
        try:
            epic_content = epic_path.read_text()
            epic_header = parse_story_header(epic_content)
            
            # Check that version appears in Epic Last updated
            if version_string not in epic_header.get('last_updated', ''):
                error_msg = (
                    f"❌ EPIC VERSION MISSING: Epic Last updated field missing version\n"
                    f"   Expected version: {version_string}\n"
                    f"   Found: {epic_header.get('last_updated')}\n"
                    f"   File: {epic_path}"
                )
                add_error(errors, error_details, 'EPIC_VERSION_MISSING', error_msg, epic_path)
            
            # Check Epic Story Checklist entry exists and has correct status
            checklist_pattern = re.compile(
                rf'(- \[[x\s]\]\s+\*\*E{epic}:S{story}(?!\d)[^\n]*)',
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
                    error_msg = (
                        f"❌ EPIC CHECKLIST VERSION MISSING: Epic Story Checklist entry missing version\n"
                        f"   Expected version: {version_string}\n"
                        f"   Checklist line: {checklist_line.strip()}\n"
                        f"   File: {epic_path}"
                    )
                    add_error(errors, error_details, 'EPIC_VERSION_MISSING', error_msg, epic_path)
        except Exception as e:
            warnings.append(f"⚠️  EPIC DOC READ WARNING: Cannot read Epic doc {epic_path}: {e}")
    elif epic_path:
        warnings.append(f"⚠️  EPIC DOC OPTIONAL: Epic doc not found (optional): {epic_path}")
    
    # Validate Kanban board (if exists)
    if board_path and board_path.exists():
        try:
            board_content = board_path.read_text()
            board_metadata = parse_kanban_board_metadata(board_content)
            
            # Check that version appears in board metadata
            if version_string not in board_metadata.get('version', ''):
                warnings.append(
                    f"⚠️  BOARD VERSION MISMATCH: Board version may not match current version\n"
                    f"   Expected version: {version_string}\n"
                    f"   Found in board: {board_metadata.get('version', 'not found')}\n"
                    f"   File: {board_path}"
                )
        except Exception as e:
            warnings.append(f"⚠️  BOARD READ WARNING: Cannot read board {board_path}: {e}")
    elif board_path:
        warnings.append(f"⚠️  BOARD OPTIONAL: Kanban board not found (optional): {board_path}")
    
    # ===== Step 13: Policy & FR Validation =====
    
    # Validate Story header has required fields
    required_story_fields = ['status', 'last_updated', 'version']
    for field in required_story_fields:
        if not story_header.get(field):
            error_msg = (
                f"❌ REQUIRED FIELD MISSING: Story header missing required field: {field}\n"
                f"   File: {story_path}"
            )
            add_error(errors, error_details, 'REQUIRED_FIELD_MISSING', error_msg, story_path)
    
    # Validate format of version string in header
    version_in_header = story_header.get('version', '')
    if version_in_header and not re.match(r'^v\d+\.\d+\.\d+\.\d+\+\d+$', version_in_header):
        error_msg = (
            f"❌ VERSION FORMAT INVALID: Story header version format invalid\n"
            f"   Expected format: vRC.EPIC.STORY.TASK+BUILD\n"
            f"   Found: {version_in_header}\n"
            f"   File: {story_path}"
        )
        add_error(errors, error_details, 'VERSION_FORMAT_INVALID', error_msg, story_path)
    
    # ===== Step 14: Cross-check with version file =====
    # (Version file validation is done separately in validate_version_bump.py,
    # but we verify consistency here)
    
    # Verify version components match
    version_match = re.match(r'^v(\d+)\.(\d+)\.(\d+)\.(\d+)\+(\d+)$', version_string)
    if version_match:
        v_rc, v_epic, v_story, v_task, v_build = map(int, version_match.groups())
        if (v_rc, v_epic, v_story, v_task, v_build) != (rc, epic, story, task, build):
            error_msg = (
                f"❌ VERSION COMPONENT MISMATCH: Version string components don't match\n"
                f"   Version string: {version_string}\n"
                f"   Components: RC={rc}, EPIC={epic}, STORY={story}, TASK={task}, BUILD={build}\n"
                f"   Parsed from string: RC={v_rc}, EPIC={v_epic}, STORY={v_story}, TASK={v_task}, BUILD={v_build}"
            )
            add_error(errors, error_details, 'VERSION_COMPONENT_MISMATCH', error_msg, story_path)
    
    return len(errors) == 0, errors, warnings, error_details


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
    parser.add_argument(
        "--allow-override",
        action="store_true",
        help="Allow override for recoverable errors (use with caution - may mask issues)",
    )
    parser.add_argument(
        "--mode",
        type=str,
        choices=["full", "kanban_init"],
        default="full",
        help="Update mode: 'full' (default) or 'kanban_init' (documentation only)",
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
    
    print(f"🔍 Updating Kanban docs for {version_string} (E{epic}:S{story}:T{task}) - Mode: {args.mode}")
    
    # Resolve Kanban paths
    paths = resolve_kanban_paths(epic, story, config, project_root=Path.cwd())
    
    if 'story_doc' not in paths:
        print(f"❌ Story doc not found for Epic {epic}, Story {story}")
        print(f"🔍 Attempting manual discovery...")
        
        # Manual fallback discovery
        kanban_root = Path.cwd() / "docs/project-management/kanban"
        manual_patterns = [
            kanban_root / f"epics/Epic-{epic}/Story-{story:03d}-*.md",
            kanban_root / f"epics/Epic-{epic}/Story-{story}-*.md",
            kanban_root / f"epics/Epic-{epic}/Story-00*-*.md",  # Broader search
        ]
        
        story_doc = None
        for pattern in manual_patterns:
            matches = list(pattern.parent.glob(pattern.name)) if pattern.parent.exists() else []
            if matches:
                story_doc = matches[0].resolve()
                print(f"✅ Found story doc: {story_doc}")
                break
        
        if not story_doc:
            print(f"❌ Manual discovery failed. Checked patterns:")
            for pattern in manual_patterns:
                print(f"   - {pattern}")
            print(f"💡 Suggestion: Check if Story {story} exists for Epic {epic}")
            print(f"💡 Suggestion: Verify kanban_root path: {kanban_root}")
            if args.allow_override:
                print(f"⚠️  Continuing without story doc (allow_override)")
                story_doc = None
            else:
                sys.exit(1)
        else:
            paths['story_doc'] = story_doc
    
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
        task_info,
        story_header,
        completion_state,
        mode=args.mode  # Pass mode to target state derivation
    )
    
    # Apply updates
    all_changes = []
    
    # Update Story doc
    success, changes = update_story_doc(story_path, target_state, task_info, args.dry_run)
    if not success:
        print(f"❌ Failed to update Story doc: {changes}")
        sys.exit(1)
    all_changes.extend(changes)
    
    # Update Epic doc if available
    if 'epic_doc' in paths:
        epic_path = paths['epic_doc']
        success, changes = update_epic_doc(epic_path, story, target_state, args.dry_run)
        if not success:
            print(f"❌ Failed to update Epic doc: {changes}")
            sys.exit(1)
        all_changes.extend(changes)
    
    # Update Kanban board if available
    if 'kanban_board' in paths:
        board_path = paths['kanban_board']
        success, changes = update_kanban_board(board_path, epic, story, task, target_state, completion_state, args.dry_run)
        if not success:
            print(f"❌ Failed to update Kanban board: {changes}")
            sys.exit(1)
        all_changes.extend(changes)

    # Enforce terminal row timestamp field on both active boards
    all_changes.extend(enforce_terminal_timestamps_on_boards(Path.cwd(), args.dry_run))
    
    # Report results
    if args.dry_run:
        print(f"🔍 DRY RUN: Would make {len(all_changes)} changes")
        for change in all_changes:
            print(f"   {change}")
    else:
        print(f"✅ Successfully made {len(all_changes)} changes:")
        for change in all_changes:
            print(f"   {change}")
    
    print(f"🎯 Kanban documentation update completed in {args.mode} mode")

    # Validate updates (Steps 12-14: comprehensive validation)
    if not args.dry_run:
        is_valid, errors, warnings, error_details = validate_updates(
            paths.get('story_doc'),
            paths.get('epic_doc'),
            paths.get('kanban_board'),
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
            
            # Generate recovery guidance for each unique error type (Step 17 from T01 analysis)
            print("\n📋 RECOVERY GUIDANCE:")
            print("=" * 80)
            seen_error_types = set()
            for detail in error_details:
                error_type = detail.get('error_type', 'UNKNOWN_ERROR')
                if error_type not in seen_error_types:
                    seen_error_types.add(error_type)
                    file_path = detail.get('file_path')
                    recovery_guidance = get_recovery_guidance(error_type, file_path)
                    print(recovery_guidance)
            
            # Check if override is allowed
            overrideable_errors = [
                detail for detail in error_details
                if RECOVERY_PLAYBOOKS.get(detail.get('error_type', ''), {}).get('override_allowed', False)
            ]
            
            if args.allow_override and overrideable_errors:
                print("\n⚠️  OVERRIDE ENABLED: Proceeding despite validation errors (use with caution)")
                print("   Overrideable errors detected. Review errors above and ensure they are acceptable.")
            else:
                print("\n🚫 RW BLOCKED at Step 7: Kanban docs update validation failed")
                print("   Fix the errors above and retry the Release Workflow.")
                if overrideable_errors and not args.allow_override:
                    print(f"   Note: {len(overrideable_errors)} error(s) may be overrideable (not recommended).")
                sys.exit(1)
        
        if is_valid:
            print("✅ Validation passed: All Kanban docs updates verified")
    
    print(f"✅ Kanban docs update complete for {version_string}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
