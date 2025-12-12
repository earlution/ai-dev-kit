---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 10: Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T

**Status:** IN PROGRESS (v0.2.10.1+0)  
**Priority:** HIGH  
**Last updated:** 2025-12-12 (v0.2.10.1+0 – Task 1 complete: RW Step 2 updated with doc-init detection)  
**Estimated Effort:** 1 week  
**Started:** [TBD]  
**Completed:** [TBD]  
**Version:** v0.2.10.0+0  
**Code:** E2S10

---

## Task Checklist

- [ ] **E2:S10:T00 – Story Creation and FR-017 Intake** ✅ COMPLETE (v0.2.10.0+0)
- [x] **E2:S10:T01 – Update RW Step 2 to Support Doc-Init Path** ✅ COMPLETE (v0.2.10.1+0)
- [ ] **E2:S10:T02 – Implement Doc-Init Validation (Docs-Only Check)**
- [ ] **E2:S10:T03 – Update CHANGELOG Format for Doc Init Entries**
- [ ] **E2:S10:T04 – Update Versioning Policy with Doc-Init Logic**
- [ ] **E2:S10:T05 – Update RW Step 1 Procedure Documentation**
- [ ] **E2:S10:T06 – Update Version Validator for Abstract Space Awareness (FR-020)**
- [ ] **E2:S10:T07 – Documentation and Testing**

