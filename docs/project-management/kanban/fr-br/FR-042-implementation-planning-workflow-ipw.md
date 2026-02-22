---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Implementation Planning Workflow (IPW)

**Type:** Feature Request (FR)  
**Identifier:** IPW (Implementation Planning Workflow)  
**Submitted:** 2026-02-22  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** OPEN  

---

## Summary

Define and implement an **Implementation Planning Workflow (IPW)** – a formal workflow for creating planning documents (spec, test design, implementation plan) before task implementation. IPW ensures planning artifacts are produced consistently, are bidirectionally wired to their host task, and integrate with the Implementation Cycle (spec + TDD). Planning must not be ad hoc; it must be a repeatable, traceable workflow.

---

## Problem Statement

**Current Situation:**
- Planning documents (spec/test/impl plans) are created informally and inconsistently
- No defined workflow for *when* or *how* to create a plan doc
- Plan docs are often created without being wired to their host task doc
- **Fundamental failure:** Plan docs exist with no cross-reference in the task doc, and no link back – breaks traceability and discoverability
- Implementation Cycle (Step 3: Spec & Test Creation) exists but lacks a formal planning workflow that produces a durable plan document

**Root Causes:**
- No workflow or SoP for implementation planning
- No enforcement of mandatory wiring at creation time
- Planning is treated as optional or implicit rather than a first-class workflow
- Gap between "ascertain spec, create tests" (Implementation Cycle) and producing a reusable plan document

**Impact:**
- Orphaned plan docs (exist but not discoverable from task)
- Inconsistent planning quality and completeness
- Violates bidirectional wiring principle
- Weakens traceability between planning and implementation
- Implementation Cycle Step 3 lacks a clear planning artifact

---

## Proposed Solution: Implementation Planning Workflow (IPW)

### 1. IPW Definition

**IPW** is the workflow for creating an **implementation plan document** before implementation begins. It sits between Task Creation (Implementation Cycle Step 2) and Specification & Test Creation (Step 3), and produces the planning artifact that guides Step 3 and Step 4.

**IPW Trigger:** When planning for a task (e.g., user requests "Plan E4:S11:T07: Define spec, design tests, plan impl" or equivalent).

**IPW Output:** A plan document containing:
- **Specification** – Functional and non-functional requirements, scope, boundaries
- **Test Design** – Test categories, test cases, test data strategy
- **Implementation Plan** – Phases, steps, dependency order, files to create/modify

### 2. IPW Steps

1. **Identify Host Task**
   - Resolve E:S:T (epic, story, task)
   - Confirm task document exists and is the planning subject

2. **Create Plan Document**
   - Create plan doc (e.g., `T{task}-planning-spec-tests-impl.md`) in task directory
   - Populate Spec, Test Design, Implementation Plan sections
   - Include required header: Task ID, Host Task link

3. **Wire to Host Task (Mandatory, Same Session)**
   - Add plan doc to Task doc **Input** and **References**
   - Add **Host Task** link in plan doc header → task doc
   - Verify bidirectional links resolve

4. **Validate**
   - Confirm both directions wired
   - Confirm plan doc has required sections (Spec, Tests, Impl)

**Wiring is mandatory at creation time.** A plan doc is not complete until both directions are wired.

### 3. IPW Integration with Implementation Cycle

| Implementation Cycle Step | IPW Relationship |
|---------------------------|------------------|
| Step 2: Task Creation | Host task must exist before IPW |
| Step 3a: Ascertain Specification | Plan doc Spec section captures this |
| Step 3b: Create Tests | Plan doc Test Design guides this |
| Step 4: Implementation | Plan doc Impl Plan guides this |
| Step 5: RW | Unchanged |

IPW produces the plan document that formalizes and persists the output of "ascertain spec" and guides "create tests" and "implementation."

### 4. IPW Deliverables

- **IPW SoP or Workflow Doc** – Step-by-step workflow with checklist
- **Plan Doc Template** – Required structure (Spec, Test Design, Impl Plan, Host Task)
- **Wiring Rules** – Mandatory bidirectional wiring, validation
- **Integration** – Reference from Implementation Cycle SoP, .cursorrules, create-rule/create-skill

---

## Use Cases

