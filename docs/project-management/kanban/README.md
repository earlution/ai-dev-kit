---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:54Z
expires_at: null
housekeeping_policy: keep
---

# Kanban Directory

This directory contains **all Kanban-related documentation** for the `ai-dev-kit` repository.

## Structure

```text
kanban/
├── _index.md              # Kanban board view (obligatory)
├── README.md              # This file (obligatory)
├── kanban-board.md        # MoSCOW prioritized tasks
├── kanban-structure.md    # Epic/Story/Task structure
├── kanban-board-guide.md  # Rules and explanations
└── epics/
    ├── Epic-1/            # Epic 1 directory (all files here)
    │   ├── Epic-1.md      # Epic 1 overview
    │   ├── Story-001-ai-dev-kit-kanban-and-versioning.md
    │   └── [other story files as needed]
    ├── Epic-2/            # Epic 2 directory
    │   ├── Epic-2.md
    │   └── Story-XXX-*.md
    └── ...
```

## Key Principles

- **Single location:** All Kanban docs (Epics, Stories, board views) live under `kanban/`
- **Epic-centric:** Each Epic has its own directory containing all its files (Epic overview, Stories, Task docs)
- **Story directories:** Stories with associated files can have subdirectories (e.g., `Story-XXX/TXXX-*.md`)
- **Four-way split:** Board views are split into tasks, structure, guide, and completed tasks for clarity

## Files

- **`_index.md`** – Quick board view (table format)
- **`kanban-board.md`** – MoSCOW prioritized tasks
- **`kanban-structure.md`** – Epic/Story/Task structure  
- **`kanban-board-guide.md`** – Rules and explanations
- **`kanban-completed.md`** – Historical record of completed tasks
- **`epics/Epic-X/Epic-X.md`** – Epic overview document
- **`epics/Epic-X/Story-XXX-*.md`** – Story documents and associated files

## Workflow

1. **Create Epic:** Add `Epic-X/` directory under `epics/` with `Epic-X.md` inside
2. **Create Story:** Add `Story-XXX-*.md` under `epics/Epic-X/`
3. **Update Board views:** `_index.md` (quick view), `kanban-board.md` (tasks), `kanban-structure.md` (epics), `kanban-board-guide.md` (guide), `kanban-completed.md` (completed tasks)
4. **Track Progress:** Update Epic and Story docs as work progresses

See `docs/project-management/rituals/policy/kanban-governance-policy.md` for full governance details.
