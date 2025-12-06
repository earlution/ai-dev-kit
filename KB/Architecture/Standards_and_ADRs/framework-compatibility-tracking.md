---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T16:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Compatibility Tracking

**Status:** Proposed  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 1 - Framework Version Management  
**Task:** E6:S01:T03 - Establish framework compatibility tracking

---

## Executive Summary

This document defines the **compatibility tracking system for Vibe Dev Kit framework packages**. It establishes mechanisms for tracking version compatibility, breaking changes, migration paths, and compatibility policies across framework releases.

**Key Principle:** Framework compatibility is tracked systematically to enable safe updates, migration planning, and dependency management decisions.

---

## Compatibility Requirements

### Semantic Versioning Compatibility Rules

**MAJOR Versions (X.0.0):**
- **Breaking Changes:** Incompatible API changes, structural changes, feature removals
- **Compatibility:** ❌ Not backward compatible
- **Migration Required:** Yes (migration guide mandatory)
- **Update Risk:** High (requires manual intervention)

**MINOR Versions (x.Y.0):**
- **New Features:** Backward compatible additions
- **Compatibility:** ✅ Backward compatible
- **Migration Required:** No (automatic update safe)
- **Update Risk:** Low (safe to update automatically)

**PATCH Versions (x.y.Z):**
- **Bug Fixes:** Backward compatible fixes only
- **Compatibility:** ✅ Backward compatible
- **Migration Required:** No (automatic update safe)
- **Update Risk:** Very Low (safe to update automatically)

### Compatibility Guarantees

**Within Same MAJOR Version:**
- All MINOR and PATCH versions are backward compatible
- Safe to update from any version to any higher version
- Example: `1.0.0` → `1.5.3` is safe

**Across MAJOR Versions:**
- Breaking changes require MAJOR increment
- Migration guide required for MAJOR updates
- Example: `1.5.3` → `2.0.0` requires migration

---

## Compatibility Tracking Mechanisms

### Framework Compatibility Registry

**Location:** `KB/Architecture/Standards_and_ADRs/framework-compatibility-registry.md`

**Purpose:** Central registry tracking compatibility across all framework versions

**Format:**
```markdown
# Framework Compatibility Registry

## numbering-versioning

### Version History
- v2.0.0 (2025-12-06) - Initial release
- v2.1.0 (2025-12-10) - Added new features (MINOR)
- v2.1.1 (2025-12-12) - Bug fixes (PATCH)
- v3.0.0 (2025-12-20) - Breaking changes (MAJOR)

### Compatibility Matrix
| From Version | To Version | Compatibility | Migration Required |
|-------------|-----------|---------------|-------------------|
| 2.0.0       | 2.1.0     | ✅ Compatible | No                |
| 2.0.0       | 2.1.1     | ✅ Compatible | No                |
| 2.0.0       | 3.0.0     | ❌ Breaking   | Yes               |
| 2.1.0       | 2.1.1     | ✅ Compatible | No                |
| 2.1.1       | 3.0.0     | ❌ Breaking   | Yes               |

### Breaking Changes
- v3.0.0: Removed deprecated API methods
- v3.0.0: Changed versioning schema format
- v3.0.0: Restructured framework directory layout
```

### Framework Version File

**Location:** `packages/frameworks/{framework-name}/VERSION`

**Compatibility Fields:**
```python
# Framework Version File
FRAMEWORK_NAME = "numbering-versioning"
FRAMEWORK_VERSION = "2.1.0"
FRAMEWORK_SEMVER = "2.1.0"
FRAMEWORK_RELEASE_DATE = "2025-12-10"
FRAMEWORK_CHANGELOG = "CHANGELOG.md"

# Compatibility Information
FRAMEWORK_MAJOR_VERSION = 2
FRAMEWORK_MINOR_VERSION = 1
FRAMEWORK_PATCH_VERSION = 0
FRAMEWORK_BACKWARD_COMPATIBLE = True  # MINOR versions are backward compatible
FRAMEWORK_BREAKING_CHANGES = False    # No breaking changes in MINOR
FRAMEWORK_MIGRATION_REQUIRED = False  # No migration needed
FRAMEWORK_DEPRECATED_FEATURES = []    # List of deprecated features
```

### Framework Changelog

