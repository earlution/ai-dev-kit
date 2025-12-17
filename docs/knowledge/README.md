---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Knowledge Base

**Purpose:** Persistent, curated knowledge asset that accumulates over time and supports agentic management

---

## Overview

The knowledge base is a **persistent local library system** where knowledge is:

- **Stored locally** in the repository
- **Indexed by Cursor** for intelligent querying across the codebase
- **Curated over time** by agents and users
- **Reusable across sessions** and workspaces
- **Version-controlled** and maintainable

**Core Concept:** Knowledge that is needed **recurringly** or is **important enough to preserve** belongs in the persistent knowledge base, not in ephemeral web searches or chat context.

---

## Structure

```
docs/knowledge/
├── analysis/                          # Analysis documents, retrospectives
│   ├── README.md                      # Analysis section overview
│   ├── meta-analysis-*.md            # Cross-project meta-analyses
│   ├── workflow-structure-analysis.md  # Workflow pattern analysis
│   ├── kanban-structure-analysis.md    # Kanban pattern analysis
│   └── projects/                      # Project-specific analyses
│       └── *-adk-analysis.md          # Individual project analyses
├── reviews/                           # Post-implementation reviews
│   ├── README.md                      # Reviews section overview
│   ├── epic-reviews/                  # Epic-level reviews
│   └── story-reviews/                 # Story-level reviews
├── use-cases/                         # Discovered use cases (implementation-phase)
│   ├── README.md                      # Use cases section overview
│   ├── discovered/                    # Use cases discovered during implementation
│   │   └── *.md                       # Individual discovered use cases
│   └── templates/                     # Use case templates
│       └── DISCOVERED_USE_CASE_TEMPLATE.md
├── guides/                            # Reference guides and process documentation
│   ├── README.md                      # Guides section overview
│   └── package-maintenance-and-release.md  # Package maintenance guide
└── changelog-and-release-notes/       # Release documentation
    ├── README.md                      # Changelog section overview
    └── changelog-archive/              # Detailed changelogs per release
        └── CHANGELOG_v*.md
```

---

## Categories

### Analysis (`analysis/`)

**Purpose:** Analysis documents, retrospectives, pattern identification

**Content Types:**
- Meta-analyses (cross-project pattern analysis)
- Structure analyses (workflow, Kanban, documentation patterns)
- Project-specific analyses (ADK implementation analysis per project)
- Pattern identification (good/bad practices, anti-patterns)

**Lifecycle:** `evergreen` (default)

**Agentic Support:**
- Agents can analyze codebases and generate analysis documents
- Agents can identify patterns across projects
- Agents can create meta-analysis documents

### Reviews (`reviews/`)

**Purpose:** Post-implementation reviews (Epic/Story PIR)

**Content Types:**
- Epic reviews (comprehensive Epic completion reviews)
- Story reviews (Story-level completion reviews)
- Retrospectives (lessons learned, improvements)

**Lifecycle:** `timeboxed` (reviews are time-limited)

**Agentic Support:**
- Agents can generate review documents from completed work
- Agents can extract lessons learned from code and commits
- Agents can create retrospective documents

### Use Cases (`use-cases/`)

**Purpose:** Discovered use cases from implementation (implementation-phase)

**Content Types:**
- Discovered use cases (use cases found during implementation)
- Use case templates (for documenting discovered use cases)

**Lifecycle:** `evergreen` (default)

**Agentic Support:**
- Agents can extract use cases from code
- Agents can create use case documents from implementation
- Agents can identify use case patterns

**Note:** Canonical (design-phase) use cases belong in `docs/architecture/use-cases/canonical/`, not in `docs/knowledge/use-cases/`.

### Guides (`guides/`)

**Purpose:** Reference guides and process documentation for recurring tasks and workflows

**Content Types:**
- Process guides (how to perform recurring tasks)
- Workflow documentation (step-by-step procedures)
- Best practices documentation
- Reference documentation (quick lookup)

**Lifecycle:** `evergreen` (default)

**Agentic Support:**
- Agents can reference guides when performing tasks
- Agents can update guides when processes change
- Agents can create new guides when gaps are identified
- Agents can link guides to related documentation

