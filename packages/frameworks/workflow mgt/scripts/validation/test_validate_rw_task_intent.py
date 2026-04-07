"""Tests for validate_rw_task_intent.py -- including RW-k ART behavior."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import pytest

SCRIPT = Path(__file__).resolve().parent / "validate_rw_task_intent.py"


def _run(args: list[str], cwd: Path) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(SCRIPT)] + args,
        cwd=cwd,
        capture_output=True,
        text=True,
    )


@pytest.fixture
def intent_fixture(tmp_path: Path) -> Path:
    # version.py -> E2:S01:T10
    vdir = tmp_path / "src" / "fynd_deals"
    vdir.mkdir(parents=True)
    (vdir / "version.py").write_text(
        "\n".join(
            [
                "VERSION_RC = 0",
                "VERSION_EPIC = 2",
                "VERSION_STORY = 1",
                "VERSION_TASK = 10",
                "VERSION_BUILD = 1",
            ]
        ),
        encoding="utf-8",
    )

    # Story checklist with T10 complete
    sdir = tmp_path / "docs" / "project-management" / "kanban" / "epics" / "Epic-2"
    sdir.mkdir(parents=True)
    (sdir / "Story-001-test.md").write_text(
        "- [x] **E2:S01:T10** - ✅ COMPLETE\n",
        encoding="utf-8",
    )
    return tmp_path


def test_rw_k_mismatch_fails_without_art(intent_fixture: Path):
    r = _run(["--requested", "E2:S01:T13", "--mode", "rw-k"], cwd=intent_fixture)
    assert r.returncode == 1, r.stderr + r.stdout
    assert "rw-k attribution" in r.stdout


def test_rw_k_mismatch_passes_with_art(intent_fixture: Path):
    r = _run(["--requested", "E2:S01:T13", "--mode", "rw-k", "--art"], cwd=intent_fixture)
    assert r.returncode == 0, r.stderr + r.stdout
    assert "adopt requested task" in r.stdout


def test_rw_k_match_passes_without_art(intent_fixture: Path):
    r = _run(["--requested", "E2:S01:T10", "--mode", "rw-k"], cwd=intent_fixture)
    assert r.returncode == 0, r.stderr + r.stdout
    assert "requested matches version.py" in r.stdout


def test_story_mismatch_still_fails_full_mode(intent_fixture: Path):
    r = _run(["--requested", "E2:S02:T10"], cwd=intent_fixture)
    assert r.returncode == 1, r.stderr + r.stdout
    assert "MISMATCH (story)" in r.stdout
