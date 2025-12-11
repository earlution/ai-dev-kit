---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 9: Kanban Granularity & Discrete Task Docs (3-Tier Structure)

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** 2025-12-11 (v0.2.9.0+0 – Story created for FR-016)  
**Estimated Effort:** 1 week  
**Started:** [TBD]  
**Completed:** [TBD]  
**Version:** v0.2.9.0+0  
**Code:** E2S09

---

## Task Checklist

- [ ] **E2:S09:T00 – Story Creation and FR-016 Intake** ✅ COMPLETE (v0.2.9.0+0)
- [ ] **E2:S09:T01 – Coordination and Task Decomposition**
- [ ] **E2:S09:T02 – Update RW Step 1 to Require Task Doc Presence**
- [ ] **E2:S09:T03 – Enhance Validators for Task Doc Presence and Alignment**
- [ ] **E2:S09:T04 – Update RW Agent Execution Guide**
- [ ] **E2:S09:T05 – Documentation and Testing**
- [ ] **E2:S09:T06 – Dependency Wiring Cross-References** ✅ COMPLETE (v0.2.9.6+0)

> **Coordination:** Kanban-specific work (policy, templates) is handled in **E4:S11**. This story focuses on RW-specific integration.

> **Format:** `E2:S09:Txx` (Epic 2, Story 9, Task with 2-digit zero padding)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.2.9.1+1)`)  

---

## Overview

Coordinate RW-specific integration for **3-tier granularity** (Epic → Story → Task) with **discrete Task documents**. This story focuses on RW Step 1 updates, validators, and agent execution guide changes. Kanban-specific work (policy updates, templates) is handled in **E4:S11**. This story is a prerequisite for FR-017 (doc-init build `+0` for new E/S/T).

---

## Goals

- [ ] Coordinate work decomposition between Epic 2 (RW) and Epic 4 (Kanban)
- [ ] Update RW Step 1 to locate and validate Task doc presence
- [ ] Enhance validators to check Epic/Story/Task alignment and Task doc presence
- [ ] Update RW agent execution guide with Task doc requirements
- [ ] Ensure proper sequencing: Kanban policy/templates (E4:S11) → RW integration (E2:S09)

---

## Tasks

### E2:S09:T00 – Story Creation and FR-016 Intake

**Input:** FR-016: Kanban Granularity & Discrete Task Docs (3-Tier Structure)  
**Deliverable:** Story document created, FR-016 linked, tasks defined  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe (documentation only)

**Approach:**
1. Read FR-016 and understand requirements
2. Create Story 9 document under Epic 2
3. Define tasks based on FR-016 acceptance criteria
4. Link FR-016 to this story
5. Update Epic 2 document

**Status:** ✅ COMPLETE (v0.2.9.0+0)

---

### E2:S09:T01 – Coordination and Task Decomposition

**Input:** FR-016 requirements, E2:S09 initial task list  
**Deliverable:** Work decomposed into Epic 2 (RW) and Epic 4 (Kanban) tasks, coordination established  
**Dependencies:** T00 (Story creation)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe (coordination only)

**Approach:**
1. Analyze FR-016 requirements to identify:
   - Kanban-specific work (policy, templates) → E4:S11
   - RW-specific work (Step 1, validators, agent guide) → E2:S09
2. Create E4:S11 for Kanban-specific tasks
3. Update E2:S09 to focus on RW-specific work
4. Establish dependencies:
   - E2:S09:T02 (RW Step 1) depends on E4:S11:T01 (Kanban policy) and E4:S11:T02 (templates)
   - E2:S09:T03 (Validators) depends on E4:S11:T01 (Kanban policy)
5. Document coordination approach and sequencing

**Acceptance Criteria:**
- [ ] E4:S11 created with Kanban-specific tasks (T01-T03)
- [ ] E2:S09 updated with RW-specific tasks (T02-T05)
- [ ] Dependencies documented and cross-referenced
- [ ] Sequencing clear: Kanban work → RW integration

**Related Work:**
- **E4:S11:** Kanban Granularity & Discrete Task Docs (Kanban Framework)
- **E4:S11:T01:** Update Kanban Governance Policy (prerequisite for E2:S09:T02)
- **E4:S11:T02:** Create Task Document Template (prerequisite for E2:S09:T02)

---

### E2:S09:T02 – Update RW Step 1 to Require Task Doc Presence

**Input:** Current RW Step 1 procedure and agent execution guide  
**Deliverable:** Updated RW Step 1 requiring Task doc presence and validation  
**Dependencies:** E4:S11:T01 (Kanban policy), E4:S11:T02 (Task template), T01 (coordination)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Approach:**
1. Review current RW Step 1 documentation:
   - `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
   - `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
2. Update "B. IDENTIFY COMPLETED TASK" section:
   - Require Task doc presence (separate file OR clearly delimited section)
   - Fail if Task doc not found
   - Locate Task doc using Task ID pattern
   - Validate Task doc contains required fields
3. Add validation step:
   - Check Task doc exists
   - Verify Task ID matches version TASK component
   - Verify Epic/Story/Task alignment
4. Update error messages to guide Task doc creation if missing
5. Update RW Step 1 procedure documentation

**Acceptance Criteria:**
- [ ] RW Step 1 requires Task doc presence
- [ ] Task doc location logic implemented (separate file OR section)
- [ ] Validation checks Task doc presence and alignment
- [ ] Error messages guide Task doc creation
- [ ] RW Step 1 procedure documentation updated

---

### E2:S09:T03 – Enhance Validators for Task Doc Presence and Alignment

**Input:** Current validation scripts  
**Deliverable:** Enhanced validators checking Task doc presence and Epic/Story/Task alignment  
**Dependencies:** E4:S11:T01 (Kanban policy), T02 (RW Step 1)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Approach:**
1. Review current validation scripts:
   - `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
   - `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
2. Enhance `validate_version_bump.py`:
   - Add function to locate Task doc (separate file OR section)
   - Add function to validate Task doc presence
   - Add function to validate Task doc fields (ID, scope, AC, etc.)
   - Add function to validate Epic/Story/Task alignment
   - Integrate into existing validation flow
3. Enhance `validate_branch_context.py`:
   - Add Task doc presence check
   - Add Epic/Story/Task alignment check
4. Update validation error messages
5. Add tests for Task doc validation

**Acceptance Criteria:**
- [ ] Validators check Task doc presence
- [ ] Validators check Task doc fields
- [ ] Validators check Epic/Story/Task alignment
- [ ] Validation error messages are clear and actionable
- [ ] Tests added for Task doc validation

---

### E2:S09:T04 – Update RW Agent Execution Guide

**Input:** Current RW agent execution guide  
**Deliverable:** Updated RW agent execution guide with Task doc requirements  
**Dependencies:** E4:S11:T01 (Kanban policy), E4:S11:T02 (Task template), T02 (RW Step 1)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Approach:**
1. Review current RW agent execution guide:
   - `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
