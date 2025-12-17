---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 13: Kanban Board Enhancement - MoSCoW Prioritized Task View

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** 2025-12-18 (v0.4.13.3+1 – T03 COMPLETE: Kanban board template created with MoSCoW prioritized task view)  
**Estimated Effort:** [TBD]  
**Started:** [TBD]  
**Completed:** [TBD]  
**Version:** v0.4.13.3+1  
**Code:** E4S13

---

## Task Checklist

- [x] **E4:S13:T01 – Design and implement MoSCoW prioritized task view in Kanban board** ✅ COMPLETE (v0.4.13.1+1)
  - Task: [`T01-kanban-board-moscow-prioritized-task-view.md`](T01-kanban-board-moscow-prioritized-task-view.md)
- [x] **E4:S13:T02 – Update Kanban governance policy** ✅ COMPLETE (v0.4.13.2+1)
  - Task: [`T02-update-kanban-governance-policy.md`](T02-update-kanban-governance-policy.md)
- [x] **E4:S13:T03 – Update Kanban board template** ✅ COMPLETE (v0.4.13.3+1)
  - Task: [`T03-update-kanban-board-template.md`](T03-update-kanban-board-template.md)
- [x] **E4:S13:T04 – Assess system impacts** ✅ COMPLETE (v0.4.13.4+3)
  - Task: [`T04-assess-system-impacts.md`](T04-assess-system-impacts.md)
- [ ] **E4:S13:T05 – Update Kanban package** - TODO (v0.4.13.0+0)
  - Task: [`T05-update-kanban-package.md`](T05-update-kanban-package.md)
- [ ] **E4:S13:T06 – Update other affected packages** - TODO (v0.4.13.0+0)
  - Task: [`T06-update-other-affected-packages.md`](T06-update-other-affected-packages.md)

