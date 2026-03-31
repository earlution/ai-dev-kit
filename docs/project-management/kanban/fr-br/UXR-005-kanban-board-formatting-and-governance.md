---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-16T13:58:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Kanban Board Formatting & Governance

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-03-16  
**Submitted By:** User (request) documented by Cascade  
**Priority:** HIGH  
**Status:** OPEN  
**GitHub Issue:** _TBD_  
**Repository Task:** [E7:S00:T05](../epics/Epic-7/Story-000-uxr-repo/T05-uxr-005-repository-anchor.md)  
**Implementation Task:** [E7:S01:T09](../epics/Epic-7/Story-001-codebase-maintenance-tasks/E07S01T09-kanban-template-governance.md)

---

## Summary

Readers reported poor readability on Kanban boards because multi-line task entries were written back-to-back with no blank spacing between bullet items. The same formatting debt exists across Kanban documentation, creating cognitive overload and making it easy to miss tasks. This UXR formalizes the requirement to insert a blank line between multi-line MoSCOW entries across every Kanban board/doc and assigns UXR ownership of Kanban template/document maintenance so the rule is consistently enforced.

---

## Research Objective

**Primary Question:** How can we improve Kanban document readability and ensure lasting ownership for formatting rules?

**Secondary Questions:**

1. Which Kanban documents exhibit the spacing issue most severely?
2. What rule should govern multi-line list spacing without disrupting single-line lists?
3. Which workflow should own future Kanban template/document updates to prevent regression?

---

## Methodology

**Research Method:** Heuristic review of Kanban documentation (MoSCOW sections across `kanban-board.md`, `fr-br-uxr-board.md`, `kanban-board-guide.md`, and `_index.md`).  
**Participants:** Documentation + UXR review pairing.  
**Duration:** Single analytical pass during Kanban board formatting update (2026-03-16).  
**Artifacts Reviewed:**

- `docs/project-management/kanban/kanban-board.md`
- `docs/project-management/kanban/fr-br-uxr-board.md`
- `docs/project-management/kanban/kanban-board-guide.md`
- `docs/project-management/kanban/_index.md`

---

## Key Findings

### Finding 1: Dense MoSCOW Lists Hurt Scan-Ability (Severity: High)

- Multi-line bullets render as solid blocks, forcing users to re-read lines to separate tasks.
- Impacts both Kanban tasks and FR/BR/UXR prioritization boards.

### Finding 2: Inconsistent Template Guidance (Severity: High)

- No canonical template or rule explaining when blank lines are required, so fixes are ad-hoc.
- `kanban-board-guide.md` and other governance docs never mention formatting ownership.

### Finding 3: Ownership Gap for Kanban Templates (Severity: Critical)

- No workflow (UKW, Intake, Documentation) explicitly owns template/doc maintenance for Kanban materials.
- Leads to regression risk after one-off fixes.

---

## Recommendations

1. **Formatting Rule Enforcement (Immediate):** Insert a blank line between each multi-line MoSCOW bullet across all Kanban/FR/BR/UXR boards. Single-line bullets remain contiguous.
2. **Template Updates:** Update Kanban templates/guide documents to describe the rule, including examples and linting guidance.
3. **UXR Ownership:** Assign the UXR workflow responsibility for Kanban template/document maintenance, ensuring future formatting or terminology adjustments go through UXR review.
4. **Validator Enhancement (Follow-up):** Extend documentation consistency scripts to flag multi-line bullets without spacing.

---

## Acceptance Criteria

- [ ] AC-1: Every multi-line MoSCOW bullet in `kanban-board.md`, `fr-br-uxr-board.md`, `kanban-board-guide.md`, `kanban-structure.md`, and `_index.md` has a blank line separating it from adjacent entries.
- [ ] AC-2: Kanban templates and guide explicitly document the spacing rule with an example.
- [ ] AC-3: Documentation states that UXR owns Kanban template/document updates and governance changes.
- [ ] AC-4: Related validators/tests reference the rule or include TODOs for automation.

---

## Dependencies

**Blocks:**

- Updates to documentation validator (`scripts/documentation/validate-documentation-consistency.py`).
- Coordination with Documentation Agent to reflect new ownership statements across board files.

**Blocked By:**

- None (analysis complete; implementation ready).

**Related Work:**

- `kanban-board.md` readability fix task.
- Documentation Agent responsibilities in `docs/project-management/kanban/AGENTS.md`.

---

## Intake Decision

**Intake Status:** PENDING  
**Intake Date:** 2026-03-16  
**Intake By:** Cascade on behalf of User  

**Decision Flow Results:**

- [ ] Story Match Found: _TBD_

**Assigned To:**

- Epic: _TBD_  
- Story: _TBD_  
- Task: _TBD_  
- Version: _TBD_

**Kanban Links:**

- Epic: _TBD_  
- Story: _TBD_  
- Task: _TBD_

---

## Notes

This UXR represents the user’s explicit request (Mar 16, 2026) to expand UXR scope and enforce Kanban readability. Implementation should be coordinated with documentation linting so future RW/UKW work respects the spacing rule automatically.

---

## References

- `docs/project-management/kanban/kanban-board.md`
- `docs/project-management/kanban/fr-br-uxr-board.md`
- `docs/project-management/kanban/kanban-board-guide.md`
- `docs/project-management/kanban/README.md`
- `scripts/documentation/validate-documentation-consistency.py`
