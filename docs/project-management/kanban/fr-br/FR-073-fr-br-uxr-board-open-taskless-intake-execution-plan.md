---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: FR/BR/UXR Board — Open ∧ Taskless Intake Execution Plan (Kanban Task)

**Type:** Feature Request (FR)  
**ID:** FR-073  
**Submitted:** 2026-03-31  
**Submitted By:** User  
**Priority:** MEDIUM  
**Status:** PENDING  

**Implementing Task:** [E5:S01:T73](../epics/Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md)

---

## Summary

The **Intake plan** prose on [`fr-br-uxr-board.md`](../fr-br-uxr-board.md) (open ∧ taskless queue, epic branch + **`RW -k`**, hygiene notes) had **no implementing task**, so changes could not be attributed in versioning or Kanban. This FR files **E5:S01:T73** as the permanent anchor and defines a **concrete maintenance and execution plan** (phases, acceptance criteria, checklist).

---

## Problem

1. **Traceability gap:** Board narrative is not an FR deliverable without **FR ↔ task ↔ RW** closure.  
2. **Drift risk:** MoSCOW rows, statistics, and **`Implementing Task:`** headers fall out of date without an owner task.  
3. **UXR ambiguity:** High-priority UXRs may already map to Epic 7 tasks; the plan calls for reconciliation — needs a tracked checklist.

---

## Requirements

### FR-073:R01 — Kanban anchor

- **FR-073** and **E5:S01:T73** exist with bidirectional links.  
- [`fr-br-uxr-board.md`](../fr-br-uxr-board.md) **Intake plan** section cites **FR-073** / **T73** as SoT for that block.

### FR-073:R02 — MoSCOW visibility

- **FR-073** appears on the FR/BR/UXR board with a link to **T73** (at minimum in **Should** until work completes).

### FR-073:R03 — Executable plan

- Task document **T73** holds phased plan, acceptance criteria, maintenance triggers, and **pre-identified FR/BR/UXR → task** mapping (see task doc **§ Pre-identified task mapping**).

### FR-073:R04 — Pre-identified task mapping

- MoSCOW **Must / Should** queue has a **reserved E/S/T** per FR/BR/UXR before intake (`RW -k`); see **[Intake plan → Pre-identified task mapping](../fr-br-uxr-board.md)** and **§ Pre-identified mapping** in **T73**.
- Any change to proposed IDs requires updating **this FR**, **T73**, and the board table in the same commit/RW.

---

## Acceptance Criteria

- [ ] **AC1:** **RW -k** (or full RW) released for **E5:S01:T73** so version/changelog reflect filing.  
- [ ] **AC2:** Intake plan section and **T73** stay in sync when queue/hygiene rules change.  
- [ ] **AC3:** At least one **UKW** or scoped pass updates **MoSCOW taskless table** + **Board Statistics** using **T73** as the reference epic/story task where doc-only.  
- [ ] **AC4:** **Pre-identified task mapping** stays consistent across [`fr-br-uxr-board.md`](../fr-br-uxr-board.md), **T73**, and **FR-073:R04** whenever a reserved **E/S/T** changes.

---

## Dependencies

- [FR-043 – UKW Gap Discovery](FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) (related; broader unfiled inventory).  
- [FR-051 – FR/BR/UXR Prioritization Board](FR-051-fr-br-uxr-prioritization-board.md) (delivered the board artifact).  
- [`fr-br-uxr-structure.md`](../fr-br-uxr-structure.md) (index; links to board).

---

## Intake Decision

**Intake Status:** FILED — released **v0.5.1.73+0** (SemVer **v0.4.684+0**); Phase B/C execution remains open per **T73**.

**Assigned To:**

- **Epic / Story:** Epic 5, Story 1 (FR Repo)  
- **Task:** E5:S01:T73  
- **Version (abstract):** **`0.5.1.73+0`** released (doc-init); further doc updates use **`+1`…**  

**Kanban Links:**

- Epic: [`Epic-5.md`](../epics/Epic-5/Epic-5.md)  
- Story: [`Story-001-fr-repo.md`](../epics/Epic-5/Story-001-fr-repo.md)  
- Task: [`T73`](../epics/Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md)
