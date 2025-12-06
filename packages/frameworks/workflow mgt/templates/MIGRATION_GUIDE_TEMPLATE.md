# Migration Guide: {framework-name} v{old-version} → v{new-version}

**Release Date:** {YYYY-MM-DD}  
**Migration Difficulty:** {Easy/Medium/Hard}  
**Estimated Time:** {X hours/days}  
**Breaking Changes:** {count}

---

## Overview

This guide helps you migrate from {framework-name} v{old-version} to v{new-version}.

**Key Changes:**
- {Change 1}
- {Change 2}
- {Change 3}

**Migration Path:**
- Direct migration: {old-version} → {new-version}
- Sequential migration: {old-version} → {intermediate-version} → {new-version} (if needed)

---

## Breaking Changes

### Change 1: {Description}

**What Changed:**
{Detailed description of the change}

**Why:**
{Reason for the change}

**Impact:**
- {Impact 1}
- {Impact 2}

**Migration Steps:**
1. {Step 1}
2. {Step 2}
3. {Step 3}

**Before (v{old-version}):**
```{language}
{Old code example}
```

**After (v{new-version}):**
```{language}
{New code example}
```

---

## Upgrade Steps

### Step 1: Prepare for Migration

1. **Backup Current Implementation:**
   ```bash
   git checkout -b migrate-{framework-name}-v{new-version}
   git commit -m "Backup before {framework-name} v{new-version} migration"
   ```

2. **Review Migration Guide:**
   - Read this guide thoroughly
   - Identify all breaking changes affecting your project
   - Estimate migration effort

3. **Check Dependencies:**
   - Verify all dependencies are compatible
   - Update dependencies if needed
   - Test current implementation

### Step 2: Update Framework Dependency

**Git Submodules:**
```bash
cd frameworks/vibe-dev-kit
git fetch
git checkout {framework-name}-v{new-version}
cd ../..
git add frameworks/vibe-dev-kit
```

**CLI Tool:**
```bash
vibe-dev-kit update {framework-name}@{new-version}
```

**Package Manager:**
```bash
# npm
npm install @vibe-dev-kit/{framework-name}@{new-version}

# pip
pip install vibe-dev-kit-{framework-name}=={new-version}
```

### Step 3: Apply Migration Steps

For each breaking change:

1. **Identify Affected Code:**
   - Search for deprecated features
   - Find affected API calls
   - Locate configuration files

2. **Apply Migration:**
   - Update code according to migration guide
   - Update configuration files
   - Update import statements

3. **Test Changes:**
   - Run tests for affected code
   - Verify functionality
   - Check for errors

### Step 4: Test Migration

1. **Run Test Suite:**
   ```bash
   # Run all tests
   pytest tests/
   
   # Run specific migration tests
   pytest tests/test_migration_{framework_name}_v{new_version}.py
   ```

2. **Verify Functionality:**
   - Test all affected features
   - Verify breaking changes addressed
   - Check for regressions

3. **Integration Testing:**
   - Test framework integration
   - Verify dependencies work
   - Test end-to-end workflows

### Step 5: Verify Migration

**Verification Checklist:**
- [ ] All breaking changes addressed
- [ ] All tests pass
- [ ] No deprecation warnings
- [ ] Code compiles without errors
- [ ] Functionality verified
- [ ] Documentation updated

### Step 6: Complete Migration

1. **Commit Changes:**
   ```bash
   git add .
   git commit -m "Migrate {framework-name} from v{old-version} to v{new-version}"
   ```

2. **Update Documentation:**
   - Update project README
   - Update framework version references
   - Document migration completion

3. **Merge Migration Branch:**
   ```bash
   git checkout main
   git merge migrate-{framework-name}-v{new-version}
   ```

---

## Common Migration Issues

### Issue 1: Import Errors

**Symptom:** Import statements fail after migration

**Solution:**
1. Check new file paths in framework
2. Update import statements
3. Verify file locations

### Issue 2: API Method Not Found

**Symptom:** Method calls fail after migration

**Solution:**
1. Check new API documentation
2. Update method names
3. Update method signatures

### Issue 3: Configuration Errors

**Symptom:** Configuration files fail to load

**Solution:**
1. Review new configuration format
2. Update configuration files
3. Verify configuration syntax

### Issue 4: Test Failures

**Symptom:** Tests fail after migration

**Solution:**
1. Review test failures
2. Update test code for breaking changes
3. Verify test expectations

---

## Examples

### Example 1: {Example Name}

**Scenario:** {Description}

**Before (v{old-version}):**
```{language}
{Old code}
```

**After (v{new-version}):**
```{language}
{New code}
```

---

## Support

If you encounter issues during migration:

1. Review this migration guide
2. Check framework documentation
3. Review breaking changes registry
4. Open an issue on GitHub

---

**Migration Guide Version:** 1.0.0  
**Last Updated:** {YYYY-MM-DD}

