---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Epic X, Story Y: [Title]

**Status:** [TODO/IN PROGRESS/COMPLETE/DEFERRED]
**Priority:** [HIGH/MEDIUM/LOW]
**Last updated:** [YYYY-MM-DD] (vX.Y.Z.T+B – [summary])
**Estimated Effort:** [X hours]
**Actual Effort:** [X hours]
**Started:** [YYYY-MM-DD]
**Completed:** [YYYY-MM-DD]
**Version:** vX.Y.Z.T+B
**Code:** EXXSYY

---

## Task Checklist

- [ ] **EXX:SYY:T01 – [Task Title]** ✅ COMPLETE (vX.Y.Z.T+B)
- [ ] **EXX:SYY:T02 – [Task Title]**
- [ ] **EXX:SYY:T03 – [Task Title]**

> **Format:** `Exx:Sxx:Txx` (Epic, Story, Task with 2-digit zero padding, e.g., `E1:S01:T01`, `E2:S04:T05`)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.1.3+1)`)  
> **Release Workflow Requirement:** When Release Workflow (RW) Step 4 updates Epic documentation, it MUST update **ALL sections**:
> - Epic header `Last updated` field
> - Epic Story Checklist (status and version markers)
> - Epic detailed story sections (Status, Last updated, task checkboxes)
> - Any other references to this story/task
> 
> **Consistency Check:** After each RW, verify that Story file, Epic header, Epic Story Checklist, and Epic detailed sections all match.

---

## Overview

[One sentence. What this story accomplishes.]

---

## Goals

- [ ] Goal one
- [ ] Goal two
- [ ] Goal three

---

## Tasks

**CRITICAL: Task Document Requirements**

Every Task MUST have a discrete Task document. Tasks can be documented in one of two formats:

### Format 1: Separate Task File (Recommended)

**Location:** `kanban/epics/Epic-X/Story-XXX/Task-YYY-description.md` or `kanban/epics/Epic-X/Story-XXX/TYYY-description.md`

**Example:**
- `kanban/epics/Epic-4/Story-011/Task-001-update-kanban-policy.md`
- `kanban/epics/Epic-4/Story-011/T001-update-kanban-policy.md`

**When to Use:**
- Tasks with significant complexity or multiple phases
- Tasks that may have associated files (diagrams, notes, etc.)
- Tasks that benefit from standalone documentation
- Projects requiring maximum traceability

**Task Checklist Reference:**
- [ ] **EXX:SYY:T01 – [Task Title]** ✅ COMPLETE (vX.Y.Z.T+B)
  - Task Doc: [`Task-001-task-title.md`](Task-001-task-title.md)

### Format 2: Delimited Section Within Story (Alternative)

**Location:** Within this Story document, using Task ID as a clear header

**Format:** `### E{epic}:S{story}:T{task} – Task Name` followed by task content

**When to Use:**
- Simple, straightforward tasks
- Tasks with minimal documentation needs
- Projects with tight documentation requirements
- Tasks that are tightly coupled to the Story

**Example Structure:**
```markdown
### EXX:SYY:T01 – [Task Title]

> **Format:** Always use full `Exx:Sxx:Txx` format (e.g., `E1:S01:T01`, not `T01` alone)

**Input:** [What this task requires]
**Deliverable:** [What this task produces]
**Dependencies:** [Epic, Story, Task, or external]
**Blocker:** [None, or specific dependency]
**Parallel Development Candidacy:** [Safe / Blocked] because [reason]

**Approach:**
1. Step one
2. Step two
3. Step three
```

---

### Task Documentation Requirements

Regardless of format, every Task MUST include:

- **Task ID:** `E{epic}:S{story}:T{task}` (e.g., `E4:S11:T01`)
- **Scope:** Clear description of what the task accomplishes
- **Acceptance Criteria:** Measurable criteria for task completion
- **Status:** Current status (TODO, IN PROGRESS, COMPLETE)
- **Version Anchor:** Version marker when task is complete (e.g., `✅ COMPLETE (v0.4.11.1+1)`)
- **Input:** What is required to start this task
- **Deliverable:** What is produced by this task
- **Dependencies:** Other tasks or work items this task depends on
- **Blocker:** Tasks or work items that block this task
- **Related BR/FR Links:** Links to related Bug Reports or Feature Requests

**Template:** Use `packages/frameworks/kanban/templates/TASK_TEMPLATE.md` for separate Task files.

**Examples:**
- **Separate File Format:** See `packages/frameworks/kanban/examples/Task-001-Example-Separate-File.md`
- **Delimited Section Format:** See `packages/frameworks/kanban/examples/Story-Example-With-Delimited-Tasks.md`

---

### Example Tasks

#### Example: Separate Task File Format

**Task Checklist Entry:**
- [ ] **EXX:SYY:T01 – [Task Title]** ✅ COMPLETE (vX.Y.Z.T+B)
  - Task Doc: [`Task-001-task-title.md`](Task-001-task-title.md)

#### Example: Delimited Section Format

### EXX:SYY:T01 – [Task Title]

> **Format:** Always use full `Exx:Sxx:Txx` format (e.g., `E1:S01:T01`, not `T01` alone)

**Input:** [What this task requires]  
**Deliverable:** [What this task produces]  
**Dependencies:** [Epic, Story, Task, or external]  
**Blocker:** [None, or specific dependency]  
**Parallel Development Candidacy:** [Safe / Blocked] because [reason]

**Approach:**
1. Step one
2. Step two
3. Step three

---

## Acceptance Criteria

- [ ] Criterion one
- [ ] Criterion two
- [ ] Criterion three

---

## Dependencies

**Blocks:**
- [What this story blocks]

**Blocked By:**
- [What blocks this story]

**Coordinates With:**
- [Epic/Story coordination points]

---

## Completion Summary

[What was delivered. Lessons learned. Metrics achieved.]

---

## References

- [Related docs, PRs, commits, diagrams]

---

## Next Actions

- [ ] Action one
- [ ] Action two
