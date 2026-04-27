---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 016 – Perpetual Ongoing Workflow Operations

**Status:** IN PROGRESS
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-20  
**Last updated:** 2026-04-27 (v0.2.16.1+4 – Kanban documentation setup)
**Version:** v0.2.16.1+4
**Code:** E2S16

---

## Task Checklist

- [x] **E2:S16:T01 – Establish canonical perpetual ongoing tasks story (FR-088)** - COMPLETE (HIGH, scope baseline, renumbering policy, and guardrail contract published; Wave 2/3 enforcement landed under `E2:S16:T03`)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md`](Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) | IPP: [`IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md`](../../../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)

- [ ] **E2:S16:T02 – Inventory and classify workflow-related perpetual tasks** - IN PROGRESS (HIGH, produce exhaustive inventory and migration disposition for all workflow perpetual anchors and references)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md`](Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

- [ ] **E2:S16:T03 – Workflow maintenance (Perpetual)** - IN PROGRESS (HIGH, umbrella perpetual anchor for ad-hoc workflow maintenance not tied to a concrete delivery task; includes migration/hardening and other workflow upkeep)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

- [ ] **E2:S16:T04 – Ad-hoc Kanban synchronization and hygiene (Perpetual)** - IN PROGRESS (HIGH, kanban-focused operational lane under workflow maintenance for board synchronization/hygiene work)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md`](Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

- [ ] **E2:S16:T05 – Markdown Documentation Maintenance (Perpetual)** - IN PROGRESS (HIGH, dedicated perpetual lane for recurring markdown-only documentation upkeep outside workflow-maintenance umbrella and kanban synchronization lanes)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md`](Story-016-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

- [ ] **E2:S16:T06 – UKW optional reprioritization `--rp` flag (FR-085)** - IN PROGRESS (HIGH, semantic re-house from `E6:S07:T116`; optional deep reprioritization based on intent/dependencies/blockers/impact across task + FBU surfaces)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md`](Story-016-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md) | [FR-085](../../fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md)

---

## Overview

This story is the canonical Epic 2 home for perpetual ongoing workflow tasks (for example UKW/CMW/RW maintenance streams), separating continuous operational ownership from feature-specific delivery stories.

---

## In scope

- Perpetual workflow operations ownership model.
- Guardrails for semantic placement of new perpetual tasks.
- Migration planning for currently mis-housed perpetual tasks.
- Governance updates and traceability wiring for the above.

## Out of scope

- Implementing unrelated feature work.
- Rewriting historical release versions or tags.
- Non-workflow domain perpetual work owned by other epics.
