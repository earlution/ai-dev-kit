---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 06: Docusaurus deployment and hosting (FR-070)

**Task ID:** E5:S09:T06  
**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** Medium  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30  
**Code:** E5S09T06

**Feature Request:** [FR-070 – Deployment and hosting](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md)

---

## Summary

Implement **FR-070**: choose hosting (e.g. GitHub Pages, Netlify, Cloudflare Pages), align `url` / `baseUrl`, automate deploy, link live site from root **README.md**.

---

## Input

- [FR-070](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md)
- **E5:S09:T03**–**T05** outcomes

---

## Deliverable

- Hosting decision recorded (short doc in `portal/README.md` or ADR)
- Automated or documented repeatable deploy
- Secrets via GitHub / provider mechanisms only (no tokens in repo)

---

## Acceptance Criteria

- Per FR-070 ACs.

---

## Version Anchor

**Forensic marker (when complete):** `✅ COMPLETE (v0.5.9.6+N)` after FR-070 ACs are met.

---

## Dependencies

- **E5:S09:T03**–**T05** strongly recommended (green build + CI).
