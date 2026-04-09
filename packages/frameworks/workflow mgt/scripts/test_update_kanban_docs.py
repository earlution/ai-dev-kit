#!/usr/bin/env python3
"""
Test Suite for update_kanban_docs.py

This test suite validates the framework-agnostic Kanban update script
against the test matrix defined in T07 test plan.

Usage:
    python packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py [--test-category CATEGORY] [--verbose]

    --test-category: Run specific test category (1-6, or 'all')
    --verbose: Show detailed output
"""

import argparse
import importlib.util
import os
import shutil
import subprocess
import sys
import tempfile
import time
from pathlib import Path
from typing import Dict, List, Tuple

# Test results tracking
test_results = {
    'passed': [],
    'failed': [],
    'skipped': []
}


def run_test(test_name: str, setup_func, test_func, teardown_func=None) -> Tuple[bool, str]:
    """
    Run a single test case.
    
    Returns:
        (success, error_message)
    """
    test_dir = None
    try:
        # Setup
        test_dir = setup_func()
        
        # Run test
        success, error_msg = test_func(test_dir)
        
        # Teardown
        if teardown_func:
            teardown_func(test_dir)
        else:
            # Default: remove test directory
            if test_dir and os.path.exists(test_dir):
                shutil.rmtree(test_dir)
        
        return success, error_msg
    except Exception as e:
        if test_dir and os.path.exists(test_dir):
            shutil.rmtree(test_dir)
        return False, f"Test setup/teardown error: {e}"


def create_test_project(base_dir: Path, epic: int = 2, story: int = 8, task: int = 7) -> Dict[str, Path]:
    """Create a test project structure."""
    project = {
        'root': base_dir,
        'version_file': base_dir / 'src' / 'fynd_deals' / 'version.py',
        'story_doc': base_dir / 'docs' / 'project-management' / 'kanban' / 'epics' / f'Epic-{epic}' / f'Story-{story:03d}-test.md',
        'epic_doc': base_dir / 'docs' / 'project-management' / 'kanban' / 'epics' / f'Epic-{epic}' / f'Epic-{epic}.md',
    }
    
    # Create directories
    project['version_file'].parent.mkdir(parents=True, exist_ok=True)
    project['story_doc'].parent.mkdir(parents=True, exist_ok=True)
    project['epic_doc'].parent.mkdir(parents=True, exist_ok=True)
    
    return project


def create_version_file(version_file: Path, rc: int = 0, epic: int = 2, story: int = 8, task: int = 7, build: int = 1):
    """Create a test version file."""
    version_file.write_text(f"""VERSION_RC = {rc}
VERSION_EPIC = {epic}
VERSION_STORY = {story}
VERSION_TASK = {task}
VERSION_BUILD = {build}
""")


def create_story_doc(story_doc: Path, epic: int = 2, story: int = 8, task: int = 7, version: str = "v0.2.8.7+1", 
                     status: str = "IN PROGRESS", completed: bool = False, task_complete: bool = True,
                     last_updated: str = None):
    """Create a test Story doc."""
    completed_date = "2025-12-15" if completed else None
    task_status = "✅ COMPLETE" if task_complete else "- [ ]"
    task_version = f" ({version})" if task_complete else ""
    
    if last_updated is None:
        last_updated = f"2025-12-15 (v0.2.8.6+1 – T{task-1:02d} complete: Task)" if task > 1 else "2025-12-15"
    
    story_doc.write_text(f"""# Story {story:03d} – Test Story

**Status:** {status}
**Priority:** HIGH
**Created:** 2025-12-15
**Last updated:** {last_updated}
**Version:** {version}
{f"**Completed:** {completed_date}" if completed_date else ""}

## Task Checklist

- {task_status} **E{epic}:S{story}:T{task:02d} – Test Task**{task_version}
""")


def create_epic_doc(epic_doc: Path, epic: int = 2, story: int = 8, version: str = "v0.2.8.7+1"):
    """Create a test Epic doc."""
    epic_doc.write_text(f"""# Epic {epic} – Test Epic

**Status:** IN PROGRESS
**Created:** 2025-12-15
**Last updated:** 2025-12-15 ({version} – Story {story} Task 7 complete)

## Story Checklist

- [ ] **E{epic}:S{story}** – Test Story - IN PROGRESS ({version})
""")


