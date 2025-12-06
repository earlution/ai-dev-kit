---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Branch Context Policy Automation

**Status:** Implemented  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 2 - Framework Update and Migration  
**Task:** E6:S02:T06 - Implement Branch Context Policy automation

---

## Executive Summary

This document describes the **automated implementation** of the Branch Context Policy, which ensures version files are automatically updated to reflect the highest version from an epic when switching branches.

**Key Principle:** 
- **During active work:** Version file reflects the **last commit** on the current branch (updated by Release Workflow)
- **On branch switch:** Version file is automatically updated to the **highest version** from that epic

---

## Implementation Components

### 1. Version Sync Script

**File:** `scripts/framework-management/sync-branch-version.py`

**Purpose:** Syncs version file to highest version from epic

**Features:**
- Detects epic number from current branch name
- Reads CHANGELOG.md to find highest version for that epic
- Updates `src/fynd_deals/version.py` with correct version
- Supports dry-run mode for testing
- Supports manual epic specification

**Usage:**
```bash
# Auto-detect epic from branch
python3 scripts/framework-management/sync-branch-version.py

# Dry-run (show what would change)
python3 scripts/framework-management/sync-branch-version.py --dry-run

# Specify epic manually
python3 scripts/framework-management/sync-branch-version.py --epic 6
```

### 2. Git Post-Checkout Hook

**File:** `.git/hooks/post-checkout`

**Purpose:** Automatically syncs version file on branch checkout

