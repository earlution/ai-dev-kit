---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-03-30 (RW -k E5:S09:T08 v0.5.9.8+1 — T08 filed; FR-067 follow-ups on Kanban/FR)
**Version:** v0.5.9.8+1 *(from `src/fynd_deals/version.py` at board refresh)*

**Note:** Epics 1, 3, 8, 10, 11 are COMPLETE. Epics 2, 4, 5, 6, 7, 24 are IN PROGRESS. Epics 21 are TODO. **MoSCOW lists tasks only (not stories)**—story-level rows hide real progress.

> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)  
> **For completed tasks, see:** [`kanban-completed.md`](kanban-completed.md)  
> **For FR/BR/UXR prioritization, see:** [`fr-br-uxr-board.md`](fr-br-uxr-board.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

No critical tasks currently in progress

### Should Have (S) - Important Tasks

- **E5:S09:T04** – Navigation, sidebar IA, landing (FR-068) – TODO - [Task](epics/Epic-5/Story-009-docusaurus-documentation-portal/T04-docusaurus-navigation-fr-068.md) | [Story](epics/Epic-5/Story-009-docusaurus-documentation-portal.md) | [FR-068](fr-br/FR-068-docusaurus-navigation-sidebar-and-landing.md)
- **E5:S09:T05** – CI build gate (FR-069) – TODO - [Task](epics/Epic-5/Story-009-docusaurus-documentation-portal/T05-docusaurus-ci-fr-069.md) | [Story](epics/Epic-5/Story-009-docusaurus-documentation-portal.md) | [FR-069](fr-br/FR-069-docusaurus-ci-build-gate.md)
- **E5:S09:T06** – Deployment and hosting (FR-070) – TODO - [Task](epics/Epic-5/Story-009-docusaurus-documentation-portal/T06-docusaurus-deployment-fr-070.md) | [Story](epics/Epic-5/Story-009-docusaurus-documentation-portal.md) | [FR-070](fr-br/FR-070-docusaurus-deployment-and-hosting.md)
- **E5:S09:T07** – Site search (FR-071) – TODO - [Task](epics/Epic-5/Story-009-docusaurus-documentation-portal/T07-docusaurus-search-fr-071.md) | [Story](epics/Epic-5/Story-009-docusaurus-documentation-portal.md) | [FR-071](fr-br/FR-071-docusaurus-site-search.md)

### Could Have (C) - Nice-to-Have Tasks

- **E5:S09:T08** – Strict broken-link checking post–FR-067 (`warn` → `throw`) – TODO - [Task](epics/Epic-5/Story-009-docusaurus-documentation-portal/T08-docusaurus-strict-broken-links-post-fr067.md) | [Story](epics/Epic-5/Story-009-docusaurus-documentation-portal.md) | [FR-067](fr-br/FR-067-docusaurus-production-build-corpus-triage.md) (**FU-1**)

### Ongoing (O) - Perpetual Tasks

- **E6:S06:T02** – Fix Release Workflow Micromanagement Issues - IN PROGRESS (CRITICAL priority, User pain with tool discovery, pattern matching; blocked on Cascade whitelist root cause) - [Task Document](epics/Epic-6/Story-006-feature-requests/T02-fix-release-workflow-micromanagement-issues.md) | [Story](epics/Epic-6/Story-006-feature-requests.md) | [BR-038](fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)

- **E6:S07:T101** – Update Kanban Workflow (UKW) - Perpetual Task - IN PROGRESS (v0.6.7.101+37, Last updated: 2026-03-30 UKW) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T101-update-kanban-workflow-ukw.md) | [Story](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)

- **E6:S07:T102** – Changelog Maintenance Workflow (CMW) - Perpetual Task - IN PROGRESS (v0.6.7.102+6, Last updated: 2026-01-17) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T102-changelog-maintenance-workflow-cmw.md) | [Story](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)

- **E6:S07:T103** – Release Workflow (RW) Maintenance - Perpetual Task - IN PROGRESS (v0.6.7.103+4, Last updated: 2026-02-22) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T103-release-workflow-maintenance-perpetual-task.md) | [Story](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)

- **E7:S01:T05** – Markdown Maintenance (Perpetual Task) - PERPETUAL (v0.7.1.5+2, Last updated: 2026-03-07) - [Task Document](epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | [Story](epics/Epic-7/Story-001-codebase-maintenance-tasks.md)

### Won't Have (W) - Deferred Tasks

- **E21:S00:T01-T07** – Language Selection at Setup (UK/US English) - TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-000-language-selection-at-setup.md)

- **E21:S01:T01-T07** – Internationalization Infrastructure - TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-001-internationalization-infrastructure.md)

- **E21:S02:T01-T07** – Translation and Localization - TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-002-translation-and-localization.md)

- **E21:S03:T01-T07** – Cultural Adaptation - TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-003-cultural-adaptation.md)

- **E24:S03:T01-T03** – Book Publishing Support - TODO (LOW priority story) - [Story](epics/Epic-24/Story-003-book-publishing-support.md)
  - T01: Create publishing workflows - TODO
  - T02: Build publishing tools - TODO
  - T03: Establish publishing processes - TODO

---
