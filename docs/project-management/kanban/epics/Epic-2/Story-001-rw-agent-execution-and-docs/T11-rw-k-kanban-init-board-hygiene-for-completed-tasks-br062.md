---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E2:S01:T11 - RW -k kanban_init board hygiene for completed tasks (BR-062)

**Task ID:** E2:S01:T11  
**Status:** COMPLETE  
**Priority:** CRITICAL  
**Created:** 2026-04-07  
**Last updated:** 2026-04-07 (implementation complete: `kanban_init` stale-row pruning + regression coverage validated)  
**Version:** v0.2.1.10+4  
**Code:** E2S01T11

---

## Summary

Fix the `RW -k` Step 7 Kanban update behavior so completed tasks are not left in the in-progress MoSCoW list on `kanban-board.md` when `kanban_init` mode runs.

---

## Input

- [BR-062](../../../fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard.md)
- `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- `docs/project-management/kanban/kanban-board.md`

---

## Deliverable

1. `kanban_init` path enforces in-progress board hygiene for completed tasks.
2. Regression coverage prevents stale completed rows in active MoSCoW board after `RW -k`.
3. `E2:S01:T09` stale row case is cleaned and no longer reproducible.

---

## Acceptance Criteria

- [x] `RW -k` no longer leaves completed task rows in `kanban-board.md` in-progress MoSCoW section.
- [x] Existing metadata/timestamp behavior for `kanban_init` remains intact.
- [x] Regression test or deterministic verification step added for this specific scenario.
- [x] BR-062 status and references updated after implementation.

---

## Links

- [BR-062](../../../fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard.md)
- [Story E2:S01](../Story-001-rw-agent-execution-and-docs.md)

---

## Implementation Evidence

- `update_kanban_docs.py` (`update_kanban_board`):
  - Added `kanban_init`-mode pruning for stale target-task rows already marked `✅ COMPLETE` in MoSCOW in-progress section.
  - Retains existing board metadata and timestamp normalization behavior.
- `test_update_kanban_docs.py`:
  - Added `test_4_2_kanban_init_prunes_stale_completed_row` to cover BR-062 repro path and assert unrelated rows are preserved.
