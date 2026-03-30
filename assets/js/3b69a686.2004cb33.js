"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[11080],{

/***/ 40118
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_4_story_004_kanban_structure_refactoring_md_3b6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-4-story-004-kanban-structure-refactoring-md-3b6.json
const site_docs_project_management_kanban_epics_epic_4_story_004_kanban_structure_refactoring_md_3b6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-management/kanban/epics/Epic-4/Story-004-kanban-structure-refactoring","title":"Story 004 – Kanban Structure Refactoring","description":"Status: COMPLETE ✅","source":"@site/../docs/project-management/kanban/epics/Epic-4/Story-004-kanban-structure-refactoring.md","sourceDirName":"project-management/kanban/epics/Epic-4","slug":"/project-management/kanban/epics/Epic-4/Story-004-kanban-structure-refactoring","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-4/Story-004-kanban-structure-refactoring","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/Epic-4/Story-004-kanban-structure-refactoring.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-05T13:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Story 003 – Kanban + Versioning + RW Integration","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-4/Story-003-kanban-versioning-rw-integration"},"next":{"title":"Story 005 – Canonical Epics for Kanban Framework","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-4/Story-005-canonical-epics-for-kanban-framework"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/project-management/kanban/epics/Epic-4/Story-004-kanban-structure-refactoring.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-05T13:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Story 004 – Kanban Structure Refactoring';

const assets = {

};



const toc = [{
  "value": "Task Checklist",
  "id": "task-checklist",
  "level": 2
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Goal",
  "id": "goal",
  "level": 2
}, {
  "value": "Tasks",
  "id": "tasks",
  "level": 2
}, {
  "value": "E4:S04 – Refactor Kanban file structure (Epic-X.md → Epic-X/Epic-X.md, remove stories/ subdirectory)",
  "id": "e4s04--refactor-kanban-file-structure-epic-xmd--epic-xepic-xmd-remove-stories-subdirectory",
  "level": 3
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "story-004--kanban-structure-refactoring",
        children: "Story 004 – Kanban Structure Refactoring"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " [TBD]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2025-12-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2025-12-05 (v0.4.4.1+2 – Documentation maintenance: Updated all Kanban and docs/ docs to reflect completion)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.4.4.1+2", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E4S04"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-checklist",
      children: "Task Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E4:S04", ":T01", " – Refactor Kanban file structure (Epic-X.md → Epic-X/Epic-X.md, remove stories/ subdirectory)"]
        }), " ✅ COMPLETE (v0.4.4.1+1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This story refactors the Kanban file structure to consolidate all Epic-related files into a single directory, reducing navigation depth and improving maintainability. The refactoring moves Epic overview files into their respective Epic directories and removes the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stories/"
      }), " subdirectory, placing Story files directly in the Epic directory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consolidate Kanban file structure to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Place Epic overview files (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X.md"
        }), ") inside their respective Epic directories (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X/Epic-X.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remove ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stories/"
        }), " subdirectory, placing Story files directly in Epic directories"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all documentation, validators, and configuration files to reflect the new structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure all frameworks (Kanban, Workflow Management, Numbering & Versioning) are updated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tasks",
      children: "Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "e4s04--refactor-kanban-file-structure-epic-xmd--epic-xepic-xmd-remove-stories-subdirectory",
      children: ["E4:S04", ":T01", " – Refactor Kanban file structure (Epic-X.md → Epic-X/Epic-X.md, remove stories/ subdirectory)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Current Kanban structure with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epics/Epic-X.md"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epics/Epic-X/stories/Story-XXX-*.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverable:"
      }), " Refactored structure with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epics/Epic-X/Epic-X.md"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epics/Epic-X/Story-XXX-*.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependencies:"
      }), " None", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocker:"
      }), " None"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Move ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X.md"
        }), " files into their respective ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X/"
        }), " directories as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X/Epic-X.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Move Story files from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X/stories/"
        }), " directly into ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remove empty ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stories/"
        }), " subdirectories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update all path references across all documentation:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Kanban board files (", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-board.md"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic and Story documents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Workflow Management Framework documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Numbering & Versioning Framework integration docs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Debug Path Framework integration docs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All templates (BR, FR, Epic)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All validators and scripts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All RW configuration examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " to support new structure (with legacy fallback)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update RW config patterns in schema and examples"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update policy documentation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-governance-policy.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/README.md"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Acceptance Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All Epic files moved to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X/Epic-X.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All Story files moved from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X/stories/"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All empty ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stories/"
        }), " directories removed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All path references updated across all frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Validators updated with legacy fallback support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW config patterns updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Policy documentation updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No remaining references to old structure (excluding historical changelog archives)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coordinates With:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 1: Core KB Structure (structural changes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 2: Workflow Management Framework (RW path updates)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 3: Numbering & Versioning Framework (integration doc updates)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/README.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow mgt/config/rw-config-schema.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces navigation depth (one less directory level)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consolidates all Epic-related files in one location"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improves maintainability and discoverability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aligns with user feedback on structure simplicity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Affects all frameworks that reference Kanban paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires comprehensive documentation updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validators updated with legacy support for backward compatibility"
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