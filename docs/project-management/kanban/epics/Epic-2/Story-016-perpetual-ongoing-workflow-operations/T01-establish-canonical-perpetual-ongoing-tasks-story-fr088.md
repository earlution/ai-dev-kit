---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 1: Establish canonical perpetual ongoing tasks story (FR-088)

**Task ID:** E2:S16:T01  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-20  
**Last updated:** 2026-04-20 (expanded to plan migration of all workflow-related perpetual tasks into Story 016 and retire T101+ numbering)  
**Code:** E2S16T01

**Upstream:** [FR-088 - Dedicated story for perpetual ongoing tasks](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

---

## Input

- [FR-088](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) requirements.
- Existing perpetual-task patterns and current placements.

---

## Problem statement

Perpetual operational tasks need one deterministic story home. Without that, routing drifts by habit and stories with unrelated charters become overloaded.

---

## Deliverable

- Canonical perpetual-story policy under Epic 2.
- Inclusion/exclusion criteria for perpetual tasks.
- Migration plan for currently mis-housed perpetual tasks.
- Guardrail set for future intake and task placement.

---

## Migration planning scope (workflow-related perpetual tasks)

This task plans migration for **all workflow-related perpetual tasks** to Story 016.

### Seed inventory (known perpetual workflow anchors to renumber)

- `E2:S16:T03` - UKW perpetual task (legacy ID; renumber required)
- `E2:S16:T03` - CMW perpetual task (legacy ID; renumber required)
- `E2:S16:T03` - RW maintenance perpetual task (legacy ID; renumber required)

### Planning requirements

- Build a complete inventory of perpetual workflow tasks across Epic 2 and Epic 6 (not just known seeds).
- Classify each candidate as:
  - `migrate_to_S16`
  - `retain_with_rationale`
  - `deprecate_or_redirect`
- Define target-state mapping (current task -> Story 016 target anchor pattern).
- Define **renumbering policy** for perpetual tasks in Story 016:
  - perpetual tasks must use standard task numbering (non-`T101+`)
  - `T101+` is treated as legacy and migration-only
  - establish deterministic mapping for `T101/T102/T103` -> Story 016 task IDs
- Define transition mechanics for:
  - story/task doc links
  - `kboard` / `fbuboard` references
  - FR/BR/UXR upstream links
  - validator and policy references that currently point to legacy perpetual anchors
- Define release sequencing and rollback strategy to preserve traceability.

### Phased execution plan

1. **Discovery phase:** exhaustive inventory of workflow perpetual tasks and references.
2. **Design phase:** canonical mapping and compatibility/redirect policy.
3. **Re-housing phase:** apply doc/board/link migration with deterministic diffs.
4. **Hardening phase:** update policies/validators/tests to enforce Story 016 ownership.
5. **Verification phase:** link validation, board integrity checks, and regression checks.

---

## Acceptance criteria

- [ ] **AC1:** Story 16 is established as canonical perpetual-task home in Epic 2.
- [ ] **AC2:** Scope and boundaries are documented and linked.
- [ ] **AC3:** Complete inventory of workflow-related perpetual tasks and migration disposition is documented.
- [ ] **AC4:** Renumbering plan is documented and approved (`T101+` legacy -> Story 016 standard task IDs).
- [ ] **AC5:** Follow-on implementation tasks are identified for policy/validator enforcement of Story 016 ownership and non-`T101+` numbering.
