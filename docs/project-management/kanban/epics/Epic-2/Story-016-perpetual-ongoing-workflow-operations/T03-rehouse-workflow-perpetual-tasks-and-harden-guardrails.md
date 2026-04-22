---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T18:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 3: Workflow maintenance (Perpetual)

**Task ID:** E2:S16:T03  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-04-20  
**Last updated:** 2026-04-22 (scope broadened to perpetual workflow-maintenance umbrella; migration/hardening retained as an in-scope lane)  
**Code:** E2S16T03

**Upstream:** [FR-088 - Dedicated story for perpetual ongoing tasks](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

---

## Input

- [FR-088](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) requirements.
- Migration inventory and dispositions from [E2:S16:T02](./T02-inventory-and-classify-workflow-perpetual-tasks.md).
- Planning and sequencing from [E2:S16:T01](./T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md).

---

## Problem statement

Workflow maintenance work that is ad-hoc, cross-cutting, and not directly tied to a concrete delivery task needs a single perpetual anchor; otherwise attribution fragments across multiple narrow tasks and routing becomes ambiguous.

---

## Deliverable

- Canonical perpetual umbrella task for workflow maintenance in Story 016.
- Migration/hardening lane retained in scope (re-housing, reference updates, and guardrails).
- Clear routing language distinguishing general workflow maintenance (`E2:S16:T03`) from kanban-focused maintenance (`E2:S16:T04`).
- Updated links and references across story docs, boards, FR/BR/UXR docs, and governance docs as needed.
- Verification evidence (link checks, board consistency checks, and regression checks).

---

## Acceptance criteria

- [ ] **AC1:** `E2:S16:T03` is documented as the canonical perpetual umbrella for ad-hoc workflow maintenance not tied to a concrete delivery task.
- [ ] **AC2:** Migration/hardening activities remain explicitly in scope for `E2:S16:T03`, without narrowing the task to migration/hardening only.
- [ ] **AC3:** `E2:S16:T04` is documented as a kanban-focused operational lane under the broader workflow-maintenance model.
- [ ] **AC4:** Policy/validator and reference updates preserve deterministic routing and avoid proliferating additional perpetual maintenance tasks without clear ownership boundaries.
- [ ] **AC5:** Validation passes for updated docs and workflow guardrail behavior.
