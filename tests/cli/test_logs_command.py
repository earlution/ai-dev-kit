import argparse
import json
import os
from pathlib import Path

from cli.commands.logs import LogsCommand


def _write_config(project_root: Path) -> None:
    config_content = """version: "1.0.0"
default_backend: "git-submodule"
frameworks: {}
install_logging:
  enabled: true
  path: "logs/ai-dev-kit/install"
  format: json
"""
    (project_root / ".ai-dev-kit.yaml").write_text(config_content, encoding="utf-8")


def test_validate_install_log_passes_for_valid_contract(temp_project_dir: Path):
    _write_config(temp_project_dir)
    log_dir = temp_project_dir / "logs" / "ai-dev-kit" / "install"
    log_dir.mkdir(parents=True, exist_ok=True)
    log_file = log_dir / "install-20260409-120000.log"
    valid = {
        "timestamp_utc": "2026-04-09T12:00:00Z",
        "level": "INFO",
        "context": "install.main",
        "message": "ok",
        "install_run_id": "run-1",
        "step_id": "step-0001",
        "event_contract": {
            "intent": {"summary": "intent"},
            "action": {"summary": "action"},
            "result": {"status": "ok", "details": "done"},
        },
    }
    log_file.write_text(json.dumps(valid) + "\n", encoding="utf-8")

    args = argparse.Namespace(logs_command="validate-install-log", file=None, limit=1)
    command = LogsCommand(args)
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert command.execute() == 0
    finally:
        os.chdir(original_cwd)


def test_validate_install_log_fails_for_missing_contract_fields(temp_project_dir: Path):
    _write_config(temp_project_dir)
    log_dir = temp_project_dir / "logs" / "ai-dev-kit" / "install"
    log_dir.mkdir(parents=True, exist_ok=True)
    log_file = log_dir / "install-20260409-120001.log"
    invalid = {
        "timestamp_utc": "2026-04-09T12:00:01Z",
        "level": "INFO",
        "context": "install.main",
        "message": "bad",
        "install_run_id": "run-2",
        "step_id": "step-0002",
        "event_contract": {
            "intent": {"summary": "intent"},
            "action": {},
            "result": {"status": "ok", "details": "done"},
        },
    }
    log_file.write_text(json.dumps(invalid) + "\n", encoding="utf-8")

    args = argparse.Namespace(logs_command="validate-install-log", file=None, limit=1)
    command = LogsCommand(args)
    original_cwd = os.getcwd()
    try:
        os.chdir(temp_project_dir)
        assert command.execute() == 1
    finally:
        os.chdir(original_cwd)
