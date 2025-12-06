---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T17:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Backward Compatibility Policy

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 2 - Framework Update and Migration  
**Task:** E6:S02:T03 - Establish backward compatibility policies

---

## Executive Summary

This document defines the **backward compatibility policy for Vibe Dev Kit framework packages**. It establishes requirements, testing processes, and guidelines to ensure framework updates maintain compatibility with existing consuming projects.

**Key Principle:** Framework updates within the same MAJOR version MUST be backward compatible. Breaking changes REQUIRE a MAJOR version increment and migration guides.

---

## Policy Overview

### Core Policy Statement

**All MINOR and PATCH version releases MUST be backward compatible with previous versions within the same MAJOR version.**

This means:
- ✅ Code written for `v2.0.0` MUST work with `v2.5.3` without modification
- ✅ Projects using `v2.1.0` can safely update to `v2.1.5` automatically
- ❌ Breaking changes REQUIRE a MAJOR version increment (e.g., `v2.5.3` → `v3.0.0`)
- ❌ Breaking changes MUST include migration guides

### Policy Scope

**Applies To:**
- All framework packages in `packages/frameworks/`
- All MINOR version releases (x.Y.0)
- All PATCH version releases (x.y.Z)
- All framework APIs, policies, templates, and tools

**Does NOT Apply To:**
- MAJOR version releases (X.0.0) - Breaking changes allowed
- Pre-release versions (0.x.x) - Compatibility not guaranteed
- Internal dev-kit development (RC.EPIC.STORY.TASK+BUILD) - Not subject to SemVer

---

## Backward Compatibility Requirements

### Requirement 1: API Compatibility

**Rule:** All public APIs MUST remain compatible within the same MAJOR version.

**What This Means:**
- ✅ **Allowed:** Adding new API methods, functions, or classes
- ✅ **Allowed:** Adding optional parameters to existing methods
- ✅ **Allowed:** Extending return types (e.g., returning additional fields)
- ❌ **Not Allowed:** Removing or renaming public API methods
- ❌ **Not Allowed:** Changing method signatures (required parameters)
- ❌ **Not Allowed:** Changing return types in incompatible ways
- ❌ **Not Allowed:** Changing behavior of existing methods in breaking ways

**Examples:**

✅ **Compatible Change (MINOR):**
```python
# v2.0.0
def get_version():
    return "2.0.0"

# v2.1.0 - Adding new method (compatible)
def get_version():
    return "2.0.0"

def get_version_info():  # New method added
    return {"version": "2.0.0", "build": "123"}
```

❌ **Breaking Change (Requires MAJOR):**
```python
# v2.0.0
def get_version():
    return "2.0.0"

# v3.0.0 - Changing return type (breaking)
def get_version():
    return {"version": "3.0.0", "build": "456"}  # Breaking change
```

### Requirement 2: Policy Compatibility

**Rule:** Framework policies MUST remain compatible within the same MAJOR version.

**What This Means:**
- ✅ **Allowed:** Adding new optional policy fields
- ✅ **Allowed:** Clarifying existing policy language
- ✅ **Allowed:** Adding new policy sections
- ❌ **Not Allowed:** Changing required policy fields
- ❌ **Not Allowed:** Removing policy requirements
- ❌ **Not Allowed:** Changing policy behavior in breaking ways

**Examples:**

✅ **Compatible Change (MINOR):**
```markdown
# v2.0.0 Policy
- Version format: RC.EPIC.STORY.TASK+BUILD
- Required fields: RC, EPIC, STORY, TASK, BUILD

# v2.1.0 Policy - Adding optional field (compatible)
- Version format: RC.EPIC.STORY.TASK+BUILD
- Required fields: RC, EPIC, STORY, TASK, BUILD
- Optional field: METADATA (new, optional)
```

❌ **Breaking Change (Requires MAJOR):**
```markdown
# v2.0.0 Policy
- Version format: RC.EPIC.STORY.TASK+BUILD

# v3.0.0 Policy - Changing required format (breaking)
- Version format: MAJOR.MINOR.PATCH  # Breaking change
```

### Requirement 3: Template Compatibility

**Rule:** Framework templates MUST remain compatible within the same MAJOR version.