> **Format:** `E4:S13:Txx` (Epic 4, Story 13, Task with 2-digit zero padding)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.13.1+1)`)

---

## Overview

Enhance the Kanban board to be more useful by:
1. Serving as the parent document to Story docs (like how Story docs are parents of Task docs)
2. Adding MoSCoW prioritized sections of all in-progress tasks before the story checklist
3. Ordering tasks within each MoSCoW section chronologically (most recently updated at top)
4. Updating Kanban policy doc and Kanban board template
5. Assessing impact on other systems that interact with Kanban
6. After user verification, updating the Kanban package and affected packages

---

## Goals

- [ ] Enhance Kanban board structure to serve as parent doc to Story docs
- [ ] Implement MoSCoW prioritized task view (Must Have, Should Have, Could Have, Won't Have)
- [ ] Implement chronological ordering within MoSCoW sections (most recently updated first)
- [ ] Update Kanban governance policy to reflect new board structure
- [ ] Update Kanban board template in framework package
- [ ] Assess and document impact on other systems (RW, validators, etc.)
- [ ] Update Kanban package and affected packages after user verification

---

## Tasks

### E4:S13:T01 – Design and implement MoSCoW prioritized task view in Kanban board

**Input:** Current Kanban board structure, Kanban governance policy, user requirements  
**Deliverable:** Enhanced Kanban board with MoSCoW prioritized task view, updated policy and template, impact assessment document  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe (documentation and structure changes)

**Status:** TODO (v0.4.13.0+0)

**Task Document:** [`T01-kanban-board-moscow-prioritized-task-view.md`](T01-kanban-board-moscow-prioritized-task-view.md)

**Approach:**
1. Analyze current Kanban board structure (`kanban-board.md`)
2. Design new structure with MoSCoW sections before story checklist
3. Implement chronological ordering logic (most recently updated at top)
4. Update Kanban board document with new structure

---

### E4:S13:T02 – Update Kanban governance policy

**Input:** Enhanced Kanban board structure (T01), current Kanban governance policy  
**Deliverable:** Updated Kanban governance policy documents (canonical and local)  
**Dependencies:** T01  
**Blocker:** None  
**Parallel Development Candidacy:** Blocked (depends on T01)

**Status:** TODO (v0.4.13.0+0)

**Task Document:** [`T02-update-kanban-governance-policy.md`](T02-update-kanban-governance-policy.md)

**Approach:**
1. Review enhanced board structure from T01
2. Update canonical Kanban governance policy
3. Update local Kanban governance policy
4. Document MoSCoW priority levels and chronological ordering rules

---

### E4:S13:T03 – Update Kanban board template

**Input:** Enhanced Kanban board structure (T01), updated Kanban governance policy (T02)  
**Deliverable:** Updated Kanban board template in framework package  
**Dependencies:** T01, T02  
**Blocker:** None  
**Parallel Development Candidacy:** Blocked (depends on T01 and T02)

**Status:** TODO (v0.4.13.0+0)

**Task Document:** [`T03-update-kanban-board-template.md`](T03-update-kanban-board-template.md)

**Approach:**
1. Locate or create Kanban board template in framework package
2. Update template to include MoSCoW section structure
3. Include example format and usage instructions
4. Reference updated Kanban governance policy

---

### E4:S13:T04 – Assess system impacts

**Input:** Enhanced Kanban board structure (T01)  
**Deliverable:** System impact assessment document, RW doc-init detection bug fix  
**Dependencies:** T01  
**Blocker:** None  
**Parallel Development Candidacy:** Blocked (depends on T01)

**Status:** ✅ COMPLETE (v0.4.13.4+2)

**Task Document:** [`T04-assess-system-impacts.md`](T04-assess-system-impacts.md)

**Approach:**
1. Identify all systems that interact with Kanban
2. Analyze impact for each system (RW, validators, installers, etc.)
3. Document required updates for each affected system
4. Create impact assessment document
5. **NEW:** Identified and fixed RW doc-init detection bug (story + task docs created together scenario)

---

### E4:S13:T05 – Update Kanban package

**Input:** All previous task deliverables, user verification  
**Deliverable:** Updated Kanban package with new board structure  
**Dependencies:** T01, T02, T03, T04, **User verification**  
**Blocker:** None  
**Parallel Development Candidacy:** Blocked (depends on all previous tasks and user verification)

**Status:** TODO (v0.4.13.0+0)

**Task Document:** [`T05-update-kanban-package.md`](T05-update-kanban-package.md)

**Approach:**
1. Verify user verification obtained
2. Update Kanban board template in package (from T03)
3. Update Kanban governance policy in package (from T02)
4. Update package documentation
5. Verify package consistency

---

### E4:S13:T06 – Update other affected packages

**Input:** System impact assessment (T04), user verification  
**Deliverable:** Updated affected packages (RW, validators, installers, etc.)  
**Dependencies:** T01, T02, T03, T04, T05, **User verification**  
**Blocker:** None  
**Parallel Development Candidacy:** Blocked (depends on all previous tasks and user verification)

**Status:** TODO (v0.4.13.0+0)

**Task Document:** [`T06-update-other-affected-packages.md`](T06-update-other-affected-packages.md)

**Approach:**
1. Review system impact assessment from T04
2. Update each affected package according to impact assessment
3. Update package documentation if needed
4. Verify all required updates are complete

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

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.13.1+1)`)

**When Story is Complete:**
- Add forensic marker to Story document
- Add forensic marker to Epic checklist
- Update version file with story completion
- Update changelog with story completion

---

## Notes

This enhancement makes the Kanban board more functional and useful by:
- Providing a clear parent-child relationship (Board → Story → Task)
- Enabling quick prioritization view of in-progress work
- Supporting chronological task ordering for better workflow visibility

The implementation must:
- Maintain backward compatibility where possible
- Document all system impacts
- Wait for user verification before updating framework packages

---

## Completion Summary

[To be filled when story is complete]

---

## References

- `docs/project-management/kanban/kanban-board.md` - Current board structure
- `packages/frameworks/kanban/policies/kanban-governance-policy.md` - Canonical policy
- `docs/project-management/rituals/policy/kanban-governance-policy.md` - Local policy
- `packages/frameworks/kanban/templates/` - Framework templates

