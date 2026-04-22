---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-070: RW-k Stage Files completeness gap allows partial Kanban commit

**Status:** OPEN  
**Priority:** HIGH  
**Severity:** HIGH  
**Created:** 2026-04-22  
**Last updated:** 2026-04-22  
**Version:** N/A  
**Code:** BR-070  

**Implementing Task:** [E2:S01:T18](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T18-rw-step-8-stage-completeness-guardrails-br070.md)

---

## Problem Statement

`RW -k` intends scoped Kanban release behavior for the requested task slice, and Step 8 policy requires staging all modified files (`git add -A` / `git.stage_all`). In practice, a partial manual staging path can still pass validators and create a release commit that omits Step 7 outputs.

Observed failure mode: Step 7 (`update_kanban_docs.py --mode kanban_init`) modified task-adjacent Kanban files (including `kboard.md` and `Epic-2.md`), but those files were not staged into the release commit while other release files were committed and pushed.

---

## Expected Behavior

- If Step 7 modifies files, Step 8 must stage **all Step-7 outputs** before commit.
- `RW -k` must fail fast if task-scoped Kanban artifacts touched by Step 7 remain unstaged.
- Post-commit verification must prove no Step-7 output file was omitted.

---

## Observed Behavior

- Release commit succeeded with a subset of modified files.
- Two Step-7 output files remained as local unstaged drift after push.
- Existing validators did not block this partial commit scenario.

---

## Scope / Affected Areas

- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 8 enforcement clarity)
- `packages/frameworks/workflow mgt/workflows/release-workflow/release-workflow.yaml` (step contract / handlers)
- Step-8 staging behavior and validator gates around staged-vs-modified set parity
- `RW -k` scoped Kanban release reliability for task-associated docs (`Story`, `Epic`, `kboard`, `fbuboard`)

---

## Acceptance Criteria

- [ ] Step 8 enforces stage completeness invariant: no modified Step-7 output remains unstaged at commit boundary.
- [ ] `RW -k` has task-slice must-include checks for touched Kanban artifacts produced by Step 7.
- [ ] Run aborts with explicit missing-file diagnostics if staging set is incomplete.
- [ ] Post-commit verification asserts staged/committed files cover Step-7 output set.
- [ ] Regression tests reproduce and block partial-stage omission for `RW -k`.

---

## Related

- [BR-069](./BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [FR-090](./FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- [Story E2:S01](../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md)
