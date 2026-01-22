---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-22T14:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 36: RW Update Kanban Board on Task Completion

**Task ID:** E5:S01:T36  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-01-22  
**Last updated:** 2026-01-22 (v0.5.1.36+0 – Task created)  
**Version:** v0.5.1.36+0  
**Code:** E5S01T36

**Repository Pattern:** FR-036 = E5:S01:T36 (abstract space: v0.5.1.36+0)

---

## Scope

Enhance RW Step 7 (Auto-update Kanban Docs) to automatically update the main Kanban board (`kanban-board.md`) when tasks are completed, ensuring the board reflects current task/story/epic completion status immediately after each release.

**Problem Statement:**
- RW Step 7 currently updates Story and Epic documents but does NOT update the Kanban board
- The `update_kanban_docs.py` script resolves the Kanban board path but does not update it
- Kanban board remains out of sync until UKW is run manually
- Task completion status not reflected on board immediately after release

**Solution:**
- Extend `update_kanban_docs.py` script to update Kanban board
- Add board parsing and update functions
- Update epic/story status in board sections
- Update "Last updated" date and version in board metadata
- Update task completion markers in epic/story listings
- Detect story/epic completion and update status on board
- Add validation for board updates

---

## Input

- **FR-036:** [`FR-036-rw-update-kanban-board-on-task-completion.md`](../../../fr-br/FR-036-rw-update-kanban-board-on-task-completion.md)
- **FR-015:** [`FR-015-harden-kanban-docs-update-in-release-workflow.md`](../../../fr-br/FR-015-harden-kanban-docs-update-in-release-workflow.md) (related - board updates are part of FR-015:R06)
- **RW Step 7 Script:** `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- **RW Step 7 Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Kanban Board:** `docs/project-management/kanban/kanban-board.md`
- **E2:S08:** `docs/project-management/kanban/epics/Epic-2/Story-008-harden-release-workflow-reliability.md` (FR-015 implementation)

---

## Deliverable

**Enhanced RW Step 7** that updates the Kanban board:

1. **Board Update Functions:**
   - Parse Kanban board structure (epic sections, story listings, metadata)
   - Update epic/story status in board sections
   - Update "Last updated" date and version in board metadata
   - Update task completion markers in epic/story listings

2. **Completion Detection:**
   - Detect story completion (all tasks complete)
   - Detect epic completion (all stories complete)
   - Update story/epic status on board accordingly

3. **Validation:**
   - Validate board updates were successful
   - Verify status changes are correct
   - Verify version markers are updated

4. **Documentation:**
   - Update RW Step 7 documentation to include board updates
   - Update script documentation
   - Add examples and use cases

---

## Acceptance Criteria

- [ ] **Criterion 1:** RW Step 7 updates Kanban board when task is completed
- [ ] **Criterion 2:** Epic/story status updated in board sections
- [ ] **Criterion 3:** "Last updated" date and version updated in board metadata
- [ ] **Criterion 4:** Task completion markers updated in epic/story listings
- [ ] **Criterion 5:** Story completion detected and status updated on board
- [ ] **Criterion 6:** Epic completion detected and status updated on board
- [ ] **Criterion 7:** Validation confirms board updates were successful
- [ ] **Criterion 8:** Works reliably across all projects using the framework
- [ ] **Criterion 9:** Performance acceptable (< 2 seconds for typical projects)
- [ ] **Criterion 10:** Documentation updated with board update functionality

---

## Approach

### Step 1: Analyze Current Implementation

- Review `update_kanban_docs.py` script
- Identify where Kanban board path is resolved but not updated
- Review Kanban board structure and update patterns
- Review UKW board update logic for reference

### Step 2: Design Board Update Functions

- Design board parsing functions (epic sections, story listings, metadata)
- Design status update functions (epic/story status, completion markers)
- Design version marker update functions
- Design completion detection logic

### Step 3: Implement Board Updates

- Add board parsing functions to script
- Add status update functions
- Add version marker update functions
- Add completion detection logic
- Integrate with existing RW Step 7 execution

### Step 4: Add Validation

- Add validation for board updates
- Verify status changes are correct
- Verify version markers are updated
- Add error handling and recovery guidance

### Step 5: Update Documentation

- Update RW Step 7 documentation
- Update script documentation
- Add examples and use cases
- Update FR-015 to reflect completion

---

## Related Work

**Related FRs:**
- **FR-015:** Harden Kanban Docs Update in Release Workflow (partially implemented - board updates missing)
- **FR-036:** RW Update Kanban Board on Task Completion (this task)

**Related Tasks:**
- **E2:S08:** Harden Release Workflow Reliability (FR-015 implementation)
- **E6:S01:T33:** UKW Board Disorganization (related - board organization)
- **E6:S01:T34:** UKW MoSCOW Prioritization Missing (related - board updates)

**Related Stories:**
- **E5:S01:** FR Repo (this task is part of the FR repository)
- **E2:S08:** Harden Release Workflow Reliability

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.5.1.36+1)`)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update `Last updated` field
- Update `Completed` field
- Update `Status` to `COMPLETE`
- Update `Version` to final version
- Update `Epic-5` with completion status and version
- Update `kanban-board.md` with completion status and version (via RW Step 7!)

---

## Notes

**Key Considerations:**
- Board updates should be deterministic for known patterns
- Must handle edge cases (missing sections, malformed board, etc.)
- Should not update MoSCOW sections (defer to UKW)
- Performance is important (board updates should be fast)
- Must validate updates were successful

**Expected Outcomes:**
- Kanban board automatically updated on every RW execution
- Board always reflects current task/story/epic completion status
- Reduced need for manual UKW runs after RW
- Improved workflow reliability and user experience
- FR-015:R06 requirement fulfilled

---

_This Task is part of Epic 5: Documentation Management and Maintenance, Story 1: FR Repo (PERPETUAL). See [`Story-001-fr-repo.md`](Story-001-fr-repo.md) for story-level context._
