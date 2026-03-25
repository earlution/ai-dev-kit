---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-25T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 67: Adopter Install Docs — RW Task Token (FR-060)

**Task ID:** E5:S01:T67  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-03-25  
**Last updated:** 2026-03-25 (Task filed — scaffold for adopters)  
**Version:** _TBD (abstract space v0.5.1.67+0)_  
**Code:** E5S01T67

**Repository Pattern:** Internal scaffold (no FR yet). Traceability: **FR-060** behavior.

---

## Scope

Ensure **[`INSTALL_IN_YOUR_PROJECT.md`](../../../../../../INSTALL_IN_YOUR_PROJECT.md)** and any **bootstrap / copy-paste** instructions (submodule quick start, framework README “getting started”) tell adopters that **Release Workflow** in Cursor requires an **`E…S…T…` task id in the same message** as `RW` / `RW -d` / `RW -k` (per **FR-060**). Add copy-paste examples and link to [release-workflow-agent-execution.md](../../../../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) Step 1.x.

---

## Input

- [FR-060-rw-task-argument-requirement.md](../../../fr-br/FR-060-rw-task-argument-requirement.md)
- Root [README.md](../../../../../../README.md) Workflows table (RW row).
- [validate_rw_task_complete.py](../../../../../../packages/frameworks/workflow%20mgt/scripts/validation/validate_rw_task_complete.py) (mention when Kanban integration enabled).

---

## Deliverable

- Updated **install / adopter** docs with **RW + task token** requirement and examples.
- Grep pass: no install doc implies bare **`RW`** alone is sufficient for strict projects.

---

## Acceptance Criteria

- [ ] `INSTALL_IN_YOUR_PROJECT.md` (or linked install guide) documents **mandatory task token** with at least two example forms (`RW E5S01T64`, `RW E5:S01:T64`).
- [ ] Link to RW agent execution doc (Step 1 / intent / complete validators as applicable).
- [ ] Optional: note **`rw-config.yaml`** + `use_kanban` for validator behavior.

---

## Related Work

- **E5:S01:T63** / **FR-060** — implemented strict RW token + validators in-repo.

---

_Story:_ [`Story-001-fr-repo.md`](Story-001-fr-repo.md)
