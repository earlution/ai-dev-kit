"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[69245],{

/***/ 84251
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_management_kanban_kanban_board_md_877_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-kanban-board-md-877.json
const site_docs_project_management_kanban_kanban_board_md_877_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-management/kanban/kanban-board","title":"AI Dev Kit – Kanban Board","description":"Last UpdatedS09:T09 v0.5.9.9+2 — Pages go-live on main)","source":"@site/../docs/project-management/kanban/kanban-board.md","sourceDirName":"project-management/kanban","slug":"/project-management/kanban/kanban-board","permalink":"/ai-dev-kit/docs/project-management/kanban/kanban-board","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/kanban-board.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:02:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"AI Dev Kit – Kanban Board Guide","permalink":"/ai-dev-kit/docs/project-management/kanban/kanban-board-guide"},"next":{"title":"AI Dev Kit – Kanban Completed Tasks","permalink":"/ai-dev-kit/docs/project-management/kanban/kanban-completed"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/project-management/kanban/kanban-board.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:02:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'AI Dev Kit – Kanban Board';

const assets = {

};



const toc = [{
  "value": "MoSCOW Prioritized In-Progress Tasks",
  "id": "moscow-prioritized-in-progress-tasks",
  "level": 2
}, {
  "value": "Must Have (M) - Critical Tasks",
  "id": "must-have-m---critical-tasks",
  "level": 3
}, {
  "value": "Should Have (S) - Important Tasks",
  "id": "should-have-s---important-tasks",
  "level": 3
}, {
  "value": "Could Have (C) - Nice-to-Have Tasks",
  "id": "could-have-c---nice-to-have-tasks",
  "level": 3
}, {
  "value": "Ongoing (O) - Perpetual Tasks",
  "id": "ongoing-o---perpetual-tasks",
  "level": 3
}, {
  "value": "Won&#39;t Have (W) - Deferred Tasks",
  "id": "wont-have-w---deferred-tasks",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "ai-dev-kit--kanban-board",
        children: "AI Dev Kit – Kanban Board"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-03-31 (", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["RW E5:S09", ":T09"]
      }), " v0.5.9.9+2 — Pages go-live on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ")\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.5.9.9+2 ", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["(from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), " at board refresh)"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Epics 1, 3, 8, 10, 11 are COMPLETE. Epics 2, 4, 5, 6, 7, 24 are IN PROGRESS. Epics 21 are TODO. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MoSCOW lists tasks only (not stories)"
      }), "—story-level rows hide real progress."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For Epic/Story/Task structure, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-structure",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-structure.md"
          })
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For rules and explanations, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-board-guide",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-board-guide.md"
          })
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For completed tasks, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-completed",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-completed.md"
          })
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For FR/BR/UXR prioritization, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br-uxr-board",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br-uxr-board.md"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moscow-prioritized-in-progress-tasks",
      children: "MoSCOW Prioritized In-Progress Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "must-have-m---critical-tasks",
      children: "Must Have (M) - Critical Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No critical tasks currently in progress"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "should-have-s---important-tasks",
      children: "Should Have (S) - Important Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No important tasks currently in progress"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "could-have-c---nice-to-have-tasks",
      children: "Could Have (C) - Nice-to-Have Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E5:S09", ":T08"]
        }), " – Strict broken-link checking post–FR-067 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "warn"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "throw"
        }), ") – TODO - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T08-docusaurus-strict-broken-links-post-fr067",
          children: "Task"
        }), " | ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal",
          children: "Story"
        }), " | ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
          children: "FR-067"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FU-1"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ongoing-o---perpetual-tasks",
      children: "Ongoing (O) - Perpetual Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E6:S06", ":T02"]
          }), " – Fix Release Workflow Micromanagement Issues - IN PROGRESS (CRITICAL priority, User pain with tool discovery, pattern matching; blocked on Cascade whitelist root cause) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-006-feature-requests/T02-fix-release-workflow-micromanagement-issues",
            children: "Task Document"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-006-feature-requests",
            children: "Story"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues",
            children: "BR-038"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E6:S07", ":T101"]
          }), " – Update Kanban Workflow (UKW) - Perpetual Task - IN PROGRESS (v0.6.7.101+37, Last updated: 2026-03-30 UKW) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T101-update-kanban-workflow-ukw",
            children: "Task Document"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management",
            children: "Story"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E6:S07", ":T102"]
          }), " – Changelog Maintenance Workflow (CMW) - Perpetual Task - IN PROGRESS (v0.6.7.102+6, Last updated: 2026-01-17) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T102-changelog-maintenance-workflow-cmw",
            children: "Task Document"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management",
            children: "Story"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E6:S07", ":T103"]
          }), " – Release Workflow (RW) Maintenance - Perpetual Task - IN PROGRESS (v0.6.7.103+4, Last updated: 2026-02-22) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T103-release-workflow-maintenance-perpetual-task",
            children: "Task Document"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management",
            children: "Story"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E7:S01", ":T05"]
          }), " – Markdown Maintenance (Perpetual Task) - PERPETUAL (v0.7.1.5+2, Last updated: 2026-03-07) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task",
            children: "Task Document"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks",
            children: "Story"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wont-have-w---deferred-tasks",
      children: "Won't Have (W) - Deferred Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E21:S00", ":T01-T07"]
          }), " – Language Selection at Setup (UK/US English) - TODO (MEDIUM priority epic) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-21/Story-000-language-selection-at-setup",
            children: "Story"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E21:S01", ":T01-T07"]
          }), " – Internationalization Infrastructure - TODO (MEDIUM priority epic) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-21/Story-001-internationalization-infrastructure",
            children: "Story"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E21:S02", ":T01-T07"]
          }), " – Translation and Localization - TODO (MEDIUM priority epic) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-21/Story-002-translation-and-localization",
            children: "Story"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E21:S03", ":T01-T07"]
          }), " – Cultural Adaptation - TODO (MEDIUM priority epic) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-21/Story-003-cultural-adaptation",
            children: "Story"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E24:S03", ":T01-T03"]
          }), " – Book Publishing Support - TODO (LOW priority story) - ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-24/Story-003-book-publishing-support",
            children: "Story"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: Create publishing workflows - TODO"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Build publishing tools - TODO"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Establish publishing processes - TODO"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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