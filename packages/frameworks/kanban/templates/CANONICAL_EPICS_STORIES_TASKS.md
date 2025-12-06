---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T15:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Canonical Epics, Stories, and Tasks (EST)

**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Framework:** Kanban Framework

---

## Purpose

This document defines **canonical (reusable) work items** at all levels (Epics, Stories, and Tasks) that are common across projects using the Kanban framework. These patterns represent recurring maintenance, quality assurance, and operational needs that can be referenced and adapted when creating work items in any project.

**Usage:** When creating an Epic, Story, or Task that matches one of these patterns, reference this document and adapt the pattern to your project's context.

**Structure:** This document is organized by work item type (Epics → Stories → Tasks) to make it easy to find relevant patterns.

---

## Canonical Epics

### Documentation Management and Maintenance

**Epic Pattern:** Documentation Management and Maintenance

**Type:** Recurring Epic Pattern

**Purpose:**
- Ensures all documentation remains accurate, up-to-date, and consistent
- Establishes documentation maintenance frameworks
- Implements documentation quality assurance processes
- Automates documentation maintenance tasks

**Common Stories:**
- Documentation Maintenance Framework
- Documentation Quality Assurance
- Documentation Automation

**When to Use:**
- Project has significant documentation that needs ongoing maintenance
- Documentation quality is critical for project success
- Multiple documentation sources need coordination
- Documentation needs automated validation and updates

**Example Usage:**
```markdown
# Epic 5: Documentation Management and Maintenance

**Status:** TODO  
**Priority:** HIGH  
**Goal:** Ensure all documentation remains accurate, up-to-date, and consistent

[Reference: packages/frameworks/kanban/templates/CANONICAL_EPICS_STORIES_TASKS.md - Documentation Management Epic]
```

---

### Framework Management and Maintenance

**Epic Pattern:** Framework Management and Maintenance

**Type:** Recurring Epic Pattern

**Purpose:**
- Manages framework packages and their lifecycle
- Establishes framework versioning and release processes
- Implements framework update and migration procedures
- Monitors framework health and compatibility

**Common Stories:**
- Framework Version Management
- Framework Update and Migration
- Framework Health Monitoring

**When to Use:**
- Project maintains reusable framework packages
- Frameworks need versioning and release management
- Frameworks are used across multiple projects
- Framework dependencies need tracking

**Example Usage:**
```markdown
# Epic 6: Framework Management and Maintenance

**Status:** TODO  
**Priority:** HIGH  
**Goal:** Ensure frameworks remain current, well-maintained, and properly versioned

[Reference: packages/frameworks/kanban/templates/CANONICAL_EPICS_STORIES_TASKS.md - Framework Management Epic]
```

---

## Canonical Stories

### Documentation Quality Assurance

**Story Pattern:** Documentation Quality Assurance

**Type:** Recurring Story Pattern

**Purpose:**
- Implements quality assurance processes and tools for documentation validation
- Ensures documentation consistency and accuracy
- Creates validation tools and review workflows
- Builds documentation health monitoring

**Common Tasks:**
- Create documentation consistency validators
- Implement documentation review workflows
- Build documentation health dashboards
- Fix changelog ordering (perpetual task)

**When to Use:**
- Documentation needs automated validation
- Multiple documentation sources need consistency checks
- Documentation quality is critical
- Recurring documentation issues need systematic fixes

**Example Usage:**
```markdown
### E5:S02 – Documentation Quality Assurance

**Status:** TODO  
**Priority:** HIGH  
**Goal:** Implement comprehensive quality assurance processes and tools for documentation validation

[Reference: packages/frameworks/kanban/templates/CANONICAL_EPICS_STORIES_TASKS.md - Documentation Quality Assurance Story]
```

---

### Framework Version Management

**Story Pattern:** Framework Version Management

**Type:** Recurring Story Pattern

**Purpose:**
- Establishes version management processes for framework packages
- Defines framework versioning strategies
- Creates framework release processes
- Establishes framework compatibility tracking

**Common Tasks:**
- Define framework versioning strategy
- Create framework release processes
- Establish framework compatibility tracking
- Design framework dependency architecture
- Create framework version tagging strategy

