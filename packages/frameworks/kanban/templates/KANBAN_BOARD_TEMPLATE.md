---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# {Project Name} – Kanban Board

**Last Updated:** {Date}  
**Version:** {Version}

**Note:** {Optional status note about epics or overall project status}

---

## Overview

This board tracks all work on the {project name} repository.

**Structure:** All Kanban documentation lives under `{kanban_path}/`:
- Epic overviews: `epics/Epic-X/Epic-X.md`
- Story documents: `epics/Epic-X/Story-XXX-*.md`
- Board views: `_index.md` (quick view) and this file (detailed view)

**Parent-Child Relationship:**
This Kanban board serves as the **parent document** to Story documents, similar to how Story documents are parents of Task documents:
- **Board → Story:** This board links to and tracks all Story documents
- **Story → Task:** Story documents link to and track all Task documents
- This creates a clear hierarchy: Board (parent) → Story (child) → Task (grandchild)

---

## MoSCOW Prioritized In-Progress Tasks

This section shows all in-progress tasks (status: IN PROGRESS or TODO) organized by MoSCOW priority and ordered chronologically (most recently updated first).

### Must Have (M) - Critical Tasks

*Critical in-progress tasks that must be completed.*

- **{E{epic}:S{story}:T{task}}** – {Task description}  
  *Last updated: {Date}* | [Task Doc](epics/Epic-{epic}/Story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/Epic-{epic}/Story-{story}-{name}.md)

### Should Have (S) - Important Tasks

*Important in-progress tasks that should be completed.*

- **{E{epic}:S{story}:T{task}}** – {Task description}  
  *Last updated: {Date}* | [Task Doc](epics/Epic-{epic}/Story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/Epic-{epic}/Story-{story}-{name}.md)

### Could Have (C) - Nice-to-Have Tasks

*Nice-to-have in-progress tasks that could be completed.*

- **{E{epic}:S{story}:T{task}}** – {Task description}  
  *Last updated: {Date}* | [Task Doc](epics/Epic-{epic}/Story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/Epic-{epic}/Story-{story}-{name}.md)

### Ongoing (O) - Perpetual Tasks

*Ongoing maintenance tasks that never complete. These are tracked but don't block other work.*

- **{E{epic}:S{story}:T{task}}** – {Task description} - Perpetual Task - {Status}  
  *Last updated: {Date}* | [Task Doc](epics/Epic-{epic}/Story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/Epic-{epic}/Story-{story}-{name}.md)

### Won't Have (W) - Deferred Tasks

*Tasks that are deferred or not being done at this time.*

*No deferred tasks at this time.*

---

## Story Checklist

This section lists all stories in a compact format (one line per story) with their completion status.

- [ ] **E{epic}:S{story} – {Story name}** - {Status} ({version} – {Status note})
  - Story: [`Story-{story}-{name}.md`](epics/Epic-{epic}/Story-{story}-{name}.md)
  - Tasks: {Task summary}

---

## Usage Instructions

### MoSCOW Priority Guidelines

**Determining Priority:**
- **Must Have (M):** Critical tasks that must be completed. These are blocking other work or are on the critical path.
- **Should Have (S):** Important tasks that should be completed. High-value items that contribute significantly to goals.
- **Could Have (C):** Nice-to-have tasks that could be completed. Lower priority items that add value but are not essential.
- **Ongoing (O):** Perpetual maintenance tasks that never complete. These are tracked but don't block other work (e.g., workflow maintenance, changelog management).
- **Won't Have (W):** Tasks that are deferred or not being actively worked on. Items explicitly marked as out of scope for current cycle.

**Default Priority:**
- If priority is not explicitly specified, default to "Should Have (S)"
- Priority can be updated as work progresses

### Chronological Ordering

**Ordering Rules:**
- Tasks within each MoSCOW section are ordered **chronologically** (most recently updated first)
- This ensures the most active work is visible at the top of each section
- Ordering is based on the task document's `Last updated` field

**How to Update Order:**
- When a task is updated, its `Last updated` field should be updated
- The board should be re-sorted to place the most recently updated tasks at the top of each section

### Task Entry Format

Each task entry in the MoSCOW sections should include:
- **Task ID:** `E{epic}:S{story}:T{task}` format (e.g., `E4:S13:T02`)
- **Task Description:** Brief description of the task
- **Last Updated:** Date when task was last updated
- **Links:** Links to Task document and parent Story document

**Format:**
```markdown
- **E{epic}:S{story}:T{task}** – {Task description}  
  *Last updated: {Date}* | [Task Doc](epics/Epic-{epic}/Story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/Epic-{epic}/Story-{story}-{name}.md)
```

### Story Checklist Format

The Story Checklist section should list all stories in a compact format (one line per story):

**Format:**
```markdown
- [x] **E{epic}:S{story} – {Story name}** - {Status} ({version} – {Status note})
  - Story: [`Story-{story}-{name}.md`](epics/Epic-{epic}/Story-{story}-{name}.md)
  - Tasks: {Task summary}
```

**Forensic Markers:**
- Completed stories should include version markers (e.g., `✅ COMPLETE (v0.4.13.1+1)`)
- In-progress stories should include current status and version

### Parent-Child Relationship

**Hierarchy:**
- **Board → Story:** The board links to and tracks all Story documents
- **Story → Task:** Story documents link to and track all Task documents
- This creates a clear hierarchy: Board (parent) → Story (child) → Task (grandchild)

**Maintaining Links:**
- Ensure all Story links in the board are valid
- Ensure all Task links in Stories are valid
- Update links when documents are moved or renamed

---

## References

- **Kanban Governance Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md` - Framework-level policy documentation
- **Local Kanban Policy:** `{local_policy_path}` - Project-specific implementation details
- **Enhanced Board Structure:** See T01 deliverables for the enhanced board structure implementation

---

**Template Version:** 1.0.0  
**Last Updated:** 2025-12-18  
**Based On:** Enhanced Kanban board structure (E4:S13:T01)

