---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E2:S01:T17 - IPW-built task status transition and kboard synchronization (FR-077)

**Task ID:** E2:S01:T17  
**Status:** IN PROGRESS  
**Version Anchor:** v0.2.1.17+1  
**Priority:** HIGH  
**Created:** 2026-04-09  
**Last updated:** 2026-04-09 (task created from FR-077 intake)  
**Code:** E2S01T17

---

## Summary

Define and implement canonical status-transition ownership so IPW-built tasks do not remain stale (`TODO`) after implementation starts or completes, and ensure atomic sync between task docs and kboard.

---

## Input

- [FR-077](../../../fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- `docs/project-management/kanban/kanban-board.md`
- `docs/project-management/kanban/fr-br-uxr-board.md`
- [ICW-E2S01T17-specification](../../../../implementation-cycles/ICW-E2S01T17-specification.md)
- [ICW-E2S01T17-test-design](../../../../implementation-cycles/ICW-E2S01T17-test-design.md)
- [ICW-E2S01T17-implementation-plan](../../../../implementation-cycles/ICW-E2S01T17-implementation-plan.md)

---

## Deliverable

1. Canonical status transition rules (`TODO -> IN PROGRESS -> COMPLETE`) for IPW-derived tasks.
2. Explicit workflow ownership for when task-doc and kboard status updates must occur.
3. Validation/audit mechanism to detect stale task status drift after implementation evidence exists.

---

## Acceptance Criteria

- [ ] Transition points for `TODO`, `IN PROGRESS`, `COMPLETE` are explicitly documented and enforceable.
- [ ] IPW output or guidance includes status-transition intent/checklist for downstream execution.
- [ ] Task-doc and kboard sync is defined as atomic for status changes.
- [ ] At least one regression/audit check detects implemented-but-TODO drift.

---

## Dependencies

- Related: FR-042, FR-075, FR-076.
- Depends on: Story E2:S01 workflow governance surface and validator/docs update paths.

---

## Links

- [FR-077](../../../fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- [Story E2:S01](../Story-001-rw-agent-execution-and-docs.md)
- [ICW-E2S01T17-specification](../../../../implementation-cycles/ICW-E2S01T17-specification.md)
- [ICW-E2S01T17-test-design](../../../../implementation-cycles/ICW-E2S01T17-test-design.md)
- [ICW-E2S01T17-implementation-plan](../../../../implementation-cycles/ICW-E2S01T17-implementation-plan.md)
