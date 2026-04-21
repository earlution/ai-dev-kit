---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-21T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-069: kboard/fbuboard earliest `Last modified` timestamps are being overwritten

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

---

## Expected Behavior

- Existing per-row `Last modified` values remain unchanged when no substantive source record change occurred.
- Earliest historical row timestamps remain preserved and visible for drift triage.

---

## Observed Behavior

- Earliest/older timestamps that appear historically accurate are reported as overwritten.
- Board rows lose reliable historical timing signal.

---

## Scope / Affected Areas

- `docs/project-management/kanban/kboard.md`
- `docs/project-management/kanban/fbuboard.md`
- `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- UKW/RW board update paths that touch row metadata

---

## Acceptance Criteria

- [ ] Reproduction is captured with before/after evidence showing earliest timestamp overwrite.
- [ ] Root cause is identified (specific code path + mutation condition).
- [ ] Guardrail is defined so non-substantive updates cannot overwrite preserved historical row timestamps.
- [ ] Regression tests cover preservation of earliest historical values under touch-only and reconciliation flows.
- [ ] BR-069, implementing task, and board/story wiring are bidirectionally consistent.

---

## Related

- [UXR-009](UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)
- [E6:S07:T115](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md)
- [E2:S15:T04](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md)
