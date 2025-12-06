---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T18:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Auto-Update Policies

**Status:** Proposed  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 2 - Framework Update and Migration  
**Task:** E6:S02:T05 - Create auto-update mechanisms

---

## Executive Summary

This document defines **auto-update policies** for Vibe Dev Kit framework dependencies. It establishes version pinning strategies, update automation rules, and safety mechanisms to ensure framework updates are safe, predictable, and well-controlled.

**Key Principle:** Auto-updates should be **safe by default**, with clear policies for when automatic updates are appropriate and when manual intervention is required.

---

## Version Pinning Strategies

### Pinning Levels

**1. Exact Version Pinning**
- **Format:** `framework@2.0.0`
- **Behavior:** Never auto-update, always use exact version
- **Use Case:** Production stability, critical systems
- **Example:**
  ```yaml
  frameworks:
    numbering-versioning:
      version: "2.0.0"
      pin: "exact"
  ```

**2. Minor Version Pinning**
- **Format:** `framework@~2.0.0` or `framework@2.0.x`
- **Behavior:** Auto-update to latest PATCH within MINOR version
- **Use Case:** Security patches, bug fixes
- **Example:**
  ```yaml
  frameworks:
    numbering-versioning:
      version: "2.0.0"
      pin: "minor"  # Allows 2.0.1, 2.0.2, but not 2.1.0
  ```

**3. Major Version Pinning**
- **Format:** `framework@^2.0.0` or `framework@2.x.x`
- **Behavior:** Auto-update to latest MINOR/PATCH within MAJOR version
- **Use Case:** Feature updates, enhancements
- **Example:**
  ```yaml
  frameworks:
    numbering-versioning:
      version: "2.0.0"
      pin: "major"  # Allows 2.1.0, 2.2.0, but not 3.0.0
  ```

**4. Latest Version (No Pinning)**
- **Format:** `framework@latest` or `framework@*`
- **Behavior:** Auto-update to latest available version (any MAJOR)
- **Use Case:** Development, bleeding edge
- **Example:**
  ```yaml
  frameworks:
    numbering-versioning:
      version: "latest"
      pin: "none"
  ```

---

## Auto-Update Policies

### Update Type Policies

**PATCH Updates (x.y.Z → x.y.Z+1):**
- **Auto-Update:** ✅ **Enabled by default**
- **Requires Approval:** ❌ No
- **Testing Required:** Minimal (smoke tests)
- **Rollback:** Automatic (Git revert)
- **Notification:** Optional (can be silent)

**MINOR Updates (x.Y.0 → x.Y+1.0):**
- **Auto-Update:** ⚠️ **Conditional** (depends on pinning strategy)
- **Requires Approval:** ✅ Yes (if pinning allows)
- **Testing Required:** Standard (feature tests)
- **Rollback:** Manual (Git revert)
- **Notification:** ✅ Required (changelog review)

**MAJOR Updates (X.0.0 → X+1.0.0):**
- **Auto-Update:** ❌ **Disabled by default**
- **Requires Approval:** ✅ Always required
- **Testing Required:** Comprehensive (full test suite)
- **Rollback:** Manual (migration reversal)
- **Notification:** ✅ Required (migration guide review)

### Update Timing Policies

**Immediate Updates:**
- **When:** PATCH updates for security fixes
- **How:** Automatic, no approval
- **Risk:** Very Low

**Scheduled Updates:**
- **When:** MINOR updates, regular maintenance
- **How:** Weekly/monthly update window
- **Risk:** Low

**Planned Updates:**
- **When:** MAJOR updates, breaking changes
- **How:** Manual planning, migration review
- **Risk:** High

### Update Approval Policies

**No Approval Required:**
- PATCH updates (bug fixes)
- Security patches
- Exact version pinning (no updates)

**Automatic Approval:**
- PATCH updates within pinned MINOR version
- Updates matching pinning strategy

**Manual Approval Required:**
- MINOR updates (if pinning allows)
- MAJOR updates (always)
- Updates outside pinning strategy

---

## Safety Mechanisms

### Pre-Update Validation

**Checks Before Auto-Update:**
1. ✅ Version compatibility check
2. ✅ Breaking changes detection
3. ✅ Migration requirements check
4. ✅ Test suite execution (if available)
5. ✅ Backup creation (Git commit)

### Update Execution Safety

**Safety Measures:**
- **Dry Run Mode:** Test updates without applying
- **Backup Creation:** Automatic Git commit before update
- **Rollback Capability:** Easy revert to previous version
- **Incremental Updates:** Update one framework at a time
- **Error Handling:** Stop on first error, don't continue

### Post-Update Validation

**Checks After Auto-Update:**
1. ✅ Framework version verification
2. ✅ Integration tests (if available)
3. ✅ Smoke tests
4. ✅ Documentation update check

---

