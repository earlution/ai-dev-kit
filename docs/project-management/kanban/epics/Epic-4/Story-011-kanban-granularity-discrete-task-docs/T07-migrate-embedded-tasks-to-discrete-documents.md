---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 11, Task 7: Migrate Embedded Tasks to Discrete Task Documents

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** 2025-12-18 (v0.4.11.7+0 – Task created)  
**Started:** [TBD]  
**Completed:** [TBD]  
**Version:** v0.4.11.7+0  
**Code:** E4S11T07

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E4:S11:T07`

---

## Scope

Migrate all embedded tasks (delimited sections within Story documents) to discrete Task documents (separate files) to fully implement the 3-tier Kanban structure as mandated by FR-016. This ensures every task has a canonical, traceable document anchor and enables proper validation, versioning alignment, and RW Step 1 task location.

**Problem Statement:**
- Current state: 784 embedded task references in Story documents
- Only 43 discrete Task documents exist
- Policy mandates discrete Task documents (recommended format)
- Embedded tasks make validation and version alignment difficult
- RW Step 1 cannot reliably locate Task documents

**Solution:**
- Create migration plan and strategy
- Convert embedded tasks to discrete Task documents systematically
- Update Story documents to reference discrete Task documents
- Validate migration completeness
- Update documentation and examples

---

## Input

- Current Kanban structure: `docs/project-management/kanban/epics/`
- 784 embedded task references in Story documents
- 43 existing discrete Task documents (examples)
- Task document template: `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- FR-016 requirements for 3-tier structure
- Kanban governance policy (mandates discrete Task documents)

---

## Deliverable

**Migration Plan and Implementation:**

1. **Migration Plan Document**
   - Analysis of current state (embedded vs discrete)
   - Migration strategy (phased approach)
   - Task extraction methodology
   - Validation criteria
   - Rollback plan

2. **Migration Script/Tool (Optional)**
   - Automated task extraction from Story documents
   - Task document generation from embedded sections
   - Story document update (replace embedded with references)
   - Validation and verification

3. **Migrated Task Documents**
   - All embedded tasks converted to discrete Task documents
   - Story documents updated to reference discrete Task documents
   - All Task documents follow canonical template structure

4. **Validation Report**
   - Migration completeness verification
   - Task document structure validation
   - Story document reference validation
   - RW Step 1 compatibility verification

5. **Updated Documentation**
   - Migration guide for future reference
   - Examples updated to show discrete Task documents
   - Best practices documentation

---

## Acceptance Criteria

- [ ] Migration plan document created with comprehensive strategy
- [ ] Current state analysis completed (all embedded tasks cataloged)
- [ ] Migration script/tool created (if automated approach chosen)
- [ ] All embedded tasks extracted and converted to discrete Task documents
- [ ] All Story documents updated to reference discrete Task documents
- [ ] All Task documents follow canonical template structure
- [ ] All Task documents include required fields (Task ID, Scope, Input, Deliverable, Acceptance Criteria, Status, Version Anchor)
- [ ] Validation report confirms migration completeness
- [ ] RW Step 1 can locate all Task documents
- [ ] Validators pass for all migrated tasks
- [ ] Documentation updated with migration examples
- [ ] Zero embedded tasks remaining (or clearly documented exceptions)

---

## Approach

### Phase 1: Analysis and Planning

1. **Current State Analysis**
   - Catalog all Story documents with embedded tasks
   - Extract all task IDs and their locations
   - Identify task patterns (naming, structure, completeness)
   - Count tasks per Story, per Epic
   - Identify tasks that already have discrete documents

2. **Migration Strategy Design**
   - Choose approach: Automated script vs Manual migration
   - Define phased rollout (by Epic, by Story, or all at once)
   - Define task document naming convention
   - Define Story document update pattern
   - Define validation criteria

3. **Risk Assessment**
   - Identify high-risk migrations (complex tasks, dependencies)
   - Define rollback strategy
   - Define validation checkpoints
   - Define testing approach

### Phase 2: Tooling (If Automated)

1. **Task Extraction Script**
   - Parse Story documents for embedded task sections
   - Extract task content (header, body, metadata)
   - Identify task boundaries (start/end markers)
   - Handle edge cases (nested tasks, incomplete tasks)

2. **Task Document Generator**
   - Generate Task document from extracted content
   - Apply canonical template structure
   - Populate required fields
   - Generate file name following naming convention

3. **Story Document Updater**
   - Replace embedded task sections with references
   - Update task checklist to reference discrete documents
   - Maintain Story document structure
   - Preserve non-task content