1. **Planning for E4:S11:T07:** User requests plan → Agent runs IPW → Creates `T07-planning-spec-tests-impl.md` with spec, tests, impl → Wires to T07 task doc (Input, References) and adds Host Task in plan → Plan discoverable from task and vice versa
2. **Starting implementation:** Developer opens task doc → Sees plan doc in Input/References → Navigates to spec, test design, impl plan → Follows plan for Step 3 and 4
3. **Validating planning completeness:** Automated or manual check ensures no plan doc exists without task doc reference, and wiring is bidirectional
4. **Cursor/Agent trigger:** User types "Plan E:S:T" or "IPW E:S:T" → Agent executes IPW workflow

---

## Requirements

### Functional Requirements

- [ ] **FR-042:R01** - IPW workflow documented (SoP, workflow doc, or equivalent)
- [ ] **FR-042:R02** - Plan doc template defined with required sections (Spec, Test Design, Impl Plan, Host Task)
- [ ] **FR-042:R03** - Plan docs MUST include "Host Task" link to host task document in header
- [ ] **FR-042:R04** - Host task doc MUST reference plan doc in Input and References upon plan doc creation
- [ ] **FR-042:R05** - Wiring is atomic: plan doc creation and task doc update happen in same IPW session
- [ ] **FR-042:R06** - IPW integrated with Implementation Cycle (reference from implementation-cycle-sop, .cursorrules)
- [ ] **FR-042:R07** - Validation mechanism or checklist to detect unwired plan docs
- [ ] **FR-042:R08** - Cursor rules/skills or documentation reference IPW for plan doc creation

### Non-Functional Requirements

- [ ] **FR-042:NF01** - **Traceability:** Plan doc always discoverable from task doc and vice versa
- [ ] **FR-042:NF02** - **Consistency:** Aligns with bidirectional wiring principle
- [ ] **FR-042:NF03** - **Repeatability:** IPW is a clear, actionable, repeatable workflow

---

## Acceptance Criteria

- [ ] **AC1:** IPW workflow documented (SoP or workflow doc with steps and checklist)
- [ ] **AC2:** Plan doc template includes required sections (Spec, Test Design, Impl Plan) and mandatory Host Task link
- [ ] **AC3:** Task doc template or guidance updated to include plan doc in Input/References when plan exists
- [ ] **AC4:** Implementation Cycle SoP references IPW for plan doc creation
- [ ] **AC5:** Existing unwired plan docs (e.g., T07-planning-spec-tests-impl.md) retroactively wired
- [ ] **AC6:** Cursor rules, create-rule skill, or equivalent references IPW
- [ ] **AC7:** Validation checklist or script detects unwired plan docs

---

## Scope Analysis

**Problem Domain:** Implementation Planning, Task Documentation, Workflow Design, Bidirectional Wiring  
**Affected Areas:**
- [x] Documentation (IPW workflow, plan doc template)
- [x] Implementation Cycle SoP (integration)
- [x] Task Template (References/Input guidance)
- [x] Plan Doc Template (new or enhanced)
- [ ] Validation (optional script)
- [x] Other: Cursor rules, create-rule/create-skill

**Estimated Complexity:**
- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)

---

## Dependencies

**Blocks:**
- Reliable plan doc discoverability
- Formal planning before implementation
- Bidirectional wiring for planning artifacts

**Blocked By:**
- None

**Related Work:**
- **Implementation Cycle SoP:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md`
- **FR-035:** Task Template Cross-Wiring Section (bidirectional wiring)
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-tier structure)
- **E4:S11:T07:** Incident that triggered this FR (plan doc created without wiring)
- **create-rule / create-skill:** May extend to include IPW

---

## References

- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md` – Implementation Cycle
- `docs/project-management/kanban/epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md` – Example plan doc (unwired)
- `docs/project-management/kanban/epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs/T07-migrate-embedded-tasks-to-discrete-documents.md` – Host task for T07
- `docs/project-management/kanban/epics/Epic-4/Story-014-kanban-framework-maintenance/T01-planning-spec-tests-impl.md` – Example plan doc
- `packages/frameworks/kanban/templates/TASK_TEMPLATE.md` – Task template
- FR-035: Task Template Cross-Wiring Section
