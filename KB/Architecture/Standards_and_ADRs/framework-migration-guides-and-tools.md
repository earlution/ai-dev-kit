---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T17:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Migration Guides and Tools

**Status:** Proposed  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 2 - Framework Update and Migration  
**Task:** E6:S02:T02 - Build migration guides and tools

---

## Executive Summary

This document defines the **migration guides and tools for Vibe Dev Kit framework packages**. It establishes migration guide templates, identifies migration scenarios, and provides tools and scripts to assist with framework version migrations.

**Key Principle:** MAJOR framework updates require comprehensive migration guides and automated tools to ensure smooth transitions and minimize migration effort.

---

## Migration Scenarios

### Scenario 1: MAJOR Version Update

**Description:** Updating from one MAJOR version to another (e.g., `1.5.3` → `2.0.0`)

**Characteristics:**
- Breaking changes present
- Migration guide required
- Manual intervention needed
- Comprehensive testing required

**Migration Steps:**
1. Review breaking changes
2. Read migration guide
3. Update framework dependency
4. Apply migration steps
5. Update code for breaking changes
6. Run tests
7. Verify migration

### Scenario 2: Cross-MAJOR Migration

**Description:** Migrating across multiple MAJOR versions (e.g., `1.0.0` → `3.0.0`)

**Characteristics:**
- Multiple breaking changes
- Sequential migration recommended
- Cumulative migration guide needed
- Extended testing required

**Migration Steps:**
1. Review all breaking changes (v1 → v2, v2 → v3)
2. Plan sequential migration (v1 → v2, then v2 → v3)
3. Apply migration for each MAJOR version
4. Test after each migration step
5. Verify complete migration

### Scenario 3: Deprecated Feature Removal

**Description:** Migrating away from deprecated features before removal

**Characteristics:**
- Features marked as deprecated
- Migration path provided
- Timeline for removal
- Proactive migration recommended

**Migration Steps:**
1. Identify deprecated features in use
2. Review migration path for each feature
3. Update code to use new features
4. Test updated code
5. Verify deprecated features removed

### Scenario 4: Structural Changes

**Description:** Migrating due to framework structure changes (directory layout, file organization)

**Characteristics:**
- File paths changed
- Import statements need updates
- Configuration files moved
- Reference updates required

**Migration Steps:**
1. Identify affected file paths
2. Update import statements
3. Update configuration references
4. Update documentation references
5. Test updated paths

### Scenario 5: API Changes

**Description:** Migrating due to API method changes (renamed, removed, signature changes)

**Characteristics:**
- Method names changed
- Method signatures changed
- Methods removed
- Code updates required

**Migration Steps:**
1. Identify affected API calls
2. Review new API documentation
3. Update method calls
4. Update method signatures
5. Test updated API calls

---

## Migration Guide Structure

### Migration Guide Template

**Location:** `packages/frameworks/{framework-name}/MIGRATION_GUIDE_v{version}.md`

**Template:**
```markdown
# Migration Guide: {framework-name} v{old-version} → v{new-version}

**Release Date:** {date}  
**Migration Difficulty:** {Easy/Medium/Hard}  
**Estimated Time:** {time estimate}  
**Breaking Changes:** {count}

---

## Overview

This guide helps you migrate from {framework-name} v{old-version} to v{new-version}.

**Key Changes:**
- {Change 1}
- {Change 2}
- {Change 3}

**Migration Path:**
- Direct migration: {old-version} → {new-version}
- Sequential migration: {old-version} → {intermediate-version} → {new-version} (if needed)

---

## Breaking Changes

### Change 1: {Description}

**What Changed:**
{Detailed description of the change}

**Why:**
{Reason for the change}

**Impact:**
- {Impact 1}
- {Impact 2}

**Migration Steps:**
1. {Step 1}
2. {Step 2}
3. {Step 3}

**Before (v{old-version}):**
```{language}
{Old code example}
```

**After (v{new-version}):**
```{language}
{New code example}
```

### Change 2: {Description}

{Repeat structure for each breaking change}

---

## Upgrade Steps

### Step 1: Prepare for Migration

1. **Backup Current Implementation:**
   ```bash
   git checkout -b migrate-{framework-name}-v{new-version}
   git commit -m "Backup before {framework-name} v{new-version} migration"
   ```

2. **Review Migration Guide:**
   - Read this guide thoroughly
   - Identify all breaking changes affecting your project
   - Estimate migration effort

3. **Check Dependencies:**
   - Verify all dependencies are compatible
   - Update dependencies if needed
   - Test current implementation

### Step 2: Update Framework Dependency

**Git Submodules:**
```bash
cd frameworks/vibe-dev-kit
git fetch
git checkout {framework-name}-v{new-version}
cd ../..
git add frameworks/vibe-dev-kit
```

**CLI Tool:**
```bash
vibe-dev-kit update {framework-name}@{new-version}
```

**Package Manager:**
```bash
# npm
npm install @vibe-dev-kit/{framework-name}@{new-version}

