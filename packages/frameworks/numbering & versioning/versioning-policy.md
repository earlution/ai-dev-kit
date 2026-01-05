---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# Versioning Policy

**Status:** Active  
**Owner:** Engineering  
**Last Updated:** 2025-12-01  
**Related Work:** Epic 9, Story 21

---

## Purpose

Defines semantic versioning schema using the `RC.EPIC.STORY.TASK+BUILD` format for fynd.deals.

**Key Capabilities:**
- Enables parallel epic/workstream development
- Maintains clear version tracking at task level
- Provides build-level granularity
- Supports forensic traceability

---

## Schema

**Format:** `RC.EPIC.STORY.TASK+BUILD`

**Structure:**
- **RC:** Release Candidate (0 = development, 1+ = release candidate)
- **EPIC:** Epic number (e.g., 9)
- **STORY:** Story number within epic (e.g., 21)
- **TASK:** Task number within story (e.g., 3)
- **BUILD:** Build number (increments per release within task)

**Examples:**
- `0.9.21.3+1` - Development, Epic 9, Story 21, Task 3, Build 1
- `0.9.21.3+2` - Development, Epic 9, Story 21, Task 3, Build 2
- `0.9.21.4+1` - Development, Epic 9, Story 21, Task 4, Build 1
- `1.9.21.3+1` - Release Candidate 1, Epic 9, Story 21, Task 3, Build 1

---

## Rules

### RC (Release Candidate)
- **0:** Development phase (default)
- **1+:** Release candidate phase
- Increment when entering release candidate phase

### EPIC
- Epic number from Kanban board
- Set when starting new epic
- Constant for all work within that epic

### STORY
- Story number within epic
- Set when starting new story
- Constant for all work within that story

### TASK
- Task number within story
- Set when starting new task
- Constant for all releases within that task
- Format: `E{epic}:S{story}:T{task}` (e.g., `E9:S21:T03`) - Task numbers are 2-digit (01-99)
- **CRITICAL:** Task MUST have a discrete Task document before versioning
- **CRITICAL:** Task document Task ID MUST align with version TASK component

### BUILD
- Build number (increments per release within task)
- **Doc-Init Build (`+0`):** For first-time Task/Story/Epic document creation (docs-only)
  - Establishes canonical version anchor before functional work
  - Must be docs-only changes (no code changes)
  - Subsequent functional work starts at `+1`
  - Example: `0.2.10.1+0` = Doc-init build for E2:S10:T01 documentation
- **Normal Builds (`+1` or higher):** For functional work and subsequent releases
  - Starts at 1 for first functional release of task (or after doc-init)
  - Increments with each subsequent release (`+2`, `+3`, etc.)
  - Resets to 1 when moving to new task
  - Example: `0.2.10.1+1` = First functional build for E2:S10:T01 (after `+0`)
- **Relationship:** Doc-init (`+0`) → Functional work (`+1`, `+2`, ...)
  - `+0` establishes the version anchor (documentation-only)
  - `+1` is the first functional change for that task
  - `+2`, `+3`, etc. are subsequent functional changes

---

## Task Document Requirements (Kanban Integration)

**CRITICAL:** Before any versioning can occur for a Task, the Task MUST have a corresponding Task document.

### Task Document Prerequisites

1. **Task Document Presence:**
   - Every Task referenced in a Story checklist MUST have a corresponding Task document
   - Task document can be:
     - **Separate File:** `kanban/epics/Epic-X/Story-XXX/Task-YYY-description.md`
     - **Delimited Section:** Within Story document using Task ID header (`### EXX:SYY:TZZ – Task Name`)

2. **Task Document → Version Alignment:**
   - Task document Task ID MUST align with version TASK component
   - Example:
     - Task document: `E4:S11:T01`
     - Version: `0.4.11.1+B` (TASK = 1)
     - Alignment: Task ID `T01` matches version TASK component `1`

3. **Required Task Document Fields:**
   - Task ID (`E{epic}:S{story}:T{task}`)
   - Scope
   - Acceptance Criteria
   - Status
   - Version Anchor (forensic marker when complete)
   - Input
   - Deliverable
   - Dependencies
   - Blocker
   - Related BR/FR Links