**Location:** `packages/frameworks/{framework-name}/CHANGELOG.md`

**Compatibility Sections:**
```markdown
## [2.1.0] - 2025-12-10

### Added
- New versioning policy document
- Enhanced implementation guide

### Changed
- Updated framework dependency architecture support

### Deprecated
- `old_api_method()` - Will be removed in v3.0.0, use `new_api_method()` instead

### Compatibility
- ✅ Backward compatible with v2.0.0
- ✅ Safe to update from v2.0.x
- ❌ Not compatible with v1.x (MAJOR version difference)

### Migration
- No migration required for v2.0.x → v2.1.0
- Migration guide available for v1.x → v2.1.0
```

### Breaking Changes Registry

**Location:** `KB/Architecture/Standards_and_ADRs/framework-breaking-changes.md`

**Purpose:** Central registry of all breaking changes across framework versions

**Format:**
```markdown
# Framework Breaking Changes Registry

## numbering-versioning

### v3.0.0 (2025-12-20) - Breaking Changes

**Migration Required:** Yes  
**Migration Guide:** `packages/frameworks/numbering-versioning/MIGRATION_GUIDE_v3.0.0.md`

#### Breaking Changes

1. **Removed API Methods:**
   - `old_versioning_method()` - Removed, use `new_versioning_method()` instead
   - `deprecated_policy()` - Removed, use `new_policy()` instead

2. **Changed Versioning Schema:**
   - Old format: `RC.EPIC.STORY.PATCH`
   - New format: `RC.EPIC.STORY.TASK+BUILD`
   - Migration: Update all version files to new format

3. **Restructured Directory Layout:**
   - Old: `policies/versioning-policy.md`
   - New: `KB/Architecture/Standards_and_ADRs/versioning-policy.md`
   - Migration: Update file paths in projects

#### Deprecation Timeline
- v2.0.0 (2025-12-06): Features marked as deprecated
- v2.1.0 (2025-12-10): Deprecation warnings added
- v3.0.0 (2025-12-20): Features removed
```

---

## Compatibility Documentation

### Compatibility Policies

**Backward Compatibility Policy:**
- MINOR and PATCH versions MUST be backward compatible
- Breaking changes REQUIRE MAJOR version increment
- Deprecated features MUST have deprecation notices
- Migration guides REQUIRED for MAJOR releases

**Forward Compatibility Policy:**
- Frameworks do not guarantee forward compatibility
- New MAJOR versions may break compatibility with older versions
- Projects should pin to specific versions if stability is critical

**Compatibility Windows:**
- Support for previous MAJOR version: 6 months after new MAJOR release
- Support for previous MINOR version: 3 months after new MINOR release
- Support for previous PATCH version: 1 month after new PATCH release

### Compatibility Testing

**Test Requirements:**
- All MINOR and PATCH releases must pass backward compatibility tests
- MAJOR releases must have migration tests
- Breaking changes must be documented and tested

**Test Coverage:**
- API compatibility tests
- Policy compatibility tests
- Template compatibility tests
- Integration compatibility tests

---

## Compatibility Tracking Tools

### Compatibility Check Script

**Script:** `scripts/framework-management/check-framework-compatibility.sh`

**Functionality:**
1. Check compatibility between two framework versions
2. Identify breaking changes
3. Determine migration requirements
4. Generate compatibility report

**Usage:**
```bash
# Check compatibility between versions
./scripts/framework-management/check-framework-compatibility.sh \
  --framework numbering-versioning \
  --from 2.0.0 \
  --to 2.1.0

# Output:
# ✅ Compatible: numbering-versioning v2.0.0 → v2.1.0
# Migration Required: No
# Breaking Changes: None
```

### Compatibility Matrix Generator

**Script:** `scripts/framework-management/generate-compatibility-matrix.sh`

**Functionality:**
1. Generate compatibility matrix for a framework
2. Update compatibility registry
3. Identify compatibility gaps
4. Generate compatibility documentation

**Usage:**
```bash
# Generate compatibility matrix
./scripts/framework-management/generate-compatibility-matrix.sh \
  --framework numbering-versioning

# Output: Updates framework-compatibility-registry.md
```

### Breaking Changes Tracker

**Script:** `scripts/framework-management/track-breaking-changes.sh`