# pip
pip install vibe-dev-kit-{framework-name}=={new-version}
```

### Step 3: Apply Migration Steps

For each breaking change:

1. **Identify Affected Code:**
   - Search for deprecated features
   - Find affected API calls
   - Locate configuration files

2. **Apply Migration:**
   - Update code according to migration guide
   - Update configuration files
   - Update import statements

3. **Test Changes:**
   - Run tests for affected code
   - Verify functionality
   - Check for errors

### Step 4: Update Code

**Example Updates:**

**File Path Changes:**
```python
# Before
from frameworks.vibe_dev_kit.policies.versioning_policy import VersionPolicy

# After
from frameworks.vibe_dev_kit.KB.Architecture.Standards_and_ADRs.versioning_policy import VersionPolicy
```

**API Method Changes:**
```python
# Before
version = create_version(epic, story, patch)

# After
version = create_version(epic, story, task, build)
```

**Configuration Changes:**
```yaml
# Before
versioning:
  schema: RC.EPIC.STORY.PATCH

# After
versioning:
  schema: RC.EPIC.STORY.TASK+BUILD
```

### Step 5: Test Migration

1. **Run Test Suite:**
   ```bash
   # Run all tests
   pytest tests/
   
   # Run specific migration tests
   pytest tests/test_migration_{framework_name}_v{new_version}.py
   ```

2. **Verify Functionality:**
   - Test all affected features
   - Verify breaking changes addressed
   - Check for regressions

3. **Integration Testing:**
   - Test framework integration
   - Verify dependencies work
   - Test end-to-end workflows

### Step 6: Verify Migration

**Verification Checklist:**
- [ ] All breaking changes addressed
- [ ] All tests pass
- [ ] No deprecation warnings
- [ ] Code compiles without errors
- [ ] Functionality verified
- [ ] Documentation updated

### Step 7: Complete Migration

1. **Commit Changes:**
   ```bash
   git add .
   git commit -m "Migrate {framework-name} from v{old-version} to v{new-version}"
   ```

2. **Update Documentation:**
   - Update project README
   - Update framework version references
   - Document migration completion

3. **Merge Migration Branch:**
   ```bash
   git checkout main
   git merge migrate-{framework-name}-v{new-version}
   ```

---

## Common Migration Issues

### Issue 1: Import Errors

**Symptom:** Import statements fail after migration

**Solution:**
1. Check new file paths in framework
2. Update import statements
3. Verify file locations

### Issue 2: API Method Not Found

**Symptom:** Method calls fail after migration

**Solution:**
1. Check new API documentation
2. Update method names
3. Update method signatures

### Issue 3: Configuration Errors

**Symptom:** Configuration files fail to load

**Solution:**
1. Review new configuration format
2. Update configuration files
3. Verify configuration syntax

### Issue 4: Test Failures

**Symptom:** Tests fail after migration

**Solution:**
1. Review test failures
2. Update test code for breaking changes
3. Verify test expectations

---

## Migration Tools

### Tool 1: Migration Checker

**Script:** `scripts/framework-management/check-migration-needs.sh`

**Functionality:**
1. Identify deprecated features in use
2. Check for breaking changes
3. Generate migration report
4. Estimate migration effort

**Usage:**
```bash
./scripts/framework-management/check-migration-needs.sh \
  --framework numbering-versioning \
  --from 1.0.0 \
  --to 2.0.0 \
  --project-path /path/to/project

# Output:
# Migration Report:
# - Deprecated features in use: 3
# - Breaking changes affecting project: 5
# - Estimated migration time: 4 hours
# - Migration difficulty: Medium
```

### Tool 2: Migration Helper Script

**Script:** `scripts/framework-management/migrate-framework.sh`

**Functionality:**
1. Update framework dependency
2. Apply automated migration steps
3. Generate migration report
4. Create migration branch

**Usage:**
```bash
./scripts/framework-management/migrate-framework.sh \
  --framework numbering-versioning \
  --from 1.0.0 \
  --to 2.0.0 \
  --project-path /path/to/project

