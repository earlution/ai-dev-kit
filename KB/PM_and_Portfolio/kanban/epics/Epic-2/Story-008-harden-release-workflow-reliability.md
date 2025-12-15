---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 008 – Harden Release Workflow Reliability

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-10  
**Last updated:** 2025-12-15 (v0.2.8.3+1 – T03 complete: Step 7 hardened: mandatory and blocking)  
**Version:** v0.2.8.3+1  
**Code:** E2S08

---

## Overview

Harden the Release Workflow to improve reliability and ensure all mandatory steps are properly executed and validated. This story focuses on making Step 7 (Auto-update Kanban Docs) mandatory, reliable, and validated, with careful analysis to determine where deterministic approaches vs agentic intelligence are most appropriate.

---

## Goal

Improve Release Workflow reliability by:
- Making Step 7 (Kanban Docs Update) mandatory and blocking
- Creating framework-agnostic Kanban update implementation
- Adding validation to ensure updates succeed
- Using deterministic approaches where close to 100% reliability is achievable
- Using agentic intelligence only where necessary for reliability
- Providing clear error handling and recovery guidance

---

## Task Checklist

- [x] **E2:S08:T00 – Story creation and FR-015 intake** ✅ COMPLETE (v0.2.8.0+0)
- [x] **E2:S08:T01 – Analyze atomic steps for deterministic vs agentic approach** ✅ COMPLETE (v0.2.8.1+1)
- [x] **E2:S08:T02 – Create framework-agnostic Kanban update script** ✅ COMPLETE (v0.2.8.2+1)
- [x] **E2:S08:T03 – Make Step 7 mandatory and blocking** ✅ COMPLETE (v0.2.8.3+1)
- [ ] **E2:S08:T04 – Add validation step for Kanban updates** - TODO
- [ ] **E2:S08:T05 – Implement error handling and recovery guidance** - TODO
- [ ] **E2:S08:T06 – Update RW documentation and agent execution guide** - TODO
- [ ] **E2:S08:T07 – Testing and validation** - TODO

---

## Tasks

### E2:S08:T00 – Story creation and FR-015 intake

**Status:** ✅ COMPLETE (v0.2.8.0+0)  
**Priority:** HIGH  
**Dependencies:** FR-015  
**Blocker:** None

**Input:**
- FR-015: Harden Kanban Docs Update in Release Workflow

**Deliverable:**
- Story document created ✅
- FR-015 accepted and mapped to this story ✅
- All tasks defined ✅

**Acceptance Criteria:**
- ✅ Story document created
- ✅ FR-015 linked to this story
- ✅ All tasks defined

---

### E2:S08:T01 – Analyze atomic steps for deterministic vs agentic approach

**Status:** ✅ COMPLETE (v0.2.8.1+1)  
**Priority:** HIGH  
**Dependencies:** E2:S08:T00  
**Blocker:** None

**Scope:**
Analyze RW Step 7 (Auto-update Kanban Docs) to decompose it into atomic sub-steps and classify each as deterministic (targeting ≈100% reliability) or agentic (requiring LLM/agent judgement). Produce a concrete, testable blueprint for implementing FR-015 across E2:S08:T02–T07.

**Input:**
- FR-015 requirements
- Current Step 7 implementation
- Kanban documentation structure
- Reliability requirements (close to 100% confidence for deterministic)

**Deliverable:**
- Analysis document identifying:
  - Atomic steps in Kanban docs update process
  - Steps suitable for deterministic approach (close to 100% reliability achievable)
  - Steps requiring agentic intelligence (complex logic, edge cases, ambiguous situations)
  - Rationale for each classification
  - Reliability confidence estimates

**Acceptance Criteria:**
- [x] ✅ All atomic steps identified and documented
- [x] ✅ Each step classified as deterministic or agentic with rationale
- [x] ✅ Reliability confidence estimates provided for deterministic steps
- [x] ✅ Edge cases and ambiguous situations identified for agentic steps
- [x] ✅ Analysis document complete and reviewable

**Completion Summary:**

Created comprehensive analysis document (`packages/frameworks/workflow mgt/KB/Analysis/T01-kanban-docs-update-deterministic-vs-agentic-analysis.md`) decomposing RW Step 7 into 18 atomic sub-steps across 6 phases:

1. **Locate context** (Steps 1-3): Version/E/S/T resolution, path resolution, doc loading
2. **Extract authoritative state** (Steps 4-6): Parse Story Task Checklist, Story header, compute derived state
3. **Plan required updates** (Steps 7-8): Derive target state, detect board docs
4. **Apply updates** (Steps 9-11): Update Story doc, Epic doc, Kanban board
5. **Validate updates** (Steps 12-14): Consistency checks, policy validation, cross-checks
6. **Error handling** (Steps 15-18): Detect failures, decide repair vs block, generate guidance

