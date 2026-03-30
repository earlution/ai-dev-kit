---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 05: Docusaurus CI build gate (FR-069)

**Task ID:** E5:S09:T05  
**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** Small  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30  
**Code:** E5S09T05

**Feature Request:** [FR-069 – CI build gate](../../../fr-br/FR-069-docusaurus-ci-build-gate.md)

---

## Summary

Implement **FR-069**: GitHub Actions workflow running `npm ci` and `npm run build` in `portal/` on appropriate triggers (e.g. changes to `portal/` or `docs/`).

---

## Input

- [FR-069](../../../fr-br/FR-069-docusaurus-ci-build-gate.md)
- Green `portal` build (**E5:S09:T03**)

---

## Deliverable

- `.github/workflows/` workflow file (clear job name)
- `portal/README.md` mentions CI
- Green validation on default branch after FR-067

---

## Acceptance Criteria

- Per FR-069 ACs.

---

## Version Anchor

**Forensic marker (when complete):** `✅ COMPLETE (v0.5.9.5+N)` after FR-069 ACs are met.

---

## Evidence

- **RW -k:** v0.5.9.5+1 — kanban marker (sequenced release).

---

## Dependencies

- **E5:S09:T03** recommended so default-branch build is meaningful.
