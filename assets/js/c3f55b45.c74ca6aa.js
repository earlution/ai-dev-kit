"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[194],{

/***/ 24069
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maintenance_docusaurus_corpus_triage_fr_067_md_c3f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-docusaurus-corpus-triage-fr-067-md-c3f.json
const site_docs_maintenance_docusaurus_corpus_triage_fr_067_md_c3f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maintenance/docusaurus-corpus-triage-fr-067","title":"Docusaurus corpus triage (FR-067 / E5:S09:T03)","description":"FR: FR-067","source":"@site/../docs/maintenance/docusaurus-corpus-triage-fr-067.md","sourceDirName":"maintenance","slug":"/maintenance/docusaurus-corpus-triage-fr-067","permalink":"/ai-dev-kit/docs/maintenance/docusaurus-corpus-triage-fr-067","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/maintenance/docusaurus-corpus-triage-fr-067.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-30T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Upload Framework Packages to GitHub Releases","permalink":"/ai-dev-kit/docs/maintenance/UPLOAD_PACKAGES"},"next":{"title":"Markdown Maintenance Workflow Log – 2026-03-16","permalink":"/ai-dev-kit/docs/maintenance/logs/mmw/MMW-2026-03-16"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/maintenance/docusaurus-corpus-triage-fr-067.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-30T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Docusaurus corpus triage (FR-067 / E5:S09)';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Failure classes addressed",
  "id": "failure-classes-addressed",
  "level": 2
}, {
  "value": "Excludes (unchanged vs FR-066)",
  "id": "excludes-unchanged-vs-fr-066",
  "level": 2
}, {
  "value": "Scale / stats (approximate)",
  "id": "scale--stats-approximate",
  "level": 2
}, {
  "value": "Deferred outcomes (explicit owners)",
  "id": "deferred-outcomes-explicit-owners",
  "level": 2
}, {
  "value": "Verification",
  "id": "verification",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    del: "del",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "docusaurus-corpus-triage-fr-067--e5s09",
        children: ["Docusaurus corpus triage (FR-067 / E5:S09", ":T03", ")"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
        children: "FR-067"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T03-docusaurus-build-triage-fr-067",
        children: ["E5:S09", ":T03"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Triage to achieve ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        }), " exit 0"]
      }), " for the FR-066 publish scope (", (0,jsx_runtime.jsx)(_components.code, {
        children: "portal/"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "../docs/"
      }), " with changelog-archive excludes)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "failure-classes-addressed",
      children: "Failure classes addressed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MDX JSX / expressions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Escaped or rephrased ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<N"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{placeholder}"
            }), " patterns; PIR templates use HTML entities; automated ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/escape_mdx_placeholders.py"
            }), " for common tokens outside fenced code"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MDX in templates / docs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Curly-brace placeholders (", (0,jsx_runtime.jsx)(_components.code, {
              children: "{epic}"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{PROJECT_NAME}"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{Name}"
            }), ", etc.) escaped or rewritten so MDX does not treat them as expressions"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assets / embeds"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/knowledge/guides/building-persistent-knowledge",
              children: "building-persistent-knowledge.md"
            }), ": YouTube iframe → markdown link; missing PNGs → prose figure notes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broken markdown links"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Policy (post–T08):"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenLinks: 'throw'"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenMarkdownLinks: 'throw'"
            }), " — corpus link repairs with ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E5:S09", ":T08"]
            }), "; regressions fail ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Broken anchors (", (0,jsx_runtime.jsx)(_components.code, {
              children: "#fragment"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Policy (post–T10):"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenAnchors: 'throw'"
            }), " — corpus anchor/heading alignment with ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E5:S09", ":T10"]
            }), " (", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-067 FU-3"
            }), " done at ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "v0.5.9.10+2"
              })
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "excludes-unchanged-vs-fr-066",
      children: "Excludes (unchanged vs FR-066)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-and-release-notes/changelog-archive/**"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge/changelog-and-release-notes/changelog-archive/**"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Listed in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md",
        children: "portal/README.md (repository root)"
      }), " under ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Excluded"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scale--stats-approximate",
      children: "Scale / stats (approximate)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Files touched:"
        }), " wide sweep across ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/**/*.md"
        }), " (MDX-safe placeholders, Story-011 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<sup>"
        }), " fix, ICW numerics, runbook tags, RW-AGENT placeholders, task-template-generator wording, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/escape_mdx_placeholders.py"
        }), " (re-runnable for new docs; skips ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive"
        }), " tree)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/docusaurus.config.js"
        }), " — link + anchor check mode ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "throw"
          })
        }), "; see portal README"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deferred-outcomes-explicit-owners",
      children: "Deferred outcomes (explicit owners)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " rely on conversation memory. Later work is on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR / task"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owner"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.del, {
              children: ["Switch link check from ", (0,jsx_runtime.jsxs)(_components.strong, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "warn"
                }), " → ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "throw"
                })]
              }), " after corpus link repair"]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Done — E5:S09", ":T08"]
            }), " at ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "v0.5.9.8+2"
              })
            }), ". Ongoing hygiene: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow",
                children: "FR-058"
              })
            }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FU-1"
            }), " closed on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
                children: "FR-067"
              })
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Populate ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "GitHub Releases"
            }), " for SemVer tags"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T103-release-workflow-maintenance-perpetual-task",
                children: ["E6:S07", ":T103"]
              })
            }), " (RW Step 12.5); ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance",
                children: "FR-041"
              })
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FU-2"
            }), " on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
                children: "FR-067"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.del, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Strict broken anchors"
              }), " (", (0,jsx_runtime.jsx)(_components.code, {
                children: "onBrokenAnchors"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "throw"
                })
              }), ")"]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Done — E5:S09", ":T10"]
            }), " at ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "v0.5.9.10+2"
              })
            }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-067 FU-3"
            }), " closed on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
                children: "FR-067"
              })
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cd portal && npm run build"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        }), " (Node 20+; CI representative)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PORTAL_BUILD_STRICT=1 pytest -m portal_build"
        }), " for gate"]
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