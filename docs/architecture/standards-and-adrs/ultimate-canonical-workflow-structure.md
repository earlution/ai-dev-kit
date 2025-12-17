---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T01:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Ultimate Canonical Workflow Structure

**Purpose:** Definitive specification for the canonical workflow structure  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Part of:** E6:S06:T06 – Cross-project meta-analysis and canonical framework design  
**Supersedes:** All previous workflow structure specifications

**Based on:** Comprehensive meta-analysis of 10 projects (9 client implementations + ai-dev-kit source)

---

## Executive Summary

This document **defines the ultimate canonical workflow structure** for ADK framework implementations. This is the **definitive specification** that all projects should adopt.

**The Ultimate Canonical Workflow Structure:**

```
{project-root}/
├── workflows/                       # Project workflows (canonical)
│   └── release-workflow.yaml
├── rw-config.yaml                   # Workflow configuration (canonical)
└── packages/frameworks/workflow mgt/workflows/  # Framework workflows
    └── release-workflow.yaml
```

**Key Specifications:**
- **Workflow File:** `{workflow-name}-workflow.yaml`
- **Release Workflow:** 12-step RW with mandatory branch safety check
- **Configuration:** `rw-config.yaml` in project root
- **Execution:** Agent-driven (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)
- **Progress Tracking:** Cursor TODO tracking

---

## 1. Workflow File Structure Specification

### 1.1 File Naming

**CANONICAL:** `{workflow-name}-workflow.yaml` (e.g., `release-workflow.yaml`)

**Examples:**
- `release-workflow.yaml`
- `package-version-workflow.yaml`

### 1.2 File Location

**CANONICAL:** `workflows/` directory in project root OR `packages/frameworks/workflow mgt/workflows/` (framework)

**Structure:**
```
{project-root}/
├── workflows/                       # Project workflows (canonical)
│   ├── release-workflow.yaml
│   └── package-version-workflow.yaml
├── packages/frameworks/workflow mgt/workflows/  # Framework workflows
│   ├── release-workflow.yaml
│   └── package-version-workflow.yaml
└── ...
```

---

## 2. Release Workflow (RW) Specification

### 2.1 Canonical 12-Step Release Workflow

**CANONICAL:** 12-step Release Workflow

**Step Structure:**
1. **🚨 MANDATORY BLOCKING: Branch Safety Check** - CRITICAL: Prevents cross-epic contamination
2. **Bump Version** - Update version file
3. **Create Detailed Changelog** - Generate detailed changelog
4. **Update Main Changelog** - Add summary entry
5. **Update README** - Update version badge (optional)
6. **Update BR/FR Docs** - Document fix attempts (optional)
7. **Auto-update Kanban Docs** - Update Epic/Story docs with version markers
8. **Stage Files** - Stage all modified files
9. **Run Validators** - Execute branch context and changelog format validators
10. **Commit Changes** - Create git commit with versioned message
11. **Create Git Tag** - Create annotated tag
12. **Push to Remote** - Push branch and tags

### 2.2 Step 1: Branch Safety Check (MANDATORY BLOCKING)

**CANONICAL:** Mandatory, blocking branch safety check

**Implementation:**
```bash
python packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py --strict
```

**Validation:**
- Current branch matches expected epic number
- Version matches branch context
- Task document exists (if applicable)

**Failure Handling:**
- **BLOCKING:** Workflow aborts if validation fails
- User must fix branch context before proceeding
- Clear error messages provided

### 2.3 Steps 2-12: Standard RW Steps

**Step 2: Bump Version**
- Load config from `rw-config.yaml`: `version_file`
- Increment `VERSION_BUILD`
- Update version comment

