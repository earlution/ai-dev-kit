---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E2:S01:T18 - RW Step 8 stage-completeness guardrails (BR-070)

**Task ID:** E2:S01:T18  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Created:** 2026-04-22  
**Last updated:** 2026-04-22  
**Code:** E2S01T18

**Upstream:** [BR-070](../../../fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md)

---

## Summary

Harden RW Step 8 so release commits cannot omit Step-7 outputs. Add deterministic staging completeness checks for `RW -k` and explicit fail-fast diagnostics when task-scoped Kanban artifacts are modified but not staged.

---

## Deliverable

- Step-8 staging completeness guardrail (modified-vs-staged parity for Step-7 outputs)
- `RW -k` task-slice must-include checks for touched Kanban docs
- Regression tests for partial-stage omission scenarios
- Updated RW agent execution documentation with explicit blocking behavior

---

## Acceptance Criteria

- [ ] **AC1:** Release run fails if any Step-7 output file remains unstaged before commit.
- [ ] **AC2:** `RW -k` enforces must-include staging for touched task-slice Kanban docs.
- [ ] **AC3:** Error output names missing files and remediation action (`stage all` / rerun Step 8).
- [ ] **AC4:** Regression tests cover partial-stage omission and pass on hardened path.
- [ ] **AC5:** BR-070 and Story E2:S01 wiring is bidirectionally consistent.

---

## Links

- [BR-070](../../../fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md)
- [Story E2:S01](../Story-001-rw-agent-execution-and-docs.md)
- [Release Workflow Agent Execution Guide](../../../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)
