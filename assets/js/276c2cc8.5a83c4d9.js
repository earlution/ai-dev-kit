"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[29039],{

/***/ 24885
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_management_kanban_kanban_board_guide_md_276_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-kanban-board-guide-md-276.json
const site_docs_project_management_kanban_kanban_board_guide_md_276_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-management/kanban/kanban-board-guide","title":"AI Dev Kit – Kanban Board Guide","description":"Last Updated E4T01+2)","source":"@site/../docs/project-management/kanban/kanban-board-guide.md","sourceDirName":"project-management/kanban","slug":"/project-management/kanban/kanban-board-guide","permalink":"/ai-dev-kit/docs/project-management/kanban/kanban-board-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/kanban-board-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-20T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"AI Dev Kit – FR/BR/UXR Structure","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br-uxr-structure"},"next":{"title":"AI Dev Kit – Kanban Board","permalink":"/ai-dev-kit/docs/project-management/kanban/kanban-board"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/project-management/kanban/kanban-board-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-20T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'AI Dev Kit – Kanban Board Guide';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Parent-Child Relationship",
  "id": "parent-child-relationship",
  "level": 2
}, {
  "value": "Task-Level Display (Not Story-Level)",
  "id": "task-level-display-not-story-level",
  "level": 2
}, {
  "value": "MoSCOW Prioritized In-Progress Tasks",
  "id": "moscow-prioritized-in-progress-tasks",
  "level": 2
}, {
  "value": "MoSCOW Categories",
  "id": "moscow-categories",
  "level": 3
}, {
  "value": "Task Ordering",
  "id": "task-ordering",
  "level": 3
}, {
  "value": "Task-Level Display (not story-level)",
  "id": "task-level-display-not-story-level-1",
  "level": 3
}, {
  "value": "How to Add Work",
  "id": "how-to-add-work",
  "level": 2
}, {
  "value": "Formatting Governance (E7:S01 / UXR-005)",
  "id": "formatting-governance-e7s01--uxr-005",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Board Structure",
  "id": "board-structure",
  "level": 2
}, {
  "value": "FR/BR/UXR Prioritization Board",
  "id": "frbruxr-prioritization-board",
  "level": 2
}, {
  "value": "Board Sections",
  "id": "board-sections",
  "level": 3
}, {
  "value": "Usage",
  "id": "usage",
  "level": 3
}, {
  "value": "Integration",
  "id": "integration",
  "level": 3
}, {
  "value": "Notes",
  "id": "notes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ai-dev-kit--kanban-board-guide",
        children: "AI Dev Kit – Kanban Board Guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-03-09 (RW: E4:S18", ":T01", "+2)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.4.18.1+2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For structured information only, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-board",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-board.md"
          })
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For Epic/Story/Task structure, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-structure",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-structure.md"
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
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide explains how to use and understand the Kanban board. The board tracks all work on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " repository and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Head First AI-Assisted Development"
      }), " book project."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      }), " All Kanban documentation lives under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic overviews: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-X/Epic-X.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story documents: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-X/Story-XXX-*.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Board views: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_index.md"
        }), " (quick view), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board.md"
        }), " (tasks), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-structure.md"
        }), " (epics), and this file (guide)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "parent-child-relationship",
      children: "Parent-Child Relationship"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This Kanban board serves as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "parent document"
      }), " to Story documents, similar to how Story documents are parents of Task documents:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board → Story:"
        }), " This board links to and tracks all Story documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story → Task:"
        }), " Story documents link to and track all Task documents"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This creates a clear hierarchy: Board (parent) → Story (child) → Task (grandchild)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-level-display-not-story-level",
      children: "Task-Level Display (Not Story-Level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The board MUST show tasks, not stories."
      }), " Story-level reporting obfuscates the actual state—you cannot see which tasks are complete vs TODO vs in progress. Each board entry should link to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task document"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exception:"
      }), " Show a story only when its tasks have not yet been filed (e.g. epics with placeholder T01–T07 but no discrete task documents). Once tasks are filed, replace the story entry with the individual task entries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UKW and RW agents must follow this when updating the board."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 7 vs UKW (FR-038):"
      }), " During a release, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 7 — Scoped Kanban Sync (UKW Mode)"
      }), " updates the board and docs for the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "release task"
      }), " only (scoped). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standalone UKW"
      }), " is for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "board-wide"
      }), " MoSCOW and housekeeping. See Kanban governance policy §1.1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moscow-prioritized-in-progress-tasks",
      children: "MoSCOW Prioritized In-Progress Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The board includes a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MoSCOW Prioritized In-Progress Tasks"
      }), " section that shows all in-progress tasks (status: IN PROGRESS or TODO) organized by MoSCOW priority and ordered chronologically (most recently updated first)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moscow-categories",
      children: "MoSCOW Categories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "M (Must Have):"
          }), " Critical tasks that must be completed"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Highest priority items requiring immediate attention"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks that block other work or are on critical path"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "S (Should Have):"
          }), " Important tasks that should be completed"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "High-value items that contribute significantly to goals"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks that are important but not blocking"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "C (Could Have):"
          }), " Nice-to-have tasks that could be completed"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Lower priority items that add value but are not essential"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks that can be deferred if needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "O (Ongoing):"
          }), " Perpetual maintenance tasks that never complete"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Perpetual tasks that are tracked but don't block other work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks that require continuous attention (e.g., workflow maintenance, changelog management)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "These tasks are visible but don't interfere with prioritization of completable work"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "W (Won't Have):"
          }), " Tasks deferred or not being done at this time"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks explicitly marked as deferred"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks not being actively worked on"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-ordering",
      children: "Task Ordering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tasks within each MoSCOW section are ordered chronologically, with most recently updated tasks at the top."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-level-display-not-story-level-1",
      children: "Task-Level Display (not story-level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MoSCOW rows must reference tasks"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E7:S06:T03"
      }), ", etc.), not whole stories (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E7:S06"
      }), "). Story-level lines collapse many tasks into one line and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "obfuscate actual state"
      }), " (e.g. T02 complete while the story still reads TODO). Use ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kanban-structure",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-structure.md"
        })
      }), " for epic/story hierarchy; use ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kanban-board",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board.md"
        })
      }), " for actionable, task-granular work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-add-work",
      children: "How to Add Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Epic"
          }), " (if needed):"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/Epic-X.md"
            }), " (Epic overview)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-board.md"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Story"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/Story-XXX-short-slug.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update Epic doc (", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/Epic-X.md"
            }), ") with Story reference"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-board.md"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Task"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/Story-XXX/T\\{task\\}-description.md"
            }), " (separate file format) OR"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add delimited section in Story document using Task ID as header"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Story document with Task reference"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Track Progress"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Task status in Task doc"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Story status in Story doc"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Epic doc with version markers as work completes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update board views as needed"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        })
      }), " for full structure details and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
      }), " for governance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "formatting-governance-e7s01--uxr-005",
      children: ["Formatting Governance (E7:S01", ":T09", " / UXR-005)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The UXR workflow owns all Kanban template/document maintenance. As of ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E7:S01", ":T09", " / UXR-005"]
      }), ", every multi-line MoSCOW bullet must have ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exactly one blank line"
      }), " separating it from adjacent entries (single-line bullets stay contiguous). When updating ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-board*.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr-br-uxr-board.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-structure.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_index.md"
      }), ", or related templates:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert a blank line between bullets whose description spans more than one visual line."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leave single-line bullets directly adjacent to minimize vertical noise."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a release reveals formatting drift, escalate through T09 (Kanban Template Governance) before touching other boards."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW/UKW/MMW agents should log evidence (MMW log + validator output) showing the rule was checked or restored."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Future validator support is tracked in the documentation validator script (", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/documentation/validate-documentation-consistency.py"
      }), ", TODO tagged with E7:S01", ":T09", "). Until automation lands, treat spacing verification as part of RW Step 7/8 reviews."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board Quick View:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/_index",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "_index.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board (MoSCOW Tasks):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-board",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-board.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board (Epic Structure):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-structure",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-structure.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board (FR/BR/UXR Prioritization):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br-uxr-board",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br-uxr-board.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "board-structure",
      children: "Board Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The board is organized into five separate documents:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MoSCOW Prioritized Tasks"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board.md"
        }), ") - Shows all active tasks organized by priority (M/S/C/O/W)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic/Story/Task Structure"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-structure.md"
        }), ") - Shows all epics with their status, priority, stories, and links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR/BR/UXR Prioritization"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-board.md"
        }), ") - Shows all open FRs, BRs, and UXRs organized by priority"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR/BR/UXR Structure"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-structure.md"
        }), ") - Shows complete listings of all FRs, BRs, and UXRs by type"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rules and Explanations"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board-guide.md"
        }), ") - This document with how-to content and policies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The board serves as the parent document to Story documents, providing a comprehensive view of all work items in the project."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "frbruxr-prioritization-board",
      children: "FR/BR/UXR Prioritization Board"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR/BR/UXR Prioritization Board"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr-br-uxr-board.md"
      }), ") provides centralized visibility and prioritization for all open Feature Requests, Bug Reports, and User Experience Research items."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "board-sections",
      children: "Board Sections"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical Priority"
        }), " - Urgent items requiring immediate attention"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High Priority"
        }), " - Important items for near-term work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium Priority"
        }), " - Standard priority items"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Low Priority"
        }), " - Nice-to-have items"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Under Review"
        }), " - Items being evaluated or worked on"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Awaiting Information"
        }), " - Items blocked by missing information"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For Stakeholders"
        }), " - Review priorities and provide input on FR/BR/UXR documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For Developers"
        }), " - Pick highest priority items and convert to tasks when appropriate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For Product Management"
        }), " - Adjust priorities and plan based on board content"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration",
      children: "Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Links to individual FR/BR/UXR documents in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/fr-br/"
        }), " directory"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-references to associated Kanban tasks when created"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Completed items move to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-completed.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The MoSCOW board is optimized for quick scanning - structured information only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For Epic/Story/Task structure, see kanban-structure.md"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For rules, explanations, and how-to content, see this guide document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The board is updated by UKW (Update Kanban Workflow) and RW (Release Workflow)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board views are synchronized with Epic/Story/Task documents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Install logs and remediation:"
      }), " For debugging Kanban installation or migration issues, see per-run logs under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logs/ai-dev-kit/install/"
      }), " (when install logging is enabled). Logs include phase markers such as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[KANBAN_FRESH_INSTALL]"
      }), " and validation output. If a consumer project’s board appears to be contaminated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), "’s own backlog (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AI Dev Kit – Kanban Board"
      }), " title or dev-kit epics like Epic 24), run the Kanban contamination detector and remediation tooling in that project’s repo to identify and archive/delete dev-kit artefacts before continuing."]
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