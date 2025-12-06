---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T14:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Branch Context Policy

**Status:** Proposed  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 1 - Framework Version Management  
**Task:** E6:S01:T06 - Define Branch Context Policy

**Related Terms:** Version-Branch Alignment Policy, Branch Version Context Policy

---

## Executive Summary

The **Branch Context Policy** ensures that the version file (`src/fynd_deals/version.py`) always reflects the correct epic context for the active branch. When switching between epic branches, the version file must be updated to show the numerically highest version from that epic's version stream.

**Purpose:** Maintain version file accuracy across parallel epic development, ensuring developers always see the correct version context for their current branch.

---

## Policy Definition

### Core Rule

**The version file must always reflect the numerically highest version from the epic associated with the current branch.**

### Policy Rules

1. **When switching TO a branch:**
   - Version file must be updated to reflect the highest version from that epic
   - Version components (EPIC, STORY, TASK, BUILD) must match the highest version

2. **When switching FROM a branch:**
   - Version file should be updated to the highest version from that epic before leaving
   - Ensures branch is left in correct state for future work

3. **Version file state:**
   - Must always match the branch's epic context
   - EPIC component must match the branch's epic number
   - STORY, TASK, BUILD must reflect the highest version from that epic

---

## Rationale

### Problem

When working on multiple epic branches in parallel:
- Version file may show incorrect epic context after branch switches
- Developers may see version from wrong epic
- Release Workflow (RW) may fail validation if version doesn't match branch
- Confusion about which epic's work is being versioned

### Solution

**Branch Context Policy** ensures:
- Version file always matches branch context
- Automatic updates on branch switch
- Consistent version state across all branches
- Reduced cognitive load (version always correct)

---

## Implementation

### Manual Process (Current)

1. Switch to epic branch
2. Check CHANGELOG.md for highest version from that epic
3. Manually update `src/fynd_deals/version.py`
4. Verify version matches branch context

### Automated Process (Target - E6:S02:T06)

1. **Git Hook (post-checkout):**
   - Automatically updates version file on branch switch
   - Reads CHANGELOG.md to find highest version
   - Updates version file with correct epic context

2. **CLI Command:**
   - `vibe-dev-kit sync-version` - Manual version sync
   - Useful for fixing version file state
   - Can be run anytime to ensure correctness

3. **Workflow Integration:**
   - Integrated into Release Workflow validation
   - Validates version matches branch before RW execution
   - Provides clear error messages if mismatch detected

---

## Version Detection Algorithm

### Finding Highest Version Per Epic

1. Read `CHANGELOG.md`
2. Extract all version entries matching pattern `## [0.EPIC.STORY.TASK+BUILD]`
3. Group by EPIC number
4. For each epic, find numerically highest version
5. Compare versions using canonical ordering (RC.EPIC.STORY.TASK+BUILD)

### Example

**CHANGELOG entries:**
```
## [0.2.4.9+3] - ...
## [0.2.4.8+1] - ...
## [0.3.3.6+2] - ...
## [0.3.1.1+1] - ...
```

**Highest versions:**
- Epic 2: `0.2.4.9+3` (highest of 0.2.4.9+3, 0.2.4.8+1)
- Epic 3: `0.3.3.6+2` (highest of 0.3.3.6+2, 0.3.1.1+1)

---

## Version File Update

### Current Version File Structure

```python
VERSION_RC = 0
VERSION_EPIC = 6      # Must match branch epic
VERSION_STORY = 1     # From highest version
VERSION_TASK = 1      # From highest version
VERSION_BUILD = 2     # From highest version
```

### Update Process

1. Detect current branch: `epic/{N}-{name}`
2. Extract epic number: `N`
3. Find highest version for epic `N` from CHANGELOG
4. Update version file:
   - `VERSION_EPIC = N`
   - `VERSION_STORY = {from highest version}`
   - `VERSION_TASK = {from highest version}`
   - `VERSION_BUILD = {from highest version}`
