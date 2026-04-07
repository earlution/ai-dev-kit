---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-07T12:06:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 1, Task 10: dev branch support in RW validators

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** 2026-04-07 (v0.2.1.10+1 - task initialized for RW -k run)  
**Started:** 2026-04-07  
**Completed:** N/A  
**Version:** v0.2.1.10+0  
**Code:** E2S01T10

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E2:S01:T10`

---

## Summary

Implement support for a dedicated `dev` branch in RW branch-context validation so solo development can run RW safely without forced epic-branch alignment on every release attempt.

---

## Input

- UXR requirement: `UXR-006` (`dev` branch acceptance for solo workflow).
- Existing branch validator behavior in `validate_branch_context.py`.
- Current RW Step 1 and Step 1b guardrail expectations.

---

## Deliverable

- Validator updates to recognize `dev` branch mode.
- Documentation/rules updates defining safeguards for `dev` mode.
- Traceable release artifacts and changelog references for `E2:S01:T10`.

---

## Scope

- Update `validate_branch_context.py` to recognize `dev` as an allowed branch mode.
- Define strict behavior on `dev`:
  - Keep task intent validation strict.
  - Keep version bump and changelog validators strict.
  - Relax epic-branch alignment from blocking to explicit warning on `dev`.
- Update RW execution docs and rules to document `dev` behavior and guardrails.
- Ensure release traces clearly indicate `dev`-mode execution where applicable.

---

## Acceptance Criteria

- [ ] `validate_branch_context.py` accepts `dev` branch without hard-fail branch mismatch.
- [ ] RW docs define required validators/guards that remain blocking on `dev`.
- [ ] Policy/rules text updated to describe when `dev` is allowed and its limits.
- [ ] Validator output clearly distinguishes `dev` mode from `epic/{n}` mode.
- [ ] UXR-006 is cross-linked and traceable.

---

## Links

- [UXR-006](../../../fr-br/UXR-006-dev-branch-and-rw-validator-relaxation.md)
- [Story E2:S01](../Story-001-rw-agent-execution-and-docs.md)
- [BR-003](../../../fr-br/BR-003-rw-branch-validation-update-branches.md)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

**When Task is Complete:**

- Add forensic marker to this task document
- Add forensic marker to the story checklist entry
- Ensure version/changelog/readme traceability is complete
