---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T01:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Ultimate Canonical Kanban Structure

**Purpose:** Definitive specification for the canonical Kanban E/S/T (Epic/Story/Task) structure  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Part of:** E6:S06:T06 – Cross-project meta-analysis and canonical framework design  
**Supersedes:** All previous Kanban structure specifications

**Based on:** Comprehensive meta-analysis of 10 projects (9 client implementations + ai-dev-kit source)

---

## Executive Summary

This document **defines the ultimate canonical Kanban structure** for ADK framework implementations. This is the **definitive specification** that all projects should adopt.

**The Ultimate Canonical Kanban Structure:**

```
KB/PM_and_Portfolio/kanban/epics/
├── Epic-1/
│   ├── Epic-1.md
│   ├── Story-001-{description}/
│   │   ├── Story-001-{description}.md
│   │   └── T01-{description}.md (optional)
│   └── Story-002-{description}/
│       └── Story-002-{description}.md
├── Epic-2/
│   └── ...
└── Epic-{N}/
    └── ...
```

**Key Specifications:**
- **Epic Naming:** `Epic-{N}` (hyphen, e.g., `Epic-1`, `Epic-9`)
- **Epic Range:** 1-23 (canonical), 24+ (project-specific)
- **Story Naming:** `Story-{NNN}-{description}` (3-digit padding)
- **Task Naming:** `E{epic}:S{story}:T{task}` (full context, 2-digit padding)
- **Task Organization:** Hybrid (embedded for small tasks, separate files for large tasks)

---

## 1. Epic Structure Specification

### 1.1 Epic Naming

**CANONICAL:** `Epic-{N}` (hyphen, e.g., `Epic-1`, `Epic-9`)

**Examples:**
- `Epic-1`
- `Epic-9`
- `Epic-21`

### 1.2 Epic Numbering

**CANONICAL RANGE:** Epics 1-23
- **Core Epics (1-8):** Framework core epics
- **Ancillary Epics (9-21):** Standard ancillary epics
- **Extended Epics (22-23):** Extended framework epics

**PROJECT-SPECIFIC RANGE:** Epics 24+
- For project-specific work that doesn't fit canonical epics

**Epic Inventory (Canonical):**
- **Epic 1:** `{PROJECT_NAME} Core` (generic placeholder)
- **Epic 2:** Workflow Management Framework
- **Epic 3:** Numbering & Versioning Framework
- **Epic 4:** Kanban Framework
- **Epic 5:** Documentation Management
- **Epic 6:** Framework Management and Maintenance
- **Epic 7:** Codebase Maintenance and Review
- **Epic 8:** Tooling & Automation
- **Epic 9:** User Management and Authentication
- **Epic 10-21:** (See canonical epic templates)
- **Epic 22-23:** Extended framework epics

### 1.3 Epic Directory Structure

**CANONICAL PATH:** `KB/PM_and_Portfolio/kanban/epics/Epic-{N}/`

**Directory Structure:**
```
KB/PM_and_Portfolio/kanban/epics/
├── Epic-1/
│   ├── Epic-1.md                    # Epic overview document
│   ├── Story-001-{description}/
│   │   ├── Story-001-{description}.md
│   │   └── T01-{description}.md     # Optional: separate task files
│   └── Story-002-{description}/
│       └── Story-002-{description}.md
├── Epic-2/
│   └── ...
└── Epic-{N}/
    └── ...
```

### 1.4 Epic Document Structure

**CANONICAL FORMAT:**

```markdown
---
lifecycle: evergreen
ttl_days: null
created_at: YYYY-MM-DDTHH:MM:SSZ
expires_at: null
housekeeping_policy: keep
---

# Epic {N}: {Epic Name}

**Status:** TODO | IN PROGRESS | COMPLETE  
**Priority:** CRITICAL | HIGH | MEDIUM | LOW  
**Created:** YYYY-MM-DD  
**Last updated:** YYYY-MM-DD (v0.N.NNN.T+B – {description})  
**Version:** v0.N.NNN.T+B  
**Code:** E{N}

---

## Story Checklist

- [ ] **E{N}:S{NNN} – {Story Name}** - TODO | IN PROGRESS | COMPLETE ✅ (v0.N.NNN.T+B)
- [ ] **E{N}:S{NNN} – {Story Name}** - TODO | IN PROGRESS | COMPLETE ✅ (v0.N.NNN.T+B)

---

## Overview

{Epic description}

---

## Stories

### E{N}:S{NNN} – {Story Name}

{Story description}

[Link to Story document](Story-{NNN}-{description}/Story-{NNN}-{description}.md)

---
```

**Required Sections:**
- Frontmatter (lifecycle metadata)
- Header (Status, Priority, Created, Last updated, Version, Code)
- Story Checklist
- Overview
- Stories (with links)

