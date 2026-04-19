---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

**Task ID:** E6:S07:T103

# Epic 6, Story 7, Task 103: Release Workflow (RW) Maintenance - Perpetual Task

**Status:** IN PROGRESS (Perpetual)  
**Priority:** HIGH  
**Last updated:** 2026-04-19 (v0.6.7.103+1 / SemVer v0.4.747+1 – **IPW** perpetual planning package; **RW** with **`--art`**)  
**Started:** 2026-02-22  
**Completed:** N/A (Perpetual task - never completes)  
**Version:** v0.6.7.103+1

**Task Type:** Perpetual Maintenance  
**Build Warning Suppression:** true  
**Explanation:** This task represents ongoing Release Workflow and workflow framework maintenance work. High build numbers are expected and valid.

**Progress:** v0.6.7.103+1 – [IPW-E6S07T103-release-workflow-maintenance-perpetual.md](../../../../../implementation-cycles/IPW-E6S07T103-release-workflow-maintenance-perpetual.md) (FR-042 spec / test / impl / rolling backlog). Prior: v0.6.7.103+0 **BR-067**; v0.6.7.103+4 **FR-067 FU-2** traceability.  
**Code:** E6S07T103

**Note:** Perpetual tasks use 3-digit task numbers (T101+) to differentiate from regular tasks (T01-T99).

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`
**Value:** `E6:S07:T103`

---

## Overview

This is a **perpetual task** dedicated to Release Workflow (RW) and workflow framework maintenance. RW maintenance releases (framework fixes, Step 7 improvements, validator updates, doc corrections) are attributed to this task when not tied to a specific feature task.

**Purpose:**
- Provide proper version attribution for RW/workflow framework maintenance
- Ensure semantic correctness (BUILD number = RW maintenance release count)
- Enable build number warning suppression (high BUILD numbers expected)
- Maintain clear traceability of workflow framework maintenance work

**Why Perpetual:**
- RW maintenance is ongoing (Step 7 fixes, validator updates, doc corrections)
- Not tied to any single feature completion
- Never "completes" - it's continuous framework maintenance

---

## Input

- **Feature Request:** [FR-041 - Perpetual Task for Release Workflow Maintenance](../../../fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md)
- **IPW planning artifact:** [IPW-E6S07T103-release-workflow-maintenance-perpetual.md](../../../../../implementation-cycles/IPW-E6S07T103-release-workflow-maintenance-perpetual.md)

## References

- **IPW (planning package):** [IPW-E6S07T103-release-workflow-maintenance-perpetual.md](../../../../../implementation-cycles/IPW-E6S07T103-release-workflow-maintenance-perpetual.md)

## Deliverable

- Version attributed to E6:S07:T103+\{N\} for RW maintenance releases
- Perpetual task pattern available in packaged Kanban framework for adoption

---

## Problem Statement

**Issue:** RW maintenance work (Step 7 MoSCOW fix, validator updates, doc corrections) lacks proper attribution:
- Currently attributed to arbitrary feature tasks or requires one-off tasks
- BUILD number semantics break when attributed to feature tasks
- No standard pattern for workflow maintenance across projects

**Solution:** Create dedicated perpetual task for RW maintenance:
- All RW maintenance releases use T103 (perpetual task, 3-digit)
- BUILD number = RW maintenance release count
- Include in packaged Kanban framework for adoption

---

## Approach

### Task Structure

**Perpetual Task Pattern:**
- Status: IN PROGRESS (never changes to COMPLETE)
- Task Type: Perpetual Maintenance
- Build Warning Suppression: Enabled
- Version Pattern: `v0.6.7.103+\{N\}` where N = RW maintenance release count

### Attribution Logic

**When to attribute to T103:**
- RW Step 7 fixes (e.g., MoSCOW completed-task removal)
- Validator updates (e.g., validate_version_bump improvements)
- Workflow doc corrections (RW guide, cursor rules)
- Framework hardening (non-feature framework improvements)
- Cross-FR / consumer traceability for RW outcomes (e.g. **FR-067 FU-2** ↔ GitHub Releases)

**Manual attribution** (no context detection like UKW/CMW): Agent or user selects T103 when releasing RW maintenance work.

---

## Acceptance Criteria

- [x] Perpetual task document created ✅ (v0.6.7.103+0)
- [x] Packaged Kanban framework includes template for this perpetual task ✅ (Epic 2 Story 1 T06)
- [x] Framework documentation updated with RW maintenance perpetual task pattern ✅ (versioning policy, RW execution guide, cursorrules)
- [x] Validation tests added for T103 ✅ (test_validate_version_bump_passes_for_t103)
- [ ] First RW maintenance release uses T103
- [ ] Pattern documented for adoption across projects

---

## Related Work

- **Story:** E6:S07 - ADK Implementation Analysis and Package Management
- **Feature Request:** [FR-041](../../../fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md)
- **T101:** UKW Perpetual Task (pattern reference)
- **T102:** CMW Perpetual Task (pattern reference)

---

## Downstream traceability (GitHub Releases / FU-2)

**RW Step 12.5** — create or update the **GitHub Release** for the **SemVer** tag after push — is part of the Release Workflow, not Epic 5 / Docusaurus. Consumer documentation:

- **[FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md)** — follow-up **FU-2** names this expectation so portal-related releases do not “forget” the Releases UI.
- **Script:** `packages/frameworks/workflow mgt/scripts/create_github_release.py` (see project `.cursorrules` Step 12.5).

**This task (T103)** is the **Kanban anchor** for that outcome: maintenance and adoption questions about “who owns GitHub Releases for RW” resolve here and **[FR-041](../../../fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md)**, not under Story 009 alone.
