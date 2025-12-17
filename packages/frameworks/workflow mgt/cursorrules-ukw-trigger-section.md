---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T23:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Cursor Rules: UKW Trigger Section

**Purpose:** This section should be added to your project's `.cursorrules` file to enable the "UKW" trigger for Update Kanban Workflow execution.

**Location in `.cursorrules`:** Add this section in the "Version Control and Release Process" section (or equivalent), after the RW trigger section.

**Last Updated:** 2025-12-17  
**Source Project:** ai-dev-kit  
**Version:** 1.0.0

---

### 🔄 UPDATE KANBAN WORKFLOW (UKW) TRIGGER

**When the user types "UKW" or "ukw" (case-insensitive), execute the Update Kanban Workflow as an intelligent agent:**

1. **DO NOT** run any deterministic scripts
2. **DO** execute the Update Kanban Workflow using the **intelligent agent-driven execution pattern**
3. **🧠 AGENTIC INTELLIGENCE REQUIRED:** This workflow requires significant intelligent reasoning:
   - **Synthesis:** Analyze multiple data points and create coherent tactical/strategic summaries
   - **Narrative Updates:** Write natural, meaningful summaries that capture progress and context
   - **Prioritization:** Determine MoSCoW priorities based on project goals, dependencies, and impact
   - **Status Inference:** Intelligently infer task/story status from commits, FR/BR/UXRs, and file changes
   - **Consistency Analysis:** Detect contradictions and align status across hierarchy
   - **Context Understanding:** Understand project state, goals, and relationships between work items
4. **LOAD CONFIG FIRST (MANDATORY):** Before Step 1, load `rw-config.yaml` from project root if it exists and `use_kanban: true`. Use config values for kanban paths. If config doesn't exist, use default paths.
5. **Follow** the step-by-step guide below using **BOTTOM-UP APPROACH**
6. **Execute all steps** using the ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern with **intelligent reasoning at each step**
7. **Document** each step's analysis, reasoning, decisions, actions, and results
8. **MUST USE Cursor TODOs:** Create and maintain a TODO list tracking all 8 steps

**🔧 Config-Driven Approach (Preferred):**

If `rw-config.yaml` exists in project root and `use_kanban: true`, **MUST** load it and use its values:
- `kanban_root` → Use for Kanban root directory
- `epic_doc_pattern` → Use for epic document pattern
- `story_doc_pattern` → Use for story document pattern
- `kanban_board` → Use for kanban board file path
- `fr_br_root` → Use for FR/BR root (if specified)

**Default Paths (if config not available):**
- `kanban_root`: `docs/project-management/kanban`
- `epic_doc_pattern`: `epics/Epic-{epic}/Epic-{epic}.md`
- `story_doc_pattern`: `epics/Epic-{epic}/Story-{story}-*.md`
- `task_doc_pattern`: `epics/Epic-{epic}/Story-{story}/T{task}-*.md`
- `kanban_board`: `kanban-board.md`
- `fr_br_root`: `fr-br`

**🚨 MANDATORY: Progress Tracking with Cursor TODOs**

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list for all 8 UKW steps:

1. **At Workflow Start:** Create TODO list with all 8 steps as `pending`
2. **Before Each Step:** Mark step as `in_progress`
3. **After Each Step:** Mark step as `completed` and mark next step as `in_progress`
4. **On Completion:** All steps marked as `completed`

**Agent Execution Pattern:**

For each step, follow this pattern:
1. **ANALYZE** - Understand step requirements and context
2. **DETERMINE** - Decide what actions to take
3. **EXECUTE** - Perform the actions
4. **VALIDATE** - Verify execution succeeded
5. **PROCEED** - Document and move to next step

**The 8 Steps (Bottom-Up Approach):**

1. **Analyze Recent Activity** - **MANDATORY FIRST STEP:**
   - **ANALYZE:**
     - Check git commit history for last 7 days (or configured days)
     - Scan FR/BR/UXR directory for recent files
     - Identify file changes in kanban directories
     - Map commits to Epic/Story/Task identifiers
   - **DETERMINE:**
     - Which tasks may have been completed
     - Which stories may need status updates
     - Which epics may need status updates
     - Recent BR/FR/UXRs that may affect task status
   - **EXECUTE:**
     - Run `git log --since="7 days ago" --oneline` (or configured days)
     - List recent FR/BR/UXR files by modification date
     - Identify changed kanban documents
   - **VALIDATE:**
     - Activity analysis complete
     - Relevant changes identified
   - **PROCEED:**
     - Document findings
     - Move to Step 2

