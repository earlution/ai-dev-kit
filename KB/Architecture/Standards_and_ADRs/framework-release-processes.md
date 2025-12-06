---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Release Processes

**Status:** Proposed  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 1 - Framework Version Management  
**Task:** E6:S01:T02 - Create framework release processes

---

## Executive Summary

This document defines the **release processes for Vibe Dev Kit framework packages**. It establishes release workflows, criteria, gates, and procedures for publishing framework versions to consumers.

**Key Principle:** Framework releases are **consumer-facing** and follow semantic versioning, independent of dev-kit internal development versions. Releases are triggered when framework changes warrant new versions, not for every dev-kit version.

---

## Release Workflow Overview

### High-Level Process

```
Development → Release Decision → Version Update → Git Tagging → Documentation → Release Complete
```

**Phases:**
1. **Development:** Work on framework in dev-kit (using `RC.EPIC.STORY.TASK+BUILD`)
2. **Release Decision:** Determine if changes warrant new framework version
3. **Version Update:** Update framework version files and changelog
4. **Git Tagging:** Create and push framework release tag
5. **Documentation:** Update release notes and version registry
6. **Release Complete:** Framework version available for consumption

---

## Release Decision Process

### When to Release

**Release Triggers:**

1. **PATCH Release (x.y.Z → x.y.Z+1):**
   - Bug fixes in framework code or documentation
   - Documentation corrections
   - Minor template improvements
   - Clarifications to policies or guidelines

2. **MINOR Release (x.Y.0 → x.Y+1.0):**
   - New features added to framework
   - New policies or guidelines
   - New templates or examples
   - Enhanced documentation (significant additions)
   - New integration patterns

3. **MAJOR Release (X.0.0 → X+1.0.0):**
   - Breaking changes to framework structure
   - Incompatible changes to policies or APIs
   - Removal of features or templates
   - Major restructuring requiring migration
   - Changes that break backward compatibility

### When NOT to Release

**Do NOT create framework release for:**
- Dev-kit internal changes only (no framework impact)
- Changes to other frameworks (not this framework)
- Documentation updates that don't affect framework functionality
- Minor clarifications that don't change behavior
- Dev-kit version increments without framework changes

### Release Decision Criteria

**Checklist for Release Decision:**

- [ ] **Framework Changed:** Did this dev-kit version include changes to this specific framework?
- [ ] **Impact Assessment:** Do changes affect framework consumers?
- [ ] **Version Type:** What type of release (PATCH/MINOR/MAJOR)?
- [ ] **Breaking Changes:** Are there breaking changes requiring MAJOR increment?
- [ ] **New Features:** Are there new features requiring MINOR increment?
- [ ] **Bug Fixes Only:** Are changes limited to bug fixes (PATCH increment)?

**Decision Matrix:**

| Change Type | Impact | Version Increment |
|------------|--------|-------------------|
| Bug fix | Consumer-facing | PATCH |
| Documentation correction | Consumer-facing | PATCH |
| New feature | Consumer-facing | MINOR |
| New policy/guideline | Consumer-facing | MINOR |
| Breaking change | Consumer-facing | MAJOR |
| Internal dev-kit change | No framework impact | No release |
| Other framework change | No this framework impact | No release |

---

## Release Workflow Steps

### Step 1: Release Decision

**Input:** Dev-kit version with framework changes  
**Output:** Release decision (PATCH/MINOR/MAJOR/NO_RELEASE)

**Process:**
1. Review changes in dev-kit version
2. Identify framework-specific changes
3. Assess impact on framework consumers
4. Determine version increment type
5. Make release decision

**Decision Output:**
- **PATCH:** Bug fixes only
- **MINOR:** New features, backward compatible
- **MAJOR:** Breaking changes
- **NO_RELEASE:** No framework changes or internal-only changes

### Step 2: Version Calculation

**Input:** Current framework version, release decision  
**Output:** New framework version number

**Process:**
1. Read current framework version from `VERSION` file
2. Apply version increment based on release decision:
   - **PATCH:** Increment PATCH component (e.g., `2.0.0` → `2.0.1`)
   - **MINOR:** Increment MINOR, reset PATCH (e.g., `2.0.1` → `2.1.0`)
   - **MAJOR:** Increment MAJOR, reset MINOR and PATCH (e.g., `2.1.0` → `3.0.0`)
3. Calculate new version number

**Example:**
```python
# Current: 2.0.0
# Release Decision: MINOR (new features added)
# New Version: 2.1.0
```

### Step 3: Update Framework Version Files

**Input:** New framework version  
**Output:** Updated version files