4. **Task Transition Rules:**
   - **MUST:** Create Task document before updating version file
   - **MUST:** Task document must exist before versioning
   - **MUST:** Task document Task ID must match version TASK component
   - **MUST:** Task document must include all required fields
   - **Doc-Init Path (`+0`):** For first-time Task document creation
     - Create Task document (docs-only, no code changes)
     - Set version to `RC.EPIC.STORY.TASK+0` (doc-init build)
     - Establishes canonical version anchor
     - Subsequent functional work uses `+1`, `+2`, etc.
   - **Normal Path (`+1` or higher):** For functional work
     - Task document must already exist (created in doc-init or previously)
     - Set version to `RC.EPIC.STORY.TASK+1` (first functional build) or increment BUILD
     - Can include code changes, feature implementations, bug fixes, etc.

5. **Validation Requirements:**
   - Release Workflow Step 1 validates Task document presence
   - Release Workflow Step 1 validates Task document → Version TASK component alignment
   - Validators check Task document presence and alignment before versioning
   - If Task document missing or misaligned, versioning workflow stops with error

6. **Doc-Init Support:**
   - **Purpose:** Establish canonical version anchor for new E/S/T documentation before functional work
   - **Build Number:** `+0` (doc-init build)
   - **Requirements:** Docs-only changes (no code changes allowed)
   - **Relationship to Functional Work:** Doc-init (`+0`) → First functional build (`+1`) → Subsequent builds (`+2`, `+3`, ...)
   - **Detection:** Release Workflow Step 2 automatically detects doc-init state (new E/S/T doc, no prior version, docs-only changes)
   - **Validation:** Validators enforce docs-only requirement for `+0` builds
   - **Related:** FR-017 (Versioning Policy Hardening — Doc-Init Build), FR-018 (Abstract Space concept)

**Related Documentation:**
- **[Kanban Governance Policy](../../kanban/policies/kanban-governance-policy.md)** - Complete Task document requirements
- **[Task Template](../../kanban/templates/TASK_TEMPLATE.md)** - Task document template

---

## Abstract Space Version Schema

**CRITICAL:** Zero-numbered E/S/T documentation uses `+0` build number to establish the **abstract space** for forensic traceability, serving as the canonical version anchor before any functional work is committed.

**Purpose:**
- Establish canonical version anchor for E/S/T documentation
- Begin forensic traceability arc at documentation creation
- Provide clear versioning schema for abstract spaces
- Link versioning schema to Kanban documentation lifecycle

### Epic-Level Abstract Spaces

**Format:** `0.{EPIC}.0.0+0`

**Examples:**
- `0.3.0.0+0` = Epic 3's abstract space
- `0.10.0.0+0` = Epic 10's abstract space
- `0.21.0.0+0` = Epic 21's abstract space

**Purpose:**
- Establishes forensic traceability anchor for Epic
- Created when Epic document is first committed
- Precedes all functional work for that Epic

**Usage:**
- Epic document creation → Commit with `0.{EPIC}.0.0+0`
- Subsequent functional work starts at `0.{EPIC}.1.1+1` (first Story, first Task, first build)

### Story-Level Abstract Spaces

**Format:** `0.{EPIC}.{STORY}.0+0`

**Examples:**
- `0.2.5.0+0` = Epic 2 Story 5's abstract space
- `0.4.11.0+0` = Epic 4 Story 11's abstract space
- `0.10.3.0+0` = Epic 10 Story 3's abstract space

**Purpose:**
- Establishes forensic traceability anchor for Story within Epic
- Created when Story document is first committed
- Precedes all functional work for that Story

**Usage:**
- Story document creation → Commit with `0.{EPIC}.{STORY}.0+0`
- Subsequent functional work starts at `0.{EPIC}.{STORY}.1+1` (first Task, first build)

### Task-Level Abstract Spaces

**Format:** `0.{EPIC}.{STORY}.{TASK}+0`

**Examples:**
- `0.10.4.6+0` = Epic 10 Story 4 Task 6's abstract space
- `0.4.11.1+0` = Epic 4 Story 11 Task 1's abstract space
- `0.2.9.3+0` = Epic 2 Story 9 Task 3's abstract space

**Purpose:**
- Establishes forensic traceability anchor for Task within Story within Epic
- Created when Task document is first committed
- Precedes all functional work for that Task

**Usage:**
- Task document creation → Commit with `0.{EPIC}.{STORY}.{TASK}+0`
- Subsequent functional work starts at `0.{EPIC}.{STORY}.{TASK}+1` (first build)

