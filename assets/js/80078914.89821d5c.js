"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[1706],{

/***/ 26321
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_3_story_002_versioning_cookbook_and_examples_t_008_dual_versioning_package_audit_report_md_800_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-3-story-002-versioning-cookbook-and-examples-t-008-dual-versioning-package-audit-report-md-800.json
const site_docs_project_management_kanban_epics_epic_3_story_002_versioning_cookbook_and_examples_t_008_dual_versioning_package_audit_report_md_800_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples/T008-dual-versioning-package-audit-report","title":"Dual-Versioning Package Audit Report","description":"TaskS02:T08 – Audit dual-versioning application across packages and propose strategy","source":"@site/../docs/project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples/T008-dual-versioning-package-audit-report.md","sourceDirName":"project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples","slug":"/project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples/T008-dual-versioning-package-audit-report","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples/T008-dual-versioning-package-audit-report","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples/T008-dual-versioning-package-audit-report.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Core Versioning Scenarios","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples/T001-core-versioning-scenarios"},"next":{"title":"Package Versioning: Agentic Approach (Revised)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples/T008-package-versioning-agentic-approach"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples/T008-dual-versioning-package-audit-report.md


const frontMatter = {};
const contentTitle = 'Dual-Versioning Package Audit Report';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Package Inventory",
  "id": "1-package-inventory",
  "level": 2
}, {
  "value": "1.1 Framework Packages",
  "id": "11-framework-packages",
  "level": 3
}, {
  "value": "1.1.1 Workflow Management (<code>packages/frameworks/workflow mgt/</code>)",
  "id": "111-workflow-management-packagesframeworksworkflow-mgt",
  "level": 4
}, {
  "value": "1.1.2 Numbering &amp; Versioning (<code>packages/frameworks/numbering &amp; versioning/</code>)",
  "id": "112-numbering--versioning-packagesframeworksnumbering--versioning",
  "level": 4
}, {
  "value": "1.1.3 Kanban (<code>packages/frameworks/kanban/</code>)",
  "id": "113-kanban-packagesframeworkskanban",
  "level": 4
}, {
  "value": "1.1.4 Debug Path (<code>packages/frameworks/debug-path/</code>)",
  "id": "114-debug-path-packagesframeworksdebug-path",
  "level": 4
}, {
  "value": "1.1.5 Doc Lifecycle (<code>packages/frameworks/doc-lifecycle/</code>)",
  "id": "115-doc-lifecycle-packagesframeworksdoc-lifecycle",
  "level": 4
}, {
  "value": "2. Dual-Versioning Strategy Analysis",
  "id": "2-dual-versioning-strategy-analysis",
  "level": 2
}, {
  "value": "2.1 Current State Assessment",
  "id": "21-current-state-assessment",
  "level": 3
}, {
  "value": "2.2 Applicability Analysis",
  "id": "22-applicability-analysis",
  "level": 3
}, {
  "value": "2.2.1 For Current Packages (Documentation-Only)",
  "id": "221-for-current-packages-documentation-only",
  "level": 4
}, {
  "value": "2.2.2 For Future Published Packages",
  "id": "222-for-future-published-packages",
  "level": 4
}, {
  "value": "2.3 SemVer Continuity Problem",
  "id": "23-semver-continuity-problem",
  "level": 3
}, {
  "value": "3. Proposed Solution",
  "id": "3-proposed-solution",
  "level": 2
}, {
  "value": "3.1 Strategy: Independent SemVer for Packages",
  "id": "31-strategy-independent-semver-for-packages",
  "level": 3
}, {
  "value": "3.2 Implementation Pattern",
  "id": "32-implementation-pattern",
  "level": 3
}, {
  "value": "3.2.1 For Documentation Packages (Current)",
  "id": "321-for-documentation-packages-current",
  "level": 4
}, {
  "value": "3.2.2 For Future Published Packages",
  "id": "322-for-future-published-packages",
  "level": 4
}, {
  "value": "3.3 Version Mapping Strategy (If Dual-Versioning Required)",
  "id": "33-version-mapping-strategy-if-dual-versioning-required",
  "level": 3
}, {
  "value": "4. Recommendations",
  "id": "4-recommendations",
  "level": 2
}, {
  "value": "4.1 For ai-dev-kit Repository",
  "id": "41-for-ai-dev-kit-repository",
  "level": 3
}, {
  "value": "4.1.1 Current Packages (Documentation-Only)",
  "id": "411-current-packages-documentation-only",
  "level": 4
}, {
  "value": "4.1.2 Future Published Packages",
  "id": "412-future-published-packages",
  "level": 4
}, {
  "value": "4.2 For Adopting Projects",
  "id": "42-for-adopting-projects",
  "level": 3
}, {
  "value": "4.2.1 Guidance on Dual-Versioning vs. Independent SemVer",
  "id": "421-guidance-on-dual-versioning-vs-independent-semver",
  "level": 4
}, {
  "value": "4.2.2 Implementation Guidance",
  "id": "422-implementation-guidance",
  "level": 4
}, {
  "value": "5. Conclusion",
  "id": "5-conclusion",
  "level": 2
}, {
  "value": "5.1 Current State",
  "id": "51-current-state",
  "level": 3
}, {
  "value": "5.2 Key Insights",
  "id": "52-key-insights",
  "level": 3
}, {
  "value": "5.3 Recommendations",
  "id": "53-recommendations",
  "level": 3
}, {
  "value": "6. Next Steps",
  "id": "6-next-steps",
  "level": 2
}, {
  "value": "6.1 Immediate Actions",
  "id": "61-immediate-actions",
  "level": 3
}, {
  "value": "6.2 Future Considerations",
  "id": "62-future-considerations",
  "level": 3
}, {
  "value": "7. References",
  "id": "7-references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "dual-versioning-package-audit-report",
        children: "Dual-Versioning Package Audit Report"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E3:S02", ":T08", " – Audit dual-versioning application across packages and propose strategy", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-08", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 0.3.2.8+1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This report audits the current state of package versioning across all packages in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " repository, analyzes the applicability of the dual-versioning strategy for package management, and proposes a comprehensive solution for consistent and reliable package versioning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Three framework packages have version numbers documented in README files (Workflow Management: 2.0.0, Numbering & Versioning: 2.0.0, Kanban: 1.0.0)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "No package manifest files found"
        }), " (no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pubspec.yaml"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setup.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pyproject.toml"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Cargo.toml"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual-versioning strategy may not be applicable"
        }), " - Packages are documentation-only, not published to package managers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer continuity concern validated"
        }), " - Generated SemVers from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " would not follow-on numerically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Current approach is appropriate"
        }), " - Package versions are independent SemVer for documentation purposes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For documentation packages:"
        }), " Continue using independent SemVer (current approach)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For future published packages:"
        }), " Implement independent SemVer tracking separate from project version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For adopting projects:"
        }), " Provide guidance on when to use dual-versioning vs. independent SemVer"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-package-inventory",
      children: "1. Package Inventory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-framework-packages",
      children: "1.1 Framework Packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "111-workflow-management-packagesframeworksworkflow-mgt",
      children: ["1.1.1 Workflow Management (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow mgt/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Version:"
      }), " 2.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "README.md"
      }), " (line 11)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version History:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version 1.0.0 → 1.1.0 → 1.2.0 → 2.0.0 (mentioned in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow-agent-execution.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User mentioned versions 1.0, 1.1, 1.2 pattern (likely referring to this history)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Manifest Files:"
      }), " ❌ None found"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " (npm)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pubspec.yaml"
        }), " (pub.dev)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setup.py"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pyproject.toml"
        }), " (PyPI)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Cargo.toml"
        }), " (crates.io)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Type:"
      }), " Documentation + Scripts (Python validation scripts)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Publishing Status:"
      }), " Not published to any package manager", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning Approach:"
      }), " Independent SemVer in README (not derived from project version)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files Containing Version References:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:** 2.0.0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/release-workflow.yaml"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version: 2.0.0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-rw-trigger-section.md"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:** 2.2.0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        }), ": Version history (1.0.0, 1.1.0, 1.2.0)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "112-numbering--versioning-packagesframeworksnumbering--versioning",
      children: ["1.1.2 Numbering & Versioning (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/numbering & versioning/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Version:"
      }), " 2.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "README.md"
      }), " (line 15), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PACKAGE_OVERVIEW.md"
      }), " (line 11)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version History:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version 1.0 → 2.0.0 (mentioned in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "versioning-policy.md"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Manifest Files:"
      }), " ❌ None found"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " (npm)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pubspec.yaml"
        }), " (pub.dev)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setup.py"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pyproject.toml"
        }), " (PyPI)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Cargo.toml"
        }), " (crates.io)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Type:"
      }), " Documentation only (pure policy package)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Publishing Status:"
      }), " Not published to any package manager", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning Approach:"
      }), " Independent SemVer in README (not derived from project version)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files Containing Version References:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:** 2.0.0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PACKAGE_OVERVIEW.md"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:** 2.0.0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/versioning-policy.md"
        }), ": Version history table"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "113-kanban-packagesframeworkskanban",
      children: ["1.1.3 Kanban (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "README.md"
      }), " (line 14, YAML format)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version History:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version 1.0.0 (initial release, mentioned in version history section)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Manifest Files:"
      }), " ❌ None found"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " (npm)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pubspec.yaml"
        }), " (pub.dev)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setup.py"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pyproject.toml"
        }), " (PyPI)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Cargo.toml"
        }), " (crates.io)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Type:"
      }), " Documentation + Templates", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Publishing Status:"
      }), " Not published to any package manager", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning Approach:"
      }), " Independent SemVer in README (not derived from project version)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files Containing Version References:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version: \"1.0.0\""
        }), " (YAML format)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), ": Version history section (v1.0.0)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "114-debug-path-packagesframeworksdebug-path",
      children: ["1.1.4 Debug Path (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/debug-path/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Version:"
      }), " ❌ Not found", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Location:"
      }), " N/A", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Manifest Files:"
      }), " ❌ None found", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Type:"
      }), " Documentation + Templates", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Publishing Status:"
      }), " Not published", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning Approach:"
      }), " No version tracking"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "115-doc-lifecycle-packagesframeworksdoc-lifecycle",
      children: ["1.1.5 Doc Lifecycle (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/doc-lifecycle/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Version:"
      }), " ❌ Not found", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Location:"
      }), " N/A", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Manifest Files:"
      }), " ❌ None found", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Type:"
      }), " Documentation + Policies", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Publishing Status:"
      }), " Not published", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning Approach:"
      }), " No version tracking"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-dual-versioning-strategy-analysis",
      children: "2. Dual-Versioning Strategy Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-current-state-assessment",
      children: "2.1 Current State Assessment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " The dual-versioning strategy documented in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/dual-versioning-package-managers.md"
      }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not currently applied"
      }), " to any packages in the repository."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No package manifest files exist that would require SemVer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package versions are tracked independently in README files"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package versions are not derived from project version (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No sync scripts or automation exists to maintain dual versions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-applicability-analysis",
      children: "2.2 Applicability Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "221-for-current-packages-documentation-only",
      children: "2.2.1 For Current Packages (Documentation-Only)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conclusion:"
      }), " Dual-versioning is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT applicable"
      }), " for current packages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reasoning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages are documentation-only, not published to package managers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No package manifest files require SemVer format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Independent SemVer in README is sufficient for documentation versioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No need to synchronize with project version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Approach (Appropriate):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package versions are independent SemVer (e.g., 1.0.0, 2.0.0)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versions are manually updated in README files when package content changes significantly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No automation or sync scripts needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "222-for-future-published-packages",
      children: "2.2.2 For Future Published Packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conclusion:"
      }), " Dual-versioning ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAY be applicable"
      }), " if packages are published to package managers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Considerations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If packages are published to npm, pub.dev, PyPI, etc., SemVer will be required"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["However, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "independent SemVer tracking is recommended"
        }), " over derived SemVer"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reasoning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package versions should reflect package-specific changes, not project-wide changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A package may not change even if the project version changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package version history should be continuous and meaningful to package consumers"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Derived SemVer from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " would create non-continuous version sequences"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-semver-continuity-problem",
      children: "2.3 SemVer Continuity Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "User Concern Validated:"
      }), " ✅"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Statement:"
      }), "\nIf SemVer is derived from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " using mapping strategies, the resulting SemVer versions will ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not follow-on numerically"
      }), ", breaking package version history continuity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Problem:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Version Sequence:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.2.1+1  →  SemVer: 0.3.201 (Strategy 4: MINOR = EPIC*100+STORY, PATCH = TASK*100+BUILD)\n0.3.2.2+1  →  SemVer: 0.3.202\n0.3.2.3+1  →  SemVer: 0.3.203\n0.7.4.1+1  →  SemVer: 0.7.401  ← Jumps from 0.3.203 to 0.7.401\n0.7.4.2+1  →  SemVer: 0.7.402\n0.2.5.1+1  →  SemVer: 0.2.501  ← Goes backwards from 0.7.402 to 0.2.501\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issues:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-continuous sequence:"
        }), " Versions jump around (0.3.203 → 0.7.401 → 0.2.501)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backwards progression:"
        }), " Later project versions can produce earlier SemVer (0.7.402 → 0.2.501)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package manager confusion:"
        }), " Package managers expect monotonically increasing versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consumer confusion:"
        }), " Package consumers see version history that doesn't make sense"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package managers may reject non-monotonic versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency resolution may fail"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consumers cannot understand version progression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes may not be properly signaled"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-proposed-solution",
      children: "3. Proposed Solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-strategy-independent-semver-for-packages",
      children: "3.1 Strategy: Independent SemVer for Packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "independent SemVer tracking"
      }), " for packages, separate from project version."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package versions are independent"
        }), " - Tracked separately from project version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer follows standard rules"
        }), " - MAJOR.MINOR.PATCH with semantic meaning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package version increments"
        }), " only when package content changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project version and package version"
        }), " are tracked separately but can be cross-referenced"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-implementation-pattern",
      children: "3.2 Implementation Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "321-for-documentation-packages-current",
      children: "3.2.1 For Documentation Packages (Current)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ Already implemented correctly"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package version in README (", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:** X.Y.Z"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual updates when package content changes significantly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No automation needed (documentation packages don't change frequently)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Version:** 2.0.0  \n**Last Updated:** 2025-12-06\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to bump:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR:"
        }), " Breaking changes to package structure, removal of features"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR:"
        }), " New features, new templates, new guides"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH:"
        }), " Bug fixes, clarifications, minor updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "322-for-future-published-packages",
      children: "3.2.2 For Future Published Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package manifest file (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pubspec.yaml"
        }), ") contains SemVer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package version file (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/VERSION"
        }), ") tracks version"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version increments independently based on package changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-reference to project version in changelog or metadata"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/package.json"
        }), " (if published to npm):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"name\": \"@ai-dev-kit/workflow-mgt\",\n  \"version\": \"2.0.0\",\n  \"description\": \"Release Workflow implementation package\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/VERSION"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Entry:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [2.0.0] - 2025-12-06\n\n**Package Version:** 2.0.0  \n**Project Version:** 0.2.1.5+3 (Epic 2, Story 1, Task 5, Build 3)\n\n### Added\n- PDCA integration\n- Config-driven workflow updates\n\n### Changed\n- Workflow YAML schema updated\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-version-mapping-strategy-if-dual-versioning-required",
      children: "3.3 Version Mapping Strategy (If Dual-Versioning Required)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " This strategy is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT recommended"
      }), " for the reasons stated above, but documented here for completeness and for adopting projects that may have different requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If dual-versioning is absolutely required:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy: Independent SemVer with Project Version Reference"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package version (SemVer)"
        }), " is the primary version for package managers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Project version (", (0,jsx_runtime.jsx)(_components.code, {
            children: "RC.EPIC.STORY.TASK+BUILD"
          }), ")"]
        }), " is tracked in package metadata"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package version increments"
        }), " independently based on package changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project version"
        }), " is included in package metadata for traceability"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"name\": \"@ai-dev-kit/workflow-mgt\",\n  \"version\": \"2.0.0\",\n  \"metadata\": {\n    \"projectVersion\": \"0.2.1.5+3\",\n    \"epic\": 2,\n    \"story\": 1,\n    \"task\": 5,\n    \"build\": 3\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package version is continuous and meaningful"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project version is available for traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No mapping complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No version continuity issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-recommendations",
      children: "4. Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-for-ai-dev-kit-repository",
      children: "4.1 For ai-dev-kit Repository"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "411-current-packages-documentation-only",
      children: "4.1.1 Current Packages (Documentation-Only)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "No changes needed"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current approach (independent SemVer in README) is appropriate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages are not published, so no package manifest files needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual version updates are sufficient for documentation packages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue updating package versions in README when content changes significantly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document version history in README or separate CHANGELOG if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "412-future-published-packages",
      children: "4.1.2 Future Published Packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Implement independent SemVer tracking"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create package manifest files when publishing (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pubspec.yaml"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track package version separately from project version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include project version reference in package metadata for traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document versioning policy in package README"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Policy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Package Versioning\n\nThis package uses **independent Semantic Versioning** (SemVer) separate from the project version.\n\n- **Package Version:** Tracks package-specific changes (MAJOR.MINOR.PATCH)\n- **Project Version:** Available in package metadata for traceability (RC.EPIC.STORY.TASK+BUILD)\n\nPackage version increments when:\n- **MAJOR:** Breaking changes to package API or structure\n- **MINOR:** New features or capabilities added\n- **PATCH:** Bug fixes or minor improvements\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-for-adopting-projects",
      children: "4.2 For Adopting Projects"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "421-guidance-on-dual-versioning-vs-independent-semver",
      children: "4.2.1 Guidance on Dual-Versioning vs. Independent SemVer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Dual-Versioning When:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package version must be derived from project version for compliance reasons"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package version and project version must always be synchronized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project version changes always result in package version changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Independent SemVer When:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package version should reflect package-specific changes (RECOMMENDED)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package may not change even if project version changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package is published to package managers and needs continuous version history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package consumers need meaningful version progression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "422-implementation-guidance",
      children: "4.2.2 Implementation Guidance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Documentation Packages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use independent SemVer in README"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update manually when content changes significantly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No automation needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Published Packages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use independent SemVer in package manifest"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track version in separate VERSION file or package manifest"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include project version reference in metadata for traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document versioning policy clearly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-conclusion",
      children: "5. Conclusion"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-current-state",
      children: "5.1 Current State"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Package versions are tracked independently (appropriate for documentation packages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No package manifest files exist (not needed for documentation-only packages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Dual-versioning strategy is documented but not applied (correct, as it's not needed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Current approach is appropriate for the repository's needs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-key-insights",
      children: "5.2 Key Insights"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual-versioning is NOT necessary"
        }), " for documentation-only packages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Independent SemVer is recommended"
        }), " for published packages (avoids continuity issues)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer continuity concern is valid"
        }), " - derived SemVer would create non-continuous sequences"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current approach is correct"
        }), " - packages use independent SemVer for documentation purposes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-recommendations",
      children: "5.3 Recommendations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continue current approach"
        }), " for documentation packages (independent SemVer in README)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use independent SemVer"
        }), " for future published packages (separate from project version)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update dual-versioning guide"
        }), " to clarify when to use dual-versioning vs. independent SemVer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document package versioning policy"
        }), " for adopting projects"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-next-steps",
      children: "6. Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-immediate-actions",
      children: "6.1 Immediate Actions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Complete audit report (this document)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update dual-versioning guide with guidance on when to use independent SemVer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document package versioning policy for adopting projects"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-future-considerations",
      children: "6.2 Future Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "If packages are published, implement independent SemVer tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create package manifest files when publishing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document versioning policy in each package README"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-references",
      children: "7. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual-Versioning Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dual-versioning-package-managers.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Structure Analysis:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/Epic-1/Story-002-package-and-repo-architecture/T001-package-structure-analysis.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Report Status:"
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Review:"
      }), " When packages are published or versioning approach changes"]
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