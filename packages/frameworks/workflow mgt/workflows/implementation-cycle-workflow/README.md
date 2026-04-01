# Implementation Cycle Workflow (ICW)

## Consolidation with IPW (FR-042)

**Canonical planning trigger:** **`IPW`** (Implementation Planning Workflow). **`ICW`** is a **deprecated alias** — same three phases and agent behavior. Product requirements and wiring rules live in **FR-042**; agent execution guide: `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`. This package keeps `icw-workflow.yaml`, `icw_handler.py`, and templates for backward compatibility; new documentation should say **IPW** first.

---

## Overview

The packaged workflow (historically **ICW**) provides a structured three-phase approach to **planning** (specification, test design, implementation planning) before coding. For TDD and release, use the **Implementation Cycle SoP** and **RW** separately.

## 🚨 Critical Requirement: Planning Mode Only

**ICW MUST be executed in PLANNING MODE for proper operation.**

### Why Planning Mode is Required

ICW is designed as an **intelligent agent-driven workflow** that requires:
- Interactive questioning and guidance
- Adaptive decision-making based on user input
- Context-aware analysis and recommendations
- Real-time validation and quality assurance

### Mode Detection

ICW automatically detects execution mode and will **CANCEL** if not in planning mode:

- **Planning Mode:** ✅ ALLOWED - Required for intelligent agent guidance
- **Implementation Mode:** 🚫 BLOCKED - Bypasses intelligent agent guidance
- **Unknown Mode:** 🚫 BLOCKED - Requires explicit planning mode

### Setting Planning Mode

```bash
# Method 1: Environment variable
export PLANNING_MODE=true

# Method 2: Inline with command
PLANNING_MODE=true python icw_handler.py

# Method 3: Use the intelligent agent interface
# Type "ICW" in the IDE when in planning mode
```

## Three-Phase Workflow

### Phase 1: Specification Definition
- Problem analysis and requirements gathering
- Stakeholder identification and constraints analysis
- Acceptance criteria and quality gates definition
- Scope and boundaries clarification

### Phase 2: Test Design
- Comprehensive test strategy development
- Unit, integration, and system test design
- Test data and environment requirements
- Quality assurance and validation planning

### Phase 3: Implementation Planning
- Architecture and design documentation
- Development tasks and dependency analysis
- Resource requirements and timeline planning
- Risk management and success metrics

## Usage

### Intelligent Agent Interface (Recommended)

1. **Ensure planning mode is active**
2. **Type "ICW"** in the IDE
3. **Follow the guided three-phase process**
4. **Provide answers to intelligent agent questions**
5. **Review and validate each phase output**

### Direct Script Interface

```bash
# Set planning mode
export PLANNING_MODE=true

# Run ICW handler
python packages/frameworks/workflow\ mgt/scripts/icw/icw_handler.py initialize '{"implementation_title": "Your Project Title"}'
```

## Configuration

### ICW Configuration (`icw-config.yaml`)

- **Templates:** Location of phase-specific templates
- **Paths:** Output directories and file locations
- **Validation:** Rules and requirements for each phase
- **Integration:** Kanban and workflow system settings

### Template System

Each phase uses structured templates:
- **Specification Template:** Problem definition and requirements
- **Test Design Template:** Comprehensive test planning
- **Implementation Plan Template:** Detailed implementation roadmap

## Output

### Generated Documents

ICW generates a complete implementation package:
- **Specification Document:** Detailed requirements and analysis
- **Test Design Document:** Comprehensive test strategy
- **Implementation Plan:** Detailed execution roadmap
- **Package Summary:** Complete package overview and status

### Integration

- **Kanban System:** Automatic task creation and status updates
- **Workflow Registry:** Integration with workflow management
- **Documentation:** Structured output in standard locations

## Error Handling

### Mode Validation Errors

If ICW detects wrong execution mode:

```
🚫 ERROR: ICW detected IMPLEMENTATION MODE
🚫 ICW requires PLANNING MODE for proper intelligent agent guidance
🚫 Implementation mode bypasses the intelligent agent guidance that ICW provides
🚫 Please switch to planning mode to execute ICW properly

💡 To fix this:
   1. Set PLANNING_MODE=true environment variable
   2. Or run from a planning context
   3. Or use planning-specific execution method
```

### Configuration Errors

- Missing configuration files
- Invalid template paths
- Permission issues
- Resource constraints

## Testing

### Plan Mode Detection Tests

```bash
# Test mode detection and validation
python packages/frameworks/workflow\ mgt/scripts/icw/test_plan_mode_detection.py
```

### ICW Handler Tests

```bash
# Test complete ICW functionality
python packages/frameworks/workflow\ mgt/scripts/icw/test_icw.py
```

## Architecture

### Components

- **ICW Handler:** Main workflow orchestration
- **Template Processor:** Document generation and validation
- **Mode Detector:** Execution mode validation
- **Integration Layer:** Kanban and workflow system integration

### Design Principles

- **Intelligent Agent First:** Designed for AI-guided execution
- **Planning Mode Only:** Requires planning context for proper operation
- **Structured Output:** Consistent, high-quality documentation
- **Quality Assurance:** Built-in validation and error checking

## Troubleshooting

### Common Issues

1. **ICW cancels immediately**
   - Check: `PLANNING_MODE=true` environment variable
   - Verify: Not running in implementation mode

2. **Configuration not found**
   - Check: ICW config file exists in expected location
   - Verify: Template paths are accessible

3. **Template processing fails**
   - Check: Template files exist and are readable
   - Verify: Template syntax is valid

### Getting Help

1. **Check mode:** Ensure planning mode is active
2. **Verify configuration:** Check ICW config file
3. **Test detection:** Run plan mode detection tests
4. **Review logs:** Check error messages for specific guidance

## Best Practices

### Planning Mode Setup

- Always set `PLANNING_MODE=true` before starting ICW
- Use intelligent agent interface for best experience
- Prepare project context and requirements beforehand

### Workflow Execution

- Answer all agent questions completely
- Review each phase output before proceeding
- Validate quality and completeness at each step
- Use generated documents for implementation guidance

### Integration Usage

- Let ICW handle kanban integration automatically
- Use structured output for team coordination
- Maintain consistent documentation practices

---

**Last Updated:** 2026-03-09  
**Version:** 1.0.0  
**Status:** Production Ready