5. Update comments to reflect epic/story/task context

---

## Integration Points

### Versioning Framework

**Location:** `packages/frameworks/numbering & versioning/`

**Integration:**
- Add Branch Context Policy to versioning policy document
- Document as part of version file management
- Include in versioning strategy guide

### Workflow Management Framework

**Location:** `packages/frameworks/workflow mgt/`

**Integration:**
- Add branch context validation to Release Workflow
- Integrate version sync into workflow automation
- Add CLI command for manual sync

### Git Hooks

**Location:** `.git/hooks/post-checkout`

**Implementation:**
- Hook triggers on branch checkout
- Calls version sync script
- Updates version file automatically

---

## Examples

### Example 1: Switching to Epic 2 Branch

**Before (on Epic 6 branch):**
```python
VERSION_EPIC = 6
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 2
```

**After (switched to Epic 2 branch):**
```python
VERSION_EPIC = 2
VERSION_STORY = 4
VERSION_TASK = 9
VERSION_BUILD = 3
```

**Reason:** Epic 2's highest version is `0.2.4.9+3`

---

### Example 2: New Epic Branch (No Releases Yet)

**Epic 5 branch (no releases):**
```python
VERSION_EPIC = 5
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 1
```

**Reason:** No releases yet, so use initial version `0.5.1.1+1`

---

## Validation

### Branch Context Validator

**Existing:** `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`

**Enhancement:**
- Check version file matches branch epic
- Verify version is highest from that epic
- Provide clear error messages if mismatch

### Manual Validation

```bash
# Check version matches branch
python scripts/validation/validate_branch_context.py

# Sync version manually
vibe-dev-kit sync-version
```

---

## Edge Cases

### Epic with No Releases

**Rule:** Use initial version `0.{EPIC}.1.1+1`

**Example:** Epic 7 with no releases → `0.7.1.1+1`

---

### Multiple Branches for Same Epic

**Rule:** All branches for same epic should show same highest version

**Example:**
- `epic/2-workflow-management-framework` → `0.2.4.9+3`
- `epic/2` → `0.2.4.9+3`

---

### Legacy Versions (Confidentia Project)

**Rule:** Ignore versions from other projects (e.g., `0.9.21.3+2` from Confidentia)

**Implementation:** Filter by epic number range or project context

---

## Related Policies

- **Versioning Policy:** `KB/Architecture/Standards_and_ADRs/dev-kit-versioning-policy.md`
- **Versioning Strategy:** `packages/frameworks/numbering & versioning/versioning-strategy.md`
- **Branch Context Validation:** `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`

---

## Implementation Tasks

- **E6:S01:T06** - Define Branch Context Policy (this document)
- **E6:S02:T06** - Implement Branch Context Policy automation
  - Create version sync script
  - Implement Git hook
  - Add CLI command
  - Integrate into frameworks

---

## Decision Record

**Decision:** Adopt Branch Context Policy to ensure version file accuracy across parallel epic development.

**Rationale:**
- Reduces cognitive load (version always correct)
- Prevents RW validation failures
- Ensures consistent version state
- Supports parallel epic development

**Alternatives Considered:**
- Manual version updates (error-prone)
- No policy (current state, causes confusion)
- Single version file for all branches (doesn't work with parallel development)

**Status:** Policy defined, ready for implementation in E6:S02:T06.

---

## References

- **Epic 6:** `KB/PM_and_Portfolio/kanban/epics/Epic-6/Epic-6.md`
- **Story 1:** `KB/PM_and_Portfolio/kanban/epics/Epic-6/Story-001-framework-version-management.md`
- **Story 2:** `KB/PM_and_Portfolio/kanban/epics/Epic-6/Story-002-framework-update-and-migration.md`
- **Versioning Policy:** `KB/Architecture/Standards_and_ADRs/dev-kit-versioning-policy.md`

