---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-01-03  
**Version:** v0.6.2.5+1

**Note:** Epics 1, 3 are COMPLETE ✅. Epics 2, 4, 5, 6, 7, 9, 21 are IN PROGRESS.

---

## Overview

This board tracks all work on the `ai-dev-kit` repository and the **Head First AI-Assisted Development** book project.

**Structure:** All Kanban documentation lives under `docs/project-management/kanban/`:
- Epic overviews: `epics/Epic-X/Epic-X.md`
- Story documents: `epics/Epic-X/Story-XXX-*.md`
- Board views: `_index.md` (quick view) and this file (detailed view)

**Parent-Child Relationship:**
This Kanban board serves as the **parent document** to Story documents, similar to how Story documents are parents of Task documents:
- **Board → Story:** This board links to and tracks all Story documents
- **Story → Task:** Story documents link to and track all Task documents
- This creates a clear hierarchy: Board (parent) → Story (child) → Task (grandchild)

---

## MoSCoW Prioritized In-Progress Tasks

This section shows all in-progress tasks (status: IN PROGRESS or TODO) organized by MoSCoW priority and ordered chronologically (most recently updated first).

### Must Have (M) - Critical Tasks

*Critical in-progress tasks that must be completed.*

*No critical tasks in progress at this time.*

### Should Have (S) - Important Tasks

*Important in-progress tasks that should be completed.*

*No tasks in this section at this time.*

### Could Have (C) - Nice-to-Have Tasks

*Nice-to-have in-progress tasks that could be completed.*

*No nice-to-have tasks in progress at this time.*

- **E7:S01:T02** – Code review standards and processes  
  *Last updated: Unknown* | [Story](epics/Epic-7/Story-001-codebase-maintenance-tasks.md)

- **E7:S01:T03** – Code quality metrics and monitoring  
  *Last updated: Unknown* | [Story](epics/Epic-7/Story-001-codebase-maintenance-tasks.md)

- **E7:S01:T04** – Maintenance automation and tooling  
  *Last updated: Unknown* | [Story](epics/Epic-7/Story-001-codebase-maintenance-tasks.md)

### Won't Have (W) - Deferred Tasks

*Tasks that are deferred or not being done at this time.*

*No deferred tasks at this time.*

---

## Epics

### Epic 1: AI Dev Kit Core

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Last Updated:** v0.1.3.6+1

**Stories:**
- [x] **E1:S01 – Dev Kit Versioning & RW Behaviour** - COMPLETE ✅ (v0.1.1.1+1, E2:S01:T02, E2:S01:T03)
  - Story: [`epics/Epic-1/Story-001-ai-dev-kit-kanban-and-versioning.md`](epics/Epic-1/Story-001-ai-dev-kit-kanban-and-versioning.md)
- [x] **E1:S02 – Package & Repo Architecture** - COMPLETE ✅ (v0.1.2.5+1)
  - Story: [`epics/Epic-1/Story-002-package-and-repo-architecture.md`](epics/Epic-1/Story-002-package-and-repo-architecture.md)
- [x] **E1:S03 – Core KB Structure for Dev Kit** - COMPLETE ✅ (v0.1.3.6+1)
  - Story: [`epics/Epic-1/Story-003-core-kb-structure-for-dev-kit.md`](epics/Epic-1/Story-003-core-kb-structure-for-dev-kit.md)

**Epic Doc:** [`epics/Epic-1/Epic-1.md`](epics/Epic-1/Epic-1.md)

---

### Epic 2: Workflow Management Framework

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Last Updated:** v0.2.11.11+1

**Stories:**
- [x] **E2:S01 – RW Agent Execution & Docs** - COMPLETE ✅ (v0.2.1.6+4)
  - Story: [`epics/Epic-2/Story-001-rw-agent-execution-and-docs.md`](epics/Epic-2/Story-001-rw-agent-execution-and-docs.md)
