---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7, Story 6: Post-Windsurf Project Review

**Status:** IN PROGRESS
**Priority:** HIGH  
**Last updated:** 2026-03-18 (v0.7.6.12+2 – Kanban documentation setup)
**Estimated Effort:** [TBD]  
**Actual Effort:** [TBD]  
**Started:** [TBD]  
**Completed:** [TBD]  
**Version:** v0.7.6.12+2
**Code:** E7S06

---

## Task Checklist

- [ ] **E7:S06:T10 – Review RW workflow (Windsurf impact)** - TODO (Can run in parallel)
- [ ] **E7:S06:T11 – Review UKW workflow (Windsurf impact)** - TODO (Can run in parallel)
- [ ] **E7:S06:T12 – Review CMW workflow (Windsurf impact)** - TODO (Can run in parallel)
- [ ] **E7:S06:T13 – Review PVW workflow (Windsurf impact)** - TODO (Can run in parallel)
- [ ] **E7:S06:T14 – Review ICW workflow (Windsurf impact)** - TODO (Can run in parallel)
- [ ] **E7:S06:T15 – Review Intake workflow (Windsurf impact)** - TODO (Can run in parallel)
- [ ] **E7:S06:T16 – Review PIR workflow (Windsurf impact)** - TODO (Can run in parallel)
- [ ] **E7:S06:T01 – Windsurf artifact cleanup** - TODO (Blocked until T10–T16 complete; then remove `.windsurf/`, migrate skills)
- [ ] **E7:S06:T02 – Version and changelog alignment** - TODO (Reconcile version.py, kanban board, CHANGELOG, branch context)
- [ ] **E7:S06:T03 – Kanban documentation consistency** - TODO (E9↔E18 renumbering fallout, cross-references, structure)
- [ ] **E7:S06:T04 – Recent commit review** - TODO (Last ~15 commits: RW compliance, batch scope, quality)
- [ ] **E7:S06:T05 – Workflow script integrity** - TODO (ukw_syntax_parser, task_inference, orchestrator changes)
- [ ] **E7:S06:T06 – FR/BR/UXR intake documentation quality** - TODO (Batch intake doc updates consistency)
- [ ] **E7:S06:T07 – General documentation and cross-reference integrity** - TODO (README, links, structure)
- [ ] **E7:S06:T08 – Dependency and tooling audit** - TODO (pyproject.toml, requirements, tests, CI/CD, build scripts)
- [ ] **E7:S06:T09 – Config and git state validation** - TODO (rw-config vs paths, git state, .cursorrules alignment)

> **Format:** `Exx:Sxx:Txx` (Epic, Story, Task with 2-digit zero padding)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`  
> **Release Workflow Requirement:** When RW Step 7 updates this Epic, it MUST update ALL sections (Epic header, Story Checklist, detailed sections, this Story file).

---

## Overview

Systematic review of project state after the Windsurf evaluation period. Decomposes review by dimension (artifacts, versioning, kanban, commits, scripts, docs) into discrete tasks to assess and remediate any degradation left by Windsurf's AI models.

---

## Goals

- [ ] Remove Windsurf artifacts and restore Cursor-native state
- [ ] Align version, changelog, and kanban to a single coherent state
- [ ] Validate kanban documentation after E9↔E18 renumbering
- [ ] Review recent commits for RW compliance and quality
- [ ] Verify workflow script changes are correct and coherent
- [ ] Audit FR/BR/UXR intake documentation consistency
- [ ] Ensure general documentation and cross-references are intact
- [ ] Audit dependencies, tests, CI/CD, and build scripts
- [ ] Validate config drift and git state

---

## Tasks

### E7:S06:T10–T16 – Workflow Windsurf impact reviews (parallel)

Seven review tasks, one per workflow: RW, UKW, CMW, PVW, ICW, Intake, PIR. Each produces: Windsurf impact assessment; .windsurf skill mappings; migration plan for T01. **Can run in parallel.** See individual task docs in `Story-006-post-windsurf-project-review/`.

---

### E7:S06:T01 – Windsurf artifact cleanup

**Input:** Repo filesystem; review outputs from T10–T16  
**Deliverable:** `.windsurf/` removed (or moved to .gitignore if needed); skills migrated to `.cursor/skills/`; no Windsurf-specific references in tracked files  
**Dependencies:** T10, T11, T12, T13, T14, T15, T16  
**Blocker:** T01 blocked until T10–T16 complete

---

### E7:S06:T02 – Version and changelog alignment

**Input:** version.py, kanban-board.md, CHANGELOG.md, branch context  
**Deliverable:** Single coherent version; CHANGELOG and kanban board match; branch aligned  
**Dependencies:** None  
**Blocker:** None

---

### E7:S06:T03 – Kanban documentation consistency

**Input:** Epic/Story/Task docs, E9↔E18 renumbering history  
**Deliverable:** No broken cross-references; consistent Epic-X/ structure; E9 = Documentation, E18 = User Management  
**Dependencies:** None  
**Blocker:** None

---

### E7:S06:T04 – Recent commit review

**Input:** Last ~15 commits (git log)  
**Deliverable:** Findings documented; RW compliance noted; batch-commit risks assessed; BR/FR filed for defects  
**Dependencies:** None  
**Blocker:** None

---

### E7:S06:T05 – Workflow script integrity

**Input:** ukw_syntax_parser.py, task_inference.py, workflow_orchestrator.py, workflow_executor.py  
**Deliverable:** Scripts reviewed; behavior validated; BR filed for bugs  
**Dependencies:** None  
**Blocker:** None

---

### E7:S06:T06 – FR/BR/UXR intake documentation quality

**Input:** Batch 3 intake docs, fr-br-uxr-structure.md, kanban-completed.md  
**Deliverable:** Consistency checked; format validated; gaps documented  
**Dependencies:** None  
**Blocker:** None

---

### E7:S06:T07 – General documentation and cross-reference integrity

**Input:** README, docs/ tree, internal links  
**Deliverable:** Broken links fixed; structure validated; inconsistencies documented  
**Dependencies:** None  
**Blocker:** None

---

### E7:S06:T08 – Dependency and tooling audit

**Input:** pyproject.toml, requirements, package manifests, test suite, CI configs, build scripts  
**Deliverable:** Dependency health report; test suite status; CI/CD validation; build script review; BR filed for issues  
**Dependencies:** None  
**Blocker:** None

---

### E7:S06:T09 – Config and git state validation

**Input:** rw-config.yaml, version.py, .cursorrules, .cursorignore, git status, branch/tag state  
**Deliverable:** Config drift documented; git state baseline; cursor rules aligned with workflows  
**Dependencies:** None  
**Blocker:** None

---

## Acceptance Criteria

- All review tasks completed with findings documented
- Critical issues (artifacts, version drift) remediated
- Non-critical findings filed as BR/FR where appropriate
- Project in known-good state before new feature work

---

## Parallel Development Dependencies

- Epic 4 (Kanban Framework) – Uses kanban structure
- Epic 2 (Workflow Management) – Workflow scripts under review
- Epic 3 (Versioning) – Version alignment
- *Parallel Development Candidacy:* Safe (review is independent)

---

## References

- Project review discussion (2026-03-18)
- Epic 7: Codebase Maintenance and Review
- Kanban Governance Policy
- Dev Kit Versioning Policy
