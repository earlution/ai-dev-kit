---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-077: IPW-built task status transition and kboard synchronization

**Type:** Feature Request (FR)  
**ID:** FR-077  
**Submitted:** 2026-04-09  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** IN PROGRESS  

**Implementing Task:** [E2:S01:T17](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md)

---

## Summary

When a task is planned via IPW and that plan is then built/implemented, task status and `kanban-board.md` frequently remain stale (`TODO`), creating a false project state. Add explicit lifecycle rules so status transitions are applied at the correct point and reflected on kboard as part of the same workflowed unit of work.

---

## Problem Statement

Current process allows this drift pattern:

1. IPW package is created and wired.
2. Work is implemented from the IPW package.
3. Task remains `TODO` in task doc and/or kboard.

This creates governance and traceability gaps because documentation no longer reflects actual execution state.

---

## Core Questions to Resolve

1. **When should status change from TODO to IN PROGRESS?**
2. **When should status change to COMPLETE?**
3. **Which workflow step is responsible for propagating task status changes to kboard and related board views?**

---

## Proposed Direction

1. Define a canonical status transition contract:
   - **TODO -> IN PROGRESS** when implementation work starts (first non-planning implementation change).
   - **IN PROGRESS -> COMPLETE** when acceptance criteria are satisfied and evidence exists.
2. Wire this intent into IPW and adjacent execution guidance:
   - IPW artifacts must include a "status transition intent" section.
   - Implementation and RW/UKW docs must state the authoritative update point and owner.
3. Enforce atomic propagation:
   - Task doc status update and kboard representation update happen in the same change set/session.

---

## Requirements

- **FR-077:R01** Define canonical status transition points for IPW-derived tasks.
- **FR-077:R02** Add status transition intent/checklist to IPW planning artifacts or workflow guidance.
- **FR-077:R03** Require task doc + kboard sync in one atomic update when status changes.
- **FR-077:R04** Update RW/UKW/IPW documentation to avoid ambiguous ownership of status propagation.
- **FR-077:R05** Add validation or audit checks to detect "implemented but TODO" drift.

---

## Acceptance Criteria

- [ ] Policy/docs explicitly define when `TODO`, `IN PROGRESS`, and `COMPLETE` are applied for IPW-derived tasks.
- [ ] IPW output includes explicit status transition intent that downstream execution can apply.
- [ ] At least one regression check identifies and reports stale TODO state after implementation evidence exists.
- [ ] kboard and task-doc status remain synchronized for validated scenarios.

---

## Related

- [FR-042](./FR-042-implementation-planning-workflow-ipw.md) - IPW workflow and planning artifacts
- [FR-075](./FR-075-icw-durable-planning-artifacts-documentation-system.md) - Durable planning artifacts
- [FR-076](./FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md) - Drift/concurrency controls
