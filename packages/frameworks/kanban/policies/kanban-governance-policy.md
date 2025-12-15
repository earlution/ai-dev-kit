---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: kanban-governance-policy
  type: governance
  domain:
    primary: kanban
    secondary: ["project-management", "workflow", "versioning"]
  audience: ["agents", "developers", "epic-owners", "story-owners", "project-leadership"]
  applies_to:
    documents:
      - "KB/PM_and_Portfolio/kanban/**"
      - "packages/frameworks/kanban/**"
    activities:
      - "fr-br-intake"
      - "task-creation"
      - "story-creation"
      - "epic-creation"
      - "release-workflow"
    components:
      - "kanban-board"
      - "epic-docs"
      - "story-docs"
      - "task-docs"
      - "version-file"
  key_rules:
    - id: KG-R1
      summary: "All substantive work MUST be task-driven. If work doesn't map to a task, the Kanban needs updating."
      must_level: MUST
      when_applies:
        - "any work being performed"
        - "fr-br-intake"
      enforcement:
        owner: ["story-owners", "epic-owners"]
        mechanisms:
          - "release-workflow-validation"
          - "kanban-board-checks"
      validation_hints:
        - "verify task document exists for all work"
        - "check task is linked to story and epic"
        - "ensure version matches task"
    - id: KG-R2
      summary: "Every Feature Request (FR) and Bug Report (BR) MUST result in at least one Kanban Task."
      must_level: MUST
      when_applies:
        - "fr-br-intake"
        - "fr-br-committed"
      enforcement:
        owner: ["fr-br-intake-workflow"]
        mechanisms:
          - "fr-br-intake-validation"
          - "task-creation-workflow"
      validation_hints:
        - "check FR/BR document has assigned task"
        - "verify task document exists"
        - "ensure task links back to FR/BR"
    - id: KG-R3
      summary: "Tasks must always live under a Story, which must always live under an Epic (once epics are in use)."
      must_level: MUST
      when_applies:
        - "task-creation"
        - "story-creation"
        - "epic-creation"
      enforcement:
        owner: ["kanban-workflow"]
        mechanisms:
          - "task-creation-validation"
          - "story-creation-validation"
      validation_hints:
        - "verify task has parent story"
        - "verify story has parent epic"
        - "check epic exists and is active"
    - id: KG-R4
      summary: "FR/BR → Task → Story → Epic flow must be followed: check for existing Story first, then Epic, then create new Epic if needed."
      must_level: MUST
      when_applies:
        - "fr-br-intake"
      enforcement:
        owner: ["fr-br-intake-workflow"]
        mechanisms:
          - "intake-decision-flow"
          - "semantic-matching"
      validation_hints:
        - "check for existing story match before creating new"
        - "check for existing epic match before creating new"
        - "verify proper hierarchy created"
    - id: KG-R5
      summary: "Version numbers follow RC.EPIC.STORY.TASK+BUILD schema and must align with Kanban structure."
      must_level: MUST
      when_applies:
        - "version-bump"
        - "release-workflow"
      enforcement:
        owner: ["release-workflow"]
        mechanisms:
          - "validate_version_bump.py"
          - "validate_branch_context.py"
      validation_hints:
        - "verify version matches epic/story/task"
        - "check version increment follows rules"
        - "ensure version file synced with kanban docs"
  decision_criteria:
    - id: KG-DC1
      question: "Does this FR/BR match an existing Story's scope?"
      yes_action: "Create new Task under existing Story."
      no_action: "Check for existing Epic match."
    - id: KG-DC2
      question: "Does this FR/BR match an existing Epic's problem domain?"
      yes_action: "Create new Story under existing Epic, then Task."
      no_action: "Create new Epic, then Story, then Task."
    - id: KG-DC3
      question: "Does this work map to an existing Task?"
      yes_action: "Use existing Task or create new Task if scope differs."
      no_action: "Create new Task under appropriate Story."
  triggers:
    - id: KG-T1
      event: "fr-br-committed"
      required_checks:
        - "verify_task_created"
        - "verify_task_linked_to_fr-br"
    - id: KG-T2
      event: "task-completed"
      required_checks:
        - "verify_kanban_docs_updated"
        - "verify_version_marker_added"
    - id: KG-T3
      event: "release-workflow-started"
      required_checks:
        - "verify_task_document_exists"
        - "verify_version_alignment"
  integration_points:
    - id: KG-IP1
      component: "release-workflow"
      step: "step-2-version-bump"
      behavior: "validate version matches kanban task structure"
    - id: KG-IP2
      component: "release-workflow"
      step: "step-7-kanban-docs-update"
      behavior: "auto-update story/epic docs with version markers and task status"
    - id: KG-IP3
      component: "fr-br-intake-workflow"
      behavior: "create tasks from FR/BR with proper hierarchy"
  related_policies:
    - "KB/Architecture/Standards_and_ADRs/dev-kit-versioning-policy.md"
    - "packages/frameworks/numbering & versioning/versioning-policy.md"
    - "packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