---

## 2. Story Structure Specification

### 2.1 Story Naming

**CANONICAL:** `Story-{NNN}-{description}` (3-digit padding, e.g., `Story-001-project-setup.md`)

**Examples:**
- `Story-001-project-setup.md`
- `Story-010-user-authentication.md`
- `Story-100-api-integration.md`

### 2.2 Story Directory Structure

**CANONICAL PATH:** `KB/PM_and_Portfolio/kanban/epics/Epic-{N}/Story-{NNN}-{description}/`

**Directory Structure:**
```
Story-{NNN}-{description}/
├── Story-{NNN}-{description}.md     # Story document (required)
├── T01-{description}.md              # Optional: separate task files
├── T02-{description}.md
└── ...
```

### 2.3 Story Document Structure

**CANONICAL FORMAT:**

```markdown
---
lifecycle: evergreen
ttl_days: null
created_at: YYYY-MM-DDTHH:MM:SSZ
expires_at: null
housekeeping_policy: keep
---

# Story {NNN}: {Story Name}

**Status:** TODO | IN PROGRESS | COMPLETE  
**Priority:** CRITICAL | HIGH | MEDIUM | LOW  
**Created:** YYYY-MM-DD  
**Last updated:** YYYY-MM-DD (v0.N.NNN.T+B – {description})  
**Version:** v0.N.NNN.T+B  
**Code:** E{N}S{NNN}

---

## Task Checklist

- [ ] **E{N}:S{NNN}:T{NN} – {Task Name}** - TODO | IN PROGRESS | COMPLETE ✅ (v0.N.NNN.T+B)
- [ ] **E{N}:S{NNN}:T{NN} – {Task Name}** - TODO | IN PROGRESS | COMPLETE ✅ (v0.N.NNN.T+B)

---

## Overview

{Story description}

---

## Tasks

### E{N}:S{NNN}:T{NN} – {Task Name}

**Status:** TODO | IN PROGRESS | COMPLETE  
**Input:** {What is required to start this task}  
**Deliverable:** {What is produced by this task}  
**Acceptance Criteria:**
- [ ] {Criterion 1}
- [ ] {Criterion 2}

**Dependencies:** {Optional: List of dependencies}  
**Blocker:** {Optional: What's blocking this}  
**Approach:** {Optional: Step-by-step approach}  
**Files:** {Optional: Files to create/modify}  
**Progress Notes:** {Optional: Progress updates}  
**Version:** v0.N.NNN.T+B

[Link to separate task file if applicable](T{NN}-{description}.md)

---
```

**Required Sections:**
- Frontmatter (lifecycle metadata)
- Header (Status, Priority, Created, Last updated, Version, Code)
- Task Checklist
- Overview
- Tasks (embedded or linked)

---

## 3. Task Structure Specification

### 3.1 Task Naming

**CANONICAL:** `E{epic}:S{story}:T{task}` (full context, required, e.g., `E6:S06:T01`)

**Padding:** 2-digit (`T01`, `T02`, `T10`)

**Examples:**
- `E6:S06:T01`
- `E1:S01:T10`
- `E9:S21:T05`

### 3.2 Task Organization

**CANONICAL:** Hybrid approach
- **Small Tasks:** Embedded in Story document (default)
- **Large Tasks:** Separate files in `Story-{NNN}/T{task}-{description}.md`
- **Always:** Task checklist in Story document

**File Naming (for separate files):**
- **CANONICAL:** `T{task}-{description}.md` (e.g., `T01-project-setup.md`)
- **Location:** `Story-{NNN}/T{task}-{description}.md`

### 3.3 Task Document Structure

**CANONICAL FORMAT (Embedded in Story):**

```markdown
### E{N}:S{NNN}:T{NN} – {Task Name}

**Status:** TODO | IN PROGRESS | COMPLETE  
**Input:** {What is required to start this task}  
**Deliverable:** {What is produced by this task}  
**Acceptance Criteria:**
- [ ] {Criterion 1}
- [ ] {Criterion 2}

**Dependencies:** {Optional: List of dependencies}  
**Blocker:** {Optional: What's blocking this}  
**Approach:** {Optional: Step-by-step approach}  
**Files:** {Optional: Files to create/modify}  
**Progress Notes:** {Optional: Progress updates}  
**Version:** v0.N.NNN.T+B
```

**CANONICAL FORMAT (Separate File):**

```markdown
---
lifecycle: evergreen
ttl_days: null
created_at: YYYY-MM-DDTHH:MM:SSZ
expires_at: null
housekeeping_policy: keep
---

# Task E{N}:S{NNN}:T{NN} – {Task Name}

**Status:** TODO | IN PROGRESS | COMPLETE  
**Input:** {What is required to start this task}  
**Deliverable:** {What is produced by this task}  
**Acceptance Criteria:**
- [ ] {Criterion 1}
- [ ] {Criterion 2}

**Dependencies:** {Optional: List of dependencies}  
**Blocker:** {Optional: What's blocking this}  
**Approach:** {Optional: Step-by-step approach}  
**Files:** {Optional: Files to create/modify}  
**Progress Notes:** {Optional: Progress updates}  
**Version:** v0.N.NNN.T+B
```

