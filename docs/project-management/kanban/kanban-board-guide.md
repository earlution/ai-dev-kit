---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board Guide

**Last Updated:** 2026-01-20  
**Version:** v0.4.18.1+1

> **For structured information only, see:** [`kanban-board.md`](kanban-board.md)

---

## Overview

This guide explains how to use and understand the Kanban board. The board tracks all work on the `ai-dev-kit` repository and the **Head First AI-Assisted Development** book project.

**Structure:** All Kanban documentation lives under `docs/project-management/kanban/`:
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

See [`README.md`](README.md) for full structure details and `docs/project-management/rituals/policy/kanban-governance-policy.md` for governance.

---

## Quick Reference

- **Board Quick View:** [`_index.md`](_index.md)
- **Board (Structured Info):** [`kanban-board.md`](kanban-board.md)
- **Kanban Policy:** `docs/project-management/rituals/policy/kanban-governance-policy.md`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`

---

## Board Structure

The board is organized into two main sections:

1. **MoSCOW Prioritized In-Progress Tasks** - Shows all active tasks organized by priority (M/S/C/O/W)
2. **Epics** - Shows all epics with their status, priority, stories, and links

The board serves as the parent document to Story documents, providing a comprehensive view of all work items in the project.

---

## Notes

- The board is optimized for quick scanning - structured information only
- For rules, explanations, and how-to content, see this guide document
- The board is updated by UKW (Update Kanban Workflow) and RW (Release Workflow)
- Board views are synchronized with Epic/Story/Task documents

**Install logs and remediation:** For debugging Kanban installation or migration issues, see per-run logs under `logs/ai-dev-kit/install/` (when install logging is enabled). Logs include phase markers such as `[KANBAN_FRESH_INSTALL]` and validation output. If a consumer project’s board appears to be contaminated with `ai-dev-kit`’s own backlog (e.g. `AI Dev Kit – Kanban Board` title or dev-kit epics like Epic 24), run the Kanban contamination detector and remediation tooling in that project’s repo to identify and archive/delete dev-kit artefacts before continuing.
