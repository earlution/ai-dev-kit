---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T18:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 3: Re-house workflow perpetual tasks into Story 016 and harden guardrails

**Task ID:** E2:S16:T03  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-04-20  
**Last updated:** 2026-04-20 (status moved to IN PROGRESS for RW -d E2:S16:T03 --art)  
**Code:** E2S16T03

**Upstream:** [FR-088 - Dedicated story for perpetual ongoing tasks](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

---

## Input

- [FR-088](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) requirements.
- Migration inventory and dispositions from [E2:S16:T02](./T02-inventory-and-classify-workflow-perpetual-tasks.md).
- Planning and sequencing from [E2:S16:T01](./T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md).

---

## Problem statement

Without executing a controlled migration and hardening policy/validator guardrails, perpetual workflow tasks will continue to drift into non-canonical stories and regress over time.

---

## Deliverable

- Re-housed workflow perpetual tasks into Story 016 per approved mapping.
- Renumbered migrated perpetual tasks to Story 016 standard task IDs (non-`T101+`).
- Updated links and references across story docs, boards, FR/BR/UXR docs, and governance docs.
- Policy/validator guardrails that enforce canonical perpetual placement in Story 016.
- Verification evidence (link checks, board consistency checks, and regression checks).

---

## Acceptance criteria

- [ ] **AC1:** Mapped workflow perpetual tasks are re-housed or redirected per approved dispositions and renumbered to non-`T101+` IDs.
- [ ] **AC2:** `kboard` and `fbuboard` references are updated with no orphaned legacy links.
- [ ] **AC3:** Policy/validator updates enforce Story 016 as canonical perpetual home and retire `T101+` as valid numbering for new perpetual tasks.
- [ ] **AC4:** Validation passes for updated docs and workflow guardrail behavior.
- [ ] **AC5:** Transition notes document retained legacy anchors and rationale, if any.
