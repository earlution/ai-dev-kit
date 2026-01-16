---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-01-06  
**Version:** v0.6.6.8+19

**Note:** Epics 1, 3, 7 are COMPLETE ✅. Epics 2, 4, 5, 6, 24 are IN PROGRESS. Epics 8, 21 are TODO.

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

## MoSCOW Prioritized In-Progress Tasks

This section shows all in-progress tasks (status: IN PROGRESS or TODO) organized by MoSCOW priority (M/S/C/O/W) and ordered chronologically (most recently updated first).

**MoSCOW Categories:**
- **M (Must Have):** Critical tasks that must be completed
- **S (Should Have):** Important tasks that should be completed
- **C (Could Have):** Nice-to-have tasks that could be completed
- **O (Ongoing):** Perpetual maintenance tasks that never complete (tracked but don't block other work)
- **W (Won't Have):** Tasks deferred or not being done at this time

### Must Have (M) - Critical Tasks

*Critical in-progress tasks that must be completed.*

### Should Have (S) - Important Tasks

*Important in-progress tasks that should be completed.*

*(No active tasks in this category at this time)*

### Could Have (C) - Nice-to-Have Tasks

*Nice-to-have in-progress tasks that could be completed.*

- **E5:S00:T31** – Multi-Agent Coordination Feasibility Investigation - TODO (C priority) - [Task Document](epics/Epic-5/Story-000-fr-repo/T31-multi-agent-coordination-feasibility-investigation.md) | [FR-031](../fr-br/FR-031-multi-agent-coordination-feasibility-investigation.md)
- **E5:S03:T01-T03** – Documentation Automation - TODO (MEDIUM priority story) - [Story](epics/Epic-5/Story-003-documentation-automation.md)
  - T01: Create automated documentation update scripts - TODO
  - T02: Implement documentation synchronization workflows - TODO
  - T03: Build documentation change detection and notification - TODO
- **E8:S03:T01-T03** – Automation Scripts - TODO (MEDIUM priority story) - [Story](epics/Epic-8/Story-003-automation-scripts.md)
  - T01: Create automation framework - TODO
  - T02: Build workflow automation scripts - TODO
  - T03: Establish automation patterns - TODO
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

*Ongoing maintenance tasks that never complete. These are tracked but don't block other work.*

- **E6:S04** – Bug Reports - IN PROGRESS (Perpetual, HIGH priority epic) - [Story](epics/Epic-6/Story-004-bug-reports.md)
- **E6:S05** – Feature Requests - IN PROGRESS (Perpetual, MEDIUM priority epic) - [Story](epics/Epic-6/Story-005-feature-requests.md)
- **E6:S06:T08** – Update Kanban Workflow (UKW) - Perpetual Task - IN PROGRESS (v0.6.6.8+19, Last updated: 2026-01-06) - [Task Document](epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management/T08-update-kanban-workflow-ukw.md) | [Story](epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management.md)
- **E6:S06:T12** – Changelog Maintenance Workflow (CMW) - Perpetual Task - IN PROGRESS (v0.6.6.12+2, Last updated: 2026-01-05) - [Task Document](epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management/T12-changelog-maintenance-workflow-cmw.md) | [Story](epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management.md)

### Won't Have (W) - Deferred Tasks

*Tasks that are deferred or not being done at this time.*

- **E21:S00:T01-T07** – Language Selection at Setup (UK/US English) - TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-000-language-selection-at-setup.md)
- **E21:S01:T01-T07** – Internationalization Infrastructure - TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-001-internationalization-infrastructure.md)
- **E21:S02:T01-T07** – Translation and Localization - TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-002-translation-and-localization.md)
- **E21:S03:T01-T07** – Cultural Adaptation - TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-003-cultural-adaptation.md)
- **E24:S03:T01-T03** – Book Publishing Support - TODO (LOW priority story) - [Story](epics/Epic-24/Story-003-book-publishing-support.md)
  - T01: Create publishing workflows - TODO
  - T02: Build publishing tools - TODO
  - T03: Establish publishing processes - TODO

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
- [x] **E4:S10 – Agentic Kanban Task Creation from FR/BR** - ✅ COMPLETE (v0.4.10.7+0)
  - Story: [`epics/Epic-4/Story-010-agentic-kanban-task-creation-from-fr-br.md`](epics/Epic-4/Story-010-agentic-kanban-task-creation-from-fr-br.md)
  - Tasks: T00 ✅ COMPLETE, T01-T07 ✅ COMPLETE (FR-012: Agentic workflow for automatic task creation from FRs/BRs)
