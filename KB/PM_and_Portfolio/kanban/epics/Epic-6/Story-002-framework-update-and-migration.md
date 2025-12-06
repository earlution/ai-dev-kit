---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-05T14:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 002 – Framework Update and Migration

**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-05  
**Last updated:** 2025-12-06 (v0.6.2.3+1 – Backward compatibility policies established)  
**Version:** v0.6.2.3+1  
**Code:** E6S02

---

## Task Checklist

- [x] **E6:S02:T01 – Create framework update procedures** - COMPLETE ✅
- [x] **E6:S02:T02 – Build migration guides and tools** - COMPLETE ✅
- [x] **E6:S02:T03 – Establish backward compatibility policies** - COMPLETE ✅
- [ ] **E6:S02:T04 – Build framework update CLI tool** - TODO
- [ ] **E6:S02:T05 – Create auto-update mechanisms** - TODO
- [ ] **E6:S02:T06 – Implement Branch Context Policy automation** - TODO

---

## Overview

This story implements processes for updating and migrating framework packages, ensuring smooth transitions and backward compatibility.

---

## Goal

Implement comprehensive processes for updating and migrating framework packages.

---

## Tasks

### E6:S02:T01 – Create framework update procedures

**Input:** Framework versioning strategy  
**Deliverable:** Framework update procedure documentation  
**Dependencies:** E6:S01 (Framework Version Management)  
**Blocker:** None

**Status:** ✅ COMPLETE

**Deliverables:**
- Framework update procedures document: `KB/Architecture/Standards_and_ADRs/framework-update-procedures.md`
- Defines update workflows (PATCH, MINOR, MAJOR)
- Establishes update decision process and criteria
- Documents update methods (Git submodules, CLI tool, package managers)
- Provides update testing processes and best practices

**Key Components:**
- Update workflow overview (7-phase process)
- Update decision process (when to update, when not to update)
- Update workflows (PATCH, MINOR, MAJOR procedures)
- Update methods (Git submodules, CLI tool, package managers)
- Update testing processes (pre-update, update, post-update)
- Update automation (scripts, CI/CD integration)

---

### E6:S02:T02 – Build migration guides and tools

**Input:** Framework update procedures  
**Deliverable:** Migration guides and tools  
**Dependencies:** E6:S02:T01  
**Blocker:** None

**Status:** ✅ COMPLETE

**Deliverables:**
- Framework migration guides and tools document: `KB/Architecture/Standards_and_ADRs/framework-migration-guides-and-tools.md`
- Migration guide template: `packages/frameworks/workflow mgt/templates/MIGRATION_GUIDE_TEMPLATE.md`
- Migration tools: `check-migration-needs.sh`, `migrate-framework.sh`
- Defines migration scenarios (MAJOR update, cross-MAJOR, deprecated features, structural changes, API changes)
- Provides migration guide structure and template
- Documents migration guide creation process

**Key Components:**
- Migration scenarios (5 scenarios identified)
- Migration guide structure (template with sections)
- Migration tools (checker, helper script, deprecation scanner, test generator)
- Migration guide creation process (4-step process)
- Migration guide examples (versioning schema, directory structure)

---

### E6:S02:T03 – Establish backward compatibility policies

**Input:** Framework versioning strategy  
**Deliverable:** Backward compatibility policy document  
**Dependencies:** E6:S01 (Framework Version Management)  
**Blocker:** None

**Status:** ✅ COMPLETE

**Approach:**
1. Define backward compatibility requirements
2. Create compatibility policy documentation
3. Establish compatibility testing processes
4. Document compatibility policies

**Deliverables:**
- Backward compatibility policy document: `KB/Architecture/Standards_and_ADRs/framework-backward-compatibility-policy.md`
- Backward compatibility test script: `scripts/framework-management/test-backward-compatibility.sh`
- Breaking changes detection script: `scripts/framework-management/detect-breaking-changes.sh`
- Defines backward compatibility requirements (API, policy, template, configuration, file structure)
- Establishes deprecation policy and process
- Documents compatibility testing requirements
- Defines breaking changes policy
- Establishes compatibility windows and support policy

