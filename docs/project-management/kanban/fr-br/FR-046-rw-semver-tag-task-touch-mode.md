---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Release Workflow Uses SemVer Tag When `task_touch` (ADR-002) Is Enabled

**Type:** Feature Request (FR)  
**Submitted:** 2026-02-26  
**Submitted By:** XOforge (contributing to AI Dev Kit)  
**Priority:** HIGH  
**Status:** PENDING  
**GitHub Issue:** [#19](https://github.com/earlution/ai-dev-kit/issues/19)

---

## Summary

When a project uses **ADR-002 Task-Touch Derived Mapping** (SemVer from internal `RC.EPIC.STORY.TASK+BUILD` via task touches), **Release Workflow (RW) should create and use SemVer tags** (e.g. `v0.1.22`) as the primary Git tags for releases, instead of tagging with the internal version string.

---

## Description

### What functionality is desired?

- For projects configured with `semver_mapping_strategy: task_touch` (or equivalent):
  - RW should:
    - Compute SemVer for the current internal version using the **task-touch mapping**.
    - Create a Git tag named `v{semver}` (e.g. `v0.1.22`).
    - Use that SemVer tag as the primary reference for GitHub releases and package publishing.
  - Optionally, RW may:
    - Also create an internal tag `v{RC.EPIC.STORY.TASK+BUILD}` on the same commit for traceability.

### What problem does this solve?

Without this behaviour:

- Projects using task-touch mapping still get **internal-version tags** by default (e.g. `v0.5.1.44+1`), while:
  - Packages and external docs expect SemVer (e.g. `0.1.22`).
  - RW’s tags and package versions diverge, confusing automation and users.

Using SemVer tags when task_touch is enabled ensures:

- Git tags and package versions stay aligned.
- The SemVer story is consistent for both humans and tooling.

### What is the use case?

- AI Dev Kit and adopters (e.g. XOforge) using ADR-002 to derive SemVer want:
  - Tags like `v0.1.22` to match their package version.
  - Internal versions to remain visible but secondary.

### Who would benefit from this feature?

- Projects publishing packages to registries.
- Any workflow that:
  - Uses RW.
  - Has configured `semver_mapping_strategy: task_touch`.

---

## Requirements

### Functional Requirements

- [ ] **FR-046:R01** – RW Step 11 detects when `task_touch` SemVer mapping is enabled (e.g. via `rw-config.yaml`).
- [ ] **FR-046:R02** – When enabled, RW Step 11:
  - Calls the task-touch SemVer converter (e.g. `get_semver_task_touch(include_build=False)`).
  - Creates a Git tag `v{semver}` (e.g. `v0.1.22`) pointing to the release commit.
- [ ] **FR-046:R03** – RW Step 11 may create an internal tag `v{RC.EPIC.STORY.TASK+BUILD}` on the same commit for traceability, but SemVer is the **primary external tag**.
- [ ] **FR-046:R04** – `create_github_release.py` (or equivalent tooling) uses the SemVer tag as the primary release name and includes the internal version in the body/metadata.
- [ ] **FR-046:R05** – Documentation (RW execution guide, `.cursorrules` RW trigger section) is updated to reflect this behaviour when `task_touch` is configured.

### Non-Functional Requirements

- [ ] **FR-046:NF01** – **Compatibility:** Default RW behaviour (internal tags) is preserved when `task_touch` is **not** enabled.
- [ ] **FR-046:NF02** – **Traceability:** Internal version remains discoverable from the SemVer tag (e.g. included in release notes, optional internal tag).

---

## Scope Analysis

**Problem Domain:** Workflow Management Framework, Release Workflow, Tagging Strategy  
**Affected Areas:**

- [x] Documentation
- [x] Testing
- [x] RW implementation (tag creation, release script integration)
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

1. Project configures `semver_mapping_strategy: task_touch` in `rw-config.yaml`.
2. Release Workflow runs and:
   - Bumps internal version (e.g. `0.5.1.44+1`).
   - Derives SemVer via task-touch mapping (e.g. `0.1.22`).
   - Creates tag `v0.1.22`.
   - Optionally also creates `v0.5.1.44+1` on the same commit.
3. `create_github_release.py` uses `v0.1.22` as the release tag:
   - Release name: `v0.1.22`.
   - Body mentions internal version: `Internal: v0.5.1.44+1`.

### Additional Use Cases

- XOforge publishes a package version `0.1.22` that matches both:
  - `package.json` version.
  - Git tag `v0.1.22`.

---

## Acceptance Criteria

- [ ] **AC1:** When `task_touch` SemVer mapping is configured, RW Step 11 creates SemVer tags (`vX.Y.Z`) instead of internal version tags by default.
- [ ] **AC2:** Tag creation is tested for:
  - `task_touch` enabled.
  - `task_touch` disabled (fallback to existing behaviour).
- [ ] **AC3:** GitHub releases and package versions align on SemVer when `task_touch` is enabled.
- [ ] **AC4:** Documentation clearly explains the change and how to configure it.

---

## Dependencies

**Blocks:**

- Seamless task_touch SemVer experience for RW users.

**Blocked By:**

- FR-045 (ADR-002 Task-Touch Derived Mapping) implementation and availability of `get_semver_task_touch(...)`.

**Related Work:**

- ADR-002: Task-Touch Derived Mapping — Kanban to SemVer (GitHub issue #18).
- Release Workflow execution guide and `.cursorrules` RW trigger section.

---

## Intake Decision

**Intake Status:** PENDING  
**Intake Date:** 2026-02-26  
**Intake By:** [TBD]

**Decision Flow Results:**

- [ ] Story Match Found: [Epic 2, Story Y] → Task [T]
- [ ] New Story Created: [Epic 2, Story Y] → Task 1
- [ ] New Epic Created: [Epic X, Story 1, Task 1]

**Assigned To:**

- Epic: [TBD – likely Workflow Management Framework epic]
- Story: [TBD – RW tagging/CI integration story]
- Task: [TBD]
- Version: `[RC.EPIC.STORY.TASK+BUILD]`

**Kanban Links:**

- Epic: [`docs/project-management/kanban/epics/Epic-5/Epic-5.md`](../epics/Epic-5/Epic-5.md)
- Story: [`docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo.md`](../epics/Epic-5/Story-001-fr-repo.md)
- Task: _TBD (implementation task once created)_

---

## Notes

- This FR assumes ADR-002 (FR-045) is implemented and available. It focuses specifically on **RW behaviour** when that mapping is active.

---

## References

- GitHub Issue [#19](https://github.com/earlution/ai-dev-kit/issues/19).
- RW execution documentation and `.cursorrules` RW trigger section.

---

_This feature request follows the Kanban Framework FR template and is anchored as FR-046 in the FR repository story (E5:S01:T46)._

