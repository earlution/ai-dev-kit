---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 6: FBU meta normalization and intake governance (UXR-008 / FR-086 / FR-073)

**Task ID:** E4:S19:T06  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-04-26  
**Last updated:** 2026-04-26 (meta-task created to supersede T02/T05 and absorb FR-073 AC3 closure work)  
**Code:** E4S19T06

**Upstream:** [UXR-008](../../../fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md), [FR-086](../../../fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md), [FR-073](../../../fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md)

**Supersedes:** [E4:S19:T02](T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md), [E4:S19:T05](T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md), and post-completion governance follow-on from [E5:S01:T73](../../Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md)

**Planning artifact (IPP):** [IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md](../../../../../implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md)

Publication Status: NOT_APPLICABLE
Publication N/A Reason: This task follows the consolidated FR-042 IPW/IPP model with a single durable IPP artifact rather than the legacy three-file specification/test-design/implementation-plan publication set.

---

## Input

- Existing canonical board defaults (`kboard.md`, `fbuboard.md`) and partial supporting-doc normalization from T02/T05.
- Remaining legacy surfaces still requiring canonical policy closure and migration decisions (`fr-br-uxr-board.md`, `fr-br-uxr-open-taskless-queue.md`).
- FR-073 AC3 open requirement: scoped UKW/statistics refresh tied to active board governance.

---

## Problem statement

FBU naming and intake-governance ownership is currently split across multiple tasks and stories, leaving canonical filename policy, `FBU` terminology standardization, and open-taskless intake/statistics closure partially delivered and harder to govern as one release contract.

---

## Deliverable

- Single governing task anchor for UXR-008 + FR-086 + FR-073 residual scope.
- Unified IPP package that supersedes fragmented planning artifacts and maps all inherited acceptance criteria.
- Canonical task/story/board/FBU cross-wiring so future releases use one ownership path (`E4:S19:T06`).

---

## Scope

1. Consolidate ownership from T02 and T05 under this meta task while preserving historical traceability.
2. Define and finalize canonical supporting-doc filename policy and migration mapping across kanban/FBU docs in scope.
3. Standardize `FBU` collective terminology while preserving individual `FR-*`/`BR-*`/`UXR-*` identity.
4. Resolve FR-073 AC3 by governing scoped board statistics/taskless-queue update under this meta anchor.
5. Rewire FBU/task/story/board references to this task and its IPP artifact.

---

## Acceptance Criteria

- [ ] **AC1:** UXR-008, FR-086, and FR-073 list `E4:S19:T06` as canonical implementing task, with historical implementing-task lineage preserved.
- [ ] **AC2:** T02 and T05 are explicitly marked as superseded by T06 (history retained, no orphan references).
- [ ] **AC3:** Canonical supporting-doc naming policy and deterministic migration map are documented in `IPP-E4S19T06`.
- [ ] **AC4:** `FBU` collective terminology standard is applied in scoped docs without renaming individual issue identities.
- [ ] **AC5:** Legacy compatibility behavior (aliases/redirect notes) is documented for any retained long-form paths.
- [ ] **AC6:** FR-073 AC3 closure work (scoped board/statistics reconciliation) is explicitly planned and traceably wired to this task.
- [ ] **AC7:** `fbuboard.md`, Story 019 checklist, and all three FBU docs point to the T06 task + T06 IPP consistently.

---

## References

- [UXR-008](../../../fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md)
- [FR-086](../../../fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)
- [FR-073](../../../fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md)
- [E4:S19:T02](T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md)
- [E4:S19:T05](T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md)
- [E5:S01:T73](../../Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md)
- [IPP-E4S19T06](../../../../../implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md)
