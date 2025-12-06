---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Update Procedures

**Status:** Proposed  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 2 - Framework Update and Migration  
**Task:** E6:S02:T01 - Create framework update procedures

---

## Executive Summary

This document defines the **update procedures for Vibe Dev Kit framework packages**. It establishes workflows, testing processes, and documentation requirements for updating frameworks in consuming projects.

**Key Principle:** Framework updates should be safe, predictable, and well-documented, with clear procedures for different update scenarios (PATCH, MINOR, MAJOR).

---

## Update Workflow Overview

### High-Level Process

```
Check Updates → Assess Compatibility → Plan Update → Execute Update → Test → Verify → Complete
```

**Phases:**
1. **Check Updates:** Identify available framework updates
2. **Assess Compatibility:** Determine update type and compatibility
3. **Plan Update:** Create update plan based on version type
4. **Execute Update:** Perform the update using appropriate method
5. **Test:** Verify update success and functionality
6. **Verify:** Confirm compatibility and functionality
7. **Complete:** Document update and commit changes

---

## Update Decision Process

### When to Update

**PATCH Updates (x.y.Z → x.y.Z+1):**
- **Priority:** High (bug fixes, security patches)
- **Risk:** Very Low
- **Action:** Update automatically or as soon as possible
- **Testing:** Minimal (smoke tests)

**MINOR Updates (x.Y.0 → x.Y+1.0):**
- **Priority:** Medium (new features, enhancements)
- **Risk:** Low
- **Action:** Update when new features are needed
- **Testing:** Standard (feature tests, regression tests)

**MAJOR Updates (X.0.0 → X+1.0.0):**
- **Priority:** Low (breaking changes)
- **Risk:** High
- **Action:** Plan carefully, review migration guide
- **Testing:** Comprehensive (full test suite, migration verification)

### When NOT to Update

**Do NOT update if:**
- Project is in critical release phase
- Breaking changes are not acceptable
- Migration effort exceeds benefit
- Framework version is pinned for stability
- No clear benefit from update

### Update Decision Criteria

**Checklist for Update Decision:**

- [ ] **Update Available:** Is there a newer framework version?
- [ ] **Compatibility:** Is the update compatible with current version?
- [ ] **Breaking Changes:** Are there breaking changes (MAJOR)?
- [ ] **Migration Required:** Is migration guide available (MAJOR)?
- [ ] **Benefits:** What benefits does the update provide?
- [ ] **Risks:** What risks are associated with the update?
- [ ] **Timing:** Is this a good time to update?

**Decision Matrix:**

| Update Type | Compatibility | Migration | Risk | Recommendation |
|------------|---------------|-----------|------|----------------|
| PATCH      | ✅ Compatible | No        | Very Low | Update immediately |
| MINOR      | ✅ Compatible | No        | Low       | Update when needed |
| MAJOR      | ❌ Breaking   | Yes       | High      | Plan carefully |

---

## Update Workflows

### Workflow: PATCH Update

**Prerequisites:**
- Framework has PATCH update available
- Current version is compatible
- No breaking changes

**Steps:**
1. **Check Update:**
   - Identify available PATCH version
   - Review changelog for fixes
   - Verify compatibility

2. **Execute Update:**
   - Update framework dependency
   - Run automated tests
   - Verify functionality

3. **Verify:**
   - Smoke tests pass
   - No regressions
   - Update complete

**Update Methods:**
- **Git Submodules:** `git submodule update --remote`
- **CLI Tool:** `vibe-dev-kit update <framework>`
- **Package Manager:** `npm update` / `pip install --upgrade`

**Testing:**
- Minimal smoke tests
- Verify bug fixes work
- Check for regressions

### Workflow: MINOR Update

**Prerequisites:**
- Framework has MINOR update available
- Current version is compatible
- New features are desired

**Steps:**
1. **Check Update:**
   - Identify available MINOR version
   - Review changelog for new features
   - Verify backward compatibility

2. **Plan Update:**
   - Review new features
   - Plan feature adoption
   - Identify testing needs

3. **Execute Update:**
   - Update framework dependency
   - Run test suite
   - Verify new features

