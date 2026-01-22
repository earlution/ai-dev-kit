---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T23:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Update Kanban Workflow (UKW) - Agent Execution Guide

**Version:** 1.0.0  
**Last Updated:** 2025-12-17  
**Related:** Epic 2 - Workflow Management Framework, Epic 4 - Kanban Framework

---

## 📖 Overview

The **Update Kanban Workflow (UKW)** is an intelligent agent-driven workflow that synchronizes all kanban documentation to reflect the current project state. Unlike the Release Workflow (RW) which updates kanban docs as part of releasing completed work, UKW comprehensively updates kanban docs to prevent status drift.

**🧠 Critical Intelligence Requirements:**

This workflow **requires significant agentic intelligence** at every step. This is NOT a deterministic script. Agents must:

- **Synthesize intelligently:** Transform raw task/story data into coherent, meaningful narratives (tactical/strategic overviews)
- **Infer status:** Deduce completion state from evidence (commits, FR/BR/UXRs, file changes, acceptance criteria)
- **Prioritize strategically:** Classify tasks using MoSCOW methodology based on goals, dependencies, impact, deadlines, and strategic context
- **Understand context:** Grasp relationships, dependencies, goals, and strategic context across the project
- **Write narratives:** Create natural, readable summaries that capture progress and tell a coherent story
- **Validate consistency:** Detect contradictions and misalignments across the document hierarchy

**Key Principle:** Bottom-up approach - Update Tasks → Stories → Epics → Board (in that order). The MoSCOW priority list is updated LAST.

**Trigger:** User types "UKW" or "ukw" (case-insensitive)

---

## 🎯 Purpose

**Why UKW Exists:**
- **Status Drift Prevention:** Kanban documentation can drift from actual project state
- **Comprehensive Sync:** Updates all kanban docs, not just those touched by releases
- **Recent Activity Detection:** Considers recent commits, BR/FR/UXRs that may not have triggered releases
- **Bottom-Up Accuracy:** Ensures lower-level status correctly flows up the hierarchy

**When to Use UKW:**
- After manual work that didn't go through RW
- After wrapping up sprints/cycles
- Periodically to ensure kanban docs reflect reality
- After bulk status changes
- Before important planning sessions

**Relationship to RW:**
- **RW:** Updates kanban docs as part of releasing completed work
- **UKW:** Comprehensive sync regardless of release status
- Both workflows should be used together for complete kanban accuracy

**🔄 UKW → RW Integration (Wiring):**

After completing UKW, users typically run RW to commit the kanban documentation updates. The relationship between UKW and the perpetual task is established through wiring:

- **Wiring Established in UKW Step 1:** UKW discovers and wires itself to the project's perpetual UKW task
  - UKW Step 1 searches for task with `perpetual_task: true` or `Task Type: Perpetual Maintenance` flag
  - UKW extracts the task's Epic/Story/Task ID (e.g., E6:S06:T08, E4:S03:T05, etc.)
  - **Wiring:** UKW establishes relationship to this task ID for this project instance
- **RW Uses Wired Task:** When RW runs after UKW:
  - **UKW Context Detection:** RW Step 2 detects UKW context (user ran "UKW" then "RW")
  - **Uses Wired Task ID:** RW uses the perpetual task ID that UKW wired in Step 1
  - **Same Relationship, Different ID per Project:** Each project instance wires UKW to its own perpetual task (different E/S/T ID)
- **Version Pattern:** UKW releases use the wired perpetual task's version pattern: `v0.{EPIC}.{STORY}.{PERPETUAL_TASK}+{BUILD}` where BUILD = UKW run count
- **Build Warning Suppression:** Perpetual tasks have `perpetual_task: true` flag, so high BUILD numbers are expected and valid

**Wiring Example (ai-dev-kit):**
- UKW Step 1: Searches tasks → Finds E6:S06:T08 with `perpetual_task: true`
- UKW wires itself to E6:S06:T08
- When RW runs after UKW, it uses the wired task ID (E6:S06:T08)
- Version: `v0.6.6.8+{N}`

**Wiring Example (other project):**
- UKW Step 1: Searches tasks → Finds E4:S03:T05 with `perpetual_task: true`
- UKW wires itself to E4:S03:T05
- When RW runs after UKW, it uses the wired task ID (E4:S03:T05)
- Version: `v0.4.3.5+{N}`