- [x] **E4:S11 – Kanban Granularity & Discrete Task Docs** - COMPLETE ✅ (v0.4.11.0+0)
  - Story: [`epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs.md`](epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs.md)
  - Tasks: T00 ✅ COMPLETE, T01 ✅ COMPLETE (v0.4.11.1+1), T02 ✅ COMPLETE (v0.4.11.2+2), T03 ✅ COMPLETE (v0.4.11.3+1), T04 ✅ COMPLETE (v0.4.11.4+1), T05 ✅ COMPLETE (v0.4.11.5+0), T06 ✅ COMPLETE (v0.4.11.6+2)
- [ ] **E4:S12 – FR/BR/UXR Repository Stories (S00 Pattern)** - TODO (v0.4.12.0+0)
  - Story: [`epics/Epic-4/Story-012-fr-br-uxr-repository-stories.md`](epics/Epic-4/Story-012-fr-br-uxr-repository-stories.md)
  - Tasks: T00 ✅ COMPLETE, T01-T10 TODO (FR-021: Repository pattern for FR/BR/UXR with S00 stories)
- [x] **E4:S13 – Kanban Board Enhancement - MoSCOW Prioritized Task View** - COMPLETE ✅ (v0.4.13.6+2)
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

**Note:** E5:S00 (FR Repo) is omitted from this board display (PERPETUAL repository story - see Epic 5 document for internal tracking).

**Stories:**
- [x] **E5:S01 – Documentation Maintenance Framework** - COMPLETE ✅ (v0.5.1.4+2)
  - Story: [`epics/Epic-5/Story-001-documentation-maintenance-framework.md`](epics/Epic-5/Story-001-documentation-maintenance-framework.md)
- [x] **E5:S02 – Documentation Quality Assurance** - ✅ COMPLETE (v0.5.2.3+1)
  - Tasks: T01 ✅, T02 ✅, T03 ✅
  - Story: [`epics/Epic-5/Story-002-documentation-quality-assurance.md`](epics/Epic-5/Story-002-documentation-quality-assurance.md)
- [ ] **E5:S03 – Documentation Automation** - TODO
  - Story: [`epics/Epic-5/Story-003-documentation-automation.md`](epics/Epic-5/Story-003-documentation-automation.md)

**Epic Doc:** [`epics/Epic-5/Epic-5.md`](epics/Epic-5/Epic-5.md)

---

### Epic 6: Framework Management and Maintenance

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-01-03  
**Version:** v0.6.3.3+1

**Note:** E6:S00 (BR Repo) is omitted from this board display (PERPETUAL repository story - see Epic 6 document for internal tracking).

**Stories:**
- [x] **E6:S01 – Framework Version Management** - ✅ COMPLETE (v0.6.1.5+1 – All tasks complete: Framework versioning strategy, release processes, compatibility tracking, dependency architecture, and version tagging strategy)
  - Story: [`epics/Epic-6/Story-001-framework-version-management.md`](epics/Epic-6/Story-001-framework-version-management.md)
  - Tasks: T01 ✅ COMPLETE (v0.6.1.1+1), T02 ✅ COMPLETE (v0.6.1.2+1), T03 ✅ COMPLETE (v0.6.1.3+1), T04 ✅ COMPLETE (v0.6.1.1+2), T05 ✅ COMPLETE (v0.6.1.5+1)
- [x] **E6:S02 – Framework Update and Migration** - ✅ COMPLETE (v0.6.2.3+1 – All active tasks complete: Framework update procedures, migration guide, backward compatibility policy, and auto-update mechanisms)
  - Story: [`epics/Epic-6/Story-002-framework-update-and-migration.md`](epics/Epic-6/Story-002-framework-update-and-migration.md)
  - Tasks: T01 ✅ COMPLETE (v0.6.2.1+1 - Framework update procedures), T02 ✅ COMPLETE (v0.6.2.2+1 - Framework migration guide), T03 ✅ COMPLETE (v0.6.2.3+1 - Framework backward compatibility policy), T05 ✅ COMPLETE (v0.6.2.5+1 - Framework auto-update mechanisms), T04 SUPERSEDED (by E6:S07)
- [x] **E6:S03 – Framework Health Monitoring** - ✅ COMPLETE (v0.6.3.3+1 – All tasks complete: Framework health metrics defined, monitoring tools implemented, dashboard built)
  - Story: [`epics/Epic-6/Story-003-framework-health-monitoring.md`](epics/Epic-6/Story-003-framework-health-monitoring.md)
  - Tasks: T01 ✅ COMPLETE (v0.6.3.1+1 - Framework health metrics), T02 ✅ COMPLETE (v0.6.3.2+1 - Framework health monitoring tools), T03 ✅ COMPLETE (v0.6.3.3+1 - Framework health dashboard)