4. **Verify:**
   - All tests pass
   - New features work
   - No regressions

**Update Methods:**
- **Git Submodules:** `git submodule update --remote`
- **CLI Tool:** `vibe-dev-kit update <framework>`
- **Package Manager:** `npm update` / `pip install --upgrade`

**Testing:**
- Full test suite
- New feature tests
- Regression tests

### Workflow: MAJOR Update

**Prerequisites:**
- Framework has MAJOR update available
- Migration guide available
- Breaking changes documented

**Steps:**
1. **Check Update:**
   - Identify available MAJOR version
   - Review breaking changes
   - Read migration guide

2. **Plan Update:**
   - Review breaking changes
   - Create migration plan
   - Estimate effort
   - Schedule update window

3. **Prepare:**
   - Backup current implementation
   - Create feature branch
   - Review migration guide

4. **Execute Update:**
   - Update framework dependency
   - Apply migration steps
   - Update code for breaking changes
   - Run test suite

5. **Verify:**
   - All tests pass
   - Migration complete
   - No regressions
   - Breaking changes addressed

6. **Complete:**
   - Document update
   - Commit changes
   - Update project documentation

**Update Methods:**
- **Git Submodules:** `git checkout <new-tag>`
- **CLI Tool:** `vibe-dev-kit update <framework>@<version>`
- **Package Manager:** Update version in dependency file

**Testing:**
- Comprehensive test suite
- Migration verification
- Breaking change tests
- Full regression testing

---

## Update Methods

### Method 1: Git Submodules

**Installation:**
```bash
# Add framework as submodule
git submodule add https://github.com/earlution/vibe-dev-kit.git frameworks/vibe-dev-kit

# Pin to specific version
cd frameworks/vibe-dev-kit
git checkout numbering-versioning-v2.0.0
cd ../..
git add frameworks/vibe-dev-kit
git commit -m "Pin numbering-versioning to v2.0.0"
```

**PATCH/MINOR Update:**
```bash
# Update to latest compatible version
cd frameworks/vibe-dev-kit
git fetch
git checkout numbering-versioning-v2.1.0
cd ../..
git add frameworks/vibe-dev-kit
git commit -m "Update numbering-versioning to v2.1.0"
```

**MAJOR Update:**
```bash
# Update to new MAJOR version
cd frameworks/vibe-dev-kit
git fetch
git checkout numbering-versioning-v3.0.0
cd ../..
# Apply migration steps
git add frameworks/vibe-dev-kit
git commit -m "Update numbering-versioning to v3.0.0"
```

### Method 2: CLI Tool

**Installation:**
```bash
# Install framework
vibe-dev-kit install numbering-versioning@2.0.0
```

**PATCH/MINOR Update:**
```bash
# Update to latest compatible version
vibe-dev-kit update numbering-versioning
```

**MAJOR Update:**
```bash
# Update to specific MAJOR version
vibe-dev-kit update numbering-versioning@3.0.0
# Follow migration guide prompts
```

### Method 3: Package Managers

**npm:**
```json
{
  "dependencies": {
    "@vibe-dev-kit/numbering-versioning": "^2.0.0"
  }
}
```

**Update:**
```bash
# PATCH/MINOR update
npm update @vibe-dev-kit/numbering-versioning

# MAJOR update (manual)
# Edit package.json to new version
npm install
```

**pip:**
```txt
# requirements.txt
vibe-dev-kit-numbering-versioning==2.0.0
```

**Update:**
```bash
# PATCH/MINOR update
pip install --upgrade vibe-dev-kit-numbering-versioning

# MAJOR update (manual)
# Edit requirements.txt to new version
pip install -r requirements.txt
```

---

## Update Testing Processes

### Pre-Update Testing

**Checklist:**
- [ ] Current tests pass
- [ ] Backup created
- [ ] Update plan documented
- [ ] Migration guide reviewed (MAJOR)

### Update Testing

**PATCH Update Testing:**
- Smoke tests
- Bug fix verification
- Regression checks

**MINOR Update Testing:**
- Full test suite
- New feature tests
- Regression tests
- Integration tests

