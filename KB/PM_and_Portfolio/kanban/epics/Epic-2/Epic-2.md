---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:47Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2: Workflow Management Framework

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-02  
**Last updated:** 2025-12-12 (v0.2.10.2+1 – Story 10 Task 2 complete: Doc-init validation implemented in validators)  
**Branch:** `epic/2-workflow-management-framework`  
**Version Schema:** `0.2.S.T+B`  
**Production URL:** [N/A for this repo]

---

## Story Checklist

- [ ] **E2:S01 – RW Agent Execution & Docs** - IN PROGRESS (v0.2.1.7+1)  
  - Story: [`Story-001-rw-agent-execution-and-docs.md`](Story-001-rw-agent-execution-and-docs.md)
  - Tasks: T01-T07 ✅ COMPLETE (T07: Added support for update/maintenance branch patterns in branch validation)  
- [x] **E2:S02 – PDCA Integration into Release Workflow** - COMPLETE ✅ (v0.2.2.8+1 – All tasks complete)  
  - Story: [`Story-002-pdca-integration-into-release-workflow.md`](Story-002-pdca-integration-into-release-workflow.md)
- [x] **E2:S03 – Additional Workflows & Examples** - COMPLETE ✅ (v0.2.3.6+1 – All tasks complete)  
- [x] **E2:S04 – RW Installer & Plug-and-Play Adoption** - COMPLETE ✅ (v0.2.4.9+3 – All tasks complete including E2:S04:T09 build 3: Task naming format standardization)  
  - Story: [`Story-004-rw-installer-and-plug-and-play-adoption.md`](Story-004-rw-installer-and-plug-and-play-adoption.md)  
- [ ] **E2:S05 – Post-Implementation Review (PIR) Workflow** - TODO
  - Story: [`Story-005-post-implementation-review-workflow.md`](Story-005-post-implementation-review-workflow.md)
- [x] **E2:S06 – Package Uninstall and Recovery** - COMPLETE ✅ (v0.2.6.3+1 – All tasks complete)
  - Story: [`Story-006-package-uninstall-and-recovery.md`](Story-006-package-uninstall-and-recovery.md)
  - Tasks: T01 ✅ COMPLETE, T02 ✅ COMPLETE, T03 ✅ COMPLETE (Documentation and verification)
- [x] **E2:S07 – Trigger-Aware Release Workflow** - COMPLETE ✅ (v0.2.7.6+1 – All tasks complete: Trigger detection, registry, workflow executor, deliverable processor, trigger integration, agentic task workflow integration, workflow orchestrator, documentation and testing)
  - Story: [`Story-007-trigger-aware-release-workflow.md`](Story-007-trigger-aware-release-workflow.md)
  - Tasks: T00-T08 ✅ COMPLETE (FR-013: Trigger-aware RW with sub-workflow execution, FR-014: FR/BR commit trigger)
- [ ] **E2:S08 – Harden Release Workflow Reliability** - TODO (v0.2.8.0+0 – Story created for FR-015)
  - Story: [`Story-008-harden-release-workflow-reliability.md`](Story-008-harden-release-workflow-reliability.md)
  - Tasks: T00 ✅ COMPLETE, T01-T07 TODO (FR-015: Harden Kanban docs update step in RW)
- [x] **E2:S09 – Kanban Granularity & Discrete Task Docs (RW Integration)** - COMPLETE ✅ (v0.2.9.6+1 – Story complete: All tasks finished, RW integration complete)
  - Story: [`Story-009-kanban-granularity-discrete-task-docs.md`](Story-009-kanban-granularity-discrete-task-docs.md)
  - Tasks: T00-T06 ✅ COMPLETE (FR-016: RW Step 1, validators, agent execution guide, documentation, dependency wiring)
  - **Coordination:** Coordinates with E4:S11 (Kanban policy and templates)
