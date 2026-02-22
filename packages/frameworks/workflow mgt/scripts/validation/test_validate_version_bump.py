#!/usr/bin/env python3
"""
Tests for validate_version_bump.py - perpetual task support (E4:S14:T01).

Part of: E4:S14 - Kanban Framework Maintenance
Task: T01 - Update Packaged RW to Handle UKW Context and Perpetual Tasks
"""

import os
import sys
import tempfile
from pathlib import Path

# Add parent to path for imports
script_dir = Path(__file__).resolve().parent
if str(script_dir) not in sys.path:
    sys.path.insert(0, str(script_dir))

from validate_version_bump import (
    extract_task_id_canonical,
    is_perpetual_task,
    validate_task_doc_alignment,
    validate_task_doc_fields,
    validate_version_bump,
)


# --- T1: Task ID extraction prefers canonical section ---
def test_task_id_extraction_prefers_canonical_section():
    """Extract E6:S07:T101 from doc with Progress 'E4:S16:T05' and canonical '**Value:** E6:S07:T101'."""
    content = """
**Progress:** UKW execution. Four completed tasks removed: E4:S16:T05, E4:S16:T06, E5:S01:T34, E5:S01:T37.

## Task ID
**Format:** E{epic}:S{story}:T{task}
**Value:** `E6:S07:T101`
"""
    result = extract_task_id_canonical(content)
    assert result is not None, "Should extract Task ID from canonical section"
    epic, story, task = result
    assert epic == 6 and story == 7 and task == 101, (
        f"Expected (6, 7, 101), got ({epic}, {story}, {task})"
    )


# --- T2: Perpetual task detection by task number ---
def test_perpetual_task_detection_by_task_number():
    """is_perpetual_task(101) returns True; is_perpetual_task(5) returns False."""
    assert is_perpetual_task(101) is True
    assert is_perpetual_task(100) is True
    assert is_perpetual_task(5) is False
    assert is_perpetual_task(99) is False


# --- T3: Perpetual task detection by doc content ---
def test_perpetual_task_detection_by_doc_content():
    """Doc with 'Task Type: Perpetual Maintenance' -> perpetual."""
    content = """
**Task Type:** Perpetual Maintenance
**Build Warning Suppression:** true
"""
    assert is_perpetual_task(5, content) is True
    assert is_perpetual_task(37, "perpetual_task: true\nOther text") is True


# --- T4: validate_version_bump passes for perpetual task ---
def test_validate_version_bump_passes_for_perpetual_task():
    """Temp version 0.6.7.101+31, temp T101 task doc, story file -> validation passes."""
    with tempfile.TemporaryDirectory() as tmpdir:
        tmp = Path(tmpdir)
        orig_cwd = os.getcwd()
        try:
            os.chdir(tmp)

            # Version file
            version_dir = tmp / "src" / "proj"
            version_dir.mkdir(parents=True)
            version_file = version_dir / "version.py"
            version_file.write_text("""
VERSION_RC = 0
VERSION_EPIC = 6
VERSION_STORY = 7
VERSION_TASK = 101
VERSION_BUILD = 31
VERSION_STRING = "0.6.7.101+31"
""")

            # rw-config
            (tmp / "rw-config.yaml").write_text("""
version_file: src/proj/version.py
use_kanban: true
kanban_root: docs/project-management/kanban
story_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md
""")

            # Kanban layout: Epic-6/Story-007-.../T101-...
            story_dir = tmp / "docs" / "project-management" / "kanban" / "epics" / "Epic-6"
            story_dir.mkdir(parents=True)
            task_dir = story_dir / "Story-007-adk-implementation-analysis-and-package-management"
            task_dir.mkdir(parents=True)

            story_file = story_dir / "Story-007-adk-implementation-analysis-and-package-management.md"
            story_file.write_text("""
# Story 007 – ADK Implementation Analysis
**Code:** E6S07

## Task Checklist
- [ ] **E6:S07:T101** – Update Kanban Workflow (UKW) - IN PROGRESS (Perpetual)
""")

            task_file = task_dir / "T101-update-kanban-workflow-ukw.md"
            task_file.write_text("""
# Epic 6, Story 7, Task 101: Update Kanban Workflow (UKW)

**Status:** IN PROGRESS (Perpetual)
**Task Type:** Perpetual Maintenance
**Scope:** UKW synchronization work.

**Progress:** Completed tasks removed: E4:S16:T05, E4:S16:T06.

## Task ID
**Value:** `E6:S07:T101`

## Acceptance Criteria
- [x] Criterion one
""")

            config = {
                "version_file": "src/proj/version.py",
                "use_kanban": True,
                "kanban_root": "docs/project-management/kanban",
                "story_doc_pattern": "epics/Epic-{epic}/Story-{story}-*.md",
            }

            story_path = tmp / "docs" / "project-management" / "kanban" / "epics" / "Epic-6" / "Story-007-adk-implementation-analysis-and-package-management.md"
            is_valid, errors = validate_version_bump(
                version_file, story_file=story_path, config=config
            )
            assert is_valid, f"Validation should pass for perpetual task, errors: {errors}"
        finally:
            os.chdir(orig_cwd)


