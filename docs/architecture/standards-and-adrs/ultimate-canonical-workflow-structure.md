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
- **Release Workflow:** 13-step RW with mandatory branch safety check and agentic intelligence
- **Configuration:** `rw-config.yaml` in project root
- **Execution:** Agent-driven with intelligent decision-making (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)
- **Agentic Intelligence:** Task-driven validation, knowledge gap analysis, documentation generation
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

### 2.1 Canonical 13-Step Release Workflow

**CANONICAL:** 13-step Release Workflow with agentic intelligence

**Step Structure:**
1. **🚨 MANDATORY BLOCKING: Branch Safety Check** - CRITICAL: Prevents cross-epic contamination
2. **🤖 AGENTIC: Task-Driven Validation** - CRITICAL: Validates work is task-driven, blocks if no task
3. **Bump Version** - Update version file
4. **Create Detailed Changelog** - Generate detailed changelog
5. **Update Main Changelog** - Add summary entry
6. **Update README** - Update version badge (optional)
7. **Update BR/FR Docs** - Document fix attempts (optional)
8. **Auto-update Kanban Docs** - Update Epic/Story/Task docs with version markers
9. **🤖 AGENTIC: Update Knowledge Base** - Update existing docs, evaluate gaps, author new articles
10. **Stage Files** - Stage all modified files
11. **Run Validators** - Execute branch context and changelog format validators
12. **Commit Changes** - Create git commit with versioned message
13. **Create Git Tag** - Create annotated tag
14. **Push to Remote** - Push branch and tags

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

### 2.3 Step 2: Task-Driven Validation (AGENTIC - MANDATORY BLOCKING)

**CANONICAL:** Agentic validation that work is task-driven

**Agentic Intelligence Required:**
- **ANALYZE:** Examine staged changes and current version
- **DETERMINE:** Identify if work corresponds to a Kanban task
- **VALIDATE:** Check if Task document exists for current version (E{epic}:S{story}:T{task})
- **DECIDE:** If no task exists → BLOCK workflow, provide feedback to user

**Implementation:**
```python
# Agent must:
1. Parse current version: VERSION_EPIC, VERSION_STORY, VERSION_TASK
2. Construct expected Task document path: docs/project-management/kanban/epics/Epic-{epic}/Story-{story}-*/Task-{task}-*.md
3. Check if Task document exists
4. If NO TASK DOCUMENT:
   - BLOCK workflow execution
   - Provide clear feedback: "No Kanban task found for version {version}. Work must be task-driven."
   - Suggest: "Create task document or verify version matches existing task."
   - Abort workflow
5. If TASK DOCUMENT EXISTS:
   - Verify task status (should be IN PROGRESS or similar)
   - Proceed to Step 3
```

**Failure Handling:**
- **BLOCKING:** Workflow aborts if no task document found
- User must create task or correct version before proceeding
- Clear error messages with actionable guidance

### 2.4 Steps 3-8: Standard RW Steps

**Step 3: Bump Version**
- Load config from `rw-config.yaml`: `version_file`
- Increment `VERSION_BUILD`
- Update version comment