**Key Guides:**
- [Package Maintenance and Release](guides/package-maintenance-and-release.md) - Comprehensive guide to package maintenance, versioning, and release processes
- [Building Persistent Knowledge in Cursor](guides/building-persistent-knowledge.md) - Foundational guide on building and managing persistent knowledge bases in Cursor using agentic knowledge management

### Changelog and Release Notes (`changelog-and-release-notes/`)

**Purpose:** Release documentation

**Content Types:**
- Detailed changelogs per release (`CHANGELOG_v*.md`)
- Release notes summaries

**Lifecycle:** `evergreen` (default)

**Agentic Support:**
- Agents can generate changelogs from commits and Kanban
- Agents can create release notes from changelogs

---

## Agentic Knowledge Management

### Agent Capabilities

Agents can autonomously manage knowledge through:

1. **Search** - Query external sources (web, documentation, APIs)
2. **Scrape** - Extract relevant content from webpages
3. **Structure** - Organize knowledge into canonical format
4. **Save** - Write knowledge files to `docs/knowledge/`
5. **Update** - Refresh outdated information
6. **Cull** - Remove incorrect or deprecated content
7. **Index** - Ensure knowledge is discoverable (automatic via Cursor)

### Agent Workflows

**Knowledge Acquisition:**
```
User Query → Agent analyzes need → Agent searches external sources → 
Agent scrapes relevant content → Agent structures knowledge → 
Agent saves to KB → Cursor indexes → Knowledge available for queries
```

**Knowledge Update:**
```
Agent detects outdated knowledge → Agent searches for updates → 
Agent validates new information → Agent updates KB file → 
Agent documents change in changelog → Cursor re-indexes
```

**Knowledge Curation (RW Step 9):**
```
Agent analyzes release changes → Agent identifies knowledge gaps → 
Agent evaluates need → Agent creates/updates knowledge docs → 
Agent links to related docs → Knowledge discoverable
```

---

## Navigation

### Finding Knowledge

1. **By Category** - Browse by category (`analysis/`, `reviews/`, `use-cases/`, `guides/`)
2. **By Search** - Use Cursor's search to find relevant knowledge files
3. **By Links** - Follow "Related" sections in documents
4. **By README** - Check category READMEs for key documents

### Contributing Knowledge

1. **Determine Category** - Choose appropriate category (`analysis/`, `reviews/`, `use-cases/`, `guides/`)
2. **Follow Structure** - Use canonical document structure (see [Ultimate Canonical KB Structure](../architecture/standards-and-adrs/ultimate-canonical-kb-structure.md))
3. **Add Frontmatter** - Include required lifecycle metadata
4. **Link Related** - Add links to related documents
5. **Update README** - Update category README if adding new major documents

---

## Standards

### File Naming

- **Format:** Lowercase, hyphen-separated (kebab-case)
- **Examples:** `workflow-structure-analysis.md`, `epic-4-review.md`
- **Templates:** Uppercase (e.g., `DISCOVERED_USE_CASE_TEMPLATE.md`)

### Directory Naming

- **Format:** Lowercase, hyphen-separated (kebab-case)
- **Examples:** `changelog-and-release-notes/`, `use-cases/`
- **Depth:** ≤3 levels for optimal navigation

### Document Structure

All knowledge documents must include:
1. **Frontmatter** - Required lifecycle metadata
2. **Executive Summary** - High-level overview (2-3 paragraphs)
3. **Main Content** - Structured with headers (H2, H3)
4. **Related** - Links to related documents
5. **Last Updated** - Timestamp (system-derived)

See [Ultimate Canonical KB Structure](../architecture/standards-and-adrs/ultimate-canonical-kb-structure.md) for complete specifications.

---

## Related

- [Ultimate Canonical KB Structure](../architecture/standards-and-adrs/ultimate-canonical-kb-structure.md) - Complete specification
- [Ultimate Canonical Workflow Structure](../architecture/standards-and-adrs/ultimate-canonical-workflow-structure.md) - RW Step 9 integration
- [Ultimate Canonical Kanban Structure](../architecture/standards-and-adrs/ultimate-canonical-kanban-structure.md) - Kanban integration
- [Package Maintenance and Release Guide](guides/package-maintenance-and-release.md) - Package maintenance guide

---
_Last updated: 2025-12-18T00:00:00Z_