**What This Means:**
- ✅ **Allowed:** Adding new optional template sections
- ✅ **Allowed:** Adding new template variables
- ✅ **Allowed:** Improving template documentation
- ❌ **Not Allowed:** Removing required template sections
- ❌ **Not Allowed:** Changing required template variables
- ❌ **Not Allowed:** Changing template structure in breaking ways

**Examples:**

✅ **Compatible Change (MINOR):**
```markdown
# v2.0.0 Template
## {{TITLE}}
{{CONTENT}}

# v2.1.0 Template - Adding optional section (compatible)
## {{TITLE}}
{{CONTENT}}
{{#OPTIONAL_SECTION}}  # New optional section
{{OPTIONAL_CONTENT}}
{{/OPTIONAL_SECTION}}
```

❌ **Breaking Change (Requires MAJOR):**
```markdown
# v2.0.0 Template
## {{TITLE}}
{{CONTENT}}

# v3.0.0 Template - Removing required section (breaking)
{{CONTENT}}  # TITLE section removed (breaking)
```

### Requirement 4: Configuration Compatibility

**Rule:** Framework configuration files MUST remain compatible within the same MAJOR version.

**What This Means:**
- ✅ **Allowed:** Adding new optional configuration options
- ✅ **Allowed:** Providing default values for new options
- ✅ **Allowed:** Extending configuration schemas
- ❌ **Not Allowed:** Removing configuration options
- ❌ **Not Allowed:** Changing required configuration options
- ❌ **Not Allowed:** Changing configuration behavior in breaking ways

### Requirement 5: File Structure Compatibility

**Rule:** Framework file structures MUST remain compatible within the same MAJOR version.

**What This Means:**
- ✅ **Allowed:** Adding new files and directories
- ✅ **Allowed:** Adding new optional subdirectories
- ❌ **Not Allowed:** Moving or renaming required files
- ❌ **Not Allowed:** Removing required files
- ❌ **Not Allowed:** Restructuring directories in breaking ways

**Exception:** Structural changes are allowed in MAJOR versions with migration guides.

---

## Deprecation Policy

### Deprecation Process

**When to Deprecate:**
- Features that will be removed in a future MAJOR release
- Features that have better alternatives
- Features that are no longer recommended

**Deprecation Timeline:**
1. **Announcement (MINOR release):** Feature marked as deprecated
   - Add `@deprecated` annotation or `DEPRECATED` notice
   - Document deprecation reason and timeline
   - Provide migration path to alternative

2. **Warning Period (at least 1 MINOR version):** Deprecation warnings added
   - Add runtime warnings (if applicable)
   - Update documentation with deprecation notices
   - Provide migration examples

3. **Removal (next MAJOR release):** Feature removed
   - Feature removed in MAJOR version increment
   - Migration guide provided
   - Breaking change documented

**Example Deprecation Timeline:**
- `v2.0.0` (2025-12-06): Feature marked as deprecated
- `v2.1.0` (2025-12-10): Deprecation warnings added
- `v2.2.0` (2025-12-15): Deprecation warnings continue
- `v3.0.0` (2026-01-01): Feature removed (migration guide available)

### Deprecation Documentation

**Required Documentation:**
- Deprecation notice in framework changelog
- Deprecation notice in API documentation
- Migration path to alternative feature
- Timeline for removal

**Example:**
```markdown
### Deprecated

- `old_api_method()` - **Deprecated in v2.1.0**, will be removed in v3.0.0
  - **Reason:** Replaced by `new_api_method()` with improved functionality
  - **Migration:** Use `new_api_method()` instead
  - **Timeline:** Will be removed in v3.0.0 (expected 2026-01-01)
```

---

## Compatibility Testing Requirements

### Test Requirements

**All MINOR and PATCH releases MUST pass backward compatibility tests before release.**

**Test Coverage:**
1. **API Compatibility Tests:**
   - All public APIs must work with existing code
   - All method signatures must remain compatible
   - All return types must remain compatible

2. **Policy Compatibility Tests:**
   - All policy requirements must remain compatible
   - All policy behaviors must remain compatible
   - All policy validations must remain compatible

