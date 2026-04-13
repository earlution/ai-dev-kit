---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-01T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Implementation Planning Workflow (IPW) — Agent Execution Guide

**Status:** Active  
**Purpose:** Canonical **pre-implementation** workflow: produce a **single durable plan document** (spec + test design + implementation plan) bound to a **host Kanban task**, with **mandatory bidirectional wiring**.  
**Product definition (ai-dev-kit):** `docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md`  
**Template:** `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`  
**Relationship:** **IPW** subsumes the **planning** scope of the legacy **ICW** Cursor trigger; **ICW** is a **deprecated alias** — same steps, same artifacts (**FR-042** §7).

---

## Trigger

- **`IPW`** — comprehensive planning for the current / inferred host task.
- **`IPW E{epic}:S{story}:T{task}`** — explicit host task (formats: `E5:S01:T42`, `E5S01T42`).
- **`ICW` / `icw`:** **Deprecated alias** — treat as **IPW**; do not define a divergent process.

## Mode

- **Planning mode** only (e.g. `PLANNING_MODE=true` where tools/scripts require it). **Implementation mode** blocks IPW-style elicitation.

## Execution pattern (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)

| Step | Name | Actions |
|------|------|---------|
| **0** | Identify host task | Resolve E:S:T; confirm task doc exists on Kanban. |
| **1** | Specification | Goal, functional/non-functional requirements, out of scope, constraints. |
| **2** | Test design | Test IDs, behaviors, data, environments (or doc-only verification for doc tasks). |
| **3** | Implementation plan | Ordered steps, files touched, dependencies. |
| **4** | Create plan doc | From `PLAN_DOC_TEMPLATE.md`; set **Host Task** header with link to task markdown. |
| **5** | Wire to host task | Add plan link under task doc **Input** and **References** (atomic with step 4). |
| **6** | Validate | Bidirectional links work; required sections present. |

## Status transition ownership (FR-077)

- IPW itself is planning-only and must not auto-mark implementation completion.
- IPW outputs must explicitly declare transition intent:
  - `TODO -> IN PROGRESS` at first non-planning implementation change.
  - `IN PROGRESS -> COMPLETE` only after acceptance evidence is recorded.
- Implementation execution is responsible for applying transition intent in task docs.
- RW/UKW propagation must keep task doc status and board representation in the same change set/session.

## Outputs

- One markdown plan doc per IPW run (typically co-located with the host task story folder or under `docs/implementation-cycles/` per project convention).
- Updated task doc with **Input** + **References** pointing to the plan.
- Explicit status-transition intent section in the plan artifact (required for IPW-derived tasks).

## Integration

- **Implementation Cycle (TDD):** After IPW, follow [implementation-cycle-sop.md](implementation-cycle-sop.md): Step 3 uses the plan’s spec/test sections to create **failing tests**, then implementation.
- **RW:** Release workflow is unchanged; run **RW** after shippable work with the required task token.

## References

- [Implementation Cycle SoP](implementation-cycle-sop.md)
- Framework package (legacy name `implementation-cycle-workflow`): still contains `icw_handler.py` / templates — see package README for **ICW → IPW** consolidation note.
