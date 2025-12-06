---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T15:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Version Tagging Strategy

**Status:** Proposed  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 1 - Framework Version Management  
**Task:** E6:S01:T05 - Create framework version tagging strategy

---

## Executive Summary

This document defines the **Git tagging strategy for Vibe Dev Kit framework packages**. Frameworks use Git tags to mark releases, enabling version pinning, dependency management, and automated updates.

**Key Principle:** Framework tags are **consumer-facing** and follow semantic versioning, enabling projects to pin to specific framework versions or track updates.

---

## Tag Naming Convention

### Tag Format

Framework versions are tagged in Git using the format:

**Format:** `{framework-name}-v{MAJOR}.{MINOR}.{PATCH}`

**Components:**
- `{framework-name}`: Framework identifier in kebab-case
- `v`: Version prefix (standard Git convention)
- `{MAJOR}.{MINOR}.{PATCH}`: Semantic version number

### Tag Examples

**Current Frameworks:**
- `numbering-versioning-v2.0.0`
- `workflow-mgmt-v1.0.0`
- `kanban-v1.0.0`

**Version Increments:**
- `numbering-versioning-v2.0.0` → `numbering-versioning-v2.1.0` (MINOR)
- `numbering-versioning-v2.1.0` → `numbering-versioning-v2.1.1` (PATCH)
- `numbering-versioning-v2.1.1` → `numbering-versioning-v3.0.0` (MAJOR)

### Framework Name Mapping

**Framework Directory → Tag Name:**
- `packages/frameworks/numbering & versioning/` → `numbering-versioning`
- `packages/frameworks/workflow mgt/` → `workflow-mgmt`
- `packages/frameworks/kanban/` → `kanban`

**Naming Rules:**
- Convert spaces to hyphens
- Convert special characters to hyphens
- Use lowercase
- Keep names concise and descriptive

---

## Tagging Workflow

### Release Process

**Step 1: Determine Version Increment**
1. Review changes since last framework release
2. Determine if MAJOR, MINOR, or PATCH increment
3. Calculate new version number

**Step 2: Update Framework Version File**
1. Update `packages/frameworks/{framework-name}/VERSION`
2. Update framework README version
3. Update framework changelog

**Step 3: Create Git Tag**
1. Create annotated tag with release message
2. Push tag to remote repository
3. Verify tag creation

**Step 4: Document Release**
1. Update framework changelog
2. Update framework version registry
3. Announce release if MAJOR

### Tag Creation Command

**Manual Tagging:**
```bash
# Create annotated tag
git tag -a numbering-versioning-v2.0.0 -m "Release numbering-versioning v2.0.0

- Added new versioning policy document
- Enhanced implementation guide
- Updated framework dependency architecture support"

# Push tag to remote
git push origin numbering-versioning-v2.0.0
```

**Tag Message Format:**
```
Release {framework-name} v{version}

{Summary of changes}

- {Change 1}
- {Change 2}
- {Change 3}
```

---

## Automated Tagging Scripts

### Script: `tag-framework-release.sh`

**Location:** `scripts/framework-management/tag-framework-release.sh`

**Usage:**
```bash
./scripts/framework-management/tag-framework-release.sh \
  --framework numbering-versioning \
  --version 2.0.0 \
  --message "Release numbering-versioning v2.0.0"
```

**Functionality:**
1. Validates framework name and version format
2. Checks if tag already exists
3. Updates framework VERSION file
4. Creates annotated Git tag
5. Pushes tag to remote
6. Updates framework changelog

**Script Template:**
```bash
#!/bin/bash
# tag-framework-release.sh
# Tags a framework release in Git

set -e

FRAMEWORK_NAME=$1
VERSION=$2
MESSAGE=$3

# Validate inputs
if [ -z "$FRAMEWORK_NAME" ] || [ -z "$VERSION" ]; then
  echo "Usage: $0 <framework-name> <version> [message]"
  exit 1
fi

# Validate version format (MAJOR.MINOR.PATCH)
if ! echo "$VERSION" | grep -qE '^[0-9]+\.[0-9]+\.[0-9]+$'; then
  echo "Error: Version must be in format MAJOR.MINOR.PATCH (e.g., 2.0.0)"
  exit 1
fi

# Construct tag name
TAG_NAME="${FRAMEWORK_NAME}-v${VERSION}"

# Check if tag already exists
if git rev-parse "$TAG_NAME" >/dev/null 2>&1; then
  echo "Error: Tag $TAG_NAME already exists"
  exit 1
fi

# Update framework VERSION file
FRAMEWORK_DIR="packages/frameworks/${FRAMEWORK_NAME}"
if [ ! -d "$FRAMEWORK_DIR" ]; then
  echo "Error: Framework directory not found: $FRAMEWORK_DIR"
  exit 1
fi

# Create tag
if [ -z "$MESSAGE" ]; then
  MESSAGE="Release ${FRAMEWORK_NAME} v${VERSION}"
fi

git tag -a "$TAG_NAME" -m "$MESSAGE"
git push origin "$TAG_NAME"

echo "✅ Tagged ${TAG_NAME} successfully"
```

