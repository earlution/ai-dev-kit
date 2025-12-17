---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T01:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Ultimate Canonical KB/Documentation Structure

**Purpose:** Definitive specification for the canonical KB/documentation structure  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Part of:** E6:S06:T06 – Cross-project meta-analysis and canonical framework design  
**Supersedes:** All previous KB/documentation structure specifications

**Based on:** Comprehensive meta-analysis of 10 projects (9 client implementations + ai-dev-kit source)

---

## Executive Summary

This document **defines the ultimate canonical KB/documentation structure** for ADK framework implementations. This is the **definitive specification** that all projects should adopt.

**The Ultimate Canonical KB Structure:**

```
KB/
├── Architecture/                    # Technical standards, ADRs, integration docs
├── Changelog_and_Release_Notes/     # Release documentation, changelog archive
├── PM_and_Portfolio/               # Project management, Kanban, governance
├── Guides/                         # User-facing documentation, how-to guides
└── Documentation/                  # Developer documentation, vision, purpose (optional)
```

**Key Specifications:**
- **Root Directory:** `KB/` (uppercase, abbreviation)
- **Organization:** 5-pillar structure (Architecture, Changelog, PM, Guides, Documentation)
- **Document Frontmatter:** Required (lifecycle metadata)
- **Navigation:** Hierarchical `README.md` files
- **Cross-Referencing:** Standard markdown links

---

## 1. Root Directory Specification

### 1.1 Directory Naming

**CANONICAL:** `KB/` (uppercase, abbreviation)

**Location:** Project root directory

**Structure:**
```
{project-root}/
├── KB/                              # Knowledge base (canonical)
├── src/                             # Source code
├── packages/                        # Framework packages
├── README.md                        # Project README
└── ...
```

---

## 2. Directory Organization Specification

### 2.1 Canonical 5-Pillar Structure

**CANONICAL:** 5-pillar organization

**Structure:**
```
KB/
├── Architecture/                    # Technical standards, ADRs, integration docs
├── Changelog_and_Release_Notes/     # Release documentation, changelog archive
├── PM_and_Portfolio/               # Project management, Kanban, governance
├── Guides/                         # User-facing documentation, how-to guides
└── Documentation/                  # Developer documentation, vision, purpose (optional)
```

### 2.2 Pillar Descriptions