def run_script(test_dir: Path, version_file: Path = None, dry_run: bool = False, 
               allow_override: bool = False) -> Tuple[int, str, str]:
    """Run the update_kanban_docs.py script."""
    script_path = (Path(__file__).parent / 'update_kanban_docs.py').resolve()
    
    cmd = ['python', str(script_path)]
    if version_file:
        cmd.extend(['--version-file', str(version_file)])
    if dry_run:
        cmd.append('--dry-run')
    if allow_override:
        cmd.append('--allow-override')
    
    # Change to test directory
    old_cwd = os.getcwd()
    os.chdir(test_dir)
    
    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=10
        )
        return result.returncode, result.stdout, result.stderr
    finally:
        os.chdir(old_cwd)


# Test Category 1: Canonical Flows
def test_1_1_normal_task_completion():
    """Test 1.1: Normal Task Completion"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        create_story_doc(project['story_doc'], task=7, task_complete=True)
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'])
        
        if exit_code != 0:
            return False, f"Script failed with exit code {exit_code}\nstdout: {stdout}\nstderr: {stderr}"
        
        # Verify Story doc was updated
        story_content = project['story_doc'].read_text()
        if "v0.2.8.7+1" not in story_content:
            return False, "Story doc version not updated"
        
        # Verify Epic doc was updated
        epic_content = project['epic_doc'].read_text()
        if "v0.2.8.7+1" not in epic_content:
            return False, "Epic doc version not updated"
        
        return True, ""
    
    return run_test("Test 1.1: Normal Task Completion", setup, test)


def test_1_2_story_completion():
    """Test 1.2: Story Completion (All Tasks Complete)"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        # Create Story doc with T7 already marked complete (script updates version markers)
        # All tasks complete - script should detect and mark story COMPLETE
        story_content = f"""# Story 008 – Test Story

**Status:** IN PROGRESS
**Priority:** HIGH
**Created:** 2025-12-15
**Last updated:** 2025-12-15 (v0.2.8.6+1 – T06 complete: Task)
**Version:** v0.2.8.6+1

## Task Checklist

- [x] **E2:S8:T1** ✅ COMPLETE (v0.2.8.1+1)
- [x] **E2:S8:T2** ✅ COMPLETE (v0.2.8.2+1)
- [x] **E2:S8:T3** ✅ COMPLETE (v0.2.8.3+1)
- [x] **E2:S8:T4** ✅ COMPLETE (v0.2.8.4+1)
- [x] **E2:S8:T5** ✅ COMPLETE (v0.2.8.5+1)
- [x] **E2:S8:T6** ✅ COMPLETE (v0.2.8.6+1)
- [x] **E2:S8:T7** ✅ COMPLETE (v0.2.8.7+1)
"""
        project['story_doc'].write_text(story_content)
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'])
        
        if exit_code != 0:
            return False, f"Script failed with exit code {exit_code}\nstdout: {stdout}\nstderr: {stderr}"
        
        # Verify Story marked COMPLETE (all tasks complete detected)
        story_content = project['story_doc'].read_text()
        if "**Status:** ✅ COMPLETE" not in story_content:
            return False, "Story not marked COMPLETE (all tasks complete should trigger story completion)"
        
        if "**Completed:**" not in story_content:
            return False, "Completed date not added for completed story"
        
        return True, ""
    
    return run_test("Test 1.2: Story Completion", setup, test)


# Test Category 2: Recoverable Flows
def test_2_1_missing_required_field():
    """Test 2.1: Missing Required Field (Recoverable)"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        # Create Story doc missing Version field
        story_content = """# Story 008 – Test Story

**Status:** IN PROGRESS
**Last updated:** 2025-12-15

## Task Checklist

