---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-30T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Docusaurus Canonical Docs Path and Publish Scope

**Type:** Feature Request (FR)  
**ID:** FR-066  
**Submitted:** 2026-03-30  
**Submitted By:** User (via agent)  
**Priority:** HIGH  
**Status:** PROPOSED  
**Assigned Task:** E5:S09:T02 — [`T02-docusaurus-canonical-docs-path-fr-066.md`](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T02-docusaurus-canonical-docs-path-fr-066.md)

---

## Summary

Configure the Docusaurus **docs plugin** to load markdown from the repository **`docs/`** tree (not only `portal/docs/`), with an **explicit, documented publish scope**: include/exclude patterns (e.g. heavy `changelog-archive`), `routeBasePath` if needed, and a **written policy** (in `portal/README.md` or `docs/architecture/…`) stating what is published vs intentionally excluded.

---

## Problem Statement

The canonical KB and documentation live under repo root `docs/`. The portal currently serves template pages from `portal/docs/`, so the static site is not the KB. We need a **deterministic wiring** and **scope contract** before IA and CI can treat the site as authoritative.

---

## Scope (Atomic)

**In scope**

- `portal/docusaurus.config.js` (and only other files required for path resolution): set `docs.path` to `../docs` or equivalent; add `exclude`, `include` (if supported/needed via plugins), or documented follow-up for glob exclusions per Docusaurus version.
- **Publish scope document:** one markdown section (prefer `portal/README.md` + optional short ADR) listing:
  - What is included (e.g. architecture, guides, knowledge, documentation).
  - What is excluded (e.g. full changelog archive, transient paths) and why.
- Remove or relocate **tutorial-only** `portal/docs/` content **only if** required to avoid duplicate routes; if kept, document dual-root strategy (prefer single source of truth).

**Out of scope**

- Achieving a green build on the full tree (FR-067).
- Sidebar structure (FR-068).
- Branding fixes (FR-065) may precede or merge in same sprint but this FR does not require them.

---

## Functional Requirements

- [ ] **FR-066:R01** – Docs plugin reads from repo `docs/` per config (not ambiguous copy-paste).
- [ ] **FR-066:R02** – Exclude list (or equivalent) for at least **changelog archive** mass paths if they are not intended for v1 publish—**or** explicit decision “include all” with performance caveat documented.
- [ ] **FR-066:R03** – Publish scope is **reviewable in git** (committed markdown).
- [ ] **FR-066:R04** – `editUrl` aligns with paths under `docs/` once FR-065 policy is applied (update if FR-065 landed first).

---

## Non-Functional Requirements

- [ ] **FR-066:NF01** – **Traceability:** Scope doc references `ultimate-canonical-kb-structure.md` where pillars are named.
- [ ] **FR-066:NF02** – Build **may fail** after this FR; FR-067 owns green build.

---

## Acceptance Criteria

- [ ] AC1: Config points Docusaurus docs at the repository `docs/` tree (or documented hybrid with no duplicate slugs).
- [ ] AC2: Publish scope (include/exclude + rationale) is committed.
- [ ] AC3: Team can run `npm run build` and see **actionable** failures for FR-067 (not silent misconfiguration).

---

## Dependencies / Ordering

- **FR-065** (recommended first): correct `url` / `baseUrl` / GitHub metadata for accurate `editUrl`.

## Related FRs

- **FR-067** – Production build + corpus triage.
- **FR-058** – Markdown maintenance (validator / lint alignment).

---

## References

- [Docusaurus docs plugin options](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs)
- `docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md`
- `portal/sidebars.js` (may need stub until FR-068)