---

# Kanban Governance Policy

**Owner:** Product Ops / Project Leadership  
**Last Updated:** 2025-12-02  
**Applies To:** All work streams that adopt this Kanban system (project-agnostic)  
**Source Example:** Confidentia project (original implementation), fynd.deals Epic 15 (operational patterns)

---

## Purpose

A single, authoritative policy describing how to run Kanban with:

- Work-item types (Epic → Story → Task) and how they map to Git artifacts  
- Documentation, numbering, and versioning requirements  
- Rituals (board usage, stand-ups, release workflow) linked to the knowledge base

This document originated in the **Confidentia** project but is written so it can be **ported to any project** by:

- Updating **file paths** to your own KB structure  
- Updating **terminology** (e.g., Epic/Story/Task vs Theme/Epic/Story)  
- Integrating with your own **versioning policy** and **workflow rules**

**Foundation:** In the original project, this policy is underpinned by Cursor rules (`.cursorrules`). For your project, treat `.cursorrules` (or equivalent automation/config) as the **enforcement layer** for this policy.

---

## The Harmonious Cycle

Work flows in perfect harmony:

```
Task (Kanban)
  → defines what to do
    → Version (RC.EPIC.STORY.TASK+BUILD)
      → tracks the work
        → Release Workflow
          → implements both policies
            → Kanban Update
              → records the version (forensic marker)
                → Repeat
```

**Principle:** All substantive work MUST be task-driven.
If work doesn't map to a task, the Kanban needs updating.

**FR/BR Source of Truth:**  
- Every **Feature Request (FR)** and **Bug Report (BR)** MUST result in at least one **Kanban Task**.  
- Tasks must always live **under a Story**, which must always live **under an Epic** (once epics are in use for the project).

**FR/BR → Task → Story → Epic flow (canonical rule):**

1. **FR/BR arrives** (issue tracker, support channel, notes, etc.).
2. **Check for existing Story** that matches the FR/BR scope:
   - If found → create a **new Task document** under that Story.
3. **If no Story exists** for this area:
   - Create a new Story under the **appropriate Epic**.
   - Then create the **Task document** under that Story.
4. **If no Epic exists** for this problem domain:
   - Create a new, conceptually broad **Epic** to host the new Story.
   - Then create the Story under that Epic.
   - Then create the **Task document** under that Story.

**CRITICAL:** No FR/BR should exist without a corresponding **Task document** anchored to a Story (and, once epics are in use, an Epic). This keeps Kanban, versioning, and release workflow aligned.

---

## Board Structure

Five columns, left to right:

1. **Backlog** – Groomed but unscheduled
2. **Ready** – Fully specified, awaiting prioritisation
3. **In Progress** – Active work with branch
4. **Verify** – Done, awaiting validation
5. **Done** – Released, tagged, validated

**Rules:**
- Move strictly left → right (no skipping)
- WIP limits per swimlane
- Every card links to KB doc and branch/tag

---

## Work Items

### Epics

Governing artifact for a feature set or maintenance theme.

- **Location (example patterns):**
  - **Separate directories:** `KB/PM_and_Portfolio/epics/overview/Epic XX/Epic-XX.md`  
  - **Consolidated Kanban:** `KB/PM_and_Portfolio/kanban/epics/Epic-XX.md` (all Kanban docs in one place)
  - Replace with your KB path for epic overview docs.
- **Branch (example convention):** `epic/<number>-<slug>`  
  - Adjust to your branching strategy if different.
- **Version (when using RC.EPIC.STORY.TASK+BUILD):** `RC.EPIC.STORY.TASK+BUILD` (where EPIC = epic number)
- **Template (example):** `KB/PM_and_Portfolio/epics/templates/EPIC_TEMPLATE.md` or `KB/PM_and_Portfolio/kanban/epics/templates/EPIC_TEMPLATE.md`

**Consolidated Structure Pattern:**
If using a single `kanban/` directory, Epics live at `kanban/epics/Epic-X.md` with Stories under `kanban/epics/Epic-X/stories/`. This keeps all Kanban docs discoverable in one location.

### Stories

Decompose epic scope into releasable slices.

- **Location (example patterns):**
  - **Separate directories:** `KB/PM_and_Portfolio/stories/overview/Epic XX/Story-N-Title.md`
  - **Consolidated Kanban:** `KB/PM_and_Portfolio/kanban/epics/Epic-X/stories/Story-N-Title.md`
