#!/usr/bin/env python3
"""
Test Suite for Trigger-Aware Release Workflow

This test suite validates the trigger detection, workflow execution,
deliverable processing, and workflow orchestration components.

Epic: Epic 2 (Workflow Management Framework)
Story: Story 7 (Trigger-Aware Release Workflow)
Task: Task 8 (Documentation and testing)
"""

import sys
from pathlib import Path

# Add scripts directory to path
scripts_dir = Path(__file__).parent
sys.path.insert(0, str(scripts_dir))

from trigger_registry import detect_triggers, TriggerRegistry
from trigger_integration import TriggerIntegration
from workflow_orchestrator import WorkflowOrchestrator
from deliverable_processor import DeliverableProcessor, Deliverable, DeliverableType


def test_trigger_detection():
    """Test trigger detection from commit messages and files."""
    print("=" * 60)
    print("Test 1: Trigger Detection")
    print("=" * 60)
    
    # Test FR commit
    triggers = detect_triggers('v0.1.0+1 - FR012: New feature', [])
    assert len(triggers) == 1, f"Expected 1 trigger, got {len(triggers)}"
    assert triggers[0].id == 'fr_commit', f"Expected fr_commit, got {triggers[0].id}"
    print("✅ FR012 trigger detected")
    
    # Test BR commit with dash
    triggers = detect_triggers('v0.1.0+1 - BR-007: Bug fix', [])
    assert len(triggers) == 1, f"Expected 1 trigger, got {len(triggers)}"
    assert triggers[0].id == 'br_commit', f"Expected br_commit, got {triggers[0].id}"
    print("✅ BR-007 trigger detected")
    
    # Test UXR commit
    triggers = detect_triggers('v0.1.0+1 - UXR001: User research', [])
    assert len(triggers) == 1, f"Expected 1 trigger, got {len(triggers)}"
    assert triggers[0].id == 'uxr_commit', f"Expected uxr_commit, got {triggers[0].id}"
    print("✅ UXR001 trigger detected")
    
    # Test file pattern
    triggers = detect_triggers(
        'Update documentation',
        ['KB/PM_and_Portfolio/kanban/fr-br/FR-012-new-feature.md']
    )
    assert len(triggers) == 1, f"Expected 1 trigger, got {len(triggers)}"
    assert triggers[0].id == 'fr_commit', f"Expected fr_commit, got {triggers[0].id}"
    print("✅ FR file pattern trigger detected")
    
    # Test multiple triggers
    triggers = detect_triggers('v0.1.0+1 - FR012 and BR007: Multiple items', [])
    assert len(triggers) >= 2, f"Expected at least 2 triggers, got {len(triggers)}"
    print("✅ Multiple triggers detected")
    
    print("\n✅ All trigger detection tests passed!\n")


def test_trigger_integration():
    """Test trigger integration with git."""
    print("=" * 60)
    print("Test 2: Trigger Integration")
    print("=" * 60)
    
    integration = TriggerIntegration()
    
    # Test trigger checking
    triggers = integration.check_triggers(
        commit_message='v0.1.0+1 - FR012: New feature',
        changed_files=[]
    )
    assert len(triggers) == 1, f"Expected 1 trigger, got {len(triggers)}"
    print("✅ Trigger integration working")
    
    print("\n✅ All trigger integration tests passed!\n")


def test_workflow_orchestration():
    """Test workflow orchestration and chaining."""
    print("=" * 60)
    print("Test 3: Workflow Orchestration")
    print("=" * 60)
    
    orchestrator = WorkflowOrchestrator()
    
    # Test single workflow
    plan = orchestrator.plan_workflow_execution(['agentic_task_creation'])
    assert len(plan.workflows) == 1, f"Expected 1 workflow, got {len(plan.workflows)}"
    assert plan.workflows[0] == 'agentic_task_creation'
    print("✅ Single workflow planning")
    
    # Test multiple workflows with dependencies
    plan = orchestrator.plan_workflow_execution([
        'documentation_generation',
        'agentic_task_creation',
        'code_generation'
    ])
    assert len(plan.workflows) == 3, f"Expected 3 workflows, got {len(plan.workflows)}"
    # agentic_task_creation should come first (no dependencies)
    assert plan.workflows[0] == 'agentic_task_creation', "agentic_task_creation should be first"
    print("✅ Multiple workflows with dependencies")
    
    # Test dependency graph
    deps = plan.dependencies
    assert 'documentation_generation' in deps, "documentation_generation should have dependencies"
    assert 'agentic_task_creation' in deps['documentation_generation'], "documentation_generation should depend on agentic_task_creation"
    print("✅ Dependency graph working")
    
    print("\n✅ All workflow orchestration tests passed!\n")


def test_deliverable_processing():
    """Test deliverable processing."""
    print("=" * 60)
    print("Test 4: Deliverable Processing")
    print("=" * 60)
    
    processor = DeliverableProcessor()
    
    # Test kanban_tasks deliverable
    deliverable = Deliverable(
        type=DeliverableType.KANBAN_TASKS,
        data={'type': 'kanban_tasks', 'tasks': [{'id': 'T01', 'name': 'Test task'}]},
        source_workflow='agentic_task_creation'
    )
    
    result = processor.process_deliverable(deliverable, {})
    assert result.integration_status == 'integrated', f"Expected integrated, got {result.integration_status}"
    print("✅ Kanban tasks deliverable processed")
    
    print("\n✅ All deliverable processing tests passed!\n")


def run_all_tests():
    """Run all tests."""
    print("\n" + "=" * 60)
    print("Trigger-Aware Release Workflow Test Suite")
    print("=" * 60 + "\n")
    
    try:
        test_trigger_detection()
        test_trigger_integration()
        test_workflow_orchestration()
        test_deliverable_processing()
        
        print("=" * 60)
        print("✅ ALL TESTS PASSED!")
        print("=" * 60 + "\n")
        return 0
        
    except AssertionError as e:
        print(f"\n❌ TEST FAILED: {e}\n")
        return 1
    except Exception as e:
        print(f"\n❌ ERROR: {e}\n")
        import traceback
        traceback.print_exc()
        return 1


if __name__ == '__main__':
    sys.exit(run_all_tests())