### Relationship Between Abstract Space and Functional Work

**Abstract Space (`+0`):**
- Documentation-only anchor
- Establishes forensic traceability
- No functional changes
- Created via doc-init path (see FR-017)

**Functional Work (`+1` and beyond):**
- Actual implementation
- Builds on abstract space anchor
- Increments BUILD for each release
- Example progression:
  - `0.4.11.1+0` = Task document created (abstract space)
  - `0.4.11.1+1` = First functional change for Task 1
  - `0.4.11.1+2` = Second functional change for Task 1

**Validation:**
- `+0` is only valid for docs-only changes (E/S/T document creation)
- `+1` and beyond require functional changes
- Abstract space must precede functional work
- Release Workflow validates abstract space usage

**Related:**
- **Kanban Governance Policy:** Abstract Spaces for Forensic Traceability (complementary section)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (implementation)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (this feature)

#### S00 Abstract Space for Repository Stories

**Format:** `0.{EPIC}.0.0+0` (repository story abstract space)

**Examples:**
- `0.5.0.0+0` = Epic 5, Story 0 (FR Repo) abstract space
- `0.6.0.0+0` = Epic 6, Story 0 (BR Repo) abstract space
- `0.7.0.0+0` = Epic 7, Story 0 (UXR Repo) abstract space

**Purpose:**
- Establishes forensic traceability anchor for repository stories (S00)
- Repository stories are PERPETUAL (never complete)
- S00 serves as canonical home for FRs/BRs/UXRs
- Perfect 1:1 traceability: FR-001 = E5:S00:T01, BR-001 = E6:S00:T01, UXR-001 = E7:S00:T01

**Repository Task Versioning:**
- Repository story: `0.5.0.0+0` (abstract space)
- First FR: `0.5.0.1+0` (E5:S00:T01 - abstract space for repository task)
- Second FR: `0.5.0.2+0` (E5:S00:T02 - abstract space for repository task)
- Third FR: `0.5.0.3+0` (E5:S00:T03 - abstract space for repository task)

**Pattern:**
- FR-001 = E5:S00:T01 = v0.5.0.1+0 (abstract space)
- BR-001 = E6:S00:T01 = v0.6.0.1+0 (abstract space)
- UXR-001 = E7:S00:T01 = v0.7.0.1+0 (abstract space)

**Usage:**
- Repository story creation → Commit with `0.{EPIC}.0.0+0`
- Repository task creation → Commit with `0.{EPIC}.0.{TASK}+0` (abstract space)
- Repository tasks use `+0` build (abstract space) as they are documentation anchors
- Implementation tasks use `+1` and beyond (functional work)

**Related:**
- **FR-021:** FR/BR/UXR Repository Stories (S00 Pattern) - Feature request
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs - Abstract space concept
- **E4:S12:** FR/BR/UXR Repository Stories (S00 Pattern) - Implementation story

---

## Progression

**Working on Epic 9, Story 21, Task 3:**
- `0.9.21.3+1` - First release
- `0.9.21.3+2` - Second release
- `0.9.21.3+3` - Third release

**Moving to Task 4:**
- `0.9.21.4+1` - First release
- `0.9.21.4+2` - Second release

---

## Parallel Development

**Branch Strategy:**

Each epic works in parallel on its own version stream:

**Legacy Epics (1-9):**
- Epic 1: `0.1.S.P` (old format, complete)
- Epic 4: `0.4.S.P` (old format, complete)
- Epic 9: `0.9.S.P` (old format, in progress - will complete with old format)

**New Epics (10+):**
- Epic 10: `0.10.S.T+B` (new format)
- Epic 11: `0.11.S.T+B` (new format)
- Epic 12+: `0.{epic}.S.T+B` (new format)

Where:
- S = Story number
- T = Task number (Epic 10+)
- P = Patch number (Epic 1-9, legacy)
- B = Build number (Epic 10+)

**Merging Strategy:**

When merging epics:
1. Maintain epic numbers in merged code
2. Document epic mapping in CHANGELOG
3. Each epic maintains its own version stream
4. Version ordering is canonical (by version number, not timestamp)

---

## Version File

**Location:** `src/fynd_deals/version.py`

**Format:**
```python
VERSION_STRING = "0.9.21.3+1"
```

**Note:** The `+` character is part of the version string and must be preserved.

