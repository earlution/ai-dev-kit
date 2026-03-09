---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-03-09 (RW: E4:S18:T01+2)
**Version:** v0.4.18.1+2

**Note:** Epics 1, 3, 7 are COMPLETE ✅. Epics 2, 4, 5, 6, 24 are IN PROGRESS. Epics 8, 10, 11, 21 are TODO.

> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)  
> **For completed tasks, see:** [`kanban-completed.md`](kanban-completed.md)  
> **For FR/BR/UXR prioritization, see:** [`fr-br-uxr-board.md`](fr-br-uxr-board.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

- **E6:S01:T37** – Kanban Install Consumer Board Contamination – Detector + Remediation - IN PROGRESS (CRITICAL, ~85% complete - technical implementation finished, all core components implemented and tested; Release Workflow blocked by tooling friction; core contamination problem solved, remaining work is procedural) - [Task Document](epics/Epic-6/Story-001-br-repo/T37-kanban-install-consumer-board-contamination.md) | [BR-037](../fr-br/BR-037-kanban-install-consumer-board-contamination.md)
- **E6:S07:T104** – Release Automation Audit - TODO (CRITICAL, Audit RW/PVW validators, GitHub Actions, badge workflow, GitHub Release script, and required secrets for task-touch SemVer compatibility) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T104-release-automation-audit.md)
- **E6:S07:T105** – Release Runbook Creation - TODO (CRITICAL, Create comprehensive runbook with exact commands respecting "no manual commit/push" policy) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T105-release-runbook-creation.md)
- **E5:S01:T45** – ADR-002 Task-Touch Derived Mapping (Kanban → SemVer) - TODO (HIGH priority, SemVer mapping for task_touch and Kanban integration; docs-only FR repo anchor, implementation in versioning framework stories) - [Task Document](epics/Epic-5/Story-001-fr-repo/T45-adr-002-task-touch-derived-mapping.md) | [FR-045](../fr-br/FR-045-adr-002-task-touch-derived-mapping.md)
- **E5:S01:T47** – Install Logging for Framework Dependencies - TODO (HIGH priority, FR repo anchor; enables detailed post-install analysis and debugging for all frameworks) - [Task Document](epics/Epic-5/Story-001-fr-repo/T47-install-logging-for-framework-dependencies.md) | [FR-047](../fr-br/FR-047-install-logging-for-framework-dependencies.md)

### Should Have (S) - Important Tasks

- **E5:S01:T46** – Release Workflow Uses SemVer Tag When task_touch Enabled - TODO (HIGH priority, RW tagging behaviour when task_touch is enabled; FR-046 implementation complete) - [Task Document](epics/Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md) | [FR-046](../fr-br/FR-046-rw-semver-tag-task-touch-mode.md)
- **E6:S07:T106** – Windsurf Migration: .cursorrules to Workflow Equivalents - TODO (HIGH priority, Map key policies/workflows to Windsurf/Cascade equivalents including system instructions and developer workflows) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T106-windsurf-migration-cursorrules-to-workflows.md)
- **E4:S11:T07** – Migrate Embedded Tasks to Discrete Task Documents - TODO (HIGH priority, Last updated: 2025-12-18) - [Task Document](epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs/T07-migrate-embedded-tasks-to-discrete-documents.md)
- **E6:S07:T18** – Tool-Agnostic Workflow Step Tracking + Persisted Run Logs (Cursor TODO Migration) - TODO (HIGH priority) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T18-tool-agnostic-workflow-step-tracking-and-runlogs.md)
- **E1:S06:T01** – Set up BYOB badges for private repository - IN PROGRESS (HIGH priority, Last updated: 2025-12-18) - [Task Document](epics/Epic-1/Story-006-repository-ci-cd-setup/T01-setup-byob-badges-for-private-repository.md)
- **E8:S04:T01** – Tooling & Automation expectations baseline - TODO (HIGH priority) - [Story](epics/Epic-8/Story-004-tooling-automation-package-implementation-review.md)
- **E10:S01:T01** – Doc lifecycle expectations baseline - TODO (HIGH priority) - [Story](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md)
- **E11:S01:T01** – Debug path expectations baseline - TODO (HIGH priority) - [Story](epics/Epic-11/Story-001-debug-path-package-implementation-review.md)

