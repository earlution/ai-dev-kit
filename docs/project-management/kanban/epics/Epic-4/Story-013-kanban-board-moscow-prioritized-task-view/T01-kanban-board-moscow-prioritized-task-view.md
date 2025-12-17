---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 13, Task 1: Kanban Board MoSCoW Prioritized Task View

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** 2025-12-18 (v0.4.13.0+0 – Task created)  
**Started:** [TBD]  
**Completed:** [TBD]  
**Version:** v0.4.13.0+0  
**Code:** E4S13T01

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}` (e.g., `E4:S13:T01`)

**Full Task ID:** `E4:S13:T01`

---

## Scope

Design and implement the MoSCoW prioritized task view in the Kanban board document. This task focuses on:
1. **Parent Document Role:** The Kanban board serves as the parent document to Story docs (like how Story docs are parents of Task docs)
2. **MoSCoW Prioritized Task View:** Before the story checklist, add MoSCoW prioritized sections (Must Have, Should Have, Could Have, Won't Have) showing all in-progress tasks
3. **Chronological Ordering:** Tasks within each MoSCoW section are ordered chronologically, with most recently updated tasks at the top
4. **Story Checklist:** Maintain the story checklist (1 line per story) after the MoSCoW sections

**Problem Statement:**
The current Kanban board primarily serves as a listing of Epics and Stories, but lacks functionality that justifies its name as a "board." It doesn't provide a prioritized view of in-progress work, making it difficult to quickly understand what needs attention. The board should serve as a true parent document to Story docs, similar to how Story docs are parents of Task docs.

**Solution:**
Enhance the Kanban board structure (`docs/project-management/kanban/kanban-board.md`) to include:
- MoSCoW prioritized sections for in-progress tasks (before the story checklist)
- Chronological ordering within each priority section (most recently updated first)
- Clear parent-child relationship documentation (Board → Story → Task)
- Story checklist remains (1 line per story) after MoSCoW sections

**Note:** Policy updates, template updates, system impact assessment, and package updates are handled in separate tasks (T02-T06).

---

## Input

**Prerequisites:**
- Current Kanban board structure (`docs/project-management/kanban/kanban-board.md`)
- Kanban governance policy (`packages/frameworks/kanban/policies/kanban-governance-policy.md`)
- Local Kanban policy (`docs/project-management/rituals/policy/kanban-governance-policy.md`)
- Kanban board template (if exists in framework package)
- Understanding of systems that interact with Kanban (RW, validators, installers)

**Dependencies:**
- None

**Related Documents:**
- `docs/project-management/kanban/kanban-board.md`
- `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- `docs/project-management/rituals/policy/kanban-governance-policy.md`
- `packages/frameworks/kanban/templates/` (templates directory)

---

## Deliverable

**Enhanced Kanban Board Document:**

1. **Updated `docs/project-management/kanban/kanban-board.md`:**
   - MoSCoW prioritized sections before story checklist:
     - **Must Have** (M) - Critical in-progress tasks
     - **Should Have** (S) - Important in-progress tasks
     - **Could Have** (C) - Nice-to-have in-progress tasks
     - **Won't Have** (W) - Deferred/not doing in-progress tasks
   - Tasks within each section ordered chronologically (most recently updated at top)
   - Each task entry includes:
     - Task ID (e.g., `E4:S13:T01`)
     - Task title/link
     - Last updated timestamp
     - Link to task document
   - Clear parent document relationship to Story docs documented
   - Story checklist remains (1 line per story) after MoSCoW sections
   - All in-progress tasks from all epics/stories included in appropriate MoSCoW section

---

## Acceptance Criteria

- [ ] Kanban board document (`kanban-board.md`) includes MoSCoW prioritized sections before story checklist
- [ ] MoSCoW sections show all in-progress tasks (status: IN PROGRESS) from all epics/stories
- [ ] Tasks within each MoSCoW section are ordered chronologically (most recently updated at top)
- [ ] Each task entry includes Task ID, title/link, last updated timestamp, and link to task document
- [ ] Kanban board clearly serves as parent document to Story docs (documented relationship)
- [ ] Story checklist remains (1 line per story) after MoSCoW sections
- [ ] All in-progress tasks are correctly categorized into appropriate MoSCoW section