- [x] **E2:S02 – PDCA Integration into Release Workflow** - COMPLETE ✅ (v0.2.2.8+1)
  - Story: [`epics/Epic-2/Story-002-pdca-integration-into-release-workflow.md`](epics/Epic-2/Story-002-pdca-integration-into-release-workflow.md)
- [x] **E2:S03 – Additional Workflows & Examples** - COMPLETE ✅ (v0.2.3.6+1)
  - Story: [`epics/Epic-2/Story-003-additional-workflows-and-examples.md`](epics/Epic-2/Story-003-additional-workflows-and-examples.md)
- [x] **E2:S04 – RW Installer & Plug-and-Play Adoption** - COMPLETE ✅ (v0.2.4.9+3)
  - Story: [`epics/Epic-2/Story-004-rw-installer-and-plug-and-play-adoption.md`](epics/Epic-2/Story-004-rw-installer-and-plug-and-play-adoption.md)
- [x] **E2:S05 – Post-Implementation Review (PIR) Workflow** - COMPLETE ✅ (v0.2.5.15+1)
  - Story: [`epics/Epic-2/Story-005-post-implementation-review-workflow.md`](epics/Epic-2/Story-005-post-implementation-review-workflow.md)
- [x] **E2:S06 – Package Uninstall and Recovery** - COMPLETE ✅ (v0.2.6.3+1)
  - Story: [`epics/Epic-2/Story-006-package-uninstall-and-recovery.md`](epics/Epic-2/Story-006-package-uninstall-and-recovery.md)
- [x] **E2:S07 – Trigger-Aware Release Workflow** - COMPLETE ✅ (v0.2.7.8+1)
  - Story: [`epics/Epic-2/Story-007-trigger-aware-release-workflow.md`](epics/Epic-2/Story-007-trigger-aware-release-workflow.md)
- [x] **E2:S08 – Harden Release Workflow Reliability** - COMPLETE ✅ (v0.2.8.7+1)
  - Story: [`epics/Epic-2/Story-008-harden-release-workflow-reliability.md`](epics/Epic-2/Story-008-harden-release-workflow-reliability.md)
- [x] **E2:S09 – Kanban Granularity & Discrete Task Docs (RW Integration)** - COMPLETE ✅ (v0.2.9.6+1)
  - Story: [`epics/Epic-2/Story-009-kanban-granularity-discrete-task-docs.md`](epics/Epic-2/Story-009-kanban-granularity-discrete-task-docs.md)
- [x] **E2:S10 – Versioning Policy Hardening — Doc-Init Build (+0)** - COMPLETE ✅ (v0.2.10.7+1)
  - Story: [`epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md`](epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md)
- [x] **E2:S11 – Intake Workflow Automation** - COMPLETE ✅ (v0.2.11.11+1)
  - Story: [`epics/Epic-2/Story-011-intake-workflow-automation.md`](epics/Epic-2/Story-011-intake-workflow-automation.md)

**Epic Doc:** [`epics/Epic-2/Epic-2.md`](epics/Epic-2/Epic-2.md)

---

### Epic 3: Numbering & Versioning Framework

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Last Updated:** v0.3.3.6+1

**Stories:**
- [x] **E3:S01 – Dev Kit Alignment with Versioning Framework** - COMPLETE ✅ (v0.3.1.6+1)
  - Story: [`epics/Epic-3/Story-001-dev-kit-alignment-with-versioning-framework.md`](epics/Epic-3/Story-001-dev-kit-alignment-with-versioning-framework.md)
- [x] **E3:S02 – Versioning Cookbook & Examples** - COMPLETE ✅ (v0.3.2.5+3)
  - Story: [`epics/Epic-3/Story-002-versioning-cookbook-and-examples.md`](epics/Epic-3/Story-002-versioning-cookbook-and-examples.md)