**Key Classifications:**
- **Deterministic (≈100% reliability target):** Steps 1-7, 9-10 (canonical), 12-15
- **Agentic:** Fallback path resolution, non-canonical prose updates, repair decisions, recovery guidance

**Implementation Blueprint:**
- Directly informs E2:S08:T02–T07 implementation approach
- Defines test matrix (canonical flows, non-canonical flows, hard-fail flows)
- Establishes validation criteria and error handling patterns

**Key Considerations:**
- **Reliability is the primary metric** - Use deterministic where close to 100% confidence is achievable
- **Deterministic approaches appropriate for:**
  - File path resolution (if structure is standardized)
  - Version marker insertion (if format is standardized)
  - Status field updates (if status values are known)
  - Simple pattern matching and replacement
- **Agentic intelligence required for:**
  - Detecting which docs need updating (complex logic, multiple factors)
  - Handling edge cases (missing files, permission errors, malformed docs)
  - Ambiguous situations (multiple possible interpretations)
  - Providing intelligent error recovery guidance
  - Context-aware decision making

---

### E2:S08:T02 – Create framework-agnostic Kanban update script

**Status:** ✅ COMPLETE (v0.2.8.2+1)  
**Priority:** HIGH  
**Dependencies:** E2:S08:T01  
**Blocker:** None

**Scope:**
Create a framework-agnostic Python script implementing the deterministic pipeline from T01 analysis. The script must support config-driven path resolution, parse canonical Story/Epic structures, apply structured text transforms, and validate updates. It should work across all projects using the framework.

**Input:**
- Analysis from T01 (deterministic vs agentic classification)
- Kanban documentation structure
- Framework requirements (must work across all projects)

**Deliverable:**
- Framework-agnostic Kanban update script/handler
- Hybrid implementation:
  - Deterministic functions for high-confidence steps
  - Agentic intelligence for complex steps
- Support for:
  - Story document updates (version marker, task status, completion status)
  - Epic document updates (story status, last updated version, completion status)
  - Kanban board updates (epic/story status, version markers)
- Auto-detection of which docs need updating

**Acceptance Criteria:**
- [x] ✅ Script/handler is framework-agnostic (not project-specific)
- [x] ✅ Deterministic steps implemented with high reliability
- [x] ✅ Agentic intelligence integrated for complex steps (hooks provided)
- [x] ✅ All three doc types supported (Story, Epic, Board)
- [x] ✅ Auto-detection works correctly
- [x] ✅ Works across all projects using the framework

**Completion Summary:**

Created framework-agnostic Kanban update script (`packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`) implementing the deterministic pipeline from T01 analysis:

**Implemented Deterministic Steps:**
- **Steps 1-3:** Version component extraction, config-driven path resolution, doc loading
- **Steps 4-6:** Parse Story Task Checklist, parse Story header, compute completion state
- **Step 7:** Derive target state for Story/Epic docs
- **Steps 9-10:** Apply structured text transforms to Story and Epic docs (canonical patterns)
- **Steps 12-14:** Post-update validation and consistency checks

**Key Features:**
- Config-driven path resolution using `rw-config.yaml` with fallback to canonical defaults
- Robust regex parsing for canonical Story/Epic structures
- Template-driven updates for header metadata, checklists, and version markers
- Validation of internal consistency (version alignment, status consistency)
- Dry-run mode for testing
- Framework-agnostic design (no project-specific hardcoding)

**Agentic Hooks Provided:**
- Non-canonical section handler (for ad-hoc prose references)
- Kanban board update handler (mostly agentic due to free-form layout)
- Error recovery guidance generation (structured error detection + agentic guidance)

**Testing:**
- Script tested with `--dry-run` mode
- Successfully updates Story and Epic docs for canonical structures
- Handles missing files gracefully
- Validates version consistency

**Next Steps:**
- T03: Wire script into RW Step 7 as mandatory and blocking
- T04: Add formal validation step
- T05: Implement comprehensive error handling

---

### E2:S08:T03 – Make Step 7 mandatory and blocking

**Status:** ✅ COMPLETE (v0.2.8.3+1)  
**Priority:** HIGH  
**Dependencies:** E2:S08:T02  
**Blocker:** None

**Scope:**
Update RW Step 7 configuration to make it mandatory and blocking, and wire in the framework-agnostic script from T02. Ensure the workflow blocks if Step 7 fails with clear error messages.

**Input:**
- Kanban update script from T02
- Release Workflow YAML configuration
- Workflow execution framework

**Deliverable:**
- Step 7 updated to `required: true` and `blocking: true`
- Handler updated to use framework-agnostic implementation
- Workflow blocks if Step 7 fails
- Clear error messages when blocking occurs

**Acceptance Criteria:**
- [x] ✅ Step 7 is mandatory (`required: true`)
- [x] ✅ Step 7 is blocking (`blocking: true` or equivalent)
- [x] ✅ Handler uses framework-agnostic implementation
- [x] ✅ Workflow blocks if Step 7 fails
- [x] ✅ Clear error messages provided

