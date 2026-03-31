---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T15:15:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – FR/BR/UXR Prioritization Board

**Last Updated:** 2026-03-31 (**Epic/5** **`RW -k`:** **T21** `v0.5.1.21+0`, **T32** `v0.5.1.32+0`; **Epic/7** **T03/T04** next; **T73**/**T74** prior milestones)
**Version:** *(documentation — align releases with `version.py`; board text may trail **`RW`** on other epics)*

> **For MoSCOW prioritized tasks, see:** [`kanban-board.md`](kanban-board.md)  
> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For FR/BR/UXR structure and full listings, see:** [`fr-br-uxr-structure.md`](fr-br-uxr-structure.md)  
> **For completed FR/BR/UXRs, see:** [`fr-br-uxr-completed.md`](fr-br-uxr-completed.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)

---

## Overview

This board provides **centralized visibility and prioritization** for all open FRs (Feature Requests), BRs (Bug Reports), and UXRs (User Experience Research) in the AI Dev Kit project. It uses the same responsibility structure as the Kanban board but focuses on the intake and prioritization process.

**Board Purpose:**

- **Visibility** - Clear view of all FR/BR/UXR priorities and status
- **Prioritization** - Systematic approach to deciding what to work on next
- **Tracking** - Complete lifecycle tracking from intake to completion
- **Integration** - Links to individual documents and implementing tasks

---

## Intake plan: open ∧ taskless (epic branch + `RW -k`)

**Kanban anchor:** **[FR-073](fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md)** / **[E5:S01:T73](epics/Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md)** — concrete phased plan, acceptance criteria, and maintenance checklists live in the task doc; this section is the operator-facing summary.

**Working definition — “open ∧ taskless”:** The item is still **active** on this board (or in [`fr-br/`](fr-br)) but lacks full Kanban wiring: no task document (or no stable **E#:S#:T#**), missing **`Implementing Task:`** in the FR/BR/UXR header, and/or no story checklist row.

**Execution loop:** Check out the **owning epic branch** (per **Primary epic branch** below) → create/link the task doc and bidirectional **`Implementing Task`** ↔ task → run **`RW -k E#:S#:T#`** so `version.py`, changelog, and SemVer registry match the intake.

### Pre-identified task mapping (MoSCOW Must / Should)

**Purpose:** Every high-priority *taskless* row has a **reserved target E/S/T** before intake runs—no ad hoc task numbers during `RW -k`.  
**Canonical detail:** Expanded rationale and deltas live in **[E5:S01:T73](epics/Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md)**; this table is the operator view.

| FR/BR/UXR | Type | Primary task ID | Status | Primary epic branch | Why this story / epic |
|-----------|------|-----------------|--------|---------------------|------------------------|
| **BR-038** | BR | **E6:S06:T02** | **Linked** (board + MoSCOW) | `epic/6-framework-management` | **E6:S06** is the framework *Feature Requests/stories* home for RW reliability work; T02 owns BR-038. |
| **BR-039** | BR | **E6:S06:T57** | **Released** **`v0.6.6.57+1`** on `epic/6` (**RW -k**; supersedes draft **T43** id) | `epic/6-framework-management` | [T57](epics/Epic-6/Story-006-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md). |
| **BR-059** | BR | **E6:S07:T109** | **Released** **`v0.6.7.109+1`** on `epic/6` (**RW -k**) | `epic/6-framework-management` | [T109-br059](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T109-br059-ukw-moscow-full-story-task-coverage.md). |
| **FR-040** (ICW) | FR | **E5:S01:T40** | **Linked** (FR header + MoSCOW) | `epic/5-documentation-management` (FR anchor) / work may trace via **Epic 6** merges as needed | [FR-040 ICW](fr-br/FR-040-implementation-cycle-workflow-icw.md) → **T40**. *Known debt:* duplicate `FR-040-*.md` slug ([FR-040 rw-update…](fr-br/FR-040-rw-update-kanban-board-on-task-completion.md)) **E5:S01:T36** — reconcile under **FR-072**, not here. |
| **UXR-001** | UXR | **E7:S00:T01** (repo) · **E7:S05:T01** (impl — exists) | **Released** on **`epic/7`** (**`v0.7.0.1+2`**); [repo anchor on **epic/5** copy](epics/Epic-7/Story-000-uxr-repo/T01-uxr-001-repository-anchor.md) | `epic/7-documentation-maintenance` | On **`epic/7`** branch, registry task filename is **`T01-migration-user-experience-research-uxr-001.md`** (merge for single canonical name). |
| **UXR-002** | UXR | **E7:S00:T02** (repo) · **E7:S05:T02** (impl — exists) | **Released** **`v0.7.0.2+2`** on **`epic/7`** | `epic/7-documentation-maintenance` | **`epic/7`:** `T02-comprehensive-uat-migration-utilities-uxr-002.md`; **epic/5** copy: [T02 anchor](epics/Epic-7/Story-000-uxr-repo/T02-uxr-002-repository-anchor.md). |
| **UXR-005** | UXR | **E7:S00:T05** (repo) · **E7:S01:T09** (impl — exists) | Task doc **`v0.7.0.5+1`** on **`epic/7`** | `epic/7-documentation-maintenance` | **`epic/7`:** `T05-kanban-board-formatting-governance-uxr-005.md`; **epic/5** copy: [T05 anchor](epics/Epic-7/Story-000-uxr-repo/T05-uxr-005-repository-anchor.md). |
| **FR-073** | FR | **E5:S01:T73** | **Exists** (**`v0.5.1.73+0`** doc-init) | `epic/5-documentation-management` | Meta-FR for this intake plan; **E5:S01** is FR Repo PERPETUAL. |
| **FR-021** | FR | **E5:S01:T21** | **Released** **`v0.5.1.21+0`** (`RW -k` on `epic/5`) | `epic/5-documentation-management` | Repository-story pattern; reconcile with **E7:S00** / **T72**. |
| **FR-032** | FR | **E5:S01:T32** | **Released** **`v0.5.1.32+0`** (`RW -k` on `epic/5`) | `epic/5-documentation-management` | RC readiness gap analysis. |
| **UXR-003** | UXR | **E7:S00:T03** · **E7:S05:T03** | **Linked** (synthesis ✅; repo anchor → **`RW -k`** `epic/7`) | `epic/7-documentation-maintenance` | [T03](epics/Epic-7/Story-000-uxr-repo/T03-uxr-003-repository-anchor.md). |
| **UXR-004** | UXR | **E7:S00:T04** · **E7:S05:T04** | **Linked** (synthesis ✅; UXR **COMPLETE**; repo anchor → **`RW -k`** `epic/7`) | `epic/7-documentation-maintenance` | [T04](epics/Epic-7/Story-000-uxr-repo/T04-uxr-004-repository-anchor.md). |

**Housing policy (how story choice is decided)** — canonical rules: **`kanban-governance-policy.md`** (**KG-R2** atomic intake, **KG-R6** semantics vs numbering).

1. **Primary task** SHOULD sit under the **story that matches delivery** (where work is understood and versioned), not only under a repository story. **FR/BR/UXR id = task number** is **optional**; symmetric **E5:S01:Tnn** for FR-nnn is a **convenience**, not a requirement.  
2. **Every** new FR/BR/UXR MUST get **≥1 task + bidirectional links in the same intake session** (no orphan `fr-br/*.md`).  
3. **BR-xxx** targeting RW/agent tooling → often **E6:S06**; **UKW/CMW/RW-definition** defects → often **E6:S07** (examples, not laws).  
4. **UXR-xxx** → may use **E7:S00** repository slot **and/or** implementation tasks under **E7:S01** / **E7:S05**—link both when both exist.  
5. **Epic branch** in the mapping table = where **`validate_branch_context.py --strict`** must pass for **`RW` / `RW -k`** on that task’s epic.  

### Recently completed (reference)

| Item | Task | Notes |
|------|------|--------|
| **FR-072** | **E5:S01:T72** | Uniform repository vs abstract-space Kanban rules — doc-init **`v0.5.1.72+0`** on `epic/5-documentation-management`. |

### MoSCOW queue — remaining taskless *on board lines*

**2026-03-31 (Phase B/C):** Intake-plan **Must** / **Should** slice now has **task documents** and **`| E:S:T`** links in the MoSCOW sections below. Outstanding work is **implementation** (`RW -k` on owning epic branches) and draining **Could** / legacy rows.

| Priority | Items |
|----------|--------|
| **Must** | *— **Epic/6:** **BR-039**/**BR-059** versioned (**T57+1**, **T109+1**); remaining work is **product/UKW fix**, not intake.* |
| **Should** | *— **FR-040** / **UXR** repo slots filed; epic 7 `RW -k` for **E7:S00:T01/T02/T05** when first version needed.* |
| **Could** | Large backlog (e.g. **FR-034**, **FR-032**, **FR-021**, many lower-section **BR**/**FR**) — drain **after** Must / Should |

### Already linked on MoSCOW rows (intake at board level)

Examples: **FR-045**→E5:S01:T45, **FR-046**→T46, **FR-047**→T47, **FR-063**→E5:S02:T06, **FR-065**→E5:S09:T01 (non-exhaustive).

### Source-of-truth and hygiene (read before filing)

1. **Atomic intake:** New FR/BR/UXR **must** ship with a **task doc + `Implementing Task:`** (or equivalent) in the **same change set**—see **KG-R2** in **`packages/frameworks/kanban/policies/kanban-governance-policy.md`**. Older sparse headers are **legacy debt** to burn down.
2. **UXR drift:** **UXR-001** / **UXR-002** / **UXR-005** appear taskless here but may already map to Epic 7 work (e.g. maintenance or synthesis tasks). **Reconcile** under [`epics/Epic-7/`](epics/Epic-7) before creating net-new **E7:S00:Txx** repo tasks.
3. **Board freshness:** **Statistics** (below) and some MoSCOW rows can lag (e.g. completed items still counted in priority buckets; **FR-072** not yet listed in MoSCOW). After each **`RW -k`**, update rows here and use **UKW** for a broad consistency pass.

### Suggested execution order

1. **Must:** **Done (epic/6):** **E6:S06:T57** **`v0.6.6.57+1`**, **E6:S07:T109** **`v0.6.7.109+1`**. **BR-038**→**E6:S06:T02** linked.
2. **Should:** **`epic/7`** — **E7:S00:T01/T02** already versioned; **T05** at **`v0.7.0.5+1`** in task doc; optional **`RW -k`** only if registry slot needs **+0** doc-init reset per policy. **FR-040**→**E5:S01:T40** linked.
3. **Could:** batch lower-priority intake after Must / Should pressure drops; follow **E5:S01:Txx** for FR-0xx filings per [`Story-001-fr-repo`](epics/Epic-5/Story-001-fr-repo.md).

---

## MoSCOW Prioritized FR/BR/UXR Items

### Must Have (M) - Critical Items

- **BR-039** – Cascade Whitelist Security Prompt Usability Blocker - TODO (CRITICAL, Cascade whitelist feature non-functional, creates constant security prompt interruptions preventing productive workflow execution) - [BR-039](fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md) | [E6:S06:T57](epics/Epic-6/Story-006-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md)
- **BR-038** – Release Workflow Micromanagement and Tool Discovery Issues - TODO (HIGH, Excessive manual intervention, tool discovery problems, and poor error recovery in Release Workflow) - [BR-038](fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md) | [E6:S06:T02](epics/Epic-6/Story-006-feature-requests/T02-fix-release-workflow-micromanagement-issues.md)
- **BR-059** – UKW MoSCOW omits open story tasks (E5:S09 listed T01 only; checklist T01–T07) - TODO (HIGH, board SoT vs story checklist; investigation + UKW/rule fix) - [BR-059](fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md) | [E6:S07:T109](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T109-br059-ukw-moscow-full-story-task-coverage.md)

---

### Should Have (S) - Important Items

- **FR-073** – FR/BR/UXR board: open ∧ taskless intake execution plan (Kanban task) - TODO (MEDIUM, **`v0.5.1.73+0`** intake shipped; **T73** — Phases B/C queue execution + hygiene) - [FR-073](fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md) | [E5:S01:T73](epics/Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md)
- **FR-040** – Implementation Cycle Workflow (ICW) - TODO (HIGH, Create structured three-phase workflow: 1) Specification Definition, 2) Test Design, 3) Implementation Planning. Provides disciplined approach to implementation work similar to RW/UKW patterns.) - [FR-040](fr-br/FR-040-implementation-cycle-workflow-icw.md) | [E5:S01:T40](epics/Epic-5/Story-001-fr-repo/T40-implementation-cycle-workflow-icw.md)
- **FR-045** – ADR-002 Task-Touch Derived Mapping (Kanban → SemVer) - TODO (HIGH, SemVer mapping for task_touch and Kanban integration) - [FR-045](fr-br/FR-045-adr-002-task-touch-derived-mapping.md) | [E5:S01:T45](epics/Epic-5/Story-001-fr-repo/T45-adr-002-task-touch-derived-mapping.md)
- **FR-047** – Install Logging for Framework Dependencies - TODO (HIGH, Enables detailed post-install analysis and debugging) - [FR-047](fr-br/FR-047-install-logging-for-framework-dependencies.md) | [E5:S01:T47](epics/Epic-5/Story-001-fr-repo/T47-install-logging-for-framework-dependencies.md)
- **FR-046** – RW SemVer Tag When task_touch Enabled - TODO (HIGH, RW tagging behaviour when task_touch is enabled) - [FR-046](fr-br/FR-046-rw-semver-tag-task-touch-mode.md) | [E5:S01:T46](epics/Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md)
- **UXR-001** – Migration User Experience Research - TODO (HIGH, Research user experience during migration processes) - [UXR-001](fr-br/UXR-001-migration-user-experience-research.md) | [E7:S00:T01](epics/Epic-7/Story-000-uxr-repo/T01-uxr-001-repository-anchor.md) · [E7:S05:T01](epics/Epic-7/Story-005-migration-uxr-research.md)
- **UXR-002** – Comprehensive UAT Migration Utilities - TODO (HIGH, User acceptance testing tools for migration) - [UXR-002](fr-br/UXR-002-comprehensive-uat-migration-utilities.md) | [E7:S00:T02](epics/Epic-7/Story-000-uxr-repo/T02-uxr-002-repository-anchor.md) · [E7:S05:T02](epics/Epic-7/Story-005-migration-uxr-research.md)
- **UXR-005** – Kanban Board Formatting & Governance - TODO (HIGH, Enforce blank-line readability rule across Kanban docs and assign UXR ownership for template maintenance) - [UXR-005](fr-br/UXR-005-kanban-board-formatting-and-governance.md) | [E7:S00:T05](epics/Epic-7/Story-000-uxr-repo/T05-uxr-005-repository-anchor.md) · [E7:S01:T09](epics/Epic-7/Story-001-codebase-maintenance-tasks/E07S01T09-kanban-template-governance.md)
- **FR-051** – FR/BR/UXR Prioritization Board - ✅ COMPLETED (HIGH, Create prioritization board for FRs, BRs, and UXRs) - [FR-051](fr-br/FR-051-fr-br-uxr-prioritization-board.md) | [E6:S06:T01](epics/Epic-6/Story-006-feature-requests/T01-fr-br-uxr-prioritization-board.md) ✅ *IMPLEMENTED - BOARD CREATED*
- **FR-063** – CMW Epic 5 execution context - TODO (MEDIUM, Document and enforce Epic 5 branch/version for standalone CMW; RW Step 9.5 inherits RW epic) - [FR-063](fr-br/FR-063-cmw-epic-5-execution-context.md) | [E5:S02:T06](epics/Epic-5/Story-002/T006-cmw-epic-5-execution-context-fr-063.md)
- **FR-065** – Docusaurus site identity and config - TODO (HIGH, first in FR-065–FR-071 adoption chain; `portal/` branding and config) - [FR-065](fr-br/FR-065-docusaurus-site-identity-and-config.md) | [E5:S09:T01](epics/Epic-5/Story-009-docusaurus-documentation-portal/T01-docusaurus-site-identity-fr-065.md)
---

### Could Have (C) - Nice-to-Have Items

- **FR-031** – Multi-Agent Coordination Feasibility Investigation - TODO (C priority, Investigate multi-agent coordination possibilities) - [FR-031](fr-br/FR-031-multi-agent-coordination-feasibility-investigation.md) | [E5:S01:T31](epics/Epic-5/Story-001-fr-repo/T31-multi-agent-coordination-feasibility-investigation.md)
- **FR-035** – Task Template Cross-Wiring Section - TODO (MEDIUM, Cross-wiring section in task templates) - [FR-035](fr-br/FR-035-task-template-cross-wiring-section.md) | [E5:S01:T35](epics/Epic-5/Story-001-fr-repo/T35-task-template-cross-wiring-section.md)
- **FR-034** – UKW Granular Control and Use Case Flags - ✅ IMPLEMENTED (**v0.5.1.34+1**) — board link for traceability - [FR-034](fr-br/FR-034-ukw-granular-control-and-use-case-flags.md) | [E5:S01:T34](epics/Epic-5/Story-001-fr-repo/T34-ukw-granular-control-and-use-case-flags.md)
- **FR-032** – Release Candidate Readiness Gap Analysis - TODO (MEDIUM, Analyze gaps in release candidate readiness) - [FR-032](fr-br/FR-032-release-candidate-readiness-gap-analysis.md) | [E5:S01:T32](epics/Epic-5/Story-001-fr-repo/T32-release-candidate-readiness-gap-analysis.md)
- **FR-030** – AI Dev Kit CLI Tool - TODO (MEDIUM, Command-line interface tool) - [FR-030](fr-br/FR-030-ai-dev-kit-cli-tool.md) | [E6:S08](epics/Epic-6/Story-008-ai-dev-kit-cli-tool.md)
- **FR-021** – FR/BR/UXR Repository Stories - TODO (MEDIUM, Repository stories for FR/BR/UXR management) - [FR-021](fr-br/FR-021-fr-br-uxr-repository-stories.md) | [E5:S01:T21](epics/Epic-5/Story-001-fr-repo/T21-fr-br-uxr-repository-stories.md)
- **BR-036** – RW Step 7 Board Update Bugs - TODO (MEDIUM, Bugs in Release Workflow Step 7 board updates) - [BR-036](fr-br/BR-036-rw-step-7-board-update-bugs.md)
- **BR-035** – RW Housekeeping Step Not Working - TODO (MEDIUM, Release Workflow housekeeping step issues) - [BR-035](fr-br/BR-035-rw-housekeeping-step-not-working.md)
- **BR-034** – UKW MoSCoW Prioritization Missing - TODO (MEDIUM, Missing MoSCoW prioritization in UKW) - [BR-034](fr-br/BR-034-ukw-moscow-prioritization-missing.md)
- **BR-033** – UKW Board Disorganization - TODO (MEDIUM, Disorganization in Update Kanban Workflow board) - [BR-033](fr-br/BR-033-ukw-board-disorganization.md)
- **UXR-003** – Intelligent Epic Matching Canonical Adoption UAT - TODO (MEDIUM, UAT synthesis **E7:S05:T03** ✅; repository anchor **`RW -k`** **E7:S00:T03**) - [UXR-003](fr-br/UXR-003-intelligent-epic-matching-canonical-adoption-uat.md) | [E7:S00:T03](epics/Epic-7/Story-000-uxr-repo/T03-uxr-003-repository-anchor.md) · [E7:S05:T03](epics/Epic-7/Story-005-migration-uxr-research.md)
- **UXR-004** – Kanban Package Installation UAT - COMPLETE (synthesis **E7:S05:T04** ✅; repository anchor **`RW -k`** **E7:S00:T04**) - [UXR-004](fr-br/UXR-004-kanban-package-installation-uat.md) | [E7:S00:T04](epics/Epic-7/Story-000-uxr-repo/T04-uxr-004-repository-anchor.md) · [E7:S05:T04](epics/Epic-7/Story-005-migration-uxr-research.md)
- **FR-043** – UKW Gap Discovery TODO Tasks and Unfiled FR/BR - TODO (LOW, Discover gaps in UKW and unfiled items) - [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)
- **FR-042** – Implementation Planning Workflow (IPW) - TODO (LOW, Workflow for implementation planning) - [FR-042](fr-br/FR-042-implementation-planning-workflow-ipw.md)
- **FR-041** – Perpetual Task for Release Workflow Maintenance - TODO (LOW, Ongoing maintenance for Release Workflow) - [FR-041](fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md)
- **FR-040** – RW Update Kanban Board on Task Completion - TODO (LOW, Automatic Kanban board updates in Release Workflow) - [FR-040](fr-br/FR-040-rw-update-kanban-board-on-task-completion.md)
- **FR-044** – RW Temporary Execution Log for Recovery and Forensics - TODO (LOW, Temporary execution logs for Release Workflow) - [FR-044](fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md)
- **FR-039** – AI Dev Kit Project Review and Legacy Clean-up - TODO (LOW, Review and clean up legacy project elements) - [FR-039](fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)
- **FR-038** – RW Step 7 Scoped Kanban Sync UKW Mode - IMPLEMENTED (v0.5.1.38+1, documentation: scoped UKW Step 7, invocation_context, governance) - [FR-038](fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md)
- **FR-037** – Kanban Policy Task Prioritisation Queue Stack - TODO (LOW, Queue stack for task prioritization) - [FR-037](fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md)
- **FR-029** – Procedural Task Template Generation Hybrid Strategy - TODO (LOW, Hybrid strategy for task template generation) - [FR-029](fr-br/FR-029-procedural-task-template-generation-hybrid-strategy.md)
- **FR-028** – Cursor IDE Performance Considerations Awareness - TODO (LOW, Performance awareness for Cursor IDE) - [FR-028](fr-br/FR-028-cursor-ide-performance-considerations-awareness.md)
- **FR-027** – Add CMW to Workflow Management Package Documentation - TODO (LOW, Documentation for Changelog Management Workflow) - [FR-027](fr-br/FR-027-add-cmw-to-workflow-management-package-documentation.md)
- **FR-026** – Canonical Perpetual Task for Changelog Maintenance - TODO (LOW, Perpetual task for changelog maintenance) - [FR-026](fr-br/FR-026-canonical-perpetual-task-for-changelog-maintenance.md)
- **FR-025** – Changelog Management and Archival Workflow - TODO (LOW, Workflow for changelog management) - [FR-025](fr-br/FR-025-changelog-management-and-archival-workflow.md)
- **FR-024** – IDE Linter Check Before Commit in Release Workflow - TODO (LOW, Linter integration in Release Workflow) - [FR-024](fr-br/FR-024-ide-linter-check-before-commit-in-release-workflow.md)
- **FR-023** – Update Kanban Workflow (UKW) - TODO (LOW, Updates to Update Kanban Workflow) - [FR-023](fr-br/FR-023-update-kanban-workflow-ukw.md)
- **FR-022** – Policy Docs Machine-Readable Salience - TODO (LOW, Machine-readable policy documentation) - [FR-022](fr-br/FR-022-policy-docs-machine-readable-salience.md)
- **FR-020** – Version Validator Abstract Space Awareness - TODO (LOW, Abstract space awareness in version validator) - [FR-020](fr-br/FR-020-version-validator-abstract-space-awareness.md)
- **FR-019** – Intake Workflow Automation - TODO (LOW, Automation for intake workflow) - [FR-019](fr-br/FR-019-intake-workflow-automation.md)
- **FR-018** – Abstract Space Zero Numbered Est Docs - TODO (LOW, Zero-numbered documents in abstract space) - [FR-018](fr-br/FR-018-abstract-space-zero-numbered-est-docs.md)
- **FR-017** – Versioning Policy Hardening Doc-Init Build - TODO (LOW, Hardening versioning policy for doc-init builds) - [FR-017](fr-br/FR-017-versioning-policy-hardening-doc-init-build.md)
- **FR-016** – Kanban Granularity Discrete Task Docs - TODO (LOW, Discrete task documents for kanban granularity) - [FR-016](fr-br/FR-016-kanban-granularity-discrete-task-docs.md)
- **FR-015** – Harden Kanban Docs Update in Release Workflow - TODO (LOW, Harden kanban documentation updates in RW) - [FR-015](fr-br/FR-015-harden-kanban-docs-update-in-release-workflow.md)
- **FR-014** – RW Trigger for FR/BR Commits - TODO (LOW, Release Workflow trigger for FR/BR commits) - [FR-014](fr-br/FR-014-rw-trigger-for-fr-br-commits.md)
- **FR-013** – Trigger-Aware Release Workflow - TODO (LOW, Trigger-aware enhancements to Release Workflow) - [FR-013](fr-br/FR-013-trigger-aware-release-workflow.md)
- **FR-012** – Agentic Kanban Task Creation from FR/BR - TODO (LOW, Agentic task creation from FR/BR documents) - [FR-012](fr-br/FR-012-agentic-kanban-task-creation-from-fr-br.md)
- **FR-011** – Task Splitting Multiple Canonical Epics - TODO (LOW, Task splitting across multiple canonical epics) - [FR-011](fr-br/FR-011-task-splitting-multiple-canonical-epics.md)
- **FR-010** – Implement Actual Agentic Intelligence Task Mapping - TODO (LOW, Actual implementation of agentic task mapping) - [FR-010](fr-br/FR-010-implement-actual-agentic-intelligence-task-mapping.md)
- **FR-010** – Template Task Installation Two-Phase Migration - TODO (LOW, Two-phase migration for template task installation) - [FR-010](fr-br/FR-010-template-task-installation-two-phase-migration.md)
- **FR-009** – Intelligent Epic Matching AI-Assisted Canonical Adoption - TODO (LOW, AI-assisted epic matching for canonical adoption) - [FR-009](fr-br/FR-009-intelligent-epic-matching-ai-assisted-canonical-adoption.md)
- **FR-008** – Package Uninstall Capabilities - TODO (LOW, Uninstall capabilities for packages) - [FR-008](fr-br/FR-008-package-uninstall-capabilities.md)
- **FR-007** – Migration Utilities and Installation Modes - TODO (LOW, Migration utilities and installation modes) - [FR-007](fr-br/FR-007-migration-utilities-and-installation-modes.md)
- **FR-006** – Localization Language Selection UK/US English - TODO (LOW, Language selection for UK/US English) - [FR-006](fr-br/FR-006-localization-language-selection-uk-us-english.md)
- **FR-005** – Systematic Canonical Epics Stories Tasks Templates - TODO (LOW, Systematic templates for canonical structure) - [FR-005](fr-br/FR-005-systematic-canonical-epics-stories-tasks-templates.md)
- **FR-004** – GitHub Submission for FR/BR/UXR - TODO (LOW, GitHub integration for FR/BR/UXR submission) - [FR-004](fr-br/FR-004-github-submission-for-fr-br-uxr.md)
- **FR-003** – Dependency Tracking in Adopting Projects - TODO (LOW, Dependency tracking for project adoption) - [FR-003](fr-br/FR-003-dependency-tracking-in-adopting-projects.md)
- **FR-002** – Update Been There README - TODO (LOW, Update README for been-there functionality) - [FR-002](fr-br/FR-002-update-been-there-readme.md)
- **BR-010** – RW Doc-Init Detection Bug Story Task Docs Batch Creation - TODO (LOW, Bug in RW doc-init detection for story/task docs) - [BR-010](fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md)
- **BR-009** – Installer Discoverability and Documentation - TODO (LOW, Installer discoverability issues) - [BR-009](fr-br/BR-009-installer-discoverability-and-documentation.md)
- **BR-008** – Arbitrary 80 Threshold Contradicts Agentic Intelligence - TODO (LOW, Arbitrary threshold contradicts agentic approach) - [BR-008](fr-br/BR-008-arbitrary-80-threshold-contradicts-agentic-intelligence.md)
- **BR-007** – Multiple Bugs Kanban Package Installation - TODO (LOW, Multiple bugs in kanban package installation) - [BR-007](fr-br/BR-007-multiple-bugs-kanban-package-installation.md)
- **BR-006** – Missing Migration Support Pre-existing Kanban - TODO (LOW, Missing migration support for pre-existing kanban) - [BR-006](fr-br/BR-006-missing-migration-support-pre-existing-kanban.md)
- **BR-005** – Kanban Framework Epic Structure Gap UAT Finding - TODO (LOW, Gap found in kanban framework epic structure) - [BR-005](fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding.md)
- **BR-004** – Kanban Installation Includes Project-Specific Epics - TODO (LOW, Installation includes project-specific epics issue) - [BR-004](fr-br/BR-004-kanban-installation-includes-project-specific-epics.md)
- **BR-003** – RW Branch Validation Update Branches - TODO (LOW, RW branch validation for update branches) - [BR-003](fr-br/BR-003-rw-branch-validation-update-branches.md)
- **BR-002** – Changelog Validator Ordering Bug - TODO (LOW, Ordering bug in changelog validator) - [BR-002](fr-br/BR-002-changelog-validator-ordering-bug.md)
- **BR-001** – Validate Version Bump Epic Story Detection Bug - TODO (LOW, Bug in epic/story detection for version bump validation) - [BR-001](fr-br/BR-001-validate-version-bump-epic-story-detection-bug.md)

---

### Ongoing (O) - Perpetual Items

No ongoing FR/BR/UXR items currently.

---

## Board Statistics

**Total Items:** 70 FR/BR/UXR documents *(file count — not re-audited this pass)*

- **Feature Requests:** 51
- **Bug Reports:** 14  
- **User Experience Research:** 5

**By Priority:**

- **Critical:** 1 (BR-037)
- **High:** 7 (FR-045, FR-047, FR-046, UXR-001, UXR-002, UXR-005, FR-051)
- **Medium:** 10 (FR-031, FR-035, FR-034, FR-032, FR-030, FR-021, BR-036, BR-035, BR-034, BR-033, UXR-003, UXR-004)
- **Low:** 52 (remaining items)

**By Status:**

- **TODO:** 68
- **IN PROGRESS:** 1 (BR-037)
- **COMPLETED:** 0 (tracked in fr-br-uxr-completed.md)

> **Phase C hygiene:** Bucket counts above are **legacy snapshots**; a full recount + sync with [`fr-br-uxr-completed.md`](fr-br-uxr-completed.md) is a separate **UKW** pass (**T73** C2).

---

## Usage Instructions

### For Stakeholders

1. **Review priorities** - Check the appropriate priority section for items needing attention
2. **Track progress** - Monitor status changes and task creation
3. **Provide input** - Add comments or requirements to relevant FR/BR/UXR documents

### For Developers

1. **Pick items** - Choose highest priority items appropriate to your skills
2. **Create tasks** - Convert FR/BR/UXRs to Kanban tasks following the intake process
3. **Update status** - Move items between sections as work progresses
4. **Track completion** - Move completed items to fr-br-uxr-completed.md

### For Product Management

1. **Prioritize** - Adjust priority levels based on business needs
2. **Review** - Regular board reviews to ensure alignment
3. **Plan** - Use board information for release planning
4. **Report** - Provide status updates based on board content

---

*This board provides systematic FR/BR/UXR management with the same level of organization and visibility that the Kanban board provides to task execution.*
