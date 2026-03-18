---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-11T17:10:00Z
expires_at: null
housekeeping_policy: keep
---

# fr_br_uxr_completed_update Skill

**Skill ID:** fr_br_uxr_completed_update  
**Agent:** Documentation Agent  
**Version:** v0.6.7.107+2  
**Created:** 2026-03-11  

---

## Purpose

Maintain and update `fr-br-uxr-completed.md` with completion timestamps, recent FR/BR/UXR items dashboard, and consistent formatting. This skill provides the standard interface for all agents to update completed FR/BR/UXR information with temporal tracking.

---

## Primary Responsibilities

### **Document Maintenance**
- Update fr-br-uxr-completed.md with FR/BR/UXR completion information
- Maintain completion timestamps in ISO 8601 format
- Update "20 Most Recently Completed FR/BR/UXR Items" dashboard
- Ensure consistent formatting across all FR/BR/UXR entries

### **Agent Coordination**
- Provide standard update interface for other agents
- Validate timestamp format and consistency
- Handle recent FR/BR/UXR items dashboard updates
- Maintain document integrity and structure

### **Validation and Quality**
- Validate FR/BR/UXR completion information
- Ensure proper timestamp formatting
- Check for duplicate entries
- Maintain backward compatibility during transition
- Cross-reference integrity with associated tasks

---

## Update Interface

### **Standard Update Method**
```python
Documentation Agent.fr_br_uxr_completed_update({
  fr_br_uxr_id: "FR-048",
  type: "FR",
  status: "COMPLETE", 
  version: "v0.5.1.48+1",
  timestamp: "2026-03-11T16:20:00Z",
  completing_agent: "Intake Agent"
})
```

### **Parameters**
- **fr_br_uxr_id:** Unique identifier (FR-XXX, BR-XXX, UXR-XXX)
- **type:** FR, BR, or UXR
- **status:** COMPLETE, IN PROGRESS, or TODO
- **version:** Version implementing the FR/BR/UXR
- **timestamp:** ISO 8601 completion timestamp
- **completing_agent:** Agent that completed the FR/BR/UXR

---

## Implementation Details

### **Temporal Tracking**
- All FR/BR/UXR completions must include ISO 8601 timestamps
- Format: `YYYY-MM-DDTHH:MM:SSZ`
- Historical completions get estimated timestamps based on creation dates
- New completions get actual completion timestamps

### **Dashboard Management**
- Maintain "20 Most Recently Completed FR/BR/UXR Items" dashboard
- Auto-sort by completion time (most recent first)
- Include: ID, Type, Description, Completed, Version, Agent
- Update dashboard when new completions are added

### **Cross-Reference Validation**
- Validate FR/BR/UXR references to associated tasks
- Ensure version consistency across documentation
- Check link integrity and validity
- Maintain relationship mapping between FR/BR/UXR and tasks

---

## Document Structure Updates

### **Recent Completions Dashboard**
```markdown
## 20 Most Recently Completed FR/BR/UXR Items

| ID | Type | Description | Completed | Version | Agent |
|----|------|-------------|-----------|---------|-------|
| FR-048 | FR | ICW Task Identifier Argument | 2026-03-11T16:20:00Z | v0.5.1.48+1 | Intake Agent |
| BR-038 | BR | Release Workflow Micromanagement | 2026-03-11T16:45:00Z | v0.6.6.2+8 | Documentation Agent |
```

### **Completion Entry Format**
```markdown
**FR-048 – ICW Task Identifier Argument**  
**Completed:** 2026-03-11T16:20:00Z (v0.5.1.48+1)  
**Implementing Task:** [E5:S01:T48](../kanban/epics/Epic-5/Story-001-fr-repo/T48-icw-task-identifier-argument.md)  
**Completing Agent:** Intake Agent  
**Description:** Implementation of ICW task identifier argument functionality  
**Impact:** Enhanced ICW workflow with task identification capabilities
```

---

## Error Handling

### **Validation Errors**
- Invalid timestamp format - reject with specific error message
- Missing required parameters - reject with parameter list
- Duplicate FR/BR/UXR ID - reject with conflict resolution options
- Invalid type - reject with valid type options

### **Recovery Procedures**
- Rollback on validation failures
- Maintain backup of original document
- Provide detailed error logging
- Allow manual intervention when needed

---

## Integration Points

### **UKW Agent Integration**
- Called by UKW Agent during FR/BR/UXR board cleanup
- Provides FR/BR/UXR completion status for board synchronization
- Receives FR/BR/UXR completion data from task analysis

### **Intake Agent Integration**
- Receives FR/BR/UXR completion notifications from Intake Agent
- Updates FR/BR/UXR status when associated tasks complete
- Maintains FR/BR/UXR to task relationship mapping

### **RW Agent Integration**
- Updates FR/BR/UXR completion during release workflows
- Maintains version consistency for FR/BR/UXR implementations
- Provides FR/BR/UXR status for release documentation

---

## Performance Requirements

- **Dashboard Generation:** < 2 seconds
- **Document Updates:** < 1 second
- **Validation Processing:** < 0.5 seconds per FR/BR/UXR
- **Memory Usage:** < 10MB additional overhead
- **Concurrent Updates:** Support multiple agent updates

---

## Quality Assurance

### **Automated Validation**
- Timestamp format validation
- Duplicate detection
- Link integrity checking
- Version consistency validation

### **Manual Review Points**
- FR/BR/UXR description accuracy
- Agent attribution correctness
- Cross-reference completeness
- Dashboard sorting accuracy

---

## Success Metrics

- **100%** of FR/BR/UXR completions have temporal tracking
- **20** recent completions displayed in dashboard
- **<2 seconds** dashboard generation time
- **99%+** validation success rate
- **Zero** data corruption incidents

---

## Maintenance

### **Regular Updates**
- Dashboard maintenance and sorting
- Historical data timestamp estimation
- Cross-reference validation
- Performance optimization

### **Documentation Updates**
- Skill interface documentation
- Agent coordination protocols
- Error handling procedures
- Usage examples and patterns

---

*This skill provides the foundation for FR/BR/UXR temporal tracking and maintains consistency with kanban-completed.md patterns while adapting to FR/BR/UXR specific requirements.*
