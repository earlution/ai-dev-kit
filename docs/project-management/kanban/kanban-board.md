---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-03-19 (RW: E6:S7:T101)
**Version:** v0.6.7.101+35

**Note:** Epics 1, 3, 7, 8, 10, 11 are COMPLETE. Epics 2, 4, 5, 6, 24 are IN PROGRESS. Epics 21 are TODO. **Board shows tasks (not stories)**—story-level reporting obfuscates actual state.

> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)  
> **For completed tasks, see:** [`kanban-completed.md`](kanban-completed.md)  
> **For FR/BR/UXR prioritization, see:** [`fr-br-uxr-board.md`](fr-br-uxr-board.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

No critical tasks currently in progress

### Should Have (S) - Important Tasks

- **E7:S06:T02** – Version and changelog alignment - TODO (HIGH priority, Reconcile version.py, kanban board, CHANGELOG, branch context) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T02-version-and-changelog-alignment.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T03** – Kanban documentation consistency - TODO (HIGH priority, E9↔E18 renumbering fallout, cross-references, structure) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T03-kanban-documentation-consistency.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T04** – Recent commit review - TODO (MEDIUM priority, Last ~15 commits: RW compliance, batch scope, quality) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T04-recent-commit-review.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T05** – Workflow script integrity - TODO (MEDIUM priority, ukw_syntax_parser, task_inference, orchestrator changes) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T05-workflow-script-integrity.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T06** – FR/BR/UXR intake documentation quality - TODO (MEDIUM priority, Batch intake doc updates consistency) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T06-fr-br-uxr-intake-documentation-quality.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T07** – General documentation and cross-reference integrity - TODO (MEDIUM priority, README, links, structure) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T07-general-documentation-integrity.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T08** – Dependency and tooling audit - TODO (MEDIUM priority, pyproject.toml, requirements, tests, CI/CD, build scripts) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T09** – Config and git state validation - TODO (MEDIUM priority, rw-config vs paths, git state, .cursorrules alignment) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T09-config-and-git-state-validation.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E5:S01:T37** – RW Task Argument Requirement - IN PROGRESS (HIGH priority, Implement FR-060: mandate explicit task arguments for all RW invocations to prevent context inference errors and ensure version schema accuracy) - [Task Document](epics/Epic-5/Story-001-fr-repo/T37-rw-task-argument-requirement.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [FR-060](../../../fr-br/FR-060-rw-task-argument-requirement.md)

- **E5:S01:T38** – README Workflow Section - IN PROGRESS (MEDIUM priority, Add comprehensive Workflow section to project README.md documenting all workflows with principle operations and argument forms) - [Task Document](epics/Epic-5/Story-001-fr-repo/T38-rw-readme-workflow-section.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [FR-061](../../../fr-br/FR-061-readme-workflow-section.md)

### Could Have (C) - Nice-to-Have Tasks

- **E2:S11:T12** – GitHub Actions Workflow Bug Resolution - IN PROGRESS (LOW priority) - [Task Document](epics/Epic-2/Story-011-intake-workflow-automation/T12-github-actions-workflow-bug-resolution.md) | [Story](epics/Epic-2/Story-011-intake-workflow-automation.md) | [BR-053](fr-br/BR-053-github-actions-workflow-push-trigger-bug.md)

### Ongoing (O) - Perpetual Tasks

- **E6:S06:T02** – Fix Release Workflow Micromanagement Issues - IN PROGRESS (CRITICAL priority, User pain with tool discovery, pattern matching; blocked on Cascade whitelist root cause) - [Task Document](epics/Epic-6/Story-006-feature-requests/T02-fix-release-workflow-micromanagement-issues.md) | [Story](epics/Epic-6/Story-006-feature-requests.md) | [BR-038](fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)

- **E6:S06:T56** – RW Ambiguous Task Identifier Typo Risk - TODO (HIGH priority, RW accepts task identifiers without validation; single-digit typo causes wrong attribution) - [Task Document](epics/Epic-6/Story-006-feature-requests/T56-rw-ambiguous-task-identifier-typo-risk.md) | [Story](epics/Epic-6/Story-006-feature-requests.md) | [BR-056](fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md)

- **E6:S07:T101** – Update Kanban Workflow (UKW) - Perpetual Task - IN PROGRESS (v0.6.7.101+35, Last updated: 2026-03-19) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T101-update-kanban-workflow-ukw.md) | [Story](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)

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