### Script: `list-framework-tags.sh`

**Location:** `scripts/framework-management/list-framework-tags.sh`

**Usage:**
```bash
./scripts/framework-management/list-framework-tags.sh numbering-versioning
```

**Functionality:**
1. Lists all tags for a specific framework
2. Shows tag dates and messages
3. Sorts by version number

**Script Template:**
```bash
#!/bin/bash
# list-framework-tags.sh
# Lists all tags for a framework

FRAMEWORK_NAME=$1

if [ -z "$FRAMEWORK_NAME" ]; then
  echo "Usage: $0 <framework-name>"
  exit 1
fi

echo "Tags for ${FRAMEWORK_NAME}:"
git tag -l "${FRAMEWORK_NAME}-v*" | sort -V
```

---

## Tag-Based Versioning Process

### Version Pinning

**Git Submodules:**
```bash
# Add framework as submodule
git submodule add https://github.com/earlution/vibe-dev-kit.git frameworks/vibe-dev-kit

# Pin to specific version
cd frameworks/vibe-dev-kit
git checkout numbering-versioning-v2.0.0
cd ../..
git add frameworks/vibe-dev-kit
git commit -m "Pin numbering-versioning to v2.0.0"
```

**CLI Tool:**
```bash
# Install specific version
vibe-dev-kit install numbering-versioning@2.0.0

# Update to latest compatible
vibe-dev-kit update numbering-versioning
```

**Package Managers:**
```json
{
  "dependencies": {
    "@vibe-dev-kit/numbering-versioning": "2.0.0"
  }
}
```

### Version Tracking

**List Available Versions:**
```bash
# List all tags for a framework
git tag -l "numbering-versioning-v*" | sort -V

# Output:
# numbering-versioning-v1.0.0
# numbering-versioning-v2.0.0
# numbering-versioning-v2.1.0
# numbering-versioning-v2.1.1
```

**Check Current Version:**
```bash
# In framework directory
cd packages/frameworks/numbering\ \&\ versioning
cat VERSION

# Output:
# FRAMEWORK_VERSION = "2.0.0"
```

---

## Tag Management

### Tag Lifecycle

**Creation:**
- Tags are created when frameworks are released
- Tags are immutable (never changed or deleted)
- Tags point to specific commits

**Maintenance:**
- Tags are pushed to remote repository
- Tags are listed in framework changelog
- Tags are tracked in version registry

**Deletion:**
- Tags are **never deleted** (immutable)
- If a tag is created incorrectly, create a new tag with corrected version
- Document tag corrections in changelog

### Tag Validation

**Pre-Tag Checks:**
1. Framework VERSION file matches tag version
2. Framework README version matches tag version
3. Framework changelog includes release entry
4. Tag name follows naming convention
5. Tag doesn't already exist

**Post-Tag Verification:**
1. Tag exists in remote repository
2. Tag points to correct commit
3. Tag message is correct
4. Framework version file is updated

---

## Integration with Release Workflow

### Framework Release in Dev-Kit RW

**Current Dev-Kit RW:**
- Uses `RC.EPIC.STORY.TASK+BUILD` versioning
- Tracks internal development
- Updates dev-kit changelog

**Framework Release:**
- Uses `MAJOR.MINOR.PATCH` versioning
- Tracks consumer-facing releases
- Updates framework changelog
- Creates Git tags

**Relationship:**
- One framework release may span multiple dev-kit versions
- Framework tags are created independently of dev-kit versions
- Framework releases are triggered when framework changes warrant new version

### Release Decision Criteria

**When to Create Framework Tag:**

**PATCH Release:**
- Bug fixes in framework
- Documentation corrections
- Minor template improvements

**MINOR Release:**
- New features added
- New policies or guidelines
- New templates or examples
- Enhanced documentation

**MAJOR Release:**
- Breaking changes
- Incompatible API changes
- Major restructuring
- Removal of features

**When NOT to Create Framework Tag:**
- Dev-kit internal changes only
- Changes to other frameworks
- Documentation updates that don't affect framework functionality
- Minor clarifications

---

## Tag Naming Best Practices

### Consistency

