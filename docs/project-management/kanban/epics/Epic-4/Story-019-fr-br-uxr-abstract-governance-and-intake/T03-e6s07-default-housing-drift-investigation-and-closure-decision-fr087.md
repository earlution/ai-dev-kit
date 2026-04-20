---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T17:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 3: `E6:S07` default-housing drift investigation and closure decision (FR-087)

**Task ID:** E4:S19:T03  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-04-20  
**Last updated:** 2026-04-20  
**Code:** E4S19T03

**Upstream:** [FR-087 - Investigate `E6:S07` default-housing drift, codification points, and closure decision](../../../fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md)

---

## Input

- [FR-087](../../../fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md) requirements.
- Current `E6:S07` charter and task inventory.
- Governance/policy/rules/templates/validator/workflow sources affecting task placement.

---

## Problem statement

`E6:S07` appears to be operating as a catch-all destination beyond its original charter. Without a forensic root-cause analysis and explicit closure/partition policy, semantic placement drift will continue and undermine traceability integrity.

---

## Deliverable

- Evidence-backed investigation report:
  - Original intent of `E6:S07`.
  - Why and how `S07` became a default destination.
  - Exact codification points vs process habits.
  - Closure/split/narrow recommendation with migration guardrails.
- Actionable policy + validator backlog for enforcement.

---

## Scope

1. Reconstruct `S07` charter and lifecycle from source documents/changelog history.
2. Inventory and evaluate codification surfaces that route or bias task placement.
3. Perform semantic fit audit of `S07` task list.
4. Propose and justify story disposition options with transition strategy.

---

## Acceptance criteria

- [ ] **AC1:** Forensic timeline of `S07` intent and expansion is documented.
- [ ] **AC2:** Codification inventory distinguishes hard-coded routing from human/operator habit.
- [ ] **AC3:** All current `S07` tasks are triaged by semantic fit with rationale.
- [ ] **AC4:** Recommended disposition (`close`/`narrow`/`split`) includes migration and compatibility plan.
- [ ] **AC5:** Follow-on guardrail changes are specified as concrete implementation tasks.

---

## References

- [FR-087](../../../fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md)
- [Story 019](../Story-019-fr-br-uxr-abstract-governance-and-intake.md)
- [Story 007](../../../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)
