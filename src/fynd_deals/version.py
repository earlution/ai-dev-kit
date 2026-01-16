"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

Schema: RC.EPIC.STORY.TASK+BUILD
- RC: Release Candidate (0 = development, 1+ = release candidate)
- EPIC: Dev-kit Epic number (1-4+)
- STORY: Story number within epic
- TASK: Task number within story
- BUILD: Build number (increments per release within task)

Version ordering is canonical (by version number, not timestamp).
This enables parallel epic development and accurate changelog ordering.

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
Framework: packages/frameworks/numbering & versioning/versioning-policy.md
"""

VERSION_RC = 0        # Release candidate (0 = development, 1+ = release candidate)
VERSION_EPIC = 5      # Epic number (Epic 5: Documentation Management and Maintenance)
VERSION_STORY = 0     # Story number (Story 0: FR Repo - PERPETUAL)
VERSION_TASK = 35     # Task number (Task 35: Task Template Cross-Wiring Section)
VERSION_BUILD = 0     # Build number (E5:S00:T35+0 - Doc-init: FR-035 task created)

# Composite version string using RC.EPIC.STORY.TASK+BUILD schema
# Format: RC.EPIC.STORY.TASK+BUILD
# Example: 0.3.1.3+1 = Development, Epic 3, Story 1, Task 3, Build 1
# Current: 0.5.0.35+0 = Development, Epic 5, Story 0, Task 35, Build 0 (doc-init)
VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"

# Validation Notes:
# - VERSION_RC must be >= 0
# - VERSION_EPIC must match active dev-kit epic (1-4+)
# - VERSION_STORY must match active story within epic
# - VERSION_TASK must match active task within story
# - VERSION_BUILD must be >= 0 (0 = doc-init/abstract space, 1+ = normal builds)
# - BUILD = 0 is only valid for first-time E/S/T document creation (docs-only)
# - BUILD >= 1 is required for functional changes
# - Version must match branch context (validated by validate_branch_context.py)
# - Version format validated by validate_changelog_format.py
# - Abstract space awareness: FR-020 (validator recognizes +0 as valid)


