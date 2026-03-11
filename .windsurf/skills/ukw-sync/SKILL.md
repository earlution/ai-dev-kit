---
name: ukw-sync
description: Update kanban boards with status inference and MoSCOW prioritization
---

## Update Kanban Workflow Execution

### Intelligence Requirements

This workflow requires significant agentic intelligence at every step:

- **Synthesize intelligently:** Transform raw task/story data into coherent narratives
- **Infer status:** Deduce completion state from evidence (commits, FR/BR/UXRs, file changes)
- **Prioritize strategically:** Classify tasks using MoSCOW methodology based on goals and dependencies
- **Understand context:** Grasp relationships, dependencies, and strategic context
- **Write narratives:** Create natural, readable summaries that capture progress
- **Validate consistency:** Detect contradictions and misalignments

### Key Principle

**Bottom-up approach:** Update Tasks → Stories → Epics → Board (in that order)
The MoSCOW priority list is updated LAST.

### Step Sequence

**Step 1: Bookkeeping (Task Status Updates)**
- Analyze all tasks for completion status
- Infer task completion from evidence:
  - Git commits and version changes
  - FR/BR/UXR documents and their status
  - File changes and implementation evidence
  - Acceptance criteria fulfillment
- Update task status (TODO → IN PROGRESS → COMPLETE)
- Write meaningful progress summaries

**Step 2: Story Status Inference**
- Analyze story completion based on task status
- Determine if stories are COMPLETE based on task completion
- Update story status and documentation
- Write coherent story-level summaries
- Ensure consistency between tasks and stories

**Step 3: Epic Status Evaluation**
- Evaluate epic completion based on story status
- Update epic status and documentation
- Write strategic epic-level summaries
- Assess overall project progress

**Step 4: MoSCOW Prioritization**
- Analyze all incomplete tasks/stories/epics
- Apply MoSCOW prioritization based on:
  - Project goals and strategic importance
  - Dependencies and blocking relationships
  - Impact and urgency
  - Resource availability and deadlines
- Update kanban board priority sections
- Ensure consistent prioritization across hierarchy

**Step 5: Board Synchronization**
- Update kanban-board.md with latest status
- Ensure all sections reflect current reality
- Validate consistency across all documents
- Update board version and metadata

**Step 6: Board Cleanup**
- Scan all MoSCOW sections for COMPLETED tasks
- Remove COMPLETED tasks from active MoSCOW sections
- Invoke Documentation Agent for kanban_completed_update skill
- Archive completed tasks with timestamps to kanban-completed.md
- Validate active sections contain only IN PROGRESS/TODO tasks
- Ensure board organization reflects current work priorities

### Integration Points

- Works with Intake Agent for new task processing
- Coordinates with Documentation Agent for kanban-completed.md updates
- Provides status information to RW Agent
- Uses Documentation Agent for completed task archival
