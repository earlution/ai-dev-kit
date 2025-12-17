---
lifecycle: evergreen
ttl_days: null
created_at: [YYYY-MM-DD]
expires_at: null
housekeeping_policy: keep
---

# Post-Implementation Review: Story {N}

**Story:** {Story Name}  
**Epic:** {Epic Name}  
**Status:** COMPLETE  
**Review Date:** {YYYY-MM-DD}  
**Reviewer:** {Name/Username}  
**Version:** {Version}  
**PIR Version:** 1.0.0

---

## Executive Summary

[One paragraph summary of Story outcomes, key achievements, and overall assessment]

---

## Goals Assessment

- [ ] **Goal 1:** {Goal Description}
  - **Status:** {Achieved/Partially Achieved/Not Achieved}
  - **Assessment:** {Detailed assessment of goal achievement}
  - **Evidence:** {Supporting evidence or metrics}

- [ ] **Goal 2:** {Goal Description}
  - **Status:** {Achieved/Partially Achieved/Not Achieved}
  - **Assessment:** {Detailed assessment of goal achievement}
  - **Evidence:** {Supporting evidence or metrics}

---

## Tasks Review

[Review each Task in the Story]

### Task {N}: {Task Name}

- **Status:** COMPLETE
- **Version:** {Version}
- **Quality:** {Excellent/Good/Satisfactory/Needs Improvement}
- **Key Findings:** {Summary of task outcomes}
- **Deliverables:** {List deliverables}
- **Issues Encountered:** {List any issues or blockers}

---

## Technical Assessment

### Implementation Approach

{Description of the technical approach taken for this Story}

- **Approach:** {Description}
- **Rationale:** {Why this approach was chosen}
- **Alternatives Considered:** {Other approaches considered}

### Code Quality

- **Overall Assessment:** {Excellent/Good/Satisfactory/Needs Improvement}
- **Code Review Coverage:** {Percentage or description}
- **Technical Debt Introduced:** {Description of any technical debt}
- **Code Quality Metrics:** {Any metrics available}

### Documentation

- **Completeness:** {Excellent/Good/Satisfactory/Needs Improvement}
- **Documentation Created:** {List key documents}
- **Documentation Gaps:** {Any gaps identified}
- **Documentation Quality:** {Assessment}

### Testing

- **Test Coverage:** {Percentage or description}
- **Test Quality:** {Excellent/Good/Satisfactory/Needs Improvement}
- **Test Types:** {Unit/Integration/E2E/etc.}
- **Test Results:** {Summary of test outcomes}

---

## Lessons Learned

### What Went Well

- {Item 1: Description of what worked well and why}
- {Item 2: Description of what worked well and why}
- {Item 3: Description of what worked well and why}

### What Could Be Improved

- {Item 1: Description of what could be improved and how}
- {Item 2: Description of what could be improved and how}
- {Item 3: Description of what could be improved and how}

### Patterns Identified

- **Pattern 1:** {Description of pattern}
  - **Context:** {When/where this pattern appears}
  - **Value:** {Why this pattern is valuable}
  - **Recommendation:** {How to leverage this pattern}

### Anti-Patterns Identified

- **Anti-Pattern 1:** {Description of anti-pattern}
  - **Context:** {When/where this anti-pattern appears}
  - **Impact:** {Negative impact of this anti-pattern}
  - **Recommendation:** {How to avoid this anti-pattern}

---

## Follow-Up Actions

[Actions identified during review that should be tracked as Kanban tasks]

- [ ] **Action 1:** {Description}
  - **Priority:** {High/Medium/Low}
  - **Owner:** {Assigned to}
  - **Related Work:** {Link to related Epic/Story/Task}

- [ ] **Action 2:** {Description}
  - **Priority:** {High/Medium/Low}
  - **Owner:** {Assigned to}
  - **Related Work:** {Link to related Epic/Story/Task}

---

## Knowledge Capture

[Key knowledge items to preserve for future reference]

### Best Practices

- {Best practice 1: Description and context}
- {Best practice 2: Description and context}

### Lessons for Future Stories

- {Lesson 1: Description and application}
- {Lesson 2: Description and application}

### Documentation Recommendations

- {Recommendation 1: What documentation should be created/updated}
- {Recommendation 2: What documentation should be created/updated}

---

## Metrics

- **Duration:** {Start Date} to {End Date}
- **Tasks Completed:** {Count} / {Total}
- **Versions Released:** {Count} (Range: {Start Version} to {End Version})
- **Time to Completion:** {Duration in days/weeks}

---

## Related Work

- **Epic:** [Epic {N} Documentation](../../project-management/kanban/epics/Epic-{N}/Epic-{N}.md)
- **Story:** [Story {N} Documentation](../../project-management/kanban/epics/Epic-{N}/Story-{N}-{name}.md)
- **Tasks:** {Links to all tasks in Story}
- **Related PIRs:** {Links to any related PIR reports}
- **Follow-Up Tasks:** {Links to Kanban tasks created from this PIR}

---

## References

- [PIR Workflow Planning](../../Analysis/PIR-workflow-planning.md)
- [PIR Workflow Reference](../../Documentation/Developer_Docs/vwmp/pir-workflow-reference.md)
- [Release Workflow](../../Documentation/Developer_Docs/vwmp/release-workflow-reference.md)

---

**Template Usage:**
- Copy this template when creating a Story PIR
- Fill in all relevant sections
- Update Story document with PIR summary
- Create follow-up Kanban tasks for identified actions
- Link PIR to Story document bidirectionally

---

_This template is part of the Workflow Management Framework. See `packages/frameworks/workflow mgt/` for complete framework documentation._