- **Numbering (example):** `E<epic>S<story>` (e.g., `E20S7`)
- **Template (example):** `KB/PM_and_Portfolio/stories/templates/STORY_TEMPLATE.md` or `KB/PM_and_Portfolio/kanban/epics/templates/STORY_TEMPLATE.md`

**Story Directories:** In consolidated structures, Stories live in `Epic-X/stories/` directories, allowing for associated files (diagrams, notes, etc.) alongside the Story document.

### Tasks

Atomic units inside a story.

**CRITICAL: 3-Tier Structure Requirement**

All work MUST follow the explicit **3-tier structure**: Epic → Story → Task. This structure is **mandatory** and **non-negotiable**.

- **Epic** contains Stories (high-level scope)
- **Story** contains Tasks (releasable slices)
- **Task** is the atomic work unit (implementation detail)

**No implicit or inline tasks are permitted.** Every task MUST be explicitly documented at the Task tier.

**Task Document Requirements**

Every Task MUST have a discrete Task document (or clearly delimited section within the Story document using the Task ID as a header). Tasks cannot be implicit, bundled, or introduced inline.

**Task Document Formats:**

1. **Separate File Format (Recommended):**
   - Location: `kanban/epics/Epic-X/Story-XXX/Task-YYY-description.md` or `kanban/epics/Epic-X/Story-XXX/TYYY-description.md`
   - Example: `kanban/epics/Epic-4/Story-011/Task-001-update-kanban-policy.md`

2. **Delimited Section Format (Alternative):**
   - Location: Within the Story document, using Task ID as a clear header
   - Format: `### E{epic}:S{story}:T{task} – Task Name` followed by task content
   - Example: `### E4:S11:T01 – Update Kanban Governance Policy`

**Required Task Document Fields:**

Every Task document MUST include the following fields:

- **Task ID:** `E{epic}:S{story}:T{task}` (e.g., `E4:S11:T01`)
- **Scope:** Clear description of what the task accomplishes
- **Acceptance Criteria:** Measurable criteria for task completion
- **Status:** Current status (TODO, IN PROGRESS, COMPLETE)
- **Version Anchor:** Version marker when task is complete (e.g., `✅ COMPLETE (v0.4.11.1+1)`)
- **Completion Date:** Date when task was completed (if applicable)
- **Related BR/FR Links:** Links to related Bug Reports or Feature Requests
- **Input:** What is required to start this task
- **Deliverable:** What is produced by this task
- **Dependencies:** Other tasks or work items this task depends on
- **Blocker:** Tasks or work items that block this task
- **Parallel Development Candidacy:** Whether this task can be worked on in parallel

**Prohibited Patterns:**

The following patterns are **explicitly prohibited**:

- ❌ **Implicit Tasks:** Tasks mentioned in Story text but not explicitly documented
- ❌ **Inline Tasks:** Tasks embedded in Story descriptions without Task ID
- ❌ **Bundled Tasks:** Multiple tasks described together without individual Task documents
- ❌ **Undocumented Tasks:** Tasks referenced in checklists without corresponding Task documents

**Task Numbering and Format:**

- **Numbering (example):** `Exx:Sxx:Txx` (Epic, Story, Task with 2-digit zero padding)
- **Format:** `E{epic}:S{story}:T{task}` where task is 2-digit (01-99)
- **Example:** `E20:S07:T10` = Epic 20, Story 7, Task 10
- **Example:** `E1:S01:T01` = Epic 1, Story 1, Task 1
- **Tracked:** Git commits reference task ID (or equivalent in your VCS)

**Validation Requirements:**

The following validations MUST be enforced:

1. **Task Document Presence:** Every task referenced in a Story checklist MUST have a corresponding Task document
2. **Task ID Alignment:** Task ID in document MUST match Task ID in Story checklist
3. **Epic/Story/Task Alignment:** Task document MUST be located under the correct Epic and Story
4. **Required Fields:** Task document MUST contain all required fields listed above
5. **Version Alignment:** When task is complete, version TASK component MUST match Task number

**FR/BR → Task → Story → Epic Flow (Updated):**

1. **FR/BR arrives** (issue tracker, support channel, notes, etc.)
2. **Check for existing Story** that matches the FR/BR scope:
   - If found → create a **new Task document** under that Story
3. **If no Story exists** for this area:
   - Create a new Story under the **appropriate Epic**
   - Then create the **Task document** under that Story
4. **If no Epic exists** for this problem domain:
   - Create a new, conceptually broad **Epic** to host the new Story
   - Then create the Story under that Epic
   - Then create the **Task document** under that Story

**CRITICAL:** No FR/BR should exist without a corresponding **Task document** anchored to a Story (and, once epics are in use, an Epic). This keeps Kanban, versioning, and release workflow aligned.

