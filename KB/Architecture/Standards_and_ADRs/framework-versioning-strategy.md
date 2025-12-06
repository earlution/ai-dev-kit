---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Versioning Strategy

**Status:** Proposed  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 1 - Framework Version Management  
**Task:** E6:S01:T01 - Define framework versioning strategy

---

## Executive Summary

This document defines the **versioning strategy for Vibe Dev Kit framework packages**. Frameworks use **Semantic Versioning (SemVer)** for releases, independent of the dev-kit's internal versioning scheme (`RC.EPIC.STORY.TASK+BUILD`).

**Key Principle:** Framework versions are **consumer-facing** and follow industry-standard semantic versioning, while dev-kit versions are **internal development** versions for tracking work.

---

## Versioning Schema

### Framework Version Format

Frameworks use **Semantic Versioning (SemVer)**: `MAJOR.MINOR.PATCH`

**Format:** `{MAJOR}.{MINOR}.{PATCH}`

**Examples:**
- `1.0.0` - Initial release
- `1.1.0` - New features, backward compatible
- `1.1.1` - Bug fixes, backward compatible
- `2.0.0` - Breaking changes

### Version Components

1. **MAJOR** (increment on breaking changes):
   - Incompatible API changes
   - Breaking changes to framework structure
   - Removal of features or policies
   - Changes that require migration guides

2. **MINOR** (increment on new features):
   - New features, backward compatible
   - New policies or guidelines
   - New templates or examples
   - Enhanced documentation

3. **PATCH** (increment on bug fixes):
   - Bug fixes, backward compatible
   - Documentation corrections
   - Template improvements
   - Minor clarifications

---

## Framework vs. Dev-Kit Versioning

### Two-Layer Versioning System

**Framework Version (SemVer):**
- **Purpose:** Consumer-facing, indicates compatibility and changes
- **Format:** `MAJOR.MINOR.PATCH` (e.g., `2.0.0`)
- **Used by:** Projects consuming frameworks
- **Published:** Git tags, package registries, framework READMEs

**Dev-Kit Version (RC.EPIC.STORY.TASK+BUILD):**
- **Purpose:** Internal development tracking, forensic traceability
- **Format:** `RC.EPIC.STORY.TASK+BUILD` (e.g., `0.6.1.1+3`)
- **Used by:** Dev-kit development, changelog, Kanban tracking
- **Published:** Dev-kit changelog, version file, Git commits

### Relationship

- **One framework release** may span **multiple dev-kit versions**
- **One dev-kit version** may include **changes to multiple frameworks**
- Framework versions are **independent** of dev-kit versions
- Framework versions are **tagged** when frameworks are released

**Example:**
```
Dev-kit: 0.6.1.1+1 → Framework: numbering-versioning v2.0.0 (initial release)
Dev-kit: 0.6.1.1+2 → Framework: numbering-versioning v2.0.0 (no change)
Dev-kit: 0.6.1.1+3 → Framework: numbering-versioning v2.0.0 (no change)
Dev-kit: 0.6.2.1+1 → Framework: numbering-versioning v2.1.0 (new features)
Dev-kit: 0.6.2.1+2 → Framework: workflow-mgmt v1.0.0 (new framework)
```

---

## Version Numbering Conventions

### Initial Release

**First release:** `1.0.0`

- Frameworks start at `1.0.0` when first released
- Pre-release versions (e.g., `0.1.0`) are not used
- `1.0.0` indicates stable, production-ready framework

### Version Increment Rules

**MAJOR increment (X.0.0):**
- Breaking changes to framework structure
- Incompatible changes to policies or APIs
- Removal of features or templates
- Major restructuring requiring migration

**MINOR increment (x.Y.0):**
- New features, backward compatible
- New policies or guidelines
- New templates or examples
- Enhanced documentation

**PATCH increment (x.y.Z):**
- Bug fixes, backward compatible
- Documentation corrections
- Template improvements
- Minor clarifications