**MAJOR Update Testing:**
- Comprehensive test suite
- Migration verification
- Breaking change tests
- Full regression testing
- Integration tests
- End-to-end tests

### Post-Update Testing

**Verification Checklist:**
- [ ] All tests pass
- [ ] New features work (MINOR)
- [ ] Breaking changes addressed (MAJOR)
- [ ] No regressions
- [ ] Documentation updated
- [ ] Update documented

---

## Update Procedures

### Procedure: Standard Framework Update

**Prerequisites:**
- Framework update available
- Compatibility verified
- Update plan created

**Steps:**
1. **Check Current Version:**
   - Identify current framework version
   - Check for available updates
   - Review changelog

2. **Assess Compatibility:**
   - Determine update type (PATCH/MINOR/MAJOR)
   - Check compatibility matrix
   - Review breaking changes (MAJOR)

3. **Plan Update:**
   - Create update plan
   - Schedule update window
   - Prepare testing strategy

4. **Execute Update:**
   - Update framework dependency
   - Run automated tests
   - Verify functionality

5. **Test:**
   - Run test suite
   - Verify new features (MINOR)
   - Verify migration (MAJOR)

6. **Verify:**
   - All tests pass
   - No regressions
   - Update complete

7. **Complete:**
   - Document update
   - Commit changes
   - Update project documentation

**Completion:**
- Framework updated successfully
- Tests passing
- Documentation updated

### Procedure: MAJOR Update with Migration

**Additional Steps for MAJOR Updates:**

1. **Review Migration Guide:**
   - Read migration guide thoroughly
   - Understand breaking changes
   - Plan migration steps

2. **Create Migration Branch:**
   - Create feature branch for migration
   - Backup current implementation
   - Prepare for rollback

3. **Apply Migration:**
   - Update framework dependency
   - Apply migration steps from guide
   - Update code for breaking changes
   - Fix compilation errors

4. **Test Migration:**
   - Run comprehensive test suite
   - Verify migration steps
   - Test breaking change fixes
   - Full regression testing

5. **Verify Migration:**
   - All tests pass
   - Migration complete
   - No regressions
   - Breaking changes addressed

6. **Complete Migration:**
   - Merge migration branch
   - Document migration
   - Update project documentation
   - Announce migration completion

**Migration Guide Location:**
- `packages/frameworks/{framework-name}/MIGRATION_GUIDE_v{version}.md`

**Migration Steps:**
1. Review breaking changes
2. Update framework dependency
3. Apply migration steps
4. Update code for breaking changes
5. Run tests
6. Verify migration

### Procedure: Multi-Framework Update

**When Multiple Frameworks Need Updates:**

1. **Prioritize Updates:**
   - Identify all framework updates needed
   - Prioritize by importance
   - Plan update sequence

2. **Update Sequentially:**
   - Update one framework at a time
   - Test after each update
   - Verify before next update

3. **Coordinate Updates:**
   - Check framework dependencies
   - Update dependent frameworks first
   - Test integration after updates

4. **Verify All Updates:**
   - Test all updated frameworks
   - Verify integration
   - Check for conflicts

**Example:**
```
1. Update numbering-versioning (v2.0.0 → v2.1.0)
2. Test numbering-versioning update
3. Update workflow-mgmt (v1.0.0 → v1.1.0)
4. Test workflow-mgmt update
5. Test integration between frameworks
6. Verify all updates complete
```

---

## Update Automation

### Automated Update Checks

**CI/CD Integration:**
- Check for framework updates daily
- Notify of available updates
- Run compatibility checks
- Generate update reports

**Update Notifications:**
- Email notifications for updates
- Slack/Teams notifications
- Update dashboard
- Version tracking

### Automated Update Scripts

**Script: `check-framework-updates.sh`**

**Functionality:**
1. Check for available framework updates
2. Compare current vs. available versions
3. Identify update type (PATCH/MINOR/MAJOR)
4. Generate update report

