---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T13:18:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Last-modified stamp forensic integrity and drift protection

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-04-20  
**Submitted By:** User  
**Priority:** CRITICAL  
**Status:** IN PROGRESS  
**Code:** UXR-009  
**Last updated:** 2026-04-20 (intake filed with task anchor)  
**Implementing Task:** E6:S07:T115  
**Repository Task:** [E6:S07:T115](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md)
**Planning package (ICW):** [Specification](../../../implementation-cycles/ICW-E6S07T115-specification.md) · [Test design](../../../implementation-cycles/ICW-E6S07T115-test-design.md) · [Implementation plan](../../../implementation-cycles/ICW-E6S07T115-implementation-plan.md)

---

## Summary

`Last modified` row stamps are being rewritten during board-level maintenance passes (for example UKW reconciliation), causing many rows to share the same timestamp and destroying the signal needed to detect true temporal drift. This UXR defines guardrails so stamps update only when the underlying task/FR/BR/UXR record has real work evidence.

---

## Research Question

How should board update workflows preserve forensic integrity so `Last modified` reflects substantive work on the underlying record, not incidental board rewrites?

---

## Findings So Far

1. `fbuboard.md` currently shows broad timestamp homogenization (many rows with the same minute), indicating rewrite-driven updates rather than work-driven updates.
2. This behavior makes at-a-glance drift inspection unreliable and undermines temporal triage.
3. Current logic appears to conflate "row touched by workflow" with "underlying work occurred."

---

## Scope

- Define authoritative semantics for `Last modified` in MoSCOW rows.
- Define positive evidence rules for stamp mutation (what qualifies as "work done").
- Define guardrails for UKW/RW/normalization scripts so board rewrites do not mutate stamps.
- Define validation and audit outputs that detect and block synthetic timestamp churn.

---

## Proposed Guardrails (Analysis)

1. **Work-evidence gate:** update row timestamp only when linked canonical source changed materially (task/FR/BR/UXR doc content delta, status transition, checklist/AC progression, version anchor update, or new evidence/reference commit).
2. **No-op board rewrite immunity:** sorting, formatting, reconciliation, alias migration, and metadata refresh must not mutate per-row stamps.
3. **Source-of-truth derivation:** derive candidate timestamp from linked record evidence (git/file metadata plus semantic diff checks), not from board write time.
4. **Change classification:** every row update path must classify as `substantive` or `non_substantive`; only `substantive` can mutate stamp.
5. **Drift anomaly validator:** fail or warn when a run proposes mass stamp updates without corresponding substantive-source deltas.
6. **Audit logging:** UKW/RW output must report counters (`rows_audited`, `substantive_updates`, `suppressed_non_substantive_updates`, `anomaly_flag`) for forensic review.
7. **Backfill policy:** preserve historical stamps unless linked evidence justifies correction; avoid blanket normalization rewrites.

---

## Acceptance Criteria

- [ ] A normative `Last modified` policy is documented in board governance/docs with explicit substantive/non-substantive definitions.
- [ ] UKW/RW board update paths enforce "no substantive evidence, no stamp update."
- [ ] Validator/analyzer exists (or is specified for implementation) to detect synthetic mass stamp churn.
- [ ] UKW/RW execution output includes stamp-integrity audit counters and anomaly detection status.
- [ ] Current timestamp homogenization issue is reproducibly prevented in regression scenarios.

---

## References

- [fbuboard](../fbuboard.md)
- [kboard](../kboard.md)
- [T110](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T110-ukw-fbuboard-scope-and-drift-concurrency-controls.md)
- [T115](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md)
