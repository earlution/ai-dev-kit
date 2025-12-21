# AI Dev Kit

<div align="center">

<!-- Badges: Version is shown in text below, other badges use static Shields.io -->
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![Python](https://img.shields.io/badge/python-3.8+-blue.svg)

**A comprehensive toolkit for AI-assisted development workflows**

**Version:** `v0.6.6.10+17` | **Last Updated:** 2025-12-18

[Features](#features) • [Installation](#getting-started) • [Install in Your Project](INSTALL_IN_YOUR_PROJECT.md) • [Documentation](docs/documentation) • [Report Bug](https://github.com/earlution/ai-dev-kit/issues) • [Request Feature](https://github.com/earlution/ai-dev-kit/issues)

</div>

---

## 🚀 Quick Start / Bootstrap

**Not sure where to start? Choose your path:**

### 🎯 I want to use AI Dev Kit frameworks in my project

**→ Start here:** [`INSTALL_IN_YOUR_PROJECT.md`](INSTALL_IN_YOUR_PROJECT.md)

- **New project?** Install frameworks as dependencies (recommended)
- **Existing project?** Migrate from copy-paste to package management
- **Just exploring?** Browse frameworks and documentation first

**Quick Install (GitHub Releases):**
```bash
python3 install_package_from_release.py kanban 2.1.0 \
    --repo earlution/ai-dev-kit \
    --install-dir packages/frameworks
```

### 📚 I want to understand what AI Dev Kit is

**→ Start here:** [About The Project](#about-the-project)

- Read the problem statement and vision
- Explore available frameworks
- Review design principles
- Check out the roadmap

**Key Documents:**
- [Vision and Purpose](docs/documentation/ai-dev-kit-vision-and-purpose.md)
- [Frameworks Overview](#frameworks)

### 🔧 I want to contribute or develop

**→ Start here:** [Contributing](#contributing) and [Roadmap](#roadmap)

- Review contributing guidelines
- Check open issues and feature requests
- Explore the codebase structure
- Join discussions

**Developer Resources:**
- [Architecture Documentation](docs/architecture)
- [Framework Development Guides](packages/frameworks)
- [Workflow Documentation](packages/frameworks/workflow mgt/docs)

### 🔍 I'm looking for a specific framework

**→ Jump to:** [Frameworks](#frameworks)

**Available Frameworks:**
- **Workflow Management** (`v2.1.3`) - Release Workflow, UKW, PVW automation
- **Kanban** (`v2.1.0`) - Project management and task tracking
- **Numbering & Versioning** (`v2.0.0`) - Version schema and policies
- **Document Lifecycle** (`v1.0.0`) - Documentation management
- **Debug Path** (`v1.0.0`) - Debugging utilities

Each framework includes installation guides, usage examples, and documentation.

---

## 📋 Table of Contents

- [Quick Start / Bootstrap](#-quick-start--bootstrap)
- [About The Project](#about-the-project)
  - [Features](#features)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Frameworks](#frameworks)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## About The Project

**AI Dev Kit** is a comprehensive toolkit designed to support AI-assisted development workflows. It provides modular, reusable frameworks for project management, versioning, workflow automation, and documentation lifecycle management.

### Why AI Dev Kit?

**The Problem:** Managing multiple software projects leads to project drift—each project implements slightly different structures, workflows, and conventions. This causes you to reinvent the wheel, repeat the same remedial work, and maintain inconsistent solutions across projects.

**The Solution:** AI Dev Kit serves as the **source of truth** for software project infrastructure. Projects focus on their domain-specific code, while all infrastructure, planning, workflows, and documentation patterns come from shared, evolving frameworks.

**The Vision:** Stop reinventing the wheel. Eliminate drift. Focus on building. Let AI Dev Kit handle the infrastructure.

📖 **[Read the full Vision and Purpose document →](docs/documentation/ai-dev-kit-vision-and-purpose.md)**

### Design Principles

The toolkit is designed to be:
- **Modular:** Use only what you need, combine frameworks as required
- **Portable:** Frameworks can be installed as dependencies or copy-pasted
- **Auto-updating:** Framework dependencies can receive automatic updates
- **Agent-friendly:** Designed for AI-assisted development workflows

... (rest of README unchanged)