- [x] **E3:S03 – Versioning Integration with Kanban & RW** - COMPLETE ✅ (v0.3.3.6+1)
  - Story: [`epics/Epic-3/Story-003-versioning-integration-with-kanban-and-rw.md`](epics/Epic-3/Story-003-versioning-integration-with-kanban-and-rw.md)

**Epic Doc:** [`epics/Epic-3/Epic-3.md`](epics/Epic-3/Epic-3.md)

---

### Epic 4: Kanban Framework

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** v0.4.13.6+2

**Note:** Epic 4 has incomplete stories (S06, S10, S12), so Epic status is IN PROGRESS. S10 is IN PROGRESS (not TODO).

**Stories:**
- [x] **E4:S01 – Dev Kit Kanban Implementation** - COMPLETE ✅ (v0.4.1.1+6)
  - Story: [`epics/Epic-4/Story-001-dev-kit-kanban-implementation.md`](epics/Epic-4/Story-001-dev-kit-kanban-implementation.md)
- [x] **E4:S02 – FR/BR Intake to Tasks** - COMPLETE ✅ (v0.4.2.6+3)
  - Story: [`epics/Epic-4/Story-002-fr-br-intake-to-tasks.md`](epics/Epic-4/Story-002-fr-br-intake-to-tasks.md)
- [x] **E4:S03 – Kanban + Versioning + RW Integration** - COMPLETE ✅ (v0.4.3.7+1)
  - Story: [`epics/Epic-4/Story-003-kanban-versioning-rw-integration.md`](epics/Epic-4/Story-003-kanban-versioning-rw-integration.md)
- [x] **E4:S04 – Kanban Structure Refactoring** - COMPLETE ✅ (v0.4.4.1+1)
  - Story: [`epics/Epic-4/Story-004-kanban-structure-refactoring.md`](epics/Epic-4/Story-004-kanban-structure-refactoring.md)
- [x] **E4:S05 – Canonical Epics for Kanban Framework** - COMPLETE ✅ (v0.4.5.1+1)
  - Story: [`epics/Epic-4/Story-005-canonical-epics-for-kanban-framework.md`](epics/Epic-4/Story-005-canonical-epics-for-kanban-framework.md)
- [x] **E4:S06 – Comprehensive Canonical Epics/Stories/Tasks Template System** - ✅ COMPLETE (v0.4.6.8+1 – All tasks complete)
  - Story: [`epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md`](epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md)
  - Tasks: T00 ✅ COMPLETE, T01-T02 ✅ COMPLETE, T03 ✅ COMPLETE, T04 ✅ COMPLETE, T05 ✅ COMPLETE, T06 ✅ COMPLETE, T07 ✅ COMPLETE, T08 ✅ COMPLETE, T09 ✅ COMPLETE, T10 ✅ COMPLETE
- [x] **E4:S07 – Migration Support and Installation Modes** - COMPLETE ✅ (v0.4.7.3+1)
  - Story: [`epics/Epic-4/Story-007-migration-support-and-installation-modes.md`](epics/Epic-4/Story-007-migration-support-and-installation-modes.md)
- [x] **E4:S08 – Intelligent Epic Matching and Canonical Structure Adoption** - COMPLETE ✅ (v0.4.8.6+1)
  - Story: [`epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption.md`](epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption.md)
- [x] **E4:S09 – Bug Fixes and Agentic Intelligence Implementation** - COMPLETE ✅ (v0.4.9.1+1)
  - Story: [`epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md`](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md)
- [ ] **E4:S10 – Agentic Kanban Task Creation from FR/BR** - IN PROGRESS (v0.4.10.7+0)
  - Story: [`epics/Epic-4/Story-010-agentic-kanban-task-creation-from-fr-br.md`](epics/Epic-4/Story-010-agentic-kanban-task-creation-from-fr-br.md)
  - Tasks: T00 ✅ COMPLETE, T01-T07 IN PROGRESS (FR-012: Agentic workflow for automatic task creation from FRs/BRs)