**Required Fields:**
- Task ID (`E{epic}:S{story}:T{task}`)
- Status
- Input
- Deliverable
- Acceptance Criteria

**Optional Fields:**
- Dependencies
- Blocker
- Parallel Development Candidacy
- Approach/Method
- Files to Create/Modify
- Progress Notes
- Version

---

## 4. Complete Structure Example

**CANONICAL STRUCTURE:**

```
KB/PM_and_Portfolio/kanban/epics/
├── Epic-1/
│   ├── Epic-1.md
│   ├── Story-001-project-setup/
│   │   ├── Story-001-project-setup.md
│   │   └── T01-initial-config.md
│   └── Story-002-core-features/
│       └── Story-002-core-features.md
├── Epic-6/
│   ├── Epic-6.md
│   ├── Story-006-adk-implementation-analysis/
│   │   ├── Story-006-adk-implementation-analysis.md
│   │   └── T06-cross-project-meta-analysis.md
│   └── Story-007-framework-hardening/
│       └── Story-007-framework-hardening.md
└── Epic-24/
    ├── Epic-24.md
    └── Story-001-project-specific-work/
        └── Story-001-project-specific-work.md
```

---

## 5. Validation Rules

### 5.1 Epic Validation

**Required:**
- Epic naming: `Epic-{N}` format
- Epic numbering: 1-23 (canonical) or 24+ (project-specific)
- Epic directory: `KB/PM_and_Portfolio/kanban/epics/Epic-{N}/`
- Epic document: `Epic-{N}.md` exists
- Story checklist present in Epic document

### 5.2 Story Validation

**Required:**
- Story naming: `Story-{NNN}-{description}` format (3-digit padding)
- Story directory: `Story-{NNN}-{description}/` exists
- Story document: `Story-{NNN}-{description}.md` exists
- Task checklist present in Story document

### 5.3 Task Validation

**Required:**
- Task naming: `E{epic}:S{story}:T{task}` format (full context, 2-digit padding)
- Task structure includes required fields
- Task checklist present in Story document

---

## 6. Critical Requirements

### 6.1 Epic 9 Mismatch Fix

**CRITICAL:** ai-dev-kit source Epic 9 "Book Related Work" must be renamed to Epic 24+ (project-specific range)

**Current (WRONG):**
- Epic 9: "Book Related Work" (project-specific)

**Canonical (CORRECT):**
- Epic 9: "User Management and Authentication" (canonical)

**Action Required:**
- Rename ai-dev-kit's Epic 9 to Epic 24+
- Update all Epic 9 references
- Ensure canonical Epic 9 template matches "User Management and Authentication"

### 6.2 Installer Validation

**CRITICAL:** Installer must validate canonical epics installation and prevent Epic mashup

**Validation Rules:**
- Check for Epic 9 "Book Related Work" (should be Epic 24+)
- Validate that canonical epics match templates
- Warn if ai-dev-kit's actual Kanban structure detected

### 6.3 Clear Separation

**CRITICAL:** Clear separation between canonical templates and ai-dev-kit's actual Kanban

**Requirements:**
- Canonical templates in `packages/frameworks/kanban/templates/`
- ai-dev-kit's actual Kanban in `KB/PM_and_Portfolio/kanban/epics/`
- Clear documentation of distinction

---

## 7. Implementation

### 7.1 Installation

**CANONICAL METHOD:** Use installer (`install_kanban_framework.py`)

**Installation Steps:**
1. Run installer: `python packages/frameworks/kanban/scripts/install_kanban_framework.py`
2. Select canonical epics to install
3. Installer validates and installs canonical structure
4. Installer prevents Epic mashup

**DO NOT:** Manually copy ai-dev-kit's actual Kanban structure (causes Epic mashup)

### 7.2 Template System

**CANONICAL TEMPLATES:**
- Epic templates: `packages/frameworks/kanban/templates/epics/Epic-{N}-{name}.md`
- Story templates: `packages/frameworks/kanban/templates/stories/Epic-{N}/Story-{NNN}-{name}.md`
- Task templates: `packages/frameworks/kanban/templates/tasks/Epic-{N}/Story-{NNN}/T{NN}-{name}.md`

**Template Count:**
- 21 epic templates (Epics 1-21)
- 62+ story templates
- 193+ task templates

---

**Last Updated:** 2025-12-18  
**Version:** 1.0.0  
**Status:** COMPLETE
