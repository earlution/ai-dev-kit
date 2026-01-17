---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-17T15:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: RW Housekeeping Step Not Working

**Type:** Bug Report (BR)  
**Submitted:** 2026-01-17  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** PENDING  
**GitHub Issue:** [TBD]  
**Version:** v0.9.1.8+8

---

## Summary

The final housekeeping step (Step 13/17) of the Release Workflow (RW) is not working correctly. The TODO list still shows all `rw-step-*` todos as completed instead of being cleared/removed from the IDE todo list.

---

## Description

### Problem Statement

**Issue: Housekeeping Step Doesn't Clear TODO List**

After completing RW, Step 13 (Housekeeping) should clear all `rw-step-*` todos from the IDE todo list. However, the todos remain visible in the list, still showing as "12 of 12 complete" instead of being removed.

**Expected Behavior:**
- Step 13 (Housekeeping) should clear/remove all `rw-step-*` todos from the IDE todo list
- After RW completes, the IDE todo list should be clean with no `rw-step-*` todos remaining
- The workflow should end with a clean state, ready for the next workflow

**Observed Behavior:**
- Step 13 executes but doesn't actually clear the todos
- All `rw-step-*` todos remain in the IDE todo list
- Todos are marked as `completed` but not removed
- The list still shows "12 of 12 complete" after RW finishes

---

## Affected Component

**Primary Component:** Release Workflow (RW) Step 13: Housekeeping
**Affected Areas:**
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 17: Housekeeping)
- `.cursorrules` (Step 13: Housekeeping reference)
- Agent execution of RW Step 13

---

## Reproduction Steps

1. Run the Release Workflow (RW) for any version
2. Complete all 12 steps (Steps 1-12)
3. Observe Step 13 (Housekeeping) execution
4. Check the IDE todo list after RW completes
5. Observe that all `rw-step-*` todos are still present (marked as completed but not removed)

---

## Impact

- **IDE Clutter:** TODO list accumulates `rw-step-*` todos from multiple RW runs
- **Reduced Visibility:** Important todos may be hidden among completed RW todos
- **Workflow Incomplete:** RW doesn't fully clean up after itself
- **User Confusion:** Users expect a clean state after workflow completion

---

## Root Cause Analysis

**Likely Cause:**
The current implementation in Step 13 marks todos as `completed` but doesn't actually remove them from the IDE todo list. The `todo_write` tool with `merge: true` and `status: 'completed'` updates the status but doesn't delete the todos.

**Documentation Reference:**
From `release-workflow-agent-execution.md` Step 17:
```python
# Clear all RW todos
todo_write(
    merge=True,
    todos=[
        {'id': 'rw-step-1', 'status': 'completed'},
        {'id': 'rw-step-2', 'status': 'completed'},
        # ... all RW steps
    ]
)
```

This pattern marks todos as completed but doesn't remove them.

---

## Proposed Solution

**Option 1: Remove Todos Explicitly (Recommended)**
- Use `todo_write` with `merge: false` and an empty todos list, or
- Use a pattern that explicitly removes todos (if the tool supports it)
- Clear all `rw-step-*` todos by setting them to a removable state

**Option 2: Mark as Cancelled Then Remove**
- Mark all `rw-step-*` todos as `cancelled`
- Then remove them from the list (if supported by the tool)

**Option 3: Use Tool-Specific Removal Method**
- Investigate if `todo_write` supports a removal/deletion pattern
- Use the appropriate method to actually remove todos from the list

**Implementation Notes:**
- The solution should work with Cursor's `todo_write` tool
- Should handle cases where todos don't exist (idempotent)
- Should not affect other todos in the list (only `rw-step-*`)

---

## Acceptance Criteria

- [ ] Step 13 (Housekeeping) successfully removes all `rw-step-*` todos from the IDE todo list
- [ ] After RW completes, no `rw-step-*` todos remain in the list
- [ ] The IDE todo list is clean and ready for the next workflow
- [ ] Other todos (non-RW) are not affected by the cleanup
- [ ] The solution is idempotent (safe to run multiple times)

---

## Dependencies

**Related Work:**
- RW Step 13: Housekeeping implementation
- Cursor `todo_write` tool capabilities
- Workflow cleanup patterns

---

## Assigned To

**Story:** Story 1: BR Repo (PERPETUAL)  
**Task:** Task 35 (E6:S01:T35)

---

## Kanban Links

- Story: [E6:S01: BR Repo (PERPETUAL)](../epics/Epic-6/Story-001-br-repo.md)
- Task: [E6:S01:T35: RW Housekeeping Step Not Working](../epics/Epic-6/Story-001-br-repo/T35-rw-housekeeping-step-not-working.md)

---

## References

- **RW Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 17: Housekeeping)
- **Cursor Rules:** `.cursorrules` (Step 13: Housekeeping reference)

---

## Version History

- **v0.6.1.35+0** (2026-01-17): Bug report created

---

_This Bug Report is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

