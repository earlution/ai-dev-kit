---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:54Z
expires_at: null
housekeeping_policy: keep
---

# Packages Directory

This directory contains all packages organized by category.

## Structure

- **`frameworks/`** - Complete, reusable development frameworks
  - **`workflow mgt/`** - Workflow Management Framework with comprehensive documentation
  - **`kanban/`** - Project management and kanban board systems
  - **`doc-lifecycle/`** - Documentation lifecycle management
  - **`debug-path/`** - Debugging and troubleshooting frameworks
  - **`numbering & versioning/`** - Version control and numbering strategies
  - **`tooling & automation/`** - Development tooling and automation frameworks
- **`tools/`** - Development tools and utilities
- **`sops/`** - Standard Operating Procedures and workflows

## Adding New Packages

1. **Choose the right category:**
   - **Frameworks** - Complete systems with full documentation (e.g., Release Workflow, Versioning Strategy)
   - **Tools** - Utilities and scripts (e.g., code generators, validators)
   - **SOPs** - Process documentation (e.g., code review procedures, deployment workflows)

2. **Create package directory:**

```bash
mkdir -p packages/{category}/your-package-name
```

3. **Follow package structure:**
   - Include `README.md` with overview
   - Include `PACKAGE_OVERVIEW.md` for structure
   - Include `IMPLEMENTATION_GUIDE.md` for step-by-step guide
   - Add version number and update history

2. **Update main README.md** to list your new package

## Package Naming

- Use descriptive, lowercase names
- Use hyphens or spaces for multi-word names
- Be consistent with existing packages

**Examples:**
- `workflow mgt/` (framework) - Complete workflow management system
- `numbering & versioning/` (framework) - Version control strategies
- `code-generator/` (tool) - Code generation utilities
- `deployment-sop/` (SOP) - Deployment procedures

