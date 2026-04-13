---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-13T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 7, Task 113: RW Step 12.5 GitHub release parser hardening (BR-065)

**Task ID:** E6:S07:T113  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-04-13  
**Code:** E6S07T113

**Upstream:** [BR-065 - RW Step 12.5 GitHub release parser fails on `v`-prefixed version](../../../fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version.md)  
**Coordinates with:** [E6:S07:T103](T103-release-workflow-maintenance-perpetual-task.md) RW maintenance perpetual task

---

## Input

- Repro evidence from recent RW runs where Step 12.5 fails with `invalid literal for int() with base 10: 'v0'`.
- Current Step 12.5 implementation in `packages/frameworks/workflow mgt/scripts/create_github_release.py`.
- [IPW-E6S07T113-rw-step-12-5-github-release-parser-hardening](../../../../../implementation-cycles/IPW-E6S07T113-rw-step-12-5-github-release-parser-hardening.md)

## Deliverable

- Robust parsing and validation for `v`-prefixed version/tag values in GitHub release creation flow.
- Deterministic diagnostics and regression tests.

---

## Scope

1. Identify parser call site and failing conversion path in `create_github_release.py`.
2. Normalize accepted input shapes (`v0.x.y+z` and `0.x.y+z`) before numeric parsing.
3. Add regression tests for both accepted forms and malformed forms.
4. Improve error message quality (include argument name and offending value).
5. Confirm Step 12.5 still behaves as non-blocking in RW orchestration.

---

## Acceptance Criteria

- [ ] **AC1:** `create_github_release.py` handles `v`-prefixed and non-prefixed version/tag inputs without parse exceptions.
- [ ] **AC2:** Failure diagnostics identify the exact input that is invalid.
- [ ] **AC3:** Regression tests cover prefixed, non-prefixed, and malformed inputs.
- [ ] **AC4:** RW Step 12.5 remains non-blocking while reporting actionable remediation.

---

## References

- [BR-065](../../../fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version.md)
- [FR-041](../../../fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md)
- [E6:S07:T103](T103-release-workflow-maintenance-perpetual-task.md)
- [IPW-E6S07T113](../../../../../implementation-cycles/IPW-E6S07T113-rw-step-12-5-github-release-parser-hardening.md)