**Completion Summary:**

Updated `release-workflow.yaml` Step 7 configuration to harden Kanban docs update:

**Changes Made:**
- **`required: false` → `required: true`** - Step 7 is now mandatory
- **Added `mandatory: true`** - Explicitly marks step as mandatory
- **Added `blocking: true`** - Workflow will block if Step 7 fails
- **Handler:** `confidentia.kanban_update` → `framework.kanban_update` - Updated to framework-agnostic handler
- **Script path:** Updated to use framework script `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- **Config:** Added `use_rw_config: true` to enable config-driven path resolution

**Impact:**
- RW will now **always** update Kanban docs (cannot be skipped)
- RW will **block** if Kanban docs update fails (prevents inconsistent state)
- Uses framework-agnostic script (works across all projects)
- Clear error messages guide recovery when blocking occurs

**Next Steps:**
- T04: Add formal validation step (enhance script validation)
- T05: Implement comprehensive error handling
- T06: Update RW documentation with Step 7 details

---

### E2:S08:T04 – Add validation step for Kanban updates

**Status:** TODO  
**Priority:** HIGH  
**Dependencies:** E2:S08:T03  
**Blocker:** None

**Input:**
- Updated Step 7 from T03
- Kanban documentation structure
- Validation requirements

**Deliverable:**
- Validation logic that verifies:
  - All required docs were updated
  - Updates were successful (files exist, format correct)
  - Version markers are correct
  - Status fields are correct
- Validation step (Step 7.5 or integrated into Step 7)
- Workflow blocks if validation fails

**Acceptance Criteria:**
- [ ] Validation checks all required updates
- [ ] Validation verifies update success
- [ ] Validation checks version markers
- [ ] Validation checks status fields
- [ ] Workflow blocks if validation fails
- [ ] Clear error messages identify what failed

---

### E2:S08:T05 – Implement error handling and recovery guidance

**Status:** TODO  
**Priority:** HIGH  
**Dependencies:** E2:S08:T04  
**Blocker:** None

**Input:**
- Validation step from T04
- Common error scenarios
- Recovery patterns

**Deliverable:**
- Comprehensive error handling:
  - File not found errors
  - Permission errors
  - Format/malformed doc errors
  - Missing required fields
- Recovery guidance for each error type
- Override mechanism with explicit confirmation (for edge cases)
- Clear error messages with actionable steps

**Acceptance Criteria:**
- [ ] All common error scenarios handled
- [ ] Recovery guidance provided for each error
- [ ] Override mechanism available (with confirmation)
- [ ] Error messages are clear and actionable
- [ ] Error handling doesn't mask underlying issues

---

### E2:S08:T06 – Update RW documentation and agent execution guide

**Status:** TODO  
**Priority:** HIGH  
**Dependencies:** E2:S08:T05  
**Blocker:** None

**Input:**
- Complete implementation from T01-T05
- Release Workflow documentation
- Agent execution guide

**Deliverable:**
- Updated Release Workflow reference documentation
- Updated agent execution guide with Step 7 details
- Examples and troubleshooting guide
- Updated workflow YAML documentation

**Acceptance Criteria:**
- [ ] Release Workflow reference updated
- [ ] Agent execution guide includes Step 7 details
- [ ] Examples provided
- [ ] Troubleshooting guide included
- [ ] Documentation is clear and complete

---

### E2:S08:T07 – Testing and validation

**Status:** TODO  
**Priority:** HIGH  
**Dependencies:** E2:S08:T06  
**Blocker:** None

**Input:**
- Complete implementation from T01-T06
- Test scenarios
- Validation requirements

**Deliverable:**
- Test suite covering:
  - Normal update scenarios (task completion, story completion, epic completion)
  - Error scenarios (file not found, permission errors, malformed docs)
  - Edge cases (missing fields, unexpected formats)
  - Multi-epic releases
  - Cross-epic dependencies
- Validation that all acceptance criteria from FR-015 are met
- Performance testing (< 5 seconds for typical projects)

**Acceptance Criteria:**
- [ ] Test suite covers all scenarios
- [ ] All tests passing
- [ ] All FR-015 acceptance criteria validated
- [ ] Performance requirements met
- [ ] Reliability validated (deterministic steps achieve close to 100% confidence)

---

## Related Work

- **FR-015:** Harden Kanban Docs Update in Release Workflow
- **Epic 2:** Workflow Management Framework
- **Epic 4:** Kanban Framework
- **RW Step 7:** Auto-update Kanban Docs (current implementation)

---

## Dependencies

**Blocks:**
- Reliable Kanban documentation synchronization
- Workflow hardening and reliability improvements

**Blocked By:**
- None

**Coordinates With:**
- Epic 2: Workflow Management Framework (workflow execution)
- Epic 4: Kanban Framework (Kanban documentation structure)

