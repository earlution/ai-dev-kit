---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 03: Production build corpus triage (FR-067)

**Task ID:** E5:S09:T03  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30  
**Code:** E5S09T03

**Feature Request:** [FR-067 – Production build triage](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md)

---

## Summary

Implement **FR-067**: after FR-066, achieve **`npm run build` = 0** for the agreed publish scope by triaging MDX, links, and assets; document triage stats and exclude list updates.

---

## Input

- [FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md)
- **E5:S09:T02** complete (docs path + scope)

---

## Deliverable

- Green Docusaurus production build for publish scope
- Explicit broken-link policy (throw vs warn + follow-up)
- Triage summary (counts, failure classes, excludes added)

---

## Acceptance Criteria

- Per FR-067 ACs.

---

## Version Anchor

**Forensic marker (when complete):** `✅ COMPLETE (v0.5.9.3+N)` after FR-067 ACs are met.

---

## Dependencies

- **E5:S09:T02** (FR-066) complete.

## Related

- **FR-058** (MMW) for systematic markdown maintenance.