- [ ] **E6:S04 – Bug Reports** - IN PROGRESS
  - Story: [`epics/Epic-6/Story-004-bug-reports.md`](epics/Epic-6/Story-004-bug-reports.md)
- [ ] **E6:S05 – Feature Requests** - TODO
  - Story: [`epics/Epic-6/Story-005-feature-requests.md`](epics/Epic-6/Story-005-feature-requests.md)
- [ ] **E6:S06 – ADK Implementation Analysis and Package Management** - IN PROGRESS (v0.6.6.8+20)
  - Story: [`epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management.md`](epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management.md)
- [x] **E6:S07 – ai-dev-kit CLI Tool** - COMPLETE ✅ (v0.6.7.13+1 – All 14 tasks T00-T13 complete: Architecture, commands, backend abstraction, all four backends, configuration management, error handling, migration utilities, remove command, documentation, testing, validation, PyPI packaging)
  - Story: [`epics/Epic-6/Story-007-ai-dev-kit-cli-tool.md`](epics/Epic-6/Story-007-ai-dev-kit-cli-tool.md)
  - Tasks: T00 ✅ COMPLETE, T01-T13 ✅ COMPLETE (CLI tool implementation: architecture, commands, backends, config, migration, testing, packaging - ALL COMPLETE)
  - **Feature Request:** [FR-030](fr-br/FR-030-ai-dev-kit-cli-tool.md)

**Epic Doc:** [`epics/Epic-6/Epic-6.md`](epics/Epic-6/Epic-6.md)

---

### Epic 9: Release Candidate Readiness

**Status:** TODO  
**Priority:** HIGH  
**Last Updated:** 2026-01-16 (v0.9.0.0+0 – Epic created with 5 stories: RC Readiness Gap Analysis, Framework Reviews, Canonical E/S/T Review)

**Stories:**
- [ ] **E9:S01 – RC Readiness Gap Analysis** - TODO (v0.9.1.0+0)
  - Story: [`epics/Epic-9/Story-001-rc-readiness-gap-analysis.md`](epics/Epic-9/Story-001-rc-readiness-gap-analysis.md)
  - **Feature Request:** [FR-032](fr-br/FR-032-release-candidate-readiness-gap-analysis.md)
- [ ] **E9:S02 – Kanban Framework RC Readiness Review** - TODO
  - Story: [`epics/Epic-9/Story-002-kanban-framework-rc-readiness-review.md`](epics/Epic-9/Story-002-kanban-framework-rc-readiness-review.md)
- [ ] **E9:S03 – Workflow Management Framework RC Readiness Review** - TODO
  - Story: [`epics/Epic-9/Story-003-workflow-management-framework-rc-readiness-review.md`](epics/Epic-9/Story-003-workflow-management-framework-rc-readiness-review.md)
- [ ] **E9:S04 – Numbering & Versioning Framework RC Readiness Review** - TODO
  - Story: [`epics/Epic-9/Story-004-numbering-versioning-framework-rc-readiness-review.md`](epics/Epic-9/Story-004-numbering-versioning-framework-rc-readiness-review.md)
- [ ] **E9:S05 – Canonical E/S/T Review and Refinement** - TODO
  - Story: [`epics/Epic-9/Story-005-canonical-est-review-and-refinement.md`](epics/Epic-9/Story-005-canonical-est-review-and-refinement.md)

**Epic Doc:** [`epics/Epic-9/Epic-9.md`](epics/Epic-9/Epic-9.md)

---

### Epic 7: Codebase Maintenance and Review

**Status:** COMPLETE  
**Priority:** HIGH  
**Last Updated:** 2026-01-05  
**Version:** v0.7.5.4+1

**Note:** E7:S00 (UXR Repo) is omitted from this board display (PERPETUAL repository story - see Epic 7 document for internal tracking).

**Stories:**
- [x] **E7:S01 – Codebase Maintenance Tasks** - ✅ COMPLETE (v0.7.1.4+1 – All non-perpetual tasks complete: Prioritization framework, workflow processes, and Kanban integration established)
  - Story: [`epics/Epic-7/Story-001-codebase-maintenance-tasks.md`](epics/Epic-7/Story-001-codebase-maintenance-tasks.md)
  - Tasks: T01 PERPETUAL, T02 ✅ COMPLETE (v0.7.1.2+1 - Maintenance task prioritization framework), T03 ✅ COMPLETE (v0.7.1.3+1 - Maintenance workflow processes), T04 ✅ COMPLETE (v0.7.1.4+1 - Maintenance tasks integrated with Kanban framework) - **Story COMPLETE**