**Perpetual Task Pattern:**
- Projects should create a perpetual UKW task for UKW release attribution
- **Wiring Required:** Task must have `perpetual_task: true` or `Task Type: Perpetual Maintenance` in task document (UKW uses this to wire)
- **Task ID Varies:** Each project instance has its own perpetual task with its own E/S/T ID (wired in UKW Step 1)
- Task status: IN PROGRESS (Perpetual - never completes)
- BUILD number accumulates naturally as UKW runs (expected and valid)

---

## 📋 Workflow Steps

### Step 1: Identify Perpetual UKW Task (Wiring Step)

**Purpose:** Discover and wire UKW to the project's perpetual UKW task. This establishes the relationship between the UKW workflow instance and the task that will receive UKW release attributions.

**Agent Execution:**

1. **ANALYZE:**
   - Load config: Read `rw-config.yaml` if exists and `use_kanban: true`
   - Determine task document pattern from config or defaults
   - Understand that each project instance has its own perpetual UKW task with its own E/S/T ID
   - Need to find the task that has the perpetual UKW responsibility

2. **DETERMINE:**
   - Search strategy: Iterate through all task documents looking for perpetual task flag
   - Criteria: Task document must have `perpetual_task: true` or `Task Type: Perpetual Maintenance`
   - May also check task name/description for "UKW" or "Update Kanban Workflow"
   - Extract Epic/Story/Task ID from discovered task document

3. **EXECUTE:**
   - Search all task documents using pattern: `{kanban_root}/{task_doc_pattern}`
   - Read each task document looking for:
     - `perpetual_task: true` in frontmatter or metadata
     - `Task Type: Perpetual Maintenance` in document
     - Task name/description mentioning "UKW" or "Update Kanban Workflow"
   - When found, extract task's Epic/Story/Task ID from document path or Task ID field
   - **Establish Wiring:** Store task ID as the perpetual UKW task for this project instance
   - Document wiring: "UKW wired to perpetual task E{X}:S{Y}:T{Z}"

4. **VALIDATE:**
   - Perpetual UKW task found
   - Task ID extracted correctly
   - Wiring established and documented

5. **PROCEED:**
   - Document discovered perpetual task ID
   - Store task ID for RW attribution (when user runs RW after UKW)
   - Move to Step 2

**Output:** Perpetual UKW task ID (e.g., E6:S06:T08, E4:S03:T05) - this is the task that RW will use when UKW context is detected.

**Important:** The task ID discovered here is project-specific. Each project instance wires UKW to its own perpetual task. The wiring is established each time UKW runs, ensuring UKW is always aware of which task to use for release attribution.

---

### Step 2: Analyze Recent Activity

**Purpose:** Identify recent changes that may affect kanban status

**Agent Execution:**

1. **ANALYZE:**
   - Load config: Read `rw-config.yaml` if exists and `use_kanban: true`
   - Determine git history window: Default 7 days, or from config
   - Identify kanban directory structure
   - **Recent Commits:**
     - Run `git log --since="7 days ago" --oneline --all`
     - Parse commit messages for Epic/Story/Task identifiers (E4:S13:T06, etc.)
     - Map commits to kanban documents
   - **Recent FR/BR/UXRs:**
     - List files in `{kanban_root}/fr-br/` sorted by modification date
     - Check last 7 days (or configured window)
     - Extract Epic/Story/Task links from FR/BR/UXR files
   - **File Changes:**
     - Check `git status` for modified kanban files
     - Identify which documents changed outside of RW

2. **DETERMINE:**
   - Which tasks may have been completed (based on commit patterns)
   - Which stories may need status updates (based on task completion)
   - Which epics may need status updates (based on story completion)
   - Recent BR/FR/UXRs that may indicate task completion
   - Files changed that need review

3. **EXECUTE:**
   - Collect commit history
   - Collect FR/BR/UXR file list
   - Map commits/FRs/BRs to kanban documents
   - Create activity summary

4. **VALIDATE:**
   - Activity analysis complete
   - Relevant changes identified
   - No critical information missed

5. **PROCEED:**
   - Document findings
   - Pass activity summary to Step 2