# --- T5: Perpetual task relaxed field validation ---
def test_perpetual_task_relaxed_field_validation():
    """T101 doc without Input/Deliverable -> no field errors when perpetual."""
    content = """
**Status:** IN PROGRESS (Perpetual)
**Task Type:** Perpetual Maintenance
**Scope:** UKW work.

## Task ID
**Value:** `E6:S07:T101`

## Acceptance Criteria
- [x] Criterion one
"""
    is_valid, errors = validate_task_doc_fields(
        content, 6, 7, 101, relax_for_perpetual=True
    )
    input_deliverable_errors = [e for e in errors if "input" in e.lower() or "deliverable" in e.lower()]
    assert len(input_deliverable_errors) == 0, (
        f"Perpetual task should not require Input/Deliverable: {errors}"
    )


# --- T6: validate_version_bump build increment for perpetual ---
def test_validate_version_bump_build_increment_perpetual():
    """Same task, BUILD+1 -> pass; BUILD=0 for perpetual with BUILD 31 should pass (same task)."""
    with tempfile.TemporaryDirectory() as tmpdir:
        tmp = Path(tmpdir)
        orig_cwd = os.getcwd()
        try:
            os.chdir(tmp)

            version_dir = tmp / "src" / "proj"
            version_dir.mkdir(parents=True)
            version_file = version_dir / "version.py"

            story_dir = tmp / "docs" / "project-management" / "kanban" / "epics" / "Epic-6"
            task_dir = story_dir / "Story-007-adk-implementation-analysis-and-package-management"
            task_dir.mkdir(parents=True)

            story_file = story_dir / "Story-007-adk-implementation-analysis-and-package-management.md"
            story_file.write_text("""
# Story 007
**Code:** E6S07
## Task Checklist
- [ ] **E6:S07:T101** – UKW - IN PROGRESS (Perpetual)
""")

            task_file = task_dir / "T101-update-kanban-workflow-ukw.md"
            task_file.write_text("""
**Status:** IN PROGRESS (Perpetual)
**Task Type:** Perpetual Maintenance
**Scope:** UKW.
## Task ID
**Value:** `E6:S07:T101`
## Acceptance Criteria
- [x] One
""")

            # Same task, BUILD 32 (incremented) -> should pass
            version_file.write_text("""
VERSION_RC = 0
VERSION_EPIC = 6
VERSION_STORY = 7
VERSION_TASK = 101
VERSION_BUILD = 32
VERSION_STRING = "0.6.7.101+32"
""")
            config = {"use_kanban": True, "kanban_root": "docs/project-management/kanban"}
            is_valid, _ = validate_version_bump(version_file, story_file=story_file, config=config)
            assert is_valid, "BUILD 32 (incremented) for perpetual task should pass"
        finally:
            os.chdir(orig_cwd)


if __name__ == "__main__":
    import pytest
    sys.exit(pytest.main([__file__, "-v"]))