**Files to Update:**
1. **Framework VERSION file:**
   - Location: `packages/frameworks/{framework-name}/VERSION`
   - Update: `FRAMEWORK_VERSION = "{new-version}"`
   - Update: `FRAMEWORK_RELEASE_DATE = "{YYYY-MM-DD}"`

2. **Framework README:**
   - Location: `packages/frameworks/{framework-name}/README.md`
   - Update: Version badge and "Last Updated" date

3. **Framework Changelog:**
   - Location: `packages/frameworks/{framework-name}/CHANGELOG.md`
   - Add: New release entry with changes

**Version File Format:**
```python
# Framework Version File
FRAMEWORK_NAME = "numbering-versioning"
FRAMEWORK_VERSION = "2.1.0"  # Updated
FRAMEWORK_SEMVER = "2.1.0"  # Updated
FRAMEWORK_RELEASE_DATE = "2025-12-06"  # Updated
FRAMEWORK_CHANGELOG = "CHANGELOG.md"
```

### Step 4: Create Git Tag

**Input:** Framework name, new version, release message  
**Output:** Git tag created and pushed

**Process:**
1. Construct tag name: `{framework-name}-v{version}`
2. Create annotated Git tag with release message
3. Push tag to remote repository
4. Verify tag creation

**Tag Creation:**
```bash
# Create annotated tag
git tag -a numbering-versioning-v2.1.0 -m "Release numbering-versioning v2.1.0

- Added new versioning policy document
- Enhanced implementation guide
- Updated framework dependency architecture support"

# Push tag to remote
git push origin numbering-versioning-v2.1.0
```

**Automated Tagging:**
```bash
# Use tagging script
./scripts/framework-management/tag-framework-release.sh \
  --framework numbering-versioning \
  --version 2.1.0 \
  --message "Release numbering-versioning v2.1.0"
```

### Step 5: Update Documentation

**Input:** Framework release information  
**Output:** Updated documentation