**Output:** Activity summary with:
- List of potentially completed tasks
- List of stories needing review
- List of epics needing review
- Recent FR/BR/UXRs affecting kanban

---

### Step 3: Update Task Documents

**Purpose:** Update all task documents to reflect current state

**Agent Execution:**

1. **ANALYZE:**
   - **For each task document:**
     - Read task document from pattern: `{kanban_root}/{task_doc_pattern}`
     - Read current task status
     - Check recent commits mentioning this task
     - Check related BR/FR/UXR status
     - Review task acceptance criteria
     - Compare with recent file changes

2. **DETERMINE:**
   - **Status Updates:**
     - TODO → IN PROGRESS: If work started (commits, file changes)
     - IN PROGRESS → COMPLETE: If acceptance criteria met
     - COMPLETE → (no change): Already complete
   - **Date Updates:**
     - Update "Last updated" date if status changed
   - **Forensic Markers:**
     - Add forensic marker if task completed (check version file for current version)
   - **Description Updates:**
     - Update task description if acceptance criteria changed or met

3. **EXECUTE:**
   - Update task status fields
   - Update "Last updated" dates
   - Add forensic markers for completed tasks (format: `✅ COMPLETE (vRC.E.S.T+B)`)
   - Update task descriptions if needed

4. **VALIDATE:**
   - Task status aligns with recent activity
   - Task documents reflect current state
   - Forensic markers accurate

5. **PROCEED:**
   - Document updated tasks
   - Pass task status summary to Step 3

**Key Rules:**
- Only update if there's evidence of change (commits, FR/BR updates, file changes)
- Don't mark tasks complete without evidence
- Forensic markers must use current version from version file
- Preserve existing forensic markers

---

### Step 4: Update Story Documents

**Purpose:** Synthesize task data intelligently and update story documents

**Agent Execution:**

1. **ANALYZE (🧠 INTELLIGENCE REQUIRED):**
   - **For each story document:**
     - Read story document from pattern: `{kanban_root}/{story_doc_pattern}`
     - Read all task documents in this story
     - **Intelligently analyze task completion patterns:**
       - Identify themes and accomplishments across completed tasks
       - Recognize progress toward story goals (not just task count)
       - Understand blockers or issues from task context
       - Assess overall story trajectory
     - **Infer story-level status:** Determine status based on task completion AND story acceptance criteria/goals
       - Not just counting tasks - requires understanding story purpose
     - Check story acceptance criteria and assess if truly met
     - Review tactical overview section for context
     - Understand story relationship to epic goals

2. **DETERMINE (🧠 INTELLIGENCE REQUIRED):**
   - **Story Status (requires intelligent assessment):**
     - TODO → IN PROGRESS: If work has meaningfully started (not just one task touched)
     - IN PROGRESS → COMPLETE: If story goals met AND all tasks complete AND acceptance criteria satisfied
     - COMPLETE → (no change): Already complete
     - Requires reasoning about story purpose, not just task checkboxes
   - **Task Checklist Updates:**
     - Update task checklist with completion markers from Step 2
     - Ensure all tasks listed
   - **Tactical Overview (requires intelligent synthesis):**
     - Transform task completion data into meaningful narrative
     - Highlight key accomplishments that matter to story goals
     - Note blockers or issues in context
     - Capture progress trajectory
     - Tell a coherent story of progress
   - **Date Updates:**
     - Update "Last updated" date
   - **Forensic Markers:**
     - Add forensic marker if story completed

3. **EXECUTE:**
   - Update story status field
   - Update task checklist (mark completed tasks)
   - **Write tactical overview (🧠 REQUIRES INTELLIGENT WRITING):**
     - Create natural, readable narrative that synthesizes task progress
     - Example: "Story has made significant progress with three core tasks completed: authentication framework implemented, user roles defined, and access control tested. Current work focuses on integration testing and edge case handling. One blocker identified: third-party API rate limits require coordination with vendor."
     - NOT just: "Tasks T01, T02, T03 complete. T04, T05 in progress."
     - Capture what was accomplished, why it matters, current focus, and challenges
   - Update "Last updated" date
   - Add forensic markers for completed stories

4. **VALIDATE:**
   - Story status matches task completion state AND story goals
   - Task checklist accurate and complete
   - Tactical overview is meaningful narrative (not just task list)
   - Overview captures progress and context intelligently
   - No contradictions between story status and task status

