---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Ultimate Canonical Knowledge Base Structure

**Status:** COMPLETE  
**Version:** 2.0.0  
**Last updated:** 2025-12-18  
**Purpose:** Definitive specification for persistent, agentic knowledge base structure

---

## Executive Summary

This document defines the **ultimate canonical Knowledge Base (KB) structure** for AI Dev Kit (ADK) projects. The KB is a **persistent, curated knowledge asset** that:

- **Persists across sessions** - Knowledge is not ephemeral; it accumulates and evolves over time
- **Supports agentic management** - Agents can search, scrape, curate, update, and cull knowledge autonomously
- **Leverages Cursor indexing** - Local files are indexed by Cursor for intelligent querying across the codebase
- **Enables curation** - Users build a tailored knowledge base that matches their recurring needs
- **Follows taxonomical standards** - Clear structure, naming conventions, and versioning for maintainability

**Core Concept:** The knowledge base is a **persistent local library system** where agents can search, acquire, collect, document, save, store, update, and remove outdated or incorrect information. This makes knowledge expandable and permanent rather than ephemeral, enabling users to curate a knowledge base best suited to their needs.

---

## 1. Knowledge Base Philosophy

### 1.1 Persistent Knowledge vs. Ephemeral Information

**Persistent Knowledge:**
- Stored locally in the repository
- Indexed by Cursor for cross-file querying
- Curated over time, accumulating complexity
- Reusable across sessions and workspaces
- Version-controlled and maintainable

**Ephemeral Information:**
- Web search results (lost between sessions)
- Chat context (session-specific)
- Temporary research (not saved)
- One-time lookups (not recurring)

**Principle:** If knowledge is needed **recurringly** or is **important enough to preserve**, it belongs in the persistent knowledge base.

### 1.2 Agentic Knowledge Management

The knowledge base supports **agentic knowledge management** where agents can:

1. **Search** - Query external sources (web, docs, APIs)
2. **Scrape** - Extract relevant content from webpages
3. **Curate** - Organize and structure knowledge
4. **Update** - Refresh outdated information
5. **Cull** - Remove incorrect or deprecated content
6. **Index** - Make knowledge discoverable via Cursor's indexing

**Workflow Example:**
```
User Query → Agent searches web → Agent scrapes relevant docs → 
Agent structures knowledge → Agent saves to KB → 
Cursor indexes file → Knowledge available for future queries
```

### 1.3 Cursor Integration

**Leveraging Cursor's Architecture:**
- Cursor has built-in indexing, vectorization, and search capabilities
- Can manage whole directories of different files with LLMs
- Can query and examine relevant code/knowledge across multiple files
- Knowledge files in `docs/knowledge/` are automatically indexed

**Best Practice:** Structure knowledge files to maximize Cursor's indexing effectiveness:
- Clear, descriptive filenames
- Well-structured Markdown with headers
- Consistent frontmatter metadata
- Logical directory organization

---

## 2. Canonical Directory Structure

### 2.1 Root Structure

```
docs/
├── architecture/              # Technical standards, ADRs (design-phase)
├── documentation/             # User-facing and engineering docs
├── guides/                    # User-facing guides and tutorials
├── knowledge/                 # Persistent knowledge base (implementation-phase)
│   ├── analysis/              # Analysis documents, retrospectives
│   ├── reviews/               # Post-implementation reviews
│   ├── use-cases/             # Discovered use cases (implementation-phase)
│   │   ├── discovered/        # Use cases discovered during implementation
│   │   └── templates/         # Use case templates
│   └── changelog-and-release-notes/  # Release documentation
└── project-management/        # Kanban, governance, rituals
```

**Key Distinction:**
- `docs/architecture/` - **Design-phase** artifacts (standards, ADRs, canonical use cases)
- `docs/knowledge/` - **Implementation-phase** artifacts (analysis, reviews, discovered use cases)

### 2.2 Knowledge Base Structure (`docs/knowledge/`)

```
docs/knowledge/
├── README.md                          # Knowledge base navigation hub
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
└── changelog-and-release-notes/       # Release documentation
    ├── README.md                      # Changelog section overview
    └── changelog-archive/              # Detailed changelogs per release
        └── CHANGELOG_v*.md
```

### 2.3 Directory Purposes

