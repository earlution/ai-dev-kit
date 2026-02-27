---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 1, Task 37: Kanban Install Delivers Mixed Dev Kit Backlog and Templates into Consumer Boards

**Task ID:** E6:S01:T37  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-02-26  
**Last updated:** 2026-02-26 (v0.6.1.37+1 – First BR-037 documentation build)  
**Version:** v0.6.1.37+1  
**Code:** E6S01T37

**Repository Pattern:** BR-037 = E6:S01:T37 (first build: v0.6.1.37+1)

---

## Scope

Repository anchor task for **BR-037: Kanban Install Delivers Mixed Dev Kit Backlog and Templates into Consumer Boards**.

This task records the requirement that **Kanban installation for consumer projects must not ship AI Dev Kit’s own live backlog** (board title, epics, stories, tasks, FR/BR wiring) and must instead provide a clean, project-agnostic Kanban starting point (with any dev-kit examples clearly segregated and labelled as reference).

At this level, the task:

- Links BR-037 into the BR repository story (E6:S01).
- Captures the problem statement and intended direction of fixes.
- Defers concrete implementation work to one or more tasks under the appropriate Kanban framework epic/story (e.g., Epic 4 – Kanban Framework).

---

## Input

- **BR-037:** [`BR-037-kanban-install-consumer-board-contamination.md`](../../../fr-br/BR-037-kanban-install-consumer-board-contamination.md)
- **Related BRs:**
  - `BR-004-kanban-installation-includes-project-specific-epics.md`
  - `BR-007-multiple-bugs-kanban-package-installation.md`
- **Kanban Governance and Templates:**
  - `packages/frameworks/kanban/policies/kanban-governance-policy.md`
  - Kanban templates under `packages/frameworks/kanban/templates/`

---

## Deliverable

1. **This task document** as the canonical BR repository anchor for BR-037 (E6:S01:T37).
2. BR-037 linked from:
   - The BR repository story checklist (E6:S01).
   - Any future implementation task(s) under the Kanban framework epic/story that will change installer behaviour and templates.
3. A clear description (here and in BR-037) of:
   - The contamination problem (mixed AI Dev Kit backlog + templates in consumer boards).
   - The expectation that future implementation work will:
     - Split canonical templates from dev-kit-specific backlog.
     - Adjust installer/scaffolding logic accordingly.

---

## Acceptance Criteria

- [ ] Task document exists and is linked from the BR Repo story checklist as **E6:S01:T37**.
- [ ] BR-037 is created and explicitly assigned to E6:S01:T37.
- [ ] The contamination problem is described clearly enough (here and in BR-037) to support a separate implementation task under the Kanban framework epic/story without re-consulting GitHub.

---

## Version Anchor

**Forensic Marker (planned):**

- Abstract-space build for this repository task will be `v0.6.1.37+0` once created via Release Workflow.

**Implementation Note:**

- Actual functional fixes to the installer/templates should be attributed to tasks under the relevant epic/story (likely Epic 4 – Kanban Framework), with their own versions. This repository task remains the BR anchor for `BR-037`.

---

## Related Work

- **BR-037:** Kanban Install Delivers Mixed Dev Kit Backlog and Templates into Consumer Boards.
- **BR-004:** Kanban Installation Includes Project-Specific Epics from Template.
- **BR-007:** Multiple Bugs in Kanban Package Installation Process.
- **FR-021:** FR/BR/UXR Repository Stories (S01 Pattern).

---

## References

- **BR Repo Story:** [`Story-001-br-repo.md`](Story-001-br-repo.md)
- **BR-037:** [`docs/project-management/kanban/fr-br/BR-037-kanban-install-consumer-board-contamination.md`](../../../fr-br/BR-037-kanban-install-consumer-board-contamination.md)

---

