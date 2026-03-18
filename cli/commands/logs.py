"""
logs command for ai-dev-kit CLI.

Provides a simple install-history subcommand that summarises recent
install runs based on logs/ai-dev-kit/install/ contents.
"""

import argparse
import json
import os
from pathlib import Path
from typing import List, Dict

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

    def execute(self) -> int:
        if not self.args.logs_command:
            print_error("No logs subcommand specified (e.g. 'ai-dev-kit logs install-history').")
            return 1

        if self.args.logs_command == "install-history":
            return self._install_history()

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