### Pre-Release Versions

**Not used for frameworks:**
- Frameworks are released as stable versions only
- No alpha, beta, or release candidate versions
- All releases are production-ready

---

## Version File Structure

### Framework Version File

Each framework includes a version file:

**Location:** `packages/frameworks/{framework-name}/VERSION`

**Format:**
```python
# Framework Version File
FRAMEWORK_NAME = "numbering-versioning"
FRAMEWORK_VERSION = "2.0.0"
FRAMEWORK_SEMVER = "2.0.0"
FRAMEWORK_RELEASE_DATE = "2025-12-06"
FRAMEWORK_CHANGELOG = "CHANGELOG.md"
```

**Fields:**
- `FRAMEWORK_NAME`: Framework identifier (kebab-case)
- `FRAMEWORK_VERSION`: Semantic version (MAJOR.MINOR.PATCH)
- `FRAMEWORK_SEMVER`: Same as FRAMEWORK_VERSION (for clarity)
- `FRAMEWORK_RELEASE_DATE`: Release date (YYYY-MM-DD)
- `FRAMEWORK_CHANGELOG`: Path to framework changelog

### Framework README Version

Each framework README includes version information:

**Location:** `packages/frameworks/{framework-name}/README.md`

**Format:**
```markdown
**Version:** 2.0.0  
**Last Updated:** 2025-12-06  
**Status:** Active
```

---

## Git Tagging Strategy

### Tag Format

Framework versions are tagged in Git using the format:

**Format:** `{framework-name}-v{MAJOR}.{MINOR}.{PATCH}`

**Examples:**
- `numbering-versioning-v2.0.0`
- `workflow-mgmt-v1.0.0`
- `kanban-v1.2.0`

### Tagging Process

1. **Determine version increment:**
   - Review changes since last release
   - Determine if MAJOR, MINOR, or PATCH increment

2. **Update version file:**
   - Update `packages/frameworks/{framework-name}/VERSION`
   - Update framework README version

3. **Create Git tag:**
   ```bash
   git tag -a numbering-versioning-v2.0.0 -m "Release numbering-versioning v2.0.0"
   git push origin numbering-versioning-v2.0.0
   ```

4. **Update framework changelog:**
   - Add entry to framework changelog
   - Document changes in release notes

### Monorepo Tagging

**Option 1: Individual Framework Tags**
- Each framework has its own tags
- Tags: `numbering-versioning-v2.0.0`, `workflow-mgmt-v1.0.0`

**Option 2: Dev-Kit Release Tags**
- Tag entire dev-kit release
- Tag: `vibe-dev-kit-v2.0.0` (includes all frameworks)

**Current Strategy:** Use individual framework tags for granular versioning.

---

## Version Compatibility

### Backward Compatibility Policy

**MAJOR versions:**
- Breaking changes require MAJOR increment
- Migration guides required for MAJOR updates
- Deprecation notices for removed features

**MINOR versions:**
- Backward compatible
- New features added, existing features unchanged
- No migration required

**PATCH versions:**
- Backward compatible
- Bug fixes only, no new features
- Safe to update automatically

### Compatibility Matrix

| From Version | To Version | Compatibility | Migration Required |
|-------------|-----------|---------------|-------------------|
| 1.0.0       | 1.0.1     | ✅ Compatible | No                |
| 1.0.0       | 1.1.0     | ✅ Compatible | No                |
| 1.0.0       | 2.0.0     | ❌ Breaking   | Yes               |
| 1.1.0       | 1.2.0     | ✅ Compatible | No                |
| 2.0.0       | 2.1.0     | ✅ Compatible | No                |

---

## Version Release Process

### Release Workflow

1. **Development:**
   - Work on framework in dev-kit (using `RC.EPIC.STORY.TASK+BUILD` versioning)
   - Changes tracked via dev-kit changelog