3. **Template Compatibility Tests:**
   - All template structures must remain compatible
   - All template variables must remain compatible
   - All template outputs must remain compatible

4. **Configuration Compatibility Tests:**
   - All configuration options must remain compatible
   - All configuration behaviors must remain compatible
   - All configuration validations must remain compatible

5. **Integration Compatibility Tests:**
   - Framework must work with existing consuming projects
   - Framework must work with existing tooling
   - Framework must work with existing workflows

### Testing Process

**Pre-Release Testing:**
1. Run backward compatibility test suite
2. Test with sample consuming projects
3. Verify all APIs, policies, templates, and configurations
4. Document any compatibility issues
5. Fix compatibility issues before release

**Test Execution:**
```bash
# Run backward compatibility tests
./scripts/framework-management/test-backward-compatibility.sh \
  --framework numbering-versioning \
  --from 2.0.0 \
  --to 2.1.0

# Expected output:
# ✅ Backward compatibility tests passed
# ✅ All APIs compatible
# ✅ All policies compatible
# ✅ All templates compatible
```

### Compatibility Test Scripts

**Script:** `scripts/framework-management/test-backward-compatibility.sh`

**Functionality:**
1. Compare framework versions
2. Identify compatibility issues
3. Test API compatibility
4. Test policy compatibility
5. Test template compatibility
6. Generate compatibility report

**Usage:**
```bash
# Test backward compatibility
./scripts/framework-management/test-backward-compatibility.sh \
  --framework numbering-versioning \
  --from 2.0.0 \
  --to 2.1.0

# Output:
# ✅ Backward compatibility tests passed
# ✅ API compatibility: 100% compatible
# ✅ Policy compatibility: 100% compatible
# ✅ Template compatibility: 100% compatible
# ✅ Configuration compatibility: 100% compatible
```

---

## Breaking Changes Policy

### When Breaking Changes Are Allowed

**Breaking changes are ONLY allowed in MAJOR version releases.**

**Breaking Changes Include:**
- Removing or renaming public APIs
- Changing method signatures (required parameters)
- Changing return types in incompatible ways
- Removing or changing required policy fields
- Removing or changing required template sections
- Removing or changing required configuration options
- Restructuring directories in breaking ways

### Breaking Changes Requirements

**All MAJOR releases with breaking changes MUST include:**
1. **Migration Guide:** Comprehensive migration guide (see `framework-migration-guides-and-tools.md`)
2. **Breaking Changes Documentation:** Detailed list of all breaking changes
3. **Deprecation Timeline:** Timeline showing when features were deprecated
4. **Migration Examples:** Code examples showing before/after migration
5. **Compatibility Matrix:** Compatibility matrix showing migration paths

### Breaking Changes Documentation

**Required Documentation:**
- Breaking changes list in framework changelog
- Breaking changes registry entry (see `framework-breaking-changes.md`)
- Migration guide (see `MIGRATION_GUIDE_TEMPLATE.md`)
- Compatibility matrix update

---

## Compatibility Windows

### Support Windows

**MAJOR Version Support:**
- Previous MAJOR version supported for **6 months** after new MAJOR release
- Security updates provided during support window
- Migration assistance provided during support window

**MINOR Version Support:**
- Previous MINOR version supported for **3 months** after new MINOR release
- Bug fixes provided during support window
- Compatibility maintained during support window

**PATCH Version Support:**
- Previous PATCH version supported for **1 month** after new PATCH release
- Critical bug fixes provided during support window

### Support Policy

**During Support Window:**
- Security updates provided
- Critical bug fixes provided
- Migration assistance provided
- Documentation maintained

**After Support Window:**
- No updates provided
- No bug fixes provided
- Migration to newer version recommended
- Documentation archived

---

## Policy Enforcement

### Enforcement Mechanisms

**1. Pre-Release Validation:**
- Backward compatibility tests must pass
- Compatibility check scripts must pass
- Breaking changes must be documented

**2. Release Process Gates:**
- Release blocked if backward compatibility tests fail
- Release blocked if breaking changes not documented
- Release blocked if migration guide missing (for MAJOR releases)

**3. Automated Checks:**
- CI/CD pipeline includes backward compatibility tests
- Automated compatibility checks on PRs
- Automated breaking change detection