---

## Approach

1. **Analyze Current Structure:**
   - Review `docs/project-management/kanban/kanban-board.md`
   - Understand current board layout and content
   - Identify where MoSCoW sections should be inserted
   - Identify all in-progress tasks across all epics/stories

2. **Design New Structure:**
   - Design MoSCoW section format:
     - Section headers (Must Have, Should Have, Could Have, Won't Have)
     - Task entry format (Task ID, Title, Last Updated timestamp, Link to task document)
     - Chronological ordering logic (most recently updated first)
   - Design parent document relationship documentation
   - Ensure story checklist remains after MoSCoW sections (1 line per story)

3. **Gather In-Progress Tasks:**
   - Scan all Epic and Story documents for in-progress tasks
   - Extract task information:
     - Task ID (E{epic}:S{story}:T{task})
     - Task title
     - Last updated timestamp
     - Task document path
     - MoSCoW priority (if specified, otherwise default to "Should Have")
   - Categorize tasks into MoSCoW sections based on priority

4. **Implement Enhanced Board:**
   - Update `docs/project-management/kanban/kanban-board.md`:
     - Add MoSCoW sections before story checklist
     - Populate with all in-progress tasks, categorized by priority
     - Order tasks chronologically within each section (most recently updated first)
     - Document parent-child relationship (Board → Story → Task)
   - Maintain story checklist (1 line per story) after MoSCoW sections
   - Ensure all in-progress tasks are included

5. **Verify Implementation:**
   - Verify all in-progress tasks are included
   - Verify chronological ordering within each MoSCoW section
   - Verify parent-child relationship is clearly documented
   - Verify story checklist remains intact

---

## Dependencies

**Depends On:**
- None

**Blocks:**
- None identified

**Blocked By:**
- None

**Parallel Development Candidacy:** Safe (documentation and structure changes)

---

## Related Work

**Related BR/FR Links:**
- User request for enhanced Kanban board functionality

**Related Tasks:**
- None

**Related Stories:**
- E4:S01 – Dev Kit Kanban Implementation (board structure foundation)
- E4:S04 – Kanban Structure Refactoring (previous structure changes)
- E2:S09 – Kanban Granularity & Discrete Task Docs (RW integration)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.13.1+1)`)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update version file with task completion
- Update changelog with task completion

---

## Notes

**MoSCoW Priority Levels:**
- **Must Have (M):** Critical tasks that must be completed
- **Should Have (S):** Important tasks that should be completed
- **Could Have (C):** Nice-to-have tasks that could be completed
- **Won't Have (W):** Tasks that are deferred or not being done

**Chronological Ordering:**
- Tasks ordered by "Last updated" timestamp (most recent first)
- If multiple tasks have same timestamp, order by Task ID
- This may not be optimal, but will do for now (per user requirement)

**Parent-Child Relationship:**
- Board → Story: Board document links to Story documents
- Story → Task: Story document links to Task documents
- This creates a clear hierarchy: Board (parent) → Story (child) → Task (grandchild)

**System Impact Considerations:**
- Release Workflow may need to understand MoSCoW sections when updating Kanban docs
- Validators may need to validate MoSCoW structure
- Installers may need to copy updated templates
- Other systems may need updates based on impact assessment

---

## Completion Summary

[To be filled when task is complete]

---

## References

- `docs/project-management/kanban/kanban-board.md` - Current board structure
- `packages/frameworks/kanban/policies/kanban-governance-policy.md` - Canonical policy
- `docs/project-management/rituals/policy/kanban-governance-policy.md` - Local policy
- `packages/frameworks/kanban/templates/` - Framework templates
- `docs/architecture/standards-and-adrs/ultimate-canonical-workflow-structure.md` - RW structure (for impact assessment)

