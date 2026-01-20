---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 018 – Kanban Board Info-Only Split

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2026-01-20  
**Last updated:** 2026-01-20 (v0.4.18.1+0 – T01 created)  
**Version:** v0.4.18.1+0  
**Code:** E4S18

---

## Task Checklist

- [ ] **E4:S18:T01 – Implement Kanban Board Info-Only Split** - TODO (v0.4.18.1+0)
  - Task Doc: [`T1-implement-kanban-board-info-only-split.md`](Story-018-kanban-board-info-only-split/T1-implement-kanban-board-info-only-split.md)

---

## Overview

Split the Kanban board into two documents: structured information only (`kanban-board.md`) and rules/explanations (`kanban-board-guide.md`). This reduces cognitive load when skimming the board by removing all non-informational content.

---

## Goals

- [ ] Create `kanban-board-guide.md` with all rules, explanations, and how-to content
- [ ] Strip `kanban-board.md` to structured information only (tasks, epics, status, links)
- [ ] Add cross-references between documents
- [ ] Update templates and governance policy to reflect the split

---

## Tasks

### E4:S18:T01 – Implement Kanban Board Info-Only Split

**Input:** Current `kanban-board.md`, FR-036 requirements  
**Deliverable:** Split board documents, updated templates, updated policy  
**Approach:** Create guide doc, migrate explanatory content, strip board to info-only, update references

---

## Acceptance Criteria

- [ ] `kanban-board.md` contains ONLY structured information (no explanatory text)
- [ ] `kanban-board-guide.md` contains all rules, explanations, and how-to content
- [ ] Cross-references between documents are clear
- [ ] Templates and policy updated to reflect split

---

## Dependencies

**Related Work:**
- **FR-036:** Kanban Board Info-Only Split
- **E4:S13:** Kanban Board Enhancement - MoSCOW Prioritized Task View (board structure foundation)

---

## References

- **FR-036:** [`docs/project-management/kanban/fr-br/FR-036-kanban-board-info-only-split.md`](../../fr-br/FR-036-kanban-board-info-only-split.md)
- **Current Board:** `docs/project-management/kanban/kanban-board.md`
- **Board Template:** `packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md`
