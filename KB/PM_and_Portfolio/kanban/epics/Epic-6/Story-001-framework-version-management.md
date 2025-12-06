---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-05T14:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 001 – Framework Version Management

**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-05  
**Last updated:** 2025-12-06 (v0.6.1.1+5 – Framework version tagging strategy created)  
**Version:** v0.6.1.1+5  
**Version:** v0.6.1.1+1  
**Code:** E6S01

---

## Task Checklist

- [x] **E6:S01:T01 – Define framework versioning strategy** - COMPLETE ✅
- [ ] **E6:S01:T02 – Create framework release processes** - TODO
- [ ] **E6:S01:T03 – Establish framework compatibility tracking** - TODO
- [x] **E6:S01:T04 – Design framework dependency architecture** - COMPLETE ✅
- [x] **E6:S01:T05 – Create framework version tagging strategy** - COMPLETE ✅
- [x] **E6:S01:T06 – Define Branch Context Policy** - COMPLETE ✅

---

## Overview

This story establishes version management processes for framework packages, ensuring proper versioning, release processes, and compatibility tracking.

---

## Goal

Establish comprehensive version management processes for framework packages.

---

## Tasks

### E6:S01:T01 – Define framework versioning strategy

**Input:** Current framework packages, versioning policies  
**Deliverable:** Framework versioning strategy document  
**Dependencies:** None  
**Blocker:** None

**Approach:**
1. Analyze current framework versioning practices
2. Define framework versioning strategy
3. Establish version numbering conventions
4. Document versioning policies

**Status:** ✅ COMPLETE

**Deliverables:**
- Framework versioning strategy document: `KB/Architecture/Standards_and_ADRs/framework-versioning-strategy.md`
- Defines Semantic Versioning (SemVer) for frameworks
- Establishes two-layer versioning (framework SemVer vs. dev-kit RC.EPIC.STORY.TASK+BUILD)
- Documents version numbering conventions, Git tagging strategy, and compatibility policies

---

### E6:S01:T02 – Create framework release processes

**Input:** Framework versioning strategy  
**Deliverable:** Framework release process documentation  
**Dependencies:** E6:S01:T01  
**Blocker:** None

**Approach:**
1. Design framework release workflows
2. Create release process documentation
3. Establish release criteria and gates
4. Document release procedures

---

### E6:S01:T03 – Establish framework compatibility tracking

**Input:** Framework versioning strategy  
**Deliverable:** Framework compatibility tracking system  
**Dependencies:** E6:S01:T01  
**Blocker:** None

**Approach:**
1. Define compatibility requirements
2. Create compatibility tracking mechanisms
3. Implement compatibility documentation
4. Document compatibility policies

---

### E6:S01:T04 – Design framework dependency architecture

**Input:** Framework versioning strategy, current framework structure  
**Deliverable:** Framework dependency architecture document  
**Dependencies:** E6:S01:T01  
**Blocker:** None

**Approach:**
1. Analyze current framework consumption patterns (copy-paste)
2. Design hybrid dependency architecture (Git submodules + CLI + package managers)
3. Define dependency management strategies (Git submodules, subtrees, npm/pip packages)
4. Create architecture decision record (ADR)
5. Document dependency versioning and update mechanisms

**Status:** ✅ COMPLETE

**Key Deliverables:**
- Framework dependency architecture document: `KB/Architecture/Standards_and_ADRs/framework-dependency-architecture.md`
- ADR for dependency management approach
- Comparison of dependency strategies (Git submodules vs subtrees vs package managers)
- Three-phase implementation roadmap (Git submodules → CLI tool → package managers)

---

### E6:S01:T05 – Create framework version tagging strategy

**Input:** Framework versioning strategy, dependency architecture  
**Deliverable:** Framework version tagging policy and implementation  
**Dependencies:** E6:S01:T01, E6:S01:T04  
**Blocker:** None

**Approach:**
1. Define semantic versioning strategy for frameworks (MAJOR.MINOR.PATCH)
2. Create Git tagging workflow for framework releases
3. Establish tag naming conventions (e.g., `framework-name-v2.0.0`)
4. Document tag-based versioning process
5. Create automated tagging scripts

**Status:** ✅ COMPLETE

**Key Deliverables:**
- Framework version tagging policy: `KB/Architecture/Standards_and_ADRs/framework-tagging-strategy.md`
- Git tagging workflow documentation
- Automated tagging scripts:
  - `scripts/framework-management/tag-framework-release.sh` - Create framework release tags
  - `scripts/framework-management/list-framework-tags.sh` - List framework tags
- Tag naming convention: `{framework-name}-v{MAJOR}.{MINOR}.{PATCH}`
- Integration with Git submodules, CLI tool, and package managers

---

### E6:S01:T06 – Define Branch Context Policy

**Input:** Current version file management, branch switching patterns  
**Deliverable:** Branch Context Policy document and implementation  
**Dependencies:** E6:S01:T01  
**Blocker:** None

**Approach:**
1. Analyze current version file state across epic branches
2. Define Branch Context Policy: version file must reflect highest version from that epic
3. Establish policy rules:
   - When switching TO a branch: version file must reflect highest version from that epic
   - When switching FROM a branch: version file should be updated to highest version from that epic
   - Version file should always reflect the branch's context
4. Document policy in versioning framework
5. Create automated tool/script to update version files on branch switch
6. Integrate into workflow management framework

**Key Deliverables:**
- Branch Context Policy document
- Policy integration into versioning framework
- Automated version file update tool/script
- Workflow integration (pre-commit hook or branch switch hook)

**Policy Definition:**
- **Term:** Branch Context Policy (also: Version-Branch Alignment Policy)
- **Purpose:** Ensure version file reflects correct epic context, showing last commit during work and highest version on branch switch
- **Rule:** 
  - **During active work:** Version file reflects the **last commit** on the current branch (current work context)
  - **When switching branches:** Version file is updated to the **highest version** from that epic (shows where epic left off)
- **Safeguards:** EPIC component must always match branch epic number; RW validates this; no automatic updates during active work

---

## Dependencies

**Blocks:**
- E6:S02 (Framework Update and Migration)

**Blocked By:**
- None

**Coordinates With:**
- Epic 5 (Documentation Management)
- Epic 7 (Examples & Adoption)

---

## References

- `KB/PM_and_Portfolio/kanban/epics/Epic-6/Epic-6.md`
- `packages/frameworks/`

