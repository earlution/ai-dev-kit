---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-17T11:56:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 37: RW Task Argument Requirement

**Task ID:** E5:S01:T37
**Status:** IN PROGRESS
**Priority:** HIGH
**Estimated Effort:** Medium
**Created:** 2026-03-17
**Last updated:** 2026-03-17 (v0.7.1.10+1 – Task filed and implementation planning started)
**Version:** v0.7.1.10+1
**Code:** E5S01T37

**Repository Pattern:** FR-060 = E5:S01:T37 (abstract space: v0.7.1.37+0)

---

## Scope

Enhance Release Workflow (RW) to require an explicit task argument for all invocations, preventing context inference errors and ensuring accurate version schema compliance.

**Problem Statement:**
- RW currently attempts to infer task context from repository state
- This leads to version schema errors (e.g., releasing E7:S01:T10 as v0.7.1.13+1 instead of v0.7.1.10+1)
- No validation of task context before release execution
- Potential for release errors due to incorrect context inference

**Solution:**
- Modify RW entry point to require mandatory task argument: `RW <task_id>`
- Support both `E<Epic>:S<Story>:T<Task>` and `E<Epic>S<Story>T<Task>` formats
- Add task validation to ensure task exists and is in COMPLETE status
- Use specified task for correct version schema generation
- Provide clear error messages for missing/invalid arguments

---

## Input

- **FR-060:** [`FR-060-rw-task-argument-requirement.md`](../../../fr-br/FR-060-rw-task-argument-requirement.md)
- **Versioning Policy:** `packages/frameworks/workflow mgt/KB/Architecture/Standards_and_ADRs/versioning-policy.md`
- **RW Script:** `packages/frameworks/workflow mgt/scripts/rw.py`
- **RW Reference:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md`

---

## Deliverable

**Enhanced RW with Mandatory Task Arguments:**

1. **Argument Parsing:**
   - RW accepts task argument in formats: `RW E7:S01:T10` or `RW E7S01T10`
   - Validates argument presence and format
   - Parses task components (epic, story, task numbers)
   - If no argument provided, infers most likely task from recent context but MUST query user for verification before proceeding

2. **Task Validation:**
   - Verifies task document exists in repository
   - Confirms task status is COMPLETE
   - Validates task structure and metadata
   - If inferred task, queries user for verification before proceeding

3. **Version Schema Compliance:**
   - Uses confirmed task for RC.EPIC.STORY.TASK+BUILD version generation
   - Prevents incorrect version bumps
   - Maintains audit trail accuracy

4. **Error Handling:**
   - Clear error messages for missing task arguments
   - Helpful guidance for invalid task formats
   - Graceful failure without repository corruption

5. **Documentation Updates:**
   - Update RW documentation with new syntax requirement
   - Update workflow examples and tutorials
   - Update script help text and usage instructions

---

## Acceptance Criteria

- [ ] **Criterion 1:** RW accepts explicit task arguments (e.g., `RW E7:S01:T10`, `RW E7S01T10`)
- [ ] **Criterion 2:** If no argument provided, RW infers most likely task from recent context
- [ ] **Criterion 3:** RW queries user for verification of inferred task before proceeding
- [ ] **Criterion 4:** RW only proceeds with explicit user confirmation
- [ ] **Criterion 5:** Version schema correctly follows confirmed task (RC.EPIC.STORY.TASK+BUILD)
- [ ] **Criterion 6:** Clear error messages for invalid task arguments
- [ ] **Criterion 7:** Documentation updated with new requirement
- [ ] **Criterion 8:** Works across all workflow execution contexts
- [ ] **Criterion 8:** Backward compatibility maintained for existing functionality except argument requirement

---

## Approach

### Step 1: Analyze Current RW Implementation

- Review `rw.py` script entry point and argument parsing
- Identify where task context is currently inferred
- Review existing validation and error handling patterns

### Step 2: Design Task Argument System

- Design argument parsing for task ID formats
- Design task validation functions
- Design error message system
- Plan integration with existing RW workflow

### Step 3: Implement Task Validation

- Add task document existence checking
- Add task status validation (must be COMPLETE)
- Add task structure validation
- Add comprehensive error handling

### Step 4: Update Version Schema Logic

- Modify version bump logic to use specified task
- Ensure RC.EPIC.STORY.TASK+BUILD compliance
- Add validation for version schema correctness

### Step 5: Update Documentation

- Update RW reference documentation
- Update script help text and usage examples
- Update workflow tutorials and guides

### Step 6: Testing and Validation

- Test various task argument formats
- Test error conditions and messages
- Validate version schema correctness
- Test integration with existing RW workflow

---

## Related Work

**Related FRs:**
- **FR-060:** RW Task Argument Requirement (this task)
- **FR-023:** Update Kanban Workflow UKW (related workflow enhancement)

**Related Tasks:**
- **E5:S01:T36:** RW Update Kanban Board on Task Completion (completed - enhanced RW Step 7)
- **E7:S01:T10:** Enhanced Workflow Logging System (completed - UKW implementation)

**Related Stories:**
- **E5:S01:** FR Repo (this task is part of the FR repository)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.7.1.37+1)`)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update `Last updated` field
- Update `Completed` field
- Update `Status` to `COMPLETE`
- Update `Version` to final version
- Update `Epic-5` with completion status and version

---

## Notes

**Key Considerations:**
- Task argument must be mandatory for all RW invocations
- Support both colon-separated and concatenated formats for usability
- Validation should be fast and non-disruptive
- Error messages should be clear and actionable
- Maintain audit trail integrity for all releases

**Expected Outcomes:**
- Eliminates task context inference errors
- Ensures version schema accuracy (RC.EPIC.STORY.TASK+BUILD)
- Improves workflow reliability and predictability
- Provides clear audit trails for all releases
- Reduces need for manual version corrections

---

_This Task is part of Epic 5: Documentation Management and Maintenance, Story 1: FR Repo (PERPETUAL). See [`Story-001-fr-repo.md`](Story-001-fr-repo.md) for story-level context._
