---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T13:18:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 7, Task 115: Last-modified stamp forensic integrity guardrails

**Task ID:** E6:S07:T115  
**Status:** IN PROGRESS  
**Priority:** CRITICAL  
**Estimated Effort:** Medium  
**Created:** 2026-04-20  
**Last updated:** 2026-04-20 (ICW planning package created and linked)  
**Code:** E6S07T115

**Upstream:** [UXR-009 – Last-modified stamp forensic integrity and drift protection](../../../fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)

**Coordinates:** [E2:S16:T03](T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md), [E6:S07:T110](T110-ukw-fbuboard-scope-and-drift-concurrency-controls.md)

---

## Input

- User report: row-level `Last modified` timestamps are being overwritten by board rewrite passes.
- Observed board state in `fbuboard.md` / `kboard.md` showing homogenized timestamps.
- Existing UKW temporal logic in Story 007 tasks (`T101`, `T110`, `T108`).

---

## Problem statement

Timestamp churn from non-substantive board rewrites corrupts forensic signal. Operators can no longer infer true recency of work per item, breaking temporal drift triage and stale-work detection.

---

## Deliverable

- Deterministic stamp-integrity policy and implementation guardrails where row stamps mutate only with substantive source evidence.
- Update workflow behavior and validation to suppress synthetic stamp churn.
- Regression coverage for "rewrite without underlying work" scenarios.

---

## Scope

1. Formalize substantive vs non-substantive mutation rules for row timestamps.
2. Update UKW/RW-related board mutation paths to enforce work-evidence gating.
3. Add validator/audit reporting for suspicious mass stamp rewrites.
4. Add test coverage for no-op rewrite, sort/reformat, and real-work update cases.

---

## Acceptance Criteria

- [ ] **AC1:** Policy text explicitly states that board rewrite alone does not update `Last modified`.
- [ ] **AC2:** UKW/RW row mutation logic updates stamp only on substantive source deltas.
- [ ] **AC3:** Validation detects synthetic mass updates and emits blocking or high-signal warnings.
- [ ] **AC4:** Tests cover both allowed stamp updates and prohibited rewrite-only updates.
- [ ] **AC5:** UXR-009, this task, story checklist, and boards are fully cross-wired.

---

## References

- [UXR-009](../../../fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)
- [T101](T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
- [T110](T110-ukw-fbuboard-scope-and-drift-concurrency-controls.md)
- [ICW-E6S07T115-specification](../../../../../implementation-cycles/ICW-E6S07T115-specification.md)
- [ICW-E6S07T115-test-design](../../../../../implementation-cycles/ICW-E6S07T115-test-design.md)
- [ICW-E6S07T115-implementation-plan](../../../../../implementation-cycles/ICW-E6S07T115-implementation-plan.md)
