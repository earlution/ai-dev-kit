"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[26074],{

/***/ 77363
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_2_story_006_package_uninstall_and_recovery_md_955_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-2-story-006-package-uninstall-and-recovery-md-955.json
const site_docs_project_management_kanban_epics_epic_2_story_006_package_uninstall_and_recovery_md_955_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-management/kanban/epics/Epic-2/Story-006-package-uninstall-and-recovery","title":"Story 6: Package Uninstall and Recovery","description":"Status: COMPLETE ✅","source":"@site/../docs/project-management/kanban/epics/Epic-2/Story-006-package-uninstall-and-recovery.md","sourceDirName":"project-management/kanban/epics/Epic-2","slug":"/project-management/kanban/epics/Epic-2/Story-006-package-uninstall-and-recovery","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-2/Story-006-package-uninstall-and-recovery","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/Epic-2/Story-006-package-uninstall-and-recovery.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-10T14:10:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Story 005 – Post-Implementation Review (PIR) Workflow","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-2/Story-005-post-implementation-review-workflow"},"next":{"title":"Story 007 – Trigger-Aware Release Workflow","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-2/Story-007-trigger-aware-release-workflow"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/project-management/kanban/epics/Epic-2/Story-006-package-uninstall-and-recovery.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-10T14:10:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Story 6: Package Uninstall and Recovery';

const assets = {

};



const toc = [{
  "value": "Goal",
  "id": "goal",
  "level": 2
}, {
  "value": "Tasks",
  "id": "tasks",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "story-6-package-uninstall-and-recovery",
        children: "Story 6: Package Uninstall and Recovery"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " [TBD]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2025-12-10 (v0.2.6.3+1 – Task 3 complete: Documentation and verification)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.6.3+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E2S06"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provide safe uninstall, cleanup, recovery, and rollback capabilities for ai-dev-kit packages/frameworks across supported backends (git submodule, npm, pip, CLI)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tasks",
      children: "Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E2:S06", ":T01", " – FR-008 uninstall command and safety rails"]
          }), " ✅ COMPLETE (v0.2.6.1+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implemented uninstall command (", (0,jsx_runtime.jsx)(_components.code, {
              children: "uninstall_package.py"
            }), ") with backup creation, dependency validation, confirmation flows, and backend detection"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supports all backends: Git submodule, npm, pip (auto-detect or manual selection)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Safety features: backup before removal, dependency checking, confirmation prompts, dry-run mode"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Linked FR:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-008-package-uninstall-capabilities.md"
            }), " (GitHub issue #5)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Acceptance:"
            }), " ✅ AC-1..AC-5 of FR-008 satisfied; backup/validation/confirmation documented."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E2:S06", ":T02", " – Recovery and rollback flows"]
          }), " ✅ COMPLETE (v0.2.6.2+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implemented recovery mode (", (0,jsx_runtime.jsx)(_components.code, {
              children: "--recover"
            }), ") - detects failed installations, cleans up partial installations, restores project to working state"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implemented rollback mode (", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rollback"
            }), ") - restores from backup or removes package entirely, supports restoring previous version from timestamped backups"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Backend-specific uninstall paths supported (Git submodule, npm, pip)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Linked FR:"
            }), " FR-008 (AC-6..AC-8)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Acceptance:"
            }), " ✅ Recovery/rollback implemented and verified; ready for testing across backends."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E2:S06", ":T03", " – Documentation and verification"]
          }), " ✅ COMPLETE (v0.2.6.3+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Updated troubleshooting guide with comprehensive uninstall section (uninstall issues, orphaned files, dependency conflicts)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Updated update guide with uninstall methods, safety features, and backup restoration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Updated installation guide with uninstall quick reference"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Added examples for standard uninstall, recovery mode, rollback mode, and manual uninstall"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Linked FR:"
            }), " FR-008 (AC-9..AC-10)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Acceptance:"
            }), " ✅ Docs updated; uninstall scenarios documented with examples."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR-008: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-008-package-uninstall-capabilities.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework dependency guides under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/user-docs/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Usage:"
      }), " Story follows Kanban framework story template; tasks trace to FR for forensic linkage."]
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