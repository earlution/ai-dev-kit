---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-30T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Docusaurus Site Identity and Base Configuration

**Type:** Feature Request (FR)  
**ID:** FR-065  
**Submitted:** 2026-03-30  
**Submitted By:** User (via agent)  
**Priority:** HIGH  
**Status:** PROPOSED  
**Assigned Task:** E5:S09:T01 — [`T01-docusaurus-site-identity-fr-065.md`](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T01-docusaurus-site-identity-fr-065.md)

---

## Summary

Replace all **create-docusaurus template** branding and placeholder deployment metadata in `portal/docusaurus.config.js` (and related `themeConfig` assets) with **AI Dev Kit–accurate** title, tagline, URLs, GitHub `organizationName` / `projectName`, and **edit links** pointing at this repository—**without** changing the docs content root (still `portal/docs/` for this FR).

---

## Problem Statement

The `portal/` app builds, but presents “My Site,” example.com URLs, and Facebook/Docusaurus edit URLs. External readers and contributors cannot tell the site belongs to ai-dev-kit or land correct “edit this page” targets.

---

## Scope (Atomic)

**In scope**

- `portal/docusaurus.config.js`: `title`, `tagline`, `url`, `baseUrl` (document chosen strategy: e.g. prod hostname + path), `organizationName`, `projectName`, `favicon` if needed, `editUrl` for docs and blog (or disable `editUrl` consistently).
- `themeConfig.navbar`, `footer`, `image` (social card): remove or replace template links with project-appropriate links (e.g. repo, main README, framework docs).
- `portal/README.md`: short paragraph stating this is the **AI Dev Kit documentation site** and linking to root `README.md` for the monorepo.

**Explicitly out of scope**

- Pointing the docs plugin at `../docs/` (FR-066).
- Fixing MDX/link errors from real corpus (FR-067).
- CI, deploy, sidebar IA (FR-068–FR-070).

---

## Functional Requirements

- [ ] **FR-065:R01** – No remaining placeholder identities: “My Site,” “Dinosaurs are cool,” `your-docusaurus-site.example.com`, or template `organizationName`/`projectName` in committed config.
- [ ] **FR-065:R02** – `editUrl` either targets the **ai-dev-kit** repo tree at the path that will hold published markdown **or** is removed with a short comment explaining the policy until FR-066 lands.
- [ ] **FR-065:R03** – Navbar/footer do not point to Docusaurus community URLs as primary support paths unless intentionally retained as “built with” secondary links.
- [ ] **FR-065:R04** – `npm run build` in `portal/` still exits zero after changes.

---

## Non-Functional Requirements

- [ ] **FR-065:NF01** – **Single PR concern:** Identity + config only; minimize diff outside `portal/` and one optional asset swap (e.g. logo alt text).

---

## Acceptance Criteria

- [ ] AC1: Template placeholder strings are gone from `docusaurus.config.js` (verified by search).
- [ ] AC2: GitHub org/repo fields match the canonical ai-dev-kit repository.
- [ ] AC3: `portal/README.md` describes purpose and relation to repo root.
- [ ] AC4: Production build succeeds unchanged in scope of current `portal/docs` content.

---

## Dependencies / Ordering

- **None** (first in Docusaurus adoption chain).

## Related FRs

- **FR-066** – Canonical docs path and publish scope.
- **FR-058** – Markdown Maintenance Workflow (future corpus hygiene).

---

## References

- `portal/docusaurus.config.js`
- `docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md` (context only)
