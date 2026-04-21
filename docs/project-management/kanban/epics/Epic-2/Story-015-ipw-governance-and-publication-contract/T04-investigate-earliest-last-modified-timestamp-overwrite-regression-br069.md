---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-21T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 15, Task 4: Investigate earliest `Last modified` timestamp overwrite regression (BR-069)

**Task ID:** E2:S15:T04  
**Status:** IN PROGRESS  
**Priority:** CRITICAL  
**Estimated Effort:** Medium  
**Created:** 2026-04-21  
**Last updated:** 2026-04-21  
**Code:** E2S15T04

**Upstream:** [BR-069 – kboard/fbuboard earliest `Last modified` timestamps are being overwritten](../../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)

---

## Input

- User report that earliest historical row timestamps appear to have been overwritten.
- Existing timestamp integrity stream: [UXR-009](../../../fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md), [E6:S07:T115](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md).
- Existing governance hardening stream: [E2:S15:T03](T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md), [FR-089](../../../fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md).
- Current board mutation logic in `update_kanban_docs.py`.

---

## Problem statement

Forensic timeline fidelity depends on preserving older accurate `Last modified` row values unless substantive source evidence exists. A regression path appears to be rewriting preserved early timestamps.

---

## Deliverable

- Reproducible evidence set for overwrite behavior.
- Root-cause analysis identifying the exact mutation path.
- Proposed guardrail and regression test design for preservation of earliest historical values.

---

## Scope

1. Reproduce overwrite behavior with controlled fixture rows.
2. Trace mutation path(s) in board update scripts.
3. Classify mutation as substantive vs non-substantive and isolate incorrect branch.
4. Define fix and regression tests (implementation in follow-on execution after planning/approval).

---

## Acceptance Criteria

- [ ] **AC1:** Reproduction scenario demonstrates overwrite of earliest preserved row timestamp.
- [ ] **AC2:** Root cause is identified with concrete code-path evidence.
- [ ] **AC3:** Guardrail definition blocks overwrite in non-substantive flows.
- [ ] **AC4:** Regression test cases are specified for no-op/touch-only/reconciliation runs.
- [ ] **AC5:** BR-069, E2:S15:T04, Story 015, and active boards are wired consistently.

---

## References

- [BR-069](../../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [UXR-009](../../../fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)
- [FR-089](../../../fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md)
- [E2:S15:T03](T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md)