---

## Versioning

### Schema

**Format:** `RC.EPIC.STORY.TASK+BUILD`

- **RC:** Release Candidate (0 = development, 1+ = release candidate)
- **EPIC:** Epic number
- **STORY:** Story number within epic
- **TASK:** Task number within story
- **BUILD:** Build number (increments per release within task)

**Example:** `0.20.11.15+1` = Development, Epic 20, Story 11, Task 15, Build 1

**Related Documentation (examples):**
- **Versioning Policy (Schema)** – Complete schema definition (e.g., `KB/Architecture/Standards_and_ADRs/versioning-policy.md`)
- **Versioning Strategy** – Forensic traceability and canonical ordering principles (e.g., `KB/Architecture/Standards_and_ADRs/versioning-strategy.md`)

### Task-Level Requirements

**CRITICAL:** All substantive work MUST be task-driven.

**Version TASK number must match active task.**

**Requirements:**
1. Version TASK reflects the active task
   - Working on `E20:S11:T16` → version `0.20.11.16+B`
   - TASK component aligns with Kanban task

2. **CRITICAL: Task Transitions and Version File Updates**
   - **When creating a new Task:**
     - Update `version.py` with `VERSION_TASK = <new_task_number>`
     - Set `VERSION_BUILD = 1` (new Tasks always start at BUILD 1)
     - Example: Moving from Task 1 to Task 2:
       - Update: `VERSION_TASK = 2`, `VERSION_BUILD = 1`
       - Version: `0.4.3.2+1` (not `0.4.3.1+2`)
   - **During Release Workflow:**
     - Step 1: Validates that `VERSION_TASK` matches active Task number
     - Step 2: Automatically detects Task transitions and updates `VERSION_TASK` if needed
     - Step 2: If Task transition detected, resets `VERSION_BUILD` to 1
     - Step 2: If same Task, increments `VERSION_BUILD` by 1

3. BUILD resets to 1 with new task
   - BUILD increments within same task
   - BUILD does NOT carry over between tasks
   - **CRITICAL:** When moving to a new Task, `VERSION_BUILD` MUST be reset to 1

4. Validation enforces alignment
   - Release workflow Step 1 validates task/version alignment
   - Release workflow Step 2 validates task/version alignment after update
   - Validators check task/version alignment
   - Pre-commit hooks enforce alignment (if implemented)

**Common Mistakes to Avoid:**
- ❌ **DON'T:** Keep `VERSION_TASK = 1` and increment `VERSION_BUILD` when moving to Task 2
  - Wrong: `0.4.3.1+3` for Task 2
  - Correct: `0.4.3.2+1` for Task 2
- ❌ **DON'T:** Forget to reset `VERSION_BUILD` when moving to a new Task
  - Wrong: `0.4.3.2+3` for first release of Task 2
  - Correct: `0.4.3.2+1` for first release of Task 2

See: **your own canonical story docs** that define guardrails and versioning rules.  
(*Original example:* `KB/PM_and_Portfolio/stories/overview/Epic 20/Story-11-GUARDRAILS-PLAN.md` in the Confidentia project.)

---

### Abstract Spaces for Forensic Traceability

**CRITICAL:** Zero-numbered E/S/T documentation establishes the **abstract space** for forensic traceability, serving as the canonical anchor before any functional work is committed.

**Purpose:**
- Establish canonical version anchor for E/S/T documentation
- Begin forensic traceability arc at documentation creation
- Provide clear SOP for committing initial E/S/T docs
- Link Kanban documentation lifecycle to versioning schema

#### Zero-Numbered E/S/T Documentation

Abstract spaces use `+0` build number to indicate documentation-only anchor:

**Epic-Level Abstract Space:**
- Format: `0.{EPIC}.0.0+0`
- Example: `0.3.0.0+0` = Epic 3's abstract space
- Purpose: Establishes forensic traceability anchor for Epic 3
- When: Created when Epic document is first committed

**Story-Level Abstract Space:**
- Format: `0.{EPIC}.{STORY}.0+0`
- Example: `0.2.5.0+0` = Epic 2 Story 5's abstract space
- Purpose: Establishes forensic traceability anchor for Story 5 within Epic 2
- When: Created when Story document is first committed

**Task-Level Abstract Space:**
- Format: `0.{EPIC}.{STORY}.{TASK}+0`
- Example: `0.10.4.6+0` = Epic 10 Story 4 Task 6's abstract space
- Purpose: Establishes forensic traceability anchor for Task 6 within Story 4 within Epic 10
- When: Created when Task document is first committed