**Components:**
```python
VERSION_RC = 0         # Release candidate
VERSION_EPIC = 9      # Epic number
VERSION_STORY = 21    # Story number
VERSION_TASK = 3      # Task number
VERSION_BUILD = 1     # Build number
```

---

## CHANGELOG Format

### Main Changelog (`CHANGELOG.md`)

Each version entry:

```markdown
### [0.9.21.3+1] - 01-12-25
🚀 Feature: Brief description
- Detailed change description
- Additional changes
- See [CHANGELOG_v0.9.21.3+1.md](CHANGELOG_ARCHIVE/CHANGELOG_v0.9.21.3+1.md)
```

**Format:**
- Version: `[RC.EPIC.STORY.TASK+BUILD]`
- Date: `DD-MM-YY` (short date for merge-to-main)
- Link to detailed changelog

### Detailed Changelog (`CHANGELOG_ARCHIVE/CHANGELOG_v{version}.md`)

```markdown
# Changelog v0.9.21.3+1

**Release Date:** 2025-12-01 16:51:30 UTC
**Epic:** Epic 9 - Debug Test Failures & System Issues
**Story:** Story 21 - Versioning and Release Automation
**Task:** Task 3 - Task-level versioning validation
**Type:** 🚀 Feature

## Summary
🚀 Feature: Brief description of changes

## Changes
- Detailed change 1
- Detailed change 2

## Related Tasks
- E9:S21:T03 – Task description

## Technical Details
[Implementation notes, files changed, etc.]
```

**Format:**
- Full timestamp: `YYYY-MM-DD HH:MM:SS UTC` (immutable)
- Epic/Story/Task information
- Detailed change descriptions

---

## Migration from Old Schema

### Old Schema: `RC.EPIC.STORY.PATCH`

**Example:** `0.9.21.19`

### New Schema: `RC.EPIC.STORY.TASK+BUILD`

**Migration Mapping:**
- Old PATCH → New TASK (same number)
- BUILD starts at 1

**Example:** `0.9.21.19` → `0.9.21.19+1`

### Epic Renumbering Strategy

**Problem:** Epic 9 has both old format (100 versions) and new format (1 version), creating confusion.

**Solution:** Complete Epic 9 with old format, then start Epic 10+ with new format exclusively.

**Epic Ranges:**
- **Epic 1-9:** Legacy format (`RC.EPIC.STORY.PATCH`) - Grandfathered, immutable
- **Epic 10+:** New format (`RC.EPIC.STORY.TASK+BUILD`) - Fresh start, clean version space

**Migration Timeline:**
1. Complete Epic 9 work using old format (`0.9.x.x`)
2. Mark Epic 9 as complete
3. Start Epic 10 with new format (`0.10.1.1+1`)
4. All Epic 10+ work uses new format exclusively

**Benefits:**
- Clean separation between legacy and new formats
- No version collisions
- Fresh start for Epic 10+
- Clear branch strategy (`epic/10-*`, `epic/11-*`, etc.)

See [Version Renumbering Strategy](VERSION-RENUMBERING-STRATEGY.md) for complete details.

### Grandfathering

**Existing versions (Epic 1-9):**
- Format: `RC.EPIC.STORY.PATCH`
- Status: Grandfathered, preserved as-is
- Validation: Pass (warnings only)
- Scope: All versions before Epic 10

**New versions (Epic 10+):**
- Format: `RC.EPIC.STORY.TASK+BUILD`
- Status: Full validation required
- Validation: Strict enforcement
- Scope: All versions from Epic 10 onwards

---

## Related Documentation

**Core Policy Documents:**
- **[Versioning Strategy](versioning-strategy.md)** - Complete versioning strategy with forensic traceability
- **[Kanban Governance Policy](../../../knowledge/fynd_deals/Kanban/Kanban Board.md)** - Work item structure

**Implementation:**
- **Version File:** `src/fynd_deals/version.py`
- **Main Changelog:** `CHANGELOG.md`
- **Changelog Archive:** `CHANGELOG_ARCHIVE/`
- **Branch Context Validator:** `scripts/validation/validate_branch_context.py`
- **Changelog Format Validator:** `scripts/validation/validate_changelog_format.py`

---

## Revision History

| Date | Version | Changes |
| --- | --- | --- |
| 2025-12-01 | 1.0 | Initial versioning policy with RC.EPIC.STORY.TASK+BUILD schema |

---

_Last updated: 2025-12-01_