**When to Use:**
- Frameworks need formal versioning
- Framework releases need structured processes
- Framework compatibility needs tracking
- Frameworks are distributed or reused

**Example Usage:**
```markdown
### E6:S01 – Framework Version Management

**Status:** TODO  
**Priority:** HIGH  
**Goal:** Establish comprehensive version management processes for framework packages

[Reference: packages/frameworks/kanban/templates/CANONICAL_EPICS_STORIES_TASKS.md - Framework Version Management Story]
```

---

## Canonical Tasks

### Perpetual Maintenance Tasks

#### Changelog Ordering Maintenance

**Task Pattern:** Fix changelog ordering to ensure consistent descending order

**Type:** PERPETUAL (recurring maintenance task)

**Problem:**
- CHANGELOG.md has mixed ordering (descending at top, ascending in middle/bottom)
- Changelog validator detects violations but Release Workflow (RW) may continue
- RW needs correct version number when committing, which requires proper ordering

**Approach:**
1. Analyze current changelog structure and identify ordering violations
2. Reorder all changelog entries to consistent descending order (most recent first)
3. Verify changelog validator passes after reordering
4. Document reordering process for future maintenance
5. Create script/process to maintain descending order going forward

**Key Requirements:**
- All entries must be in descending canonical order (highest version first)
- Validator must pass before RW commits
- Process must be repeatable for future maintenance

**Perpetual Nature:**
- This task should be checked/re-executed whenever:
  - Changelog validator reports ordering violations
  - New entries are added that might disrupt ordering
  - Before major releases or merges

**Success Criteria:**
- Changelog validator passes with no ordering violations
- All entries in descending canonical order (RC.EPIC.STORY.TASK+BUILD)
- RW can commit with correct version number

**Integration:**
- Typically placed in Documentation Quality Assurance stories
- Can be added to any Epic/Story that manages changelog maintenance
- Should be tracked as a recurring task in project Kanban boards

**Example Usage:**
```markdown
### E5:S02:T04 – Fix changelog ordering to ensure consistent descending order

**Input:** Current CHANGELOG.md, changelog validator output  
**Deliverable:** Consistently ordered changelog (descending, most recent first)  
**Dependencies:** None  
**Blocker:** None  
**Type:** PERPETUAL (recurring maintenance task)

[Reference: packages/frameworks/kanban/templates/CANONICAL_EPICS_STORIES_TASKS.md - Changelog Ordering Maintenance]
```

---

## Adding New Canonical Patterns

When identifying a new recurring work item pattern:

### For Epics:
1. **Document the epic pattern** with:
   - Clear purpose and scope
   - Common stories that belong to this epic
   - When to use this epic pattern
   - Example usage

### For Stories:
1. **Document the story pattern** with:
   - Clear purpose and goal
   - Common tasks that belong to this story
   - When to use this story pattern
   - Example usage

### For Tasks:
1. **Document the task pattern** with:
   - Clear problem statement
   - Standardized approach
   - Success criteria
   - When to execute (triggers)
   - Mark as PERPETUAL if it's a recurring maintenance task

2. **Provide example usage** showing how to reference it in a Story

3. **Update framework version** when adding new canonical patterns

---

## References

- [Kanban Governance Policy](../policies/kanban-governance-policy.md)
- [Story Template](./STORY_TEMPLATE.md)
- [Epic Template](./EPIC_TEMPLATE.md)

---

**Status:** This document is maintained as part of the Kanban framework and should be updated when new canonical Epic, Story, or Task patterns are identified.

---

## Document Structure

This document is organized hierarchically:

1. **Canonical Epics** - High-level recurring epic patterns
2. **Canonical Stories** - Recurring story patterns within epics
3. **Canonical Tasks** - Recurring task patterns within stories
   - **Perpetual Maintenance Tasks** - Tasks that recur regularly
   - **Standard Tasks** - One-time tasks that follow common patterns

**Navigation:** Use the table of contents or search for specific patterns by type (Epic/Story/Task) or keyword.

