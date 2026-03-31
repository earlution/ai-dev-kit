---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-03-31 (**RW** **E6:S07:T101** v0.6.7.101+38 — UKW kanban sync + T101 **Task ID:** header)
**Version:** v0.6.7.101+38 *(from `src/fynd_deals/version.py` at board refresh)*

**Note:** Epics 1, 3, 7, 8, 10, 11 are COMPLETE. Epics 2, 4, 5, 6, 24 are IN PROGRESS. Epics 21 are TODO. **MoSCOW lists tasks only (not stories)**—story-level rows hide real progress.

> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)  
> **For completed tasks, see:** [`kanban-completed.md`](kanban-completed.md)  
> **For FR/BR/UXR prioritization, see:** [`fr-br-uxr-board.md`](fr-br-uxr-board.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

- **E6:S06:T57** – **BR-039:** Cascade whitelist / security prompt usability (**vendor**; repo: escalation + evidence + re-verification) - TODO (CRITICAL) - [Task](epics/Epic-6/Story-006-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md) | [Story](epics/Epic-6/Story-006-feature-requests.md) | [BR-039](fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md)

### Should Have (S) - Important Tasks

- **E6:S07:T109** – **BR-059:** UKW MoSCOW must enumerate **all** open tasks per in-progress story (or **Won’t** + reason) — TODO (HIGH) - [Task](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T109-br059-ukw-moscow-full-story-task-coverage.md) | [Story](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md) | [BR-059](fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md)

- **E7:S06:T03** – Kanban documentation consistency - TODO (HIGH priority, E9↔E18 renumbering fallout, cross-references, structure) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T03-kanban-documentation-consistency.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T04** – Recent commit review - TODO (MEDIUM priority, Last ~15 commits: RW compliance, batch scope, quality) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T04-recent-commit-review.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T05** – Workflow script integrity - TODO (MEDIUM priority, ukw_syntax_parser, task_inference, orchestrator changes) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T05-workflow-script-integrity.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T06** – FR/BR/UXR intake documentation quality - TODO (MEDIUM priority, Batch intake doc updates consistency) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T06-fr-br-uxr-intake-documentation-quality.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T07** – General documentation and cross-reference integrity - TODO (MEDIUM priority, README, links, structure) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T07-general-documentation-integrity.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T08** – Dependency and tooling audit - TODO (MEDIUM priority, pyproject.toml, requirements, tests, CI/CD, build scripts) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **E7:S06:T09** – Config and git state validation - TODO (MEDIUM priority, rw-config vs paths, git state, .cursorrules alignment) - [Task Document](epics/Epic-7/Story-006-post-windsurf-project-review/T09-config-and-git-state-validation.md) | [Story](epics/Epic-7/Story-006-post-windsurf-project-review.md)

- **FR-060** – RW Task Argument Requirement - IN PROGRESS (HIGH priority) — **Kanban hygiene:** task doc [`T37-rw-task-argument-requirement.md`](epics/Epic-5/Story-001-fr-repo/T37-rw-task-argument-requirement.md) claims **E5:S01:T37**, but checklist **T37** is **FR-037** ✅ COMPLETE ([`T37-kanban-policy-…`](epics/Epic-5/Story-001-fr-repo/T37-kanban-policy-task-prioritisation-queue-stack.md)); renumber FR-060 task off **T37** before releases assert that ID. — [FR-060](fr-br/FR-060-rw-task-argument-requirement.md) | [Story](epics/Epic-5/Story-001-fr-repo.md)

- **E5:S01:T38** – RW Step 7 Scoped Kanban Sync (UKW Mode) - TODO (HIGH priority) - [Task Document](epics/Epic-5/Story-001-fr-repo/T38-rw-step-7-scoped-kanban-sync-ukw-mode.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [FR-038](fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md)

- **E5:S01:T39** – AI Dev Kit Project Review and Legacy Clean-Up - IN PROGRESS (v0.5.1.39+3 – SoT refs, scripts, adopter docs) - [Task Document](epics/Epic-5/Story-001-fr-repo/T39-ai-dev-kit-project-review-and-legacy-cleanup.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [FR-039](fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)

- **E5:S01:T43** – UKW Gap Discovery (TODO Tasks and Unfiled FR/BR) - TODO (HIGH priority) - [Task Document](epics/Epic-5/Story-001-fr-repo/T43-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)

- **E5:S01:T45** – ADR-002 Task-Touch Derived Mapping (Kanban → SemVer) - TODO (HIGH priority) - [Task Document](epics/Epic-5/Story-001-fr-repo/T45-adr-002-task-touch-derived-mapping.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [FR-045](fr-br/FR-045-adr-002-task-touch-derived-mapping.md)

- **E5:S01:T46** – Release Workflow Uses SemVer Tag When `task_touch` Enabled - TODO (HIGH priority) - [Task Document](epics/Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [FR-046](fr-br/FR-046-rw-semver-tag-task-touch-mode.md)

- **E5:S01:T49** – Enhanced kanban-completed.md (Timestamps / Recent Tasks) - TODO (HIGH priority) - [Task Document](epics/Epic-5/Story-001-fr-repo/T49-enhanced-kanban-completed-with-timestamps-and-recent-tasks.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [FR-049](fr-br/FR-049-enhanced-kanban-completed-with-timestamps-and-recent-tasks.md)

- **E5:S01:T62** – GitHub Release Installation Experience - TODO (HIGH priority) - [Task Document](epics/Epic-5/Story-001-fr-repo/T62-github-release-installation-experience.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [FR-062](fr-br/FR-062-github-release-installation-experience.md)

### Could Have (C) - Nice-to-Have Tasks

- **E5:S01:T35** – Task Template Cross-Wiring Section - TODO (MEDIUM priority) - [Task Document](epics/Epic-5/Story-001-fr-repo/T35-task-template-cross-wiring-section.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [FR-035](fr-br/FR-035-task-template-cross-wiring-section.md)

- **E5:S01:T44** – RW Temporary Execution Log for Recovery and Forensics - TODO (MEDIUM priority) - [Task Document](epics/Epic-5/Story-001-fr-repo/T44-rw-temporary-execution-log-for-recovery-and-forensics.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [FR-044](fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md)

- **FR-061** – README Workflow Section - TODO (MEDIUM priority) — **Kanban hygiene:** task doc [`T38-rw-readme-workflow-section.md`](epics/Epic-5/Story-001-fr-repo/T38-rw-readme-workflow-section.md) claims **E5:S01:T38**, but checklist **T38** is **FR-038** (scoped kanban); **FR-061** not on story checklist — renumber off **T38**. — [FR-061](fr-br/FR-061-readme-workflow-section.md) | [Story](epics/Epic-5/Story-001-fr-repo.md)

- **E5:S01:T31** – Multi-Agent Coordination Feasibility Investigation - TODO (C priority) - [Task Document](epics/Epic-5/Story-001-fr-repo/T31-multi-agent-coordination-feasibility-investigation.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [FR-031](fr-br/FR-031-multi-agent-coordination-feasibility-investigation.md)

- **E2:S11:T12** – GitHub Actions Workflow Bug Resolution - IN PROGRESS (LOW priority) - [Task Document](epics/Epic-2/Story-011-intake-workflow-automation/T12-github-actions-workflow-bug-resolution.md) | [Story](epics/Epic-2/Story-011-intake-workflow-automation.md) | [BR-053](fr-br/BR-053-github-actions-workflow-push-trigger-bug.md)

### Ongoing (O) - Perpetual Tasks

- **E6:S06:T02** – Fix Release Workflow Micromanagement Issues - IN PROGRESS (CRITICAL priority, User pain with tool discovery, pattern matching; root cause tracked under **BR-039** / **E6:S06:T57**) - [Task Document](epics/Epic-6/Story-006-feature-requests/T02-fix-release-workflow-micromanagement-issues.md) | [Story](epics/Epic-6/Story-006-feature-requests.md) | [BR-038](fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)

- **E6:S07:T101** – Update Kanban Workflow (UKW) - Perpetual Task - IN PROGRESS (v0.6.7.101+38, Last updated: 2026-03-31) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T101-update-kanban-workflow-ukw.md) | [Story](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)

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
