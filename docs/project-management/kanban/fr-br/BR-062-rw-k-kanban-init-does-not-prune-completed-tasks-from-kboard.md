---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-062 - RW -k kanban_init leaves completed tasks on in-progress kboard

**Status:** IN PROGRESS  
**Priority:** CRITICAL  
**Severity:** HIGH  
**Created:** 2026-04-07  
**Last updated:** 2026-04-07 — implementation underway in `E2:S01:T11`: `kanban_init` stale-row pruning added in `update_kanban_docs.py` with targeted regression test coverage.  
**Version:** v0.2.1.10+3  
**Code:** BR-062  
**Implementing Task:** [E2:S01:T11](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T11-rw-k-kanban-init-board-hygiene-for-completed-tasks-br062.md)

---

## Problem Statement

`RW -k` currently runs Kanban updates in `kanban_init` mode, which updates board metadata but does not consistently enforce in-progress board hygiene for completed tasks. As a result, a task marked complete in task/story/BR docs can remain listed in the in-progress MoSCoW section of `kanban-board.md`.

## Observed Behavior

- After `RW -k E2:S01:T09`, `E2:S01:T09` remained in `kanban-board.md` under "MoSCOW Prioritized In-Progress Tasks".
- The row still carried stale phrasing and formatting artifacts while the canonical docs were already closed out.
- This creates contradictory project state across Kanban docs.

## Expected Behavior

- When a task is completed, the in-progress MoSCoW board should be cleaned accordingly (remove or transition entry), even during `RW -k` Kanban doc updates.
- `kanban_init` should not leave stale completed rows on the active in-progress board.

## Impact

- Misleading work-in-progress visibility for planning and triage.
- Reduced trust in RW/kanban automation due to cross-document inconsistency.
- Extra manual cleanup burden after release operations.

## Reproduction

1. Ensure a task is closed out in task/story/BR docs.
2. Run `RW -k <task-id>` and allow Step 7 Kanban update (`kanban_init` mode).
3. Inspect `docs/project-management/kanban/kanban-board.md`.
4. Observe completed task row still present in in-progress MoSCoW list.

## Suspected Root Cause

- `update_kanban_docs.py` in `kanban_init` mode prioritizes version-marker updates and timestamp normalization, but does not fully apply task-state transition hygiene to the MoSCoW in-progress list.

## Proposed Resolution

1. Update `kanban_init` behavior to enforce completed-task removal/transition for in-progress board rows.
2. Add regression tests for `RW -k` path covering board hygiene invariants.
3. Ensure wording/formatting normalization removes stale "verification pending" or malformed version tokens when tasks are complete.

## Related

- `docs/project-management/kanban/kanban-board.md`
- `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- `BR-060`
