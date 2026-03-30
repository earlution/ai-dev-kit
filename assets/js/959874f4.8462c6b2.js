"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[10777],{

/***/ 22237
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_existing_project_rollout_checklist_md_959_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-existing-project-rollout-checklist-md-959.json
const site_docs_documentation_user_docs_existing_project_rollout_checklist_md_959_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"documentation/user-docs/EXISTING_PROJECT_ROLLOUT_CHECKLIST","title":"Existing Project Rollout Checklist","description":"Purpose: Quick reference checklist for rolling out ai-dev-kit frameworks to existing projects","source":"@site/../docs/documentation/user-docs/EXISTING_PROJECT_ROLLOUT_CHECKLIST.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/EXISTING_PROJECT_ROLLOUT_CHECKLIST","permalink":"/ai-dev-kit/docs/documentation/user-docs/EXISTING_PROJECT_ROLLOUT_CHECKLIST","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/EXISTING_PROJECT_ROLLOUT_CHECKLIST.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-22T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Post-Implementation Review: Story &lbrace;N&rbrace;","permalink":"/ai-dev-kit/docs/documentation/templates/story-pir-template"},"next":{"title":"Apple Platform Setup Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/apple-platform-setup-guide"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/documentation/user-docs/EXISTING_PROJECT_ROLLOUT_CHECKLIST.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-22T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Existing Project Rollout Checklist';

const assets = {

};



const toc = [{
  "value": "🎯 Quick Decision Tree",
  "id": "-quick-decision-tree",
  "level": 2
}, {
  "value": "📋 Full Stack Rollout (RW + Kanban + Versioning)",
  "id": "-full-stack-rollout-rw--kanban--versioning",
  "level": 2
}, {
  "value": "Step 1: Copy Framework Packages",
  "id": "step-1-copy-framework-packages",
  "level": 3
}, {
  "value": "Step 2: Install Release Workflow (RW)",
  "id": "step-2-install-release-workflow-rw",
  "level": 3
}, {
  "value": "Step 3: Setup Kanban Board",
  "id": "step-3-setup-kanban-board",
  "level": 3
}, {
  "value": "Step 4: Create Version File",
  "id": "step-4-create-version-file",
  "level": 3
}, {
  "value": "Step 5: Test Installation",
  "id": "step-5-test-installation",
  "level": 3
}, {
  "value": "Step 6: Review Configuration",
  "id": "step-6-review-configuration",
  "level": 3
}, {
  "value": "🚀 RW Only Rollout",
  "id": "-rw-only-rollout",
  "level": 2
}, {
  "value": "Step 1: Copy Workflow Package",
  "id": "step-1-copy-workflow-package",
  "level": 3
}, {
  "value": "Step 2: Run RW Installer",
  "id": "step-2-run-rw-installer",
  "level": 3
}, {
  "value": "Step 3: Create Version File",
  "id": "step-3-create-version-file",
  "level": 3
}, {
  "value": "Step 4: Test",
  "id": "step-4-test",
  "level": 3
}, {
  "value": "📊 Kanban Only Rollout",
  "id": "-kanban-only-rollout",
  "level": 2
}, {
  "value": "Step 1: Copy Kanban Package",
  "id": "step-1-copy-kanban-package",
  "level": 3
}, {
  "value": "Step 2: Run Kanban Installer",
  "id": "step-2-run-kanban-installer",
  "level": 3
}, {
  "value": "Step 3: Verify",
  "id": "step-3-verify",
  "level": 3
}, {
  "value": "⚠️ Critical Warnings",
  "id": "️-critical-warnings",
  "level": 2
}, {
  "value": "DO NOT:",
  "id": "do-not",
  "level": 3
}, {
  "value": "DO:",
  "id": "do",
  "level": 3
}, {
  "value": "📚 Reference Documentation",
  "id": "-reference-documentation",
  "level": 2
}, {
  "value": "✅ Post-Rollout Checklist",
  "id": "-post-rollout-checklist",
  "level": 2
}, {
  "value": "🆘 Troubleshooting",
  "id": "-troubleshooting",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "existing-project-rollout-checklist",
        children: "Existing Project Rollout Checklist"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Quick reference checklist for rolling out ai-dev-kit frameworks to existing projects", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-quick-decision-tree",
      children: "🎯 Quick Decision Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Which frameworks do you want?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All frameworks"
        }), " → Follow \"Full Stack\" path below"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Just Release Workflow (RW)"
        }), " → Follow \"RW Only\" path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Just Kanban"
        }), " → Follow \"Kanban Only\" path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW + Kanban"
        }), " → Follow \"Full Stack\" path (recommended)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-full-stack-rollout-rw--kanban--versioning",
      children: "📋 Full Stack Rollout (RW + Kanban + Versioning)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-copy-framework-packages",
      children: "Step 1: Copy Framework Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# From ai-dev-kit repository, copy frameworks to your project\ncd /path/to/your/project\n\n# Copy workflow management framework\ncp -r /path/to/ai-dev-kit/packages/frameworks/workflow\\ mgt/* ./\n\n# Copy Kanban framework  \ncp -r /path/to/ai-dev-kit/packages/frameworks/kanban/* ./\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-install-release-workflow-rw",
      children: "Step 2: Install Release Workflow (RW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run RW installer (interactive - recommended)\npython scripts/install_release_workflow.py --mode c\n\n# OR preview first\npython scripts/install_release_workflow.py --mode c --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What this does:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Generates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " with your project paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " with RW trigger section"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Patches workflow YAML files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-setup-kanban-board",
      children: "Step 3: Setup Kanban Board"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run Kanban installer (REQUIRED - don't manually copy epics!)\npython3 scripts/install_kanban_framework.py --mode fresh\n\n# OR if you have existing Kanban structure:\npython3 scripts/install_kanban_framework.py --mode migration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What this does:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Installs canonical epic templates (NOT ai-dev-kit's actual epics)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Contextualizes Epic 1 with your project name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Only installs canonical core epics (1-8, 10, 18, 22, 23)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-create-version-file",
      children: "Step 4: Create Version File"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create version file at path specified in rw-config.yaml\n# Example: src/yourproject/version.py\nmkdir -p src/yourproject\ncat > src/yourproject/version.py << 'EOF'\nVERSION_RC = 0\nVERSION_EPIC = 1\nVERSION_STORY = 1\nVERSION_TASK = 1\nVERSION_BUILD = 1\nVERSION_STRING = f\"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}\"\nEOF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-5-test-installation",
      children: "Step 5: Test Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test RW\ngit checkout -b epic/1-test\n# e.g. RW E1S01T01 or RW E1:S01:T01 in Cursor (FR-060 — task id same message as RW)\n\n# Test Kanban installer worked\nls docs/project-management/kanban/epics/\n# Should show: Epic-1, Epic-2, Epic-3, Epic-4, Epic-5, Epic-6, Epic-7, Epic-8, Epic-10, Epic-18, Epic-22, Epic-23\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-6-review-configuration",
      children: "Step 6: Review Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Review generated config\ncat rw-config.yaml\n\n# Verify paths match your project structure\n# Update if needed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rw-only-rollout",
      children: "🚀 RW Only Rollout"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-copy-workflow-package",
      children: "Step 1: Copy Workflow Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\\ mgt/* /path/to/your/project/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-run-rw-installer",
      children: "Step 2: Run RW Installer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /path/to/your/project\npython scripts/install_release_workflow.py --mode a\n# Mode A = Simple RW (no Kanban)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-create-version-file",
      children: "Step 3: Create Version File"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create at path specified in rw-config.yaml\n# See Step 4 above for example\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-test",
      children: "Step 4: Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git checkout -b epic/1-test\n# e.g. RW E1S01T01 or RW E1:S01:T01 in Cursor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-kanban-only-rollout",
      children: "📊 Kanban Only Rollout"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-copy-kanban-package",
      children: "Step 1: Copy Kanban Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cp -r /path/to/ai-dev-kit/packages/frameworks/kanban/* /path/to/your/project/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-run-kanban-installer",
      children: "Step 2: Run Kanban Installer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /path/to/your/project\npython3 scripts/install_kanban_framework.py --mode fresh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-verify",
      children: "Step 3: Verify"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check epics installed\nls docs/project-management/kanban/epics/\n\n# Check Epic 1 is contextualized with your project name\ngrep \"Epic 1:\" docs/project-management/kanban/epics/Epic-1/Epic-1.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-critical-warnings",
      children: "⚠️ Critical Warnings"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "do-not",
      children: "DO NOT:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Manually copy epics from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/"
        }), " (these are ai-dev-kit's actual epics, not templates)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Skip the installers (they handle configuration automatically)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Use ai-dev-kit's actual Kanban board (use canonical templates instead)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "do",
      children: "DO:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Use the installers (they're the ONLY supported method)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Review ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " after installation"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Test RW on an epic branch before committing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Verify Kanban epics are contextualized with your project name"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-reference-documentation",
      children: "📚 Reference Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detailed Guides:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
          children: "Installation Guide"
        }), " - Complete installation methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases",
          children: "Use Cases Guide"
        }), " - All adoption patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide",
          children: "Integration Guide"
        }), " - Migration from copy-paste"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-post-template-setup-guide",
          children: "Post-Template Setup Guide"
        }), " - Customization steps"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework READMEs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[Workflow Management README](../../../packages/frameworks/workflow mgt/README.md) - RW quickstart and details"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "../../../packages/frameworks/kanban/README.md",
          children: "Kanban README"
        }), " - Kanban quickstart and details"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quick References:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW Installer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/install_release_workflow.py --help"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban Installer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/install_kanban_framework.py --help"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Config Schema: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow mgt/config/rw-config-schema.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-post-rollout-checklist",
      children: "✅ Post-Rollout Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW installer completed successfully"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " generated and paths verified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " updated with RW trigger section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Kanban installer completed successfully"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Canonical epics installed (not ai-dev-kit's epics)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Epic 1 contextualized with project name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version file created at correct path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW tested on epic branch (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E1S01T01"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E1:S01:T01"
        }), " in Cursor — FR-060)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Kanban board views updated (if needed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All changes committed to Git"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-troubleshooting",
      children: "🆘 Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW doesn't work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " has RW trigger section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-060:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW <task_id>"
        }), " in one message (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E5S01T01"
        }), "); bare ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " aborts by design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " paths are correct"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure you're on an epic branch (not main)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Restart Cursor to reload ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban epics show \"AI Dev Kit\":"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You manually copied instead of using installer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remove epics: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rm -rf docs/project-management/kanban/epics/Epic-*"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run installer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 scripts/install_kanban_framework.py --mode fresh"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version file not found:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check path in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create version file at specified path"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify import paths in validation scripts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ready to roll out?"
      }), " Start with Step 1 above! 🚀"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);