**Behavior:**
- Triggers only on branch checkout (not file checkout)
- Detects if current branch is an epic branch (`epic/N-*`)
- Calls sync script to update version file
- Silent failure (doesn't block checkout if script fails)

**Installation:**
- Hook is automatically created in `.git/hooks/`
- Must be executable: `chmod +x .git/hooks/post-checkout`

### 3. CLI Command

**Command:** `vibe-dev-kit sync-version`

**Purpose:** Manual version sync command

**Usage:**
```bash
# Sync to highest version from current epic branch
vibe-dev-kit sync-version

# Dry-run (show what would change)
vibe-dev-kit sync-version --dry-run

# Sync to specific epic
vibe-dev-kit sync-version --epic 6
```

**Implementation:**
- `cli/commands/sync_version.py` - Command implementation
- Integrated into `cli/main.py` - CLI entry point

---

## How It Works

### Branch Switch Flow

1. **Developer switches branch:**
   ```bash
   git checkout epic/6-framework-management
   ```

2. **Git post-checkout hook triggers:**
   - Detects branch is `epic/6-*`
   - Calls `sync-branch-version.py`

3. **Sync script executes:**
   - Parses branch name to get epic number: `6`
   - Reads `CHANGELOG.md`
   - Finds all versions matching `0.6.*.*+*`
   - Identifies highest version: `0.6.2.5+2`
   - Updates `src/fynd_deals/version.py`:
     ```python
     VERSION_EPIC = 6
     VERSION_STORY = 2
     VERSION_TASK = 5
     VERSION_BUILD = 2
     ```

4. **Version file updated:**
   - Shows highest version from Epic 6
   - Developer sees where Epic 6 left off

### Active Work Flow

1. **Developer works on Epic 6, Story 2, Task 5:**
   - Version file shows: `0.6.2.5+2` (highest from branch switch)

2. **Developer completes work and runs RW:**
   ```bash
   RW
   ```

3. **Release Workflow updates version:**
   - Bumps to: `0.6.2.5+3` (new work)
   - Version reflects **last commit** (current work context)

4. **Version file shows current work:**
   - `VERSION_BUILD = 3` (incremented by RW)
   - No automatic updates during work

---

## Version Detection Algorithm

### Finding Highest Version Per Epic

1. **Read CHANGELOG.md:**
   - Parse all version entries matching pattern `## [RC.EPIC.STORY.TASK+BUILD]`

2. **Group by Epic:**
   - Extract EPIC component from each version
   - Group versions by epic number

3. **Find Highest:**
   - Compare versions using canonical ordering
   - Order: RC → EPIC → STORY → TASK → BUILD
   - Select numerically highest version

4. **Update Version File:**
   - Set VERSION_EPIC to epic number
   - Set VERSION_STORY, VERSION_TASK, VERSION_BUILD from highest version

### Example

**CHANGELOG entries:**
```
## [0.6.2.5+2] - ...
## [0.6.2.4+1] - ...
## [0.6.1.1+8] - ...
## [0.3.3.6+2] - ...
```

**For Epic 6:**
- Versions: `0.6.2.5+2`, `0.6.2.4+1`, `0.6.1.1+8`
- Highest: `0.6.2.5+2` (canonical comparison)
- Version file updated to: `VERSION_EPIC=6, VERSION_STORY=2, VERSION_TASK=5, VERSION_BUILD=2`

---

## Integration Points

### Workflow Management Framework

**Location:** `packages/frameworks/workflow mgt/`

**Integration:**
- Release Workflow (RW) validates version matches branch context
- `validate_branch_context.py` ensures EPIC component matches branch
- RW updates version during work (normal behavior)
- Sync script updates version on branch switch (automated)

### Versioning Framework

**Location:** `packages/frameworks/numbering & versioning/`

**Integration:**
- Branch Context Policy documented in versioning policy
- Version file structure supports policy
- Version detection algorithm uses canonical ordering

---

## Usage Examples

### Example 1: Switching to Epic Branch

```bash
# Current branch: epic/9-book-related-work
# Version file shows: 0.9.1.1+6

# Switch to Epic 6 branch
git checkout epic/6-framework-management

# Post-checkout hook runs automatically
# Version file updated to: 0.6.2.5+2 (highest from Epic 6)
```

### Example 2: Manual Sync

```bash
# After merging main into epic branch
git merge main

# Sync version to highest from epic
vibe-dev-kit sync-version

# Or use script directly
python3 scripts/framework-management/sync-branch-version.py
```

### Example 3: Dry-Run Check

```bash
# Check what would be updated without making changes
vibe-dev-kit sync-version --dry-run

# Output:
# 🔍 Finding highest version for Epic 6...
# 📦 Highest version for Epic 6: 0.6.2.5+2
# 🔍 [DRY RUN] Would update version file to: 0.6.2.5+2
```

---

## Troubleshooting

### Hook Not Running

**Problem:** Post-checkout hook doesn't execute

**Solutions:**
1. Check hook is executable: `chmod +x .git/hooks/post-checkout`
2. Verify hook exists: `ls -la .git/hooks/post-checkout`
3. Test hook manually: `bash .git/hooks/post-checkout`

### Version Not Found

**Problem:** Script can't find versions for epic

**Possible Causes:**
- No versions in CHANGELOG.md for that epic
- CHANGELOG.md format doesn't match expected pattern
- Epic number parsing failed

**Solutions:**
1. Check CHANGELOG.md has entries for that epic
2. Verify version format: `## [RC.EPIC.STORY.TASK+BUILD]`
3. Use `--epic N` to specify epic manually

### Version File Update Fails

**Problem:** Script can't update version file

**Possible Causes:**
- Version file doesn't exist
- Version file format changed
- Permission issues

**Solutions:**
1. Verify version file exists: `src/fynd_deals/version.py`
2. Check version file format matches expected structure
3. Ensure write permissions on version file

---

## Best Practices

### When to Use Manual Sync

**Use `vibe-dev-kit sync-version` when:**
- Merging main into epic branch
- After resolving merge conflicts
- When version file seems incorrect
- After manual CHANGELOG edits

### When Hook Runs Automatically

**Hook runs automatically when:**
- Switching branches with `git checkout`
- Creating new branch with `git checkout -b`
- Not during active work (only on checkout)

### Version File State

**During Active Work:**
- Version reflects last commit (updated by RW)
- No automatic updates
- Shows current work context

**After Branch Switch:**
- Version reflects highest from epic
- Shows where epic left off
- Ready for new work

---

## References

- **Branch Context Policy:** `KB/Architecture/Standards_and_ADRs/branch-context-policy.md`
- **Version Sync Script:** `scripts/framework-management/sync-branch-version.py`
- **Git Hook:** `.git/hooks/post-checkout`
- **CLI Command:** `cli/commands/sync_version.py`
- **Epic 6:** `KB/PM_and_Portfolio/kanban/epics/Epic-6/Epic-6.md`

---

## Decision Record

**Decision:** Implement automated Branch Context Policy using Git hooks and CLI command.

**Rationale:**
- Reduces manual work when switching branches
- Ensures version file always reflects correct epic context
- Provides manual sync option for edge cases
- Integrates seamlessly with existing workflow