2. Update "B. IDENTIFY COMPLETED TASK" section:
   - Document Task doc location logic
   - Document Task doc validation requirements
   - Add examples of Task doc formats (separate file vs. section)
   - Add error handling for missing Task docs
3. Add new section: "Task Document Requirements"
   - Explain 3-tier structure requirement
   - Explain discrete Task doc requirement
   - Explain Task doc formats (separate file vs. section)
   - Link to Task template
4. Update examples to show Task doc usage
5. Cross-reference Kanban and Versioning policies

**Acceptance Criteria:**
- [ ] RW agent execution guide documents Task doc requirements
- [ ] Task doc location logic documented
- [ ] Task doc validation requirements documented
- [ ] Examples provided for both Task doc formats
- [ ] Cross-references to policies added

---

### E2:S09:T05 – Documentation and Testing

**Input:** All previous tasks, E4:S11 tasks  
**Deliverable:** Complete documentation and test coverage for RW integration  
**Dependencies:** T01-T04 (all previous tasks), E4:S11:T01-T03 (Kanban work)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Approach:**
1. Create comprehensive documentation:
   - Update Kanban framework README with 3-tier structure requirement
   - Update versioning framework README with Task doc requirements
   - Create migration guide for existing projects (how to add Task docs)
   - Update user guides with Task doc creation process
