---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-13T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-065 - RW Step 12.5 GitHub release parser fails on `v`-prefixed version

**Status:** OPEN  
**Priority:** HIGH  
**Severity:** MEDIUM - non-blocking RW completion, but GitHub Release publication is skipped due to parser failure.  
**Created:** 2026-04-13  
**Last updated:** 2026-04-13  
**Version:** N/A  
**Code:** BR-065  
**Implementing Task:** [E6:S07:T113](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T113-rw-step-12-5-github-release-parser-hardening-br065.md)

---

## Problem Statement

RW Step 12.5 (`create_github_release.py`) fails with:

- `invalid literal for int() with base 10: 'v0'`

when processing a `v`-prefixed version/tag input. The RW run correctly completes as non-blocking, but the GitHub Release itself is not created/updated.

---

## Expected Behavior

Step 12.5 should accept canonical `v`-prefixed release inputs (for both SemVer and internal version context) and either:

1. create/update the GitHub Release successfully, or
2. fail with deterministic diagnostics that point to the exact malformed field.

---

## Observed Behavior

- Step 12.5 exits with parse error:
  - `invalid literal for int() with base 10: 'v0'`
- RW otherwise completes and pushes commit/tags.
- GitHub Release publication remains incomplete, requiring manual follow-up.

---

## Reproduction

1. Run RW with Step 12.5 enabled for a normal tagged release.
2. Observe `create_github_release.py` execution.
3. Receive parser exception for `v`-prefixed value.

---

## Proposed Resolution

- Harden version parsing in `create_github_release.py` to normalize optional leading `v` before numeric conversion.
- Add unit tests for both prefixed and non-prefixed values.
- Improve error messages to identify the exact argument/value that failed parsing.
- Keep Step 12.5 non-blocking behavior, but emit stronger remediation guidance.

---

## Related

- [FR-041](FR-041-perpetual-task-for-release-workflow-maintenance.md)
- [E6:S07:T103](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T103-release-workflow-maintenance-perpetual-task.md)
- [IPW-E6S07T113](../../../implementation-cycles/IPW-E6S07T113-rw-step-12-5-github-release-parser-hardening.md)
- `packages/frameworks/workflow mgt/scripts/create_github_release.py`
