---
description: Update Kanban Workflow (UKW) with 3 operational modes for comprehensive kanban management
---

# Update Kanban Workflow (UKW) - Enhanced Operational Modes

UKW provides systematic kanban board management with three distinct operational modes:

## Mode 1: Update MoSCOW Prioritization Section (`UKW` or `UKW -m`)

**Purpose:** Ensure MoSCOW prioritization reflects current project state by moving completed tasks and adding newly created tasks with intelligent prioritization.

**Steps:**
1. **Bookkeeping (Task Status Updates):**
   - Analyze all tasks for completion status
   - Infer task completion from evidence (commits, FR/BR/UXRs, file changes)
   - Update task status (TODO → IN PROGRESS → COMPLETE)
   - Write meaningful progress summaries

2. **Story Status Inference:**
   - Analyze story completion based on task status
   - Update story status and documentation
   - Ensure consistency between tasks and stories

3. **Epic Status Evaluation:**
   - Evaluate epic completion based on story status
   - Update epic status and documentation

4. **MoSCOW Prioritization:**
   - Apply MoSCOW prioritization based on goals, dependencies, impact, and urgency
   - Update kanban board priority sections

5. **Board Synchronization:**
   - Update kanban-board.md with latest status
   - Validate consistency across all documents

6. **Board Cleanup:**
   - Move COMPLETED tasks to kanban-completed.md
   - Archive completed tasks with timestamps
   - Ensure active sections contain only IN PROGRESS/TODO tasks

## Mode 2: Task Inconsistency Analysis (`UKW -t`)

**Purpose:** Ensure all tasks reflect current state and maintain proper inter-document cross-wiring.

**Steps:**
1. **Task State Validation:**
   - Analyze all tasks (including completed) for current state
   - Use agentic intelligence to ascertain actual completion status
   - Update status inconsistencies with evidence-based determinations

2. **Cross-Wiring Verification:**
   - Ensure all required inter-document references are in place
   - Validate task ↔ story ↔ epic relationships
   - Check FR/BR/UXR ↔ task linkages
   - Repair any broken cross-references

3. **Consistency Enforcement:**
   - Align task status across all kanban documents
   - Update board sections to reflect corrected status
   - Maintain temporal accuracy of completion timestamps

## Mode 3: Deep Analysis for Missing Kanban Docs (`UKW -d`)

**Purpose:** Identify potentially missing or lost kanban documentation by analyzing evidence across all project documents.

**Steps:**
1. **Document Inventory Analysis:**
   - Catalog all existing kanban docs (epics, stories, tasks)
   - Map FR/BR/UXR documents to associated kanban tasks
   - Review CHANGELOG entries for task completion evidence

2. **Gap Detection:**
   - Identify FR/BR/UXR items without corresponding kanban tasks
   - Find CHANGELOG entries referencing unimplemented tasks
   - Detect orphaned task documents without proper epic/story context

3. **Evidence Correlation:**
   - Cross-reference commit messages with task completion
   - Analyze version bumps for missing task documentation
   - Review implementation evidence for undocumented work

4. **Missing Document Creation:**
   - Generate missing task documents with proper metadata
   - Create placeholder tasks for identified gaps
   - Establish proper cross-wiring for newly discovered items

## General UKW Principles

- **Bottom-up approach:** Tasks → Stories → Epics → Board
- **Agentic intelligence:** Synthesize narratives, infer status, prioritize strategically
- **Comprehensive coverage:** All kanban, FR/BR/UXR, and CHANGELOG docs analyzed
- **Temporal accuracy:** Maintain precise completion timestamps and version tracking
- **Cross-document consistency:** Ensure bidirectional references and status alignment

## Integration Points

- **Intake Agent:** Coordinate with FR/BR/UXR processing
- **Documentation Agent:** Use for kanban-completed.md updates
- **RW Agent:** Synchronize with release workflow status
- **CMW Agent:** Align with changelog maintenance

## Execution Triggers

- **Manual:** Invoke specific modes as needed (`UKW`, `UKW -m`, `UKW -t`, `UKW -d`)
- **Automated:** Run full synchronization before/after major operations
- **Perpetual:** Continuous monitoring for kanban consistency

// turbo
## Quick Commands

- `UKW` or `UKW -m`: Update MoSCOW prioritization and board cleanup
- `UKW -t`: Task inconsistency analysis and cross-wiring repair  
- `UKW -d`: Deep analysis for missing kanban documentation