# Output:
# ✅ Framework dependency updated
# ✅ Migration branch created: migrate-numbering-versioning-v2.0.0
# ✅ Automated migration steps applied
# ⚠️  Manual migration steps required (see migration guide)
```

### Tool 3: Deprecation Scanner

**Script:** `scripts/framework-management/scan-deprecations.sh`

**Functionality:**
1. Scan project for deprecated features
2. Identify usage locations
3. Generate deprecation report
4. Suggest migration paths

**Usage:**
```bash
./scripts/framework-management/scan-deprecations.sh \
  --framework numbering-versioning \
  --project-path /path/to/project

# Output:
# Deprecation Report:
# - old_versioning_method(): Used in 5 files
# - deprecated_policy(): Used in 2 files
# - Migration paths available
```

### Tool 4: Migration Test Generator

**Script:** `scripts/framework-management/generate-migration-tests.sh`

**Functionality:**
1. Generate migration test templates
2. Create test cases for breaking changes
3. Generate test data
4. Create test fixtures

**Usage:**
```bash
./scripts/framework-management/generate-migration-tests.sh \
  --framework numbering-versioning \
  --from 1.0.0 \
  --to 2.0.0 \
  --output tests/migration/

# Output:
# ✅ Migration test templates generated
# ✅ Test cases created for 5 breaking changes
# ✅ Test data generated
# ✅ Test fixtures created
```

---

## Migration Guide Creation Process

### Step 1: Identify Breaking Changes

**Process:**
1. Review framework changes since last MAJOR release
2. Identify all breaking changes
3. Categorize breaking changes (API, structure, configuration)
4. Document impact of each change

**Breaking Change Categories:**
- **API Changes:** Method renames, signature changes, removals
- **Structural Changes:** Directory layout, file organization
- **Configuration Changes:** Config format, schema changes
- **Policy Changes:** Policy updates, guideline changes

### Step 2: Create Migration Guide

**Process:**
1. Use migration guide template
2. Document each breaking change
3. Provide before/after examples
4. Create step-by-step migration instructions
5. Add common issues and solutions

**Guide Sections:**
- Overview
- Breaking Changes (detailed)
- Upgrade Steps (step-by-step)
- Examples (before/after code)
- Common Issues (troubleshooting)

### Step 3: Create Migration Tools

**Process:**
1. Identify automation opportunities
2. Create migration scripts
3. Create migration test generators
4. Create deprecation scanners
5. Document tool usage

**Tools:**
- Migration checker
- Migration helper script
- Deprecation scanner
- Migration test generator

### Step 4: Test Migration Guide

**Process:**
1. Test migration guide with sample project
2. Verify all steps work
3. Test migration tools
4. Gather feedback
5. Refine guide and tools

---

## Migration Guide Best Practices

### Documentation

1. **Clear Structure:**
   - Use consistent template
   - Organize by breaking change
   - Provide step-by-step instructions

2. **Comprehensive Examples:**
   - Before/after code examples
   - Real-world scenarios
   - Common use cases

3. **Troubleshooting:**
   - Document common issues
   - Provide solutions
   - Include error messages

### Tools

1. **Automation:**
   - Automate repetitive tasks
   - Generate migration reports
   - Create test templates

2. **Validation:**
   - Validate migration steps
   - Check for completeness
   - Verify migration success

3. **Reporting:**
   - Generate migration reports
   - Track migration progress
   - Document migration results

### Testing

1. **Migration Testing:**
   - Test migration steps
   - Verify breaking changes addressed
   - Test migration tools

2. **Regression Testing:**
   - Test all functionality
   - Verify no regressions
   - Test integration points

---

## Migration Guide Examples

### Example 1: Versioning Schema Change

**Breaking Change:** Versioning schema changed from `RC.EPIC.STORY.PATCH` to `RC.EPIC.STORY.TASK+BUILD`

**Migration Guide Entry:**
```markdown
### Change: Versioning Schema Update

**What Changed:**
Versioning schema changed from `RC.EPIC.STORY.PATCH` to `RC.EPIC.STORY.TASK+BUILD`.

**Why:**
To support task-level versioning and build numbers for better traceability.

**Impact:**
- All version files need updating
- Version parsing code needs updating
- Changelog format needs updating

**Migration Steps:**
1. Update version file format
2. Update version parsing code
3. Update changelog format
4. Test version generation

**Before (v1.0.0):**
```python
VERSION_RC = 0
VERSION_EPIC = 1
VERSION_STORY = 2
VERSION_PATCH = 3
VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_PATCH}"
```

**After (v2.0.0):**
```python
VERSION_RC = 0
VERSION_EPIC = 1
VERSION_STORY = 2
VERSION_TASK = 3
VERSION_BUILD = 1
VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
```
```

### Example 2: Directory Structure Change

**Breaking Change:** Framework directory structure reorganized

**Migration Guide Entry:**
```markdown
### Change: Directory Structure Reorganization