**Functionality:**
1. Track breaking changes in framework releases
2. Update breaking changes registry
3. Generate migration guides
4. Notify consumers of breaking changes

**Usage:**
```bash
# Track breaking changes
./scripts/framework-management/track-breaking-changes.sh \
  --framework numbering-versioning \
  --version 3.0.0 \
  --changes "Removed deprecated API methods"

# Output: Updates framework-breaking-changes.md
```

---

## Compatibility Policies

### Version Compatibility Rules

**Rule 1: Same MAJOR Version**
- All versions with same MAJOR number are compatible
- Safe to update within same MAJOR version
- Example: `2.0.0` ↔ `2.5.3` are compatible

**Rule 2: Different MAJOR Versions**
- Different MAJOR versions are NOT compatible
- Migration required for MAJOR version updates
- Example: `1.5.3` ↔ `2.0.0` are NOT compatible

**Rule 3: PATCH Versions**
- PATCH versions are always backward compatible
- Safe to update PATCH versions automatically
- Example: `2.1.0` → `2.1.5` is safe

**Rule 4: MINOR Versions**
- MINOR versions are backward compatible
- Safe to update MINOR versions automatically
- Example: `2.0.0` → `2.5.0` is safe

### Deprecation Policy

**Deprecation Process:**
1. **Announcement:** Feature marked as deprecated in MINOR release
2. **Warning Period:** Deprecation warnings added (at least 1 MINOR version)
3. **Removal:** Feature removed in next MAJOR release
4. **Migration:** Migration guide provided before removal

**Deprecation Timeline:**
- v2.0.0: Feature marked as deprecated
- v2.1.0: Deprecation warnings added
- v3.0.0: Feature removed (migration guide available)

### Migration Policy

**Migration Requirements:**
- MAJOR releases MUST include migration guide
- Migration guides MUST be published before MAJOR release
- Migration guides MUST include step-by-step instructions
- Migration guides MUST include examples

**Migration Guide Format:**
- Breaking changes summary
- Step-by-step migration instructions
- Before/after code examples
- Common migration issues and solutions

---

## Compatibility Documentation

### Framework README Compatibility Section

**Location:** `packages/frameworks/{framework-name}/README.md`

**Compatibility Section:**
```markdown
## Compatibility

**Current Version:** 2.1.0  
**Backward Compatible:** Yes (with v2.0.x)  
**Breaking Changes:** None  
**Migration Required:** No

### Version Compatibility

| Version | Compatibility | Migration Required |
|---------|---------------|-------------------|
| 2.0.x   | ✅ Compatible | No                |
| 1.x     | ❌ Breaking   | Yes               |

### Updating

**From v2.0.x:**
- ✅ Safe to update automatically
- No migration required
- See [CHANGELOG.md](./CHANGELOG.md) for changes

**From v1.x:**
- ❌ Migration required
- See [MIGRATION_GUIDE_v2.0.0.md](./MIGRATION_GUIDE_v2.0.0.md)
```

### Compatibility Matrix Documentation

**Location:** `packages/frameworks/{framework-name}/COMPATIBILITY.md`

**Purpose:** Detailed compatibility matrix for framework

**Format:**
```markdown
# Framework Compatibility Matrix

## numbering-versioning

### Compatibility Matrix

| From Version | To Version | Compatibility | Migration Required | Notes |
|-------------|-----------|---------------|-------------------|-------|
| 1.0.0       | 1.0.1     | ✅ Compatible | No                | PATCH update |
| 1.0.0       | 1.1.0     | ✅ Compatible | No                | MINOR update |
| 1.0.0       | 2.0.0     | ❌ Breaking   | Yes               | MAJOR update |
| 2.0.0       | 2.1.0     | ✅ Compatible | No                | MINOR update |
| 2.0.0       | 2.1.1     | ✅ Compatible | No                | PATCH update |
| 2.1.0       | 3.0.0     | ❌ Breaking   | Yes               | MAJOR update |

### Breaking Changes

#### v2.0.0 (2025-12-06)
- Changed versioning schema format
- Removed deprecated API methods
- Migration guide: [MIGRATION_GUIDE_v2.0.0.md](./MIGRATION_GUIDE_v2.0.0.md)

#### v3.0.0 (2025-12-20)
- Restructured directory layout
- Removed deprecated features
- Migration guide: [MIGRATION_GUIDE_v3.0.0.md](./MIGRATION_GUIDE_v3.0.0.md)
```

