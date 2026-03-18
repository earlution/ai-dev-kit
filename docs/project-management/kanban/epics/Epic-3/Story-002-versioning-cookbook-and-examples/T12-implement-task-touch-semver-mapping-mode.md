---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# T12 – Implement ADR-002 Task-Touch SemVer Mapping Mode

**Task ID:** E3:S02:T12  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-03-07  
**Last updated:** 2026-03-07  

---

## Scope

Implement **ADR-002 / task-touch derived SemVer mapping** so external-facing SemVer is **strictly monotonic and 1:1** with internal `RC.EPIC.STORY.TASK+BUILD` releases.

This task is prompted by a real SemVer tag collision incident (see incident log), demonstrating that the current registry epic/story mapping mode cannot guarantee unique SemVer across tasks within the same Epic/Story.

---

## Inputs

- FR-045: `docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md`
- FR repo anchor task: `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T45-adr-002-task-touch-derived-mapping.md`
- Incident log: `docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md`
- Existing converter (Mode A): `packages/frameworks/workflow mgt/scripts/version/semver_converter.py`
- Existing registry: `semver-registry.yaml`
- Existing config: `rw-config.yaml`

---

## Deliverable

- A new mapping mode selectable via configuration (e.g. `semver_mapping_strategy: task_touch` or equivalent) that:
  - **MAJOR = RC**
  - **MINOR = count of epics signed off (per RC)** (as per ADR-002)
  - **PATCH = global task-touch counter** (increments once per RW release when a task is touched)
  - Optional `+BUILD` mirroring internal BUILD for traceability

- Canonical storage for task-touch counter and mapping history (file-based, version controlled)
- Converter implementation and tests demonstrating:
  - Strictly monotonic external SemVer
  - No collisions across tasks or perpetual tasks
  - Deterministic mapping for a given repository history


---

## Acceptance Criteria

- [ ] Task-touch SemVer mapping mode is implemented and documented.
- [ ] Mapping is configurable via `rw-config.yaml` (or documented equivalent).
- [ ] Mapping is monotonic and collision-free for real dev-kit sequences (including perpetual tasks).
- [ ] Converter tests include scenarios that previously collide under registry epic/story mapping.
- [ ] Backfill/migration guidance exists for initializing counters from existing tag history.

---

## Related Work

- FR-046 (RW uses SemVer tag when task_touch enabled)
- `docs/architecture/standards-and-adrs/semver-implementation-followup-spec.md`
