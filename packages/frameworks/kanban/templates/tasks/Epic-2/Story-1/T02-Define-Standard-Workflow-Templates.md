---
lifecycle: evergreen
ttl_days: null
created_at: [YYYY-MM-DD]
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 1, Task 2: Define Standard Workflow Templates

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** [YYYY-MM-DD] (v0.2.1.2+0 – Template created)  
**Started:** [YYYY-MM-DD]  
**Completed:** [YYYY-MM-DD]  
**Version:** v0.2.1.2+0  
**Code:** E02S01T02

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}` (e.g., `E2:S1:T2`)

**Full Task ID:** `E02:S01:T02`

---

## Scope

Define standard workflow templates for the {PROJECT_NAME} project. Create reusable workflow templates that standardize common processes and enable consistent workflow execution across the project.

---

## Input

- Documented existing workflow patterns (from E2:S1:T01)
- Workflow requirements and use cases
- Standard workflow patterns and best practices
- ai-dev-kit workflow templates (if adopting)
- Team preferences and conventions (if applicable)

---

## Deliverable

- Standard workflow templates defined
- Workflow template documentation
- Workflow template examples
- Workflow template structure
- Workflow template usage guidelines

---

## Acceptance Criteria

- [ ] Standard workflow templates defined for common workflows
- [ ] Workflow templates follow consistent structure
- [ ] Workflow templates are reusable and adaptable
- [ ] Workflow template documentation created
- [ ] Workflow template examples provided
- [ ] Workflow template usage guidelines created
- [ ] Workflow templates support project needs
- [ ] Workflow templates enable standardization

---

## Approach

1. Analyze documented workflow patterns
2. Identify common workflow patterns suitable for templating
3. Design workflow template structure
4. Define standard workflow templates
5. Create workflow template documentation
6. Provide workflow template examples
7. Create workflow template usage guidelines
8. Review and refine workflow templates

---

## Dependencies

**Depends On:**
- E2:S1:T01: Document existing workflow patterns (templates use documented patterns)

**Blocks:**
- E2:S1:T03: Create workflow execution guidelines (guidelines use templates)
- E2:S2: Workflow Automation (automation may use templates)

**Parallel Development Candidacy:** Blocked (depends on T01)

---

## Related Work

**Related Tasks:**
- E2:S1:T01: Document existing workflow patterns (templates use documented patterns)
- E2:S1:T03: Create workflow execution guidelines (guidelines use templates)
- E2:S1:T04: Document workflow integration points (integration may use templates)

**Related Stories:**
- E2:S1: Workflow Definitions and Patterns (this story)
- E2:S2: Workflow Automation (automation may use templates)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.2.1.2+1)`)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update version file with task completion
- Update changelog with task completion

---
