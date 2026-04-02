---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-11T15:24:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 6, Task 41: Windsurf: Investigate how to leverage AGENTS.md and SKILL.md for workflows

**Status:** COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-03-11 (v0.6.6.41+1 – Implementation complete)  
**Started:** 2026-03-11  
**Completed:** 2026-03-11  
**Version:** v0.6.6.3+2  
**Code:** E6S06T41

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`

**Full Task ID:** `E6:S06:T41`

**Repository Pattern:** FR-041 = E6:S06:T41 (abstract space: v0.6.6.3+2)

---

## Scope

Investigate and implement AGENTS.md and SKILL.md to define specialized workflow agents and capabilities, enabling Cascade to execute workflows autonomously without manual intervention.

**Problem Statement:**
- Current Cascade agent behavior is generic and doesn't understand specialized workflows
- Workflow execution requires manual guidance and intervention
- Terminal interaction issues with agent command execution
- No agent specialization for different workflow types (RW, UKW, etc.)
- Inconsistent agent behavior across complex multi-step workflows

**Solution:**
- Research Windsurf AGENTS.md and SKILL.md specifications
- Design specialized agent definitions for each workflow type
- Implement skill definitions for workflow step capabilities
- Test autonomous workflow execution with proper agent configuration
- Document agent configuration patterns for workflow maintainers

---

## Input

- **Source Material:** [Windsurf Changelog](https://windsurf.com/changelog) - Recent AGENTS.md and SKILL.md support announcement
- **Source URL:** [windsurf.com/changelog](https://windsurf.com/changelog)
- **FR-041:** [`FR-041-windsurf-investigate-agents-skills-for-workflows.md`](../../../fr-br/FR-041-windsurf-investigate-agents-skills-for-workflows.md)
- **Workflow Framework:** `packages/frameworks/workflow mgt/` - Existing workflow infrastructure
- **Current Agent Issues:** Terminal interaction problems, workflow execution inconsistencies

---

## Deliverables

### Phase 1: Research and Analysis
- [ ] **AGENTS.md Specification Research** - Document Windsurf AGENTS.md format and capabilities
- [ ] **SKILL.md Specification Research** - Document Windsurf SKILL.md format and skill definition patterns
- [ ] **Current Workflow Analysis** - Analyze existing ai-dev-kit workflows for agent specialization opportunities
- [ ] **Agent Architecture Design** - Design agent definitions for each workflow type
- [ ] **Skill Architecture Design** - Design skill definitions for workflow capabilities

### Phase 2: Implementation
- [ ] **AGENTS.md Creation** - Create specialized agent definitions for RW, UKW, MW, FR/BR agents
- [ ] **SKILL.md Creation** - Create skill definitions for version bumping, changelog generation, git operations, kanban updates
- [ ] **Agent Testing** - Test agent behavior with simple workflow steps
- [ ] **Workflow Integration** - Integrate agent definitions with existing workflow infrastructure

### Phase 3: Validation and Documentation
- [ ] **RW -d Testing** - Test complete RW -d workflow execution with autonomous agents
- [ ] **UKW Testing** - Test UKW workflow with kanban-specialized agents
- [ ] **Terminal Validation** - Validate proper git command execution through agents
- [ ] **Documentation Creation** - Create agent configuration guides and best practices

### Phase 4: Production Deployment
- [ ] **Production Testing** - Test agent definitions in production environment
- [ ] **Performance Monitoring** - Monitor agent execution overhead and optimization
- [ ] **User Training** - Train team on new agent configuration patterns
- [ ] **Maintenance Process** - Establish process for ongoing agent capability updates

---

## Implementation Details

### Agent Types to Define

**RW Agent (Release Workflow Specialist)**
- Capabilities: Version bumping, changelog generation, git operations, validation
- Skills: `version_bump`, `changelog_create`, `git_commit`, `branch_safety_check`

**UKW Agent (Universal Kanban Workflow Specialist)**
- Capabilities: Kanban board updates, task creation, status management
- Skills: `kanban_update`, `task_create`, `status_change`, `epic_story_update`

**MW Agent (Migration Workflow Specialist)**
- Capabilities: File migration, transformation, validation
- Skills: `file_migrate`, `transform_content`, `migration_validate`

**FR/BR Agent (Feature Request/Bug Report Specialist)**
- Capabilities: Request processing, task creation, intake workflow
- Skills: `request_process`, `intake_analyze`, `task_generate`

**Validation Agent (Validation Specialist)**
- Capabilities: Branch safety, changelog format, compliance checks
- Skills: `branch_validate`, `changelog_validate`, `compliance_check`

**Documentation Agent (Documentation Specialist)**
- Capabilities: README updates, documentation generation, content updates
- Skills: `readme_update`, `docs_generate`, `content_update`

### Skill Categories

**Git Operations**
- `git_add` - Stage files for commit
- `git_commit` - Create commits with proper messages
- `git_status` - Check repository status
- `git_branch` - Branch operations and validation

**Version Management**
- `version_bump` - Update version files
- `version_validate` - Validate version format
- `changelog_create` - Generate changelog entries
- `changelog_validate` - Validate changelog format

**Kanban Operations**
- `kanban_update` - Update kanban board entries
- `task_complete` - Mark tasks as complete
- `epic_update` - Update epic documentation
- `story_update` - Update story documentation

**Validation Operations**
- `branch_safety_check` - Validate branch context
- `format_validate` - Validate file formats
- `compliance_check` - Check compliance with standards

---

## Success Criteria

### Technical Success
- AGENTS.md successfully defines specialized workflow agents
- SKILL.md successfully defines workflow step capabilities
- Cascade executes RW -d workflow autonomously without manual intervention
- Terminal commands execute properly through agent definitions
- Validation scripts run correctly through specialized agents
- Multi-step workflows complete end-to-end without user guidance

### User Experience Success
- Reduced frustration with workflow execution
- Fewer "script monkey" behavior incidents
- Clear agent behavior and predictable responses
- Improved workflow reliability and consistency
- Better error messages and recovery suggestions

### Workflow Success
- RW workflows execute with proper agent specialization
- UKW workflows benefit from kanban-specialized agents
- FR/BR processing uses intake-specialized agents
- Documentation updates handled by documentation-specialized agents
- Validation steps handled by validation-specialized agents

---

## Dependencies

### External Dependencies
- **Windsurf AGENTS.md Specification** - Must follow exact format requirements
- **Windsurf SKILL.md Specification** - Must use proper skill definition syntax
- **Cascade Agent System** - Must support custom agent definitions
- **MCP Integration** - Model Context Protocol for agent communication

### Internal Dependencies
- **Workflow Infrastructure** - Integration with existing rw-config.yaml and scripts
- **Kanban System** - Agent access to kanban board updates
- **Git Integration** - Agent access to git operations
- **Validation Scripts** - Agent access to branch safety and changelog validation

---

## Risk Assessment

### High Risks
- **AGENTS.md/SKILL.md Format Changes** - Windsurf specification changes could break implementation
- **Agent Behavior Inconsistency** - New agent definitions might introduce unexpected behaviors
- **Terminal Interaction Issues** - Agent-based command execution might have different limitations

### Medium Risks
- **Performance Overhead** - Agent specialization might slow down workflow execution
- **Maintenance Complexity** - Additional agent configuration increases maintenance burden
- **Learning Curve** - Team needs to learn new agent configuration patterns

### Low Risks
- **Backward Compatibility** - Existing workflows might behave differently with new agents
- **Documentation Overhead** - Need to maintain additional agent documentation
- **Testing Complexity** - More agent combinations to test and validate

---

## Testing Strategy

### Unit Testing
- Test individual agent definitions
- Test skill definitions in isolation
- Validate AGENTS.md and SKILL.md format compliance

### Integration Testing
- Test agent behavior with workflow steps
- Test multi-agent coordination
- Validate terminal command execution through agents

### End-to-End Testing
- Test complete RW -d workflow execution
- Test UKW workflow with kanban agents
- Test FR/BR processing with intake agents

### Performance Testing
- Monitor agent execution overhead
- Validate workflow completion times
- Test concurrent agent operations

---

## Documentation Requirements

### Agent Configuration Guide
- How to define new agents
- Agent specification reference
- Best practices for agent design

### Skill Definition Guide
- How to define new skills
- Skill specification reference
- Skill category organization

### Integration Documentation
- How agents integrate with workflows
- Troubleshooting agent issues
- Performance optimization guidelines

### Maintenance Documentation
- Agent update procedures
- Skill maintenance processes
- Testing and validation procedures

---

## Timeline Estimates

### Phase 1: Research and Analysis (1 week)
- AGENTS.md and SKILL.md specification research
- Current workflow analysis
- Agent and skill architecture design

### Phase 2: Implementation (2 weeks)
- AGENTS.md and SKILL.md creation
- Agent testing and validation
- Workflow integration

### Phase 3: Validation and Documentation (1 week)
- End-to-end workflow testing
- Documentation creation
- User training preparation

### Phase 4: Production Deployment (1 week)
- Production testing and monitoring
- Team training and rollout
- Maintenance process establishment

**Total Estimated Duration:** 5 weeks

---

## Related Work

### Related Tasks
- **E6:S06:T02** - Fix Release Workflow Micromanagement Issues (addresses similar agent behavior issues)
- **E5:S01:T31** - Multi-Agent Coordination Feasibility Investigation (broader agent coordination research)
- **E6:S07:T106** - Windsurf Migration: .cursorrules to Workflow Equivalents (Windsurf integration)

### Related Features and Bug Reports
- **BR-038** - Release Workflow micromanagement and tool discovery issues
- **FR-010** - Implement actual agentic intelligence task mapping
- **FR-012** - Agentic kanban task creation from FR/BR

### Related Documentation
- **Windsurf Changelog** - AGENTS.md and SKILL.md feature announcement
- **Cascade Documentation** - Agent system specifications
- **Workflow Documentation** - Current workflow execution patterns

---

**Impact Assessment:** HIGH - This investigation could fundamentally improve workflow execution reliability and reduce manual intervention requirements across all ai-dev-kit workflows.

**Success Probability:** HIGH - Clear problem definition, recent Windsurf feature support, and direct alignment with current pain points.

---

*End of Task Document*
