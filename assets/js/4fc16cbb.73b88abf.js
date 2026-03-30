"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[54364],{

/***/ 83653
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_developer_tools_ide_whitelist_guide_md_4fc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-developer-tools-ide-whitelist-guide-md-4fc.json
const site_docs_developer_tools_ide_whitelist_guide_md_4fc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"developer-tools/ide-whitelist-guide","title":"IDE Command Whitelist Guide","description":"Overview","source":"@site/../docs/developer-tools/ide-whitelist-guide.md","sourceDirName":"developer-tools","slug":"/developer-tools/ide-whitelist-guide","permalink":"/ai-dev-kit/docs/developer-tools/ide-whitelist-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/developer-tools/ide-whitelist-guide.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Project Manager Coordination Skill (Archived)","permalink":"/ai-dev-kit/docs/implementation-cycles/archive/project-manager-coordination"},"next":{"title":"Epic Renumbering Release - Version 0.4.14.4+1","permalink":"/ai-dev-kit/docs/changelog/archive/0.4.14.4+1_epic-renumbering"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/developer-tools/ide-whitelist-guide.md


const frontMatter = {};
const contentTitle = 'IDE Command Whitelist Guide';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Problem Solved",
  "id": "problem-solved",
  "level": 2
}, {
  "value": "Configuration Files",
  "id": "configuration-files",
  "level": 2
}, {
  "value": "Primary Configuration",
  "id": "primary-configuration",
  "level": 3
}, {
  "value": "Task Documentation",
  "id": "task-documentation",
  "level": 3
}, {
  "value": "Pattern Categories",
  "id": "pattern-categories",
  "level": 2
}, {
  "value": "1. Python Scripts",
  "id": "1-python-scripts",
  "level": 3
}, {
  "value": "2. Git Operations",
  "id": "2-git-operations",
  "level": 3
}, {
  "value": "3. File Operations",
  "id": "3-file-operations",
  "level": 3
}, {
  "value": "Security Contexts",
  "id": "security-contexts",
  "level": 2
}, {
  "value": "High Security (Manual Approval Required)",
  "id": "high-security-manual-approval-required",
  "level": 3
}, {
  "value": "Medium Security (Configurable Approval)",
  "id": "medium-security-configurable-approval",
  "level": 3
}, {
  "value": "Low Security (Auto-Approve Recommended)",
  "id": "low-security-auto-approve-recommended",
  "level": 3
}, {
  "value": "Adding New Patterns",
  "id": "adding-new-patterns",
  "level": 2
}, {
  "value": "1. Identify Common Command Variations",
  "id": "1-identify-common-command-variations",
  "level": 3
}, {
  "value": "2. Create Regex Pattern",
  "id": "2-create-regex-pattern",
  "level": 3
}, {
  "value": "3. Add to Configuration",
  "id": "3-add-to-configuration",
  "level": 3
}, {
  "value": "4. Test Pattern",
  "id": "4-test-pattern",
  "level": 3
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Pattern Not Matching",
  "id": "pattern-not-matching",
  "level": 3
}, {
  "value": "Pattern Too Broad",
  "id": "pattern-too-broad",
  "level": 3
}, {
  "value": "Pattern Too Narrow",
  "id": "pattern-too-narrow",
  "level": 3
}, {
  "value": "Maintenance",
  "id": "maintenance",
  "level": 2
}, {
  "value": "Monthly Review",
  "id": "monthly-review",
  "level": 3
}, {
  "value": "Performance Monitoring",
  "id": "performance-monitoring",
  "level": 3
}, {
  "value": "Team Updates",
  "id": "team-updates",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "1. Start Specific, Broaden Gradually",
  "id": "1-start-specific-broaden-gradually",
  "level": 3
}, {
  "value": "2. Use Descriptive Names",
  "id": "2-use-descriptive-names",
  "level": 3
}, {
  "value": "3. Provide Examples",
  "id": "3-provide-examples",
  "level": 3
}, {
  "value": "4. Document Security Implications",
  "id": "4-document-security-implications",
  "level": 3
}, {
  "value": "Implementation Status",
  "id": "implementation-status",
  "level": 2
}, {
  "value": "Support",
  "id": "support",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
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
        id: "ide-command-whitelist-guide",
        children: "IDE Command Whitelist Guide"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide explains how to use the pattern-based whitelist configuration to reduce approval friction when running commands in the IDE."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-solved",
      children: "Problem Solved"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Before"
      }), ": Every slight variation of a command required manual approval"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "python \"packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py\" --strict"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "python \"packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py\""
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "git commit -m \"Message 1\""
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "git commit -m \"Message 2\""
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After"
      }), ": Pattern-based approval handles variations automatically"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pattern: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "^python \"packages/frameworks/workflow mgt/scripts/validation/validate_[a-z_]+\\.py\"(\\s+--\\w+)?$"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All validation script variations approved automatically"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-files",
      children: "Configuration Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primary-configuration",
      children: "Primary Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/whitelist-patterns.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose"
        }), ": Defines pattern-based whitelist entries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format"
        }), ": YAML with regex patterns and examples"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-documentation",
      children: "Task Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose"
        }), ": Task tracking and implementation details"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pattern-categories",
      children: "Pattern Categories"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-python-scripts",
      children: "1. Python Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "python_validation_scripts:\n  pattern: '^python \"packages/frameworks/workflow mgt/scripts/validation/validate_[a-z_]+\\.py\"(\\s+--\\w+)?(\\s+--strict)?$'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Covers"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All validation scripts in the framework package"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional flags like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--strict"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different validation script names"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python \"packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py\" --strict"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python \"packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python \"other/script.py\""
        }), " (different path)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-git-operations",
      children: "2. Git Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "git_basic_operations:\n  pattern: '^git (add|status|commit|push|tag|checkout|branch|log|diff|restore|show|reset|merge|pull|fetch)(\\s+-[a-zA-Z])?(\\s+.*)?$'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Covers"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All standard git commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optional flags and parameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any commit message or branch name"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git add -A"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git commit -m \"Any message\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push origin any-branch"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git-custom-command"
        }), " (not in allowed commands)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-file-operations",
      children: "3. File Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "file_edit_operations:\n  pattern: '^(edit|multi_edit|edit_notebook|write_to_file)(\\s+.*)?$'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Covers"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All file editing operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any file path"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any content"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "edit --file_path any/path/file.md --old_string \"old\" --new_string \"new\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "write_to_file --target_file new/file.md --code_content \"content\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "custom-edit-command"
        }), " (not in allowed operations)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-contexts",
      children: "Security Contexts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-security-manual-approval-required",
      children: "High Security (Manual Approval Required)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git operations (can change repository state)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File editing operations (can modify files)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Terminal commands (can execute arbitrary commands)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medium-security-configurable-approval",
      children: "Medium Security (Configurable Approval)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python scripts (can execute code)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File searches (can read sensitive data)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Directory operations (can explore file system)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "low-security-auto-approve-recommended",
      children: "Low Security (Auto-Approve Recommended)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory operations (internal data management)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Todo operations (task management)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-new-patterns",
      children: "Adding New Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-identify-common-command-variations",
      children: "1. Identify Common Command Variations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Collect examples of commands that need approval\npython \"packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py\" --strict\npython \"packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py\"\npython \"packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py\" --verbose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-create-regex-pattern",
      children: "2. Create Regex Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-regex",
        children: "^python \"packages/frameworks/workflow mgt/scripts/validation/validate_[a-z_]+\\.py\"(\\s+--\\w+)?(\\s+--strict)?$\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-add-to-configuration",
      children: "3. Add to Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "new_pattern_name:\n  pattern: '^python \"packages/frameworks/workflow mgt/scripts/validation/validate_[a-z_]+\\.py\"(\\s+--\\w+)?(\\s+--strict)?$'\n  description: \"Description of what this pattern covers\"\n  examples:\n    - 'Example command 1'\n    - 'Example command 2'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-test-pattern",
      children: "4. Test Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test against known good commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test against potentially dangerous commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify pattern isn't too broad or too narrow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-not-matching",
      children: "Pattern Not Matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check regex syntax"
        }), ": Use online regex testers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify escaping"
        }), ": Special characters may need escaping"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test with examples"
        }), ": Ensure pattern matches expected commands"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-too-broad",
      children: "Pattern Too Broad"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add anchors"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "^"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$"
        }), " to match start/end"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Be more specific"
        }), ": Include more path or parameter details"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use character classes"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[a-zA-Z0-9_-]"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-too-narrow",
      children: "Pattern Too Narrow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remove restrictions"
        }), ": Loosen parameter requirements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add alternatives"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "|"
        }), " for multiple options"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use quantifiers"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?"
        }), " for optional parts"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maintenance",
      children: "Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monthly-review",
      children: "Monthly Review"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check pattern usage logs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify new command patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove unused patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-monitoring",
      children: "Performance Monitoring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor pattern matching performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify slow regex patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize frequently used patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "team-updates",
      children: "Team Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Share new patterns with team"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document pattern changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train team members on usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-start-specific-broaden-gradually",
      children: "1. Start Specific, Broaden Gradually"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Too broad (security risk)\ndangerous_pattern: '^.*$'\n\n# Better (specific and safe)\nsafe_pattern: '^python \"packages/frameworks/workflow mgt/scripts/validation/[a-z_]+\\.py\".*$'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-use-descriptive-names",
      children: "2. Use Descriptive Names"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Bad\npattern1: '.*'\n\n# Good\npython_validation_scripts: '^python \"packages/frameworks/workflow mgt/scripts/validation/.*\\.py\".*$'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-provide-examples",
      children: "3. Provide Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "good_pattern:\n  pattern: '^git commit.*$'\n  description: \"Git commit operations\"\n  examples:\n    - 'git commit -m \"Feature: Add new feature\"'\n    - 'git commit -m \"Fix: Resolve issue #123\"'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-document-security-implications",
      children: "4. Document Security Implications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "high_risk_pattern:\n  pattern: '^rm.*$'\n  description: \"File deletion operations (HIGH RISK)\"\n  security_context: \"high_security\"\n  warning: \"This pattern allows file deletion. Use with caution.\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-status",
      children: "Implementation Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Configuration file created"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Core patterns implemented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Documentation created"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "IDE integration testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Team training completed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Performance monitoring setup"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "support",
      children: "Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For questions or issues with the whitelist configuration:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check this documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the task document: T107"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test patterns with regex testers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consult with team members"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated"
      }), ": 2026-03-07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version"
      }), ": 1.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintainer"
      }), ": Development Team"]
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