**Key Components:**
- Backward compatibility requirements (5 requirements defined)
- Deprecation policy (3-step process)
- Compatibility testing requirements (5 test types)
- Breaking changes policy (when allowed, requirements)
- Compatibility windows (MAJOR: 6 months, MINOR: 3 months, PATCH: 1 month)
- Policy enforcement mechanisms (pre-release validation, release gates, automated checks)

---

### E6:S02:T04 – Build framework update CLI tool

**Input:** Framework dependency architecture, update procedures  
**Deliverable:** `vibe-dev-kit` CLI tool for framework management  
**Dependencies:** E6:S01:T04, E6:S02:T01  
**Blocker:** None

**Approach:**
1. Design CLI tool architecture and command structure
2. Implement framework installation commands (`install`, `add`)
3. Implement framework update commands (`update`, `upgrade`)
4. Implement framework version checking (`check`, `status`)
5. Support multiple dependency backends (Git submodules, package managers)
6. Create CLI documentation and usage examples

**Key Deliverables:**
- `vibe-dev-kit` CLI tool (Python-based)
- CLI command reference documentation
- Installation and usage guides
- Example workflows

**CLI Commands:**
- `vibe-dev-kit install <framework>[@version]` - Install framework as dependency
- `vibe-dev-kit update <framework>` - Update framework to latest version
- `vibe-dev-kit check` - Check for framework updates
- `vibe-dev-kit status` - Show installed framework versions

---

### E6:S02:T05 – Create auto-update mechanisms

**Input:** Framework dependency architecture, CLI tool  
**Deliverable:** Auto-update mechanisms for Git submodules and package managers  
**Dependencies:** E6:S01:T04, E6:S02:T04  
**Blocker:** None

**Approach:**
1. Implement Git submodule update automation
2. Implement package manager update automation (npm, pip)
3. Create update scripts for each dependency type
4. Design version pinning and update policies
5. Create automated update testing workflows
6. Document auto-update procedures

**Key Deliverables:**
- Git submodule update scripts
- Package manager update integration
- Auto-update policy documentation
- Update testing workflows

---

### E6:S02:T06 – Implement Branch Context Policy automation

**Input:** Branch Context Policy (E6:S01:T06)  
**Deliverable:** Automated version file updates on branch switch  
**Dependencies:** E6:S01:T06  
**Blocker:** None

**Approach:**
1. Design branch switch hook mechanism (Git hooks or CLI tool)
2. Create script to detect highest version per epic from changelog
3. Implement version file update script
4. Create Git hook (post-checkout) to auto-update version file
5. Create CLI command: `vibe-dev-kit sync-version` for manual sync
6. Integrate into workflow management framework
7. Document usage and troubleshooting

**Key Deliverables:**
- Branch context sync script
- Git post-checkout hook implementation
- CLI command for manual version sync
- Integration into workflow management framework
- Documentation and usage guide

**Implementation Details:**
- Script reads CHANGELOG.md to find highest version per epic
- Updates `src/fynd_deals/version.py` with correct epic context **only on branch switch**
- Git post-checkout hook triggers update when switching branches
- Validates EPIC component matches branch epic number
- **Does NOT update during active work** - version reflects last commit during work
- Can be triggered automatically (Git hook on checkout) or manually (CLI)

---

## Dependencies

**Blocks:**
- None

**Blocked By:**
- E6:S01 (Framework Version Management)

**Coordinates With:**
- Epic 5 (Documentation Management)
- Epic 7 (Examples & Adoption)

---

## References

- `KB/PM_and_Portfolio/kanban/epics/Epic-6/Epic-6.md`
- `KB/PM_and_Portfolio/kanban/epics/Epic-6/Story-001-framework-version-management.md`