## Configuration

### `.vibe-dev-kit.yaml` Configuration

```yaml
version: "1.0.0"
default_backend: "git-submodule"
auto_update:
  enabled: true
  schedule: "weekly"  # daily, weekly, monthly, manual
  policy: "patch-only"  # patch-only, minor-allowed, major-requires-approval
  approval_required: false  # true for manual approval
  notification: true
frameworks:
  numbering-versioning:
    version: "2.0.0"
    pin: "minor"  # exact, minor, major, none
    auto_update: true
    backend: "git-submodule"
    path: "frameworks/vibe-dev-kit/packages/frameworks/numbering & versioning"
    source: "https://github.com/earlution/vibe-dev-kit.git"
    tag: "numbering-versioning-v2.0.0"
  workflow-mgt:
    version: "1.5.0"
    pin: "exact"  # No auto-updates
    auto_update: false
    backend: "git-submodule"
```

### Policy Configuration Options

**`auto_update.enabled`:**
- `true`: Enable auto-updates (respects pinning)
- `false`: Disable all auto-updates

**`auto_update.schedule`:**
- `daily`: Check for updates daily
- `weekly`: Check for updates weekly
- `monthly`: Check for updates monthly
- `manual`: Only check when explicitly requested

**`auto_update.policy`:**
- `patch-only`: Only auto-update PATCH versions
- `minor-allowed`: Auto-update MINOR versions (with approval)
- `major-requires-approval`: Allow MAJOR updates (always requires approval)

**`framework.pin`:**
- `exact`: No auto-updates
- `minor`: Auto-update PATCH within MINOR
- `major`: Auto-update MINOR/PATCH within MAJOR
- `none`: Auto-update to latest (any version)

---

## Update Workflows

### Automated PATCH Update Workflow

```
1. Check for PATCH updates
2. Validate compatibility
3. Create backup (Git commit)
4. Apply update
5. Run smoke tests
6. Commit update
7. Notify (optional)
```

### Scheduled MINOR Update Workflow

```
1. Check for MINOR updates (weekly)
2. Review changelog
3. Request approval (if required)
4. Create backup (Git commit)
5. Apply update
6. Run test suite
7. Review changes
8. Commit update
9. Notify team
```

### Manual MAJOR Update Workflow

```
1. Check for MAJOR updates
2. Review migration guide
3. Plan migration
4. Create backup (Git commit)
5. Apply update
6. Run migration scripts
7. Run full test suite
8. Review and verify
9. Commit update
10. Notify team
```

---

## Best Practices

### Recommended Pinning Strategies

**Production Systems:**
- Use `exact` or `minor` pinning
- Enable PATCH auto-updates only
- Require approval for MINOR updates
- Disable MAJOR auto-updates

**Development Systems:**
- Use `major` or `none` pinning
- Enable MINOR auto-updates
- Allow MAJOR updates with approval
- More flexible update policies

**CI/CD Systems:**
- Use `exact` pinning for stability
- Disable auto-updates
- Manual updates only
- Version pinning in CI config

### Update Frequency

**Recommended:**
- **PATCH:** Update immediately (auto)
- **MINOR:** Update monthly (scheduled)
- **MAJOR:** Update quarterly (planned)

**Avoid:**
- Updating during critical releases
- Updating multiple frameworks simultaneously
- Updating without testing
- Updating without backup

---

## Tools and Scripts

### Auto-Update Scripts

**Git Submodule:**
- `scripts/framework-management/auto-update-git-submodule.sh`
- Updates single framework submodule

**All Frameworks:**
- `scripts/framework-management/auto-update-all-frameworks.sh`
- Updates all configured frameworks

**CLI Tool:**
- `vibe-dev-kit update --all`
- `vibe-dev-kit update <framework>`
- `vibe-dev-kit check`

### CI/CD Integration

**GitHub Actions Example:**
```yaml
name: Auto-Update Frameworks
on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Check for updates
        run: vibe-dev-kit check
      - name: Auto-update PATCH
        run: vibe-dev-kit update --all --patch-only
```

---

## References

- **Framework Update Procedures:** `KB/Architecture/Standards_and_ADRs/framework-update-procedures.md`
- **Framework Dependency Architecture:** `KB/Architecture/Standards_and_ADRs/framework-dependency-architecture.md`
- **Framework Versioning Strategy:** `KB/Architecture/Standards_and_ADRs/framework-versioning-strategy.md`
- **Epic 6:** `KB/PM_and_Portfolio/kanban/epics/Epic-6/Epic-6.md`

---

## Decision Record

**Decision:** Implement configurable auto-update policies with safety mechanisms and version pinning strategies.

**Rationale:**
- Provides flexibility for different project needs
- Ensures safety through validation and approval mechanisms
- Supports both automated and manual update workflows
- Enables gradual adoption of auto-updates