5. **PROCEED:**
   - Document updated stories
   - Pass story status summary to Step 4

**Key Rules:**
- **Synthesize intelligently** - Transform raw task data into coherent narrative
- Tactical overview must be meaningful summary, not detailed task list
- Story status requires understanding story purpose, not just counting tasks
- Preserve existing forensic markers
- Write naturally - overview should read like a progress report, not a checklist

---

### Step 5: Update Epic Documents

**Purpose:** Synthesize story data intelligently and update epic documents

**Agent Execution:**

1. **ANALYZE (🧠 INTELLIGENCE REQUIRED):**
   - **For each epic document:**
     - Read epic document from pattern: `{kanban_root}/{epic_doc_pattern}`
     - Read all story documents in this epic
     - **Intelligently analyze story completion patterns:**
       - Identify strategic achievements and themes across completed stories
       - Recognize progress toward epic goals (not just story count)
       - Understand epic-level blockers or strategic challenges
       - Assess overall epic trajectory and strategic value
     - **Infer epic-level status:** Determine status based on story completion AND epic goals
       - Not just counting stories - requires understanding epic strategic purpose
     - Check epic goals/acceptance criteria and assess progress
     - Review strategic overview section for context
     - Understand epic relationship to project vision

2. **DETERMINE (🧠 INTELLIGENCE REQUIRED):**
   - **Epic Status (requires intelligent assessment):**
     - TODO → IN PROGRESS: If strategic work has meaningfully started
     - IN PROGRESS → COMPLETE: If epic goals met AND all stories complete AND strategic objectives achieved
     - COMPLETE → (no change): Already complete
     - Requires reasoning about epic strategic purpose, not just story checkboxes
   - **Story Checklist Updates:**
     - Update story checklist with completion markers from Step 3
     - Ensure all stories listed
   - **Strategic Overview (requires intelligent synthesis):**
     - Transform story completion data into high-level strategic narrative
     - Highlight key strategic achievements
     - Note strategic blockers or opportunities
     - Capture strategic progress trajectory
     - Tell a coherent story of strategic progress
   - **Date Updates:**
     - Update "Last updated" date

3. **EXECUTE:**
   - Update epic status field
   - Update story checklist (mark completed stories)
   - **Write strategic overview (🧠 REQUIRES INTELLIGENT WRITING):**
     - Create natural, readable narrative that synthesizes story progress at strategic level
     - Example: "Epic has achieved major milestones with authentication and authorization frameworks fully implemented across three completed stories. The foundational security infrastructure is now in place, enabling the next phase of user management features. Strategic focus shifting to integration and scalability concerns. One strategic blocker: pending vendor security audit may require architectural adjustments."
     - NOT just: "Stories S01, S02, S03 complete. S04, S05 in progress."
     - Capture what was strategically accomplished, why it matters, current strategic focus, and challenges
   - Update "Last updated" date

4. **VALIDATE:**
   - Epic status matches story completion state AND epic goals
   - Story checklist accurate and complete
   - Strategic overview is meaningful narrative (not just story list)
   - Overview captures strategic progress and context intelligently
   - No contradictions between epic status and story status

5. **PROCEED:**
   - Document updated epics
   - Pass epic status summary to Step 5

**Key Rules:**
- **Synthesize intelligently** - Transform raw story data into coherent strategic narrative
- Strategic overview must be high-level strategic summary, not detailed story list
- Epic status requires understanding epic strategic purpose, not just counting stories
- Write naturally - overview should read like a strategic progress report, not a checklist
- Focus on strategic value, not tactical details

---

### Step 6: Update Kanban Board

**Purpose:** Update the main kanban board, with MoSCOW list LAST (requires intelligent prioritization)

**Agent Execution:**

1. **ANALYZE (🧠 INTELLIGENCE REQUIRED):**
   - Read kanban board: `{kanban_root}/{kanban_board}`
   - Compare with updated Epic/Story/Task documents from Steps 2-4
   - Identify MoSCOW priority sections
   - Check epic summaries in board
   - Review "Last updated" date
   - **Understand prioritization context:**
     - Project goals and strategic objectives
     - Task dependencies and blocking relationships
     - Deadlines and time constraints
     - Impact and value delivery potential
     - Resource constraints and availability
     - Risk factors and mitigation needs
     - Strategic alignment with epic/project goals

