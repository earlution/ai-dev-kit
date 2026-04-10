---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 46: Release Workflow Uses SemVer Tag When task_touch Enabled

**Task ID:** E5:S01:T46  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-02-26  
**Last updated:** 2026-03-31 (v0.5.1.46+3 – FR-046 **Implementing Task** wiring; intake traceability)  
**Version:** v0.5.1.46+3  
**Code:** E5S01T46

**Repository Pattern:** FR-046 = E5:S01:T46 (first build: v0.5.1.46+1)

---

## Scope

Repository anchor task for **FR-046: Release Workflow Uses SemVer Tag When task_touch (ADR-002) Is Enabled**.

This task:

- Anchors FR-046 in the FR repository story (`E5:S01`).
- Describes the requirement that RW Step 11 (and related tooling) use SemVer tags when `semver_mapping_strategy: task_touch` is configured.
- Defers actual implementation to dedicated tasks under the Workflow Management Framework epic/story.
- Accepts cross-task updates from `E3:S02:T12` planning/implementation work when SemVer collision hardening changes the precise RW semantics.

## Cross-task interaction (E3:S02:T12)

- `E3:S02:T12` is authorized to update this task's wording/acceptance criteria so FR-046 documentation stays aligned with implemented task-touch converter behavior and BR-061 fixes.
- Current planning artifact: [IPW-E3S02T12-task-touch-semver-collision-hardening](../../../../../implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md)

---

## Input

- **FR-046:** [`FR-046-rw-semver-tag-task-touch-mode.md`](../../../fr-br/FR-046-rw-semver-tag-task-touch-mode.md)
- **FR-045:** ADR-002 Task-Touch Derived Mapping (prerequisite).
- RW execution guide and `.cursorrules` RW trigger section.

---

## Deliverable

1. This task document as the canonical repository anchor for FR-046 (`E5:S01:T46`).
2. FR-046 linked from the FR repository story checklist and from this task.
3. A clear description of the desired RW tagging behaviour when task_touch is enabled, sufficient for implementation tasks.

---

## Acceptance Criteria

- [x] Task document exists and is linked from the FR Repo story checklist as **E5:S01:T46**.
- [x] FR-046 includes **Implementing Task:** E5:S01:T46 (bidirectional intake wiring).
- [ ] The RW SemVer-tag behaviour is described clearly enough here and in FR-046 to support separate implementation tasks.

---

## Version Anchor

- **First Build:** v0.5.1.46+1 (this release) anchors FR-046 to E5:S01:T46 with documentation-only changes.
- Subsequent functional work for FR-046 should use `BUILD > 1` (e.g. `v0.5.1.46+2`, `+3`, …).

---

## Related Work

- **FR-046:** Release Workflow Uses SemVer Tag When task_touch Enabled.
- **FR-045:** ADR-002 Task-Touch Derived Mapping (Kanban → SemVer).

---

## References

- **FR Repo Story:** [`Story-001-fr-repo.md`](../Story-001-fr-repo.md)
- **FR-046:** [`docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md`](../../../fr-br/FR-046-rw-semver-tag-task-touch-mode.md)