2. Test Task doc validation:
   - Test with separate Task doc files
   - Test with Task doc sections in Story files
   - Test with missing Task docs (should fail)
   - Test with incomplete Task docs (should fail)
   - Test Epic/Story/Task alignment validation
3. Test RW Step 1 with Task docs:
   - Test Task doc location (separate file)
   - Test Task doc location (section)
   - Test Task doc validation
   - Test error handling
4. Update changelog and version markers
5. Verify all policy documents are consistent

**Acceptance Criteria:**
- [ ] Comprehensive documentation created
- [ ] Test coverage for Task doc validation
- [ ] Test coverage for RW Step 1 with Task docs
- [ ] Migration guide for existing projects
- [ ] All policy documents verified for consistency

---

### E2:S09:T06 – Dependency Wiring Cross-References

**Input:** E2:S10:T06 dependency chain, FR-020 requirements  
**Deliverable:** Cross-references wired to show E2:S09 blocks E2:S10:T06  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe (documentation only)

**Approach:**
1. Update Related Work section to include FR-020 and E2:S10:T06
2. Document that E2:S09 blocks E2:S10:T06 via dependency chain
3. Add cross-references to show dependency relationship

**Acceptance Criteria:**
- [ ] Related Work section updated with FR-020 and E2:S10:T06
- [ ] Dependency relationship documented
- [ ] Cross-references wired

**Status:** ✅ COMPLETE (v0.2.9.6+0)

---

## Acceptance Criteria

- [ ] **AC1:** Kanban policy updated to mandate 3-tier structure and discrete Task docs
- [ ] **AC2:** Task docs include: ID, scope, acceptance criteria, status, version anchor, completion date, related BR/FR
- [ ] **AC3:** RW Step 1 and validators enforce presence of Task doc and alignment of Epic/Story/Task with version
- [ ] **AC4:** Doc-init (`+0`) path is supported and required for new Task docs (see FR-017)
- [ ] **AC5:** No implicit/inline tasks allowed (must be explicit at task tier)
- [ ] **AC6:** Task docs created before implementation (tied to doc-init)
- [ ] **AC7:** Clear, auditable mapping from task to version
- [ ] **AC8:** Automated checks for Epic/Story/Task alignment enabled

---

## Dependencies

**Blocks:**
- FR-017: Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (requires discrete Task docs)
- FR-018: Abstract Space for Zero-Numbered E/S/T Docs (requires discrete Task docs and 3-tier structure)
- Proper task traceability and version alignment
- Prevention of scope drift and mis-versioning

**Blocked By:**
- None (can be implemented independently; FR-017 and FR-018 depend on this)

**Related Work:**
- **E4:S11:** Kanban Granularity & Discrete Task Docs (Kanban Framework) - Kanban-specific work (prerequisite)
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (this story + E4:S11)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (depends on FR-016, enables E2:S10)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (depends on FR-016)
- **FR-020:** Version Validator Abstract Space Awareness (depends on E2:S10:T02, which depends on this story)
- **E2:S10:** Doc-Init Build (+0) for New E/S/T (depends on this story via T01)
- **E2:S10:T06:** Update Version Validator for Abstract Space Awareness (depends on E2:S10:T02, which depends on this story)
- **Epic 2:** Workflow Management Framework
- **Epic 3:** Numbering & Versioning Framework
- **Epic 4:** Kanban Framework

---

## Completion Summary

[To be filled upon completion]

---

## References

- **E4:S11:** `KB/PM_and_Portfolio/kanban/epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs.md` (Kanban-specific work)
- **FR-016:** `KB/PM_and_Portfolio/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md`
- **FR-017:** `KB/PM_and_Portfolio/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md`
- **RW Agent Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Validation Scripts:** `packages/frameworks/workflow mgt/scripts/validation/`

---

## Next Actions

- [ ] Complete T01: Coordination and Task Decomposition
- [ ] Wait for E4:S11:T01-T02 (Kanban policy and templates)
- [ ] Begin T02: Update RW Step 1 procedure
- [ ] Enhance validators (T03)

