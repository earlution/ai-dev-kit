---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T21:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 004 – Book Material Capture

**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-11  
**Last updated:** 2025-12-11 (v0.9.4.1+1 – Task 1 complete: Starborn Legacy Zombie Story report captured)  
**Version:** v0.9.4.0+0  
**Code:** E9S04

---

## Task Checklist

- [x] **E9:S04:T00 – Setup: Material Capture Infrastructure** ✅ COMPLETE (v0.9.4.0+1)
- [x] **E9:S04:T01 – Capture Starborn Legacy Zombie Story Report** ✅ COMPLETE (v0.9.4.1+1)

---

## Overview

This story provides a structured approach for capturing unstructured material, text dumps, raw content, and other unprocessed book-related material. This allows for quick capture of ideas, notes, and content before it's organized into structured chapters.

---

## Goal

Create a system for capturing and storing unstructured book material (text dumps, raw notes, ideas, etc.) that can later be processed and organized into structured book content.

---

## Tasks

### E9:S04:T00 – Setup: Material Capture Infrastructure

**Input:** Story requirements, book material capture needs  
**Deliverable:** Material capture structure, templates, and guidelines established  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Scope:** Establish the infrastructure for capturing unstructured book material. Define structure, templates, and guidelines that enable quick capture of text dumps, reports, notes, and other unstructured content without requiring structure at capture time.

**Acceptance Criteria:**
- [x] Material capture structure is defined (tasks serve as storage mechanism)
- [x] Capture templates and guidelines are documented
- [x] Storage and organization approach is established
- [x] Setup deliverables are documented as metadata in this task
- [x] Infrastructure is ready for material capture tasks (T01+)

**Status:** ✅ COMPLETE (v0.9.4.0+1)

**Setup Deliverables (Metadata):**

**1. Material Capture Structure:**
- **Location:** Tasks within this Story (E9:S04) serve as the storage mechanism
- **Format:** Unstructured material captured directly in task sections
- **Naming:** Tasks numbered sequentially (T01, T02, T03...) as material is captured
- **Metadata:** Each captured material includes: source project, date, type, purpose

**2. Capture Templates and Guidelines:**
- **Template:** Use delimited task sections within Story document
- **Guidelines:**
  - Capture material as-is (text dumps, reports, notes, etc.)
  - Include metadata header: source, date, type, purpose
  - Material will be processed later for structured book content
  - No structure required at capture time - just capture
- **Types Supported:**
  - Case study reports (like Starborn Legacy Zombie Story)
  - Text dumps and raw notes
  - Ideas and research snippets
  - Any unstructured book-related material

**3. Storage and Organization:**
- **Storage:** Tasks themselves are the storage (no separate storage system needed)
- **Organization:** Sequential task numbering provides chronological organization
- **Processing:** Material captured here feeds into E9:S01 (Book Content Development) for structured processing
- **Indexing:** Task checklist serves as index of captured material

**Rationale:** This abstract setup task establishes the infrastructure. All actual material capture happens in subsequent tasks (T01+), which serve as both the work items and the storage mechanism. This keeps setup separate from content, and allows unlimited material capture tasks without setup tasks cluttering the sequence.

---

### E9:S04:T01 – Capture Starborn Legacy Zombie Story Report

**Input:** Starborn Legacy project report: "The Zombie Story: A Cautionary tale resulting in technical debt"  
**Deliverable:** Captured report stored in material capture location  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Scope:** Capture the complete Starborn Legacy Zombie Story case study report as unstructured book material. This report documents technical debt patterns and serves as a cautionary tale for AI-assisted development workflows. Material will be stored in task section for later processing into structured book content.

**Acceptance Criteria:**
- [x] Complete report captured as unstructured material
- [x] Report stored in task section with full content
- [x] Metadata included: source project (Starborn Legacy), date (2025-12-11), type (case study report)
- [x] Material ready for later processing into structured book content

