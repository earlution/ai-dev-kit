# Project Manager Coordination Skill

**Purpose:** Multi-agent coordination and oversight for parallel ICW workflows with comprehensive decision logging and rollback capabilities.

**Agent Role:** Project Manager Agent - Central coordination authority for multi-agent workflows

---

## Primary Responsibilities

### 1. Multi-Agent Coordination
- Coordinate parallel ICW instances across multiple tasks
- Manage agent communication protocols
- Resolve inter-agent conflicts
- Optimize resource allocation

### 2. Decision Management
- Capture all decisions in structured decision trees
- Document rationale and alternatives considered
- Maintain decision audit trails
- Enable rollback procedures

### 3. Workflow Oversight
- Monitor ICW execution progress
- Validate checkpoint completion
- Trigger rollback procedures when needed
- Ensure quality standards

### 4. Risk Management
- Identify and assess execution risks
- Implement mitigation strategies
- Monitor for rollback triggers
- Execute contingency procedures

---

## Core Capabilities

### Dependency Analysis
```python
def analyze_task_dependencies(tasks):
    """
    Analyze dependencies between tasks and identify potential conflicts.
    
    Args:
        tasks: List of task IDs to analyze
        
    Returns:
        Dependency graph with conflict identification
    """
    # Implementation for dependency analysis
    pass
```

### Resource Allocation
```python
def allocate_resources(task_requirements, available_resources):
    """
    Allocate computational and project resources to parallel ICW instances.
    
    Args:
        task_requirements: Resource needs per task
        available_resources: Total available resources
        
    Returns:
        Resource allocation plan with conflict resolution
    """
    # Implementation for resource allocation
    pass
```

### Decision Logging
```python
def log_decision(decision_data):
    """
    Log decision with complete context and rationale.
    
    Args:
        decision_data: Decision context, options, rationale, impact
        
    Returns:
        Decision ID and rollback implications
    """
    # Implementation for decision logging
    pass
```

### Rollback Management
```python
def execute_rollback(rollback_point, scope):
    """
    Execute rollback procedures with data restoration.
    
    Args:
        rollback_point: Identified rollback point from decision log
        scope: Task-level, phase-level, or full rollback
        
    Returns:
        Rollback success status and validation results
    """
    # Implementation for rollback execution
    pass
```

---

## Decision Tree Structure

### Decision Log Format
```yaml
decision_id: "PM-DEC-{timestamp}-{sequence}"
timestamp: "2026-03-12T10:30:00Z"
agent_role: "Project_Manager"
task_context: "E5:S01:T46-Specification"
decision_type: "resource_allocation"
decision_data:
  options_evaluated:
    - "sequential_execution"
    - "parallel_execution"
    - "hybrid_approach"
  selected_option: "parallel_execution"
  rationale: "Optimizes total execution time while managing resource conflicts"
  impact_assessment:
    positive: ["reduced_timeline", "resource_optimization"]
    negative: ["increased_coordination_complexity"]
    risks: ["resource_conflicts", "communication_overhead"]
  alternatives_considered:
    - option: "sequential_execution"
      reason_rejected: "excessive_total_execution_time"
    - option: "hybrid_approach"
      reason_rejected: "implementation_complexity"
rollback_implications:
  rollback_points: ["pre_parallel_execution", "post_specification_phase"]
  rollback_procedures: ["resource_reallocation", "sequential_fallback"]
  data_backup_locations: ["decision_logs", "resource_snapshots"]
```

---

## Communication Protocols

### Agent Message Format
```python
{
    "message_id": "MSG-{timestamp}-{agent}-{sequence}",
    "sender": "Project_Manager",
    "recipient": "ICW_E5S01T46",
    "message_type": "coordination_request",
    "priority": "high",
    "content": {
        "action": "resource_allocation_update",
        "parameters": {...},
        "deadline": "2026-03-12T11:00:00Z"
    },
    "requires_response": true,
    "response_deadline": "2026-03-12T10:45:00Z"
}
```

### Coordination Checkpoints
1. **Pre-Execution Checkpoint**: Agent readiness validation
2. **Specification Checkpoint**: Cross-task conflict review
3. **Test Design Checkpoint**: Integration test coordination
4. **Implementation Checkpoint**: Final conflict resolution
5. **Completion Checkpoint**: Success validation and cleanup

---

## Rollback Infrastructure

### Rollback Triggers
```python
rollback_triggers = {
    "automatic": [
        "critical_validation_failure",
        "resource_conflict_unresolved",
        "agent_communication_breakdown",
        "integration_test_failure"
    ],
    "manual": [
        "project_manager_decision",
        "user_intervention",
        "external_dependency_failure"
    ]
}
```

### Rollback Procedures
```python
rollback_procedures = {
    "task_level": {
        "scope": "single_ICW_instance",
        "actions": ["restore_task_state", "reallocate_resources"],
        "estimated_time": "5-10 minutes"
    },
    "phase_level": {
        "scope": "all_tasks_to_phase",
        "actions": ["phase_state_restore", "resource_reallocation"],
        "estimated_time": "15-30 minutes"
    },
    "full_rollback": {
        "scope": "complete_workflow_reset",
        "actions": ["full_state_restore", "resource_cleanup"],
        "estimated_time": "30-45 minutes"
    }
}
```

