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
**Status:** PENDING *(Phase B/C filed **v0.5.1.74+2** — verify UKW/statistics ACs in production use)*  

**Implementing Task:** [E5:S01:T73](../epics/Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md)

---

## Summary

The **Intake plan** prose on [`fbuboard.md`](../fbuboard.md) (open ∧ taskless queue, epic branch + **`RW -k`**, hygiene notes) had **no implementing task**, so changes could not be attributed in versioning or Kanban. This FR files **E5:S01:T73** as the permanent anchor and defines a **concrete maintenance and execution plan** (phases, acceptance criteria, checklist).

---

## Problem

1. **Traceability gap:** Board narrative is not an FR deliverable without **FR ↔ task ↔ RW** closure.  
2. **Drift risk:** MoSCOW rows, statistics, and **`Implementing Task:`** headers fall out of date without an owner task.  
3. **UXR ambiguity:** High-priority UXRs may already map to Epic 7 tasks; the plan calls for reconciliation — needs a tracked checklist.

---

## Requirements

### FR-073:R01 — Kanban anchor

- **FR-073** and **E5:S01:T73** exist with bidirectional links.  
- [`fbuboard.md`](../fbuboard.md) **Intake plan** section cites **FR-073** / **T73** as SoT for that block.

### FR-073:R02 — MoSCOW visibility

- **FR-073** appears on the FR/BR/UXR board with a link to **T73** (at minimum in **Should** until work completes).

### FR-073:R03 — Executable plan

- Task document **T73** holds phased plan, acceptance criteria, maintenance triggers, and **pre-identified FR/BR/UXR → task** mapping (see task doc **§ Pre-identified task mapping**).

### FR-073:R04 — Pre-identified task mapping

- MoSCOW **Must / Should** queue has a **reserved E/S/T** per FR/BR/UXR before intake (`RW -k`); see **[Intake plan → Pre-identified task mapping](../fbuboard.md)** and **§ Pre-identified mapping** in **T73**.
- Any change to proposed IDs requires updating **this FR**, **T73**, and the board table in the same commit/RW.

---

## Acceptance Criteria

- [x] **AC1:** **RW** released with **T73** narrative closure — **`v0.5.1.74+2`** (internal **T74** build 2; see detailed changelog for monotonicity note).  
- [x] **AC2:** Intake plan section and **T73** updated together for Phase B/C (2026-03-31).  
- [ ] **AC3:** At least one **UKW** or scoped pass updates **MoSCOW taskless table** + **Board Statistics** using **T73** as the reference epic/story task where doc-only.  
- [x] **AC4:** **Pre-identified task mapping** consistent across [`fbuboard.md`](../fbuboard.md), **T73**, and **FR-073:R04** for Phase B/C filing pass.

---

## Dependencies

- [FR-043 – UKW Gap Discovery](FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) (related; broader unfiled inventory).  
- [FR-051 – FR/BR/UXR Prioritization Board](FR-051-fr-br-uxr-prioritization-board.md) (delivered the board artifact).  
- [`fbu-structure.md`](../fbu-structure.md) (index; links to board).

---

## Intake Decision

**Intake Status:** FILED — **Phase B/C** documented under **`v0.5.1.74+2`** (SemVer **`v0.4.686+2`**); **AC3** UKW/statistics pass still open.

**Assigned To:**

- **Epic / Story:** Epic 5, Story 1 (FR Repo)  
- **Task:** E5:S01:T73  
- **Version:** **`0.5.1.73+0`** doc-init + **`0.5.1.74+2`** Phase B/C narrative closure *(see changelog)*  

**Kanban Links:**

- Epic: [`Epic-5.md`](../epics/Epic-5/Epic-5.md)  
- Story: [`Story-001-fr-repo.md`](../epics/Epic-5/Story-001-fr-repo.md)  
- Task: [`T73`](../epics/Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md)