**Step 3: Create Detailed Changelog**
- Load config from `rw-config.yaml`: `changelog_dir`
- Generate: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.N.NNN.T+B.md`
- Include DO/CHECK/ACT phases

**Step 4: Update Main Changelog**
- Load config from `rw-config.yaml`: `main_changelog`
- Add summary entry to `CHANGELOG.md`
- Follow Keep a Changelog format

**Step 5: Update README**
- Load config from `rw-config.yaml`: `readme_file`
- Update version badge: `![Version](https://img.shields.io/badge/version-v0.N.NNN.T%2BB-blue.svg)`

**Step 6: Update BR/FR Docs**
- If BR/FR documents are linked, update them with fix attempts

**Step 7: Auto-update Kanban Docs**
- Load config from `rw-config.yaml`: `kanban_root`, `epic_doc_pattern`, `story_doc_pattern`
- Update Epic document with version marker
- Update Story document with version marker

**Step 8: Stage Files**
- Execute: `git add -A`
- Stage all modified files

**Step 9: Run Validators**
- Execute: `python packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py --strict`
- Execute: `python packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py`

**Step 10: Commit Changes**
- Execute: `git commit -m "Release v0.N.NNN.T+B: {description}"`

**Step 11: Create Git Tag**
- Execute: `git tag -a "v0.N.NNN.T+B" -m "Release v0.N.NNN.T+B: {description}"`

**Step 12: Push to Remote**
- Execute: `git push origin {branch} --tags`

---

## 3. Configuration Specification

### 3.1 Config File

**CANONICAL:** `rw-config.yaml` in project root

**Location:** `{project-root}/rw-config.yaml`

### 3.2 Config Structure

**CANONICAL FORMAT:**

```yaml
version_file: src/{project}/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md
story_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md
```

**Required Config:**
- `version_file`: Path to version file
- `main_changelog`: Path to main changelog
- `changelog_dir`: Path to changelog archive directory
- `scripts_path`: Path to workflow scripts

**Optional Config:**
- `readme_file`: Path to README file
- `use_kanban`: Whether to update Kanban docs
- `kanban_root`: Path to Kanban root
- `epic_doc_pattern`: Epic document pattern
- `story_doc_pattern`: Story document pattern

---

## 4. Execution Pattern Specification

### 4.1 Agent-Driven Execution

**CANONICAL:** ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED

**Execution Flow:**
1. **ANALYZE:** Analyze current state and requirements
2. **DETERMINE:** Determine actions needed
3. **EXECUTE:** Execute actions with user approval
4. **VALIDATE:** Validate results
5. **PROCEED:** Proceed to next step or abort

### 4.2 Progress Tracking

**CANONICAL:** Cursor TODO tracking

**Format:**
```markdown
- [x] Step 1: Branch Safety Check - completed
- [x] Step 2: Bump Version - completed
- [ ] Step 3: Create Detailed Changelog - in_progress
- [ ] Step 4: Update Main Changelog - pending
```

### 4.3 Atomicity

**CANONICAL:** Complete all steps or abort

**Requirement:**
- All steps must complete successfully
- Abort on any step failure
- Rollback on failure (if applicable)
- Clear error messages

---

## 5. Validation Specification

### 5.1 Branch Context Validation

**CANONICAL:** `validate_branch_context.py --strict`

**Implementation:**
```bash
python packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py --strict
```

**Validation:**
- Current branch matches expected epic number
- Version matches branch context
- Task document exists (if applicable)

### 5.2 Changelog Format Validation

**CANONICAL:** `validate_changelog_format.py`

**Implementation:**
```bash
python packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py
```

**Validation:**
- Changelog format matches Keep a Changelog standard
- Version ordering (newest first)
- Entry format correctness

---

## 6. Workflow YAML Structure Specification

### 6.1 YAML Format

**CANONICAL FORMAT:**

```yaml
workflow:
  name: release-workflow
  description: Canonical 12-step Release Workflow
  steps:
    - step: 1
      name: Branch Safety Check
      handler: validate_branch_context
      blocking: true
      mandatory: true
    - step: 2
      name: Bump Version
      handler: bump_version
      blocking: true
      mandatory: true
    # ... additional steps
```

**Required Fields:**
- `step`: Step number
- `name`: Step name
- `handler`: Handler function/script
- `blocking`: Whether step blocks workflow
- `mandatory`: Whether step is mandatory

---

## 7. Complete Structure Example

**CANONICAL STRUCTURE:**

```
{project-root}/
├── workflows/
│   └── release-workflow.yaml
├── rw-config.yaml
├── packages/frameworks/workflow mgt/
│   └── workflows/
│       └── release-workflow.yaml
└── ...
```

---

## 8. Validation Rules

### 8.1 Workflow File Validation

**Required:**
- Workflow file naming: `{workflow-name}-workflow.yaml`
- Workflow file location: `workflows/` or framework location
- YAML structure is valid
- Step definitions are complete

### 8.2 Execution Validation

**Required:**
- Branch safety check passes (Step 1)
- All mandatory steps complete successfully
- Validators pass (Step 9)
- No blocking errors

---

## 9. Implementation

### 9.1 Installation

**CANONICAL METHOD:** Create workflow files and config following this specification

**Installation Steps:**
1. Create `workflows/` directory in project root
2. Create `release-workflow.yaml` following canonical format
3. Create `rw-config.yaml` in project root
4. Configure workflow handlers and scripts

### 9.2 Execution

**CANONICAL METHOD:** Agent-driven execution via `.cursorrules` RW trigger

**Execution Process:**
1. User types "RW" or "Release Workflow"
2. Agent analyzes current state
3. Agent determines actions needed
4. Agent executes steps with user approval
5. Agent validates results
6. Agent proceeds to next step or aborts

---

**Last Updated:** 2025-12-18  
**Version:** 1.0.0  
**Status:** COMPLETE
