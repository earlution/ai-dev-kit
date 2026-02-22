# Changelog: v0.6.7.103+4

**Release Date:** 2026-02-22 16:19:40 UTC  
**Epic:** Epic 6 (Framework Management and Maintenance)  
**Story:** Story 7 (ADK Implementation Analysis and Package Management)  
**Task:** Task 103 (Release Workflow Maintenance - Perpetual Task)  
**Build:** 4

---

## Summary

E6:S07:T103: UKW comprehensive-by-default behaviour, workflow documentation updates, kanban sync.

---

## Changes

### UKW Behaviour Change

- **UKW without flags = comprehensive run** – Invoking UKW with no flags now executes all operations (bookkeeping + update priorities + assign priorities)
- **Flags restrict scope** – `-u`, `-p`, `-a <target>` each limit focus to a specific sub-workflow
- Updated `.cursorrules` and `update-kanban-workflow-agent-execution.md` with new command semantics

### Kanban Sync

- Epic 6 S07 task summary synced (T101/T102/T103 build numbers)
- Checklist sorting (Story 007, Epic 6, board)

---

## Related

- **Perpetual Task:** [T103-release-workflow-maintenance-perpetual-task.md](../../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T103-release-workflow-maintenance-perpetual-task.md)
