---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 45: ADR-002 Task-Touch Derived Mapping (Kanban → SemVer)

**Task ID:** E5:S01:T45  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-02-26  
**Last updated:** 2026-02-26 (v0.5.1.45+1 – First FR-045 documentation build)  
**Version:** v0.5.1.45+1  
**Code:** E5S01T45

**Repository Pattern:** FR-045 = E5:S01:T45 (first build: v0.5.1.45+1)

---

## Scope

Repository anchor task for **FR-045: ADR-002 Task-Touch Derived Mapping (Kanban → SemVer)**.

This task:

- Anchors FR-045 in the FR repository story (`E5:S01`).
- Describes the requirement to implement the Task-Touch Derived Mapping strategy (ADR-002) in the Numbering & Versioning framework and Release Workflow.
- Defers actual implementation changes (converter, registry, RW integration) to dedicated implementation tasks under the appropriate versioning framework epic/story.

---

## Input

- **FR-045:** [`FR-045-adr-002-task-touch-derived-mapping.md`](../../../fr-br/FR-045-adr-002-task-touch-derived-mapping.md)
- **Versioning Policy & Strategy:** Numbering & Versioning framework docs.

---

## Deliverable

1. This task document as the canonical repository anchor for FR-045 (`E5:S01:T45`).
2. FR-045 linked from the FR repository story checklist and from this task.
3. A clear description of the Task-Touch Derived Mapping concept sufficient for implementation tasks to:
   - Implement `task_touch` SemVer mapping.
   - Integrate it with RW/PVW.

---

## Acceptance Criteria

- [ ] Task document exists and is linked from the FR Repo story checklist as **E5:S01:T45**.
- [ ] FR-045 is created and explicitly assigned to E5:S01:T45.
- [ ] The Task-Touch Derived Mapping behaviour is described clearly enough here and in FR-045 to support separate implementation tasks.

---

## Version Anchor

- **First Build:** v0.5.1.45+1 (this release) anchors FR-045 to E5:S01:T45 with documentation-only changes.
- Subsequent functional work for ADR-002 should use `BUILD > 1` (e.g. `v0.5.1.45+2`, `+3`, …).

---

## Related Work

- **FR-045:** ADR-002 Task-Touch Derived Mapping (Kanban → SemVer).
- Dual-versioning docs in Numbering & Versioning framework.

---

## References

- **FR Repo Story:** [`Story-001-fr-repo.md`](Story-001-fr-repo.md)
- **FR-045:** [`docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md`](../../../fr-br/FR-045-adr-002-task-touch-derived-mapping.md)

---