### Enforcement Tools

**Compatibility Check Script:**
```bash
# Check backward compatibility
./scripts/framework-management/check-framework-compatibility.sh \
  --framework numbering-versioning \
  --from 2.0.0 \
  --to 2.1.0

# Output:
# ✅ Backward compatible: numbering-versioning v2.0.0 → v2.1.0
# ✅ No breaking changes detected
# ✅ Safe to release as MINOR version
```

**Breaking Change Detection:**
```bash
# Detect breaking changes
./scripts/framework-management/detect-breaking-changes.sh \
  --framework numbering-versioning \
  --from 2.0.0 \
  --to 3.0.0

# Output:
# ❌ Breaking changes detected:
#   - Removed API: old_api_method()
#   - Changed signature: get_version()
#   - Removed policy field: OLD_FIELD
# ⚠️  Requires MAJOR version increment
# ⚠️  Migration guide required
```

---

## Policy Exceptions

### Exception 1: Security Fixes

**Exception:** Security fixes may break compatibility if necessary for security.

**Requirements:**
- Security fix must be documented
- Migration guide provided if breaking
- Security advisory published
- MAJOR version increment if breaking

### Exception 2: Critical Bug Fixes

**Exception:** Critical bug fixes may break compatibility if bug is severe.

**Requirements:**
- Bug severity must be documented
- Migration guide provided if breaking
- MAJOR version increment if breaking
- Alternative workaround provided if possible

### Exception 3: Pre-Release Versions

**Exception:** Pre-release versions (0.x.x) are not subject to backward compatibility.

**Requirements:**
- Version must be clearly marked as pre-release
- Compatibility not guaranteed
- Breaking changes allowed

---

## Policy Review and Updates

### Policy Review Process

**Annual Review:**
- Policy reviewed annually
- Policy updated based on framework evolution
- Policy updated based on community feedback

### Policy Versioning

**Policy Versioning:**
- Policy follows Semantic Versioning
- MAJOR changes: Policy structure changes
- MINOR changes: Policy clarifications
- PATCH changes: Policy corrections

**Current Policy Version:** 1.0.0

---

## Related Documents

- **Framework Compatibility Tracking:** `framework-compatibility-tracking.md`
- **Framework Versioning Strategy:** `framework-versioning-strategy.md`
- **Framework Migration Guides:** `framework-migration-guides-and-tools.md`
- **Framework Breaking Changes:** `framework-breaking-changes.md`
- **Framework Release Processes:** `framework-release-processes.md`

---

## Policy Compliance

### Framework Developer Responsibilities

**Framework developers MUST:**
- ✅ Ensure all MINOR and PATCH releases are backward compatible
- ✅ Run backward compatibility tests before release
- ✅ Document all breaking changes in MAJOR releases
- ✅ Provide migration guides for MAJOR releases
- ✅ Follow deprecation process for features to be removed
- ✅ Update compatibility documentation

### Framework Consumer Rights

**Framework consumers CAN:**
- ✅ Expect backward compatibility within same MAJOR version
- ✅ Safely update MINOR and PATCH versions automatically
- ✅ Request migration guides for MAJOR updates
- ✅ Report compatibility issues
- ✅ Request deprecation timelines

---

## Policy Summary

**Core Principle:** All MINOR and PATCH version releases MUST be backward compatible.

**Key Requirements:**
- ✅ API compatibility within same MAJOR version
- ✅ Policy compatibility within same MAJOR version
- ✅ Template compatibility within same MAJOR version
- ✅ Configuration compatibility within same MAJOR version
- ✅ File structure compatibility within same MAJOR version

**Breaking Changes:**
- ❌ Breaking changes ONLY allowed in MAJOR versions
- ❌ Breaking changes REQUIRE migration guides
- ❌ Breaking changes REQUIRE documentation

**Testing:**
- ✅ Backward compatibility tests required before release
- ✅ Compatibility checks required before release
- ✅ Breaking change detection required before release

**Support:**
- MAJOR versions: 6 months support window
- MINOR versions: 3 months support window
- PATCH versions: 1 month support window

---

**Policy Status:** Active  
**Policy Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Next Review:** 2026-12-06