**Approach:**
1. Capture the complete report as unstructured material
2. Store in appropriate location for book material capture
3. Add metadata: source project (Starborn Legacy), date (2025-12-11), type (case study report)
4. Note: This material will be processed later for use in book content

**Status:** ✅ COMPLETE (v0.9.4.1+1)

**Captured Material:**

---

# The Zombie Story: A Cautionary tale resulting in technical debt

**Date:** 2025-12-11  

**Project:** Starborn Legacy  

**Related Project:** ai-dev-kit  

**Status:** COMPLETE  

**Purpose:** Document the technical debt incurred by E15:S01 (Release Workflow & Versioning Infrastructure) as a cautionary tale for ai-dev-kit and future projects

**📚 Case Study for Head First AI-Assisted Development Book:** This document serves as a real-world case study demonstrating the risks of automation in AI-assisted development workflows. It illustrates how mistakes, misses, and false positives from deterministic and agentic workflows can compound into emergent anti-patterns, resulting in significant technical debt. The "Zombie Story" pattern—where a story becomes unmanageable and must be retired—is a perfect example of how automation can accelerate both productivity and risk.

---

## Executive Summary

**E15:S01 (Release Workflow & Versioning Infrastructure)** has become a cautionary tale demonstrating how scope drift, versioning mis-numbering, and lack of governance can create significant technical debt. This story, originally intended to be a focused infrastructure story, accumulated 42 tasks (71.4% out-of-scope), suffered from versioning policy violations, and ultimately became unmanageable, requiring retirement and migration to a new story (E15:S05 - Release Workflow & Versioning Infrastructure v2).

**Key Issues:**

1. **Massive Scope Drift:** 30 out of 42 tasks (71.4%) were out-of-scope

2. **Versioning Mis-numbering:** Tasks incorrectly versioned (e.g., T001-T006 released as Epic 9 instead of Epic 15)

3. **Task Number Exhaustion:** Story accumulated too many tasks, making it unmanageable

4. **Governance Failure:** Lack of early scope enforcement allowed drift to accumulate

**Technical Debt Incurred:**

- Forensic analysis and remediation work (E15:S04:T001)

- Retrospective version corrections (T001-T006, T008-T009)

- Story retirement and migration planning

- Loss of development velocity due to confusion and mis-versioning

---

## The Automation Paradox: Productivity vs. Risk

### The Promise of Automation

AI-assisted development workflows promise significant productivity gains:

- **Faster task creation:** Agents can create tasks quickly based on natural language descriptions

- **Automated versioning:** Release workflows can automatically bump versions and create changelogs

- **Reduced manual work:** Deterministic workflows eliminate repetitive tasks

- **Agent-driven execution:** Intelligent agents can make decisions and execute complex workflows

### The Hidden Costs: Mistakes, Misses, and False Positives

However, automation also introduces new risks:

**1. Mistakes from Deterministic Workflows:**

- Workflows execute exactly as programmed, even when context is wrong

- No human judgment to catch edge cases or exceptions

- Errors propagate quickly through automated systems

**2. Misses from Agentic Workflows:**

- Agents may miss scope violations when creating tasks

- Agents may not recognize when a task belongs to a different epic/story

- Agents may fail to validate versioning policy compliance

**3. False Positives:**

- Agents may incorrectly assume tasks are in-scope based on loose associations

- Agents may assume versioning is correct without validation

- Agents may miss anti-patterns that would be obvious to humans

### Emergent Anti-Patterns

When mistakes, misses, and false positives compound, they create emergent anti-patterns:

**The Zombie Story Pattern:**

- Story accumulates out-of-scope tasks (misses)

- Versioning mis-numbering goes undetected (misses)

- Story size grows beyond manageable limits (false positives)

- Story becomes unmaintainable and must be retired (mistakes compound)

**The Scope Drift Cascade:**

- One out-of-scope task is added (miss)

- Similar tasks follow (false positive: "it's like the last one")

