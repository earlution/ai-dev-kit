# Changelog: v0.1.6.1+1

**Release Date:** 2025-12-18  
**Version:** v0.1.6.1+1  
**Epic:** Epic 1 – AI Dev Kit Core  
**Story:** E1:S06 – Repository CI/CD Setup  
**Task:** E1:S06:T01 – Set up BYOB badges for private repository  
**Build:** +1 (T01 IN PROGRESS: BYOB badge setup with test, coverage, and code quality badges)

---

## Summary

Implemented BYOB (Bring Your Own Badge) badge system for private repository support, including dynamic badges for version, license, status, tests, coverage, and code quality.

---

## Changes

### Added

- **GitHub Actions Workflow** (`.github/workflows/update-badges.yml`)
  - Created workflow for automatic badge updates using BYOB
  - Configured version badge (extracts from `version.py`)
  - Configured license badge (static: MIT)
  - Configured status badge (static: active)
  - Configured test status badge (extracts from pytest results)
  - Configured coverage badge (extracts from pytest-cov output)
  - Configured code quality badge (extracts from ruff/pylint/flake8)
  - Added workflow triggers (version changes, code changes, test completion)

- **Documentation**
  - Created `docs/knowledge/guides/badge-setup-for-private-repos.md`
    - Complete setup instructions for BYOB configuration
    - Badge configuration details for all 6 badge types
    - Troubleshooting guide
    - Public repository setup instructions

- **Kanban Structure**
  - Created Epic 1, Story 6: Repository CI/CD Setup
  - Created Task 1: Set up BYOB badges for private repository
  - Updated Epic 1 document with new story

### Modified

- **README.md**
  - Updated badge URLs to use BYOB format
  - Added test status badge
  - Added coverage badge
  - Added code quality badge
  - Updated badge URLs to point to public badge repository

---

## Technical Details

### Badge Configuration

1. **Version Badge**
   - Extracts version from `src/fynd_deals/version.py`
   - Updates automatically on version changes
   - Color: Blue (`007ACC`)

2. **License Badge**
   - Static: MIT
   - Color: Green

3. **Status Badge**
   - Static: Active
   - Color: Success (green)

4. **Test Status Badge**
   - Extracts from pytest test results
   - Status: "passing" (green), "failing" (red), or "not configured" (grey)
   - Updates automatically on test runs

5. **Coverage Badge**
   - Extracts coverage percentage from pytest-cov output
   - Color coding: Green (≥80%), Yellow (≥60%), Red (<60%), Grey (not configured)
   - Updates automatically on coverage calculation

6. **Code Quality Badge**
   - Uses ruff (preferred), pylint, or flake8 for linting
   - Status: "passing" (green), "warnings" (yellow), "failing" (red), or "not configured" (grey)
   - Updates automatically on code quality checks

### Workflow Features

- **Automatic Triggers:**
  - Version file changes
  - Code changes (Python files)
  - Test completion (via workflow_run trigger)

- **Public Repository Support:**
  - Configured for BYOB public badge repository
  - Requires `BADGES_REPO_TOKEN` secret
  - Badge URLs: `https://byob.yarr.is/{org}/{badge-repo}/{badge-name}`

---

## Dependencies

- BYOB GitHub Action: `RubbaBoy/BYOB@v1.3.0`
- Public badge repository (to be created by user)
- Personal Access Token with `repo` scope (to be created by user)

---

## Next Steps

1. Create public badge repository (e.g., `ai-dev-kit-badges`)
2. Create Personal Access Token with `repo` scope
3. Add token as repository secret: `BADGES_REPO_TOKEN`
4. Uncomment and configure `REPOSITORY` and `ACTOR` in workflow
5. Test badge generation workflow

---

## Related Work

- **Epic:** Epic 1 – AI Dev Kit Core
- **Story:** E1:S06 – Repository CI/CD Setup
- **Task:** E1:S06:T01 – Set up BYOB badges for private repository
- **Reference:** BYOB Repository: https://github.com/RubbaBoy/BYOB

---

## Notes

This implementation provides a complete badge system for private repositories using BYOB. All badges are configured and ready to use once the public badge repository is set up. The workflow automatically updates badges based on version changes, test results, coverage reports, and code quality checks.

