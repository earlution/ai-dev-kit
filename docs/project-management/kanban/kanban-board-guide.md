---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board Guide

**Last Updated:** 2026-03-09 (RW: E4:S18:T01+2)  
**Version:** v0.4.18.1+2

> **For structured information only, see:** [`kanban-board.md`](kanban-board.md)  
> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For completed tasks, see:** [`kanban-completed.md`](kanban-completed.md)  
> **For FR/BR/UXR prioritization, see:** [`fr-br-uxr-board.md`](fr-br-uxr-board.md)

---

## Overview

This guide explains how to use and understand the Kanban board. The board tracks all work on the `ai-dev-kit` repository and the **Head First AI-Assisted Development** book project.

**Structure:** All Kanban documentation lives under `docs/project-management/kanban/`:

- Epic overviews: `epics/Epic-X/Epic-X.md`
- Story documents: `epics/Epic-X/Story-XXX-*.md`
- Board views: `_index.md` (quick view), `kanban-board.md` (tasks), `kanban-structure.md` (epics), and this file (guide)

---

## Parent-Child Relationship

This Kanban board serves as the **parent document** to Story documents, similar to how Story documents are parents of Task documents:

- **Board → Story:** This board links to and tracks all Story documents
- **Story → Task:** Story documents link to and track all Task documents
- This creates a clear hierarchy: Board (parent) → Story (child) → Task (grandchild)

---

## Task-Level Display (Not Story-Level)

**The board MUST show tasks, not stories.** Story-level reporting obfuscates the actual state—you cannot see which tasks are complete vs TODO vs in progress. Each board entry should link to a **Task document**.

**Exception:** Show a story only when its tasks have not yet been filed (e.g. epics with placeholder T01–T07 but no discrete task documents). Once tasks are filed, replace the story entry with the individual task entries.

UKW and RW agents must follow this when updating the board.

**RW Step 7 vs UKW (FR-038):** During a release, **RW Step 7 — Scoped Kanban Sync (UKW Mode)** updates the board and docs for the **release task** only (scoped). **Standalone UKW** is for **board-wide** MoSCOW and housekeeping. See Kanban governance policy §1.1.

---

## MoSCOW Prioritized In-Progress Tasks

The board includes a **MoSCOW Prioritized In-Progress Tasks** section that shows all in-progress tasks (status: IN PROGRESS or TODO) organized by MoSCOW priority and ordered chronologically (most recently updated first).

### MoSCOW Categories

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


### Task Ordering

Tasks within each MoSCOW section are ordered chronologically, with most recently updated tasks at the top.

### Task-Level Display (not story-level)

**MoSCOW rows must reference tasks** (`E7:S06:T03`, etc.), not whole stories (`E7:S06`). Story-level lines collapse many tasks into one line and **obfuscate actual state** (e.g. T02 complete while the story still reads TODO). Use [`kanban-structure.md`](kanban-structure.md) for epic/story hierarchy; use [`kanban-board.md`](kanban-board.md) for actionable, task-granular work.

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
   - Add `epics/Epic-X/Story-XXX/T\{task\}-description.md` (separate file format) OR
   - Add delimited section in Story document using Task ID as header
   - Update Story document with Task reference

4. **Track Progress**:
   - Update Task status in Task doc
   - Update Story status in Story doc
   - Update Epic doc with version markers as work completes
   - Update board views as needed

See [`README.md`](README.md) for full structure details and `docs/project-management/rituals/policy/kanban-governance-policy.md` for governance.

---

## Formatting Governance (E7:S01:T09 / UXR-005)

The UXR workflow owns all Kanban template/document maintenance. As of **E7:S01:T09 / UXR-005**, every multi-line MoSCOW bullet must have **exactly one blank line** separating it from adjacent entries (single-line bullets stay contiguous). When updating `kanban-board*.md`, `fr-br-uxr-board.md`, `kanban-structure.md`, `_index.md`, or related templates:

- Insert a blank line between bullets whose description spans more than one visual line.
- Leave single-line bullets directly adjacent to minimize vertical noise.
- If a release reveals formatting drift, escalate through T09 (Kanban Template Governance) before touching other boards.
- RW/UKW/MMW agents should log evidence (MMW log + validator output) showing the rule was checked or restored.

Future validator support is tracked in the documentation validator script (`scripts/documentation/validate-documentation-consistency.py`, TODO tagged with E7:S01:T09). Until automation lands, treat spacing verification as part of RW Step 7/8 reviews.

---

## Quick Reference

- **Board Quick View:** [`_index.md`](_index.md)
- **Board (MoSCOW Tasks):** [`kanban-board.md`](kanban-board.md)
- **Board (Epic Structure):** [`kanban-structure.md`](kanban-structure.md)
- **Board (FR/BR/UXR Prioritization):** [`fr-br-uxr-board.md`](fr-br-uxr-board.md)
- **Kanban Policy:** `docs/project-management/rituals/policy/kanban-governance-policy.md`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`

---

## Board Structure

The board is organized into five separate documents:

1. **MoSCOW Prioritized Tasks** (`kanban-board.md`) - Shows all active tasks organized by priority (M/S/C/O/W)
2. **Epic/Story/Task Structure** (`kanban-structure.md`) - Shows all epics with their status, priority, stories, and links
3. **FR/BR/UXR Prioritization** (`fr-br-uxr-board.md`) - Shows all open FRs, BRs, and UXRs organized by priority
4. **FR/BR/UXR Structure** (`fr-br-uxr-structure.md`) - Shows complete listings of all FRs, BRs, and UXRs by type
5. **Rules and Explanations** (`kanban-board-guide.md`) - This document with how-to content and policies

The board serves as the parent document to Story documents, providing a comprehensive view of all work items in the project.

---

## FR/BR/UXR Prioritization Board

The **FR/BR/UXR Prioritization Board** (`fr-br-uxr-board.md`) provides centralized visibility and prioritization for all open Feature Requests, Bug Reports, and User Experience Research items.

### Board Sections

- **Critical Priority** - Urgent items requiring immediate attention
- **High Priority** - Important items for near-term work  
- **Medium Priority** - Standard priority items
- **Low Priority** - Nice-to-have items
- **Under Review** - Items being evaluated or worked on
- **Awaiting Information** - Items blocked by missing information

### Usage

- **For Stakeholders** - Review priorities and provide input on FR/BR/UXR documents
- **For Developers** - Pick highest priority items and convert to tasks when appropriate
- **For Product Management** - Adjust priorities and plan based on board content

### Integration

- Links to individual FR/BR/UXR documents in `/fr-br/` directory
- Cross-references to associated Kanban tasks when created
- Completed items move to `fr-br-uxr-completed.md`

---

## Notes

- The MoSCOW board is optimized for quick scanning - structured information only
- For Epic/Story/Task structure, see kanban-structure.md
- For rules, explanations, and how-to content, see this guide document
- The board is updated by UKW (Update Kanban Workflow) and RW (Release Workflow)
- Board views are synchronized with Epic/Story/Task documents

**Install logs and remediation:** For debugging Kanban installation or migration issues, see per-run logs under `logs/ai-dev-kit/install/` (when install logging is enabled). Logs include phase markers such as `[KANBAN_FRESH_INSTALL]` and validation output. If a consumer project’s board appears to be contaminated with `ai-dev-kit`’s own backlog (e.g. `AI Dev Kit – Kanban Board` title or dev-kit epics like Epic 24), run the Kanban contamination detector and remediation tooling in that project’s repo to identify and archive/delete dev-kit artefacts before continuing.
