"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[77054],{

/***/ 95179
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_067_rw_first_doc_only_release_defaults_to_build_plus_one_not_plus_zero_md_c28_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero-md-c28.json
const site_docs_project_management_kanban_fr_br_br_067_rw_first_doc_only_release_defaults_to_build_plus_one_not_plus_zero_md_c28_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero","title":"Bug Report BR-067: RW first doc-only release defaults to BUILD+1 instead of BUILD+0 (doc-init policy)","description":"Status: OPEN","source":"@site/../docs/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-19T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-066 - IPW missing Docusaurus filing for planning artifacts","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts"},"next":{"title":"Bug Report BR-068: Docusaurus strict MDX cannot resolve monorepo markdown links — production build fails","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-19T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-067: RW first doc-only release defaults to BUILD+1 instead of BUILD+0 (doc-init policy)';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Expected Behavior",
  "id": "expected-behavior",
  "level": 2
}, {
  "value": "Observed Behavior",
  "id": "observed-behavior",
  "level": 2
}, {
  "value": "Scope / Affected Areas",
  "id": "scope--affected-areas",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}, {
  "value": "Intake Decision",
  "id": "intake-decision",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bug-report-br-067-rw-first-doc-only-release-defaults-to-build1-instead-of-build0-doc-init-policy",
        children: "Bug Report BR-067: RW first doc-only release defaults to BUILD+1 instead of BUILD+0 (doc-init policy)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " OPEN", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH — breaks canonical ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "doc-init (+0)"
      }), " semantics for task/story/intake drops; produces incorrect forensic/version signal for documentation-first work.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-19", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-04-19", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.6.7.103+0 (mitigation shipped 2026-04-19)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-067"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T103-release-workflow-maintenance-perpetual-task",
        children: ["E6:S07", ":T103"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Canonical dev-kit versioning policy treats ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["BUILD ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        })]
      }), " as valid for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "first-time Epic/Story/Task documentation"
      }), " (“doc-init”, abstract-space / documentation-only introduction). In practice, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Workflow"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        })
      }), " steer agents and automation toward ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "+1"
        })
      }), " for “normal” new-task releases—even when the release payload is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "documentation and Kanban intake only"
      }), " (no functional code change)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observed example (2026-04-19):"
      }), " Three consecutive ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -d … --art"
        })
      }), " releases for ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E6:S09", ":T01"]
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T02"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T03"
      }), " were versioned ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.9.{1,2,3}+1"
        })
      }), " (BUILD ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1"
      }), " each) instead of using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        })
      }), " for doc-init-eligible commits where policy would treat the drop as documentation-first establishment of the task anchor."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "architectural / policy enforcement gap"
      }), ", not merely a one-off typo: contributors cannot rely on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        })
      }), " without fighting defaults."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When a release is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "documentation-only"
        }), " for a given ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E:S", ":T"]
        }), " and qualifies under ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "doc-init / first artifact"
        }), " rules (see policy references), ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "VERSION_BUILD"
          }), " should be ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          })]
        }), " on that release boundary unless a deliberate policy exception is documented."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_version_bump.py"
          })
        }), " and RW Step 2 guidance should ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "agree"
        }), " with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "dev-kit-versioning-policy.md"
          })
        }), " and task template semantics for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+0"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Agents executing RW should receive a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "clear, deterministic signal"
        }), " (validator or RW branch) when ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+0"
          })
        }), " applies vs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+1"
          })
        }), ", without manual version file surgery."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW / agent path applied ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "BUILD = 1"
          })
        }), " for doc-heavy “intake” releases on new ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 009"
        }), " tasks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_version_bump.py"
          })
        }), " “normal new task → BUILD = 1” logic dominates unless doc-init detection fires; mixed ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/"
          })
        }), " trees may not match ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "detect_first_time_est_doc"
          })
        }), " heuristics."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resulting versions overstate “functional build” semantics for pure documentation intake."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope--affected-areas",
      children: "Scope / Affected Areas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/validation/validate_version_bump.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py"
          })
        }), " — doc-init detection; “same task BUILD increment” messaging vs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+0"
          })
        }), " eligibility."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW Step 2 agent execution docs: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "release-workflow-agent-execution.md"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(82681)/* ["default"] */ .A) + "",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "src/fynd_deals/version.py"
          })
        }), " comments (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD = 0"
        }), " doc-init convention)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contrast (avoid conflicting “fix”):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation",
          children: "BR-010"
        }), " addressed the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "opposite"
        }), " failure mode (incorrect ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+0"
          })
        }), " when ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+1"
          })
        }), " was required). BR-067 must be resolved ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "without regressing BR-010"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Policy-aligned rule set: ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["when ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+0"
          }), " is mandatory, optional, or forbidden"]
        }), " for RW doc-only drops (linked to versioning policy)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_version_bump.py"
          })
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "--doc-policy-zero"
          })
        }), " (with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "--requested"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "--art"
          })
        }), ", docs-only) + unit tests; full “when +0” policy table still ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TODO"
        }), " (see first criterion)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW agent docs describe ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "how to run a doc-init release"
        }), " vs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "functional +1"
        }), " release (including ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RW -d"
          })
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No regression against BR-010 scenarios (batch story/task creation)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation",
          children: "BR-010"
        }), " — inverse bug (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " when ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+1"
          })
        }), " needed)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-020-version-validator-abstract-space-awareness",
          children: "FR-020"
        }), " — validator abstract-space / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+0"
          })
        }), " awareness."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003"
        }), " — delivered under ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6", ":S09"]
        }), " (example where ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "+0"
          })
        }), " semantics were expected by policy)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "dev-kit-versioning-policy.md"
          })
        }), " — canonical ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD"
        }), " semantics."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " ACCEPTED (filed from maintainer review)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Date:"
      }), " 2026-04-19"]
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

/***/ 82681
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/version-7585d331af41b166f3e13586da5b43b8.py");

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