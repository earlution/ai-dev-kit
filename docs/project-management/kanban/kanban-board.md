---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-03-12 (UKW: Post-RW Board Synchronization - All 8 Should Have Tasks Completed)
**Version:** v0.11.1.1+1

**Note:** Epics 1, 3, 7, 8, 10, 11 are COMPLETE ✅. Epics 2, 4, 5, 6, 24 are IN PROGRESS. Epics 21 are TODO.

> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)  
> **For completed tasks, see:** [`kanban-completed.md`](kanban-completed.md)  
> **For FR/BR/UXR prioritization, see:** [`fr-br-uxr-board.md`](fr-br-uxr-board.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

- **E2:S11:T12** – GitHub Actions Workflow Bug Resolution - IN PROGRESS (CRITICAL priority) - [Task Document](epics/Epic-2/Story-011-intake-workflow-automation/T12-github-actions-workflow-bug-resolution.md) | [Story](epics/Epic-2/Story-011-intake-workflow-automation.md) | [BR-053](../fr-br/BR-053-github-actions-workflow-push-trigger-bug.md)

### Should Have (S) - Important Tasks

*No "Should Have" tasks currently in progress - All completed via multi-agent ICW execution*

### Could Have (C) - Nice-to-Have Tasks

- **E5:S01:T35** – Task Template Cross-Wiring Section - TODO (MEDIUM priority) - [Task Document](epics/Epic-5/Story-001-fr-repo/T35-task-template-cross-wiring-section.md) | [FR-035](../fr-br/FR-035-task-template-cross-wiring-section.md)
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

---

### Completed Tasks

- **E5:S01:T47** – Install Logging for Framework Dependencies - COMPLETE (HIGH priority, Comprehensive install logging implementation with CLI integration, JSON/text formats, framework installer integration, install-history command, and full test coverage) - [Task Document](epics/Epic-5/Story-001-fr-repo/T47-install-logging-for-framework-dependencies.md) | [FR-047](../fr-br/FR-047-install-logging-for-framework-dependencies.md)
- **E5:S01:T40** – Implementation Cycle Workflow (ICW) - COMPLETE (HIGH priority, Structured three-phase workflow with specification definition, test design, and implementation planning; complete workflow engine, templates, validation, and comprehensive test suite implemented) - [Task Document](epics/Epic-5/Story-001-fr-repo/T40-implementation-cycle-workflow-icw.md) | [FR-040](../fr-br/FR-040-implementation-cycle-workflow-icw.md)
- **E6:S07:T105** – Release Runbook Creation - COMPLETE (HIGH priority, Comprehensive release procedures with exact commands for both registry and task-touch SemVer modes; supplementary materials include quick reference, checklists, configuration examples, and integration guides) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T105-release-runbook-creation.md) | [Release Runbook](../maintenance/release-runbook.md)
- **E6:S07:T104** – Release Automation Audit - COMPLETE (HIGH priority, Audit and fix release automation for task-touch SemVer compatibility; critical fixes implemented, release automation restored) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T104-release-automation-audit.md) | [Audit Report](docs/implementation-cycles/E6S07T104-release-automation-audit-report.md) | [Remediation Implementation](docs/implementation-cycles/E6S07T104-remediation-implementation.md)
- **E5:S01:T45** – ADR-002 Task-Touch Derived Mapping (Kanban → SemVer) - COMPLETE (HIGH priority, SemVer mapping for task_touch and Kanban integration; docs-only FR repo anchor, implementation in versioning framework stories) - [Task Document](epics/Epic-5/Story-001-fr-repo/T45-adr-002-task-touch-derived-mapping.md) | [FR-045](../fr-br/FR-045-adr-002-task-touch-derived-mapping.md) | [Validation Report](epics/Epic-5/Story-001-fr-repo/E5S01T45-implementation-validation-report.md)
- **E4:S06:T07** – Kanban Template Integration - COMPLETE (HIGH, Integrate with template setup guide and installation workflow) - [Task Document](epics/Epic-4/Story-006-comprehensive-canonical-est-template-system/T07-integrate-with-template-setup-guide-and-installation-workflow.md) | [Validation Report](epics/Epic-4/Story-006-comprehensive-canonical-est-template-system/E4S06T07-integration-validation-report.md)

### Ongoing (O) - Perpetual Tasks

- **E6:S05** – Bug Reports - IN PROGRESS (Perpetual, HIGH priority epic) - [Story](epics/Epic-6/Story-005-bug-reports.md)
- **E6:S06** – Feature Requests - IN PROGRESS (Perpetual, MEDIUM priority epic) - [Story](epics/Epic-6/Story-006-feature-requests.md)
- **E6:S07:T101** – Update Kanban Workflow (UKW) - Perpetual Task - IN PROGRESS (v0.6.7.101+34, Last updated: 2026-03-09) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T101-update-kanban-workflow-ukw.md) | [Story](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)
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