2. **DETERMINE (🧠 INTELLIGENCE REQUIRED - PRIORITIZATION):**
   - **MoSCOW Priority Classification (UPDATE LAST):**
     - Identify all in-progress tasks (status: IN PROGRESS or TODO)
     - **Intelligently classify each task into MoSCOW category:**
       - **Must Have (M):** Critical for project success, blocks other work, required for release, core functionality
       - **Should Have (S):** Important but not critical, high value, should be included if possible
       - **Could Have (C):** Nice to have, lower priority, can be deferred
       - **Ongoing (O):** Perpetual maintenance tasks that never complete (e.g., workflow maintenance, changelog management). Tracked but don't block other work.
       - **Won't Have (W):** Explicitly deferred, out of scope for current cycle
     - **Prioritization requires analysis of:**
       - Which tasks block other work (dependencies)
       - Which tasks deliver highest value/impact
       - Which tasks are time-sensitive (deadlines)
       - Which tasks align with current strategic focus
       - Risk assessment (what happens if not done)
     - Order within each section chronologically (most recently updated first)
     - Remove completed tasks from "In Progress" sections
     - Add new in-progress tasks to appropriate sections
   - **Epic Status Sections:**
     - Update epic status in board
     - Update epic story lists
     - Update epic progress counts
   - **Board Metadata:**
     - Update "Last updated" date
     - Update version (if needed)

3. **EXECUTE:**
   - **FIRST: Update Epic Sections (WITH NUMERICAL SORTING):**
     - **CRITICAL: Sort epics numerically** (E1, E2, E3, ... E21, E24) before writing to board
       - **Use sorting utility:** Run `python "packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_board.py"` to automatically sort epics
       - **Manual sorting:** If utility unavailable, sort epics manually: canonical (1-23) first, then project-specific (24+)
     - **CRITICAL: Sort stories numerically** within each epic section (S01, S02, S03, ...)
     - **CRITICAL: Sort tasks numerically** within each story section (T01, T02, T03, ...)
     - Update epic status indicators
     - Update epic story lists with completion markers (sorted numerically)
     - Update epic progress counts
   - **THEN: Update MoSCOW Priority List (LAST - 🧠 REQUIRES INTELLIGENT PRIORITIZATION):**
     - **For each in-progress task, intelligently classify:**
       - Analyze task context, dependencies, impact, deadlines
       - Assign to appropriate MoSCOW category
       - Don't just copy existing priority - reassess based on current state
     - Rebuild Must Have (M) section with tasks classified as critical
     - Rebuild Should Have (S) section with tasks classified as important
     - Rebuild Could Have (C) section with tasks classified as nice-to-have
     - Rebuild Won't Have (W) section with explicitly deferred tasks
     - Order tasks chronologically within each section (most recent first)
   - Update board "Last updated" date
   - Update board version if needed

4. **VALIDATE:**
   - MoSCOW classifications are strategically sound and consistent
   - Priorities align with project goals and strategic context
   - MoSCOW list matches current in-progress tasks
   - Epic summaries match epic documents
   - All links valid
   - Tasks ordered correctly (most recent first)

5. **PROCEED:**
   - Document board updates and prioritization rationale
   - Pass to Step 6

**Key Rules:**
- **CRITICAL: MoSCOW list is updated LAST** (after all other board updates)
- **CRITICAL: Numerical Sorting Required** - Epics, stories, and tasks must be sorted numerically:
  - Epics: E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E21, E24 (canonical 1-23, then project-specific 24+)
  - Stories: S01, S02, S03, ... (within each epic)
  - Tasks: T01, T02, T03, ... (within each story)
- **Sorting Utility:** Use `packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_board.py` to automatically sort epics in the kanban board
  - Run after updating epic sections: `python "packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_board.py"`
  - Script automatically detects board path from `rw-config.yaml` or uses default
  - Use `--dry-run` to preview sorting without making changes
- **Prioritization requires intelligence** - analyze context, not just copy existing
- Only include tasks with status IN PROGRESS or TODO
- Order tasks chronologically within MoSCOW sections
- Remove completed tasks from "In Progress" sections
- Epic summaries must match epic documents exactly
- MoSCOW classification must be strategically sound

