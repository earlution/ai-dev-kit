---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T14:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Use Cases Knowledge Base

**Purpose:** Central repository for all use cases, organized by type (Canonical vs Discovered) and domain.

**Audience:** Project maintainers, designers, developers, framework users

---

## Overview

This section contains all use cases for the ai-dev-kit framework and related patterns. Use cases are organized into two categories:

1. **Canonical Use Cases:** Planned, designed use cases from the design phase
2. **Discovered Use Cases:** Patterns and practices discovered during actual work

---

## Quick Navigation

- **[Methodology](USE_CASE_METHODOLOGY.md)** - How to organize and manage use cases
- **[Canonical Use Cases](Canonical/)** - Design-phase use cases
- **[Discovered Use Cases](Discovered/)** - Implementation-phase use cases
- **[Templates](Templates/)** - Use case templates

---

## Use Case Types

### Canonical Use Cases

**Location:** [`Canonical/`](Canonical/)

**Definition:** Use cases identified and documented during the design/planning phase, before implementation.

**Characteristics:**
- Planned and intentional
- Part of original design/architecture
- Documented before implementation
- Stable and well-defined

**Examples:**
- Framework adoption patterns
- Workflow execution patterns
- Versioning patterns
- Kanban organization patterns

---

### Discovered Use Cases

**Location:** [`Discovered/`](Discovered/)

**Definition:** Use cases, patterns, or practices discovered during actual work, implementation, or problem-solving.

**Characteristics:**
- Emergent from real work
- Discovered during implementation
- May reveal gaps in original design
- Can inform future canonical design

**Examples:**
- Re-opening BRs/tasks pattern
- Bidirectional wiring principle
- Pattern discovery workflow

---

## Use Case Indexes

### Canonical Use Cases Index

See [`Canonical/README.md`](Canonical/README.md) for complete index of canonical use cases.

### Discovered Use Cases Index

See [`Discovered/README.md`](Discovered/README.md) for complete index of discovered use cases.

---

## How to Use This Section

### Finding Use Cases

1. **By Type:**
   - Canonical: Check `Canonical/` directory
   - Discovered: Check `Discovered/` directory

2. **By Domain:**
   - Check indexes in each directory
   - Use domain tags in use case documents

3. **By Status:**
   - Active: Check active use cases in indexes
   - Deprecated: Check deprecated use cases
   - Promoted: Check promoted discovered use cases

### Creating Use Cases

1. **Canonical Use Case:**
   - Use `Templates/CANONICAL_USE_CASE_TEMPLATE.md`
   - Create in `Canonical/` directory
   - Follow naming convention: `UC-XXX-[title].md` (UC implies canonical)
   - Update `Canonical/README.md` index

2. **Discovered Use Case:**
   - Use `Templates/DISCOVERED_USE_CASE_TEMPLATE.md`
   - Create in `Discovered/` directory
   - Follow naming convention: `UC-D-XXX-[title].md`
   - Wire to related BR/FR, Tasks, documentation
   - Update `Discovered/README.md` index

---

## Related Documentation

- [USE_CASE_METHODOLOGY.md](USE_CASE_METHODOLOGY.md) - Complete methodology guide
- [BIDIRECTIONAL_WIRING_PRINCIPLE.md](../fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md) - Example discovered use case
- [REOPENING_BR_AND_TASKS_GUIDE.md](../fr-br/REOPENING_BR_AND_TASKS_GUIDE.md) - Example discovered use case

---

_This section is part of the Knowledge Base. See `docs/README.md` for complete KB structure._
