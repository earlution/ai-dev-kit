"""Regression tests for validate_branch_context.py explicit-task reconciliation."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path


SCRIPT = Path(__file__).resolve().parent / "validate_branch_context.py"


def _run(args: list[str], cwd: Path) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(SCRIPT)] + args,
        cwd=cwd,
        capture_output=True,
        text=True,
    )


def _git(cmd: list[str], cwd: Path) -> None:
    subprocess.run(cmd, cwd=cwd, check=True, capture_output=True, text=True)


def _init_repo(tmp_path: Path, branch_name: str, version_epic: int) -> Path:
    repo = tmp_path / "repo"
    repo.mkdir()
    _git(["git", "init"], repo)
    _git(["git", "checkout", "-b", branch_name], repo)
    _git(["git", "config", "user.name", "Test User"], repo)
    _git(["git", "config", "user.email", "test@example.com"], repo)

    vdir = repo / "src" / "fynd_deals"
    vdir.mkdir(parents=True)
    (vdir / "version.py").write_text(
        "\n".join(
            [
                "VERSION_RC = 0",
                f"VERSION_EPIC = {version_epic}",
                "VERSION_STORY = 1",
                "VERSION_TASK = 17",
                "VERSION_BUILD = 1",
                "VERSION_STRING = f\"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}\"",
            ]
        ),
        encoding="utf-8",
    )
    _git(["git", "add", "."], repo)
    _git(["git", "commit", "-m", "init"], repo)
    return repo


def test_explicit_requested_allows_stale_version_epic_on_matching_branch(tmp_path: Path):
    repo = _init_repo(tmp_path, "epic/2-branch", version_epic=7)
    result = _run(["--strict", "--requested", "E2:S01:T12"], cwd=repo)
    assert result.returncode == 0, result.stderr + result.stdout
    assert "Explicit-task reconciliation" in result.stdout


def test_explicit_requested_blocks_cross_epic_branch_request(tmp_path: Path):
    repo = _init_repo(tmp_path, "epic/7-branch", version_epic=7)
    result = _run(["--strict", "--requested", "E2:S01:T12"], cwd=repo)
    assert result.returncode == 1, result.stderr + result.stdout
    assert "cross-epic request blocked" in result.stdout

