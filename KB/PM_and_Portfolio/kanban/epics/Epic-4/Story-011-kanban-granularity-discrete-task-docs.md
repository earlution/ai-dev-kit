---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 11: Kanban Granularity & Discrete Task Docs (Kanban Framework)

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** 2025-12-11 (v0.4.11.0+0 – Story created for FR-016 Kanban-specific work)  
**Estimated Effort:** 1 week  
**Started:** [TBD]  
**Completed:** [TBD]  
**Version:** v0.4.11.0+0  
**Code:** E4S11

---

## Task Checklist

- [ ] **E4:S11:T00 – Story Creation and Task Decomposition** ✅ COMPLETE (v0.4.11.0+0)
- [ ] **E4:S11:T01 – Update Kanban Governance Policy to Mandate 3-Tier Structure**
- [ ] **E4:S11:T02 – Create Task Document Template and Update Story Template**
- [ ] **E4:S11:T03 – Update Versioning Policy with Task Doc Requirements (Kanban-related sections)**
- [ ] **E4:S11:T04 – Define Abstract Space for Zero-Numbered E/S/T Docs (FR-018)**

> **Format:** `E4:S11:Txx` (Epic 4, Story 11, Task with 2-digit zero padding)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.11.1+1)`)  
> **Coordination:** This story coordinates with E2:S09 (Workflow Management) for RW integration

---

## Overview

Implement Kanban-specific components of FR-016: Kanban Granularity & Discrete Task Docs. This story focuses on Kanban policy updates, template creation, and versioning policy updates related to Kanban governance. RW-specific work (Step 1 updates, validators, agent execution guide) is handled in E2:S09.

---

## Goals

- [ ] Update Kanban governance policy to mandate 3-tier structure and discrete Task docs
- [ ] Create Task document template and update Story template
- [ ] Update versioning policy with Task doc requirements (Kanban-related sections)
- [ ] Coordinate with E2:S09 for RW integration

---

## Tasks

### E4:S11:T00 – Story Creation and Task Decomposition

**Input:** FR-016 requirements, E2:S09 coordination plan  
**Deliverable:** Story document created, Kanban-specific tasks defined  
**Dependencies:** E2:S09:T00 (coordination established)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe (documentation only)

**Approach:**
1. Review FR-016 requirements
2. Identify Kanban-specific vs. RW-specific work
3. Create Story 11 under Epic 4
4. Define Kanban-specific tasks (T01-T03)
5. Cross-reference E2:S09 for coordination

**Status:** ✅ COMPLETE (v0.4.11.0+0)

---

### E4:S11:T01 – Update Kanban Governance Policy to Mandate 3-Tier Structure

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

**Coordination:**
- E2:S09:T04 depends on this task (RW Step 1 needs policy requirements)

---

### E4:S11:T02 – Create Task Document Template and Update Story Template

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

**Coordination:**
- E2:S09:T04 depends on this task (RW Step 1 needs template structure)

---

### E4:S11:T03 – Update Versioning Policy with Task Doc Requirements (Kanban-related sections)

**Input:** Current versioning policy documents  
**Deliverable:** Updated versioning policy requiring Task doc presence and alignment (Kanban-related sections)  
**Dependencies:** T01 (policy requirements)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Approach:**
1. Review current versioning policy documents:
   - `KB/Architecture/Standards_and_ADRs/dev-kit-versioning-policy.md` (dev-kit local)
   - `packages/frameworks/numbering & versioning/versioning-policy.md` (framework)
   - `packages/frameworks/numbering & versioning/versioning-strategy.md` (framework)
2. Update Kanban-related sections:
   - Add requirement that Task doc must exist before versioning
   - Document Task doc → Version TASK component alignment requirement
   - Update Task transition rules to require Task doc presence
   - Add validation requirements for Task doc presence and alignment
3. Reference FR-017 for doc-init (`+0`) support (prerequisite)
4. Coordinate with E2:S09:T03 for RW-related versioning policy updates

**Acceptance Criteria:**
- [ ] Versioning policy requires Task doc presence before versioning (Kanban sections)
- [ ] Task doc → Version TASK component alignment documented
- [ ] Task transition rules updated
- [ ] Validation requirements documented
- [ ] All versioning policy documents updated consistently

**Coordination:**
- E2:S09:T03 handles RW-related versioning policy updates
- This task focuses on Kanban governance aspects

---

### E4:S11:T04 – Define Abstract Space for Zero-Numbered E/S/T Docs (FR-018)

**Input:** FR-018 requirements, Kanban and Numbering policy documents  
**Deliverable:** Abstract space concept defined in Kanban Policy, complementary section in Numbering Policy, SOP for committing initial E/S/T docs  
**Dependencies:** T01-T03 (FR-016 policy and template work must be complete)  
**Blocker:** FR-016 (requires discrete Task docs and 3-tier structure first)  
**Parallel Development Candidacy:** Blocked (depends on FR-016 completion)

**Approach:**
1. Review FR-018 requirements:
   - Abstract space concept for zero-numbered E/S/T docs
   - Examples: `0.3.0.0+0` (Epic), `0.2.5.0+0` (Story), `0.10.4.6+0` (Task)
   - SOP for committing initial E/S/T docs
2. Add section to Kanban Governance Policy:
   - Section: "Abstract Spaces for Forensic Traceability"
   - Subsection: "Zero-Numbered E/S/T Documentation"
   - Define Epic-level (`0.{EPIC}.0.0+0`), Story-level (`0.{EPIC}.{STORY}.0+0`), Task-level (`0.{EPIC}.{STORY}.{TASK}+0`) abstract spaces
   - Subsection: "SOP for Committing Initial E/S/T Docs"
   - Specify when, where, and how to commit initial E/S/T documentation
   - Cross-reference to Numbering Policy
3. Coordinate with Epic 3 (Numbering & Versioning Framework) for Numbering Policy section:
   - Section: "Abstract Space Version Schema"
   - Subsection: "Epic-Level Abstract Spaces"
   - Subsection: "Story-Level Abstract Spaces"
   - Subsection: "Task-Level Abstract Spaces"
   - Cross-reference to Kanban Policy
4. Ensure both policies align:
   - Consistent terminology and examples
   - Clear relationship between abstract space (`+0`) and functional work (`+1`)
   - Link to FR-017 (doc-init build `+0`) implementation

**Acceptance Criteria:**
- [ ] Kanban Policy includes section defining abstract spaces for zero-numbered E/S/T docs
- [ ] Kanban Policy specifies SOP for committing initial E/S/T docs
- [ ] Numbering Policy includes complementary section explaining abstract space version schema
- [ ] Both policies cross-reference each other
- [ ] Abstract space examples provided for Epic, Story, and Task levels
- [ ] Policy explains relationship between abstract space (`+0`) and functional work (`+1`)
- [ ] Policy aligns with FR-016 (discrete Task docs) and FR-017 (doc-init build `+0`)

**Coordination:**
- Requires coordination with Epic 3 (Numbering & Versioning Framework) for Numbering Policy updates
- Depends on FR-016 completion (T01-T03)
- Supports FR-017 implementation (doc-init build `+0`)

---

## Acceptance Criteria

- [ ] **AC1:** Kanban policy updated to mandate 3-tier structure and discrete Task docs
- [ ] **AC2:** Task docs include: ID, scope, acceptance criteria, status, version anchor, completion date, related BR/FR
- [ ] **AC3:** Task document template created with examples
- [ ] **AC4:** Story template updated to clarify Task doc formats
- [ ] **AC5:** Versioning policy updated with Task doc requirements (Kanban sections)
- [ ] **AC6:** Abstract space concept defined in Kanban Policy and Numbering Policy (FR-018)

---

## Dependencies

**Blocks:**
- E2:S09:T04 (RW Step 1 update) - requires policy and templates
- E2:S09:T05 (Validators) - requires policy requirements

**Blocked By:**
- None (can proceed independently)

**Related Work:**
- **E2:S09:** Kanban Granularity & Discrete Task Docs (Workflow Management coordination)
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (depends on FR-016)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (T04)

---

## Completion Summary

[To be filled upon completion]

---

## References

- **E2:S09:** `KB/PM_and_Portfolio/kanban/epics/Epic-2/Story-009-kanban-granularity-discrete-task-docs.md`
- **FR-016:** `KB/PM_and_Portfolio/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md`
- **FR-017:** `KB/PM_and_Portfolio/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md`
- **FR-018:** `KB/PM_and_Portfolio/kanban/fr-br/FR-018-abstract-space-zero-numbered-est-docs.md`
- **Kanban Governance Policy (Canonical):** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Kanban Governance Policy (Dev-Kit):** `KB/PM_and_Portfolio/rituals/policy/kanban-governance-policy.md`
- **Versioning Policy (Dev-Kit):** `KB/Architecture/Standards_and_ADRs/dev-kit-versioning-policy.md`
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`

---

## Next Actions

- [ ] Begin T01: Update Kanban Governance Policy
- [ ] Create Task document template (T02)
- [ ] Update versioning policy (T03)
- [ ] After FR-016 completion: Define abstract space concept (T04 - FR-018)
- [ ] Coordinate with E2:S09 for RW integration

