---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T15:20:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – FBU Completed Items

**Last Updated:** 2026-04-21 (**FR-089** IMPLEMENTED via **E2:S15:T03**)
**Version:** v0.2.15.3+2 *(completion attribution)*

> **For open FBU items, see:** [`fbuboard.md`](fbuboard.md)  
> **For MoSCOW prioritized tasks, see:** [`kboard.md`](kboard.md)  
> **For completed Kanban tasks (E/S/T), see:** [`kanban-completed.md`](kanban-completed.md)  
> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)

---

## Overview

This document tracks all **completed FRs (Feature Requests), BRs (Bug Reports), and UXRs (User Experience Research)** across the AI Dev Kit project. Items are organized by type with completion dates, version markers, and references to implementing tasks for forensic tracking.

**Completion Criteria:** An FR/BR/UXR is marked COMPLETE only when:
- **Implementation is fully done** (code or docs delivered, released in a version)
- **Sign-off is obtained** (validated, accepted by the responsible party)
- **Associated tasks are completed** (if converted to Kanban tasks)

---

## 20 Most Recently Completed FR/BR/UXR Items

| ID | Type | Description | Completed | Version | Agent |
|----|------|-------------|-----------|---------|-------|
| FR-089 | FR | IPW board-row traceability-churn hardening — duplicate-footer dual-agreement + divergence guardrails; task-ID tail invariants (**E2:S15:T03**) | 2026-04-21 | v0.2.15.3+2 | UKW / Maintainer |
| BR-068 | BR | Docusaurus strict MDX cannot resolve monorepo markdown links — **`portal`** strict build restored (**Strategy A**) (**E5:S09:T11**) | 2026-04-19 | v0.5.9.11+5 | RW Agent |
| FR-080 | FR | End-to-end greenfield installation process — INSTALL + orchestrator + user-docs + validators / evidence (**E6:S09:T01**) | 2026-04-19 | v0.6.9.1+8 | RW Agent |
| UXR-007 | UXR | Interactive installer Kanban pattern prompt clarity — installer UX + ICW publication alignment (**E7:S06:T18**) | 2026-04-18 | v0.7.6.18+3 | UKW Agent |
| BR-063 | BR | RW `-k` task attribution drift vs `version.py` anchor — forensic-strict guard, `--art`, version validation, tests, docs | 2026-04-07 | v0.2.1.13+2 | RW Agent |
| FR-075 | FR | ICW durable planning artifacts — repo SoT under `docs/implementation-cycles/`, policy, ICW docs, `.cursorrules` | 2026-04-01 | v0.5.1.75+1 | RW Agent |
| FR-064 | FR | Retire `shields` branch — static README badges; removed `update-badges.yml` BYOB; deleted `origin/shields` | 2026-03-30 | v0.5.1.69+1 | RW Agent |
| BR-056 | BR | RW ambiguous task identifier typo risk | 2026-03-25T12:55:31Z | v0.6.6.56+4 | RW Agent |
| BR-055 | BR | Missing Implementation Cycle Workflow (ICW) | 2026-03-12T15:35:00Z | v0.4.14.3+2 | ICW Agent |
| BR-054 | BR | Kanban Package Migration/Installation Completely Broken | 2026-03-12T13:20:00Z | v0.24.2.1+1 | Documentation Agent |
| BR-009 | BR | Installer Discoverability and Documentation | 2026-03-09T16:00:00Z | v0.6.7.104+2 | RW Agent |
| FR-051 | FR | FR/BR/UXR Prioritization Board | 2026-03-09T15:20:00Z | v0.6.7.107+1 | Documentation Agent |

---

## Completed Items

Historical completion sections and implementation statistics are preserved in the legacy compatibility alias document:

- [`fr-br-uxr-completed.md`](fr-br-uxr-completed.md)

Use this canonical `fbu-completed.md` path for all new references.
