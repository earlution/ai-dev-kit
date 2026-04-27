---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-04-27 (RW: E2:S15:T4 final sign-off closure publication)
**Version:** v0.2.15.4+5

**Note:** Epics 1, 3, 7, 8, 10, 11 are COMPLETE. Epics 2, 4, 5, 6, 24 are IN PROGRESS. Epics 21 are TODO. **MoSCOW lists tasks only (not stories)**—story-level rows hide real progress.
**Intake migration note (FR-072 / Approach D):** Dedicated FR/BR/UXR repository stories are historical registries only; new intake tasks should be created in semantic delivery stories.

> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)  
> **For completed tasks, see:** [`kanban-completed.md`](kanban-completed.md)  
> **For FR/BR/UXR prioritization, see:** [`fbuboard.md`](fbuboard.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

### Should Have (S) - Important Tasks

- **E2:S16:T01** – FR-088: establish canonical story for perpetual ongoing tasks - COMPLETE (HIGH, canonical Story 016 ownership and guardrail baseline signed off; downstream inventory execution continues under `E2:S16:T02`) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [E2:S16:T01](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md) | | Last modified: 2026-04-27 12:34 UTC
- **E2:S15:T06** – FR-091: RW Step 7 self-sufficient scoped kanban reconciliation without UKW dependency - TODO (HIGH, codify release-scope self-sufficiency contract for RW and explicit UKW reactive-only role) - [Task Document](epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T06-rw-step-7-self-sufficient-scoped-kanban-reconciliation-fr091.md) | [Story](epics/Epic-2/Story-015-ipw-governance-and-publication-contract.md) | [E2:S15:T06](epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T06-rw-step-7-self-sufficient-scoped-kanban-reconciliation-fr091.md) | —No IPP— | | Last modified: 2026-04-27 13:35 UTC
- **E4:S19:T03** – FR-087: investigate why `E6:S07` became default housing and decide closure/scope - IN PROGRESS (HIGH, forensic analysis of origin/codification plus close/split/narrow recommendation and guardrails; canonical IPP published) - [Task Document](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md) | [Story](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake.md) | [E4:S19:T03](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md) | [—IPP—](../../implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md) | | Last modified: 2026-04-27 10:55 UTC

### Could Have (C) - Nice-to-Have Tasks

- **E4:S08:T07** – FR-011: Task splitting across multiple canonical epics - IN PROGRESS (MEDIUM priority semantic migration enhancement) - [Task Document](epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011.md) | [Story](epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption.md) | [E4:S08:T07](epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011.md) | —No IPP— | | Last modified: 2026-04-20 15:52 UTC
- **E5:S01:T31** – Multi-agent coordination feasibility investigation (FR-031) - TODO (C priority architecture exploration) - [Task Document](epics/Epic-5/Story-001-fr-repo/T31-multi-agent-coordination-feasibility-investigation.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [E5:S01:T31](epics/Epic-5/Story-001-fr-repo/T31-multi-agent-coordination-feasibility-investigation.md) | —No IPP— | | Last modified: 2026-04-20 15:52 UTC
- **E5:S01:T35** – Task template cross-wiring section (FR-035) - TODO (MEDIUM template quality) - [Task Document](epics/Epic-5/Story-001-fr-repo/T35-task-template-cross-wiring-section.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [E5:S01:T35](epics/Epic-5/Story-001-fr-repo/T35-task-template-cross-wiring-section.md) | —No IPP— | | Last modified: 2026-04-20 15:52 UTC
- **E2:S01:T08** – IDE linter check before RW commit (FR-024) - TODO (LOW workflow hygiene) - [Story](epics/Epic-2/Story-001-rw-agent-execution-and-docs.md) | Last modified: 2026-04-20 15:52 UTC
- **E2:S07:T01** – Trigger-aware RW orchestration core (FR-013) - TODO (LOW trigger-awareness foundation) - [Story](epics/Epic-2/Story-007-trigger-aware-release-workflow.md) | Last modified: 2026-04-20 15:52 UTC
- **E2:S07:T05** – RW trigger handling for FR/BR commits (FR-014) - TODO (LOW traceability automation) - [Story](epics/Epic-2/Story-007-trigger-aware-release-workflow.md) | Last modified: 2026-04-20 15:52 UTC
- **E2:S06:T01** – Package uninstall and recovery capabilities (FR-008) - TODO (LOW package lifecycle robustness) - [Story](epics/Epic-2/Story-006-package-uninstall-and-recovery.md) | Last modified: 2026-04-20 15:52 UTC
- **E4:S06:T01** – Canonical EST template system completion (FR-005) - TODO (LOW template completeness) - [Story](epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md) | Last modified: 2026-04-20 15:52 UTC
- **E4:S07:T01** – Migration support for pre-existing kanban repositories (BR-006) - TODO (LOW migration compatibility) - [Story](epics/Epic-4/Story-007-migration-support-and-installation-modes.md) | Last modified: 2026-04-20 15:52 UTC
- **E4:S07:T02** – Migration utilities and installation modes implementation (FR-007) - TODO (LOW migration tooling) - [Story](epics/Epic-4/Story-007-migration-support-and-installation-modes.md) | Last modified: 2026-04-20 15:52 UTC
- **E4:S09:T01** – Fix multiple kanban package installation defects (BR-007) - TODO (LOW stability fixes) - [Story](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | Last modified: 2026-04-20 15:52 UTC
- **E4:S09:T05** – Remove arbitrary threshold contradicting agentic intelligence (BR-008) - TODO (LOW decision-quality alignment) - [Story](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | Last modified: 2026-04-20 15:52 UTC
- **E4:S09:T06** – Agentic intelligence task mapping implementation (FR-010) - TODO (LOW mapping accuracy) - [Story](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md) | Last modified: 2026-04-20 15:52 UTC
- **E4:S10:T01** – Agentic kanban task creation from intake documents (FR-012) - TODO (LOW intake automation) - [Story](epics/Epic-4/Story-010-agentic-kanban-task-creation-from-fr-br.md) | Last modified: 2026-04-20 15:52 UTC
- **E5:S01:T56** – Standardize packaged workflow documentation and instructions (FR-056) - TODO (LOW packaging consistency) - [Task Document](epics/Epic-5/Story-001-fr-repo/T56-standardize-packaged-workflow-documentation-and-instructions.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [E5:S01:T56](epics/Epic-5/Story-001-fr-repo/T56-standardize-packaged-workflow-documentation-and-instructions.md) | —No IPP— | | Last modified: 2026-04-20 15:52 UTC
- **E5:S01:T62** – Improve GitHub release installation experience (FR-062) - PROPOSED (LOW release UX) - [Task Document](epics/Epic-5/Story-001-fr-repo/T62-github-release-installation-experience.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [E5:S01:T62](epics/Epic-5/Story-001-fr-repo/T62-github-release-installation-experience.md) | —No IPP— | | Last modified: 2026-04-20 15:52 UTC
- **E6:S07:T108** – Extend UKW for FR/BR/UXR temporal tracking and synchronization (FR-050) - TODO (LOW governance parity) - [Task Document](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T108-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md) | [Story](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md) | [E6:S07:T108](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T108-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md) | —No IPP— | | Last modified: 2026-04-20 15:52 UTC
- **E7:S01:T06** – Update changelog workflow maintenance flow (FR-057) - PROPOSED (LOW maintenance workflow quality) - [Story](epics/Epic-7/Story-001-codebase-maintenance-tasks.md) | Last modified: 2026-04-20 15:52 UTC

### Ongoing (O) - Perpetual Tasks

- **E2:S16:T01** – Establish canonical perpetual ongoing tasks story (FR-088) - COMPLETE (planning and governance baseline complete; perpetual execution lanes continue as separate ongoing tasks) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [E2:S16:T01](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md) | | Last modified: 2026-04-27 12:34 UTC
- **E2:S16:T02** – Inventory and classify workflow-related perpetual tasks - IN PROGRESS (legacy perpetual anchor discovery + disposition mapping) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [E2:S16:T02](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | —No IPP— | | Last modified: 2026-04-20 18:20 UTC

- **E7:S01:T05** – Markdown Maintenance (Perpetual Task) - PERPETUAL (v0.7.1.5+2, Last updated: 2026-03-07) - [Task Document](epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | [Story](epics/Epic-7/Story-001-codebase-maintenance-tasks.md) | [E7:S01:T05](epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | —No IPP— | | Last modified: 2026-04-20 15:52 UTC

### Won't Have (W) - Deferred Tasks

- **E21:S00:T01-T07** – Language Selection at Setup (UK/US English) - TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-000-language-selection-at-setup.md) | Last modified: 2026-04-20 15:52 UTC

- **E21:S01:T01-T07** – Internationalization Infrastructure - TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-001-internationalization-infrastructure.md) | Last modified: 2026-04-20 15:52 UTC

- **E21:S02:T01-T07** – Translation and Localization - TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-002-translation-and-localization.md) | Last modified: 2026-04-20 15:52 UTC

- **E21:S03:T01-T07** – Cultural Adaptation - TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-003-cultural-adaptation.md) | Last modified: 2026-04-20 15:52 UTC

- **E24:S03:T01-T03** – Book Publishing Support - TODO (LOW priority story) - [Story](epics/Epic-24/Story-003-book-publishing-support.md) | Last modified: 2026-04-20 15:52 UTC
  - T01: Create publishing workflows - TODO
  - T02: Build publishing tools - TODO
  - T03: Establish publishing processes - TODO

---