2. **Update Task Documents** - **BOTTOM-UP STEP 1:**
   - **ANALYZE:**
     - For each task document in kanban structure:
       - Read current task status
       - Compare with recent commits (task completion indicators)
       - Check related BR/FR/UXR status
       - Review task acceptance criteria vs recent changes
   - **DETERMINE:**
     - Which tasks should be marked COMPLETE
     - Which tasks need status updates (TODO → IN PROGRESS, etc.)
     - Which tasks need "Last updated" date updates
     - Which tasks need forensic markers added
   - **EXECUTE:**
     - Update task document status fields
     - Update "Last updated" dates
     - Add forensic markers if tasks completed
     - Update task descriptions if acceptance criteria met
   - **VALIDATE:**
     - Task status aligns with recent activity
     - Task documents reflect current state
   - **PROCEED:**
     - Document updated tasks
     - Move to Step 3

3. **Update Story Documents** - **BOTTOM-UP STEP 2:**
   - **ANALYZE (🧠 INTELLIGENCE REQUIRED):**
     - For each story document:
       - Read all task documents in story
       - **Synthesize intelligently:** Analyze task completion patterns, identify key accomplishments, understand blockers, recognize progress themes
       - **Infer story status:** Determine story-level status based on task completion state AND story goals (not just counting tasks)
       - Check story acceptance criteria and assess if met
       - Understand story context and relationship to epic goals
   - **DETERMINE (🧠 INTELLIGENCE REQUIRED):**
     - Story status (TODO → IN PROGRESS → COMPLETE) - requires intelligent assessment, not just task counting
     - Task checklist updates needed
     - **Tactical overview updates:** Create meaningful narrative that synthesizes task progress into coherent story progression (NOT just listing tasks)
     - Story "Last updated" date
   - **EXECUTE:**
     - Update story status field
     - Update task checklist with completion markers
     - **Write tactical overview:** Create natural, readable summary that captures:
       - Key accomplishments from completed tasks
       - Current work in progress
       - Blockers or issues identified
       - Progress toward story goals
       - Strategic context within epic
     - Update "Last updated" date
     - Add forensic markers if story completed
   - **VALIDATE:**
     - Story status matches task completion state AND story goals
     - Task checklist accurate
     - Tactical overview is meaningful narrative, not just task list
     - Overview reflects current progress and context
   - **PROCEED:**
     - Document updated stories
     - Move to Step 4

4. **Update Epic Documents** - **BOTTOM-UP STEP 3:**
   - **ANALYZE (🧠 INTELLIGENCE REQUIRED):**
     - For each epic document:
       - Read all story documents in epic
       - **Synthesize intelligently:** Analyze story completion patterns, identify strategic achievements, understand epic-level blockers, recognize thematic progress
       - **Infer epic status:** Determine epic-level status based on story completion AND epic goals (not just counting stories)
       - Check epic goals/acceptance criteria and assess progress
       - Understand epic strategic context within project
   - **DETERMINE (🧠 INTELLIGENCE REQUIRED):**
     - Epic status (TODO → IN PROGRESS → COMPLETE) - requires intelligent assessment of strategic progress
     - Story checklist updates needed
     - **Strategic overview updates:** Create high-level narrative that synthesizes story progress into coherent epic progression (NOT just listing stories)
     - Epic "Last updated" date
   - **EXECUTE:**
     - Update epic status field
     - Update story checklist with completion markers
     - **Write strategic overview:** Create natural, readable summary that captures:
       - Key strategic achievements from completed stories
       - Current strategic initiatives in progress
       - Epic-level blockers or strategic challenges
       - Progress toward epic goals
       - Strategic context within project vision
     - Update "Last updated" date
   - **VALIDATE:**
     - Epic status matches story completion state AND epic goals
     - Story checklist accurate
     - Strategic overview is meaningful narrative, not just story list
     - Overview reflects strategic progress and context
   - **PROCEED:**
     - Document updated epics
     - Move to Step 5