**Relationship to Functional Work:**
- Abstract space (`+0`) = Documentation-only anchor (establishes traceability)
- Functional work (`+1` and beyond) = Actual implementation (builds on anchor)
- Example progression:
  - `0.4.11.1+0` = Task document created (abstract space)
  - `0.4.11.1+1` = First functional change for Task 1
  - `0.4.11.1+2` = Second functional change for Task 1

**See:** Numbering Policy section "Abstract Space Version Schema" for complementary versioning schema details.

#### SOP for Committing Initial E/S/T Docs

**When to Commit Abstract Space:**
- **Before any functional work** on the E/S/T
- **When creating new Epic/Story/Task documentation**
- **As part of documentation setup phase**

**Where to Commit:**
- **Epic:** Epic document location (e.g., `kanban/epics/Epic-X/Epic-X.md`)
- **Story:** Story document location (e.g., `kanban/epics/Epic-X/Story-XXX-*.md`)
- **Task:** Task document location (e.g., `kanban/epics/Epic-X/Story-XXX/Task-YYY-*.md` OR delimited section within Story)

**How to Commit:**
1. **Create E/S/T document** with required structure and fields
2. **Set version to abstract space** (`+0` build):
   - Epic: `0.{EPIC}.0.0+0`
   - Story: `0.{EPIC}.{STORY}.0+0`
   - Task: `0.{EPIC}.{STORY}.{TASK}+0`
3. **Commit via Release Workflow (RW)** with doc-init path (see FR-017)
   - RW Step 1 detects docs-only change
   - RW Step 2 sets version to `+0` (abstract space)
   - RW Step 3 creates changelog entry with "Doc Init" type
4. **Alternative:** Manual commit with explicit version annotation
   - Commit message: `📋 Doc Init (Abstract Space): E{epic}:S{story}:T{task} - [Description]`
   - Version: Explicitly set to abstract space (`+0`)

**Validation:**
- Release Workflow validates abstract space version format
- Validators check that `+0` is only used for docs-only changes
- Validators ensure abstract space precedes functional work

**Related:**
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (implementation)
- **Numbering Policy:** Abstract Space Version Schema (complementary section)

---

## Release Workflow

The process that implements both policies (Kanban Governance and Versioning Strategy).

**Reference (example):** `KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md`

**Documents (example set):**
1. Version File (e.g., `src/yourproject/version.py`)
2. Detailed Changelog (e.g., `CHANGELOG_vRC.EPIC.STORY.TASK+BUILD.md`)
3. Main Changelog (e.g., `CHANGELOG.md`)
4. README (e.g., `README.md`)
5. Epic Doc (auto-updated)
6. Story Docs (auto-updated)
7. Kanban Board (auto-updated)
8. Branch Context Validator
9. Changelog Format Validator
10. Kanban Update Module

**Process:**
1. Version Bump
   - `--task N` sets task (resets BUILD to 1)
   - `--story N` sets story (resets TASK and BUILD to 1)
   - Otherwise increments BUILD on current task
   - Validates task exists and version TASK matches

2. Changelog Creation
   - Detailed changelog with full timestamp
   - Main CHANGELOG.md with summary

3. Kanban Auto-Update
   - Updates epic/story docs with version and summary
   - Updates completed tasks with version numbers
   - Updates Kanban board entry
   - Validates forensic markers were added

4. Validation
   - Branch context (epic ↔ version ↔ changelog, task/version alignment)
   - Changelog format (timestamp)
   - Task exists in story doc
   - Version TASK matches provided task

5. Git Operations
   - Stage all files
   - Commit with version in message
   - Create annotated tag
   - Push to remote

---

## Operational Principles

These principles govern how Release Workflow and Kanban updates are executed, ensuring consistency, accessibility, and reliability.

### Atomic Release Workflow Behaviour

**CRITICAL:** Release Workflow (RW) must execute atomically—either complete all steps or stop with an explicit BLOCKED state.

**Requirement:**
- When user triggers RW (e.g., types 'RW'), the agent MUST either:
  - Complete all workflow steps to completion, OR
  - Stop at a specific step with a clear 'RW BLOCKED' message

**Blocked Protocol:**
If RW cannot proceed, the agent MUST state:
- **Step:** Step number and name (e.g., 'Step 7: Run Validators')
- **Reason:** Why blocked (e.g., wrong branch, missing tool, sandbox limitation)
- **Actions:** Exact commands user must run to unblock
- **Status:** That RW is NOT complete until actions are taken

**Agent MUST NOT:**
- Silently stop mid-workflow after modifying files
- Start new RW while previous RW TODOs are pending/in_progress

**Abandoned Protocol:**
If RW is abandoned:
- Mark remaining `rw-step-*` TODOs as cancelled
- Output short 'RW ABORTED' summary
- State current state and next steps

