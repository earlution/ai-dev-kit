---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-03-30 (RW E5:S01:T69 — FR-064 shields branch retired)
**Version:** v0.5.1.69+1 *(from `src/fynd_deals/version.py` at board refresh)*

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

No important tasks currently in progress

### Could Have (C) - Nice-to-Have Tasks

- **E2:S11:T12**<sup>*</sup> – GitHub Actions intake (BR-053) – **COMPLETE (workaround, v0.2.11.12+2)** — GHA still fired on `push` under `on: issues` only; intake workflow **unregistered** (`fr-br-intake.yml.DISABLED`); **manual intake** until re-enable validated - [Task](epics/Epic-2/Story-011-intake-workflow-automation/T12-github-actions-workflow-bug-resolution.md) | [Story](epics/Epic-2/Story-011-intake-workflow-automation.md) | [BR-053](fr-br/BR-053-github-actions-workflow-push-trigger-bug.md)

<sup>*</sup> **E2:S11:T12 marker:** Asterisk means closure is a **documented workaround**, not “GitHub fixed the trigger engine.” See BR-053 *Resolution / current status* and T12 *Re-enable procedure*.

### Ongoing (O) - Perpetual Tasks

- **E6:S06:T02** – Fix Release Workflow Micromanagement Issues - IN PROGRESS (CRITICAL priority, User pain with tool discovery, pattern matching; blocked on Cascade whitelist root cause) - [Task Document](epics/Epic-6/Story-006-feature-requests/T02-fix-release-workflow-micromanagement-issues.md) | [Story](epics/Epic-6/Story-006-feature-requests.md) | [BR-038](fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)

- **E6:S07:T101** – Update Kanban Workflow (UKW) - Perpetual Task - IN PROGRESS (v0.6.7.101+37, Last updated: 2026-03-25) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T101-update-kanban-workflow-ukw.md) | [Story](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)

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
