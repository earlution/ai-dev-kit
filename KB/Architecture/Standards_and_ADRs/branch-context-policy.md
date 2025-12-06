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

The **Branch Context Policy** ensures that the version file (`src/fynd_deals/version.py`) reflects the correct epic context for the active branch. 

**Key Principle:** 
- **During active work:** Version file reflects the **last commit** on the current branch (current work context)
- **When switching branches:** Version file is updated to the **highest version** from that epic (shows where that epic left off)

**Purpose:** Maintain version file accuracy across parallel epic development, ensuring developers see the correct version context when switching branches, while allowing version to reflect actual work during active development.

---

## Policy Definition

### Core Rule

**The version file reflects the last commit on the current branch during active work. When switching branches, the version file is updated to show the highest version from that epic.**

### Policy Rules

1. **During active work on a branch:**
   - Version file reflects the **last commit** on that branch
   - Version is updated by Release Workflow (RW) as work progresses
   - Version shows current work context (e.g., working on Story 1, Task 1 → `0.X.1.1+1`)
   - **No automatic updates** - version changes only through RW commits

2. **When switching TO a branch:**
   - Version file must be updated to reflect the **highest version** from that epic
   - Shows where that epic left off (e.g., if Epic 2's highest is `0.2.4.9+3`, version shows that)
   - EPIC component must match the branch's epic number
   - STORY, TASK, BUILD reflect the highest version from that epic

3. **When switching FROM a branch:**
   - Version file should be updated to the **highest version** from that epic before leaving
   - Ensures branch is left in correct state for future work
   - Next developer switching to that branch sees correct state

### Safeguards

1. **RW Validation:**
   - Release Workflow validates version matches branch context
   - Prevents committing with wrong epic version
   - Clear error messages if mismatch detected

2. **Version File State:**
   - EPIC component must always match branch's epic number
   - During work: STORY, TASK, BUILD reflect current work (last commit)
   - On branch switch: STORY, TASK, BUILD reflect highest version from that epic

3. **No Automatic Updates During Work:**
   - Version file is NOT automatically updated during active work
   - Only updated by Release Workflow when committing work
   - Prevents version jumping ahead of actual work

---

## Rationale

### Problem

When working on multiple epic branches in parallel:
- Version file may show incorrect epic context after branch switches
- Developers may see version from wrong epic when switching branches
- Release Workflow (RW) may fail validation if version doesn't match branch
- Confusion about which epic's work is being versioned
- Need to see where an epic left off when switching to that branch

### Solution

**Branch Context Policy** ensures:
- Version file matches branch context (EPIC component matches branch)
- Automatic updates **only on branch switch** (not during active work)
- Version reflects last commit during work (actual work context)
- Version reflects highest version on branch switch (epic state)
- Reduced cognitive load (version shows correct context)

---

## Implementation

### Manual Process (Current)

1. Switch to epic branch
2. Check CHANGELOG.md for highest version from that epic
3. Manually update `src/fynd_deals/version.py`
4. Verify version matches branch context

### Automated Process (Target - E6:S02:T06)

1. **Git Hook (post-checkout):**
   - Automatically updates version file **only on branch switch**
   - Reads CHANGELOG.md to find highest version from that epic
   - Updates version file with correct epic context
   - **Does NOT update during active work** (only on checkout)

2. **CLI Command:**
   - `vibe-dev-kit sync-version` - Manual version sync to highest from epic
   - Useful for fixing version file state
   - Can be run to sync to highest version (e.g., after merging main)

3. **Workflow Integration:**
   - Integrated into Release Workflow validation
   - Validates version matches branch before RW execution
   - Validates EPIC component matches branch epic number
   - Provides clear error messages if mismatch detected
   - **RW updates version during work** (normal RW behavior)

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

**On Branch Switch (post-checkout hook):**
1. Detect current branch: `epic/{N}-{name}`
2. Extract epic number: `N`
3. Find highest version for epic `N` from CHANGELOG
4. Update version file:
   - `VERSION_EPIC = N`
   - `VERSION_STORY = {from highest version}`
   - `VERSION_TASK = {from highest version}`
   - `VERSION_BUILD = {from highest version}`
5. Update comments to reflect epic/story/task context

**During Active Work (Release Workflow):**
1. RW reads current version file
2. RW bumps version based on work being committed
3. Version file reflects last commit (current work)
4. No automatic updates to highest version during work

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

**Before (on Epic 6 branch, last commit was 0.6.1.1+2):**
```python
VERSION_EPIC = 6
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 2
```

**After (switched to Epic 2 branch, post-checkout hook runs):**
```python
VERSION_EPIC = 2
VERSION_STORY = 4
VERSION_TASK = 9
VERSION_BUILD = 3
```

**Reason:** Epic 2's highest version is `0.2.4.9+3` - shows where Epic 2 left off

---

### Example 2: Working on Epic 2 Branch

**Starting state (after branch switch):**
```python
VERSION_EPIC = 2
VERSION_STORY = 4
VERSION_TASK = 9
VERSION_BUILD = 3
```

**Working on Story 1, Task 1:**
- Developer completes Task 1 work
- Runs RW → version becomes `0.2.1.1+1` (current work)
- Version reflects actual work, not highest version

**Continuing work:**
- Next RW → version becomes `0.2.1.1+2` (same task, new build)
- Version continues to reflect last commit (current work)

**Safeguard:** EPIC component (2) always matches branch, but STORY/TASK/BUILD reflect actual work

---

### Example 3: New Epic Branch (No Releases Yet)

**Epic 5 branch (no releases, switching to branch):**
```python
VERSION_EPIC = 5
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 1
```

**Reason:** No releases yet, so use initial version `0.5.1.1+1` (starting point)

**After first RW commit:**
```python
VERSION_EPIC = 5
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 1  # or higher, depending on work
```

**Version reflects last commit** (actual work), not highest (which would be the same)

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

**Decision:** Adopt Branch Context Policy to ensure version file accuracy across parallel epic development, with version reflecting last commit during work and highest version on branch switch.

**Rationale:**
- Version reflects actual work during development (last commit)
- Version shows epic state on branch switch (highest version)
- Prevents RW validation failures (EPIC matches branch)
- Supports parallel epic development
- No processing overhead during active work (only updates on branch switch)
- Clear separation: work context vs. epic state

**Alternatives Considered:**
- **Always highest version:** Rejected - dangerous, shows wrong work context, adds overhead
- **Manual version updates:** Rejected - error-prone
- **No policy:** Rejected - causes confusion when switching branches
- **Single version file for all branches:** Rejected - doesn't work with parallel development
- **Current approach (last commit + highest on switch):** Accepted - best balance of accuracy and usability

**Status:** Policy defined, ready for implementation in E6:S02:T06.

---

## References

- **Epic 6:** `KB/PM_and_Portfolio/kanban/epics/Epic-6/Epic-6.md`
- **Story 1:** `KB/PM_and_Portfolio/kanban/epics/Epic-6/Story-001-framework-version-management.md`
- **Story 2:** `KB/PM_and_Portfolio/kanban/epics/Epic-6/Story-002-framework-update-and-migration.md`
- **Versioning Policy:** `KB/Architecture/Standards_and_ADRs/dev-kit-versioning-policy.md`