**Rationale:**
- **Accessibility:** Critical for users with cognitive constraints who need clear, unambiguous status
- **Clarity:** User always knows workflow status (complete, blocked, or aborted)
- **Safety:** Prevents ambiguous states where it's unclear if workflow succeeded or failed

**Enforcement:**
- `.cursorrules` (or equivalent automation) must enforce atomicity
- Release Workflow documentation must emphasize this requirement
- Agents must follow ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern

---

### "ALL Sections" Update Requirement

**CRITICAL:** When Release Workflow updates Kanban documentation, it MUST update ALL sections that reference the story/task being released.

**Requirement:**
Step 4 (Update KB Epic Docs) MUST update:
- **Header metadata:** `Last updated` field with version marker
- **Story Checklist:** Status and version marker (SINGLE SOURCE OF TRUTH)
- **Detailed story sections:** Status, Last updated, task checkboxes with forensic markers
- **Any other references:** All sections mentioning the story/task

**Systematic Process:**
1. Read the FULL Epic document file
2. Read the authoritative Story document file to get correct state
3. Find ALL sections referencing the story/task (use grep/search)
4. Update ALL of them to match the Story file's state
5. Validate consistency: header, checklist, and detailed sections must all match

**Validation Checks:**
- Epic header `Last updated` matches version in Story Checklist
- Story Checklist status matches Story file status
- Detailed sections match Story Checklist
- No duplicate progress sections
- All forensic markers present and correctly formatted

**Enforcement:**
- `.cursorrules` explicitly requires 'ALL sections'
- Release Workflow documentation emphasizes systematic process
- Agents must follow ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern

**Rationale:**
- Prevents documentation inconsistencies
- Ensures single source of truth (Story Checklist) is reflected everywhere
- Enables reliable traceability across all documentation

---

### Accessibility Constraints

**CRITICAL:** All workflow operations must be accessible, with no partial updates, no silent failures, and clear actionable messages.

**Requirements:**

**No Partial Updates:**
- RW must complete all steps OR stop with explicit BLOCKED message
- Cannot silently stop mid-workflow after modifying files
- Cannot leave documentation in inconsistent state

**No Silent Failures:**
- Must state step number and name when blocked
- Must state reason for blocking
- Must provide exact commands to unblock
- Must state that RW is NOT complete

**Clear Actionable Messages:**
- **RW BLOCKED:** `Step X - Reason - Actions required`
- **RW ABORTED:** `Current state - Next steps`
- **RW COMPLETE:** `All steps completed successfully`

**Rationale:**
- **Cognitive accessibility:** Users with cognitive constraints need clear, unambiguous status
- **Error recovery:** Clear messages enable users to understand and fix issues
- **Trust:** Users can verify workflow completion status

**Enforcement:**
- All agent-driven workflows must follow these constraints
- Documentation must emphasize accessibility as a core requirement
- Validation checks must verify message clarity

---

### Forensic Marker Standardization

**CRITICAL:** Forensic markers must follow a canonical format and be placed consistently across all documentation.

**Canonical Format:**
```
✅ COMPLETE (vRC.E.S.T+B)
```

**Examples:**
- Story: `- [x] **Story 33 – Parent Inclusivity** ✅ COMPLETE (v0.4.33.3+1)`
- Task: `- [x] **E4:S33:T01 – Task Name** ✅ COMPLETE (v0.4.33.1+1)` (using Exx:Sxx:Txx format)

**Location Requirements:**
- **Story Checklist:** Epic document, Story Checklist section (SINGLE SOURCE OF TRUTH)
- **Task Checklist:** Story document, Task Checklist section
- **Detailed Sections:** Epic document, detailed story sections (for consistency)

**Consistency Requirements:**
- Story Checklist is SINGLE SOURCE OF TRUTH for story status
- Detailed sections must match Story Checklist
- Header `Last updated` must match version in markers
- ALL sections must be updated together

**Validation Checklist:**
- [ ] Forensic marker present in Story Checklist
- [ ] Forensic marker present in Task Checklist (if task complete)
- [ ] Forensic marker format matches canonical format
- [ ] Version in marker matches version in header
- [ ] All sections referencing story/task have consistent markers

**Enforcement:**
- Release Workflow must validate forensic marker format
- Templates must include format examples
- Documentation must emphasize Story Checklist as SoT

---

### Consistency Requirements

**CRITICAL:** All Kanban documentation must be consistent across board views, Epic docs, and Story docs.

**Cross-Reference Validation:**
- **Epic header ↔ Story Checklist:** `Last updated` field must match version in Story Checklist
- **Story Checklist ↔ Detailed sections:** Status and version markers must match
- **Board view ↔ Epic docs:** Board status must match Epic Story Checklist
- **Epic docs ↔ Story docs:** Epic detailed sections must match Story file

