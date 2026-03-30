---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 08: Strict broken-link checking (post–FR-067 warn mode)

**Task ID:** E5:S09:T08  
**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** Medium (depends on remaining link debt)  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30 (v0.5.9.8+1 — RW -k kanban doc init)  
**Code:** E5S09T08

**Origin:** Deferred outcome of [FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) — see **Follow-up work** on that FR. **E5:S09:T03** shipped `onBrokenLinks: 'warn'` deliberately; this task is the **explicit** place that work “to be done later” is recorded (do not rely on chat memory).

---

## Purpose (why this exists)

- **FR-067** required a **green** `npm run build` first. Legacy `docs/` links often pointed at paths Docusaurus cannot resolve; **`warn`** was the agreed interim so the build completes while listing remediation targets.
- **End state:** `onBrokenLinks` and `onBrokenMarkdownLinks` return to **`'throw'`** so a broken link **fails the build** (same bar as strict local development when debt is cleared).
- **Corpus/link hygiene** is largely **systemic markdown maintenance** — coordinate with **[FR-058 – Markdown Maintenance Workflow](../../../fr-br/FR-058-markdown-maintenance-workflow.md)** so link fixes are not one-off portal tweaks only.

---

## Input

- [FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) (follow-up table)
- [`docs/maintenance/docusaurus-corpus-triage-fr-067.md`](../../../../../maintenance/docusaurus-corpus-triage-fr-067.md) — failure classes and current policy
- [FR-058](../../../fr-br/FR-058-markdown-maintenance-workflow.md) — bulk / repeatable markdown hygiene
- **E5:S09:T05** ([FR-069](../../../fr-br/FR-069-docusaurus-ci-build-gate.md)) — when CI exists, strict link mode should produce **red CI** on regressions

---

## Deliverable

- `portal/docusaurus.config.js`: `onBrokenLinks: 'throw'`, `onBrokenMarkdownLinks: 'throw'` (or project-equivalent strict settings).
- `portal/README.md`: policy updated; remove “interim warn” wording or reframe as complete.
- `tests/test_portal_fr067_build_triage.py` (or successor): expectations updated so S2 reflects **throw** where applicable.
- `npm run build` and `PORTAL_BUILD_STRICT=1` tests **green** with **zero** (or policy-defined baseline) broken-link warnings.

---

## Acceptance Criteria

1. Production build **fails** on broken links (throws), not only warns.
2. FR-067 follow-up row for strict links marked **done** (or superseded with pointer).
3. Triage note [`docusaurus-corpus-triage-fr-067.md`](../../../../../maintenance/docusaurus-corpus-triage-fr-067.md) updated with completion pointer and version/task forensic marker when released.

---

## Version Anchor

**RW -k (doc init):** Task and cross-links released at **`v0.5.9.8+1`** (SemVer **`v0.4.672+1`**). Strict `throw` policy implementation remains **TODO** until ACs met.

**Forensic marker (when complete):** `✅ COMPLETE (v0.5.9.8+N)` after ACs are met.

---

## Related

- **E5:S09:T03** — completed warn-mode triage.
- **E5:S09:T05** — CI should run the same strict build.