- [x] **E4:S11 – Kanban Granularity & Discrete Task Docs** - COMPLETE ✅ (v0.4.11.0+0)
  - Story: [`epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs.md`](epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs.md)
  - Tasks: T00 ✅ COMPLETE, T01 ✅ COMPLETE (v0.4.11.1+1), T02 ✅ COMPLETE (v0.4.11.2+2), T03 ✅ COMPLETE (v0.4.11.3+1), T04 ✅ COMPLETE (v0.4.11.4+1), T05 ✅ COMPLETE (v0.4.11.5+0), T06 ✅ COMPLETE (v0.4.11.6+2)
- [ ] **E4:S12 – FR/BR/UXR Repository Stories (S00 Pattern)** - TODO (v0.4.12.0+0)
  - Story: [`epics/Epic-4/Story-012-fr-br-uxr-repository-stories.md`](epics/Epic-4/Story-012-fr-br-uxr-repository-stories.md)
  - Tasks: T00 ✅ COMPLETE, T01-T10 TODO (FR-021: Repository pattern for FR/BR/UXR with S00 stories)
- [x] **E4:S13 – Kanban Board Enhancement - MoSCoW Prioritized Task View** - COMPLETE ✅ (v0.4.13.6+2)
  - Story: [`epics/Epic-4/Story-013-kanban-board-moscow-prioritized-task-view.md`](epics/Epic-4/Story-013-kanban-board-moscow-prioritized-task-view.md)
  - Tasks: T01 ✅ COMPLETE (v0.4.13.1+1), T02 ✅ COMPLETE (v0.4.13.2+1), T03 ✅ COMPLETE (v0.4.13.3+1), T04 ✅ COMPLETE (v0.4.13.4+3), T05 ✅ COMPLETE (v0.4.13.5+1), T06 ✅ COMPLETE (v0.4.13.6+1)

**Epic Doc:** [`epics/Epic-4/Epic-4.md`](epics/Epic-4/Epic-4.md)

---

### Epic 21: Internationalization and Localization

**Status:** TODO  
**Priority:** MEDIUM  
**Last Updated:** v0.21.0.0+0

**Stories:**
- [ ] **E21:S00 – Language Selection at Setup (UK/US English)** - TODO (v0.21.0.0+0)
  - Story: [`epics/Epic-21/Story-000-language-selection-at-setup.md`](epics/Epic-21/Story-000-language-selection-at-setup.md)
  - Tasks: T01-T07 TODO
- [ ] **E21:S01 – Internationalization Infrastructure** - TODO (v0.21.0.0+0)
  - Story: [`epics/Epic-21/Story-001-internationalization-infrastructure.md`](epics/Epic-21/Story-001-internationalization-infrastructure.md)
  - Tasks: T01-T07 TODO
- [ ] **E21:S02 – Translation and Localization** - TODO (v0.21.0.0+0)
  - Story: [`epics/Epic-21/Story-002-translation-and-localization.md`](epics/Epic-21/Story-002-translation-and-localization.md)
  - Tasks: T01-T07 TODO
- [ ] **E21:S03 – Cultural Adaptation** - TODO (v0.21.0.0+0)
  - Story: [`epics/Epic-21/Story-003-cultural-adaptation.md`](epics/Epic-21/Story-003-cultural-adaptation.md)
  - Tasks: T01-T07 TODO

**Epic Doc:** [`epics/Epic-21/Epic-21.md`](epics/Epic-21/Epic-21.md)

---

### Epic 5: Documentation Management and Maintenance

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** v0.5.2.2+1

**Stories:**
- [x] **E5:S01 – Documentation Maintenance Framework** - COMPLETE ✅ (v0.5.1.4+2)
  - Story: [`epics/Epic-5/Story-001-documentation-maintenance-framework.md`](epics/Epic-5/Story-001-documentation-maintenance-framework.md)