---

### Step 7: Validate Consistency

**Purpose:** Ensure all kanban documents are consistent

**Agent Execution:**

1. **ANALYZE:**
   - Cross-reference task status → story status → epic status
   - Check version marker consistency
   - Verify link integrity
   - Check for contradictions

2. **DETERMINE:**
   - Status alignment issues
   - Version inconsistencies
   - Broken links
   - Contradictions

3. **EXECUTE:**
   - Check task status matches story task checklist
   - Check story status matches epic story checklist
   - Verify version markers consistent across documents
   - Check all internal links resolve correctly
   - Identify any contradictions

4. **VALIDATE:**
   - All documents consistent
   - No contradictions found
   - Links valid

5. **PROCEED:**
   - Document validation results
   - Report any issues found
   - Move to Step 7

**Key Checks:**
- Task marked complete in story checklist → Task document shows COMPLETE
- Story marked complete in epic checklist → Story document shows COMPLETE
- Epic status matches story completion state
- Version markers align across documents
- All links resolve

---

### Step 8: Stage Files

**Purpose:** Stage all modified kanban files for commit

**Agent Execution:**

1. **ANALYZE:**
   - Identify all modified kanban files
   - Check git status

2. **DETERMINE:**
   - Files to stage (all kanban files)

3. **EXECUTE:**
   - Run `git add {kanban_root}/**/*.md`
   - Verify files staged

4. **VALIDATE:**
   - Files staged successfully
   - No errors

5. **PROCEED:**
   - Document staged files
   - Move to Step 8

---

### Step 9: Document Changes

**Purpose:** Create summary of all changes made

**Agent Execution:**

1. **ANALYZE:**
   - Review all changes from Steps 2-5
   - Collect summary statistics

2. **DETERMINE:**
   - Summary format
   - Key changes to highlight

3. **EXECUTE:**
   - Create summary:
     - Number of tasks updated
     - Number of stories updated
     - Number of epics updated
     - Key status changes
     - MoSCOW list updates
   - List updated documents

4. **VALIDATE:**
   - Summary complete
   - All key changes documented

5. **PROCEED:**
   - Present summary to user
   - Workflow complete
   - **Note:** After UKW, user typically runs RW to commit kanban documentation updates. RW will detect UKW context and auto-attribute to perpetual UKW task (see "UKW → RW Integration" section above).

---

## 🔑 Key Principles

1. **Bottom-Up Approach:** Always update Tasks → Stories → Epics → Board
2. **MoSCOW List Last:** The MoSCOW priority list in kanban board is updated LAST
3. **🧠 Intelligent Synthesis:** Story/Epic updates require intelligent synthesis of lower-level data into meaningful narratives (NOT just copying or listing)
4. **🧠 Intelligent Status Inference:** Status updates require reasoning about completion state and goals, not just counting checkboxes
5. **🧠 Strategic Prioritization:** MoSCOW classification requires understanding goals, dependencies, impact, deadlines, and strategic context
6. **Meaningful Narratives:** Tactical/strategic overviews must be natural, readable summaries that capture progress and context
7. **Status Consistency:** Ensure status flows correctly up the hierarchy with intelligent validation
8. **Evidence-Based:** Only update status if there's evidence (commits, FR/BR, file changes)
9. **Preserve Markers:** Don't remove existing forensic markers
10. **Chronological Ordering:** Order tasks within MoSCOW sections by last updated date

**🧠 Intelligence is Not Optional:**

This workflow fundamentally requires agentic intelligence. Each step involves:
- **Analysis:** Understanding context, relationships, and goals
- **Synthesis:** Transforming raw data into coherent narratives
- **Inference:** Deducing status from evidence
- **Prioritization:** Making strategic decisions about importance
- **Writing:** Creating natural, meaningful summaries

Without intelligent reasoning, this workflow cannot produce meaningful results.

---

## 📚 Related Documentation

- **Workflow Definition:** `workflows/update-kanban-workflow.yaml`
- **Cursor Rules:** `cursorrules-ukw-trigger-section.md`
- **Release Workflow:** `release-workflow-agent-execution.md`
- **Kanban Governance:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`

---

_This workflow ensures kanban documentation accurately reflects project state, preventing status drift._

