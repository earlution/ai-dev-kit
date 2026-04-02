---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-02T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task T60 - RW allow IN PROGRESS task releases (BR-060)

**Task ID:** E6:S06:T60
**Status:** IN PROGRESS (v0.6.6.60+1 — awaiting BR-060 verification)
**Priority:** CRITICAL
**Estimated Effort:** Medium (validator + docs + tests)
**Created:** 2026-04-02

**Associated BR:** [BR-060](../../../fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md)

---

## Scope

Fix the Release Workflow gating defect where full RW mode rejects non-perpetual tasks in `IN PROGRESS` state. Support iterative `+BUILD` releases for active tasks while preserving typo/intent safety checks.

---

## Input

- [BR-060](../../../fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md)
- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py`
- `rw-config.yaml`

---

## Deliverable

1. `validate_rw_task_complete.py` full mode permits `IN PROGRESS` tasks as releasable.
2. Existing protections for wrong task intent remain enforced through Step 1d.
3. RW docs explicitly describe status behavior with `+BUILD` iterative releases.
4. Regression tests cover expected allow/deny matrix.

---

## Acceptance Criteria

- [x] AC1: Full RW no longer fails Step 1c solely due to `IN PROGRESS` status for the requested task.
- [x] AC2: Full RW still fails on missing task docs and task-id mismatch conditions.
- [x] AC3: `TODO` task handling is explicitly defined and tested.
- [x] AC4: Documentation updates align validator behavior with internal versioning policy semantics.

---

## Version Anchor

**Forensic marker:** **v0.6.6.60+1** (SemVer **v0.4.698+1**) — 2026-04-02 — RW **E6:S06:T60** / **BR-060**.

---

## References

- **BR-060:** [BR-060-rw-in-progress-task-gate-blocks-build-releases.md](../../../fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md)
- **Related:** [BR-056](../../../fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md)
