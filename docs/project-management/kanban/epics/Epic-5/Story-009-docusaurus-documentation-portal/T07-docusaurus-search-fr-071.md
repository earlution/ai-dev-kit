---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 07: Docusaurus site search (FR-071)

**Task ID:** E5:S09:T07  
**Status:** TODO  
**Priority:** LOW  
**Estimated Effort:** Medium  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30  
**Code:** E5S09T07

**Feature Request:** [FR-071 – Site search](../../../fr-br/FR-071-docusaurus-site-search.md)

---

## Summary

Implement **FR-071**: add **Algolia DocSearch** (or self-serve) **or** **local/offline** search plugin; document indexing/setup; verify on **production URL** (FR-070).

---

## Input

- [FR-071](../../../fr-br/FR-071-docusaurus-site-search.md)
- **E5:S09:T06** live URL

---

## Deliverable

- Search plugin/theme configuration in Docusaurus
- Maintainer-facing setup notes in `portal/README.md`
- Smoke-test queries documented

---

## Acceptance Criteria

- Per FR-071 ACs.

---

## Version Anchor

**Forensic marker (when complete):** `✅ COMPLETE (v0.5.9.7+N)` after FR-071 ACs are met.

---

## Evidence

- **RW -k:** v0.5.9.7+1 — kanban marker (sequenced release).

---

## Dependencies

- **E5:S09:T06** (FR-070) for production verification.