**Usage:**
```bash
./scripts/framework-management/check-framework-updates.sh

# Output:
# Available Updates:
# - numbering-versioning: 2.0.0 → 2.1.0 (MINOR)
# - workflow-mgmt: 1.0.0 → 1.0.1 (PATCH)
```

**Script: `update-framework.sh`**

**Functionality:**
1. Update framework to specified version
2. Run automated tests
3. Verify update success
4. Generate update report

**Usage:**
```bash
./scripts/framework-management/update-framework.sh \
  --framework numbering-versioning \
  --version 2.1.0

# Output:
# ✅ Updated numbering-versioning to v2.1.0
# ✅ All tests pass
# ✅ Update complete
```

---

## Update Best Practices

### Version Management

1. **Pin Versions for Stability:**
   - Pin to specific versions in production
   - Use version ranges in development
   - Update regularly in development

2. **Track Versions:**
   - Document framework versions used
   - Track update history
   - Maintain version registry

3. **Update Regularly:**
   - Update PATCH versions immediately
   - Update MINOR versions regularly
   - Plan MAJOR updates carefully

### Testing

1. **Test Before Update:**
   - Ensure current tests pass
   - Create test plan for update
   - Prepare test data

2. **Test After Update:**
   - Run full test suite
   - Verify new features (MINOR)
   - Verify migration (MAJOR)

3. **Regression Testing:**
   - Test all existing functionality
   - Verify no regressions
   - Test integration points

### Documentation

1. **Update Documentation:**
   - Document framework versions
   - Update migration notes
   - Maintain update history

2. **Migration Documentation:**
   - Document migration steps
   - Record breaking changes
   - Provide examples

3. **Version Tracking:**
   - Maintain version registry
   - Track update dates
   - Document update reasons

---

## Update Troubleshooting

### Common Issues

**Issue 1: Update Fails**
- **Cause:** Dependency conflicts, version incompatibility
- **Solution:** Check compatibility matrix, resolve conflicts, try alternative version

**Issue 2: Tests Fail After Update**
- **Cause:** Breaking changes, API changes, test incompatibility
- **Solution:** Review changelog, check migration guide, update tests

**Issue 3: Migration Issues**
- **Cause:** Incomplete migration, missing steps, breaking changes
- **Solution:** Review migration guide, verify all steps, check breaking changes

**Issue 4: Version Conflicts**
- **Cause:** Multiple frameworks requiring different versions
- **Solution:** Check framework dependencies, update sequentially, resolve conflicts

### Recovery Procedures

**Rollback Update:**
1. Revert framework dependency to previous version
2. Restore code changes
3. Run tests to verify rollback
4. Document rollback reason

**Partial Update:**
1. Update framework dependency
2. Keep code changes minimal
3. Test incrementally
4. Complete update gradually

**Update Conflict Resolution:**
1. Identify conflicting frameworks
2. Update frameworks sequentially
3. Test integration after each update
4. Resolve conflicts as needed

---

## References

- [Framework Versioning Strategy](./framework-versioning-strategy.md)
- [Framework Release Processes](./framework-release-processes.md)
- [Framework Compatibility Tracking](./framework-compatibility-tracking.md)
- [Framework Dependency Architecture](./framework-dependency-architecture.md)
- [Framework Update CLI Design](./framework-update-cli-design.md)

---

## Appendix: Update Checklist

### Pre-Update Checklist

- [ ] Framework update available
- [ ] Compatibility verified
- [ ] Update type determined (PATCH/MINOR/MAJOR)
- [ ] Migration guide reviewed (MAJOR)
- [ ] Update plan created
- [ ] Backup created
- [ ] Test plan prepared

### Update Execution Checklist

- [ ] Framework dependency updated
- [ ] Migration steps applied (MAJOR)
- [ ] Code updated for breaking changes (MAJOR)
- [ ] Tests run and passing
- [ ] New features verified (MINOR)
- [ ] Migration verified (MAJOR)

### Post-Update Checklist

- [ ] All tests pass
- [ ] No regressions
- [ ] Update documented
- [ ] Project documentation updated
- [ ] Version registry updated
- [ ] Update complete

---

**Status:** This procedure is proposed and will be refined based on implementation experience.

