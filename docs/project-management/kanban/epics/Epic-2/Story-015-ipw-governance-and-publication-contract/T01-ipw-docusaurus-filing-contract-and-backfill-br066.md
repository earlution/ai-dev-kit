---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E2:S15:T01 - IPW Docusaurus filing contract and backfill (BR-066)

**Task ID:** E2:S15:T01  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2026-04-14  
**Last updated:** 2026-04-14 (v0.2.15.1+0 – RW-k doc-init anchor)  
**Version:** v0.2.15.1+0  
**Code:** E2S15T01

---

## Summary

Investigate and harden IPW behavior so planning/spec artifacts expected to be discoverable in Docusaurus are deterministically filed (or explicitly marked N/A), and backfill missing historical filings.

---

## Input

- [BR-066](../../../fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)
- [FR-042](../../../fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [FR-077](../../../fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- `docs/implementation-cycles/`
- `portal/` documentation surfaces and navigation wiring

---

## Deliverable

1. Explicit ownership contract for Docusaurus filing in IPW lifecycle.
2. Deterministic check(s) for "durable artifact exists but Docusaurus filing missing".
3. Recovery inventory and backfill plan for previously missed artifacts.
4. Updated docs and regression checks to prevent recurrence.

---

## Acceptance Criteria

- [ ] Ownership and timing for Docusaurus filing are unambiguous across IPW/RW/docs.
- [ ] At least one deterministic validation or audit path detects missing filing when applicable.
- [ ] Backlog inventory identifies historical IPW artifacts that should be filed.
- [ ] Guidance includes explicit "not applicable" path where filing is intentionally skipped.

---

## Links

- [BR-066](../../../fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)
- [Story E2:S15](../Story-015-ipw-governance-and-publication-contract.md)
