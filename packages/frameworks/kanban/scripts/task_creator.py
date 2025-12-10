#!/usr/bin/env python3
"""
Template-Based Task Creator

Creates Kanban tasks from templates with proper contextualization based on
FR/BR content and epic/story mappings.

Part of Epic 4, Story 10, Task 3: Implement template-based task creation.

Usage:
    from task_creator import TaskCreator
    
    creator = TaskCreator(kanban_path, framework_path)
    tasks = creator.create_tasks_from_fr_br(
        fr_br_analysis,
        epic_story_mapping,
        task_structure
    )
"""

import re
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass
from datetime import datetime

from fr_br_analyzer import FRBRAnalysis
from epic_story_mapper import EpicStoryMapping


@dataclass
class TaskStructure:
    """Structure for task breakdown."""
    num_tasks: int
    task_types: List[str]  # e.g., ['implementation', 'testing', 'documentation']
    task_dependencies: Dict[int, List[int]]  # task_id -> [dependency_ids]
    task_order: List[int]  # Ordered list of task IDs
    task_complexity: Dict[int, str]  # task_id -> complexity level


@dataclass
class CreatedTask:
    """Represents a created task."""
    task_id: str  # e.g., "E4:S10:T01"
    task_number: int
    task_title: str
    task_file_path: Path
    epic_number: int
    story_number: int
    task_type: str
    dependencies: List[str]
    acceptance_criteria: List[str]
    contextualized_content: str


