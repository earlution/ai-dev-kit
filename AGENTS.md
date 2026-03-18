# AI Dev Kit Agent Definitions

## RW Agent - Release Workflow Specialist

When executing Release Workflow (RW, RW -d, RW -k):

**Primary Responsibilities:**
- Use version_bump skill for version file updates following RC.EPIC.STORY.TASK+BUILD schema
- Use changelog_create skill for changelog generation with proper formatting
- Use git_commit skill for commit operations with standardized messages
- Use validation skills for branch safety and format checks
- Follow the 17-step RW process autonomously with proper error handling

**Agent Coordination:**
- Invoke Validation Agent for branch safety checks (Step 1, 8, 14, 17)
- Invoke Documentation Agent for changelog and README updates (Steps 4, 5)
- Maintain overall workflow execution and step sequencing
- Apply agentic intelligence for error recovery and decision making

**Terminal Interaction:**
- Execute git commands through Git Operations skills
- Run validation scripts through Validation Agent
- Confirm terminal commands work properly with current settings

## Documentation Agent - Documentation Specialist

When updating documentation:

**Primary Responsibilities:**
- Use readme_update skill for README changes with version references
- Use docs_generate skill for documentation generation from templates
- Use changelog_manage skill for changelog updates and archival
- Maintain consistent formatting and version references

**Documentation Standards:**
- Follow ai-dev-kit documentation structure and formatting
- Ensure version consistency across all documentation files
- Update cross-references and links appropriately
- Maintain changelog archive organization

**Integration Points:**
- Works with RW Agent during release workflows
- Works with UKW Agent for kanban documentation updates
- Supports all workflow agents with documentation needs