- [x] **E2:S8:T7** ✅ COMPLETE (v0.2.8.7+1)
"""
        project['story_doc'].write_text(story_content)
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'])
        
        if exit_code == 0:
            return False, "Script should have failed for missing required field"
        
        if "REQUIRED FIELD MISSING" not in stdout and "REQUIRED FIELD MISSING" not in stderr:
            return False, "Error message should identify missing required field"
        
        if "RECOVERY GUIDANCE" not in stdout:
            return False, "Recovery guidance should be provided"
        
        return True, ""
    
    return run_test("Test 2.1: Missing Required Field", setup, test)


def test_2_2_version_mismatch():
    """Test 2.2: Version Mismatch (Recoverable)"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        # Create Story doc with wrong version
        create_story_doc(project['story_doc'], task=7, version="v0.2.8.6+1", task_complete=True)
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'])
        
        if exit_code == 0:
            return False, "Script should have failed for version mismatch"
        
        if "VERSION MISMATCH" not in stdout and "VERSION MISMATCH" not in stderr:
            return False, "Error message should identify version mismatch"
        
        return True, ""
    
    return run_test("Test 2.2: Version Mismatch", setup, test)


# Test Category 3: Hard-Fail Flows
def test_3_1_story_doc_missing():
    """Test 3.1: Story Doc Missing"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        # Don't create Story doc
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'])
        
        if exit_code == 0:
            return False, "Script should have failed for missing Story doc"
        
        if "REQUIRED DOC MISSING" not in stdout and "REQUIRED DOC MISSING" not in stderr:
            return False, "Error message should identify missing doc"
        
        return True, ""
    
    return run_test("Test 3.1: Story Doc Missing", setup, test)


# Test Category 4: Edge Cases
def test_4_1_dry_run_mode():
    """Test 4.1: Dry-Run Mode"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        create_story_doc(project['story_doc'], task=7, task_complete=True)
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        original_story_content = project['story_doc'].read_text()
        
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'], dry_run=True)
        
        if exit_code != 0:
            return False, f"Dry-run should succeed, got exit code {exit_code}"
        
        # Verify files were NOT modified
        new_story_content = project['story_doc'].read_text()
        if original_story_content != new_story_content:
            return False, "Files should not be modified in dry-run mode"
        
        return True, ""
    
    return run_test("Test 4.1: Dry-Run Mode", setup, test)


def test_4_2_kanban_init_prunes_stale_completed_row():
    """Test 4.2: kanban_init prunes stale COMPLETE MoSCOW row for target task."""
    def setup():
        test_dir = tempfile.mkdtemp()
        board_path = Path(test_dir) / "kanban-board.md"
        board_path.write_text(
            """# Board

**Last Updated:** 2026-04-01 (RW: E2:S1:T9)
**Version:** v0.2.1.9+2

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

- **E2:S01:T09** – stale row - ✅ COMPLETE (v0.2.1.9+2) | Last modified: 2026-04-01 10:00 UTC
- **E2:S01:T11** – active todo - TODO | Last modified: 2026-04-01 10:00 UTC
"""
        )
        return test_dir

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        board_path = Path(test_dir) / "kanban-board.md"
        target_state = {"version_string": "v0.2.1.10+3", "mode": "kanban_init"}
        completion_state = {"is_complete": False}
        ok, changes = mod.update_kanban_board(
            board_path=board_path,
            epic=2,
            story=1,
            task=9,
            target_state=target_state,
            story_completion_state=completion_state,
            dry_run=False,
        )
        if not ok:
            return False, f"update_kanban_board failed: {changes}"

        updated = board_path.read_text()
        if "E2:S01:T09" in updated:
            return False, "Stale COMPLETE row for E2:S01:T09 was not pruned in kanban_init mode"
        if "E2:S01:T11" not in updated:
            return False, "Unrelated active row was incorrectly removed"
        if "v0.2.1.10+3" not in updated:
            return False, "Board metadata version was not updated"
        return True, ""

    return run_test("Test 4.2: kanban_init prune stale complete row", setup, test)