> **Format:** `E2:S10:Txx` (Epic 2, Story 10, Task with 2-digit zero padding)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.2.10.1+1)`)  
> **Dependency:** This story is blocked by FR-016 (requires discrete Task docs first)

---

## Overview

Introduce a formal **doc-init build `+0`** for newly created Epic/Story/Task (E/S/T) documentation to harden the numbering policy and prevent the anti-pattern of "first real change shipped under a prior task version." The doc-init build establishes the canonical version anchor for the E/S/T before any functional changes land.

---

## Goals

- [ ] RW supports a doc-init path that emits `RC.EPIC.STORY.TASK+0` for new E/S/T docs only
- [ ] Functional changes for that task require `+1` or higher
- [ ] RW validators fail if non-doc changes are present in a `+0` run
- [ ] CHANGELOG format documents "Doc Init" entries
- [ ] Versioning Policy and RW-STEP1 procedure updated to include doc-init logic

---

## Tasks

### E2:S10:T00 – Story Creation and FR-017 Intake

**Input:** FR-017: Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T  
**Deliverable:** Story document created, FR-017 linked, tasks defined  
**Dependencies:** None  
**Blocker:** FR-016 (requires discrete Task docs first)  
**Parallel Development Candidacy:** Blocked (depends on FR-016 completion)

**Approach:**
1. Read FR-017 and understand requirements
2. Create Story 10 document under Epic 2
3. Define tasks based on FR-017 acceptance criteria
4. Link FR-017 to this story
5. Update Epic 2 document
6. Note dependency on FR-016 completion

**Status:** ✅ COMPLETE (v0.2.10.0+0)

---

### E2:S10:T01 – Update RW Step 2 to Support Doc-Init Path

**Input:** Current RW Step 2 procedure, FR-016 discrete Task docs, FR-017 doc-init requirements  
**Deliverable:** RW Step 2 detects "new doc-init" state and emits `+0` for docs-only changes  
**Dependencies:** E4:S11:T01-T02 (Kanban policy and Task templates), E2:S09:T02 (RW Step 2 Task doc presence)  
**Blocker:** FR-016 (requires discrete Task docs) - UNBLOCKED (E2:S09 complete)  
**Parallel Development Candidacy:** Safe (documentation only)

**Scope:** Update Release Workflow Step 2 (Bump Version) to detect doc-init state for newly created Epic/Story/Task documentation. Add detection logic to identify new E/S/T docs, verify docs-only changes, check for prior versions, and emit `+0` build number for doc-init builds. Integrate with existing Task document presence detection from E2:S09:T02.

**Approach:**
1. Review current RW Step 1 procedure:
   - `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
   - `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
2. Add detection logic for "new doc-init" state:
   - Detect if new E/S/T doc was created (separate file OR section)
   - Check if no prior version exists for this E/S/T
   - Verify changes are docs-only (no code changes)
3. Emit `+0` build number for doc-init:
   - If new doc-init detected → `RC.EPIC.STORY.TASK+0`
   - Subsequent functional work starts at `+1`
4. Update RW Step 1 logic to handle doc-init path
5. Integrate with E2:S09:T02 (Task doc presence detection)

**Acceptance Criteria:**
- [x] RW Step 2 detects "new doc-init" state ✅
- [x] RW Step 2 emits `+0` for new E/S/T docs only ✅
- [x] RW Step 2 verifies changes are docs-only ✅
- [x] RW Step 2 logic integrated with Task doc presence detection ✅

**Status:** ✅ COMPLETE (v0.2.10.1+0)

**Completion Summary:**
- ✅ RW Agent Execution Guide updated with doc-init detection logic (A.1)
- ✅ Step 2 procedure enhanced from 6-step (A-F) to 7-step (A-G) to include doc-init detection
- ✅ Version bump logic (C) updated to check doc-init state before normal version bump
- ✅ Validation logic (D, F) updated to include doc-init validation
- ✅ Version file update logic (E) updated to support `+0` builds
- ✅ Version history updated to v1.6.0
- ✅ All acceptance criteria met

---

### E2:S10:T02 – Implement Doc-Init Validation (Docs-Only Check)

**Input:** Current validation scripts, doc-init detection logic  
**Deliverable:** Validators fail if non-doc changes are present in a `+0` run  
**Dependencies:** T01 (doc-init detection)  
**Blocker:** FR-016  
**Parallel Development Candidacy:** Blocked (depends on T01)

**Approach:**
1. Review current validation scripts:
   - `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
   - `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
2. Add doc-init validation:
   - Check if version is `+0` (doc-init build)
   - Verify all changed files are documentation only:
     - E/S/T doc files (Epic, Story, Task docs)
     - README/index updates (if allowed per policy)
     - No code files changed
   - Fail validation if non-doc changes detected
3. Add clear error messages for doc-init validation failures
4. Integrate into existing validation flow

**Acceptance Criteria:**
- [ ] Validators check if version is `+0` (doc-init)
- [ ] Validators verify all changes are docs-only
- [ ] Validators fail if non-doc changes present in `+0` run
- [ ] Clear error messages provided

---

### E2:S10:T03 – Update CHANGELOG Format for Doc Init Entries

**Input:** Current changelog format, doc-init detection logic  
**Deliverable:** CHANGELOG format documents "Doc Init" entries  
**Dependencies:** T01 (doc-init detection)  
**Blocker:** FR-016  
**Parallel Development Candidacy:** Blocked (depends on T01)

**Approach:**
1. Review current changelog format:
   - `CHANGELOG.md` (main summary)
   - `KB/Changelog_and_Release_Notes/Changelog_Archive/CHANGELOG_v{version}.md` (detailed)
2. Add "Doc Init" section/format:
   - Main changelog: `📋 Doc Init: E{epic}:S{story}:T{task} - [Description]`
   - Detailed changelog: Include "Doc Init" type and description
3. Update changelog generation logic:
   - Detect doc-init builds (`+0`)
   - Format changelog entries accordingly
   - Include E/S/T information
4. Update changelog templates/examples

**Acceptance Criteria:**
- [ ] CHANGELOG format includes "Doc Init" entries
- [ ] Doc-init entries clearly marked in both main and detailed changelogs
- [ ] Changelog generation logic updated
- [ ] Examples provided

---

### E2:S10:T04 – Update Versioning Policy with Doc-Init Logic

**Input:** Current versioning policy documents, doc-init requirements  
**Deliverable:** Updated versioning policy requiring doc-init logic  
**Dependencies:** E4:S11:T03 (Versioning Policy Task doc requirements), T01 (doc-init detection)  
**Blocker:** FR-016  
**Parallel Development Candidacy:** Blocked (depends on FR-016)

**Approach:**
1. Review current versioning policy documents:
   - `KB/Architecture/Standards_and_ADRs/dev-kit-versioning-policy.md` (dev-kit local)
   - `packages/frameworks/numbering & versioning/versioning-policy.md` (framework)
   - `packages/frameworks/numbering & versioning/versioning-strategy.md` (framework)
2. Add doc-init logic to versioning policy:
   - Document `+0` build number for doc-init
   - Explain relationship between doc-init (`+0`) and functional work (`+1`)
   - Update Task transition rules to include doc-init path
   - Reference FR-018 (abstract space concept)
3. Coordinate with E4:S11:T03 for consistency
4. Update all versioning policy documents

**Acceptance Criteria:**
- [ ] Versioning policy documents doc-init logic
- [ ] Policy explains `+0` vs `+1` relationship
- [ ] Task transition rules updated
- [ ] All versioning policy documents updated consistently

---

### E2:S10:T05 – Update RW Step 1 Procedure Documentation

**Input:** Current RW Step 1 documentation, doc-init implementation  
**Deliverable:** Updated RW Step 1 procedure documentation with doc-init logic  
**Dependencies:** T01-T04 (all doc-init implementation)  
**Blocker:** FR-016  
**Parallel Development Candidacy:** Blocked (depends on previous tasks)

**Approach:**
1. Review current RW Step 1 documentation:
   - `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
   - `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
2. Update "B. IDENTIFY COMPLETED TASK" section:
   - Document doc-init detection logic
   - Explain `+0` build number emission
   - Add examples of doc-init scenarios
3. Add new section: "Doc-Init Build Path"
   - Explain when doc-init is triggered
   - Document validation requirements
   - Provide examples
4. Update RW Step 1 procedure documentation
5. Cross-reference FR-016 and FR-018

**Acceptance Criteria:**
- [ ] RW Step 1 documentation includes doc-init logic
- [ ] Doc-init detection process documented
- [ ] Examples provided
- [ ] Cross-references to FR-016 and FR-018 added

---

### E2:S10:T06 – Documentation and Testing

**Input:** All previous tasks, doc-init implementation  
**Deliverable:** Complete documentation and test coverage  
**Dependencies:** T01-T05 (all previous tasks)  
**Blocker:** FR-016  
**Parallel Development Candidacy:** Blocked (depends on all previous tasks)

**Approach:**
1. Create comprehensive documentation:
   - Update RW documentation with doc-init examples
   - Create migration guide for existing projects
   - Update user guides with doc-init process
2. Test doc-init functionality:
   - Test with new Epic doc (`+0`)
   - Test with new Story doc (`+0`)
   - Test with new Task doc (`+0`)
   - Test validation (should fail if code changes in `+0`)
   - Test subsequent functional work (`+1`)
3. Test edge cases:
   - Multiple E/S/T docs created simultaneously
   - Doc-init outside RW context
   - Validation failures
4. Update changelog and version markers
5. Verify all policy documents are consistent

**Acceptance Criteria:**
- [ ] Comprehensive documentation created
- [ ] Test coverage for doc-init functionality
- [ ] Edge cases tested
- [ ] Migration guide for existing projects
- [ ] All policy documents verified for consistency

---

### E2:S10:T06 – Update Version Validator for Abstract Space Awareness (FR-020)

**Input:** Current version validator (`validate_version_bump.py`), FR-020 requirements  
**Deliverable:** Version validator recognizes `+0` as valid BUILD for abstract spaces  
**Dependencies:** 
- **T02:** Doc-Init Validation (Docs-Only Check) - provides doc-init validation foundation
- **T01:** RW Step 1 Doc-Init Path - provides doc-init detection logic
- **E4:S11:T01-T02:** Kanban policy and Task templates (required for T01)
- **E2:S09:T02:** RW Step 1 Task doc presence (required for T01)
- **E4:S11:** Kanban-specific work (policy, templates) - prerequisite for E2:S09
- **E2:S09:** RW integration work (Task doc presence) - prerequisite for T01
- **FR-016:** Kanban Granularity & Discrete Task Docs (blocks E4:S11 and E2:S09)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) (abstract space concept)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (abstract space definition)

**Blocker:** 
- **FR-016:** Blocks E4:S11 and E2:S09, which are prerequisites for T01, which is prerequisite for T02, which is prerequisite for T06
- **E4:S11:** Must complete before E2:S09 can proceed
- **E2:S09:** Must complete before E2:S10:T01 can proceed
- **E2:S10:T01:** Must complete before E2:S10:T02 can proceed
- **E2:S10:T02:** Must complete before E2:S10:T06 can proceed

**Parallel Development Candidacy:** Blocked (depends on full dependency chain)

**Note:** This task will require multiple RWs with BUILD bumps for each E/S/T file being updated during implementation.

**Approach:**
1. Review current validator implementation:
   - `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
   - Current logic expects BUILD >= 1
   - No awareness of abstract space (`+0`) concept