---

## Resource Management

### Resource Categories
```python
resource_types = {
    "computational": {
        "agent_processing_capacity": "units",
        "memory_allocation": "MB",
        "file_system_access": "concurrent_operations"
    },
    "project": {
        "documentation_system": "concurrent_access",
        "version_control": "operation_slots",
        "framework_modifications": "exclusive_access"
    }
}
```

### Allocation Algorithm
```python
def allocate_resources_parallel(tasks, available_resources):
    """
    Allocate resources for parallel execution with conflict resolution.
    
    Priority: High-priority tasks get preferred resources
    Conflict Resolution: Negotiation-based with Project Manager mediation
    Dynamic Adjustment: Real-time monitoring and reallocation
    """
    # Implementation for intelligent resource allocation
    pass
```

---

## Conflict Resolution Framework

### Conflict Detection
```python
def detect_conflicts(task_plans):
    """
    Detect potential conflicts between parallel ICW executions.
    
    Conflict Types:
    - Resource conflicts (file access, documentation system)
    - Dependency conflicts (cross-task dependencies)
    - Timeline conflicts (priority adjustments)
    """
    # Implementation for conflict detection
    pass
```

### Resolution Strategies
```python
conflict_resolution_strategies = {
    "negotiation": {
        "description": "Agent-to-agent negotiation with PM mediation",
        "applicable": ["resource_conflicts", "priority_conflicts"],
        "success_rate": "high"
    },
    "technical": {
        "description": "Technical solutions like locking mechanisms",
        "applicable": ["file_access_conflicts"],
        "success_rate": "very_high"
    },
    "rollback": {
        "description": "Partial rollback and re-execution",
        "applicable": ["unresolved_conflicts", "critical_failures"],
        "success_rate": "medium"
    }
}
```

---

## Integration Points

### ICW Workflow Integration
- **Specification Phase**: Resource allocation and conflict monitoring
- **Test Design Phase**: Integration test coordination
- **Implementation Phase**: Real-time conflict resolution

### Agent Communication Integration
- **Message Passing**: Structured agent communication
- **State Synchronization**: Real-time status updates
- **Decision Broadcasting**: Decision distribution to all agents

### Kanban Integration
- **Status Updates**: Real-time kanban board updates
- **Progress Tracking**: Task completion monitoring
- **Completion Validation**: Final status verification

---

## Quality Assurance

### Decision Quality Metrics
- **Completeness**: All decisions logged with full context
- **Traceability**: Decision audit trail maintained
- **Rationale Quality**: Clear reasoning and alternatives documented
- **Rollback Validity**: Rollback points properly identified

### Execution Quality Metrics
- **Success Rate**: Percentage of successful ICW completions
- **Conflict Resolution**: Time to resolve conflicts
- **Resource Utilization**: Efficiency of resource allocation
- **Rollback Success**: Percentage of successful rollbacks

---

## Usage Instructions

### Initialization
```python
# Initialize Project Manager Agent
pm_agent = ProjectManagerAgent()
pm_agent.setup_logging()
pm_agent.load_task_dependencies()
pm_agent.initialize_communication()
```

### Execution Coordination
```python
# Start parallel ICW workflows
pm_agent.coordinate_parallel_execution(
    tasks=["E5:S01:T46", "E6:S07:T106", "E4:S11:T07", "E6:S07:T18", 
           "E1:S06:T01", "E8:S04:T01", "E10:S01:T01", "E11:S01:T01"],
    mode="parallel_icw"
)
```

### Monitoring and Oversight
```python
# Monitor execution progress
pm_agent.monitor_progress()
pm_agent.check_checkpoint_completion()
pm_agent.handle_conflicts()
pm_agent.validate_completion()
```

---

## Success Criteria

### Primary Success Metrics
- **All 8 tasks completed** through parallel ICW execution
- **Zero unresolved conflicts** at completion
- **Complete decision audit trail** maintained
- **Rollback procedures validated** and tested

### Secondary Success Metrics
- **Execution efficiency**: Parallel execution优于sequential
- **Resource optimization**: High resource utilization
- **Conflict resolution**: Fast and effective resolution
- **Agent coordination**: Smooth multi-agent operation

---

## Error Handling

### Agent Communication Failures
- Retry mechanisms with exponential backoff
- Alternative communication channels
- Fallback coordination procedures

### Resource Exhaustion
- Dynamic resource reallocation
- Priority-based resource preemption
- Graceful degradation strategies

### Rollback Failures
- Multiple rollback attempt strategies
- Data restoration from multiple sources
- Manual intervention procedures

---

## Maintenance and Evolution

### Continuous Improvement
- Decision pattern analysis
- Conflict resolution optimization
- Resource allocation refinement
- Agent coordination enhancement

### Scalability Considerations
- Support for additional tasks
- Enhanced parallel execution
- Advanced conflict resolution
- Improved rollback mechanisms
