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
VERSION_EPIC = 3      # Epic 3: Numbering & Versioning Framework
VERSION_STORY = 2     # Story 2: Versioning Cookbook & Examples
VERSION_TASK = 12     # E3:S02:T12 — ADR-002 / task-touch; BR-061 wiring (docs only)
VERSION_BUILD = 1     # Docs-only kanban/BR intake (+0 invalid: T12 doc already existed per validate_version_bump)

# Composite version string using RC.EPIC.STORY.TASK+BUILD schema
# Format: RC.EPIC.STORY.TASK+BUILD
# Current: 0.3.2.12+1 — outward SemVer **v0.4.706+1** (`task_touch` counter 706)
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
