---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-11T16:30:00Z
expires_at: null
housekeeping_policy: keep
---

# kanban_completed_update Skill

**Skill ID:** kanban_completed_update  
**Agent:** Documentation Agent  
**Version:** v0.5.1.49+1  
**Created:** 2026-03-11  

---

## Purpose

Maintain and update `kanban-completed.md` with completion timestamps, recent tasks dashboard, and consistent formatting. This skill provides the standard interface for all agents to update completed task information.

---

## Primary Responsibilities

### **Document Maintenance**
- Update kanban-completed.md with task completion information
- Maintain completion timestamps in ISO 8601 format
- Update "20 Most Recently Completed Tasks" dashboard
- Ensure consistent formatting across all entries

### **Agent Coordination**
- Provide standard update interface for other agents
- Validate timestamp format and consistency
- Handle recent tasks dashboard updates
- Maintain document integrity and structure

### **Validation and Quality**
- Validate task completion information
- Ensure proper timestamp formatting
- Check for duplicate entries
- Maintain backward compatibility during transition

---

## Update Interface

### **Standard Update Method**
```python
Documentation Agent.update_kanban_completed({
  task_id: "E5:S01:T48",
  status: "COMPLETE", 
  version: "v0.5.1.48+1",
  timestamp: "2026-03-11T16:20:00Z",
  completing_agent: "RW Agent",
  description: "ICW Task Identifier Argument"
})
```

### **Required Parameters**
- `task_id`: Task identifier (E5:S01:T48 format)
- `status`: Task status (COMPLETE, IN PROGRESS, etc.)
- `version`: Version marker (v0.5.1.48+1 format)
- `timestamp`: ISO 8601 completion timestamp
- `completing_agent`: Agent responsible for completion
- `description`: Task description (optional, for validation)

### **Optional Parameters**
- `epic_id`: Epic identifier for categorization
- `story_id`: Story identifier for organization
- `notes`: Additional completion notes

---

## Implementation Steps

### **Step 1: Validate Input**
- Verify required parameters are present
- Validate task ID format (E5:S01:T48)
- Check timestamp format (ISO 8601)
- Validate version format (vRC.EPIC.STORY.TASK+BUILD)

### **Step 2: Update Task Entry**
- Locate or create appropriate Epic/Story section
- Update task entry with new timestamp format
- Ensure consistent formatting: `✅ COMPLETE (v0.5.1.48+1, 2026-03-11T16:20:00Z)`
- Maintain alphabetical ordering within sections

### **Step 3: Update Recent Tasks Dashboard**
- Add or update entry in "20 Most Recently Completed Tasks" table
- Sort by completion timestamp (most recent first)
- Limit to exactly 20 entries
- Remove oldest entries if exceeding limit

### **Step 4: Validate Document Structure**
- Ensure proper markdown formatting
- Validate table structure and alignment
- Check for duplicate entries
- Maintain document metadata and versioning

### **Step 5: Update Document Metadata**
- Update "Last Updated" field
- Increment version number if needed
- Add completion timestamp to document header
- Maintain audit trail of changes

---

## Error Handling

### **Validation Errors**
- Missing required parameters
- Invalid task ID format
- Invalid timestamp format
- Invalid version format

### **Document Errors**
- Duplicate task entries
- Inconsistent formatting
- Table structure issues
- Missing sections

### **Recovery Actions**
- Log validation failures
- Provide clear error messages
- Suggest corrective actions
- Maintain document integrity

---

## Integration Points

### **RW Agent Integration**
- Called during release workflow Step 7
- Updates task completion information
- Provides completion timestamps from git commits

### **UKW Agent Integration**
- Called during board cleanup (Step 6)
- Archives completed tasks with timestamps
- Updates recent tasks dashboard

### **Intake Agent Integration**
- Called during task creation/completion
- Updates task status changes
- Maintains completion tracking

### **Self-Updates**
- Documentation Agent can directly invoke
- Handles manual updates and corrections
- Maintains document consistency

---

## Quality Assurance

### **Format Validation**
- ISO 8601 timestamp format: `YYYY-MM-DDTHH:MM:SSZ`
- Version format: `vRC.EPIC.STORY.TASK+BUILD`
- Task ID format: `E{epic}:S{story}:T{task}`

### **Consistency Checks**
- Uniform formatting across all entries
- Proper table structure and alignment
- Consistent metadata and versioning
- Valid markdown syntax

### **Performance Considerations**
- Efficient document parsing and updates
- Minimal impact on existing workflows
- Scalable for large task volumes
- Fast validation and error reporting

---

## Backward Compatibility

### **Transition Support**
- Support both old and new formats during migration
- Gradual update of existing entries
- Format detection and conversion
- Validation without breaking existing functionality

### **Migration Strategy**
- Update existing entries with estimated timestamps
- Maintain original version information
- Preserve task descriptions and metadata
- Ensure no data loss during transition

---

## Usage Examples

### **Basic Task Completion**
```python
Documentation Agent.update_kanban_completed({
  task_id: "E5:S01:T48",
  status: "COMPLETE",
  version: "v0.5.1.48+1",
  timestamp: "2026-03-11T16:20:00Z",
  completing_agent: "RW Agent"
})
```

### **Task Status Update**
```python
Documentation Agent.update_kanban_completed({
  task_id: "E5:S01:T47",
  status: "IN PROGRESS",
  version: "v0.5.1.47+3",
  timestamp: "2026-03-11T15:30:00Z",
  completing_agent: "Documentation Agent"
})
```

### **Batch Updates**
```python
for task in completed_tasks:
  Documentation Agent.update_kanban_completed({
    task_id: task.id,
    status: "COMPLETE",
    version: task.version,
    timestamp: task.completion_time,
    completing_agent: task.agent
  })
```

---

## Success Metrics

- All task entries include completion timestamps
- Recent tasks dashboard updates automatically
- Document formatting remains consistent
- No data loss during updates
- Fast validation and error handling
- Seamless integration with all agents

---

**Ultimate Responsibility:** Documentation Agent maintains kanban-completed.md integrity and provides standard update interface for all workflow agents.