| Directory | Purpose | Lifecycle | Agentic Support |
|-----------|---------|-----------|-----------------|
| `analysis/` | Analysis documents, retrospectives, pattern identification | `evergreen` | Agents can analyze codebases and generate analysis docs |
| `reviews/` | Post-implementation reviews (Epic/Story PIR) | `timeboxed` | Agents can generate review documents from completed work |
| `use-cases/` | Discovered use cases from implementation | `evergreen` | Agents can extract use cases from code and create docs |
| `changelog-and-release-notes/` | Release documentation | `evergreen` | Agents can generate changelogs from commits and Kanban |

---

## 3. Taxonomical Standards (SOP)

### 3.1 Purpose

To ensure all knowledge in the knowledge base is **organized, discoverable, maintainable, and process-compliant**, this SOP defines canonical standards for:

- Taxonomy (classification system)
- Directory structure
- File naming conventions
- Update workflows
- Versioning and curation

### 3.2 Principles

1. **Discoverability** - Knowledge must be easy to find via logical, hierarchical structure and standard naming
2. **Maintainability** - Structure must support easy updates, versioning, and curation
3. **Process Compliance** - All changes must be documented with real timestamps and rationale
4. **Separation of Concerns** - Each directory/file should have a clear, single responsibility
5. **Agentic Support** - Structure must enable agents to autonomously manage knowledge

### 3.3 File Naming Conventions

**Standard Format:** Lowercase, hyphen-separated names

**Patterns:**
- Analysis documents: `*-analysis.md`, `meta-analysis-*.md`
- Project analyses: `{project-name}-adk-analysis.md`
- Reviews: `epic-{n}-review.md`, `story-{n}-review.md`
- Use cases: `uc-{name}.md` or descriptive name
- Templates: `{TYPE}_TEMPLATE.md` (uppercase for templates)

**Examples:**
- ✅ `workflow-structure-analysis.md`
- ✅ `kanban-structure-analysis.md`
- ✅ `ai-dev-kit-adk-analysis.md`
- ✅ `epic-4-review.md`
- ✅ `uc-user-authentication.md`
- ❌ `WorkflowStructureAnalysis.md` (PascalCase)
- ❌ `workflow_structure_analysis.md` (snake_case)

### 3.4 Directory Naming Conventions

**Standard Format:** Lowercase, hyphen-separated names (kebab-case)

**Patterns:**
- Use descriptive, self-documenting names
- Avoid abbreviations unless universally understood
- Keep depth ≤3 levels for optimal navigation
- Each directory must contain a `README.md` describing its purpose

**Examples:**
- ✅ `changelog-and-release-notes/`
- ✅ `use-cases/`
- ✅ `project-management/`
- ❌ `KB/` (uppercase abbreviation)
- ❌ `PM_and_Portfolio/` (mixed case, underscores)

### 3.5 Versioning and Updates

**Versioning Strategy:**
- Major changes: Create new versioned file or clear changelog section
- Minor updates: Update existing file with timestamp
- All edits: Must be timestamped (system-derived, not fabricated) and attributed

**Update Workflow:**
1. Propose changes in draft file or branch
2. Review for compliance with this SOP
3. Upon approval, update canonical file and document change in changelog section
4. Announce major taxonomy changes in project communication channel

**Deprecation:**
- Deprecated files must be clearly marked
- Link to replacements
- Archive deprecated files to `_archive/` subdirectory if needed

---

## 4. Document Structure

### 4.1 Frontmatter (Required)

All knowledge base documents must include frontmatter with lifecycle metadata:

```yaml
---
lifecycle: evergreen | timeboxed | transient
ttl_days: <integer> | null
created_at: <ISO 8601 datetime>
expires_at: <ISO 8601 datetime> | null
housekeeping_policy: keep | archive | delete
---
```

**Field Definitions:**
- `lifecycle`: Document persistence classification
  - `evergreen`: Permanent knowledge (default for KB)
  - `timeboxed`: Time-limited knowledge (e.g., reviews)
  - `transient`: Temporary knowledge (rare in KB)
- `ttl_days`: Time-to-live in days (null for evergreen)
- `created_at`: Creation timestamp (ISO 8601)
- `expires_at`: Expiration timestamp (null for evergreen)
- `housekeeping_policy`: Cleanup action when expired
  - `keep`: Retain even after expiration
  - `archive`: Move to archive directory
  - `delete`: Remove from KB