class TaskCreator:
    """Creates Kanban tasks from templates with contextualization."""
    
    def __init__(self, kanban_path: Path, framework_path: Path):
        """
        Initialize the task creator.
        
        Args:
            kanban_path: Path to project's Kanban structure
            framework_path: Path to Kanban framework
        """
        self.kanban_path = Path(kanban_path)
        self.framework_path = Path(framework_path)
        self.templates_path = framework_path / "templates"
    
    def create_tasks_from_fr_br(
        self,
        fr_br_analysis: FRBRAnalysis,
        epic_story_mapping: EpicStoryMapping,
        task_structure: TaskStructure,
        story_number: Optional[int] = None
    ) -> List[CreatedTask]:
        """
        Create tasks from FR/BR using templates.
        
        Args:
            fr_br_analysis: Analyzed FR/BR content
            epic_story_mapping: Epic/story mapping
            task_structure: Task breakdown structure
            story_number: Story number (if new story, will be determined)
        
        Returns:
            List of created tasks
        """
        created_tasks = []
        
        # Determine epic and story numbers
        epic_num = epic_story_mapping.primary_epic
        if story_number is None:
            story_number = self._determine_story_number(epic_num, epic_story_mapping)
        
        # Create tasks based on structure
        for task_idx, task_num in enumerate(task_structure.task_order):
            task_type = task_structure.task_types[task_idx] if task_idx < len(task_structure.task_types) else "implementation"
            
            # Select appropriate template
            template = self._select_template(task_type, epic_num)
            
            # Create task
            created_task = self._create_single_task(
                fr_br_analysis,
                epic_story_mapping,
                epic_num,
                story_number,
                task_num,
                task_type,
                template,
                task_structure
            )
            
            created_tasks.append(created_task)
        
        return created_tasks
    
    def _determine_story_number(
        self,
        epic_num: int,
        epic_story_mapping: EpicStoryMapping
    ) -> int:
        """Determine story number (existing or new)."""
        if epic_story_mapping.story_match:
            return epic_story_mapping.story_match["story_number"]
        
        # New story - find next available story number
        epic_path = self.kanban_path / "epics" / f"Epic-{epic_num}"
        if not epic_path.exists():
            return 1
        
        # Find highest story number
        story_files = list(epic_path.glob("Story-*.md"))
        if not story_files:
            return 1
        
        story_numbers = []
        for story_file in story_files:
            match = re.search(r'Story-(\d+)', story_file.name)
            if match:
                story_numbers.append(int(match.group(1)))
        
        return max(story_numbers) + 1 if story_numbers else 1
    
    def _select_template(self, task_type: str, epic_num: int) -> str:
        """
        Select appropriate task template.
        
        Args:
            task_type: Type of task (implementation, testing, documentation, etc.)
            epic_num: Epic number
        
        Returns:
            Template content as string
        """
        # For now, use a generic task template
        # In future, can have task-type-specific templates
        template_path = self.templates_path / "STORY_TEMPLATE.md"
        
        if template_path.exists():
            return template_path.read_text(encoding='utf-8')
        
        # Fallback: Create basic task template
        return self._get_basic_task_template()
    
    def _get_basic_task_template(self) -> str:
        """Get basic task template."""
        return """---
lifecycle: evergreen
ttl_days: null
created_at: {CREATED_DATE}
expires_at: null
housekeeping_policy: keep
---

# Task {TASK_NUMBER} – {TASK_TITLE}

**Status:** TODO  
**Priority:** {PRIORITY}  
**Dependencies:** {DEPENDENCIES}  
**Blocker:** None

**Input:**
{INPUT}

**Deliverable:**
{DELIVERABLE}

**Acceptance Criteria:**
{ACCEPTANCE_CRITERIA}

---

## Related Work

- **FR/BR:** {FR_BR_ID}
- **Epic:** Epic {EPIC_NUMBER}
- **Story:** Story {STORY_NUMBER}
"""
    
    def _create_single_task(
        self,
        fr_br_analysis: FRBRAnalysis,
        epic_story_mapping: EpicStoryMapping,
        epic_num: int,
        story_number: int,
        task_num: int,
        task_type: str,
        template: str,
        task_structure: TaskStructure
    ) -> CreatedTask:
        """Create a single task from template."""
        # Generate task ID
        task_id = f"E{epic_num}:S{story_number}:T{task_num:02d}"
        
        # Generate task title
        task_title = self._generate_task_title(
            fr_br_analysis,
            task_type,
            task_num,
            task_structure.num_tasks
        )
        
        # Contextualize template
        contextualized_content = self._contextualize_template(
            template,
            fr_br_analysis,
            epic_story_mapping,
            epic_num,
            story_number,
            task_num,
            task_type,
            task_id,
            task_title,
            task_structure
        )
        
        # Determine task file path
        task_file_path = self._get_task_file_path(
            epic_num,
            story_number,
            task_num,
            task_title
        )
        
        # Get dependencies
        dependencies = self._get_task_dependencies(
            task_num,
            task_structure,
            epic_num,
            story_number
        )
        
        # Get acceptance criteria
        acceptance_criteria = self._get_task_acceptance_criteria(
            fr_br_analysis,
            task_type,
            task_num,
            task_structure.num_tasks
        )
        
        # Create task file
        self._write_task_file(task_file_path, contextualized_content)
        
        return CreatedTask(
            task_id=task_id,
            task_number=task_num,
            task_title=task_title,
            task_file_path=task_file_path,
            epic_number=epic_num,
            story_number=story_number,
            task_type=task_type,
            dependencies=dependencies,
            acceptance_criteria=acceptance_criteria,
            contextualized_content=contextualized_content
        )
    
    def _generate_task_title(
        self,
        fr_br_analysis: FRBRAnalysis,
        task_type: str,
        task_num: int,
        total_tasks: int
    ) -> str:
        """Generate task title from FR/BR and task type."""
        base_title = fr_br_analysis.title
        
        # If multiple tasks, add task type and number
        if total_tasks > 1:
            task_type_label = task_type.replace('_', ' ').title()
            return f"{base_title} - {task_type_label} (Part {task_num})"
        
        return base_title
    
    def _contextualize_template(
        self,
        template: str,
        fr_br_analysis: FRBRAnalysis,
        epic_story_mapping: EpicStoryMapping,
        epic_num: int,
        story_number: int,
        task_num: int,
        task_type: str,
        task_id: str,
        task_title: str,
        task_structure: TaskStructure
    ) -> str:
        """Contextualize template with FR/BR content."""
        # Get current date
        created_date = datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ")
        
        # Prepare input section
        input_section = self._prepare_input_section(fr_br_analysis, task_type)
        
        # Prepare deliverable section
        deliverable_section = self._prepare_deliverable_section(fr_br_analysis, task_type)
        
        # Prepare acceptance criteria
        acceptance_criteria = self._get_task_acceptance_criteria(
            fr_br_analysis,
            task_type,
            task_num,
            task_structure.num_tasks
        )
        acceptance_criteria_text = "\n".join([f"- {ac}" for ac in acceptance_criteria])
        
        # Get dependencies
        dependencies = self._get_task_dependencies(
            task_num,
            task_structure,
            epic_num,
            story_number
        )
        dependencies_text = ", ".join(dependencies) if dependencies else "None"
        
        # Get priority
        priority = fr_br_analysis.priority or "MEDIUM"
        
        # Replace placeholders
        contextualized = template
        contextualized = contextualized.replace("{CREATED_DATE}", created_date)
        contextualized = contextualized.replace("{TASK_NUMBER}", f"{task_num:02d}")
        contextualized = contextualized.replace("{TASK_TITLE}", task_title)
        contextualized = contextualized.replace("{PRIORITY}", priority)
        contextualized = contextualized.replace("{DEPENDENCIES}", dependencies_text)
        contextualized = contextualized.replace("{INPUT}", input_section)
        contextualized = contextualized.replace("{DELIVERABLE}", deliverable_section)
        contextualized = contextualized.replace("{ACCEPTANCE_CRITERIA}", acceptance_criteria_text)
        contextualized = contextualized.replace("{FR_BR_ID}", fr_br_analysis.document_id)
        contextualized = contextualized.replace("{EPIC_NUMBER}", str(epic_num))
        contextualized = contextualized.replace("{STORY_NUMBER}", str(story_number))
        
        return contextualized
    
    def _prepare_input_section(
        self,
        fr_br_analysis: FRBRAnalysis,
        task_type: str
    ) -> str:
        """Prepare input section for task."""
        inputs = []
        
        inputs.append(f"- {fr_br_analysis.document_id}: {fr_br_analysis.title}")
        
        if fr_br_analysis.requirements:
            inputs.append(f"- Requirements: {len(fr_br_analysis.requirements)} requirement(s)")
        
        if task_type == "testing":
            inputs.append("- Test cases and scenarios")
        elif task_type == "documentation":
            inputs.append("- Implementation details")
        
        return "\n".join(inputs)
    
    def _prepare_deliverable_section(
        self,
        fr_br_analysis: FRBRAnalysis,
        task_type: str
    ) -> str:
        """Prepare deliverable section for task."""
        deliverables = []
        
        if task_type == "implementation":
            deliverables.append("- Implementation code")
            deliverables.append("- Unit tests")
        elif task_type == "testing":
            deliverables.append("- Test suite")
            deliverables.append("- Test documentation")
        elif task_type == "documentation":
            deliverables.append("- Documentation updates")
            deliverables.append("- User guides (if applicable)")
        else:
            deliverables.append(f"- {task_type.title()} deliverable")
        
        return "\n".join([f"- {d}" for d in deliverables])
    
    def _get_task_acceptance_criteria(
        self,
        fr_br_analysis: FRBRAnalysis,
        task_type: str,
        task_num: int,
        total_tasks: int
    ) -> List[str]:
        """Get acceptance criteria for task."""
        criteria = []
        
        # Use FR/BR acceptance criteria as base
        if fr_br_analysis.acceptance_criteria:
            # If multiple tasks, distribute criteria
            if total_tasks > 1:
                criteria_per_task = len(fr_br_analysis.acceptance_criteria) // total_tasks
                start_idx = (task_num - 1) * criteria_per_task
                end_idx = start_idx + criteria_per_task if task_num < total_tasks else len(fr_br_analysis.acceptance_criteria)
                criteria.extend(fr_br_analysis.acceptance_criteria[start_idx:end_idx])
            else:
                criteria.extend(fr_br_analysis.acceptance_criteria)
        
        # Add task-type-specific criteria
        if task_type == "implementation":
            criteria.append("Code implemented and tested")
            criteria.append("All tests passing")
        elif task_type == "testing":
            criteria.append("Test coverage meets requirements")
            criteria.append("All test cases passing")
        elif task_type == "documentation":
            criteria.append("Documentation complete and accurate")
            criteria.append("Examples provided (if applicable)")
        
        return criteria if criteria else ["Task completed according to requirements"]
    
    def _get_task_dependencies(
        self,
        task_num: int,
        task_structure: TaskStructure,
        epic_num: int,
        story_number: int
    ) -> List[str]:
        """Get task dependencies."""
        dependencies = []
        
        if task_num in task_structure.task_dependencies:
            dep_nums = task_structure.task_dependencies[task_num]
            for dep_num in dep_nums:
                dep_id = f"E{epic_num}:S{story_number}:T{dep_num:02d}"
                dependencies.append(dep_id)
        
        return dependencies
    
    def _get_task_file_path(
        self,
        epic_num: int,
        story_number: int,
        task_num: int,
        task_title: str
    ) -> Path:
        """Get file path for task."""
        # Create sanitized filename from title
        filename = re.sub(r'[^\w\s-]', '', task_title)
        filename = re.sub(r'[-\s]+', '-', filename)
        filename = f"T{task_num:02d}-{filename[:50]}.md"
        
        epic_path = self.kanban_path / "epics" / f"Epic-{epic_num}" / f"Story-{story_number:02d}"
        epic_path.mkdir(parents=True, exist_ok=True)
        
        return epic_path / filename
    
    def _write_task_file(self, task_path: Path, content: str) -> None:
        """Write task file."""
        task_path.parent.mkdir(parents=True, exist_ok=True)
        task_path.write_text(content, encoding='utf-8')