5. **Update Kanban Board** - **BOTTOM-UP STEP 4 (FINAL):**
   - **ANALYZE (🧠 INTELLIGENCE REQUIRED):**
     - Read current kanban board
     - Compare with updated Epic/Story/Task documents
     - Identify MoSCoW priority sections
     - Check epic summaries
     - **Understand prioritization context:** Analyze project goals, dependencies, deadlines, impact, and strategic importance
   - **DETERMINE (🧠 INTELLIGENCE REQUIRED):**
     - **MoSCoW priority classification:** Intelligently determine Must Have (M), Should Have (S), Could Have (C), Won't Have (W) based on:
       - Project goals and strategic importance
       - Dependencies and blocking relationships
       - Deadlines and time constraints
       - Impact and value delivery
       - Resource constraints
       - Risk assessment
     - Epic status updates
     - Story summaries in epic sections
     - "Last updated" date for board
   - **EXECUTE:**
     - **LAST: Update MoSCoW priority list (🧠 REQUIRES INTELLIGENT PRIORITIZATION):**
       - Remove completed tasks from "In Progress" sections
       - **Classify tasks intelligently:** Assign each in-progress task to appropriate MoSCoW category based on strategic analysis (not just copying from existing)
       - Add new in-progress tasks to appropriate MoSCoW sections
       - Order tasks within each section chronologically (most recently updated first)
     - Update epic status sections
     - Update epic story lists
     - Update board "Last updated" date and version
   - **VALIDATE:**
     - MoSCoW classifications are strategically sound and consistent
     - MoSCoW list matches current in-progress tasks
     - Epic summaries match epic documents
     - All links valid
   - **PROCEED:**
     - Document board updates and prioritization rationale
     - Move to Step 6

6. **Validate Consistency** - **MANDATORY VALIDATION STEP:**
   - **ANALYZE:**
     - Compare status across all kanban documents
     - Check version consistency
     - Verify link integrity
   - **DETERMINE:**
     - Status alignment issues
     - Version inconsistencies
     - Broken links
   - **EXECUTE:**
     - Cross-reference task status → story status → epic status
     - Verify version markers consistency
     - Check all internal links
   - **VALIDATE:**
     - All documents consistent
     - No contradictions
   - **PROCEED:**
     - Document validation results
     - Move to Step 7

7. **Stage Files** - **GIT OPERATION:**
   - **ANALYZE:**
     - Identify all modified kanban files
   - **DETERMINE:**
     - Files to stage
   - **EXECUTE:**
     - Run `git add` for all kanban files
   - **VALIDATE:**
     - Files staged successfully
   - **PROCEED:**
     - Document staged files
     - Move to Step 8

8. **Document Changes** - **FINAL STEP:**
   - **ANALYZE:**
     - Review all changes made
   - **DETERMINE:**
     - Summary of updates
   - **EXECUTE:**
     - Create summary of updated documents
     - List key status changes
   - **VALIDATE:**
     - Summary complete
   - **PROCEED:**
     - Present summary to user
     - Workflow complete

**🔑 Key Principles:**

1. **Bottom-Up Approach:** Always update Tasks → Stories → Epics → Board (in that order)
2. **MoSCoW List Last:** The MoSCoW priority list in the kanban board is the LAST thing to update
3. **Synthesize Intelligently, Don't Duplicate:** Story/Epic updates require intelligent synthesis of lower-level data into meaningful narratives, not just copying task/story lists
4. **Intelligent Status Inference:** Status updates require reasoning about completion state, not just counting checkboxes
5. **Strategic Prioritization:** MoSCoW classification requires understanding of goals, dependencies, impact, and strategic context
6. **Meaningful Narratives:** Tactical/strategic overviews must be natural, readable summaries that capture progress and context
7. **Status Consistency:** Ensure status flows correctly up the hierarchy with intelligent validation
8. **Consider Recent Activity:** Always check recent commits and FR/BR/UXRs to detect status changes

**🧠 Intelligence Requirements:**

- **Synthesis:** Transform raw task/story data into coherent, meaningful narratives
- **Inference:** Deduce status from evidence (commits, FR/BR/UXRs, file changes, acceptance criteria)
- **Prioritization:** Classify tasks by strategic importance, not just existing labels
- **Context Understanding:** Understand relationships, dependencies, goals, and strategic context
- **Narrative Writing:** Create natural, readable summaries that capture progress and tell a story
- **Consistency Analysis:** Detect contradictions and misalignments across documents

**📋 Workflow YAML:**

The workflow definition is located at:
- `packages/frameworks/workflow mgt/workflows/update-kanban-workflow.yaml`

**📚 Related Documentation:**

- Release Workflow (RW): Updates kanban docs as part of release process
- UKW: Standalone workflow for comprehensive kanban sync
- Kanban Governance Policy: `packages/frameworks/kanban/policies/kanban-governance-policy.md`

---

_This trigger enables comprehensive kanban documentation synchronization to prevent status drift between kanban docs and actual project state._

