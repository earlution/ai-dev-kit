# Vibe Dev Kit CLI Tool

Unified command-line interface for managing Vibe Dev Kit framework dependencies.

## Installation

### From Source

```bash
cd cli
pip install -e .
```

### As Package (Future)

```bash
pip install vibe-dev-kit
```

## Usage

### Install Framework

```bash
# Install latest version
vibe-dev-kit install numbering-versioning

# Install specific version
vibe-dev-kit install numbering-versioning@2.0.0

# Install with specific backend
vibe-dev-kit install numbering-versioning@2.0.0 --backend git-submodule
```

### Update Framework

```bash
# Update specific framework
vibe-dev-kit update numbering-versioning

# Update all frameworks
vibe-dev-kit update --all

# Check for updates without applying
vibe-dev-kit update --check
```

### Check for Updates

```bash
# Check all frameworks
vibe-dev-kit check

# Check specific framework
vibe-dev-kit check numbering-versioning
```

### Show Status

```bash
# Show all frameworks
vibe-dev-kit status

# Show specific framework
vibe-dev-kit status numbering-versioning
```

### List Available Frameworks

```bash
# List all frameworks
vibe-dev-kit list

# List with versions
vibe-dev-kit list --versions
```

### Remove Framework

```bash
# Remove framework
vibe-dev-kit remove numbering-versioning

# Remove but keep files
vibe-dev-kit remove numbering-versioning --keep-files
```

### Sync Version (Branch Context Policy)

```bash
# Sync version file to highest version from current epic branch
vibe-dev-kit sync-version

# Dry-run (show what would be updated)
vibe-dev-kit sync-version --dry-run

# Sync to specific epic
vibe-dev-kit sync-version --epic 6
```

## Configuration

The CLI tool uses `.vibe-dev-kit.yaml` configuration file:

```yaml
version: "1.0.0"
default_backend: "git-submodule"
frameworks:
  numbering-versioning:
    version: "2.0.0"
    backend: "git-submodule"
    path: "frameworks/vibe-dev-kit/packages/frameworks/numbering & versioning"
    source: "https://github.com/earlution/vibe-dev-kit.git"
    tag: "numbering-versioning-v2.0.0"
```

## Backends

### Git Submodule

Default backend for Git-based projects.

```bash
vibe-dev-kit install numbering-versioning --backend git-submodule
```

### Git Subtree

Alternative Git-based backend.

```bash
vibe-dev-kit install numbering-versioning --backend git-subtree
```

### Package Managers

#### npm

```bash
vibe-dev-kit install numbering-versioning --backend npm
```

#### pip

```bash
vibe-dev-kit install numbering-versioning --backend pip
```

## Development

### Running from Source

```bash
python cli/main.py install numbering-versioning@2.0.0
```

### Making Executable

```bash
chmod +x cli/main.py
./cli/main.py install numbering-versioning@2.0.0
```

## See Also

- **Framework Dependency Architecture:** `KB/Architecture/Standards_and_ADRs/framework-dependency-architecture.md`
- **CLI Design:** `KB/Architecture/Standards_and_ADRs/framework-update-cli-design.md`