**Regular Consistency Checks:**
- After each Release Workflow execution
- Before major releases
- Weekly board reviews
- Monthly policy reviews

**Validation Process:**
1. Read Epic document header
2. Read Epic Story Checklist
3. Read Epic detailed story sections
4. Read Story document
5. Read board view
6. Compare all references for consistency
7. Fix any inconsistencies found

**Enforcement:**
- Release Workflow must validate consistency as part of Step 4
- Board review rituals must include consistency checks
- Policy violations must trigger escalation procedures

---

### Review Schedules

**CRITICAL:** Regular reviews ensure documentation stays current and consistent.

**Epic Reviews:**
- **Frequency:** After each story completion
- **Responsibility:** Epic owner / Story owner
- **Checks:**
  - Epic header `Last updated` current
  - Story Checklist accurate
  - Detailed sections match Story files
  - Dependencies and risks updated

**Story Reviews:**
- **Frequency:** After each task completion
- **Responsibility:** Story owner
- **Checks:**
  - Story status accurate
  - Task Checklist accurate
  - Acceptance criteria met
  - Dependencies updated

**Board Reviews:**
- **Frequency:** Weekly or after significant changes
- **Responsibility:** Project manager / Kanban maintainer
- **Checks:**
  - Board view matches Epic docs
  - Status columns accurate
  - No orphaned stories/tasks
  - Epic priorities current

**Policy Reviews:**
- **Frequency:** Quarterly or after major framework updates
- **Responsibility:** Framework maintainer
- **Checks:**
  - Policy aligns with framework updates
  - Templates match policy
  - Integration guides current

---

### Maintenance Responsibilities

**CRITICAL:** Clear ownership ensures documentation is maintained consistently.

**Epic Owner Responsibilities:**
- Update Epic header after story completion
- Update Story Checklist after story completion
- Update detailed sections after story completion
- Review dependencies and risks regularly
- Ensure Epic docs align with Story files

**Story Owner Responsibilities:**
- Update Story status after task completion
- Update Task Checklist after task completion
- Update acceptance criteria status
- Review dependencies regularly
- Ensure Story file is authoritative source

**Kanban Maintainer Responsibilities:**
- Update board views regularly
- Ensure board ↔ Epic ↔ Story consistency
- Review for orphaned items
- Coordinate policy updates
- Escalate policy violations

**Framework Maintainer Responsibilities:**
- Review policy quarterly
- Update templates to match policy
- Update integration guides
- Coordinate framework updates across projects

---

### Escalation Procedures

**CRITICAL:** Clear escalation paths ensure issues are resolved promptly.

**Documentation Inconsistencies:**
- **Severity:** High
- **Trigger:** Epic header, Story Checklist, and detailed sections don't match
- **Action:**
  1. Identify authoritative source (Story file)
  2. Update ALL sections to match authoritative source
  3. Document inconsistency in changelog if significant
  4. Notify Epic owner and Kanban maintainer

**Missing Reviews:**
- **Severity:** Medium
- **Trigger:** Review schedule missed (e.g., Epic not updated after story completion)
- **Action:**
  1. Remind Epic owner of review responsibility
  2. If no response after 2 days, escalate to Kanban maintainer
  3. Kanban maintainer updates or assigns alternative owner

**Policy Violations:**
- **Severity:** High
- **Trigger:** Work item doesn't follow Kanban governance policy
- **Action:**
  1. Identify violation (e.g., missing forensic marker, inconsistent status)
  2. Notify work item owner
  3. Provide guidance on correct format/process
  4. If repeated, escalate to Kanban maintainer

**Blocked Workflows:**
- **Severity:** Medium
- **Trigger:** RW blocked and not resolved after 24 hours
- **Action:**
  1. Review blocked reason
  2. Assist with unblocking (if technical issue)
  3. If user action required, remind user
  4. If abandoned, mark RW as ABORTED and document

**Escalation Contacts:**
- **Epic owner:** First point of contact for Epic-level issues
- **Story owner:** First point of contact for Story-level issues
- **Kanban maintainer:** Second point of contact for policy violations and consistency issues
- **Framework maintainer:** Final point of contact for framework-level issues

---

### Mandatory TODO Tracking

**CRITICAL:** Real-time progress visibility is mandatory for all agent-driven workflows.

**Requirement:**
TODO tracking is **MANDATORY** (not optional) for Release Workflow and other agent-driven workflows.

**Implementation:**

**At Workflow Start:**
- Create TODO list with all workflow steps
- Mark all steps as `pending`

**Before Each Step:**
- Mark step as `in_progress`

**After Each Step:**
- Mark step as `completed`
- Mark next step as `in_progress`

**On Completion:**
- All steps marked as `completed`

