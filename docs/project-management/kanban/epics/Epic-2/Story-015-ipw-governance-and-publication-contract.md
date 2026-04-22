---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 015 – IPW Governance and Publication Contract

**Status:** IN PROGRESS
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2026-04-14  
**Completed:** N/A  
**Last updated:** 2026-04-22 (v0.2.15.5+1 – Kanban documentation setup)
**Version:** v0.2.15.5+1
**Code:** E2S15

---

## Overview

Define and harden IPW governance for planning artifact publication so durable spec/test/plan outputs are either deterministically filed into Docusaurus surfaces or explicitly marked as not applicable.

---

## Goal

Eliminate IPW documentation publication drift by making ownership, filing targets, validation behavior, and backfill expectations explicit and enforceable.

---

## Task Checklist

- [x] **E2:S15:T01 – BR-066: IPW Docusaurus filing contract and backfill** - COMPLETE (v0.2.15.1+1) (HIGH, contract + validation + historical recovery inventory) — [Task doc](Story-015-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066.md) | [BR-066](../../fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)

- [ ] **E2:S15:T02 – IPP post-run governance reconciliation ownership (FR-084)** - IN PROGRESS (HIGH, assign deterministic IPP ownership for reconciling task/FR-BR-UXR docs + kboard/fbuboard after IPP completion) — [Task doc](Story-015-ipw-governance-and-publication-contract/T02-ipp-post-run-governance-reconciliation-ownership-fr084.md) | [FR-084](../../fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership.md) | [IPP](../../../../implementation-cycles/IPP-E2S15T02-ipp-post-run-governance-reconciliation-ownership.md)

- [x] **E2:S15:T03 – IPW board-row traceability-churn hardening (FR-089)** - ✅ COMPLETE (v0.2.15.3+2, duplicate-footer dual-agreement + traceability churn governance; FR-089 IMPLEMENTED) — [Task doc](Story-015-ipw-governance-and-publication-contract/T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md) | [FR-089](../../fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md) | [IPP](../../../../implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails.md)

- [ ] **E2:S15:T04 – Investigate earliest `Last modified` timestamp overwrite regression (BR-069)** - IN PROGRESS (CRITICAL, RCA + guardrail spec complete in IPP; code remediation pending) — [Task doc](Story-015-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md) | [BR-069](../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md) | [IPP](../../../../implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md)

- [ ] **E2:S15:T05 – Implement UKW/RW canonical row transform engine (FR-090)** - IN PROGRESS (CRITICAL, shared transform pipeline + board-specific rendering contracts + RW/UKW parity hardening) — [Task doc](Story-015-ipw-governance-and-publication-contract/T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md) | [FR-090](../../fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)

---