1. **Always use kebab-case** for framework names
2. **Always include `v` prefix** before version
3. **Always use semantic versioning** (MAJOR.MINOR.PATCH)
4. **Never use pre-release versions** (alpha, beta, rc)

### Clarity

1. **Framework name should match directory name** (converted to kebab-case)
2. **Version should match VERSION file** exactly
3. **Tag message should describe changes** clearly

### Examples

**Good:**
- `numbering-versioning-v2.0.0`
- `workflow-mgmt-v1.0.0`
- `kanban-v1.2.0`

**Bad:**
- `numbering_versioning_v2.0.0` (underscores)
- `numbering-versioning-2.0.0` (missing v prefix)
- `numbering-versioning-v2.0.0-beta` (pre-release)
- `Numbering-Versioning-v2.0.0` (mixed case)

---

## Tag Registry

### Framework Version Registry

**Location:** `KB/Architecture/Standards_and_ADRs/framework-versions.md`

**Purpose:** Track all framework versions and their release dates

**Format:**
```markdown
# Framework Versions

## numbering-versioning
- v2.0.0 - 2025-12-06 - Initial release with Epic renumbering strategy
- v2.1.0 - TBD - Planned features

## workflow-mgmt
- v1.0.0 - TBD - Initial release planned

## kanban
- v1.0.0 - TBD - Initial release planned
```

### Automated Registry Updates

**Script:** `update-framework-registry.sh`

**Functionality:**
1. Reads framework tags from Git
2. Updates framework version registry
3. Maintains chronological order
4. Links to framework changelogs

---

## Tag-Based Dependency Management

### Git Submodules

**Tag-Based Pinning:**
```bash
# Add submodule
git submodule add https://github.com/earlution/vibe-dev-kit.git frameworks/vibe-dev-kit

# Pin to tag
cd frameworks/vibe-dev-kit
git checkout numbering-versioning-v2.0.0
cd ../..
git add frameworks/vibe-dev-kit
git commit -m "Pin numbering-versioning to v2.0.0"
```

**Update to New Tag:**
```bash
cd frameworks/vibe-dev-kit
git fetch
git checkout numbering-versioning-v2.1.0
cd ../..
git add frameworks/vibe-dev-kit
git commit -m "Update numbering-versioning to v2.1.0"
```

### CLI Tool Integration

**Tag-Based Installation:**
```bash
# Install specific version
vibe-dev-kit install numbering-versioning@2.0.0

# List available versions
vibe-dev-kit list numbering-versioning

# Update to latest
vibe-dev-kit update numbering-versioning
```

### Package Manager Integration

**Tag-Based Versioning:**
```json
{
  "dependencies": {
    "@vibe-dev-kit/numbering-versioning": "2.0.0"
  }
}
```

---

## References

- [Framework Versioning Strategy](./framework-versioning-strategy.md)
- [Framework Dependency Architecture](./framework-dependency-architecture.md)
- [Semantic Versioning](https://semver.org/)
- [Git Tagging Best Practices](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

---

## Appendix: Tagging Scripts

### Complete Script: `tag-framework-release.sh`

```bash
#!/bin/bash
# tag-framework-release.sh
# Tags a framework release in Git

set -e

# Parse arguments
FRAMEWORK_NAME=""
VERSION=""
MESSAGE=""

while [[ $# -gt 0 ]]; do
  case $1 in
    --framework)
      FRAMEWORK_NAME="$2"
      shift 2
      ;;
    --version)
      VERSION="$2"
      shift 2
      ;;
    --message)
      MESSAGE="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Validate inputs
if [ -z "$FRAMEWORK_NAME" ] || [ -z "$VERSION" ]; then
  echo "Usage: $0 --framework <name> --version <version> [--message <message>]"
  exit 1
fi

# Validate version format
if ! echo "$VERSION" | grep -qE '^[0-9]+\.[0-9]+\.[0-9]+$'; then
  echo "Error: Version must be in format MAJOR.MINOR.PATCH (e.g., 2.0.0)"
  exit 1
fi

# Construct tag name
TAG_NAME="${FRAMEWORK_NAME}-v${VERSION}"

# Check if tag exists
if git rev-parse "$TAG_NAME" >/dev/null 2>&1; then
  echo "Error: Tag $TAG_NAME already exists"
  exit 1
fi

# Default message
if [ -z "$MESSAGE" ]; then
  MESSAGE="Release ${FRAMEWORK_NAME} v${VERSION}"
fi

# Create tag
git tag -a "$TAG_NAME" -m "$MESSAGE"
git push origin "$TAG_NAME"

echo "✅ Tagged ${TAG_NAME} successfully"
```

---

**Status:** This strategy is proposed and will be refined based on implementation experience.