### 4.2 Document Sections

**Standard Structure:**
1. **Title** - Clear, descriptive title
2. **Frontmatter** - Lifecycle metadata (required)
3. **Executive Summary** - High-level overview (2-3 paragraphs)
4. **Main Content** - Structured with headers (H2, H3)
5. **Related** - Links to related documents
6. **Last Updated** - Timestamp (system-derived)

**Example Structure:**
```markdown
# Document Title

---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

## Executive Summary

[2-3 paragraph overview]

## Main Section 1

[Content]

## Main Section 2

[Content]

## Related

- [Related Document 1](path/to/doc1.md)
- [Related Document 2](path/to/doc2.md)

---
_Last updated: 2025-12-18T00:00:00Z_
```

---

## 5. Agentic Knowledge Management

### 5.1 Agent Capabilities

Agents can autonomously manage knowledge through:

1. **Search** - Query external sources (web, documentation, APIs)
2. **Scrape** - Extract relevant content from webpages
3. **Structure** - Organize knowledge into canonical format
4. **Save** - Write knowledge files to `docs/knowledge/`
5. **Update** - Refresh outdated information
6. **Cull** - Remove incorrect or deprecated content
7. **Index** - Ensure knowledge is discoverable (automatic via Cursor)

### 5.2 Agent Workflow

**Knowledge Acquisition Workflow:**
```
User Query → Agent analyzes need → Agent searches external sources → 
Agent scrapes relevant content → Agent structures knowledge → 
Agent saves to KB → Cursor indexes → Knowledge available for queries
```

**Knowledge Update Workflow:**
```
Agent detects outdated knowledge → Agent searches for updates → 
Agent validates new information → Agent updates KB file → 
Agent documents change in changelog → Cursor re-indexes
```

**Knowledge Curation Workflow:**
```
Agent identifies knowledge gaps → Agent evaluates need → 
Agent creates new knowledge doc → Agent links to related docs → 
Agent updates KB README → Knowledge discoverable
```

### 5.3 Agent Rules

**For Knowledge Base Updates (RW Step 9):**
1. **ANALYZE** - Review changes made in release
2. **DETERMINE** - Identify knowledge base documents that may need updates
3. **EVALUATE** - Assess if there are documentation gaps
4. **DECIDE** - Determine if new knowledge base articles should be created
5. **EXECUTE** - Update existing docs or create new ones

**For Knowledge Acquisition:**
- Only acquire knowledge that is **recurringly needed** or **important enough to preserve**
- Structure knowledge according to canonical format
- Link to related knowledge documents
- Update KB README if adding new categories

---

## 6. Knowledge Base Categories

### 6.1 Analysis (`docs/knowledge/analysis/`)

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

### 6.2 Reviews (`docs/knowledge/reviews/`)

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

### 6.3 Use Cases (`docs/knowledge/use-cases/`)

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

### 6.4 Changelog and Release Notes (`docs/knowledge/changelog-and-release-notes/`)

**Purpose:** Release documentation

**Content Types:**
- Detailed changelogs per release (`CHANGELOG_v*.md`)
- Release notes summaries

**Lifecycle:** `evergreen` (default)

**Agentic Support:**
- Agents can generate changelogs from commits and Kanban
- Agents can create release notes from changelogs

---

## 7. Knowledge Base README Structure

### 7.1 Root README (`docs/knowledge/README.md`)

**Required Sections:**
1. **Overview** - Purpose of the knowledge base
2. **Structure** - Directory organization
3. **Categories** - Description of each category
4. **Agentic Management** - How agents manage knowledge
5. **Navigation** - How to find knowledge
6. **Contributing** - How to add/update knowledge

### 7.2 Category READMEs

Each major category (`analysis/`, `reviews/`, `use-cases/`) should have a `README.md` that:
- Describes the category's purpose
- Lists key documents
- Explains how to contribute
- Links to related categories

---

## 8. Integration with Release Workflow

### 8.1 RW Step 9: Update Knowledge Base

**Agentic Intelligence Required:**
1. **ANALYZE** - Review changes made in release
2. **DETERMINE** - Identify knowledge base documents that may need updates
3. **EVALUATE** - Assess if there are documentation gaps
4. **DECIDE** - Determine if new knowledge base articles should be created
5. **EXECUTE** - Update existing docs or create new ones