2. Update validator to recognize `+0` as valid:
   - Accept `+0` as valid BUILD number
   - Check that `+0` is only used for first-time E/S/T doc commits
   - Validate that `+0` commits are docs-only (no code changes)
   - Enforce `+1` or higher for functional changes
3. Add detection logic:
   - Detect new E/S/T doc files (first-time commit via git diff)
   - Check git diff for docs-only requirement
   - Verify version matches E/S/T being created
4. Add validation logic:
   - If BUILD = 0: Must be first-time E/S/T doc commit
   - If BUILD = 0: Must be docs-only (no code changes)
   - If BUILD >= 1: Can include functional changes
5. Update error messages:
   - Explain why `+0` is invalid (if used incorrectly)
   - Explain what conditions make `+0` valid
   - Provide guidance on how to fix invalid usage
6. Add test cases:
   - Valid `+0` abstract space builds
   - Invalid `+0` usage (code changes present)
   - Invalid `+0` usage (E/S/T doc already exists)
   - Functional changes requiring `+1` or higher
7. Update validator documentation

**RW Requirements:**
- This task will require multiple RWs with BUILD bumps for each E/S/T file being updated:
  - Validator script updates (`validate_version_bump.py`) - separate RW with BUILD bump
  - Test file updates (new test cases) - separate RW with BUILD bump
  - Documentation updates (validator docs) - separate RW with BUILD bump
  - Each file update should be committed with its own BUILD increment (e.g., `+1`, `+2`, `+3`)
  - Follow standard RW process for each commit

