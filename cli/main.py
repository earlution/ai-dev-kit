#!/usr/bin/env python3
"""
Vibe Dev Kit CLI - Main Entry Point

Unified command-line interface for managing framework dependencies.
"""

import sys
import argparse
from pathlib import Path

# Add cli directory to path
sys.path.insert(0, str(Path(__file__).parent))

from cli.commands.install import InstallCommand
from cli.commands.update import UpdateCommand
from cli.commands.check import CheckCommand
from cli.commands.status import StatusCommand
from cli.commands.list import ListCommand
from cli.commands.remove import RemoveCommand


def main():
    """Main CLI entry point."""
    parser = argparse.ArgumentParser(
        prog="vibe-dev-kit",
        description="Vibe Dev Kit Framework Management CLI",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  vibe-dev-kit install numbering-versioning@2.0.0
  vibe-dev-kit update numbering-versioning
  vibe-dev-kit check
  vibe-dev-kit status
  vibe-dev-kit list
  vibe-dev-kit remove numbering-versioning
        """
    )
    
    subparsers = parser.add_subparsers(dest="command", help="Available commands")
    
    # Install command
    install_parser = subparsers.add_parser("install", help="Install framework(s) as dependency")
    install_parser.add_argument("frameworks", nargs="+", help="Framework name(s) with optional version (e.g., numbering-versioning@2.0.0)")
    install_parser.add_argument("--backend", choices=["git-submodule", "git-subtree", "npm", "pip"], help="Dependency backend")
    install_parser.add_argument("--path", help="Custom installation path")
    install_parser.add_argument("--dry-run", action="store_true", help="Preview changes without applying")
    
    # Update command
    update_parser = subparsers.add_parser("update", help="Update framework(s) to latest compatible version")
    update_parser.add_argument("frameworks", nargs="*", help="Framework name(s) with optional version (e.g., numbering-versioning@2.1.0)")
    update_parser.add_argument("--all", action="store_true", help="Update all installed frameworks")
    update_parser.add_argument("--check", action="store_true", help="Check for updates without applying")
    update_parser.add_argument("--dry-run", action="store_true", help="Preview updates without applying")
    
    # Check command
    check_parser = subparsers.add_parser("check", help="Check for available framework updates")
    check_parser.add_argument("framework", nargs="?", help="Specific framework to check (optional)")
    
    # Status command
    status_parser = subparsers.add_parser("status", help="Show status of installed frameworks")
    status_parser.add_argument("framework", nargs="?", help="Specific framework to show (optional)")
    
    # List command
    list_parser = subparsers.add_parser("list", help="List available frameworks")
    list_parser.add_argument("--versions", action="store_true", help="Show available versions")
    
    # Remove command
    remove_parser = subparsers.add_parser("remove", help="Remove framework dependency")
    remove_parser.add_argument("framework", help="Framework name to remove")
    remove_parser.add_argument("--keep-files", action="store_true", help="Keep framework files but remove dependency tracking")
    
    args = parser.parse_args()
    
    if not args.command:
        parser.print_help()
        return 1
    
    try:
        if args.command == "install":
            cmd = InstallCommand()
            return cmd.execute(args)
        elif args.command == "update":
            cmd = UpdateCommand()
            return cmd.execute(args)
        elif args.command == "check":
            cmd = CheckCommand()
            return cmd.execute(args)
        elif args.command == "status":
            cmd = StatusCommand()
            return cmd.execute(args)
        elif args.command == "list":
            cmd = ListCommand()
            return cmd.execute(args)
        elif args.command == "remove":
            cmd = RemoveCommand()
            return cmd.execute(args)
        else:
            parser.print_help()
            return 1
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())