- Scope boundaries blur (miss)

- Story becomes catch-all (mistake)

**The Versioning Drift Pattern:**

- One versioning error goes unnoticed (miss)

- Similar errors follow the pattern (false positive: "it must be intentional")

- Versioning policy violations accumulate (mistake)

- Forensic analysis required to correct (compounded mistake)

---

## The Story: What Happened

### Initial Scope (2025-12-01)

**E15:S01** was created with a narrow, focused scope:

- Release Workflow (RW) integration with agent-driven execution

- Versioning schema migration (RC.EPIC.STORY+BUILD → RC.EPIC.STORY.TASK+BUILD)

- Kanban Governance Policy integration

- Version renumbering strategy and execution

- Git tags and history updates (optional)

**Expected Size:** 20-30 hours, ~10-15 tasks

### What Actually Happened

**Final State (2025-12-11):**

- **Total Tasks:** 42 tasks

- **In-Scope Tasks:** 12 tasks (28.6%)

- **Out-of-Scope Tasks:** 30 tasks (71.4%)

- **Task Number Range:** T001 through T042 (with gaps)

- **Status:** Retired, replaced by E15:S05 (Release Workflow & Versioning Infrastructure v2)

### Scope Drift Breakdown

**Out-of-Scope Tasks by Category:**

- **Map/Navigation Bugs:** 11 tasks → Should be Epic 12

- **UI/UX Bugs:** 3 tasks → Should be Epic 17:S05

- **UI/UX Features:** 3 tasks → Should be Epic 17:S05

- **Resource Bugs:** 2 tasks → Should be E15:S02

- **Model Refactoring:** 2 tasks → Should be E15:S02 or E15:S03

- **Infrastructure (Non-Versioning):** 4 tasks → Should be E15:S02 or E15:S03

- **Code Quality:** 1 task → Should be E15:S03

- **Kanban Process Meta:** 3 tasks → Should be E15:S04

**Root Cause:** Tasks were added to E15:S01 because it was "infrastructure" or "tooling" without checking if they aligned with the specific story scope. The story became a catch-all for any infrastructure-related work. **This is a classic example of an agentic anti-pattern: loose association-based task placement without scope validation.**

---

## Versioning Mis-numbering Issues

### Issue 1: Epic/Story Mis-assignment

**Problem:** Tasks T001-T006 were released with incorrect Epic/Story numbers:

- **T001:** Released as `v0.9.32+98` (Epic 9, Story 32) → Should be `v0.15.1.1+1` (Epic 15, Story 1, Task 1)

- **T002:** Released as `v0.9.32.1+100` → Should be `v0.15.1.2+1`

- **T003:** Released as `v0.9.32.1+101` → Should be `v0.15.1.3+1`

- **T006:** Released as `v0.9.32.1+102` → Should be `v0.15.1.6+1`

**Impact:**

- Violates versioning policy (version must reflect actual Epic/Story/Task)

- Creates confusion in version history

- Requires retrospective corrections

- Breaks traceability between versions and work items

**Root Cause:** **Deterministic workflow mistake** - The release workflow executed without validating that the version matched the actual task's epic/story assignment.

### Issue 2: Task Number Not Reflected in Version

**Problem:** Multiple distinct tasks were released with the same TASK number, only BUILD incremented:

- **T008 and T009:** Both released as `v0.15.1.1+116` (same task number)

- Should have been: `v0.15.1.8+1` and `v0.15.1.9+1` (different task numbers)

**Impact:**

- Violates versioning policy (each new task must increment TASK, reset BUILD)

- Makes it impossible to identify which task a version represents

- Requires splitting combined releases into separate releases

**Root Cause:** **Agentic workflow miss** - The agent failed to recognize that T008 and T009 were distinct tasks requiring separate version numbers.

### Issue 3: E9S32T1 Build Number Explosion