**Configuration:**
```yaml
# rw-config.yaml
config:
  knowledge_base_root: docs/knowledge
```

**Agent Behavior:**
- Update existing knowledge documents if changes affect them
- Create new knowledge documents if gaps are identified
- Link new knowledge to related documents
- Update KB README if adding new categories

---

## 9. Examples

### 9.1 Analysis Document Example

```markdown
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Structure Analysis

## Executive Summary

This document analyzes workflow structure patterns across all ADK projects...

## Patterns Identified

### Pattern 1: Release Workflow Structure
[Content]

## Related

- [Ultimate Canonical Workflow Structure](../architecture/standards-and-adrs/ultimate-canonical-workflow-structure.md)
- [Kanban Structure Analysis](kanban-structure-analysis.md)

---
_Last updated: 2025-12-18T00:00:00Z_
```

### 9.2 Use Case Document Example

```markdown
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Use Case: User Authentication Flow

## Executive Summary

This use case was discovered during implementation of the authentication system...

## Actors

- User
- Authentication Service

## Flow

[Content]

## Related

- [Epic 4: Security](../project-management/kanban/epics/Epic-4/Epic-4.md)
- [Architecture: Authentication ADR](../architecture/standards-and-adrs/adr-authentication.md)

---
_Last updated: 2025-12-18T00:00:00Z_
```

---

## 10. Validation

### 10.1 Structure Validation

**Checklist:**
- ✅ All directories use kebab-case (lowercase, hyphens)
- ✅ All files use kebab-case (lowercase, hyphens)
- ✅ All directories have `README.md` files
- ✅ All documents have required frontmatter
- ✅ All documents follow standard structure
- ✅ Depth ≤3 levels for optimal navigation

### 10.2 Content Validation

**Checklist:**
- ✅ All documents have executive summary
- ✅ All documents have "Related" section
- ✅ All documents have "Last updated" timestamp
- ✅ All links are valid (no broken links)
- ✅ All frontmatter fields are valid

---

## 11. Migration from Legacy Structure

### 11.1 Legacy Patterns

**Old Structure:**
- `KB/` (uppercase)
- `PM_and_Portfolio/` (mixed case, underscores)
- Deep nesting (6+ levels)

**New Structure:**
- `docs/` (root)
- `docs/knowledge/` (persistent knowledge base)
- `docs/project-management/` (kebab-case)
- Depth ≤3 levels

### 11.2 Migration Strategy

1. **Identify** - Catalog all knowledge documents
2. **Classify** - Determine which belong in `docs/knowledge/`
3. **Reorganize** - Move to new structure
4. **Update** - Fix all links and references
5. **Validate** - Run validation checklist

---

## 12. Summary

### 12.1 Key Principles

1. **Persistent Knowledge** - Knowledge persists across sessions, accumulating over time
2. **Agentic Management** - Agents can autonomously search, curate, update, and cull knowledge
3. **Cursor Integration** - Local files are indexed by Cursor for intelligent querying
4. **Taxonomical Standards** - Clear structure, naming, and versioning for maintainability
5. **Separation of Concerns** - Design-phase artifacts in `docs/architecture/`, implementation-phase artifacts in `docs/knowledge/`

### 12.2 Directory Structure

```
docs/
├── architecture/              # Design-phase artifacts
├── knowledge/                 # Implementation-phase artifacts (persistent KB)
│   ├── analysis/              # Analysis documents
│   ├── reviews/               # Post-implementation reviews
│   ├── use-cases/             # Discovered use cases
│   └── changelog-and-release-notes/  # Release documentation
└── project-management/        # Kanban, governance
```

### 12.3 Agentic Capabilities

- **Search** - Query external sources
- **Scrape** - Extract relevant content
- **Structure** - Organize knowledge
- **Save** - Write to KB
- **Update** - Refresh outdated info
- **Cull** - Remove deprecated content
- **Index** - Make discoverable (automatic via Cursor)

---

**Related:**
- [Ultimate Canonical Workflow Structure](ultimate-canonical-workflow-structure.md)
- [Ultimate Canonical Kanban Structure](ultimate-canonical-kanban-structure.md)
- [Ultimate Canonical Cursorrules Structure](ultimate-canonical-cursorrules-structure.md)

---
_Last updated: 2025-12-18T00:00:00Z_

