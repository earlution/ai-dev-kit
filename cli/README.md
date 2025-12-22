# ai-dev-kit CLI Tool

Unified command-line interface for managing AI Dev Kit framework dependencies.

## Installation

### From Source

```bash
cd /path/to/ai-dev-kit
pip install -e .
```

### From PyPI (when published)

```bash
pip install ai-dev-kit
```

## Usage

```bash
ai-dev-kit [COMMAND] [OPTIONS]
```

## Commands

Commands will be implemented in subsequent tasks:
- `init` - Initialize ai-dev-kit in project
- `install` - Install frameworks
- `update` - Update frameworks
- `check` - Check for updates
- `status` - Show framework status
- `list` - List available frameworks
- `remove` - Remove frameworks
- `config` - Manage configuration

## Project Structure

```
cli/
├── __init__.py          # Package initialization
├── main.py              # CLI entry point
├── config.py            # Configuration management
├── utils.py             # Utility functions
├── commands/            # Command implementations
│   └── __init__.py      # Base command class
└── backends/            # Backend implementations
    └── __init__.py      # Backend protocol
```

## Development

### Running Tests

```bash
pytest
```

### Code Quality

```bash
black cli/
flake8 cli/
mypy cli/
```

## References

- **Design Document:** `docs/architecture/standards-and-adrs/framework-update-cli-design.md`
- **Architecture:** `docs/architecture/standards-and-adrs/framework-dependency-architecture.md`
- **CLI Reference:** `docs/documentation/user-docs/framework-dependency-cli-reference.md`
- **Feature Request:** `docs/project-management/kanban/fr-br/FR-030-ai-dev-kit-cli-tool.md`

