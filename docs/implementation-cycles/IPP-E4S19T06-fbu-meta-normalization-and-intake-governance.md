---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S19:T06 - Planning: Spec, Tests, Implementation Plan (IPP)

**Host Task:** [`T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md`](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) **(E4:S19:T06)**  
**Planning for:** [UXR-008](../project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md), [FR-086](../project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md), [FR-073](../project-management/kanban/fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md)  
**Status:** Draft

---

## 1. Requirements (ascertained baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| ---- | ---- | ---- |
| RF1 | Establish one canonical implementing task for UXR-008, FR-086, and FR-073 residual scope. | T06 AC1, T06 AC2 |
| RF2 | Define deterministic supporting-doc filename policy and old->new migration map for remaining in-scope kanban/FBU files. | UXR-008 AC3/AC4, FR-086-F1/F5, T05 AC1/AC2 |
| RF3 | Apply canonical `FBU` collective terminology in scoped docs without changing individual issue identities (`FR-*`, `BR-*`, `UXR-*`). | FR-086-F2/F4, T02 AC2/AC3 |
| RF4 | Preserve compatibility behavior for legacy long-form paths via redirect/alias notes and link rewiring. | UXR-008 AC5, FR-086-NF3, T05 AC5 |
| RF5 | Close FR-073 AC3 by planning a scoped board-statistics/taskless reconciliation pass under T06 ownership. | FR-073 AC3 |
| RF6 | Keep all task/story/board/FBU links bidirectionally wired to T06 and this IPP. | T06 AC7, FR-086 AC5, T05 AC6 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| ---- | ---- | ---- |
| RNF1 | Deterministic outputs: repeated runs over unchanged inputs produce identical mapping and wording. | FR-086-NF1, T05 N1 |
| RNF2 | Historical traceability preserved when superseding T02/T05/T73 linkage. | FR-086-NF2 |
| RNF3 | Link integrity maintained for all touched docs. | FR-086 AC4, T05 AC3 |
| RNF4 | Scope remains documentation/governance; no runtime behavior changes in this planning package. | FR-086 scope |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Individual issue filenames stay native (`FR-*`, `BR-*`, `UXR-*`).
  - Canonical board defaults remain `kboard.md` and `fbuboard.md`.
  - Superseded tasks retain history; they are not deleted.
- **In scope:** T06 ownership rewiring, naming policy, terminology contract, compatibility policy, FR-073 AC3 planning closure path.
- **Out of scope:** Executing full filename migration waves and release of downstream implementation changes beyond this planning/package publication.

---

## 2. Specification

### 2.1 Goal

Create a single meta-governance planning contract for UXR-008, FR-086, and FR-073 by superseding fragmented task ownership and publishing one canonical IPP artifact that defines naming, terminology, compatibility, and board-governance closure requirements.

### 2.2 Specification mapping from ascertained requirements

- **Ownership consolidation (RF1/RF6):** All three FBU docs and relevant board/story/task surfaces must point to `E4:S19:T06` + `IPP-E4S19T06` as canonical references.
- **Naming policy (RF2):** Produce a canonical mapping table covering remaining legacy surfaces, explicitly including `fr-br-uxr-board.md` and `fr-br-uxr-open-taskless-queue.md` disposition.
- **Terminology contract (RF3):** Enforce collective `FBU` usage in scoped narrative docs while preserving individual FR/BR/UXR identity constraints.
- **Compatibility behavior (RF4):** Define redirect/alias guidance for retained legacy paths and link rewires.
- **FR-073 AC3 closure path (RF5):** Define a scoped UKW/statistics reconciliation activity as a mandatory implementation wave under T06.

### 2.3 Constraints

- Must align with FR-042 IPW/IPP conventions and current canonical `IPP-` artifact naming.
- Must preserve compatibility for existing references that still point to legacy long-form filenames until migration is completed.
- Must avoid timestamp churn or non-substantive `Last modified` rewrites while updating board surfaces.

### 2.4 Status transition intent (mandatory)

- **Current task status:** IN PROGRESS
- **Transition trigger to IN PROGRESS:** Already satisfied at task creation (meta task filed as active governance work).
- **Transition trigger to COMPLETE:** Acceptance evidence recorded for all inherited ACs (including FR-073 AC3 closure evidence).
- **Atomic propagation requirement:** Task doc status and board row status must update in the same release/session.
- **Owner:** Implementation/release execution step (not planning-only IPP publication).

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Ownership rewiring | UXR-008, FR-086, FR-073 `Implementing Task` point to `E4:S19:T06`; superseded lineage retained in each doc. |
| T2 | Story/task supersede coherence | Story 019 shows T06 active and T02/T05 superseded; T73 marked historical successor linkage. |
| T3 | Board traceability | `fbuboard.md` rows for UXR-008/FR-086/FR-073 reference `E4:S19:T06` and `IPP-E4S19T06`. |
| T4 | Artifact naming contract | T06, FBU docs, and board use `IPP-` prefix for canonical planning artifact links; legacy `IPW-` references removed or explicitly compatibility-noted. |
| T5 | Legacy path policy coverage | Mapping table includes explicit disposition for `fr-br-uxr-board.md` and `fr-br-uxr-open-taskless-queue.md`. |
| T6 | Link integrity | All touched markdown links resolve (no dead links in touched docs). |
| T7 | FR-073 AC3 planning closure | IPP implementation waves contain explicit scoped UKW/statistics reconciliation step with evidence expectations. |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 1 | File T06 meta task under Story 019 | New task doc with merged scope + ACs |
| 2 | Mark T02 and T05 as superseded by T06 | Historical task docs preserved with redirect notes |
| 3 | Rewire UXR-008 / FR-086 / FR-073 to T06 | Canonical implementing-task ownership in intake docs |
| 4 | Rewire Story 019, Story 001, and `fbuboard.md` rows | Canonical board/story/task traceability |
| 5 | Publish IPP-E4S19T06 | Unified planning artifact for merged scope |
| 6 | Canonicalize planning artifact prefix references | `IPP-` links used consistently; legacy `IPW-E4S19T02` path no longer canonical |
| 7 | Validate wiring and link integrity | Validation evidence for release readiness |

### 4.1 Files to create or modify

- `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md` (new)
- `docs/implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md` (new)
- `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake.md`
- `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md`
- `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md`
- `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md`
- `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo.md`
- `docs/project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md`
- `docs/project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md`
- `docs/project-management/kanban/fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md`
- `docs/project-management/kanban/fbuboard.md`

### 4.2 Dependency order

1. Create T06 + IPP artifact.
2. Update superseded task docs and story checklist.
3. Rewire upstream FBU docs and board rows.
4. Run wiring/link validation.
5. Publish via RW.

---

## 5. Success / verification criteria

- [ ] T06 exists and is the canonical implementing task for UXR-008, FR-086, FR-073.
- [ ] T02 and T05 are marked superseded; T73 includes successor note.
- [ ] `fbuboard.md` rows for UXR-008/FR-086/FR-073 point to T06 and `IPP-E4S19T06`.
- [ ] All touched docs use canonical `IPP-` artifact naming.
- [ ] Required wiring validators pass for `E4:S19:T06`.

---

## References

- [Host task E4:S19:T06](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md)
- [UXR-008](../project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md)
- [FR-086](../project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)
- [FR-073](../project-management/kanban/fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md)
- [T02](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md)
- [T05](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md)
- [T73](../project-management/kanban/epics/Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md)
