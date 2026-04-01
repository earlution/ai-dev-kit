---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T23:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 006 – Feature Requests

**Status:** IN PROGRESS
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-07  
**Last updated:** 2026-03-25 (v0.6.6.56+4 – BR-056 verified; T56 complete)
**Version:** v0.6.6.56+4
**Code:** E6S06

**Note:** This story was renumbered from S05 to S06 as part of the repository story abstract space resolution (E9:S01:T08).

**Story Type:** Perpetual Maintenance  
**Completed:** N/A (Perpetual story - never completes)  
**Explanation:** This story represents ongoing feature request tracking and implementation work. New feature requests will create new tasks under this story. The story remains IN PROGRESS even when all current tasks are complete, as new feature requests may be submitted at any time.

---

## Task Checklist

- [x] **E6:S06:T01 – FR/BR/UXR Prioritization Board Implementation** - ✅ COMPLETED (HIGH priority, Create prioritization board for FRs, BRs, and UXRs with identical structure to Kanban board)
  - Task: [`T01-fr-br-uxr-prioritization-board.md`](T01-fr-br-uxr-prioritization-board.md)

- [x] **E6:S06:T02 – Fix Release Workflow Micromanagement Issues** - 🔄 IN PROGRESS, BLOCKED (CRITICAL, User pain and frustration with tool discovery, pattern matching failures, and excessive manual intervention; blocking productive work. Root cause identified as Cascade whitelist security prompts.)
  - Task: [`T02-fix-release-workflow-micromanagement-issues.md`](T02-fix-release-workflow-micromanagement-issues.md) | [BR-038](../../../fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)

- [x] **E6:S06:T03 – Investigate Apple SDK License Blocking Issue** - ✅ COMPLETED (HIGH priority, Apple SDK license blocking issue prevents proper installation or usage of ai-dev-kit components on Apple platforms; needs investigation to understand root cause and implement solution)
  - Task: [`T03-apple-sdk-license-blocking-issue.md`](T03-apple-sdk-license-blocking-issue.md) | [BR-040](../../../fr-br/BR-040-apple-sdk-license-blocking-issue.md)

- [x] **E6:S06:T41 – Windsurf: Investigate how to leverage AGENTS.md and SKILL.md for workflows** - ✅ COMPLETED (CRITICAL, Implement AGENTS.md and SKILL.md to define specialized workflow agents and capabilities, enabling Cascade to execute workflows autonomously without manual intervention. This addresses fundamental workflow execution issues including terminal interaction problems and agent behavior inconsistencies.)
  - Task: [`T41-windsurf-investigate-agents-skills-for-workflows.md`](T41-windsurf-investigate-agents-skills-for-workflows.md) | [FR-041](../../../fr-br/FR-041-windsurf-investigate-agents-skills-for-workflows.md)

- [x] **E6:S06:T42 – Fix UKW Agent Board Cleanup Failure** - ✅ COMPLETED (HIGH priority, UKW Agent does not properly clean up completed tasks from MoSCOW sections, leaving completed tasks listed in active priority sections despite being marked as COMPLETE. This impairs autonomous workflow reliability and requires manual intervention.)
  - Task: [`T42-fix-ukw-agent-board-cleanup-failure.md`](T42-fix-ukw-agent-board-cleanup-failure.md) | [BR-042](../../../fr-br/BR-042-ukw-agent-board-cleanup-failure.md)

- [ ] **E6:S06:T57 – BR-039: Cascade whitelist / security prompt usability (vendor)** - TODO (CRITICAL, **BR-039**: whitelist persistence / prompt fatigue in Windsurf Cascade; repo tracks escalation, evidence, re-verification — product fix is vendor-side)
  - Task: [`T57-br039-cascade-whitelist-security-prompt-blocker.md`](T57-br039-cascade-whitelist-security-prompt-blocker.md) | [BR-039](../../../fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md)

- [x] **E6:S06:T56 – RW Ambiguous Task Identifier Typo Risk** - ✅ COMPLETE (v0.6.6.56+4) (HIGH priority, BR-056: validate_rw_task_intent + Step 1b; live verification 2026-03-25)
  - Task: [`T56-rw-ambiguous-task-identifier-typo-risk.md`](T56-rw-ambiguous-task-identifier-typo-risk.md) | [BR-056](../../../fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md)

- [x] **E6:S06:T999 – Board Cleanup Test Task** - ✅ COMPLETED (LOW priority, Dummy task for testing UKW Agent board cleanup functionality. This task will be marked as COMPLETE to trigger board cleanup and verify removal from active sections.)
  - Task: [`T999-board-cleanup-test.md`](T999-board-cleanup-test.md)
  - Status: ✅ COMPLETED - Board implemented with MoSCOW structure, all 69 items tracked
  - Completed: 2026-03-09


- [ ] **E6:S06:T02 – Fix Release Workflow Micromanagement Issues** - TODO (HIGH priority, Implement simplified, reliable Release Workflow to reduce user friction)
  - Task: [`T02-fix-release-workflow-micromanagement-issues.md`](T02-fix-release-workflow-micromanagement-issues.md)
  - Associated BR: [BR-038](../../../fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)
  - Status: 🔄 TODO - Addresses critical usability issues in release process


---

## Overview

This story tracks all feature requests related to framework management, installation tools, update mechanisms, and related framework management processes. Feature requests are converted into tasks following the FR/BR → Task → Story → Epic flow defined in the Kanban governance policy.

**Perpetual Story:** This is a perpetual maintenance story that never completes. New feature requests will create new tasks under this story. The story remains IN PROGRESS even when all current tasks are complete, as feature request tracking is an ongoing activity.

---

## Goal

Systematically track, prioritize, and implement feature requests for framework packages, installation tools, update mechanisms, and related framework management processes.

---

## Tasks

- **E6:S06:T01 – FR/BR/UXR Prioritization Board Implementation** - ✅ COMPLETED (HIGH priority)
  - Task: [`T01-fr-br-uxr-prioritization-board.md`](T01-fr-br-uxr-prioritization-board.md)
  - **Scope:** Create prioritization board for FRs, BRs, and UXRs with identical structure to Kanban board
  - **Associated FR:** [FR-051](../../../fr-br/FR-051-fr-br-uxr-prioritization-board.md)
  - **Status:** IN PROGRESS


- **E6:S06:T02 – Fix Release Workflow Micromanagement Issues** - TODO (HIGH priority)
  - Task: [`T02-fix-release-workflow-micromanagement-issues.md`](T02-fix-release-workflow-micromanagement-issues.md)
  - **Scope:** Implement simplified, reliable Release Workflow to reduce user friction
  - **Associated BR:** [BR-038](../../../fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)
  - **Status:** IN PROGRESS


---

## Dependencies

**Blocks:**

- None

**Blocked By:**

- None

**Coordinates With:**

- Epic 5 (Documentation Management) - Features may require documentation updates
- Epic 2 (Workflow Management Framework) - Features for workflow framework tools
- Epic 7 (Examples & Adoption) - Features for framework adoption and examples

---

## References

- `docs/project-management/kanban/epics/Epic-6/Epic-6.md`
- `docs/project-management/rituals/policy/kanban-governance-policy.md` - FR/BR → Task → Story → Epic flow