**Problem:** Epic 9 Story 32 Task 1 (`v0.9.32.1+X`) accumulated 102+ build bumps, indicating:

- Multiple distinct tasks incorrectly versioned under the same task number

- Versioning policy violations (should have been different tasks/epics/stories)

- Lack of versioning validation or enforcement

**Impact:**

- Massive versioning mis-numbering

- Loss of traceability

- Requires comprehensive investigation (E15:S04:T002)

**Root Cause:** **Emergent anti-pattern** - A pattern of versioning errors was established and followed, creating a cascade of violations that went undetected.

---

## Technical Debt Incurred

### 1. Forensic Analysis Work

**Tasks Created:**

- **E15:S04:T001:** Forensic Analysis: E15:S01 Scope Drift Investigation (4-6 hours)

- **E15:S04:T002:** Investigation: E9S32T1 Versioning Mis-numbering Analysis (4-6 hours)

- **E15:S01:T036:** Forensic Analysis: Versioning Drift Investigation

- **E15:S01:T037:** Investigation: Root Cause Analysis of Pattern Assumption

**Cost:** ~12-16 hours of investigation and analysis work

### 2. Retrospective Version Corrections

**Work Required:**

- Created retrospective releases for T001-T006 with correct versions

- Split combined T008/T009 release into separate releases

- Updated all version references in documentation

- Created detailed changelogs for corrected versions

**Cost:** ~4-6 hours of release workflow runs and documentation updates

### 3. Story Retirement and Migration

**Work Required:**

- Create E15:S05 (Release Workflow & Versioning Infrastructure v2) - new story using next available story number

- Migrate all open tasks from E15:S01 to E15:S05

- Mark open tasks in E15:S01 as MOVED

- Update all references and documentation

- Maintain E15:S01 as "zombie story" for forensic traceability

**Cost:** ~2-4 hours of migration and documentation work

### 4. Loss of Development Velocity

**Impact:**

- Confusion about which story tasks belong to

- Time spent investigating scope drift instead of feature work

- Versioning errors requiring corrections

- Reduced confidence in versioning system

**Cost:** Difficult to quantify, but significant

---

## Root Causes

### 1. Lack of Scope Enforcement

**Problem:** No mechanism to prevent out-of-scope tasks from being added to stories.

**Why It Happened:**

- Story scope was defined but not enforced

- Tasks were added based on loose associations ("it's infrastructure")

- No validation step before task creation

- No regular scope reviews

**Automation Failure:** **Agentic workflow miss** - Agents failed to validate task scope before adding tasks to stories.

### 2. Versioning Policy Not Enforced

**Problem:** Versioning policy violations were not caught or prevented.

**Why It Happened:**

- Release workflow didn't validate task numbers

- No automated checks to ensure TASK matches actual task number

- Agents/developers assumed versioning was correct

- Lack of versioning validation in CI/CD

**Automation Failure:** **Deterministic workflow mistake** - The workflow executed without validation checks.

### 3. Governance Gaps

**Problem:** Kanban governance processes were not fully integrated with versioning.

**Why It Happened:**

- Governance policy created but not enforced

- No validation of task-to-version mapping

- Lack of regular audits

- Process improvements not implemented

**Automation Failure:** **False positive** - Governance policy existed but was assumed to be working without validation.

### 4. Story Size Not Monitored

**Problem:** Story accumulated 42 tasks without triggering size limits or reviews.

**Why It Happened:**

- No story size limits defined

- No alerts when story exceeds expected size

- Tasks added incrementally without overall view

- No regular story health checks

**Automation Failure:** **Miss** - No automated monitoring to detect story size issues.

---

## Lessons Learned

### 1. Scope Enforcement Is Critical

**Lesson:** Stories must have strict scope enforcement from day one.

**Recommendations:**

- Define clear scope boundaries

- Validate tasks against scope before adding

- Regular scope reviews (weekly/bi-weekly)

- Automated scope validation if possible

- Clear process for scope changes

