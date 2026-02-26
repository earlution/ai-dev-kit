---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: ADR-002 – Task-Touch Derived Mapping (Kanban → SemVer)

**Type:** Feature Request (FR)  
**Submitted:** 2026-02-26  
**Submitted By:** XOforge (contributing to AI Dev Kit)  
**Priority:** HIGH  
**Status:** PENDING  
**GitHub Issue:** [#18](https://github.com/earlution/ai-dev-kit/issues/18)

---

## Summary

Define and implement **ADR-002: Task-Touch Derived Mapping** that derives Semantic Versioning (SemVer) from the internal `RC.EPIC.STORY.TASK+BUILD` version using a **global task-touch counter**, providing a **strictly incrementing, 1:1 traceable SemVer** sequence suitable for package managers.

---

## Description

### What functionality is desired?

A new dual-versioning strategy where:

- **MAJOR** = `RC` (release candidate).
- **MINOR** = number of epics signed off (per RC).
- **PATCH** = **task-touch counter**: increments whenever a task is “touched” by a release (new task or return to an existing task).
- Optional **`+BUILD`** metadata mirrors the internal BUILD component for traceability.

This is the **Task-Touch Derived Mapping** described in ADR-002 and should be available as a first-class mapping mode in the Numbering & Versioning framework and Release Workflow.

### What problem does this solve?

Existing mapping strategies either:

- Produce **non-monotonic** SemVer sequences when work jumps between epics/stories (confusing for npm/PyPI and release ordering), or
- Require **independent SemVer** detached from Kanban, sacrificing direct traceability.

Task-touch mapping delivers:

- Strictly increasing SemVer (`PATCH` always increases).
- A deterministic, 1:1 mapping between internal version and external SemVer.
- A clear mental model: **“each task touch → one PATCH bump”**.

### What is the use case?

- Frameworks and adopter projects (like XOforge) using AI Dev Kit’s dual-versioning want:
  - Kanban-aligned internal versions for forensic traceability.
  - Package-manager-friendly SemVer for public distribution (npm, pub.dev, PyPI, etc.) that **never goes backwards**.
  - Automatic mapping, not manual SemVer decisions per release.

### Who would benefit from this feature?

- AI Dev Kit itself (canonical SemVer story for frameworks).
- Any consumer project that:
  - Uses the `RC.EPIC.STORY.TASK+BUILD` schema internally.
  - Publishes packages to SemVer-enforcing registries.

---

## Requirements

### Functional Requirements

- [ ] **FR-045:R01** – Implement a `task_touch` SemVer mapping mode in the Numbering & Versioning framework:
  - MAJOR = RC.
  - MINOR = count of epics signed off (per RC).
  - PATCH = global task-touch counter.
  - Optional `+BUILD` = internal BUILD for the current version.
- [ ] **FR-045:R02** – Persist task-touch counter in a canonical location (e.g. version file and/or `semver-registry.yaml`) and ensure it increments exactly once per RW release.
- [ ] **FR-045:R03** – Provide a converter function (e.g. `get_semver_task_touch(...)`) that returns SemVer (with or without `+BUILD`) from an internal version string.
- [ ] **FR-045:R04** – Document the mapping in dual-versioning docs (Numbering & Versioning framework) and ADR-002.
- [ ] **FR-045:R05** – Expose mapping mode via configuration (e.g. `semver_mapping_strategy: task_touch` in `rw-config.yaml`).

### Non-Functional Requirements

- [ ] **FR-045:NF01** – **Monotonicity:** SemVer must be strictly incrementing (no backwards PATCH values).
- [ ] **FR-045:NF02** – **Traceability:** Mapping must be 1:1 between internal and SemVer values.
- [ ] **FR-045:NF03** – **Compatibility:** Mapping must be compatible with SemVer expectations in package managers.

---

## Scope Analysis

**Problem Domain:** Numbering & Versioning Framework, Dual-Versioning for Package Managers  
**Affected Areas:**

- [x] Documentation
- [x] Testing
- [x] Versioning utilities / converters
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Other:

**Estimated Complexity:**

- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Use Cases

### Primary Use Case

1. Internal version advances across multiple epics/stories/tasks (e.g. `0.7.3.25+4`, `0.3.2.12+2`, `0.7.3.25+6`).
2. Each Release Workflow run increments the **task-touch counter** and derives SemVer:
   - `0.7.3.25+4` → `0.1.84+4`
   - `0.3.2.12+2` → `0.1.85+2`
   - `0.7.3.25+6` → `0.1.86+2`
3. SemVer sequences are strictly increasing and consistent across all epics/stories.
4. Package managers see a clean SemVer stream, while internal versions still encode Kanban E/S/T/BUILD.

### Additional Use Cases

- XOforge and other adopters configure `semver_mapping_strategy: task_touch` to:
  - Get monotonic SemVer tags.
  - Keep internal versions Kanban-aligned.

---

## Acceptance Criteria

- [ ] **AC1:** `task_touch` mapping is implemented and configurable for projects via `rw-config.yaml`.
- [ ] **AC2:** Converters (`get_semver_task_touch(...)`) are available and tested, producing strictly increasing SemVer for real-world sequences.
- [ ] **AC3:** `semver-registry.yaml` (or equivalent) supports task-touch metadata as needed.
- [ ] **AC4:** Dual-versioning documentation is updated with Task-Touch Derived Mapping (ADR-002), including worked examples.
- [ ] **AC5:** At least one adopter project (e.g. XOforge) can switch to `task_touch` SemVer mapping without breaking CW/RW or package publishing.

---

## Dependencies

**Blocks:**

- Clean RW support for SemVer tagging in `task_touch` mode (FR-046).
- Package Version Workflow (PVW) alignment when using SemVer derived from task-touch mapping.

**Blocked By:**

- None (this FR defines ADR-002 itself).

**Related Work:**

- ADR-002: Task-Touch Derived Mapping — Kanban to SemVer (GitHub issue #18).
- Dual-versioning docs in the Numbering & Versioning framework.

---

## Intake Decision

**Intake Status:** PENDING  
**Intake Date:** 2026-02-26  
**Intake By:** [TBD]

**Decision Flow Results:**

- [ ] Story Match Found: [Epic 3, Story Y] → Task [T]
- [ ] New Story Created: [Epic 3, Story Y] → Task 1
- [ ] New Epic Created: [Epic X, Story 1, Task 1]

**Assigned To:**

- Epic: [TBD – likely Numbering & Versioning Framework epic]
- Story: [TBD – SemVer mapping/dual-versioning story]
- Task: [TBD]
- Version: `[RC.EPIC.STORY.TASK+BUILD]`

**Kanban Links:**

- Epic: [`docs/project-management/kanban/epics/Epic-5/Epic-5.md`](../epics/Epic-5/Epic-5.md)
- Story: [`docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo.md`](../epics/Epic-5/Story-001-fr-repo.md)
- Task: _TBD (implementation task once created)_

---

## Notes

- This FR is the canonical repository anchor for ADR-002. Implementation tasks under the Numbering & Versioning epic/story should reference this FR.

---

## References

- GitHub Issue [#18](https://github.com/earlution/ai-dev-kit/issues/18).
- Dev Kit Versioning Policy and dual-versioning docs (Numbering & Versioning framework).

---

_This feature request follows the Kanban Framework FR template and is anchored as FR-045 in the FR repository story (E5:S01:T45)._