- [x] **E7:S02 – Code Review Standards and Processes** - ✅ COMPLETE (v0.7.2.4+1 – All tasks complete: Code review standards, checklists, workflows, and Kanban integration established)
  - Story: [`epics/Epic-7/Story-002-code-review-standards-and-processes.md`](epics/Epic-7/Story-002-code-review-standards-and-processes.md)
  - Tasks: T01 ✅ COMPLETE (v0.7.2.1+1 - Code review standards and guidelines), T02 ✅ COMPLETE (v0.7.2.2+1 - Code review checklist templates), T03 ✅ COMPLETE (v0.7.2.3+1 - Code review workflow processes), T04 ✅ COMPLETE (v0.7.2.4+1 - Code review Kanban integration) - **Story COMPLETE**
- [x] **E7:S03 – Code Quality Metrics and Monitoring** - ✅ COMPLETE (v0.7.3.4+1 – All tasks complete: Code quality metrics framework, dashboards, Kanban integration, and monitoring processes established)
  - Story: [`epics/Epic-7/Story-003-code-quality-metrics-and-monitoring.md`](epics/Epic-7/Story-003-code-quality-metrics-and-monitoring.md)
  - Tasks: T01 ✅ COMPLETE (v0.7.3.1+0 - Code quality metrics framework), T02 ✅ COMPLETE (v0.7.3.2+0 - Code quality monitoring dashboards), T03 ✅ COMPLETE (v0.7.3.3+0 - Code quality Kanban integration), T04 ✅ COMPLETE (v0.7.3.4+0 - Code quality monitoring processes) - **Story COMPLETE**
- [x] **E7:S04 – Maintenance Automation and Tooling** - ✅ COMPLETE (v0.7.4.4+1 – All tasks complete: Maintenance automation requirements, scripts, workflow integration, and usage documentation established)
  - Story: [`epics/Epic-7/Story-004-maintenance-automation-and-tooling.md`](epics/Epic-7/Story-004-maintenance-automation-and-tooling.md)
  - Tasks: T01 ✅ COMPLETE (v0.7.4.1+0 - Maintenance automation requirements), T02 ✅ COMPLETE (v0.7.4.2+0 - Maintenance automation scripts and tools), T03 ✅ COMPLETE (v0.7.4.3+0 - Maintenance automation workflow integration), T04 ✅ COMPLETE (v0.7.4.4+0 - Maintenance automation usage guide) - **Story COMPLETE**
- [x] **E7:S05 – Migration UXR – Pre-Existing Kanban Structures** - ✅ COMPLETE (v0.7.5.4+1 – All tasks complete: All 4 UXR documents synthesized, user pain points extracted, migration UX requirements and recommendations documented, findings fed into Epic 4 Stories 7, 8, and 9)
  - Story: [`epics/Epic-7/Story-005-migration-uxr-research.md`](epics/Epic-7/Story-005-migration-uxr-research.md)
  - Tasks: T01 ✅ COMPLETE (v0.7.5.1+0 - UXR-001 intake and synthesis), T02 ✅ COMPLETE (v0.7.5.2+0 - UXR-002 intake and synthesis), T03 ✅ COMPLETE (v0.7.5.3+0 - UXR-003 intake and synthesis), T04 ✅ COMPLETE (v0.7.5.4+0 - UXR-004 intake and synthesis) - **Story COMPLETE**

**Epic Doc:** [`epics/Epic-7/Epic-7.md`](epics/Epic-7/Epic-7.md)

---

### Epic 8: Tooling & Automation

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-01-06  
**Version:** v0.8.2.1+1

**Stories:**
- [x] **E8:S01 – Code Generators** - ✅ COMPLETE (v0.8.1.3+1, Last updated: 2026-01-05)
  - Story: [`epics/Epic-8/Story-001-code-generators.md`](epics/Epic-8/Story-001-code-generators.md)
  - Tasks: T01 ✅ COMPLETE (v0.8.1.1+1), T02 ✅ COMPLETE (v0.8.1.2+1), T03 ✅ COMPLETE (v0.8.1.3+1)
- [x] **E8:S02 – Additional Validators** - ✅ COMPLETE (v0.8.2.3+1, Last updated: 2026-01-06)
  - Story: [`epics/Epic-8/Story-002-additional-validators.md`](epics/Epic-8/Story-002-additional-validators.md)
  - Tasks: T01 ✅ COMPLETE (v0.8.2.1+1), T02 TODO, T03 TODO
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