**Enforcement:**
- ❌ **DO NOT** execute Release Workflow without creating TODO list first
- ❌ **DO NOT** skip TODO updates between steps
- ✅ **MUST** create TODO list before Step 1 execution
- ✅ **MUST** update TODO status before and after each step
- ✅ **MUST** mark all steps as completed on successful completion

**Benefits:**
- **User visibility:** User sees real-time progress through all steps
- **Agent organization:** Helps agent stay organized across sequential steps
- **Error recovery:** Clear visibility into where execution stopped if interrupted
- **Transparency:** User can verify all steps completed successfully
- **Accessibility:** Critical for users with cognitive constraints

**Enforcement:**
- `.cursorrules` (or equivalent automation) must require TODO tracking
- Release Workflow documentation must emphasize this requirement
- Validation checks must verify TODO tracking is present

---

## Documentation

**Epics** reference:
- Branch name, version schema, story checklist, dependencies, risks

**Stories** include:
- Task index aligning with E#S#T# numbering
- Goals and acceptance criteria
- Completion summary before release

**Tasks** capture:
- Cross-team impacts (Parallel Development Candidacy)
- Staging plan if spanning multiple PRs

**Templates:**
- New epic/story created from templates (e.g., those in the Kanban package)
- Deviations should be reviewed/approved by whoever owns process governance in your context

---

## Rules

1. **Traceability:** Every board card links to KB doc, branch/tag, changelog entry
2. **Single Source of Truth:** KB docs are canonical
3. **Gate Conditions:**
   - Ready → In Progress: Story doc complete, blockers resolved, branch created
   - In Progress → Verify: Tasks checked, summary drafted, dry-run done
   - Verify → Done: Release workflow executed, tag pushed, KB doc accepted
4. **Numbering Discipline:** No duplicate IDs; IDs never reused
5. **WIP & Ownership:** Each story has named DRI; pause >48h moves back to Ready

---

## Templates & References

**Templates:**
- Epic: `KB/PM_and_Portfolio/epics/templates/EPIC_TEMPLATE.md`
- Story: `KB/PM_and_Portfolio/stories/templates/STORY_TEMPLATE.md`

**Release Workflow:**
- Script: `scripts/automation/release_workflow.py`
- Module: `scripts/automation/update_kanban_docs.py`
- Makefile: `make release`, `make release-check`

**Validation:**
- Branch Context: `scripts/validation/validate_branch_context.py`
- Changelog Format: `scripts/validation/validate_changelog_format.py`

**Policy Documents (examples):**
- **Versioning Strategy** – Complete versioning strategy with forensic traceability system (e.g., `KB/Architecture/Standards_and_ADRs/versioning-strategy.md`)
- **Versioning Policy (Schema)** – Versioning schema definition (e.g., `KB/Architecture/Standards_and_ADRs/versioning-policy.md`)
- **Release Workflow Reference** – Release Workflow documentation (e.g., `KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md`)
- **Kanban Board Overview** – Board structure (e.g., `KB/PM_and_Portfolio/rituals/overview/kanban-board.md`)
- **System Architecture / Template Philosophy** – Supporting governance docs (paths will vary by project)

**Foundation:**
- **Automation / Rules Engine:** In Confidentia this was Cursor Rules (`.cursorrules`) ⭐. In your project, use the equivalent mechanism (Cursor rules, CI checks, or other automation) as the enforcement layer for this policy.

---

## Change History

- **2025-12-02:** Added 9 Operational Principles sections (Atomic RW Behaviour, "ALL Sections" Requirement, Accessibility Constraints, Forensic Marker Standardization, Consistency Requirements, Review Schedules, Maintenance Responsibilities, Escalation Procedures, Mandatory TODO Tracking) - based on fynd.deals Epic 15 findings
- **2025-11-26:** Refined task-level versioning requirements (original Confidentia example: Epic 20, Story 11, Task 011)
- **2025-11-26:** Updated to reference RC.EPIC.STORY.TASK+BUILD schema, defined all Release Workflow documents (original Confidentia example: Epic 20, Story 11, Task 015)
- **2025-11-20:** Initial policy authored (original Confidentia example: Epic 20 Story 6/7 follow-up)

---

## Portability Notes

When adopting this policy in a new project:

- **Update paths** to match your KB layout (e.g., where Epics, Stories, and Kanban board files live).
- **Confirm versioning**:
  - If you use `RC.EPIC.STORY.TASK+BUILD`, link to your own Versioning Policy and Strategy.
  - Otherwise, adapt the “Versioning” section to your schema and update examples.
- **Align work item names** (Epic/Story/Task vs Theme/Epic/Story, etc.) and adjust templates accordingly.
- **Decide ownership:** Replace Product Ops / PMO labels with the actual roles in your organisation.
