"""
logs command for ai-dev-kit CLI.

Provides a simple install-history subcommand that summarises recent
install runs based on logs/ai-dev-kit/install/ contents.
"""

import argparse
import json
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

from cli.commands import BaseCommand
from cli.config import Config
from cli.utils import get_project_root, print_error, print_info


class LogsCommand(BaseCommand):
    """Inspect ai-dev-kit logs (install history, etc.)."""

    @staticmethod
    def get_description() -> str:
        return "Inspect ai-dev-kit logs (install history, etc.)"

    @staticmethod
    def add_arguments(parser: argparse.ArgumentParser) -> None:
        subparsers = parser.add_subparsers(
            dest="logs_command",
            help="Logs subcommand",
            metavar="LOGS_COMMAND",
        )

        history = subparsers.add_parser(
            "install-history",
            help="Show summary of recent install runs",
            description="Summarise recent install runs from logs/ai-dev-kit/install/",
        )
        history.add_argument(
            "--limit",
            type=int,
            default=10,
            help="Maximum number of runs to show (default: 10)",
        )

        validate = subparsers.add_parser(
            "validate-install-log",
            help="Validate install JSON logs against event contract",
            description="Validate JSON install logs (event_contract, step_id, install_run_id).",
        )
        validate.add_argument(
            "--file",
            type=str,
            default=None,
            help="Specific install log file path to validate",
        )
        validate.add_argument(
            "--limit",
            type=int,
            default=1,
            help="How many recent log files to validate when --file is not provided (default: 1)",
        )

    def execute(self) -> int:
        if not self.args.logs_command:
            print_error("No logs subcommand specified (e.g. 'ai-dev-kit logs install-history').")
            return 1

        if self.args.logs_command == "install-history":
            return self._install_history()
        if self.args.logs_command == "validate-install-log":
            return self._validate_install_log()

        print_error(f"Unknown logs subcommand: {self.args.logs_command}")
        return 1

    def _install_history(self) -> int:
        project_root = get_project_root()
        if project_root is None:
            project_root = Path.cwd()

        config = Config(project_root / ".ai-dev-kit.yaml")
        default_rel = config.get("install_logging.path", "logs/ai-dev-kit/install")
        log_dir = (project_root / default_rel).resolve()

        if not log_dir.exists():
            print_info(f"No install logs directory found at {log_dir}")
            return 0

        logs = sorted(log_dir.glob("install-*.log"))
        if not logs:
            print_info(f"No install logs found under {log_dir}")
            return 0

        entries: List[Dict[str, str]] = []

        for log_path in reversed(logs):
            # Prefer JSON parsing if the file appears to be JSON per-line
            try:
                content = log_path.read_text(encoding="utf-8").strip()
                if not content:
                    continue
                first_line = content.splitlines()[0]
                is_json = False
                try:
                    json.loads(first_line)
                    is_json = True
                except Exception:
                    is_json = False

                if is_json:
                    run_info = self._summarise_json_log(content)
                else:
                    run_info = self._summarise_text_log(content)

                run_info["file"] = str(log_path.relative_to(project_root))
                entries.append(run_info)
            except Exception:
                # Ignore malformed logs; they should not break the command
                continue

            if len(entries) >= getattr(self.args, "limit", 10):
                break

        if not entries:
            print_info("No usable install log entries found.")
            return 0

        print_info("Recent install runs:")
        for e in entries:
            print_info(
                f"- {e.get('time','?')} | frameworks: {e.get('frameworks','?')} | "
                f"backend: {e.get('backend','?')} | status: {e.get('status','?')} | file: {e.get('file','?')}"
            )

        return 0

    def _summarise_json_log(self, content: str) -> Dict[str, str]:
        time = "?"
        backend = "?"
        frameworks: List[str] = []
        status = "UNKNOWN"

        for line in content.splitlines():
            if not line.strip():
                continue
            try:
                entry = json.loads(line)
            except Exception:
                continue

            ctx = entry.get("context", "")
            msg = entry.get("message", "")
            if ctx == "install.main" and "ai-dev-kit install started in" in msg:
                time = entry.get("timestamp_utc", time)
            if ctx == "install.framework" and msg.startswith("Installing "):
                # e.g. "Installing kanban@latest to /path"
                parts = msg.split()
                if len(parts) >= 2:
                    frameworks.append(parts[1])
            if ctx == "install.framework" and "Using source" in msg:
                # backend is embedded in the message
                if "backend" in msg:
                    backend = msg.split("backend")[-1].strip()
            if ctx == "install.main":
                if "Successfully installed" in msg:
                    status = "SUCCESS"
                elif "Failed installations" in msg:
                    status = "FAIL"

        return {
            "time": time,
            "backend": backend,
            "frameworks": ", ".join(frameworks) if frameworks else "?",
            "status": status,
        }

    def _validate_install_log(self) -> int:
        project_root = get_project_root()
        if project_root is None:
            project_root = Path.cwd()

        config = Config(project_root / ".ai-dev-kit.yaml")
        default_rel = config.get("install_logging.path", "logs/ai-dev-kit/install")
        log_dir = (project_root / default_rel).resolve()

        files_to_validate: List[Path] = []
        if getattr(self.args, "file", None):
            target = Path(self.args.file)
            if not target.is_absolute():
                target = (project_root / target).resolve()
            files_to_validate = [target]
        else:
            if not log_dir.exists():
                print_error(f"No install logs directory found at {log_dir}")
                return 1
            limit = max(1, int(getattr(self.args, "limit", 1)))
            logs = sorted(log_dir.glob("install-*.log"))
            files_to_validate = list(reversed(logs))[:limit]

        if not files_to_validate:
            print_error("No install log files found to validate.")
            return 1

        total_errors = 0
        for log_file in files_to_validate:
            file_errors = self._validate_single_install_log(log_file, project_root)
            total_errors += file_errors

        if total_errors > 0:
            print_error(f"Validation failed with {total_errors} error(s).")
            return 1

        print_info("Install log validation passed.")
        return 0

    def _validate_single_install_log(self, log_file: Path, project_root: Path) -> int:
        if not log_file.exists():
            print_error(f"Log file not found: {log_file}")
            return 1

        try:
            lines = log_file.read_text(encoding="utf-8").splitlines()
        except Exception as exc:
            print_error(f"Unable to read log file {log_file}: {exc}")
            return 1

        errors = 0
        checked = 0
        for idx, line in enumerate(lines, start=1):
            if not line.strip():
                continue
            try:
                entry = json.loads(line)
            except Exception:
                print_error(f"{log_file}:{idx}: not valid JSON line")
                errors += 1
                continue

            checked += 1
            ok, reason = self._validate_json_event_entry(entry)
            if not ok:
                print_error(f"{log_file}:{idx}: {reason}")
                errors += 1

        rel = str(log_file)
        try:
            rel = str(log_file.relative_to(project_root))
        except Exception:
            pass

        if checked == 0:
            print_error(f"{rel}: no JSON log entries found")
            return errors + 1

        if errors == 0:
            print_info(f"{rel}: OK ({checked} entries)")
        return errors

    def _validate_json_event_entry(self, entry: Dict[str, Any]) -> Tuple[bool, Optional[str]]:
        if "install_run_id" not in entry:
            return False, "missing install_run_id"
        if "step_id" not in entry:
            return False, "missing step_id"

        contract = entry.get("event_contract")
        if not isinstance(contract, dict):
            return False, "missing event_contract object"

        intent = contract.get("intent")
        action = contract.get("action")
        result = contract.get("result")
        if not isinstance(intent, dict) or not intent.get("summary"):
            return False, "missing event_contract.intent.summary"
        if not isinstance(action, dict) or not action.get("summary"):
            return False, "missing event_contract.action.summary"
        if not isinstance(result, dict) or not result.get("status"):
            return False, "missing event_contract.result.status"
        if not isinstance(result, dict) or not result.get("details"):
            return False, "missing event_contract.result.details"
        return True, None

    def _summarise_text_log(self, content: str) -> Dict[str, str]:
        time = "?"
        backend = "?"
        frameworks: List[str] = []
        status = "UNKNOWN"

        for line in content.splitlines():
            if "install.main" in line and "ai-dev-kit install started in" in line:
                # Line prefix: [timestamp] [...]
                try:
                    ts_part = line.split("]", 1)[0].lstrip("[")
                    time = ts_part
                except Exception:
                    pass
            if "install.framework" in line and "Installing " in line:
                # e.g. "[..] [INFO] [install.framework] Installing kanban@latest to ..."
                try:
                    msg = line.split("]")[-1]
                    msg = msg.strip()
                    parts = msg.split()
                    if "Installing" in parts and len(parts) >= 2:
                        idx = parts.index("Installing")
                        frameworks.append(parts[idx + 1])
                except Exception:
                    pass
            if "install.framework" in line and "Using source" in line:
                if "backend" in line:
                    backend = line.split("backend")[-1].strip()
            if "install.main" in line:
                if "Successfully installed" in line:
                    status = "SUCCESS"
                elif "Failed installations" in line:
                    status = "FAIL"

        return {
            "time": time,
            "backend": backend,
            "frameworks": ", ".join(frameworks) if frameworks else "?",
            "status": status,
        }