**Documentation Updates:**
1. **Framework Changelog:**
   - Add release entry with changes
   - Follow [Keep a Changelog](https://keepachangelog.com/) format
   - Include Added/Changed/Deprecated/Removed/Fixed sections

2. **Framework Version Registry:**
   - Location: `KB/Architecture/Standards_and_ADRs/framework-versions.md`
   - Add: New version entry with release date

3. **Migration Guides (MAJOR only):**
   - Create migration guide for breaking changes
   - Document upgrade path
   - Provide examples

**Changelog Entry Format:**
```markdown
## [2.1.0] - 2025-12-06

### Added
- New versioning policy document
- Enhanced implementation guide

### Changed
- Updated framework dependency architecture support
- Improved documentation structure

### Fixed
- Corrected versioning schema examples
```

### Step 6: Release Verification

**Input:** Framework release  
**Output:** Verification results

**Verification Checklist:**
- [ ] Framework VERSION file updated
- [ ] Framework README version updated
- [ ] Framework changelog updated
- [ ] Git tag created and pushed
- [ ] Tag name follows convention
- [ ] Version registry updated
- [ ] Migration guide created (MAJOR only)

**Verification Commands:**
```bash
# Verify tag exists
git tag -l "numbering-versioning-v*"

# Verify version file
cat packages/frameworks/numbering\ \&\ versioning/VERSION

# Verify changelog entry
grep "## \[2.1.0\]" packages/frameworks/numbering\ \&\ versioning/CHANGELOG.md
```

---

## Release Criteria and Gates

### Pre-Release Gates

**Gate 1: Framework Changes Exist**
- ✅ Framework has changes in this dev-kit version
- ✅ Changes are consumer-facing
- ❌ Block if no framework changes

**Gate 2: Version Calculation Valid**
- ✅ Version increment type determined (PATCH/MINOR/MAJOR)
- ✅ New version number calculated
- ✅ Version follows semantic versioning
- ❌ Block if version format invalid

**Gate 3: Version Files Updated**
- ✅ Framework VERSION file updated
- ✅ Framework README updated
- ✅ Framework changelog updated
- ❌ Block if files not updated

**Gate 4: Git Tag Created**
- ✅ Tag name follows convention
- ✅ Tag created successfully
- ✅ Tag pushed to remote
- ❌ Block if tag creation fails

**Gate 5: Documentation Complete**
- ✅ Framework changelog entry added
- ✅ Version registry updated
- ✅ Migration guide created (MAJOR only)
- ❌ Block if documentation incomplete

### Release Criteria

**PATCH Release Criteria:**
- Bug fixes or documentation corrections only
- No new features
- No breaking changes
- Backward compatible

**MINOR Release Criteria:**
- New features added
- Backward compatible
- No breaking changes
- Enhanced functionality

**MAJOR Release Criteria:**
- Breaking changes present
- Migration guide created
- Deprecation notices provided
- Backward incompatible

---

## Release Procedures

### Procedure: Standard Framework Release

**Prerequisites:**
- Dev-kit version with framework changes
- Release decision made
- Version increment type determined

**Steps:**
1. **Calculate New Version:**
   - Read current version from VERSION file
   - Apply version increment (PATCH/MINOR/MAJOR)
   - Calculate new version number

2. **Update Version Files:**
   - Update `packages/frameworks/{framework-name}/VERSION`
   - Update framework README version
   - Update framework changelog

3. **Create Git Tag:**
   - Construct tag name: `{framework-name}-v{version}`
   - Create annotated tag with release message
   - Push tag to remote

4. **Update Documentation:**
   - Add changelog entry
   - Update version registry
   - Create migration guide (MAJOR only)

5. **Verify Release:**
   - Verify tag exists
   - Verify version files updated
   - Verify documentation complete

**Completion:**
- Framework version available for consumption
- Tag available for version pinning
- Documentation updated

### Procedure: MAJOR Release with Migration

**Additional Steps for MAJOR Releases:**

1. **Create Migration Guide:**
   - Document breaking changes
   - Provide upgrade path
   - Include examples

2. **Deprecation Notices:**
   - Document deprecated features
   - Provide alternatives
   - Set deprecation timeline

3. **Announcement:**
   - Announce MAJOR release prominently
   - Highlight breaking changes
   - Provide migration timeline

**Migration Guide Location:**
- `packages/frameworks/{framework-name}/MIGRATION_GUIDE_v{version}.md`

**Migration Guide Format:**
```markdown
# Migration Guide: {framework-name} v{old-version} → v{new-version}

## Breaking Changes

### Change 1: [Description]
- **What changed:** [Description]
- **Why:** [Reason]
- **Migration:** [Steps]

### Change 2: [Description]
- **What changed:** [Description]
- **Why:** [Reason]
- **Migration:** [Steps]

## Upgrade Steps

1. [Step 1]
2. [Step 2]
3. [Step 3]

## Examples

### Before (v{old-version})
```python
# Old code
```

### After (v{new-version})
```python
# New code
```
```

### Procedure: Multi-Framework Release

**When Multiple Frameworks Changed:**

1. **Release Each Framework Separately:**
   - Each framework gets its own release
   - Each framework gets its own tag
   - Each framework gets its own changelog entry

2. **Version Independence:**
   - Framework versions are independent
   - One framework can be v2.1.0, another v1.0.0
   - No requirement to align versions

3. **Documentation:**
   - Each framework changelog updated separately
   - Version registry updated for each framework
   - No combined release notes

**Example:**
```
Dev-kit: 0.6.2.1+1
- numbering-versioning: v2.0.0 → v2.1.0 (MINOR)
- workflow-mgmt: v1.0.0 → v1.0.1 (PATCH)
- kanban: v1.0.0 (no changes, no release)
```

---

## Release Automation

### Automated Release Script

**Script:** `scripts/framework-management/release-framework.sh`

**Functionality:**
1. Determines if framework release needed
2. Calculates new version number
3. Updates framework version files
4. Creates Git tag
5. Updates documentation
6. Verifies release

**Usage:**
```bash
./scripts/framework-management/release-framework.sh \
  --framework numbering-versioning \
  --type minor \
  --changes "Added new versioning policy document"
```

**Script Flow:**
```bash
# 1. Check if framework has changes
# 2. Determine version increment type
# 3. Calculate new version
# 4. Update VERSION file
# 5. Update README
# 6. Update changelog
# 7. Create Git tag
# 8. Push tag
# 9. Update version registry
# 10. Verify release
```

### Integration with Dev-Kit RW

**Current State:**
- Dev-kit RW handles dev-kit versioning (`RC.EPIC.STORY.TASK+BUILD`)
- Framework releases are separate process
- Framework releases triggered manually or via script

**Future Integration:**
- RW Step 15: Framework Release Check (optional)
- Automatically detect framework changes
- Prompt for framework release decision
- Execute framework release workflow

---

## Release Frequency Guidelines

### Release Frequency Principles

1. **Release When Changes Warrant:**
   - Don't release for every dev-kit version
   - Group related changes in single release
   - Release when changes affect consumers

2. **Balance Frequency:**
   - Too frequent: Consumer confusion, maintenance overhead
   - Too infrequent: Delayed fixes, large changes
   - Optimal: Regular releases with meaningful changes

3. **Version Type Considerations:**
   - **PATCH:** Can be frequent (bug fixes)
   - **MINOR:** Moderate frequency (new features)
   - **MAJOR:** Infrequent (breaking changes)

### Recommended Release Frequency

**PATCH Releases:**
- As needed for bug fixes
- Can be frequent (weekly/monthly)
- Low impact, safe to release quickly

**MINOR Releases:**
- When new features accumulate
- Moderate frequency (monthly/quarterly)
- Group related features together

**MAJOR Releases:**
- When breaking changes accumulate
- Infrequent (quarterly/yearly)
- Requires careful planning and migration guides

---

## Release Communication

### Release Announcements

**PATCH Releases:**
- Update changelog
- No announcement required
- Consumers can check changelog

**MINOR Releases:**
- Update changelog
- Optional announcement for significant features
- Highlight new features

**MAJOR Releases:**
- Update changelog
- **Mandatory announcement**
- Highlight breaking changes
- Provide migration timeline
- Announce prominently

### Communication Channels

1. **Framework Changelog:**
   - Primary source of release information
   - Always updated for every release

2. **Version Registry:**
   - Tracks all framework versions
   - Shows release dates

3. **Migration Guides:**
   - Created for MAJOR releases
   - Detailed upgrade instructions

4. **Release Announcements (MAJOR only):**
   - Project documentation
   - Framework README
   - Migration guide

---

## Release Best Practices

### Version Management

1. **Follow Semantic Versioning:**
   - Use MAJOR.MINOR.PATCH format
   - Increment appropriately
   - Never skip versions

2. **Tag Immediately:**
   - Create tag right after version update
   - Don't delay tagging
   - Tag and push together

3. **Immutable Tags:**
   - Never change or delete tags
   - If tag created incorrectly, create new tag
   - Document tag corrections

### Documentation

1. **Update Changelog:**
   - Always update changelog for releases
   - Follow Keep a Changelog format
   - Include all changes

2. **Version Registry:**
   - Keep version registry up to date
   - Include release dates
   - Link to changelogs

3. **Migration Guides:**
   - Create for MAJOR releases
   - Provide clear upgrade path
   - Include examples

### Release Quality

1. **Verify Before Release:**
   - Check version files updated
   - Verify tag name correct
   - Confirm documentation complete

2. **Test Framework:**
   - Test framework changes
   - Verify backward compatibility (MINOR/PATCH)
   - Test migration path (MAJOR)

3. **Review Changes:**
   - Review changelog entries
   - Verify version increment correct
   - Confirm release decision appropriate

---

## Release Troubleshooting

### Common Issues

**Issue 1: Tag Already Exists**
- **Cause:** Tag created previously
- **Solution:** Check if version already released, skip if duplicate

**Issue 2: Version File Not Updated**
- **Cause:** Manual update missed
- **Solution:** Update VERSION file before creating tag

**Issue 3: Changelog Not Updated**
- **Cause:** Documentation step skipped
- **Solution:** Add changelog entry before considering release complete

**Issue 4: Wrong Version Increment**
- **Cause:** Incorrect release decision
- **Solution:** Review changes, determine correct increment type

### Recovery Procedures

**Incorrect Tag Created:**
1. Don't delete tag (immutable)
2. Create new tag with correct version
3. Document correction in changelog
4. Update version registry

**Version File Mismatch:**
1. Update VERSION file to match tag
2. Update README version
3. Verify consistency

**Missing Documentation:**
1. Add changelog entry retroactively
2. Update version registry
3. Create migration guide if MAJOR

---

## References

- [Framework Versioning Strategy](./framework-versioning-strategy.md)
- [Framework Tagging Strategy](./framework-tagging-strategy.md)
- [Framework Dependency Architecture](./framework-dependency-architecture.md)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

---

## Appendix: Release Checklist

### Pre-Release Checklist

- [ ] Framework has changes in dev-kit version
- [ ] Changes are consumer-facing
- [ ] Release decision made (PATCH/MINOR/MAJOR)
- [ ] Version increment type determined
- [ ] New version number calculated

### Release Execution Checklist

- [ ] Framework VERSION file updated
- [ ] Framework README version updated
- [ ] Framework changelog updated
- [ ] Git tag created
- [ ] Git tag pushed to remote
- [ ] Version registry updated
- [ ] Migration guide created (MAJOR only)

### Post-Release Checklist

- [ ] Tag verified in remote repository
- [ ] Version files verified
- [ ] Documentation verified
- [ ] Release announcement (MAJOR only)
- [ ] Release complete

---

**Status:** This process is proposed and will be refined based on implementation experience.

