---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-07T12:06:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Single `dev` Branch + RW Validator Relaxation

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-04-07  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** TODO  
**Code:** UXR-006  
**Last updated:** 2026-04-07 (v0.2.1.10+1 - mapped to E2:S01:T10 for RW validator implementation)  
**Version:** v0.2.1.10+1 (SemVer: v0.4.625+1)  
**Implementing Task:** E2:S01:T10 (RW branch-context support for `dev`; contextualized from UXR repository mapping)

---

## Summary

The user reports sustained cognitive overhead from multi-branch hygiene (for example, forgetting to merge to `main` before switching branches). In a solo development model, a single persistent development branch (`dev`) may reduce process friction while preserving the option to use dedicated epic branches when needed.

This UXR evaluates whether RW validators should treat `dev` as a first-class acceptable branch context (similar to numbered epic branch acceptance modes), including implications for safety, traceability, and release consistency.

---

## Research Objective

**Primary Question:** Does adding a `dev` branch and relaxing RW branch validation improve solo developer workflow quality without unacceptable traceability or safety regressions?

**Secondary Questions:**

1. What validator behavior should apply on `dev` (strict pass-through, warning mode, or conditional checks)?
2. How should version/epic alignment rules behave when working from `dev`?
3. What safeguards are still required to prevent cross-epic contamination and accidental release mistakes?

---

## User Reasoning (Captured Input)

- Multi-branch hygiene is hard to keep on top of as a solo developer.
- Mistakes happen (for example, not merging before switching branch context).
- A single `dev` branch may reduce friction and operational mistakes.
- Dedicated epic branches may still be used when helpful, but should be optional.

---

## Proposed Research Scope

1. **Workflow Analysis:** Compare current epic-branch-only flow vs `dev`-first flow.
2. **Validator Impact Analysis:** Map required changes to:
   - `validate_branch_context.py`
   - RW Step 1 behavior and error semantics
3. **Risk Review:** Identify release safety and forensic traceability impacts.
4. **Recommendation:** Define a policy-compatible branch acceptance model for solo usage.

---

## Acceptance Criteria

- [ ] AC-1: A documented recommendation exists for `dev` branch support in RW.
- [ ] AC-2: Validator behavior on `dev` is clearly specified (pass/warn/block conditions).
- [ ] AC-3: Required policy and documentation updates are identified.
- [ ] AC-4: Residual risks and mitigation controls are explicitly documented.

---

## References

- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- `docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T10-dev-branch-support-in-rw-validators.md`