- [ ] **E5:S02 – Documentation Quality Assurance** - IN PROGRESS (v0.5.2.2+1)
  - Tasks: T01 ✅, T02 ✅, T03 TODO
  - Story: [`epics/Epic-5/Story-002-documentation-quality-assurance.md`](epics/Epic-5/Story-002-documentation-quality-assurance.md)
- [ ] **E5:S03 – Documentation Automation** - TODO
  - Story: [`epics/Epic-5/Story-003-documentation-automation.md`](epics/Epic-5/Story-003-documentation-automation.md)

**Epic Doc:** [`epics/Epic-5/Epic-5.md`](epics/Epic-5/Epic-5.md)

---

### Epic 6: Framework Management and Maintenance

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-01-03  
**Version:** v0.6.6.8+5

**Stories:**
- [x] **E6:S01 – Framework Version Management** - ✅ COMPLETE (v0.6.1.5+1 – All tasks complete: Framework versioning strategy, release processes, compatibility tracking, dependency architecture, and version tagging strategy)
  - Story: [`epics/Epic-6/Story-001-framework-version-management.md`](epics/Epic-6/Story-001-framework-version-management.md)
  - Tasks: T01 ✅ COMPLETE (v0.6.1.1+1), T02 ✅ COMPLETE (v0.6.1.2+1), T03 ✅ COMPLETE (v0.6.1.3+1), T04 ✅ COMPLETE (v0.6.1.1+2), T05 ✅ COMPLETE (v0.6.1.5+1)
- [ ] **E6:S02 – Framework Update and Migration** - IN PROGRESS (v0.6.2.5+1 – T01, T02, T05 complete: Framework update procedures, migration guide, and auto-update mechanisms)
  - Story: [`epics/Epic-6/Story-002-framework-update-and-migration.md`](epics/Epic-6/Story-002-framework-update-and-migration.md)
  - Tasks: T01 ✅ COMPLETE (v0.6.2.1+1 - Framework update procedures), T02 ✅ COMPLETE (v0.6.2.2+1 - Framework migration guide), T03 TODO, T05 ✅ COMPLETE (v0.6.2.5+1 - Framework auto-update mechanisms), T04 SUPERSEDED (by E6:S07)
- [ ] **E6:S03 – Framework Health Monitoring** - TODO
  - Story: [`epics/Epic-6/Story-003-framework-health-monitoring.md`](epics/Epic-6/Story-003-framework-health-monitoring.md)
  - Tasks: T01-T03 TODO
- [ ] **E6:S04 – Bug Reports** - IN PROGRESS
  - Story: [`epics/Epic-6/Story-004-bug-reports.md`](epics/Epic-6/Story-004-bug-reports.md)
- [ ] **E6:S05 – Feature Requests** - TODO
  - Story: [`epics/Epic-6/Story-005-feature-requests.md`](epics/Epic-6/Story-005-feature-requests.md)
- [ ] **E6:S06 – ADK Implementation Analysis and Package Management** - IN PROGRESS (v0.6.6.9+1)
  - Story: [`epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management.md`](epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management.md)
- [x] **E6:S07 – ai-dev-kit CLI Tool** - COMPLETE ✅ (v0.6.7.13+1 – All 14 tasks T00-T13 complete: Architecture, commands, backend abstraction, all four backends, configuration management, error handling, migration utilities, remove command, documentation, testing, validation, PyPI packaging)
  - Story: [`epics/Epic-6/Story-007-ai-dev-kit-cli-tool.md`](epics/Epic-6/Story-007-ai-dev-kit-cli-tool.md)
  - Tasks: T00 ✅ COMPLETE, T01-T13 ✅ COMPLETE (CLI tool implementation: architecture, commands, backends, config, migration, testing, packaging - ALL COMPLETE)
  - **Feature Request:** [FR-030](fr-br/FR-030-ai-dev-kit-cli-tool.md)

**Epic Doc:** [`epics/Epic-6/Epic-6.md`](epics/Epic-6/Epic-6.md)