**1. Architecture/**
- Technical standards and ADRs (Architecture Decision Records)
- Integration documentation
- System design documents
- Technical specifications

**2. Changelog_and_Release_Notes/**
- Release documentation
- Changelog archive (`CHANGELOG_v0.N.NNN.T+B.md`)
- Main changelog (`CHANGELOG.md`)
- Release notes

**3. PM_and_Portfolio/**
- Project management documentation
- Kanban structure (`kanban/epics/Epic-{N}/`)
- Portfolio management
- Governance documents

**4. Guides/**
- User-facing documentation
- How-to guides
- Tutorials
- User manuals

**5. Documentation/** (Optional)
- Developer documentation
- Vision and purpose documents
- Project overview
- Getting started guides

### 2.3 Complete Structure Example

**CANONICAL STRUCTURE:**

```
KB/
├── Architecture/
│   ├── README.md
│   ├── Standards_and_ADRs/
│   │   ├── README.md
│   │   ├── ultimate-canonical-kanban-structure.md
│   │   └── ultimate-canonical-kb-structure.md
│   └── Integration/
│       └── README.md
├── Changelog_and_Release_Notes/
│   ├── README.md
│   └── Changelog_Archive/
│       ├── CHANGELOG_v0.6.6.6+1.md
│       └── CHANGELOG_v0.6.6.6+2.md
├── PM_and_Portfolio/
│   ├── README.md
│   └── kanban/
│       ├── README.md
│       └── epics/
│           ├── Epic-1/
│           └── Epic-6/
├── Guides/
│   ├── README.md
│   └── getting-started.md
└── Documentation/
    ├── README.md
    └── vision.md
```

---

## 3. Document Structure Specification

### 3.1 Document Frontmatter

**CANONICAL FORMAT:**

```yaml
---
lifecycle: evergreen | timeboxed | transient
created_at: YYYY-MM-DDTHH:MM:SSZ
ttl_days: <integer> | null
expires_at: YYYY-MM-DDTHH:MM:SSZ | null
housekeeping_policy: keep | archive | delete
---
```

**Required Fields:**
- `lifecycle`: `evergreen` | `timeboxed` | `transient`
- `created_at`: ISO 8601 datetime

**Optional Fields:**
- `ttl_days`: Time to live in days (integer or null)
- `expires_at`: Expiration datetime (ISO 8601 or null)
- `housekeeping_policy`: `keep` | `archive` | `delete`

**Lifecycle Values:**
- `evergreen`: Permanent documentation (no expiration)
- `timeboxed`: Time-limited documentation (expires after `ttl_days`)
- `transient`: Temporary documentation (short-lived)

**Housekeeping Policy Values:**
- `keep`: Keep document permanently
- `archive`: Archive document when expired
- `delete`: Delete document when expired

**Example:**
```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T01:15:00Z
expires_at: null
housekeeping_policy: keep
---
```

---

## 4. Navigation Specification

### 4.1 Hierarchical README Navigation

**CANONICAL:** Hierarchical `README.md` files

**Structure:**
```
KB/
├── README.md                        # Root KB navigation
├── Architecture/
│   └── README.md                    # Architecture section navigation
├── Changelog_and_Release_Notes/
│   └── README.md                    # Changelog section navigation
├── PM_and_Portfolio/
│   └── README.md                    # PM section navigation
├── Guides/
│   └── README.md                    # Guides section navigation
└── Documentation/
    └── README.md                    # Documentation section navigation
```

### 4.2 README Format

**CANONICAL FORMAT:**

```markdown
# {Section Name}

## Overview

{Section description}

## Contents

- [Document 1](path/to/document1.md) - {Description}
- [Document 2](path/to/document2.md) - {Description}
- [Subsection](subsection/) - {Description}

## Related

- [Related Section](../related-section/) - {Description}
```

---

## 5. Cross-Referencing Specification

### 5.1 Standard Markdown Links

**CANONICAL:** Standard markdown links `[Link Text](path/to/file.md)`

**Examples:**
- `[Architecture Decision Record](Architecture/ADRs/ADR-001.md)`
- `[Epic 1 Overview](PM_and_Portfolio/kanban/epics/Epic-1/Epic-1.md)`
- `[Getting Started Guide](Guides/getting-started.md)`

### 5.2 Obsidian Support (Optional)

**Format:** Obsidian links `[[Link Text]]` (for Obsidian projects)

**Support:** Both `README.md` and `_index.md` in same directory

**Examples:**
- `[[Architecture Decision Record]]`
- `[[Epic 1 Overview]]`
- `[[Getting Started Guide]]`

---

## 6. Document Types Specification

### 6.1 Standard Document Types

**CANONICAL TYPES:**
- **ADR** (Architecture Decision Record) - Technical decisions
- **Policy** - Governance and standards
- **Guide** - How-to guides and tutorials
- **Template** - Document templates
- **Analysis** - Analysis reports
- **Changelog** - Release documentation

### 6.2 Document Type Classification

**By Pillar:**
- Architecture: ADRs, Technical Standards, Integration Docs
- Changelog: Changelogs, Release Notes
- PM: Kanban, Governance, Portfolio Management
- Guides: How-to Guides, Tutorials, User Manuals
- Documentation: Vision, Purpose, Developer Docs

**By Lifecycle:**
- `evergreen`: Permanent documentation (ADRs, Policies, Guides)
- `timeboxed`: Time-limited documentation (Analysis reports, Temporary guides)
- `transient`: Temporary documentation (Sitreps, Temporary notes)

---

## 7. Validation Rules

### 7.1 Root Directory Validation

**Required:**
- Root directory named `KB/` (uppercase, abbreviation)
- Root directory located in project root
- Root directory contains canonical 5-pillar structure

### 7.2 Document Structure Validation

**Required:**
- Documents have YAML frontmatter
- Frontmatter includes `lifecycle` and `created_at` fields
- Lifecycle metadata follows canonical format
- Document structure matches canonical format

### 7.3 Navigation Validation

**Required:**
- Root `KB/README.md` exists
- Section `README.md` files exist for each pillar
- README files follow canonical format
- Links are valid and accessible

---

## 8. Implementation

### 8.1 Installation

**CANONICAL METHOD:** Use installer or manual setup following this specification

**Installation Steps:**
1. Create `KB/` directory in project root
2. Create 5 pillar directories:
   - `Architecture/`
   - `Changelog_and_Release_Notes/`
   - `PM_and_Portfolio/`
   - `Guides/`
   - `Documentation/`
3. Create `README.md` files for navigation
4. Add frontmatter to all documents

### 8.2 Document Creation

**CANONICAL PROCESS:**
1. Determine appropriate pillar for document
2. Create document with canonical frontmatter
3. Add document to appropriate pillar's `README.md`
4. Follow canonical naming conventions

---

**Last Updated:** 2025-12-18  
**Version:** 1.0.0  
**Status:** COMPLETE