---

## Compatibility Tracking Workflow

### Release Compatibility Check

**Process:**
1. **Pre-Release Check:**
   - Determine version increment type (PATCH/MINOR/MAJOR)
   - Check for breaking changes
   - Verify backward compatibility (MINOR/PATCH)

2. **Compatibility Documentation:**
   - Update compatibility matrix
   - Document breaking changes (MAJOR)
   - Create migration guide (MAJOR)

3. **Post-Release Update:**
   - Update compatibility registry
   - Update breaking changes registry
   - Update framework compatibility documentation

### Compatibility Tracking Checklist

**For Each Release:**
- [ ] Determine compatibility status (backward compatible / breaking)
- [ ] Update compatibility matrix
- [ ] Document breaking changes (if MAJOR)
- [ ] Create migration guide (if MAJOR)
- [ ] Update compatibility registry
- [ ] Update framework README compatibility section
- [ ] Update framework changelog compatibility section

---

## Compatibility Best Practices

### Version Management

1. **Follow Semantic Versioning:**
   - Use MAJOR.MINOR.PATCH format
   - Increment appropriately
   - Never skip versions

2. **Maintain Backward Compatibility:**
   - MINOR and PATCH versions must be backward compatible
   - Breaking changes require MAJOR increment
   - Document all breaking changes

3. **Deprecation Process:**
   - Announce deprecations in MINOR releases
   - Provide migration path before removal
   - Remove in next MAJOR release

### Documentation

1. **Compatibility Documentation:**
   - Always document compatibility status
   - Maintain compatibility matrices
   - Keep breaking changes registry updated

2. **Migration Guides:**
   - Create for all MAJOR releases
   - Include step-by-step instructions
   - Provide before/after examples

3. **Changelog Entries:**
   - Include compatibility information
   - Document breaking changes
   - Link to migration guides

### Testing

1. **Compatibility Testing:**
   - Test backward compatibility (MINOR/PATCH)
   - Test migration paths (MAJOR)
   - Verify breaking changes are documented

2. **Integration Testing:**
   - Test framework compatibility with projects
   - Verify migration guides work
   - Test automatic update mechanisms

---

## Compatibility Tracking Automation

### Automated Compatibility Checks

**CI/CD Integration:**
- Run compatibility checks on every release
- Verify backward compatibility (MINOR/PATCH)
- Validate breaking changes documentation (MAJOR)

**Automated Updates:**
- Update compatibility registry automatically
- Generate compatibility matrices
- Track breaking changes

### Compatibility Monitoring

**Version Tracking:**
- Monitor framework version usage
- Track compatibility issues
- Identify migration needs

**Breaking Changes Alerts:**
- Notify consumers of breaking changes
- Provide migration timeline
- Offer migration support

---

## References

- [Framework Versioning Strategy](./framework-versioning-strategy.md)
- [Framework Release Processes](./framework-release-processes.md)
- [Framework Tagging Strategy](./framework-tagging-strategy.md)
- [Semantic Versioning](https://semver.org/)
- [Framework Dependency Architecture](./framework-dependency-architecture.md)

---

## Appendix: Compatibility Tracking Checklist

### Pre-Release Compatibility Check

- [ ] Determine version increment type (PATCH/MINOR/MAJOR)
- [ ] Check for breaking changes
- [ ] Verify backward compatibility (MINOR/PATCH)
- [ ] Document breaking changes (MAJOR)
- [ ] Create migration guide (MAJOR)

### Post-Release Compatibility Update

- [ ] Update compatibility matrix
- [ ] Update compatibility registry
- [ ] Update breaking changes registry
- [ ] Update framework README compatibility section
- [ ] Update framework changelog compatibility section
- [ ] Update framework COMPATIBILITY.md (if exists)

### Compatibility Documentation

- [ ] Compatibility status documented
- [ ] Compatibility matrix updated
- [ ] Breaking changes documented
- [ ] Migration guide created (MAJOR)
- [ ] Deprecation notices added

---

**Status:** This compatibility tracking system is proposed and will be refined based on implementation experience.