2. **Release Decision:**
   - Determine if framework changes warrant new version
   - Decide version increment (MAJOR/MINOR/PATCH)

3. **Version Update:**
   - Update framework `VERSION` file
   - Update framework README version
   - Update framework changelog

4. **Git Tagging:**
   - Create Git tag: `{framework-name}-v{version}`
   - Push tag to remote

5. **Documentation:**
   - Update framework release notes
   - Update dependency architecture docs if needed

### Release Criteria

**PATCH release:**
- Bug fixes
- Documentation corrections
- Minor template improvements

**MINOR release:**
- New features
- New policies or guidelines
- New templates or examples
- Enhanced documentation

**MAJOR release:**
- Breaking changes
- Incompatible API changes
- Major restructuring
- Removal of features

---

## Framework Changelog

### Framework-Specific Changelog

Each framework maintains its own changelog:

**Location:** `packages/frameworks/{framework-name}/CHANGELOG.md`

**Format:** Follows [Keep a Changelog](https://keepachangelog.com/) format

**Example:**
```markdown
# Changelog

## [2.0.0] - 2025-12-06

### Added
- New versioning policy document
- Framework dependency architecture support

### Changed
- Updated versioning schema documentation
- Enhanced implementation guide

## [1.1.0] - 2025-12-01

### Added
- New epic branch workflow documentation

## [1.0.0] - 2025-11-15

### Added
- Initial framework release
```

---

## Version Tracking

### Version Registry

**Location:** `KB/Architecture/Standards_and_ADRs/framework-versions.md`

**Purpose:** Track all framework versions and their release dates

**Format:**
```markdown
# Framework Versions

## numbering-versioning
- v2.0.0 - 2025-12-06 - Initial release
- v2.1.0 - 2025-12-10 - New features

## workflow-mgmt
- v1.0.0 - 2025-12-08 - Initial release

## kanban
- v1.0.0 - 2025-12-05 - Initial release
- v1.1.0 - 2025-12-07 - Enhanced templates
```

---

## Integration with Dependency Architecture

### Git Submodules

**Version Pinning:**
```bash
git submodule add https://github.com/earlution/vibe-dev-kit.git frameworks/vibe-dev-kit
cd frameworks/vibe-dev-kit
git checkout numbering-versioning-v2.0.0  # Pin to specific version
```

### CLI Tool

**Version Installation:**
```bash
vibe-dev-kit install numbering-versioning@2.0.0
vibe-dev-kit update numbering-versioning  # Update to latest compatible
```

### Package Managers

**Version Specification:**
```json
{
  "dependencies": {
    "@vibe-dev-kit/numbering-versioning": "^2.0.0"
  }
}
```

---

## Best Practices

### Version Naming

1. **Use semantic versioning consistently**
2. **Tag releases immediately after version update**
3. **Document breaking changes in MAJOR releases**
4. **Maintain framework changelogs**
5. **Update version files and READMEs together**

### Release Frequency

1. **Release when changes warrant new version**
2. **Don't release for every dev-kit version**
3. **Group related changes in single release**
4. **Release MAJOR versions with migration guides**

### Version Communication

1. **Announce MAJOR releases prominently**
2. **Document compatibility in release notes**
3. **Provide migration guides for breaking changes**
4. **Update dependency architecture docs**

---

## References

- [Semantic Versioning](https://semver.org/)
- [Framework Dependency Architecture](./framework-dependency-architecture.md)
- [Framework Update CLI Design](./framework-update-cli-design.md)
- [Dev-Kit Versioning Policy](./dev-kit-versioning-policy.md)

---

## Appendix: Framework Version History

### numbering-versioning
- **v2.0.0** - 2025-12-06 - Current version (includes Epic renumbering strategy, epic branch workflow)

### workflow-mgmt
- **v1.0.0** - TBD - Initial release planned

### kanban
- **v1.0.0** - TBD - Initial release planned

---

**Status:** This strategy is proposed and will be refined based on implementation experience.

