---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 01: Docusaurus site identity and config (FR-065)

**Task ID:** E5:S09:T01  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30  
**Code:** E5S09T01

**Feature Request:** [FR-065 – Docusaurus site identity](../../../fr-br/FR-065-docusaurus-site-identity-and-config.md)

---

## Summary

Implement **FR-065**: replace template branding and placeholder deployment metadata in `portal/docusaurus.config.js` and related theme assets with **AI Dev Kit** identity; **do not** change docs content root (remains `portal/docs/` until FR-066).

---

## Input

- [FR-065 – Docusaurus site identity](../../../fr-br/FR-065-docusaurus-site-identity-and-config.md)
- Existing `portal/` scaffold and `docusaurus.config.js`

---

## Deliverable

- Updated site `title`, `tagline`, `url` / `baseUrl` strategy, GitHub fields, `editUrl` policy
- Navbar/footer aligned to this project (not Docusaurus template defaults)
- `portal/README.md` states purpose relative to repo root
- `npm run build` in `portal/` still passes

---

## Acceptance Criteria

- Per FR-065 acceptance criteria (template strings removed, repo identity correct, build green).

---

## Version Anchor

**Forensic marker (when complete):** `✅ COMPLETE (v0.5.9.1+N)` after FR-065 ACs are met.

---

## Evidence

- **RW -k (kanban filing):** v0.5.9.1+1 — Story 009 and tasks T01–T07 filed; FR assignments; template fields for validators.

---

## Dependencies

- None (first in Docusaurus chain).