- [ ] **E2:S10 – Versioning Policy Hardening — Doc-Init Build (+0)** - IN PROGRESS (v0.2.10.2+1 – Story 10 Task 2 complete: Doc-init validation implemented)
  - Story: [`Story-010-doc-init-build-zero-for-new-est.md`](Story-010-doc-init-build-zero-for-new-est.md)
  - Tasks: T00 ✅ COMPLETE, T01 ✅ COMPLETE (v0.2.10.1+0), T02 ✅ COMPLETE (v0.2.10.2+1), T03-T07 TODO (FR-017: Doc-init build `+0` for new E/S/T, FR-020: Validator abstract space awareness)
  - **Dependency:** Unblocked (FR-016 complete via E2:S09)
- [ ] **E2:S11 – Intake Workflow Automation** - TODO (v0.2.11.0+0 – Story created for FR-019)
  - Story: [`Story-011-intake-workflow-automation.md`](Story-011-intake-workflow-automation.md)
  - Tasks: T00 ✅ COMPLETE, T01-T09 TODO (FR-019: Automated intake workflow for FR/BR/UXR); related to FR-018 (abstract space concept used by doc-init)

---

## Overview

Epic 2 owns the **Workflow Management framework** living under `packages/frameworks/workflow mgt/`.

It defines how Release Workflow (RW) and other workflows are:

- Documented (agent execution guides, references)
- Integrated with `.cursorrules` and Cursor behaviour
- Used as **portable templates** in other projects

---

## Goals

1. **Document RW agent execution clearly and portably**  
   - Make `release-workflow-agent-execution.md` fully template-ready.  
   - Ensure examples are clearly labelled as dev-kit vs external.

2. **Add non-release workflow examples**  
   - Provide additional workflows (e.g., refactor, migration) that follow the same ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern.

3. **Clarify RW-as-template behaviour**  
   - Document how RW should be customised when imported into a new project.

4. **Create Post-Implementation Review (PIR) workflow**  
   - Enable systematic review of completed Epics and Stories
   - Capture lessons learned and identify improvements
   - Support both Epic-level and Story-level reviews

---

## Stories (Initial)

### Story 1: RW Agent Execution & Docs

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** 2025-12-09 (v0.2.1.7+1 – Task 7 created: Add support for update/maintenance branch patterns in branch validation)  

**Goal:**  
Make RW agent execution documentation fully portable, clearly distinguishing dev-kit behaviour from external examples.

**Tasks:**
- [x] E2:S01:T01 – Audit `release-workflow-agent-execution.md` for project-specific assumptions ✅ COMPLETE (v0.2.1.1+3)
- [x] E2:S01:T02 – Tag Confidentia/fynd.deals examples and add dev-kit examples ✅ COMPLETE (v0.2.1.1+4)
- [x] E2:S01:T03 – Align `.cursorrules` RW trigger section with dev-kit policy ✅ COMPLETE (v0.2.1.1+5)
- [x] E2:S01:T04 – Update RW changelog step to require verification before marking fixes as "fixed" ✅ COMPLETE (v0.2.1.1+2)
- [x] E2:S01:T05 – Harden RW branch safety checks to stop execution on wrong branch ✅ COMPLETE (v0.2.1.5+1)
- [x] E2:S01:T06 – Fix changelog validator ordering bug ✅ COMPLETE (v0.2.1.6+2)
- [x] E2:S01:T07 – Add support for update/maintenance branch patterns in branch validation ✅ COMPLETE (v0.2.1.7+1)

> Full story: [`Story-001-rw-agent-execution-and-docs.md`](Story-001-rw-agent-execution-and-docs.md)  

---

## Dependencies

**Blocks:**
- Clear documentation for users who import the workflow mgt package into their projects.

**Blocked By:**
- Epic 1 Story 1 (dev-kit versioning & RW behaviour) for some cross-references.

**Coordinates With:**
- Epic 3: Numbering & Versioning Framework  
- Epic 4: Kanban Framework  

---

## Risks & Mitigations

- Risk: RW docs feel tied to a single project.  
  - Mitigation: Aggressive labelling and separation of project-specific vs framework-level content.

---

## References

- `packages/frameworks/workflow mgt/README.md`  
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`  
- `.cursorrules` RW trigger section (when added to this repo)  