**Acceptance Criteria:**
- [ ] Validator recognizes `+0` as valid BUILD for abstract spaces
- [ ] Validator checks that `+0` is only used for first-time E/S/T doc commits
- [ ] Validator validates that `+0` commits are docs-only (no code changes)
- [ ] Validator enforces `+1` or higher for functional changes
- [ ] Validator provides clear error messages for invalid `+0` usage
- [ ] Validator detects E/S/T doc creation (new file detection)
- [ ] Validator checks git diff for docs-only requirement
- [ ] Test cases cover all abstract space scenarios
- [ ] Documentation updated with abstract space validation logic

---

### E2:S10:T07 – Documentation and Testing

## Acceptance Criteria

- [ ] **AC1:** RW supports a doc-init path that emits `RC.EPIC.STORY.TASK+0` for new E/S/T docs only
- [ ] **AC2:** Functional changes for that task require `+1` or higher
- [ ] **AC3:** RW validators fail if non-doc changes are present in a `+0` run
- [ ] **AC4:** CHANGELOG format documents "Doc Init" entries
- [ ] **AC5:** Versioning Policy and RW-STEP1 procedure updated to include doc-init logic
- [ ] **AC6:** Doc-init validation is deterministic (100% confidence)
- [ ] **AC7:** Clear separation between task introduction (docs) and implementation (code)
- [ ] **AC8:** Version validator recognizes `+0` as valid BUILD for abstract spaces (FR-020)
- [ ] **AC9:** Version validator validates abstract space conditions (first-time E/S/T doc, docs-only)

---

## Dependencies

**Blocks:**
- Proper version anchor establishment for new tasks
- Prevention of "first real change shipped under prior task" anti-pattern
- Clear forensic traceability

**Blocked By:**
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) - Requires discrete Task docs to anchor doc-init builds
- **E4:S11:** Kanban-specific work (policy, templates) must be complete before E2:S09
- **E2:S09:** RW integration work (Task doc presence) must be complete before E2:S10:T01
- **E2:S10:T01:** RW Step 1 doc-init detection must be complete before E2:S10:T02
- **E2:S10:T02:** Doc-init validation must be complete before E2:S10:T06

**Related Work:**
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (prerequisite - blocks this story)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (this story)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (defines abstract space concept)
- **FR-020:** Version Validator Abstract Space Awareness (validator enhancement - T06)
- **E2:S09:** Kanban Granularity & Discrete Task Docs (RW Integration) (prerequisite for T01)
- **E4:S11:** Kanban Granularity & Discrete Task Docs (Kanban Framework) (prerequisite for E2:S09)
- **E2:S10:T01:** RW Step 1 Doc-Init Path (prerequisite for T02)
- **E2:S10:T02:** Doc-Init Validation (prerequisite for T06)

---

## Completion Summary

[To be filled upon completion]

---

## References

- **FR-017:** `KB/PM_and_Portfolio/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md`
- **FR-016:** `KB/PM_and_Portfolio/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md`
- **FR-018:** `KB/PM_and_Portfolio/kanban/fr-br/FR-018-abstract-space-zero-numbered-est-docs.md`
- **FR-020:** `KB/PM_and_Portfolio/kanban/fr-br/FR-020-version-validator-abstract-space-awareness.md`
- **RW Agent Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Versioning Policy (Dev-Kit):** `KB/Architecture/Standards_and_ADRs/dev-kit-versioning-policy.md`
- **Versioning Policy (Framework):** `packages/frameworks/numbering & versioning/versioning-policy.md`

---

## Next Actions

- [ ] Wait for FR-016 completion (E4:S11 and E2:S09)
- [ ] Begin T01: Update RW Step 1 to Support Doc-Init Path
- [ ] Implement doc-init validation (T02)
- [ ] Update changelog format (T03)

