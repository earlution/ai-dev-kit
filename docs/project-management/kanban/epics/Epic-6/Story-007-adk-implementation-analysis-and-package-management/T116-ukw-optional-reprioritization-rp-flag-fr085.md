---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T16:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 7, Task 116: UKW optional reprioritization `--rp` flag (FR-085)

**Task ID:** E6:S07:T116  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Complex  
**Created:** 2026-04-20  
**Last updated:** 2026-04-20 (FR-085 intake + semantic housing)  
**Code:** E6S07T116

**Upstream:** [FR-085 - UKW optional reprioritization (`--rp`) with deep intent/dependency analysis](../../../fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md)

---

## Input

- [FR-085](../../../fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md) requirements.
- Existing UKW baseline and ongoing task ownership under [E6:S07:T101](T101-update-kanban-workflow-ukw.md).
- Current board surfaces: `kboard.md` and `fbuboard.md`.

---

## Problem statement

UKW lacks an explicit optional mode for deep reprioritization based on inferred intent, dependency chains, blocker status, and practical delivery importance. This limits systematic priority correction when project conditions drift.

---

## Deliverable

- Optional UKW flag contract for `--rp` (`RePrioritise`).
- Deterministic reprioritization behavior and rationale reporting for changed priorities.
- Clear dependency/blocker-aware prioritization criteria across task + FR/BR/UXR surfaces.

---

## Scope

1. Define `--rp` activation contract and default-off behavior.
2. Define analysis model for intent/dependencies/blockers/importance.
3. Define deterministic priority movement + idempotency expectations.
4. Define audit output format for reprioritization rationale.

---

## Acceptance criteria

- [ ] **AC1:** `--rp` mode is explicitly specified and default UKW behavior is unchanged when absent.
- [ ] **AC2:** Reprioritization criteria include intent inference, dependency discovery, blocker detection, and impact weighting.
- [ ] **AC3:** `kboard.md` and `fbuboard.md` updates are deterministic and stable under repeated identical runs.
- [ ] **AC4:** UKW emits per-change rationale for reordered/promoted/demoted items.
- [ ] **AC5:** FR-085 and E6:S07:T116 are bidirectionally linked and visible in active story/board tracking.

---

## References

- [FR-085](../../../fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md)
- [Story 007](../Story-007-adk-implementation-analysis-and-package-management.md)
- [T101](T101-update-kanban-workflow-ukw.md)
- [T109](T109-br059-ukw-moscow-full-story-task-coverage.md)
- [T110](T110-ukw-fbuboard-scope-and-drift-concurrency-controls.md)