**Step 4: Create Detailed Changelog**
- Load config from `rw-config.yaml`: `changelog_dir`
- Generate: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.N.NNN.T+B.md`
- Include DO/CHECK/ACT phases

**Step 5: Update Main Changelog**
- Load config from `rw-config.yaml`: `main_changelog`
- Add summary entry to `CHANGELOG.md`
- Follow Keep a Changelog format

**Step 6: Update README**
- Load config from `rw-config.yaml`: `readme_file`
- Update version badge: `![Version](https://img.shields.io/badge/version-v0.N.NNN.T%2BB-blue.svg)`

**Step 7: Update BR/FR Docs**
- If BR/FR documents are linked, update them with fix attempts

**Step 8: Auto-update Kanban Docs**
- Load config from `rw-config.yaml`: `kanban_root`, `epic_doc_pattern`, `story_doc_pattern`, `task_doc_pattern`
- Update Epic document with version marker
- Update Story document with version marker
- Update Task document with version marker (decomposed Kanban structure)

**Step 9: Update Knowledge Base (AGENTIC)**
- **ANALYZE:** Examine changes made in this release
- **DETERMINE:** Identify which knowledge base documents may need updates
- **EVALUATE:** Agent evaluates if documentation gaps exist
- **DECIDE:** Should we create new documentation?
- **AUTHOR:** If gap identified, agent can author new knowledge base article(s)

**Agentic Intelligence Required:**
```python
# Agent must:
1. Analyze staged changes and changelog content
2. Identify knowledge base areas affected:
   - Architecture docs (if structural changes)
   - Analysis docs (if patterns discovered)
   - Use cases (if new patterns emerged)
   - Reviews (if applicable)
3. Check for existing knowledge base docs that reference changed areas
4. Update pre-existing knowledge base docs with new information
5. EVALUATE documentation gaps:
   - Is there a pattern/insight that should be documented?
   - Would a knowledge base article be valuable?
   - Can the agent author a new article?
6. If gap identified and agent can author:
   - Create new knowledge base article in appropriate location
   - Follow canonical knowledge base structure
   - Include proper frontmatter and metadata
7. If gap identified but agent cannot author:
   - Flag for user review
   - Suggest article topic and location
```

**Step 10: Stage Files**
- Execute: `git add -A`
- Stage all modified files (including any new knowledge base articles)

**Step 11: Run Validators**
- Execute: `python packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py --strict`
- Execute: `python packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py`

**Step 12: Commit Changes**
- Execute: `git commit -m "Release v0.N.NNN.T+B: {description}"`

**Step 13: Create Git Tag**
- Execute: `git tag -a "v0.N.NNN.T+B" -m "Release v0.N.NNN.T+B: {description}"`

**Step 14: Push to Remote**
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
task_doc_pattern: epics/Epic-{epic}/Story-{story}-*/Task-{task}-*.md
knowledge_base_root: docs/knowledge
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
- `task_doc_pattern`: Task document pattern (required if use_kanban: true)
- `knowledge_base_root`: Path to knowledge base root

---

## 4. Execution Pattern Specification

### 4.1 Agent-Driven Execution with Intelligence

**CANONICAL:** ANALYZE → DETERMINE → EVALUATE → DECIDE → EXECUTE → VALIDATE → PROCEED

**Execution Flow:**
1. **ANALYZE:** Analyze current state, requirements, and context
2. **DETERMINE:** Determine actions needed based on analysis
3. **EVALUATE:** Evaluate options, gaps, and opportunities (agentic intelligence)
4. **DECIDE:** Make intelligent decisions (e.g., task validation, documentation gaps)
5. **EXECUTE:** Execute actions with user approval
6. **VALIDATE:** Validate results
7. **PROCEED:** Proceed to next step or abort

**Agentic Intelligence Points:**
- **Step 2:** Task-driven validation (must have Kanban task)
- **Step 9:** Knowledge base gap analysis and article authoring
- **Throughout:** Intelligent decision-making based on context

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

### 5.2 Task-Driven Validation (Agentic)

**CANONICAL:** Agent validates work is task-driven before proceeding

**Implementation:**
- Agent analyzes current version (E{epic}:S{story}:T{task})
- Agent constructs expected Task document path using `task_doc_pattern`
- Agent checks if Task document exists
- If no task: BLOCK workflow, provide feedback
- If task exists: Proceed to version bump

**Validation:**
- Task document must exist for current version
- Task must be in appropriate status (IN PROGRESS, etc.)
- Work must be traceable to Kanban task

### 5.3 Changelog Format Validation

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
      name: Task-Driven Validation
      handler: validate_task_driven
      blocking: true
      mandatory: true
      agentic: true
    - step: 3
      name: Bump Version
      handler: bump_version
      blocking: true
      mandatory: true
    # ... additional steps
    - step: 9
      name: Update Knowledge Base
      handler: update_knowledge_base
      blocking: false
      mandatory: false
      agentic: true
```

**Required Fields:**
- `step`: Step number
- `name`: Step name
- `handler`: Handler function/script
- `blocking`: Whether step blocks workflow
- `mandatory`: Whether step is mandatory

**Optional Fields:**
- `agentic`: Whether step requires agentic intelligence (default: false)

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
- Task-driven validation passes (Step 2) - CRITICAL: Work must be task-driven
- All mandatory steps complete successfully
- Validators pass (Step 11)
- No blocking errors
- Knowledge base updates complete (Step 9)

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
2. Agent analyzes current state and context
3. Agent validates branch safety (Step 1)
4. **Agent validates task-driven work (Step 2)** - CRITICAL: Blocks if no task
5. Agent determines actions needed for each step
6. Agent executes steps with user approval
7. **Agent evaluates knowledge base gaps (Step 9)** - Can author new articles
8. Agent validates results
9. Agent proceeds to next step or aborts

**Agentic Intelligence Highlights:**
- **Step 2:** Must validate work is task-driven before proceeding
- **Step 9:** Evaluates documentation gaps and can author new knowledge base articles
- **Throughout:** Intelligent decision-making based on context and analysis

---

**Last Updated:** 2025-12-18  
**Version:** 1.0.0  
**Status:** COMPLETE