- **E6:S06:T01** – FR/BR/UXR Prioritization Board Implementation - ✅ COMPLETED (HIGH priority, Create prioritization board for FRs, BRs, and UXRs with identical structure to Kanban board) - [Task Document](epics/Epic-6/Story-006-feature-requests/T01-fr-br-uxr-prioritization-board.md) | [FR-051](fr-br/FR-051-fr-br-uxr-prioritization-board.md) ✅ *IMPLEMENTATION COMPLETE*

### Could Have (C) - Nice-to-Have Tasks

- **E5:S01:T35** – Task Template Cross-Wiring Section - TODO (MEDIUM priority) - [Task Document](epics/Epic-5/Story-001-fr-repo/T35-task-template-cross-wiring-section.md) | [FR-035](../fr-br/FR-035-task-template-cross-wiring-section.md)
- **E6:S07:T107** – Workflows Directory Structure Reorganization - COMPLETED (MEDIUM priority, Reorganized workflows into named subdirectories for better organization and maintainability) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T107-workflows-directory-structure-reorganization.md) | [FR-050](../fr-br/FR-050-workflows-directory-structure-reorganization.md)
- **E5:S01:T31** – Multi-Agent Coordination Feasibility Investigation - TODO (C priority) - [Task Document](epics/Epic-5/Story-001-fr-repo/T31-multi-agent-coordination-feasibility-investigation.md) | [FR-031](../fr-br/FR-031-multi-agent-coordination-feasibility-investigation.md)
- **E5:S03:T01-T03** – Documentation Automation - TODO (MEDIUM priority story) - [Story](epics/Epic-5/Story-003-documentation-automation.md)
  - T01: Create automated documentation update scripts - TODO
  - T02: Implement documentation synchronization workflows - TODO
  - T03: Build documentation change detection and notification - TODO
- **E8:S03:T01-T03** – Automation Scripts - TODO (MEDIUM priority story) - [Story](epics/Epic-8/Story-003-automation-scripts.md)
  - T01: Create automation framework - TODO
  - T02: Create book-specific examples - TODO
  - T03: Establish integration patterns - TODO
- **E24:S01:T01-T04** – Book Content Development - TODO (MEDIUM priority story, IN PROGRESS) - [Story](epics/Epic-24/Story-001-book-content-development.md)
  - T01: Create book chapter structure - TODO
  - T02: Develop chapter content - TODO
  - T03: Build examples and exercises - TODO
  - T04: Align PM/Kanban chapter with ai-dev-kit canonical epics - TODO
- **E24:S02:T01-T03** – Book Integration with Dev-Kit - TODO (MEDIUM priority story) - [Story](epics/Epic-24/Story-002-book-integration-with-dev-kit.md)
  - T01: Link book content to frameworks - TODO
  - T02: Create book-specific examples - TODO
  - T03: Establish integration patterns - TODO

### Ongoing (O) - Perpetual Tasks

- **E6:S05** – Bug Reports - IN PROGRESS (Perpetual, HIGH priority epic) - [Story](epics/Epic-6/Story-005-bug-reports.md)
- **E6:S06** – Feature Requests - IN PROGRESS (Perpetual, MEDIUM priority epic) - [Story](epics/Epic-6/Story-006-feature-requests.md)
- **E6:S07:T101** – Update Kanban Workflow (UKW) - Perpetual Task - IN PROGRESS (v0.6.7.101+32, Last updated: 2026-02-22) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T101-update-kanban-workflow-ukw.md) | [Story](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)
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