def test_4_3_fbuboard_reconciliation_prunes_and_keeps_exception():
    """Test 4.3: fbuboard reconciliation removes terminal rows but keeps unresolved exceptions."""
    def setup():
        test_dir = Path(tempfile.mkdtemp())
        kb_dir = test_dir / "docs" / "project-management" / "kanban"
        frbr_dir = kb_dir / "fr-br"
        frbr_dir.mkdir(parents=True, exist_ok=True)

        # Source docs
        (frbr_dir / "FR-900-terminal.md").write_text(
            "# FR-900\n\n**Status:** IMPLEMENTED\n",
            encoding="utf-8",
        )
        (frbr_dir / "BR-901-exception.md").write_text(
            "# BR-901\n\n**Status:** IN PROGRESS (product verification pending; linked task COMPLETE)\n",
            encoding="utf-8",
        )

        board = kb_dir / "fr-br-uxr-board.md"
        board.write_text(
            """# FR Board

**Last Updated:** 2026-04-01 (old)

## MoSCOW Prioritized FR/BR/UXR Items

### Must Have (M) - Critical Items

- **FR-900** – terminal row - TODO - [FR-900](fr-br/FR-900-terminal.md) | Last modified: 2026-04-01 10:00 UTC
- **BR-901** – exception row - TODO - [BR-901](fr-br/BR-901-exception.md) | Last modified: 2026-04-01 10:00 UTC
""",
            encoding="utf-8",
        )
        (kb_dir / "kanban-board.md").write_text("# Kanban\n\n## MoSCOW Prioritized In-Progress Tasks\n", encoding="utf-8")
        return str(test_dir)

    def test(test_dir):
        module_path = Path(__file__).parent / "update_kanban_docs.py"
        spec = importlib.util.spec_from_file_location("update_kanban_docs", module_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        changes = mod.enforce_terminal_timestamps_on_boards(Path(test_dir), dry_run=False)
        board = Path(test_dir) / "docs" / "project-management" / "kanban" / "fr-br-uxr-board.md"
        updated = board.read_text(encoding="utf-8")

        if "FR-900" in updated:
            return False, "Terminal FR row should have been pruned from active section"
        if "BR-901" not in updated:
            return False, "Exception BR row should have been preserved in active section"
        if "fbuboard sync; latest row stamps:" not in updated:
            return False, "Board Last Updated header should be normalized for temporal drift"
        if not any("fbuboard reconciliation:" in c for c in changes):
            return False, "Expected fbuboard reconciliation stats in change log"
        return True, ""

    return run_test("Test 4.3: fbuboard reconciliation", setup, test)


# Test Category 5: Performance
def test_5_1_performance():
    """Test 5.1: Typical Project Performance"""
    def setup():
        test_dir = tempfile.mkdtemp()
        project = create_test_project(Path(test_dir))
        create_version_file(project['version_file'], task=7, build=1)
        create_story_doc(project['story_doc'], task=7, task_complete=True)
        create_epic_doc(project['epic_doc'], story=8)
        return test_dir
    
    def test(test_dir):
        project = create_test_project(Path(test_dir))
        
        start_time = time.time()
        exit_code, stdout, stderr = run_script(Path(test_dir), project['version_file'])
        elapsed_time = time.time() - start_time
        
        if exit_code != 0:
            return False, f"Script failed with exit code {exit_code}"
        
        if elapsed_time > 5.0:
            return False, f"Performance test failed: {elapsed_time:.2f}s > 5s"
        
        return True, f"Performance: {elapsed_time:.2f}s"
    
    return run_test("Test 5.1: Performance", setup, test)


def main():
    parser = argparse.ArgumentParser(description="Test suite for update_kanban_docs.py")
    parser.add_argument(
        "--test-category",
        type=str,
        default="all",
        help="Test category to run (1-6, or 'all')",
    )
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Show detailed output",
    )
    args = parser.parse_args()
    
    print("🧪 Running Step 7 Hardening Test Suite")
    print("=" * 80)
    
    # Category 1: Canonical Flows
    if args.test_category in ['1', 'all']:
        print("\n📋 Category 1: Purely Canonical Flows")
        print("-" * 80)
        success, error = test_1_1_normal_task_completion()
        if success:
            print("✅ Test 1.1: Normal Task Completion - PASSED")
            test_results['passed'].append("1.1")
        else:
            print(f"❌ Test 1.1: Normal Task Completion - FAILED: {error}")
            test_results['failed'].append("1.1")
        
        success, error = test_1_2_story_completion()
        if success:
            print("✅ Test 1.2: Story Completion - PASSED")
            test_results['passed'].append("1.2")
        else:
            print(f"❌ Test 1.2: Story Completion - FAILED: {error}")
            test_results['failed'].append("1.2")
    
    # Category 2: Recoverable Flows
    if args.test_category in ['2', 'all']:
        print("\n📋 Category 2: Non-Canonical but Recoverable Flows")
        print("-" * 80)
        success, error = test_2_1_missing_required_field()
        if success:
            print("✅ Test 2.1: Missing Required Field - PASSED")
            test_results['passed'].append("2.1")
        else:
            print(f"❌ Test 2.1: Missing Required Field - FAILED: {error}")
            test_results['failed'].append("2.1")
        
        success, error = test_2_2_version_mismatch()
        if success:
            print("✅ Test 2.2: Version Mismatch - PASSED")
            test_results['passed'].append("2.2")
        else:
            print(f"❌ Test 2.2: Version Mismatch - FAILED: {error}")
            test_results['failed'].append("2.2")
    
    # Category 3: Hard-Fail Flows
    if args.test_category in ['3', 'all']:
        print("\n📋 Category 3: Hard-Fail Flows")
        print("-" * 80)
        success, error = test_3_1_story_doc_missing()
        if success:
            print("✅ Test 3.1: Story Doc Missing - PASSED")
            test_results['passed'].append("3.1")
        else:
            print(f"❌ Test 3.1: Story Doc Missing - FAILED: {error}")
            test_results['failed'].append("3.1")
    
    # Category 4: Edge Cases
    if args.test_category in ['4', 'all']:
        print("\n📋 Category 4: Edge Cases")
        print("-" * 80)
        success, error = test_4_1_dry_run_mode()
        if success:
            print("✅ Test 4.1: Dry-Run Mode - PASSED")
            test_results['passed'].append("4.1")
        else:
            print(f"❌ Test 4.1: Dry-Run Mode - FAILED: {error}")
            test_results['failed'].append("4.1")

        success, error = test_4_2_kanban_init_prunes_stale_completed_row()
        if success:
            print("✅ Test 4.2: kanban_init prune stale complete row - PASSED")
            test_results['passed'].append("4.2")
        else:
            print(f"❌ Test 4.2: kanban_init prune stale complete row - FAILED: {error}")
            test_results['failed'].append("4.2")

        success, error = test_4_3_fbuboard_reconciliation_prunes_and_keeps_exception()
        if success:
            print("✅ Test 4.3: fbuboard reconciliation - PASSED")
            test_results['passed'].append("4.3")
        else:
            print(f"❌ Test 4.3: fbuboard reconciliation - FAILED: {error}")
            test_results['failed'].append("4.3")
    
    # Category 5: Performance
    if args.test_category in ['5', 'all']:
        print("\n📋 Category 5: Performance Testing")
        print("-" * 80)
        success, error = test_5_1_performance()
        if success:
            print(f"✅ Test 5.1: Performance - PASSED ({error})")
            test_results['passed'].append("5.1")
        else:
            print(f"❌ Test 5.1: Performance - FAILED: {error}")
            test_results['failed'].append("5.1")
    
    # Summary
    print("\n" + "=" * 80)
    print("📊 Test Summary")
    print("=" * 80)
    print(f"✅ Passed: {len(test_results['passed'])}")
    print(f"❌ Failed: {len(test_results['failed'])}")
    print(f"⏭️  Skipped: {len(test_results['skipped'])}")
    
    if test_results['failed']:
        print(f"\n❌ Failed Tests: {', '.join(test_results['failed'])}")
        sys.exit(1)
    else:
        print("\n✅ All tests passed!")
        sys.exit(0)


if __name__ == "__main__":
    main()