---

### Epic 7: Codebase Maintenance and Review

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** v0.7.5.0+0

**Stories:**
- [ ] **E7:S01 – Codebase Maintenance Tasks** - IN PROGRESS (v0.7.1.1+1)
  - Story: [`epics/Epic-7/Story-001-codebase-maintenance-tasks.md`](epics/Epic-7/Story-001-codebase-maintenance-tasks.md)
  - Tasks: T01 PERPETUAL, T02-T04 TODO
- [ ] **E7:S02 – Code Review Standards and Processes** - TODO
  - Story: [`epics/Epic-7/Story-002-code-review-standards-and-processes.md`](epics/Epic-7/Story-002-code-review-standards-and-processes.md)
- [ ] **E7:S03 – Code Quality Metrics and Monitoring** - TODO
  - Story: [`epics/Epic-7/Story-003-code-quality-metrics-and-monitoring.md`](epics/Epic-7/Story-003-code-quality-metrics-and-monitoring.md)
- [ ] **E7:S04 – Maintenance Automation and Tooling** - TODO
  - Story: [`epics/Epic-7/Story-004-maintenance-automation-and-tooling.md`](epics/Epic-7/Story-004-maintenance-automation-and-tooling.md)
- [ ] **E7:S05 – Migration UXR – Pre-Existing Kanban Structures** - TODO (v0.7.5.0+0)
  - Story: [`epics/Epic-7/Story-005-migration-uxr-research.md`](epics/Epic-7/Story-005-migration-uxr-research.md)

**Epic Doc:** [`epics/Epic-7/Epic-7.md`](epics/Epic-7/Epic-7.md)

---

### Epic 8: Tooling & Automation

**Status:** TODO  
**Priority:** HIGH  
**Last Updated:** v0.8.1.1+1

**Stories:**
- [ ] **E8:S01 – Code Generators** - TODO
  - Story: [`epics/Epic-8/Story-001-code-generators.md`](epics/Epic-8/Story-001-code-generators.md)
- [ ] **E8:S02 – Additional Validators** - TODO
  - Story: [`epics/Epic-8/Story-002-additional-validators.md`](epics/Epic-8/Story-002-additional-validators.md)
- [ ] **E8:S03 – Automation Scripts** - TODO
  - Story: [`epics/Epic-8/Story-003-automation-scripts.md`](epics/Epic-8/Story-003-automation-scripts.md)

**Epic Doc:** [`epics/Epic-8/Epic-8.md`](epics/Epic-8/Epic-8.md)

---

### Epic 24: Book Related Work (Project-Specific)

**Status:** IN PROGRESS  
**Priority:** MEDIUM  
**Last Updated:** 2025-12-18 (Epic renamed from Epic 9 to Epic 24 - project-specific range)

**Note:** This is a **project-specific epic** (Epic 24+). Canonical Epic 9 is "User Management and Authentication" (see templates).

**Stories:**
- [ ] **E24:S01 – Book Content Development** - IN PROGRESS
  - Story: [`epics/Epic-24/Story-001-book-content-development.md`](epics/Epic-24/Story-001-book-content-development.md)
- [ ] **E24:S02 – Book Integration with Dev-Kit** - TODO
  - Story: [`epics/Epic-24/Story-002-book-integration-with-dev-kit.md`](epics/Epic-24/Story-002-book-integration-with-dev-kit.md)
- [ ] **E24:S03 – Book Publishing Support** - TODO
  - Story: [`epics/Epic-24/Story-003-book-publishing-support.md`](epics/Epic-24/Story-003-book-publishing-support.md)

**Epic Doc:** [`epics/Epic-24/Epic-24.md`](epics/Epic-24/Epic-24.md)

---

## Quick Reference

- **Board Quick View:** [`_index.md`](_index.md)
- **Kanban Policy:** `docs/project-management/rituals/policy/kanban-governance-policy.md`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`

