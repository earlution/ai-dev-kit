---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 02: Canonical docs path and publish scope (FR-066)

**Task ID:** E5:S09:T02  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30  
**Code:** E5S09T02

**Feature Request:** [FR-066 – Canonical docs path](../../../fr-br/FR-066-docusaurus-canonical-docs-path-and-publish-scope.md)

---

## Summary

Implement **FR-066**: point the Docusaurus docs plugin at repository **`docs/`** with explicit **include/exclude** (or documented “include all”) and a committed **publish scope** policy.

---

## Input

- [FR-066](../../../fr-br/FR-066-docusaurus-canonical-docs-path-and-publish-scope.md)
- `docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md`
- Completed or in-progress **FR-065** (site identity)

---

## Deliverable

- `portal/docusaurus.config.js` (and minimal companion changes) wiring `docs.path` to `../docs` or equivalent
- Publish scope documented in `portal/README.md` and/or architecture note
- `editUrl` consistent with FR-065 after merge

---

## Acceptance Criteria

- Per FR-066 ACs (canonical tree wired, scope committed, build may fail pending FR-067).

---

## Version Anchor

**Forensic marker (when complete):** `✅ COMPLETE (v0.5.9.2+N)` after FR-066 ACs are met.

---

## Evidence

- **RW -k:** v0.5.9.2+1 — task T02 version marker (kanban init sequencing per user request).

---

## Dependencies

- **FR-065** / E5:S09:T01 recommended first.
