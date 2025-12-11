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
- [ ] **E2:S09:T01 – Update Kanban Governance Policy to Mandate 3-Tier Structure**
- [ ] **E2:S09:T02 – Create Task Document Template and Update Story Template**
- [ ] **E2:S09:T03 – Update Versioning Policy with Task Doc Requirements**
- [ ] **E2:S09:T04 – Update RW Step 1 to Require Task Doc Presence**
- [ ] **E2:S09:T05 – Enhance Validators for Task Doc Presence and Alignment**
- [ ] **E2:S09:T06 – Update RW Agent Execution Guide**
- [ ] **E2:S09:T07 – Documentation and Testing**

> **Format:** `E2:S09:Txx` (Epic 2, Story 9, Task with 2-digit zero padding)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.2.9.1+1)`)  

---

## Overview

Harden Kanban governance to require **3-tier granularity** (Epic → Story → Task) with **discrete Task documents** (or clearly delimited sections using Task ID). This ensures every task has a canonical, traceable document anchor and prevents anti-patterns where tasks are bundled or introduced implicitly. This story is a prerequisite for FR-017 (doc-init build `+0` for new E/S/T).

---

## Goals

- [ ] Enforce explicit 3-tier structure (Epic → Story → Task) - no implicit/inline tasks
- [ ] Require discrete Task documents (or clearly delimited sections using Task ID)
- [ ] Ensure Task docs include all required fields (ID, scope, acceptance criteria, status, version anchor, completion date, related BR/FR)
- [ ] Update RW Step 1 to locate and validate Task doc presence
- [ ] Enhance validators to check Epic/Story/Task alignment and Task doc presence
- [ ] Update all relevant policy documents (Kanban, Versioning, RW procedures)

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

### E2:S09:T01 – Update Kanban Governance Policy to Mandate 3-Tier Structure

**Input:** Current Kanban governance policy documents  
**Deliverable:** Updated Kanban governance policy mandating 3-tier structure and discrete Task docs  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Approach:**
1. Review current Kanban governance policy documents:
   - `packages/frameworks/kanban/policies/kanban-governance-policy.md` (canonical SoT)
   - `KB/PM_and_Portfolio/rituals/policy/kanban-governance-policy.md` (dev-kit local)
   - `packages/frameworks/numbering & versioning/kanban-governance-policy.md` (framework)
2. Add explicit requirement for 3-tier structure (Epic → Story → Task)
3. Mandate discrete Task documents (or clearly delimited sections using Task ID)
4. Define required Task doc fields:
   - Task ID (`E{epic}:S{story}:T{task}`)
   - Scope
   - Acceptance criteria
   - Status
   - Version anchor (for doc-init support, see FR-017)
   - Completion date
   - Related BR/FR links
5. Prohibit implicit/inline tasks (must be explicit at task tier)
6. Update FR/BR → Task → Story → Epic flow documentation
7. Add validation requirements for Task doc presence

**Acceptance Criteria:**
- [ ] Kanban governance policy explicitly mandates 3-tier structure
- [ ] Policy requires discrete Task docs (or clearly delimited sections)
- [ ] Required Task doc fields are documented
- [ ] Implicit/inline tasks are prohibited
- [ ] All three policy documents updated consistently

---

### E2:S09:T02 – Create Task Document Template and Update Story Template

**Input:** Current Story template (`packages/frameworks/kanban/templates/STORY_TEMPLATE.md`)  
**Deliverable:** Task document template and updated Story template  
**Dependencies:** T01 (policy requirements)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Approach:**
1. Create new Task document template:
   - `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
   - Include all required fields from T01
   - Support both formats: separate file OR clearly delimited section
2. Update Story template:
   - Clarify that tasks can be either:
     - Separate files (e.g., `Task-011-*.md` in Story directory)
     - Clearly delimited sections within Story doc (using Task ID as header)
   - Update task checklist format to reference Task doc location
   - Add guidance on when to use separate files vs. sections
3. Create example Task doc (separate file format)
4. Create example Task section (within Story doc format)
5. Update template documentation

**Acceptance Criteria:**
- [ ] Task document template created with all required fields
- [ ] Story template updated to clarify Task doc formats
- [ ] Examples provided for both formats
- [ ] Template documentation updated

---

### E2:S09:T03 – Update Versioning Policy with Task Doc Requirements

**Input:** Current versioning policy documents  
**Deliverable:** Updated versioning policy requiring Task doc presence and alignment  
**Dependencies:** T01 (policy requirements)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Approach:**
1. Review current versioning policy documents:
   - `KB/Architecture/Standards_and_ADRs/dev-kit-versioning-policy.md` (dev-kit local)
   - `packages/frameworks/numbering & versioning/versioning-policy.md` (framework)
   - `packages/frameworks/numbering & versioning/versioning-strategy.md` (framework)
2. Add requirement that Task doc must exist before versioning
3. Document Task doc → Version TASK component alignment requirement
4. Update Task transition rules to require Task doc presence
5. Add validation requirements for Task doc presence and alignment
6. Reference FR-017 for doc-init (`+0`) support (prerequisite)

**Acceptance Criteria:**
- [ ] Versioning policy requires Task doc presence before versioning
- [ ] Task doc → Version TASK component alignment documented
- [ ] Task transition rules updated
- [ ] Validation requirements documented
- [ ] All versioning policy documents updated consistently

---

### E2:S09:T04 – Update RW Step 1 to Require Task Doc Presence

**Input:** Current RW Step 1 procedure and agent execution guide  
**Deliverable:** Updated RW Step 1 requiring Task doc presence and validation  
**Dependencies:** T01, T02 (policy and templates)  
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

### E2:S09:T05 – Enhance Validators for Task Doc Presence and Alignment

**Input:** Current validation scripts  
**Deliverable:** Enhanced validators checking Task doc presence and Epic/Story/Task alignment  
**Dependencies:** T01, T02, T04 (policy, templates, RW Step 1)  
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

### E2:S09:T06 – Update RW Agent Execution Guide

**Input:** Current RW agent execution guide  
**Deliverable:** Updated RW agent execution guide with Task doc requirements  
**Dependencies:** T01, T02, T04 (policy, templates, RW Step 1)  
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

### E2:S09:T07 – Documentation and Testing

**Input:** All previous tasks  
**Deliverable:** Complete documentation and test coverage  
**Dependencies:** T01-T06 (all previous tasks)  
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
- Proper task traceability and version alignment
- Prevention of scope drift and mis-versioning

**Blocked By:**
- None (can be implemented independently; FR-017 depends on this)

**Related Work:**
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (this story)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (depends on this story)
- **Epic 2:** Workflow Management Framework
- **Epic 3:** Numbering & Versioning Framework
- **Epic 4:** Kanban Framework

---

## Completion Summary

[To be filled upon completion]

---

## References

- **FR-016:** `KB/PM_and_Portfolio/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md`
- **FR-017:** `KB/PM_and_Portfolio/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md`
- **Kanban Governance Policy (Canonical):** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Kanban Governance Policy (Dev-Kit):** `KB/PM_and_Portfolio/rituals/policy/kanban-governance-policy.md`
- **Versioning Policy (Dev-Kit):** `KB/Architecture/Standards_and_ADRs/dev-kit-versioning-policy.md`
- **Versioning Policy (Framework):** `packages/frameworks/numbering & versioning/versioning-policy.md`
- **RW Agent Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`

---

## Next Actions

- [ ] Begin T01: Update Kanban Governance Policy
- [ ] Create Task document template (T02)
- [ ] Update RW Step 1 procedure (T04)
- [ ] Enhance validators (T05)

