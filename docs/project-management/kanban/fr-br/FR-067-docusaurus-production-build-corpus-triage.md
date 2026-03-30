---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-30T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Docusaurus Production Build — Corpus Triage

**Type:** Feature Request (FR)  
**ID:** FR-067  
**Submitted:** 2026-03-30  
**Submitted By:** User (via agent)  
**Priority:** HIGH  
**Status:** PROPOSED  
**Assigned Task:** E5:S09:T03 — [`T03-docusaurus-build-triage-fr-067.md`](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T03-docusaurus-build-triage-fr-067.md)

---

## Summary

After **FR-066** points the site at repo `docs/`, make **`npm run build`** succeed for the **agreed publish scope**, by triaging **MDX compilation errors**, **broken links** (per `onBrokenLinks` policy), and any **asset path** issues—with minimal content churn outside fixes required for the build.

---

## Problem Statement

Repo `docs/` has hundreds of markdown files, mixed frontmatter, and links that assume GitHub or editor contexts. Docusaurus with `onBrokenLinks: 'throw'` will surface failures. Without a dedicated triage FR, portal integration stalls in an ambiguous state.

---

## Scope (Atomic)

**In scope**

- Iterative fixes or **narrowing FR-066 exclude list** (with scope doc updated) until `npm run build` exits **0**.
- Document **temporary** relaxations (e.g. `onBrokenLinks: 'warn'` during migration) **only** if justified with a time-boxed follow-up; prefer fixing links or excluding problematic subtrees per publish policy.
- Coordinate with **FR-058** / MMW where fixes are systemic markdown hygiene.

**Out of scope**

- Perfect editorial quality of all docs.
- Sidebar UX (FR-068).
- CI automation (FR-069).

---

## Functional Requirements

- [ ] **FR-067:R01** – `npm run build` in `portal/` passes on CI-representative Node version (≥20 per `package.json` engines).
- [ ] **FR-067:R02** – Broken link policy is **explicit** in config or in publish scope doc (throw vs warn + deadline).
- [ ] **FR-067:R03** – Any excluded subtree added during triage is reflected in FR-066’s publish scope (diff or addendum).
- [ ] **FR-067:R04** – Log or short **`docs/`-compatible** note (e.g. under `docs/maintenance/` or portal README) summarizing triage stats: files touched, top failure classes, excludes added.

---

## Non-Functional Requirements

- [ ] **FR-067:NF01** – Prefer **surgical** edits (escape MDX, fix links, frontmatter) over bulk rewrites.
- [ ] **FR-067:NF02** – No false “Fixed” claims in changelogs; use project release language rules.

---

## Acceptance Criteria

- [ ] AC1: Clean production build for the defined publish scope.
- [ ] AC2: Publish scope doc matches actual includes/excludes.
- [ ] AC3: Triage summary exists for future maintenance.

---

## Dependencies / Ordering

- **FR-066** must be complete (docs path + scope defined).

## Related FRs

- **FR-058** – Markdown Maintenance Workflow.
- **FR-068** – Sidebar / landing (may start after AC1).

---

## References

- `portal/docusaurus.config.js` (`onBrokenLinks`, MDX options)
- `docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow.md`
