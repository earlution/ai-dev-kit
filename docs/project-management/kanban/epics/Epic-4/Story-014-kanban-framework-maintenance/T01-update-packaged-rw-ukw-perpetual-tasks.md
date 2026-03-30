---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 14, Task 1: Update Packaged RW to Handle UKW Context and Perpetual Tasks

**Status:** COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-02-22 (v0.4.14.1+1 – Implementation complete)  
**Started:** 2026-02-22  
**Completed:** 2026-02-22  
**Version:** v0.4.14.1+1

**Progress:** validate_version_bump.py updated with perpetual task support (is_perpetual_task, extract_task_id_canonical, relaxed field validation). Tests added. T01 task doc and RW/UKW docs updated.  
**Code:** E4S14T01

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`
**Value:** `E4:S14:T01`

---

## Overview

Update the packaged Release Workflow (RW) framework to handle UKW (Update Kanban Workflow) context detection and perpetual task attribution. This ensures that UKW-triggered releases are properly attributed to perpetual tasks (like E6:S07:T101) rather than arbitrary feature tasks.

---

## Problem Statement

**Current State:**
- Packaged RW framework doesn't detect UKW context
- UKW releases could be incorrectly attributed to arbitrary tasks
- No mechanism for perpetual task handling in packaged RW
- Build warning suppression not implemented for perpetual tasks

**Root Cause:**
- Packaged RW was updated in source repo (`.cursorrules`), but not in the packaged framework
- Perpetual task pattern (e.g., E6:S07:T101 in ai-dev-kit) needs to be integrated into packaged RW
- Framework needs to support maintenance workflows (UKW) properly

**Solution:**
Update packaged RW to:
1. Detect UKW context (user ran "UKW" then "RW")
2. Auto-attribute UKW releases to perpetual task
3. Check for perpetual task flag and suppress build warnings
4. Document perpetual task pattern for framework users

---

## Scope

**In Scope:**
- Update RW Step 2 (Bump Version) in packaged framework
- Add UKW context detection logic
- Add perpetual task flag checking
- Update RW execution guide documentation
- Update RW workflow YAML if needed
- Document perpetual task pattern

**Out of Scope:**
- Creating new perpetual tasks (handled in project-specific contexts)
- UKW workflow implementation (handled separately)
- Non-RW workflow updates

---

## Approach

### Phase 1: Update RW Step 2 Logic

1. **UKW Context Detection:**
   - Detect if RW was triggered immediately after UKW
   - Pattern: User ran "UKW" then "RW" → UKW context detected
   - Agent must track context between workflow executions

2. **Auto-Attribution Logic:**
   - If UKW context detected → Auto-attribute to perpetual task
   - Pattern: Check for perpetual task in Story (e.g., E6:S07:T101 in ai-dev-kit)
   - Use task number from perpetual task, increment BUILD
   - Skip normal task identification when UKW context detected

3. **Perpetual Task Flag Checking:**
   - Read task document for `perpetual_task: true` or `Task Type: Perpetual Maintenance`
   - If perpetual task → Suppress build number warnings
   - Document that high BUILD numbers are expected and valid

### Phase 2: Update Documentation

1. **RW Execution Guide:**
   - Update Step 2 section with UKW context detection
   - Add perpetual task handling instructions
   - Document build warning suppression mechanism
   - Add examples of UKW attribution pattern

2. **Workflow YAML:**
   - Update Step 2 configuration if needed
   - Add comments/documentation about UKW support
   - Ensure handler supports context detection

### Phase 3: Testing and Validation

1. **Test UKW Context Detection:**
   - Verify UKW → RW sequence triggers correct attribution
   - Verify non-UKW releases still work normally

2. **Test Perpetual Task Handling:**
   - Verify perpetual task flag detection works
   - Verify build warning suppression works
   - Verify BUILD increment logic works correctly

---

## Acceptance Criteria

- [ ] Packaged RW Step 2 detects UKW context (user ran "UKW" then "RW")
- [ ] UKW releases auto-attributed to perpetual task (pattern: check for perpetual task in Story, use its task number)
- [ ] Perpetual task flag (`perpetual_task: true` or `Task Type: Perpetual Maintenance`) checked in RW Step 2
- [ ] Build warning suppression works for perpetual tasks (high BUILD numbers don't trigger warnings)
- [ ] RW execution guide updated with UKW context detection and perpetual task handling
- [ ] RW workflow YAML updated if configuration changes needed
- [ ] Examples and documentation reflect perpetual task pattern
- [ ] Framework users can implement perpetual tasks following the pattern

---

## Input

- Packaged RW framework: `packages/frameworks/workflow mgt/`
- Source repo RW implementation: `.cursorrules` (UKW context detection)
- UKW perpetual task: `E6:S07:T101` (ai-dev-kit example; pattern varies by project)
- UKW analysis: `docs/analysis/ukw-versioning-reasoning-analysis.md`

---

## Deliverable

**Updated Packaged RW Framework:**
- RW Step 2 with UKW context detection
- Perpetual task handling logic
- Build warning suppression for perpetual tasks
- Updated documentation and examples

**Files to Update:**
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (RW execution guide)
- `packages/frameworks/workflow mgt/workflows/release-workflow.yaml` (if needed)
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` (if exists)
- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py` (supports perpetual tasks: T101+, `perpetual_task` / `Task Type: Perpetual Maintenance` flag)

---

## Dependencies

**Blocks:**
- None

**Blocked By:**
- None

**Coordinates With:**
- **E6:S07:T101** - UKW perpetual task (source of pattern in ai-dev-kit; migrated from T08)
- **Epic 2** - Workflow Management Framework (RW package owner)

---

## References

- **RW Package:** `packages/frameworks/workflow mgt/`
- **RW Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **RW Workflow YAML:** `packages/frameworks/workflow mgt/workflows/release-workflow.yaml`
- **Source RW Implementation:** `.cursorrules` (RW trigger section)
- **UKW Task:** `docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T101-update-kanban-workflow-ukw.md`
- **UKW Analysis:** `docs/analysis/ukw-versioning-reasoning-analysis.md`

---

**Last Updated:** 2025-12-18 (v0.4.14.1+0 – Task created)  
**Version:** v0.4.14.1+0  
**Status:** TODO

