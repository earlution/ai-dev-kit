---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 15, Task 5: Implement UKW/RW canonical row transform engine (FR-090)

**Task ID:** E2:S15:T05  
**Status:** IN PROGRESS  
**Priority:** CRITICAL  
**Estimated Effort:** Large  
**Created:** 2026-04-22  
**Last updated:** 2026-04-22  
**Code:** E2S15T05

**Upstream:** [FR-090 — UKW canonical row transform engine and board-specific rendering contracts](../../../fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)

---

## Input

- BR-069 and T04 evidence confirms non-canonical row mutation behavior across UKW/RW.
- FR-090 defines redesign requirements for shared transform pipeline and board-specific rendering contracts.
- Existing implementation surface: `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`.

---

## Problem statement

RW and UKW currently mutate MoSCOW rows through append/reconcile-style transforms with divergent ordering and terminal-position-dependent timestamp enforcement. This permits repeated FBU/task/IPP/timestamp segments and inconsistent output between contexts.

Task T05 implements the FR-090 architecture so both workflows remain cohesive, loosely coupled, and sympathetically aware through explicit contracts and shared canonical transforms.

---

## Deliverable

- Shared canonical row transform path used by both RW and UKW contexts.
- Board-specific rendering contracts enforced (`fbuboard` FBU-first; deterministic kboard contract).
- Regression coverage for parity, idempotency, and timestamp/task-link invariants.

---

## Scope

1. Implement shared parse-normalize-render transform API for MoSCOW row tails.
2. Integrate API in both `update_kanban_board` and `enforce_terminal_timestamps_on_boards`.
3. Enforce invocation context contract (`rw_step_7` vs `standalone`) and mutation budget behavior.
4. Add/upgrade regression tests for parity and invariants.

---

## Acceptance Criteria

- [ ] **AC1:** RW and UKW call a shared canonical row-transform pipeline (no ordering divergence).
- [ ] **AC2:** `fbuboard` rows always render `FBU -> Task -> IPP -> Last modified`.
- [ ] **AC3:** No synthetic second `Last modified` is appended when a valid row timestamp already exists.
- [ ] **AC4:** Repeated runs remain idempotent; duplicate task-link/FBU-link segments are not multiplied.
- [ ] **AC5:** Regression suite proves RW/UKW parity on identical fixtures and preserves divergence-safe forensic behavior.
- [ ] **AC6:** FR-090 and BR-069 residual implementation ACs are satisfiable/traceable through this task.

---

## References

- [FR-090](../../../fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- [BR-069](../../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [E2:S15:T04](T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md)
- [IPP-E2S15T04](../../../../../implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md)