**For AI-Assisted Development:** Agents must validate task scope before adding tasks. This requires explicit scope definitions and validation rules.

### 2. Versioning Policy Must Be Enforced

**Lesson:** Versioning policy violations must be caught and prevented automatically.

**Recommendations:**

- Validate TASK number matches actual task in release workflow

- Automated checks: version → task mapping validation

- Pre-commit hooks to validate versioning

- CI/CD validation of version format and task mapping

- Regular versioning audits

**For AI-Assisted Development:** Release workflows must include validation steps that fail if versioning policy is violated. Agents must be trained to recognize versioning errors.

### 3. Story Size Limits Are Necessary

**Lesson:** Stories should have size limits to prevent accumulation of technical debt.

**Recommendations:**

- Define maximum story size (e.g., 15-20 tasks)

- Alert when story exceeds 50% of limit

- Block new tasks when story is full

- Require story split or scope review

- Regular story health checks

**For AI-Assisted Development:** Automated monitoring must alert when story size approaches limits. Agents must be prevented from adding tasks to full stories.

### 4. Governance Must Be Proactive

**Lesson:** Governance processes must be proactive, not reactive.

**Recommendations:**

- Regular scope drift audits (monthly)

- Versioning policy compliance checks

- Story health monitoring

- Early intervention when issues detected

- Automated governance reporting

**For AI-Assisted Development:** Automated governance checks must run regularly and alert on violations. Agents must be trained to recognize governance issues.

### 5. Versioning Validation Is Essential

**Lesson:** Version numbers must be validated against actual work items.

**Recommendations:**

- Release workflow must read Story file to identify completed task

- Validate: version TASK = actual task number

- Validate: version EPIC/STORY = actual epic/story

- Fail release workflow if validation fails

- Provide clear error messages

**For AI-Assisted Development:** Release workflows must include mandatory validation steps. Agents must understand versioning policy and recognize violations.

---

## Recommendations for ai-dev-kit

### 1. Implement Story Size Limits

**Recommendation:** Define and enforce story size limits.

**Implementation:**

- Maximum story size: 15-20 tasks

- Warning threshold: 10 tasks (50% of limit)

- Block threshold: 15 tasks (75% of limit)

- Automated alerts when thresholds crossed

- Required scope review when limit approached

### 2. Enforce Versioning Policy in Release Workflow

**Recommendation:** Release workflow must validate versioning policy compliance.

**Implementation:**

- Read Story file to identify completed task

- Validate: version TASK = actual task number

- Validate: version EPIC/STORY = actual epic/story

- Fail workflow if validation fails

- Provide clear error messages with correction guidance

### 3. Implement Scope Validation

**Recommendation:** Validate tasks against story scope before adding.

**Implementation:**

- Define story scope clearly

- Validate task description against scope

- Require justification if task is borderline

- Regular scope reviews

- Automated scope drift detection

### 4. Regular Governance Audits

**Recommendation:** Implement regular governance audits.

**Implementation:**

- Monthly scope drift audits

- Quarterly versioning compliance checks

- Story health monitoring

- Automated reporting

- Early intervention when issues detected

### 5. Versioning Validation in CI/CD

**Recommendation:** Add versioning validation to CI/CD pipeline.

**Implementation:**

- Validate version format (RC.EPIC.STORY.TASK+BUILD)

- Validate version → task mapping

- Validate version → epic/story mapping

- Fail build if validation fails

- Provide clear error messages

### 6. Story Retirement Process

**Recommendation:** Define process for retiring overloaded stories.

**Implementation:**

- Criteria for story retirement (e.g., >20 tasks, >50% out-of-scope)

- Process for creating replacement story (using next available story number, with "v2" appended to name)

- Migration process for open tasks

- Zombie story maintenance (forensic traceability)

- Documentation requirements

### 7. Agent Training and Validation

**Recommendation:** Ensure agents understand and follow versioning policy.

