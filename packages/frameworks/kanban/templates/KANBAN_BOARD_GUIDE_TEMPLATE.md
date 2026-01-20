---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# {Project Name} – Kanban Board Guide

**Last Updated:** {Date}  
**Version:** {Version}

> **For structured information only, see:** [`kanban-board.md`](kanban-board.md)

---

## Overview

This guide explains how to use and understand the Kanban board. The board tracks all work on the {project name} repository.

**Structure:** All Kanban documentation lives under `{kanban_path}/`:
- Epic overviews: `epics/Epic-X/Epic-X.md`
- Story documents: `epics/Epic-X/Story-XXX-*.md`
- Board views: `_index.md` (quick view), `kanban-board.md` (structured information), and this file (guide)

---

## Parent-Child Relationship

This Kanban board serves as the **parent document** to Story documents, similar to how Story documents are parents of Task documents:
- **Board → Story:** This board links to and tracks all Story documents
- **Story → Task:** Story documents link to and track all Task documents
- This creates a clear hierarchy: Board (parent) → Story (child) → Task (grandchild)

---

## MoSCOW Prioritized In-Progress Tasks

The board includes a **MoSCOW Prioritized In-Progress Tasks** section that shows all in-progress tasks (status: IN PROGRESS or TODO) organized by MoSCOW priority and ordered chronologically (most recently updated first).

**MoSCOW Categories:**

- **M (Must Have):** Critical tasks that must be completed
  - Highest priority items requiring immediate attention
  - Tasks that block other work or are on critical path

- **S (Should Have):** Important tasks that should be completed
  - High-value items that contribute significantly to goals
  - Tasks that are important but not blocking

- **C (Could Have):** Nice-to-have tasks that could be completed
  - Lower priority items that add value but are not essential
  - Tasks that can be deferred if needed

- **O (Ongoing):** Perpetual maintenance tasks that never complete
  - Perpetual tasks that are tracked but don't block other work
  - Tasks that require continuous attention (e.g., workflow maintenance, changelog management)
  - These tasks are visible but don't interfere with prioritization of completable work

- **W (Won't Have):** Tasks deferred or not being done at this time
  - Tasks explicitly marked as deferred
  - Tasks not being actively worked on

**Task Ordering:**
Tasks within each MoSCOW section are ordered chronologically, with most recently updated tasks at the top.

---

## How to Add Work

1. **Create Epic** (if needed):
   - Create `epics/Epic-X/` directory
   - Add `epics/Epic-X/Epic-X.md` (Epic overview)
   - Update `kanban-board.md` and `_index.md`

2. **Create Story**:
   - Add `epics/Epic-X/Story-XXX-short-slug.md`
   - Update Epic doc (`epics/Epic-X/Epic-X.md`) with Story reference
   - Update `kanban-board.md` and `_index.md`

3. **Create Task**:
   - Add `epics/Epic-X/Story-XXX/T{task}-description.md` (separate file format) OR
   - Add delimited section in Story document using Task ID as header
   - Update Story document with Task reference

4. **Track Progress**:
   - Update Task status in Task doc
   - Update Story status in Story doc
   - Update Epic doc with version markers as work completes
   - Update board views as needed

See [`README.md`](README.md) for full structure details and `{local_policy_path}` for governance.

---

## Quick Reference

- **Board Quick View:** [`_index.md`](_index.md)
- **Board (Structured Info):** [`kanban-board.md`](kanban-board.md)
- **Kanban Governance Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md` - Framework-level policy documentation
- **Local Kanban Policy:** `{local_policy_path}` - Project-specific implementation details

---

## Board Structure

The board is organized into two main sections:

1. **MoSCOW Prioritized In-Progress Tasks** - Shows all active tasks organized by priority (M/S/C/O/W)
2. **Epics** - Shows all epics with their status, priority, stories, and links

The board serves as the parent document to Story documents, providing a comprehensive view of all work items in the project.

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

## Notes

- The board is optimized for quick scanning - structured information only
- For rules, explanations, and how-to content, see this guide document
- The board is updated by UKW (Update Kanban Workflow) and RW (Release Workflow) if integrated
- Board views are synchronized with Epic/Story/Task documents

---

**Template Version:** 2.0.0  
**Last Updated:** 2026-01-20  
**Based On:** Kanban board info-only split (E4:S18:T01)
