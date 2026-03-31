---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E5:S01:T73 – FR/BR/UXR Board: Open ∧ Taskless Intake Execution Plan

**Task ID:** E5:S01:T73  
**Status:** TODO  
**Priority:** MEDIUM  
**Version Anchor:** v0.5.1.73+0 (RW -k doc-init — **Released** 2026-03-31)  
**Feature Request:** [FR-073 – FR/BR/UXR board intake execution plan](../../../fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md)

---

## Summary

Own the **Intake plan** block on [`fr-br-uxr-board.md`](../../../fr-br-uxr-board.md): definition of open ∧ taskless, **epic branch + `RW -k`** loop, MoSCOW queue table, hygiene rules, and execution order. Deliver **concrete, repeatable steps** so agents and humans can drain the queue without orphan documentation.

---

## Scope

Documentation-only ownership of the FR/BR/UXR **intake execution plan** on the prioritization board: definitions, **pre-identified** FR/BR/UXR→task mapping, **housing policy** for story choice, phased execution (A/B/C), and hygiene notes. **Out of scope:** implementing ICW code (**FR-040**), fixing **BR-039** product behavior, or automating UKW (other tasks).

---

## Input

- [`fr-br-uxr-board.md`](../../../fr-br-uxr-board.md) — MoSCOW **Must / Should** rows and Intake plan block.  
- [`FR-073`](../../../fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md) — feature request and acceptance criteria.  
- [`Story-000-uxr-repo.md`](../../Epic-7/Story-000-uxr-repo.md) — **UXR-n → E7:S00:Tnn** repository convention.  
- [`TASK_TEMPLATE.md`](../../../../../../packages/frameworks/kanban/templates/TASK_TEMPLATE.md) — required headings for `validate_version_bump.py`.  

---

## Pre-identified task mapping (Must / Should queue)

**Rule:** IDs below are **proposed reservations** for `RW -k` doc-init or board-refresh work. If you renumber, update **`fr-br-uxr-board.md`**, this task, and **FR-073** together.

| FR/BR/UXR | Type | Primary task ID | Status | Primary epic branch | Housing rationale |
|-----------|------|-----------------|--------|---------------------|-------------------|
| **BR-038** | BR | **E6:S06:T02** | Exists | `epic/6-framework-management` | [T02](../../../Epic-6/Story-006-feature-requests/T02-fix-release-workflow-micromanagement-issues.md) already owns BR-038; board line was missing link. |
| **BR-039** | BR | **E6:S06:T43** | **Create** | `epic/6-framework-management` | Cascade/whitelist is **agent+RW execution**; stays under **E6:S06** with T02 but **separate** task for isolated SemVer and acceptance criteria. |
| **BR-059** | BR | **E6:S07:T109** | **Create** | `epic/6-framework-management` | UKW MoSCOW coverage bug → **E6:S07** perpetual workflow story adjacent to **T101** UKW. |
| **FR-040** (ICW) | FR | **E5:S01:T40** | Exists | `epic/5-documentation-management` | FR Repo **1:1** pattern for ICW FR record; [T40](T40-implementation-cycle-workflow-icw.md). |
| **UXR-001** | UXR | **E7:S00:T01** · **E7:S05:T01** | Mixed | `epic/7-documentation-maintenance` | **S00:T01** = repository slot per `Story-000-uxr-repo`; **S05:T01** = existing implementation/synthesis. |
| **UXR-002** | UXR | **E7:S00:T02** | **Create** (reconcile impl) | `epic/7-documentation-maintenance` | Repository slot **T02**; audit Epic 7 for parallel impl task before filing. |
| **UXR-005** | UXR | **E7:S00:T05** · **E7:S01:T09** | Mixed | `epic/7-documentation-maintenance` | **S00:T05** registry + **S01:T09** governance implementation per [kanban-board-guide](../../../kanban-board-guide.md). |
| **FR-073** | FR | **E5:S01:T73** | This task | `epic/5-documentation-management` | Meta intake-plan FR; FR Repo. |

### Story-choice policy (shortcut)

- **E5:S01** — FR **repository** tasks and doc-init for **FR-xxx** where **Txx** aligns with filing convention.  
- **E6:S06** — Framework **delivery** tasks for BRs about RW/agent tooling (cluster with other feature-request work).  
- **E6:S07** — BRs/FRs that change **UKW / CMW / RW maintenance** semantics or agent steps.  
- **E7:S00** — UXR **repository** **Tnn** for **UXR-n**; implementation may remain on **E7:S01**, **E7:S05**, etc.

---

## Concrete plan (phased)

### Phase A — Filing and traceability (this intake)

| Step | Action | Done |
|------|--------|------|
| A1 | **FR-073** + **T73** + **Story-001** checklist row | [x] |
| A2 | Board **Intake plan** header: **Kanban anchor** → FR-073 / T73 | [x] |
| A3 | MoSCOW **Should** row for **FR-073** with `| E5:S01:T73` | [x] |
| A4 | **`RW -k E5:S01:T73`** on `epic/5-documentation-management` | [x] |

### Phase B — Queue execution (ongoing)

| Step | Action | Done |
|------|--------|------|
| B1 | For each **Must** item: implementation epic branch → task doc → **`RW -k`** → update board line with **`| E…`** | [ ] |
| B2 | **Should:** **FR-040** (ICW), **UXR** reconciliation per board table | [ ] |
| B3 | After each intake: refresh **taskless** table if the item moved to linked | [ ] |

### Phase C — Hygiene passes (scheduled / UKW)

| Step | Action | Done |
|------|--------|------|
| C1 | Reconcile **UXR-001 / 002 / 005** board lines vs [`epics/Epic-7/`](../../Epic-7) (no duplicate **E7:S00:Txx** without decision) | [ ] |
| C2 | Update **Board Statistics** (counts, priority buckets) when MoSCOW changes | [ ] |
| C3 | Batch-add **`Implementing Task:`** to high-traffic FRs when touching them (optional stretch) | [ ] |

---

## Deliverable

1. Intake plan section remains the **single narrative SoT** for the open∧taskless + **`RW -k`** loop; **FR-073** cites scope only.  
2. MoSCOW **FR-073** row tracks visibility until Phase B/C yields a “maintenance only” state (then FR may move toward COMPLETE in a later build).  
3. Version markers on board **`Last Updated`** line updated when this task ships substantive doc changes (via RW).

---

## Acceptance Criteria

- [ ] **AC1:** **FR-073** ↔ **T73** bidirectional; **Story-001** checklist includes **T73**.  
- [ ] **AC2:** [`fr-br-uxr-board.md`](../../../fr-br-uxr-board.md) Intake plan references **FR-073** / **E5:S01:T73**.  
- [ ] **AC3:** At least one **`RW -k`:** **`0.5.1.73+0`** (or subsequent **+n**) attributes filing to **T73**.  
- [ ] **AC4:** **MoSCOW** lists **FR-073** with task link.  
- [ ] **AC5:** Phase B/C checklists in this doc updated when major queue milestones complete (honor clause — update table dates in board footer).  
- [ ] **AC6:** **Pre-identified mapping** in this doc matches [`fr-br-uxr-board.md`](../../../fr-br-uxr-board.md) **Intake plan** table whenever either changes.

---

## References

- [`fr-br-uxr-board.md`](../../../fr-br-uxr-board.md)  
- [`intake-process`](../../../../../../.cursor/skills/intake-process/SKILL.md) skill  
- [FR-072](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md) (precedent: governance intake on same story)
