#!/usr/bin/env python3
"""
ai-dev-kit CLI Tool Entry Point

Main entry point for the ai-dev-kit command-line interface.
"""

import sys
import argparse
from typing import Dict, Type

from cli.commands import BaseCommand
from cli.utils import print_error


# Command registry - will be populated as commands are implemented
_COMMANDS: Dict[str, Type[BaseCommand]] = {}


def register_command(name: str, command_class: Type[BaseCommand]) -> None:
    """
    Register a command with the CLI.
    
    Args:
        name: Command name (e.g., 'install', 'update')
        command_class: Command class that implements BaseCommand
    """
    _COMMANDS[name] = command_class


def create_parser() -> argparse.ArgumentParser:
    """
    Create the main argument parser.
    
    Returns:
        Configured argument parser
    """
    parser = argparse.ArgumentParser(
        prog="ai-dev-kit",
        description="Unified CLI tool for managing AI Dev Kit framework dependencies",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    
    parser.add_argument(
        "--version",
        action="version",
        version="%(prog)s 0.1.0",
        help="Show version and exit",
    )
    
    # Create subparsers for commands
    subparsers = parser.add_subparsers(
        dest="command",
        help="Command to execute",
        metavar="COMMAND",
    )
    
    # Register commands (will be implemented in subsequent tasks)
    # For now, we'll create placeholder subparsers
    # Commands will be registered in T02-T03
    
    return parser


def main() -> int:
    """
    Main entry point for the CLI tool.
    
    Returns:
        Exit code (0 for success, non-zero for failure)
    """
    parser = create_parser()
    args = parser.parse_args()
    
    # If no command specified, show help
    if not args.command:
        parser.print_help()
        return 1
    
    # Get command class
    command_class = _COMMANDS.get(args.command)
    
    if not command_class:
        print_error(f"Unknown command: {args.command}")
        print_error(f"Available commands: {', '.join(_COMMANDS.keys())}")
        return 1
    
    # Create and execute command
    try:
        command = command_class(args)
        return command.execute()
    except KeyboardInterrupt:
        print_error("\nOperation cancelled by user")
        return 130
    except Exception as e:
        print_error(f"Unexpected error: {str(e)}")
        if args.debug if hasattr(args, 'debug') else False:
            import traceback
            traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())

