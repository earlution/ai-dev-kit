# Changelog: v0.2.1.1+1

**Release Date:** 2025-12-18  
**Version:** v0.2.1.1+1  
**Epic:** Epic 2 – Workflow Management  
**Story:** E2:S01 – RW Agent Execution & Docs  
**Task:** E2:S01:T01 – Add optional BYOB badge workflow for private repos  
**Build:** +1 (T01 COMPLETE: Optional BYOB badge workflow added to workflow mgt package)

---

## Summary

Added optional BYOB (Bring Your Own Badge) badge workflow template to the Workflow Management package for users with private repositories. This enables dynamic badge generation for private repos that cannot use standard Shields.io badges.

---

## Changes

### Added

- **GitHub Actions Workflow Template** (`packages/frameworks/workflow mgt/templates/github-actions/update-badges-byob.yml`)
  - Complete BYOB badge workflow template
  - Supports 6 badge types: version, license, status, tests, coverage, code quality
  - Includes comprehensive inline documentation and setup instructions
  - Configurable for any project structure

- **Documentation** (`packages/frameworks/workflow mgt/templates/github-actions/README.md`)
  - Complete setup guide for optional GitHub Actions workflows
  - Installation instructions
  - Customization guidance
  - Badge URL format documentation

### Modified

- **Workflow Management Package README**
  - Added "Optional GitHub Actions Workflows (Private Repos)" section
  - Updated package version to 2.1.3
  - Added reference to new workflow templates

- **Workflow Management Package CHANGELOG**
  - Added entry for v2.1.3
  - Documented new optional BYOB badge workflow feature

---

## Technical Details

### Workflow Features

**Badge Types Supported:**
1. **Version Badge** - Extracts from version file (configurable path)
2. **License Badge** - Static license type (configurable)
3. **Status Badge** - Static project status
4. **Test Status Badge** - Dynamic from pytest results
5. **Coverage Badge** - Dynamic from pytest-cov output
6. **Code Quality Badge** - Dynamic from ruff/pylint/flake8

**Workflow Triggers:**
- Version file changes
- Code changes (Python files)
- Test completion (via workflow_run trigger)
- Manual dispatch

**Configuration Points:**
- Version file path (customizable)
- License type (customizable)
- Public badge repository (REPOSITORY and ACTOR)
- Test workflow name (if different)

### Package Integration

**Location:**
- `packages/frameworks/workflow mgt/templates/github-actions/`
- Template: `update-badges-byob.yml`
- Documentation: `README.md`

**Installation:**
- Copy template to `.github/workflows/update-badges.yml`
- Customize configuration values
- Follow setup instructions in template comments

**Optional Feature:**
- Only needed for private repositories
- Public repos can use standard Shields.io badges
- No impact on existing workflow functionality

---

## Dependencies

- BYOB GitHub Action: `RubbaBoy/BYOB@v1.3.0`
- Public badge repository (user must create)
- Personal Access Token with `repo` scope (user must create)

---

## Related Work

**Related Epics:**
- Epic 1 – AI Dev Kit Core (Repository CI/CD Setup)
- Epic 2 – Workflow Management (this epic)

**Related Stories:**
- E1:S06 – Repository CI/CD Setup (BYOB badge implementation)
- E2:S01 – RW Agent Execution & Docs (this story)

**Related Tasks:**
- E1:S06:T01 – Set up BYOB badges for private repository

**References:**
- BYOB Repository: https://github.com/RubbaBoy/BYOB
- Badge Setup Guide: `docs/knowledge/guides/badge-setup-for-private-repos.md`

---

## Notes

This is an **optional** feature for users with private repositories. Public repositories can continue using standard Shields.io badges without this workflow. The template is designed to be easily customizable for any project structure and includes comprehensive documentation.

---

**Last Updated:** 2025-12-18T00:00:00Z  
**Version:** v0.2.1.1+1

