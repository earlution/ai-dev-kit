# Installing AI Dev Kit Frameworks in Your Project

**Quick Start Guide for Agents and Developers**

This document provides a clear entry point for installing AI Dev Kit frameworks into your project. All installation documentation is available in the `ai-dev-kit` repository.

---

## 🎯 Quick Answer

**Yes, all installation documentation is available in the ai-dev-kit repository.** When you point your project at the ai-dev-kit repo, agents can find and follow complete installation instructions.

---

## 📚 Documentation Location

All installation documentation is located in:
```
docs/documentation/user-docs/
```

**Key Documents:**
- **Main Installation Guide:** [`framework-dependency-installation-guide.md`](docs/documentation/user-docs/framework-dependency-installation-guide.md)
- **Integration Guide:** [`framework-dependency-integration-guide.md`](docs/documentation/user-docs/framework-dependency-integration-guide.md)
- **Use Cases:** [`framework-dependency-use-cases.md`](docs/documentation/user-docs/framework-dependency-use-cases.md)
- **FAQ:** [`framework-dependency-faq.md`](docs/documentation/user-docs/framework-dependency-faq.md)
- **Troubleshooting:** [`framework-dependency-troubleshooting-guide.md`](docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md)

---

## 🚀 Installation Methods

### Method 1: GitHub Releases (Recommended - Available Now)

Install framework packages directly from GitHub Releases:

```bash
# Using installation script
python3 install_package_from_release.py kanban 2.1.0 \
    --repo earlution/ai-dev-kit \
    --install-dir packages/frameworks

# Or download manually
# See: packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md
```

**Documentation:**
- [`PACKAGE_INSTALLATION_GUIDE.md`](packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md) - Complete package installation guide

### Method 2: Git Submodule (Available Now)

Add ai-dev-kit as a Git submodule:

```bash
# Add ai-dev-kit as submodule
git submodule add https://github.com/earlution/ai-dev-kit.git .ai-dev-kit

# Checkout specific version
cd .ai-dev-kit
git checkout v0.6.6.10+13  # Or latest tag
cd ..

# Copy frameworks to your project
cp -r .ai-dev-kit/packages/frameworks/workflow\ mgt/ ./frameworks/workflow-mgmt
```

**Documentation:**
- [`framework-dependency-installation-guide.md`](docs/documentation/user-docs/framework-dependency-installation-guide.md#method-1-git-submodules-phase-1---available-now)

### Method 3: CLI Tool (Coming Soon)

```bash
# Install CLI tool
pip install ai-dev-kit

# Initialize in your project
ai-dev-kit init

# Install frameworks
ai-dev-kit install workflow-mgmt@2.1.3
ai-dev-kit install kanban@2.1.0
```

**Documentation:**
- [`framework-dependency-cli-reference.md`](docs/documentation/user-docs/framework-dependency-cli-reference.md)

---

## 📦 Available Frameworks

| Framework | Version | Installation Guide |
|-----------|---------|-------------------|
| **Workflow Management** | 2.1.4 | [`workflow mgt/README.md`](packages/frameworks/workflow mgt/README.md) |
| **Kanban** | 2.1.0 | [`kanban/README.md`](packages/frameworks/kanban/README.md) |
| **Numbering & Versioning** | 2.0.0 | [`numbering & versioning/README.md`](packages/frameworks/numbering & versioning/README.md) |
| **Document Lifecycle** | 1.0.0 | [`doc-lifecycle/README.md`](packages/frameworks/doc-lifecycle/README.md) |
| **Debug Path** | 1.0.0 | [`debug-path/README.md`](packages/frameworks/debug-path/README.md) |

---

## 🤖 For AI Agents

**Agent Instructions:**

When installing frameworks in a project, follow these steps:

1. **Read the Main Installation Guide:**
   - Path: `docs/documentation/user-docs/framework-dependency-installation-guide.md`
   - This contains complete installation procedures

2. **Choose Installation Method:**
   - **GitHub Releases** (recommended): Use `install_package_from_release.py`
   - **Git Submodule**: Add ai-dev-kit as submodule, copy frameworks
   - **CLI Tool**: Use `ai-dev-kit install` (when available)

3. **Follow Framework-Specific Instructions:**
   - Each framework has a `README.md` with installation steps
   - **Important:** Use interactive installers (e.g., `install_kanban_framework.py`) - DO NOT manually copy from `docs/project-management/kanban/epics/`

4. **Run Framework Installers:**
   - **Workflow Management:** `install_release_workflow.py`
   - **Kanban:** `install_kanban_framework.py`
   - These installers handle configuration and setup automatically

5. **Verify Installation:**
   - Run validation scripts
   - Test framework functionality
   - Check configuration files

6. **Reference Documentation:**
   - Use Cases: `framework-dependency-use-cases.md`
   - Integration: `framework-dependency-integration-guide.md`
   - Troubleshooting: `framework-dependency-troubleshooting-guide.md`

---

## 📋 Installation Checklist

- [ ] Read main installation guide
- [ ] Choose installation method (GitHub Releases recommended)
- [ ] Install framework packages
- [ ] Run framework-specific installers
- [ ] Configure framework settings
- [ ] Run validation scripts
- [ ] Test framework functionality
- [ ] Update project documentation

---

## 🔗 Quick Links

- **Main Installation Guide:** [`docs/documentation/user-docs/framework-dependency-installation-guide.md`](docs/documentation/user-docs/framework-dependency-installation-guide.md)
- **Package Installation:** [`packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md`](packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md)
- **Use Cases:** [`docs/documentation/user-docs/framework-dependency-use-cases.md`](docs/documentation/user-docs/framework-dependency-use-cases.md)
- **FAQ:** [`docs/documentation/user-docs/framework-dependency-faq.md`](docs/documentation/user-docs/framework-dependency-faq.md)
- **Troubleshooting:** [`docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md`](docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md)

---

## ✅ Verification

After installation, verify everything works:

```bash
# Test Workflow Management
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py

# Test Release Workflow
# Type "RW" in your AI assistant

# Test Kanban
cd ../kanban
python3 scripts/install_kanban_framework.py --help
```

---

**Last Updated:** 2025-12-18  
**Repository:** https://github.com/earlution/ai-dev-kit  
**Documentation:** `docs/documentation/user-docs/`

