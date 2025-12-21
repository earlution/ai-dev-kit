---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-21T23:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 6, Task 12: Changelog Maintenance Workflow (CMW) - Perpetual Task

**Status:** IN PROGRESS (Perpetual)  
**Priority:** HIGH  
**Last updated:** 2025-12-21 (v0.6.6.12+0 – Perpetual task created)  
**Started:** 2025-12-21  
**Completed:** N/A (Perpetual task - never completes)  
**Version:** v0.6.6.12+0

**Task Type:** Perpetual Maintenance  
**Build Warning Suppression:** true  
**Explanation:** This task represents ongoing changelog maintenance and archival work. High build numbers are expected and valid.

**Progress:** Perpetual task created for CMW maintenance runs  
**Code:** E6S06T12

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`
**Value:** `E6:S06:T12`

---

## Overview

This is a **perpetual task** dedicated to the Changelog Management Workflow (CMW). All CMW-triggered Release Workflows (RW) are attributed to this task.

**Purpose:**
- Provide proper version attribution for CMW maintenance runs
- Ensure semantic correctness (BUILD number = CMW run count, not feature iteration)
- Enable build number warning suppression (high BUILD numbers expected)
- Maintain clear traceability of changelog maintenance and archival work

**Why Perpetual:**
- CMW is an ongoing maintenance workflow
- Runs periodically (weekly via cron, or automatically via RW Step 9.5)
- Not tied to any single feature completion
- Never "completes" - it's continuous maintenance work

---

## Problem Statement

**Issue:** CMW maintenance runs need proper version attribution:
- CMW runs periodically to maintain changelog health (archive entries, remove duplicates, fix ordering)
- CMW can be triggered automatically (RW Step 9.5) or manually
- Attribution to any single feature task is arbitrary
- BUILD number semantics should reflect CMW run count, not feature iteration
- No mechanism for perpetual maintenance tasks for CMW

**Solution:** Create dedicated perpetual task for CMW maintenance work:
- All CMW-triggered RWs use T12
- BUILD number = CMW maintenance run count
- Clear attribution and traceability
- Proper semantic meaning

---

## Approach

### Task Structure

**Perpetual Task Pattern:**
- Status: IN PROGRESS (never changes to COMPLETE)
- Task Type: Maintenance/Synchronization
- Build Warning Suppression: Enabled
- Version Pattern: `v0.6.6.12+{N}` where N = CMW run number

### RW Attribution Logic

**When CMW triggers RW:**
1. Agent detects CMW context (user ran "CMW" then "RW", or RW Step 9.5 triggered CMW)
2. Automatically attributes release to T12
3. Increments BUILD number (same task, increment BUILD)
4. Suppresses build number warnings (perpetual task flag)

### Version Pattern

- First CMW release: `v0.6.6.12+1`
- Subsequent CMW releases: `v0.6.6.12+2`, `v0.6.6.12+3`, etc.
- BUILD number represents CMW maintenance run count

---

## Acceptance Criteria

- [x] Perpetual task document created ✅ COMPLETE (v0.6.6.12+0)
- [ ] RW logic updated to detect CMW context and auto-attribute to T12 (TODO - requires FR-026 implementation)
- [ ] RW logic updated to suppress build number warnings for perpetual tasks (already exists, verify works for T12)
- [ ] Documentation updated (RW guide, versioning policy) (TODO)
- [ ] First CMW-triggered RW uses T12 (TODO)

---

## Related Work

- **Story:** E6:S06 - ADK Implementation Analysis and Package Management
- **Workflow:** CMW (Changelog Management Workflow)
- **Workflow:** RW (Release Workflow)
- **Related Task:** T11 - Changelog Management and Archival Workflow (implementation task, now COMPLETE)
- **Feature Request:** [FR-026](../../fr-br/FR-026-canonical-perpetual-task-for-changelog-maintenance.md) - Include CMW perpetual task in canonical set

---

## References

- **CMW Workflow:** `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`
- **CMW Scripts:** `packages/frameworks/workflow mgt/scripts/changelog/`
- **RW Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Changelog Archival Policy:** `docs/architecture/standards-and-adrs/changelog-archival-policy.md`

---

**Last Updated:** 2025-12-21 (v0.6.6.12+0 – Perpetual task created)  
**Version:** v0.6.6.12+0  
**Status:** IN PROGRESS (Perpetual)

