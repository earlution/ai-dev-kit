#!/usr/bin/env python3
"""
Implementation Cycle Workflow (ICW) Handler
Provides three-phase implementation workflow: Specification Definition, Test Design, Implementation Planning
"""

import os
import sys
import yaml
import json
from datetime import datetime
from pathlib import Path
from typing import Dict, Any, List, Optional

class ICWHandler:
    """Main handler for Implementation Cycle Workflow"""
    
    def __init__(self, config_path: str = None):
        """Initialize ICW handler with configuration"""
        self.config_path = config_path or self._find_config()
        self.config = self._load_config()
        self.cycle_state = {}
        self.current_phase = None
        
    def _find_config(self) -> str:
        """Find ICW configuration file"""
        # Look in standard workflow locations
        possible_paths = [
            "packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/icw-config.yaml",
            "workflows/implementation-cycle-workflow/icw-config.yaml",
            "icw-config.yaml"
        ]
        
        for path in possible_paths:
            if os.path.exists(path):
                return path
                
        raise FileNotFoundError("ICW configuration file not found")
    
    def _load_config(self) -> Dict[str, Any]:
        """Load ICW configuration"""
        with open(self.config_path, 'r') as f:
            return yaml.safe_load(f)
    
    def initialize_cycle(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Initialize implementation cycle (Step 1)"""
        print("🚀 Initializing Implementation Cycle...")
        
        # Create cycle ID
        cycle_id = f"ICW-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
        
        # Create output directory
        output_dir = Path(self.config['paths']['output_dir'])
        output_dir.mkdir(parents=True, exist_ok=True)
        
        # Initialize cycle state
        self.cycle_state = {
            'cycle_id': cycle_id,
            'start_time': datetime.now().isoformat(),
            'params': params,
            'phases': {
                'specification': {'status': 'pending', 'output': None},
                'test_design': {'status': 'pending', 'output': None},
                'implementation_planning': {'status': 'pending', 'output': None}
            },
            'output_dir': str(output_dir)
        }
        
        # Save cycle state
        self._save_cycle_state()
        
        return {
            'success': True,
            'cycle_id': cycle_id,
            'output_dir': str(output_dir),
            'message': f"Implementation cycle {cycle_id} initialized successfully"
        }
    
    def specification_definition(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Phase 1: Specification Definition (Step 2)"""
        print("📋 Phase 1: Specification Definition")
        
        if not self.cycle_state:
            return {'success': False, 'error': 'Cycle not initialized'}
        
        self.current_phase = 'specification'
        
        # Load specification template
        template_path = os.path.join(
            self.config['paths']['templates_dir'],
            self.config['templates']['specification']['file']
        )
        
        with open(template_path, 'r') as f:
            template_content = f.read()
        
        # Process template with parameters
        processed_content = self._process_template(template_content, params)
        
        # Save specification document
        spec_filename = f"{self.cycle_state['cycle_id']}-specification.md"
        spec_path = Path(self.cycle_state['output_dir']) / spec_filename
        
        with open(spec_path, 'w') as f:
            f.write(processed_content)
        
        # Update cycle state
        self.cycle_state['phases']['specification'] = {
            'status': 'completed',
            'output': str(spec_path),
            'completed_time': datetime.now().isoformat()
        }
        
        self._save_cycle_state()
        
        return {
            'success': True,
            'phase': 'specification',
            'output_file': str(spec_path),
            'message': "Specification document created successfully"
        }
    
    def test_design(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Phase 2: Test Design (Step 3)"""
        print("🧪 Phase 2: Test Design")
        
        if not self.cycle_state or self.cycle_state['phases']['specification']['status'] != 'completed':
            return {'success': False, 'error': 'Specification phase not completed'}
        
        self.current_phase = 'test_design'
        
        # Load test design template
        template_path = os.path.join(
            self.config['paths']['templates_dir'],
            self.config['templates']['test_design']['file']
        )
        
        with open(template_path, 'r') as f:
            template_content = f.read()
        
        # Add specification reference
        params['specification_link'] = self.cycle_state['phases']['specification']['output']
        
        # Process template
        processed_content = self._process_template(template_content, params)
        
        # Save test design document
        test_filename = f"{self.cycle_state['cycle_id']}-test-design.md"
        test_path = Path(self.cycle_state['output_dir']) / test_filename
        
        with open(test_path, 'w') as f:
            f.write(processed_content)
        
        # Update cycle state
        self.cycle_state['phases']['test_design'] = {
            'status': 'completed',
            'output': str(test_path),
            'completed_time': datetime.now().isoformat()
        }
        
        self._save_cycle_state()
        
        return {
            'success': True,
            'phase': 'test_design',
            'output_file': str(test_path),
            'message': "Test design document created successfully"
        }
    
    def implementation_planning(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Phase 3: Implementation Planning (Step 4)"""
        print("🔧 Phase 3: Implementation Planning")
        
        if not self.cycle_state or self.cycle_state['phases']['test_design']['status'] != 'completed':
            return {'success': False, 'error': 'Test design phase not completed'}
        
        self.current_phase = 'implementation_planning'
        
        # Load implementation plan template
        template_path = os.path.join(
            self.config['paths']['templates_dir'],
            self.config['templates']['implementation_plan']['file']
        )
        
        with open(template_path, 'r') as f:
            template_content = f.read()
        
        # Add references to previous phases
        params['specification_link'] = self.cycle_state['phases']['specification']['output']
        params['test_design_link'] = self.cycle_state['phases']['test_design']['output']
        
        # Process template
        processed_content = self._process_template(template_content, params)
        
        # Save implementation plan document
        plan_filename = f"{self.cycle_state['cycle_id']}-implementation-plan.md"
        plan_path = Path(self.cycle_state['output_dir']) / plan_filename
        
        with open(plan_path, 'w') as f:
            f.write(processed_content)
        
        # Update cycle state
        self.cycle_state['phases']['implementation_planning'] = {
            'status': 'completed',
            'output': str(plan_path),
            'completed_time': datetime.now().isoformat()
        }
        
        self._save_cycle_state()
        
        return {
            'success': True,
            'phase': 'implementation_planning',
            'output_file': str(plan_path),
            'message': "Implementation plan document created successfully"
        }
    
    def generate_package(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Generate implementation package (Step 5)"""
        print("📦 Generating Implementation Package")
        
        if not self._all_phases_completed():
            return {'success': False, 'error': 'Not all phases completed'}
        
        # Create package summary
        package_summary = self._create_package_summary()
        
        # Save package summary
        summary_filename = f"{self.cycle_state['cycle_id']}-package-summary.md"
        summary_path = Path(self.cycle_state['output_dir']) / summary_filename
        
        with open(summary_path, 'w') as f:
            f.write(package_summary)
        
        return {
            'success': True,
            'package_summary': str(summary_path),
            'phases_completed': list(self.cycle_state['phases'].keys()),
            'message': "Implementation package generated successfully"
        }
    
    def kanban_update(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Update kanban integration (Step 6)"""
        print("📋 Updating Kanban Integration")
        
        # This would integrate with the kanban system
        # For now, return success
        return {
            'success': True,
            'message': "Kanban integration updated (placeholder implementation)"
        }
    
    def validate_quality(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Quality validation (Step 7)"""
        print("✅ Quality Validation")
        
        validation_results = {
            'specification_complete': self.cycle_state['phases']['specification']['status'] == 'completed',
            'test_design_complete': self.cycle_state['phases']['test_design']['status'] == 'completed',
            'implementation_plan_complete': self.cycle_state['phases']['implementation_planning']['status'] == 'completed',
            'all_phases_complete': self._all_phases_completed()
        }
        
        return {
            'success': all(validation_results.values()),
            'validation_results': validation_results,
            'message': "Quality validation completed"
        }
    
    def archive_cycle(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Archive implementation cycle (Step 8)"""
        print("📚 Archiving Implementation Cycle")
        
        # Mark cycle as completed
        self.cycle_state['status'] = 'completed'
        self.cycle_state['end_time'] = datetime.now().isoformat()
        
        self._save_cycle_state()
        
        return {
            'success': True,
            'cycle_id': self.cycle_state['cycle_id'],
            'status': 'completed',
            'message': "Implementation cycle archived successfully"
        }
    
    def _process_template(self, template: str, params: Dict[str, Any]) -> str:
        """Process template with parameters"""
        # Add current date and cycle ID
        params['current_date'] = datetime.now().strftime('%Y-%m-%d')
        params['cycle_id'] = self.cycle_state.get('cycle_id', 'ICW-UNKNOWN')
        
        # Simple template processing (replace {{var}} with values)
        for key, value in params.items():
            template = template.replace(f"{{{{{key}}}}}", str(value))
        
        return template
    
    def _save_cycle_state(self):
        """Save cycle state to file"""
        if not self.cycle_state:
            return
        
        state_file = Path(self.cycle_state['output_dir']) / f"{self.cycle_state['cycle_id']}-state.json"
        
        with open(state_file, 'w') as f:
            json.dump(self.cycle_state, f, indent=2)
    
    def _all_phases_completed(self) -> bool:
        """Check if all phases are completed"""
        if not self.cycle_state:
            return False
        
        return all(
            phase['status'] == 'completed' 
            for phase in self.cycle_state['phases'].values()
        )
    
    def _create_package_summary(self) -> str:
        """Create package summary document"""
        summary = f"""# Implementation Package Summary

**Cycle ID:** {self.cycle_state['cycle_id']}  
**Created:** {self.cycle_state['start_time']}  
**Status:** Completed  

## Phase Outputs

### 1. Specification Definition
- **File:** {self.cycle_state['phases']['specification']['output']}
- **Status:** {self.cycle_state['phases']['specification']['status']}
- **Completed:** {self.cycle_state['phases']['specification']['completed_time']}

### 2. Test Design
- **File:** {self.cycle_state['phases']['test_design']['output']}
- **Status:** {self.cycle_state['phases']['test_design']['status']}
- **Completed:** {self.cycle_state['phases']['test_design']['completed_time']}

### 3. Implementation Planning
- **File:** {self.cycle_state['phases']['implementation_planning']['output']}
- **Status:** {self.cycle_state['phases']['implementation_planning']['status']}
- **Completed:** {self.cycle_state['phases']['implementation_planning']['completed_time']}

## Next Steps

1. Review all generated documents
2. Begin implementation following the implementation plan
3. Execute tests as defined in test design
4. Track progress against specifications

---
**Generated by:** Implementation Cycle Workflow (ICW)  
**Date:** {datetime.now().strftime('%Y-%m-%d')}
"""
        return summary

def main():
    """Main entry point for ICW handler"""
    if len(sys.argv) < 2:
        print("Usage: icw_handler.py <command> [params]")
        sys.exit(1)
    
    command = sys.argv[1]
    handler = ICWHandler()
    
    # Parse parameters (simple JSON for now)
    params = {}
    if len(sys.argv) > 2:
        try:
            params = json.loads(sys.argv[2])
        except json.JSONDecodeError:
            print("Error: Invalid JSON parameters")
            sys.exit(1)
    
    # Execute command
    commands = {
        'initialize': handler.initialize_cycle,
        'specification': handler.specification_definition,
        'test_design': handler.test_design,
        'implementation_planning': handler.implementation_planning,
        'generate_package': handler.generate_package,
        'kanban_update': handler.kanban_update,
        'validate_quality': handler.validate_quality,
        'archive': handler.archive_cycle
    }
    
    if command not in commands:
        print(f"Error: Unknown command '{command}'")
        print(f"Available commands: {list(commands.keys())}")
        sys.exit(1)
    
    result = commands[command](params)
    
    if result['success']:
        print(f"✅ {result.get('message', 'Command completed successfully')}")
    else:
        print(f"❌ {result.get('error', 'Command failed')}")
        sys.exit(1)

if __name__ == "__main__":
    main()
