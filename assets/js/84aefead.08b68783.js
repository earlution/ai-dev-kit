"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[81397],{

/***/ 41109
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_059_ukw_moscow_incomplete_story_task_coverage_md_84a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-059-ukw-moscow-incomplete-story-task-coverage-md-84a.json
const site_docs_project_management_kanban_fr_br_br_059_ukw_moscow_incomplete_story_task_coverage_md_84a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage","title":"Bug Report BR-059: UKW MoSCOW Update Omits In-Progress Story Tasks (Incomplete Coverage)","description":"Bug ID: BR-059","source":"@site/../docs/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-30T20:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-058: Missing Tests CI Workflow and Stale Pytest Failures","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures"},"next":{"title":"Feature Request: README Template Based on Best-README-Template","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-002-update-been-there-readme"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-30T20:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-059: UKW MoSCOW Update Omits In-Progress Story Tasks (Incomplete Coverage)';

const assets = {

};



const toc = [{
  "value": "Bug Summary",
  "id": "bug-summary",
  "level": 2
}, {
  "value": "Problem Description",
  "id": "problem-description",
  "level": 2
}, {
  "value": "Observed behavior",
  "id": "observed-behavior",
  "level": 3
}, {
  "value": "Expected behavior",
  "id": "expected-behavior",
  "level": 3
}, {
  "value": "Concrete example",
  "id": "concrete-example",
  "level": 3
}, {
  "value": "Impact",
  "id": "impact",
  "level": 2
}, {
  "value": "Proposed direction (investigation)",
  "id": "proposed-direction-investigation",
  "level": 2
}, {
  "value": "Related work",
  "id": "related-work",
  "level": 2
}, {
  "value": "Resolution / current status",
  "id": "resolution--current-status",
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
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bug-report-br-059-ukw-moscow-update-omits-in-progress-story-tasks-incomplete-coverage",
        children: "Bug Report BR-059: UKW MoSCOW Update Omits In-Progress Story Tasks (Incomplete Coverage)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-059", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T109-br059-ukw-moscow-full-story-task-coverage",
        children: ["E6:S07", ":T109"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM (board SoT diverges from story checklist; planners lose visibility)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " OPEN", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-03-30", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-03-31 — Implementing task ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E6:S07", ":T109"]
      }), " filed", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification:"
      }), " UKW + Kanban board accuracy"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-summary",
      children: "Bug Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive UKW"
      }), " run promoted ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E5:S09", ":T01"]
      }), " to the MoSCOW ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Should"
      }), " section but ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["did not add E5:S09", ":T02", "–T07"]
      }), ", even though ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story 009"
      }), " lists all seven tasks as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TODO / IN PROGRESS"
      }), " in its task checklist. Treating “one representative task per story” as sufficient is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "workflow failure"
      }), ": the kanban board is expected to reflect ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all active tasks"
      }), " for an in-progress story unless explicitly deferred."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-description",
      children: "Problem Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior",
      children: "Observed behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Story-009-docusaurus-documentation-portal.md"
          })
        }), " — checklist shows ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E5:S09", ":T01", "–T07"]
        }), " (FR-065–FR-071), all still open."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After UKW (2026-03-30), ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-board",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-board.md"
          })
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Should"
        }), " listed ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only T01"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stakeholder expectation: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "every"
        }), " E5", ":S09", " task that is not complete should appear on the board (or be explicitly moved to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Won’t"
        }), " / documented deferral with rationale)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-behavior",
      children: "Expected behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UKW Step 6 (MoSCOW) should either:", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Enumerate all non-complete tasks"
            }), " from the story’s task checklist for stories marked IN PROGRESS, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "or"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fail loudly"
            }), " (agent summary + optional validator) when a story has N>1 open tasks but the board lists fewer than N without a documented exception."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concrete-example",
      children: "Concrete example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "On board after UKW (before fix)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E5:S09", ":T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-065"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E5:S09", ":T02"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-066"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E5:S09", ":T03"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-067"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E5:S09", ":T04"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-068"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E5:S09", ":T05"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-069"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E5:S09", ":T06"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-070"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E5:S09", ":T07"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-071"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Planning:"
        }), " Teams assume the MoSCOW board is complete; missing rows hide parallelizable work (e.g. docs path, CI, deploy)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW trust:"
        }), " Partial updates read as “success” while coverage is incomplete (related pattern: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-042-ukw-agent-board-cleanup-failure",
          children: "BR-042"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forensics:"
        }), " Harder to correlate FR chain ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-065–071"
        }), " with visible board work."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-direction-investigation",
      children: "Proposed direction (investigation)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cursor rules / UKW guide:"
        }), " State explicitly that for IN PROGRESS stories, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "all open tasks"
        }), " from the story checklist must appear in MoSCOW (or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Won’t"
        }), " with reason), not a single “lead” task."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent procedure:"
        }), " UKW Step 6: diff story task checklist ↔ board rows for current epic/story scope; add missing rows in order ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T01…T07"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional:"
        }), " Lightweight script or checklist item: “Story S09 open task count == board Should rows for E5", ":S09", " (± deferrals).”"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regression:"
        }), " Re-run UKW after fix on a story with multiple open tasks and confirm full enumeration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementing task:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T109-br059-ukw-moscow-full-story-task-coverage",
          children: ["E6:S07", ":T109"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal",
          children: ["E5", ":S09", " – Docusaurus Documentation Portal"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Related BR:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-042-ukw-agent-board-cleanup-failure",
          children: "BR-042"
        }), " (completed tasks left on board — opposite failure mode)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Related BR:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-034-ukw-moscow-prioritization-missing",
          children: "BR-034"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perpetual UKW task:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T101-update-kanban-workflow-ukw",
          children: ["E6:S07", ":T101"]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resolution--current-status",
      children: "Resolution / current status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OPEN"
        }), " — Board manually corrected to list ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E5:S09", ":T01", "–T07"]
        }), "; root cause (UKW agent/rules) still to be addressed under this BR."]
      }), "\n"]
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