4. **Validation Script**
   - Verify Task document creation
   - Verify Story document updates
   - Check required fields presence
   - Validate naming conventions
   - Verify references are correct

### Phase 3: Migration Execution

1. **Pilot Migration**
   - Select 1-2 Stories for pilot
   - Execute migration (automated or manual)
   - Validate results
   - Refine approach based on learnings

2. **Phased Rollout**
   - Migrate by Epic (or by Story priority)
   - Validate after each phase
   - Fix issues before proceeding
   - Document learnings

3. **Final Validation**
   - Run comprehensive validation
   - Verify all tasks migrated
   - Verify all references correct
   - Verify RW Step 1 compatibility
   - Verify validators pass

### Phase 4: Documentation and Cleanup

1. **Documentation Updates**
   - Update migration guide
   - Update examples
   - Update best practices
   - Document exceptions (if any)

2. **Cleanup**
   - Remove old embedded task sections (if not preserved for reference)
   - Update cross-references
   - Update indexes
   - Archive migration artifacts

---

## Dependencies

**Depends On:**
- E4:S11:T01 (Kanban governance policy updated) ✅ COMPLETE
- E4:S11:T02 (Task document template created) ✅ COMPLETE
- E2:S09:T02 (RW Step 1 updated to require Task docs) ✅ COMPLETE
- E2:S09:T03 (Validators enhanced) ✅ COMPLETE

**Blocks:**
- Full FR-016 compliance
- Complete 3-tier structure implementation
- RW Step 1 reliable task location
- Validator enforcement of discrete Task documents

**Blocked By:**
- None (can start immediately)

**Parallel Development Candidacy:** Safe (can work on analysis and planning in parallel with other work)

---

## Related Work

**Related BR/FR Links:**
- FR-016: Kanban Granularity & Discrete Task Docs (3-Tier Structure) - This task implements the migration
- FR-017: Doc-init build `+0` for new E/S/T - Migration enables doc-init support

**Related Tasks:**
- E4:S11:T01: Update Kanban Governance Policy to Mandate 3-Tier Structure ✅ COMPLETE
- E4:S11:T02: Create Task Document Template and Update Story Template ✅ COMPLETE
- E2:S09:T02: Update RW Step 1 to Require Task Doc Presence ✅ COMPLETE
- E2:S09:T03: Enhance Validators for Task Doc Presence and Alignment ✅ COMPLETE

**Related Stories:**
- E4:S11: Kanban Granularity & Discrete Task Docs (Kanban Framework) - Parent story
- E2:S09: Kanban Granularity & Discrete Task Docs (Workflow Management) - RW integration

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.11.7+1)`)

**Current Status:** TODO
- Latest version: v0.4.11.7+0
- Task created, migration planning in progress

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update version file with task completion
- Update changelog with task completion

---

## Notes

**Current State:**
- 784 embedded task references in Story documents
- 43 discrete Task documents exist (examples)
- Policy mandates discrete Task documents
- Tooling in place (templates, validators, RW integration)

**Migration Challenges:**
- Large volume (784 tasks)
- Varying task completeness (some have full details, others minimal)
- Cross-references to update
- Validation after migration
- Ensuring no information loss

**Migration Benefits:**
- Full FR-016 compliance
- Better traceability and validation
- RW Step 1 reliable task location
- Consistent structure across all tasks
- Easier maintenance and updates

**Approach Considerations:**
- **Automated:** Faster, but requires robust parsing and validation
- **Manual:** More control, but time-consuming for 784 tasks
- **Hybrid:** Automated extraction with manual review/refinement

**Recommended Approach:**
- Start with automated script for extraction and generation
- Manual review and refinement for complex tasks
- Phased rollout by Epic priority
- Comprehensive validation at each phase

---

## Completion Summary

[To be filled when task is complete]

---

## References

- `docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md` - FR-016 requirements
- `packages/frameworks/kanban/templates/TASK_TEMPLATE.md` - Task document template
- `docs/project-management/rituals/policy/kanban-governance-policy.md` - Kanban governance policy
- `docs/project-management/kanban/epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs.md` - Parent story
- `docs/project-management/kanban/epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management/T06-cross-project-meta-analysis-and-canonical-framework-design.md` - Example discrete Task document

---

## Next Actions

- [ ] Create detailed migration plan document
- [ ] Analyze current state (catalog all embedded tasks)
- [ ] Design migration strategy (automated vs manual vs hybrid)
- [ ] Create migration script/tool (if automated approach)
- [ ] Execute pilot migration (1-2 Stories)
- [ ] Refine approach based on pilot learnings
- [ ] Execute phased rollout
- [ ] Validate migration completeness
- [ ] Update documentation

