---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-21T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-069: kboard/fbuboard row-footer timestamp overwrite and task-ID multiplication regression

**Status:** OPEN  
**Priority:** CRITICAL  
**Severity:** HIGH  
**Created:** 2026-04-21  
**Last updated:** 2026-04-21  
**Version:** N/A  
**Code:** BR-069  

**Implementing Task:** [E2:S15:T04](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md)

---

## Problem Statement

On `kboard.md` and `fbuboard.md`, the earliest/older per-row `Last modified` values are expected to remain stable unless substantive underlying work occurs. A regression is suspected where these historically accurate row timestamps are being overwritten during maintenance or reconciliation flows, degrading forensic timeline integrity.

In the same row-tail mutation area, task identifiers are also being multiplied (repeated appended task-link segments on a single row), creating structural churn that obscures canonical traceability.

---

## Expected Behavior

- Existing per-row `Last modified` values remain unchanged when no substantive source record change occurred.
- Earliest historical row timestamps remain preserved and visible for drift triage.
- Each row contains at most one canonical task-ID link segment (no duplicated repeated task-ID append operations).

---

## Observed Behavior

- Earliest/older timestamps that appear historically accurate are reported as overwritten.
- Board rows lose reliable historical timing signal.
- Task-ID segments are duplicated on rows (same `Exx:Sxx:Txx` link appended multiple times).

---

## Scope / Affected Areas

- `docs/project-management/kanban/kboard.md`
- `docs/project-management/kanban/fbuboard.md`
- `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- UKW/RW board update paths that touch row metadata
- Row-tail traceability segment normalization paths (`FBU | Task | IPP | Last modified`)

---

## Acceptance Criteria

- [ ] Reproduction is captured with before/after evidence showing earliest timestamp overwrite.
- [ ] Reproduction is captured with before/after evidence showing task-ID multiplication on affected rows.
- [ ] Root cause is identified (specific code path + mutation condition).
- [ ] Guardrail is defined so non-substantive updates cannot overwrite preserved historical row timestamps.
- [ ] Guardrail is defined so row normalization cannot append duplicate task-ID segments.
- [ ] Regression tests cover preservation of earliest historical values under touch-only and reconciliation flows.
- [ ] Regression tests cover single-instance task-ID segment invariants under repeated runs.
- [ ] BR-069, implementing task, and board/story wiring are bidirectionally consistent.

---

## Related

- [UXR-009](UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)
- [E6:S07:T115](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md)
- [E2:S15:T04](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md)
