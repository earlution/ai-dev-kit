---
name: intake-process
description: Process FR/BR/UXR intake into tasks
---

## Intake Workflow Execution

### Intelligence Requirements

This workflow requires significant agentic intelligence:

- **Analyze comprehensively:** Understand FR/BR/UXR content and requirements
- **Prioritize strategically:** Determine MoSCOW priorities based on impact and goals
- **Create tasks:** Generate appropriate task documents with proper structure
- **Wire dependencies:** Establish task relationships and dependencies
- **Understand context:** Grasp project goals and strategic alignment

### Step Sequence

**Step 1: Repository Assignment**
- Analyze FR/BR/UXR content and requirements
- Determine appropriate repository assignment
- Consider project scope and domain
- Validate assignment decision

**Step 2: Analysis & Decision**
- Perform detailed analysis of requirements
- Determine feasibility and complexity
- Assess impact and urgency
- Make intake/rejection decision with reasoning

**Step 3: Epic/Story Assignment**
- Determine appropriate epic assignment
- Create or identify appropriate story
- Ensure proper hierarchical placement
- Validate structure consistency

**Step 4: Task Creation**
- Create task document with proper structure
- Include comprehensive requirements and acceptance criteria
- Assign appropriate version and build numbers
- Ensure task completeness and clarity

**Step 5: Documentation Updates**
- Update kanban board with new task
- Create FR/BR/UXR documents if needed
- Update project documentation
- Ensure consistency across all documents

**Step 6: Dependency Wiring**
- Identify and establish task dependencies
- Wire task to appropriate epic/story
- Update cross-references and links
- Validate dependency relationships

**Step 7: Integration & Validation**
- Validate complete intake process
- Ensure all documents are properly linked
- Verify kanban board consistency
- Confirm successful integration

### Integration Points

- Works with UKW Agent for kanban updates
- Supports Documentation Agent for task documentation
- Provides task creation services to all workflows

### Task Structure

**Format:** `E{epic}:S{story}:T{task}`
**Example:** `E6:S06:T41`
**Location:** `docs/project-management/kanban/epics/Epic-{epic}/Story-{story}/T{task}-task-name.md`

### Validation Rules

- Tasks follow proper naming conventions
- Documents are properly structured and formatted
- Dependencies are correctly established
- Kanban board reflects accurate status