**Implementation:**

- Clear versioning policy documentation

- Agent training on versioning rules

- Validation checks before release workflow

- Error messages that guide correct behavior

- Regular policy reviews

---

## Technical Debt Summary

### Quantified Costs

| Category | Tasks | Hours | Impact |

|----------|-------|-------|--------|

| Forensic Analysis | 4 tasks | 12-16 hours | High |

| Version Corrections | 6 releases | 4-6 hours | Medium |

| Story Migration | 1 story | 2-4 hours | Medium |

| Development Velocity Loss | N/A | Unknown | High |

| **Total** | **11+ tasks** | **18-26+ hours** | **High** |

### Unquantified Costs

- Loss of confidence in versioning system

- Confusion about task organization

- Time spent investigating instead of developing

- Technical debt accumulation

- Future maintenance burden

---

## Conclusion

**E15:S01** serves as a cautionary tale demonstrating the importance of:

1. **Strict scope enforcement** from day one

2. **Versioning policy validation** in release workflow

3. **Story size limits** to prevent accumulation

4. **Proactive governance** with regular audits

5. **Early intervention** when issues are detected

**Key Takeaway:** Technical debt accumulates quickly when governance is reactive rather than proactive. The cost of prevention (scope validation, versioning checks, size limits) is far less than the cost of remediation (forensic analysis, retrospective corrections, story migration).

**The Automation Paradox:** Automation brings productivity gains, but also introduces new risks. Mistakes, misses, and false positives from deterministic and agentic workflows can compound into emergent anti-patterns like "The Zombie Story." The solution is not to avoid automation, but to build validation, monitoring, and governance into automated workflows from the start.

**For ai-dev-kit:** Implement these recommendations now, before similar issues occur. The patterns we've identified (scope drift, versioning mis-numbering, story size explosion) are predictable and preventable with proper governance and validation.

**For Head First AI-Assisted Development:** This case study demonstrates that AI-assisted development is not just about productivity—it's about managing the risks that come with automation. The "Zombie Story" pattern is a perfect example of how automation can accelerate both productivity and technical debt. Understanding these patterns is essential for building robust AI-assisted development workflows.

---

## References

- **E15:S01 scope drift analysis (2025-12-11)** — *Legacy filename `e15-s01-scope-drift-analysis-2025-12-11.md` is not under `docs/`; keep as bibliographic reference only.*

- [Dev-kit versioning policy (canonical)](../../../../architecture/standards-and-adrs/dev-kit-versioning-policy.md)

- [Kanban governance policy (this repo)](../../../../project-management/rituals/policy/kanban-governance-policy.md)

- **Historic Epic 15 book stories** — *Prior `../docs/project-management/epics/overview/Epic-15/...` paths were out of tree; reconcile via book repo / archive if needed.*

---

**Report Prepared By:** AI Agent (Auto)  

**Date:** 2025-12-11  

**For:** ai-dev-kit project team and Head First AI-Assisted Development book  

**Purpose:** Cautionary tale, technical debt documentation, and case study for AI-assisted development workflows


## Dependencies

**Blocks:**
- E9:S01 (Book Content Development) - Captured material feeds into structured content development

**Blocked By:**
- None

**Coordinates With:**
- E9:S01 (Book Content Development) - Material captured here is processed into structured content
- Epic 5 (Documentation Management) - Material capture may use documentation management patterns

---

## Acceptance Criteria

- [x] Material capture structure is defined and documented (T00 complete)
- [x] Templates and guidelines are available for different material types (T00 complete)
- [x] Storage and organization system is established (T00 complete - tasks are storage)
- [ ] Material can be easily captured without requiring structure (ongoing)
- [ ] Captured material can be easily found and processed later (task checklist serves as index)

---

## References

- `docs/project-management/kanban/epics/Epic-9/Epic-9.md`
- `docs/project-management/kanban/epics/Epic-9/Story-001-book-content-development.md`
