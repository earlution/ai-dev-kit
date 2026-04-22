---
lifecycle: evergreen
ttl_days: null
created_at: YYYY-MM-DDTHH:MM:SSZ
expires_at: null
housekeeping_policy: keep
---

# E{epic}:S{story}:T{task} — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T{task}-[slug].md`](T{task}-[slug].md) **(E{epic}:S{story}:T{task})**  
**Planning for:** [FR-XXX](../../../fr-br/FR-XXX-*.md) *(if applicable)*  
**Status:** Draft | Review | Approved

> **IPW (Implementation Planning Workflow):** Use this template when running **IPW** / **IPW E:S:T**. The **Host Task** link and bidirectional wiring to the task doc **Input** and **References** are **mandatory** before the plan is complete (see project **FR-042** — *Implementation Planning Workflow* in `docs/project-management/kanban/fr-br/`).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | … | … |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | … | … |

### 1.3 Invariants and boundaries

- **Invariants:** …
- **In scope:** …
- **Out of scope:** …

---

## 2. Specification

### 2.1 Goal

[One paragraph: what outcome this plan enables.]

### 2.2 Specification mapping from ascertained requirements

Describe how the specification formalizes the requirements baseline above.

### 2.3 Constraints

- …

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO | IN PROGRESS | COMPLETE
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands.
- **Transition trigger to COMPLETE:** Acceptance evidence is recorded (tests/verification notes linked).
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session.
- **Owner:** Implementation execution step (not planning-only IPW creation).

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | … | … |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 1 | … | … |

### 4.1 Files to create or modify

- …

### 4.2 Dependency order

1. …

---

## 5. Success / verification criteria

- [ ] …

---

## References

- …