**What Changed:**
Framework files moved from `policies/` to `KB/Architecture/Standards_and_ADRs/`.

**Why:**
To align with dev-kit architecture and improve organization.

**Impact:**
- Import statements need updating
- File paths need updating
- Configuration references need updating

**Migration Steps:**
1. Update import statements
2. Update file path references
3. Update configuration files
4. Test imports

**Before (v1.0.0):**
```python
from frameworks.vibe_dev_kit.policies.versioning_policy import VersionPolicy
```

**After (v2.0.0):**
```python
from frameworks.vibe_dev_kit.KB.Architecture.Standards_and_ADRs.versioning_policy import VersionPolicy
```
```

---

## Migration Tools Implementation

### Migration Checker Script

**Location:** `scripts/framework-management/check-migration-needs.sh`

**Implementation:**
```bash
#!/bin/bash
# check-migration-needs.sh
# Checks migration needs for framework update

set -e

FRAMEWORK_NAME=$1
FROM_VERSION=$2
TO_VERSION=$3
PROJECT_PATH=$4

# Validate inputs
if [ -z "$FRAMEWORK_NAME" ] || [ -z "$FROM_VERSION" ] || [ -z "$TO_VERSION" ]; then
  echo "Usage: $0 <framework-name> <from-version> <to-version> [project-path]"
  exit 1
fi

# Check if MAJOR version update
FROM_MAJOR=$(echo $FROM_VERSION | cut -d. -f1)
TO_MAJOR=$(echo $TO_VERSION | cut -d. -f1)

if [ "$FROM_MAJOR" != "$TO_MAJOR" ]; then
  echo "⚠️  MAJOR version update detected: $FROM_VERSION → $TO_VERSION"
  echo "📋 Migration guide required: packages/frameworks/$FRAMEWORK_NAME/MIGRATION_GUIDE_v$TO_VERSION.md"
  
  # Scan for deprecated features
  echo "🔍 Scanning for deprecated features..."
  # Implementation: scan project for deprecated API calls
  
  # Generate migration report
  echo "📊 Generating migration report..."
  # Implementation: generate report
else
  echo "✅ MINOR/PATCH update: $FROM_VERSION → $TO_VERSION"
  echo "✅ No migration required"
fi
```

### Migration Helper Script

**Location:** `scripts/framework-management/migrate-framework.sh`

**Implementation:**
```bash
#!/bin/bash
# migrate-framework.sh
# Helps migrate framework to new version

set -e

FRAMEWORK_NAME=$1
FROM_VERSION=$2
TO_VERSION=$3
PROJECT_PATH=${4:-.}

# Validate inputs
if [ -z "$FRAMEWORK_NAME" ] || [ -z "$FROM_VERSION" ] || [ -z "$TO_VERSION" ]; then
  echo "Usage: $0 <framework-name> <from-version> <to-version> [project-path]"
  exit 1
fi

# Create migration branch
BRANCH_NAME="migrate-${FRAMEWORK_NAME}-v${TO_VERSION}"
git checkout -b "$BRANCH_NAME"

# Update framework dependency
echo "📦 Updating framework dependency..."
# Implementation: update dependency

# Apply automated migration steps
echo "🔧 Applying automated migration steps..."
# Implementation: apply automated steps

# Generate migration report
echo "📊 Generating migration report..."
# Implementation: generate report

echo "✅ Migration branch created: $BRANCH_NAME"
echo "⚠️  Manual migration steps required (see migration guide)"
```

---

## References

- [Framework Update Procedures](./framework-update-procedures.md)
- [Framework Release Processes](./framework-release-processes.md)
- [Framework Compatibility Tracking](./framework-compatibility-tracking.md)
- [Framework Versioning Strategy](./framework-versioning-strategy.md)

---

## Appendix: Migration Guide Checklist

### Pre-Migration Checklist

- [ ] Migration guide reviewed
- [ ] Breaking changes identified
- [ ] Migration plan created
- [ ] Backup created
- [ ] Migration branch created

### Migration Execution Checklist

- [ ] Framework dependency updated
- [ ] Breaking changes addressed
- [ ] Code updated
- [ ] Configuration updated
- [ ] Tests updated

### Post-Migration Checklist

- [ ] All tests pass
- [ ] Migration verified
- [ ] Documentation updated
- [ ] Migration branch merged
- [ ] Migration complete

---

**Status:** This migration guide and tools system is proposed and will be refined based on implementation experience.

