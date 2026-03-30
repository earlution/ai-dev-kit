"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[57307],{

/***/ 42910
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_management_kanban_readme_md_ae0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-readme-md-ae0.json
const site_docs_project_management_kanban_readme_md_ae0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-management/kanban/README","title":"Kanban Directory","description":"This directory contains all Kanban-related documentation for the ai-dev-kit repository, including task management and FR/BR/UXR prioritization systems.","source":"@site/../docs/project-management/kanban/README.md","sourceDirName":"project-management/kanban","slug":"/project-management/kanban/","permalink":"/ai-dev-kit/docs/project-management/kanban/","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:54.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Project Management","permalink":"/ai-dev-kit/docs/project-management/"},"next":{"title":"Kanban Workflow Agent","permalink":"/ai-dev-kit/docs/project-management/kanban/AGENTS"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/project-management/kanban/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:54.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Kanban Directory';

const assets = {

};



const toc = [{
  "value": "Structure",
  "id": "structure",
  "level": 2
}, {
  "value": "Key Principles",
  "id": "key-principles",
  "level": 2
}, {
  "value": "Files",
  "id": "files",
  "level": 2
}, {
  "value": "Core Kanban System",
  "id": "core-kanban-system",
  "level": 3
}, {
  "value": "FR/BR/UXR System Snapshot",
  "id": "frbruxr-system-snapshot",
  "level": 3
}, {
  "value": "Epic Structure",
  "id": "epic-structure",
  "level": 3
}, {
  "value": "FR/BR/UXR Prioritization Board",
  "id": "frbruxr-prioritization-board",
  "level": 2
}, {
  "value": "Key Features",
  "id": "key-features",
  "level": 3
}, {
  "value": "Board Documents",
  "id": "board-documents",
  "level": 3
}, {
  "value": "Usage",
  "id": "usage",
  "level": 3
}, {
  "value": "Workflow",
  "id": "workflow",
  "level": 2
}, {
  "value": "Task Management Workflow",
  "id": "task-management-workflow",
  "level": 3
}, {
  "value": "FR/BR/UXR Workflow",
  "id": "frbruxr-workflow",
  "level": 3
}, {
  "value": "Integration Points",
  "id": "integration-points",
  "level": 3
}, {
  "value": "Statistics (Current)",
  "id": "statistics-current",
  "level": 2
}, {
  "value": "Task System",
  "id": "task-system",
  "level": 3
}, {
  "value": "FR/BR/UXR System",
  "id": "frbruxr-system",
  "level": 3
}, {
  "value": "Governance",
  "id": "governance",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "kanban-directory",
        children: "Kanban Directory"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This directory contains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all Kanban-related documentation"
      }), " for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " repository, including task management and FR/BR/UXR prioritization systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "structure",
      children: "Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "kanban/\n├── _index.md              # Kanban board view (obligatory)\n├── README.md              # This file (obligatory)\n├── kanban-board.md        # MoSCOW prioritized tasks\n├── kanban-structure.md    # Epic/Story/Task structure\n├── kanban-board-guide.md  # Rules and explanations\n├── kanban-completed.md    # Historical record of completed tasks\n├── fr-br-uxr-board.md     # FR/BR/UXR MoSCOW prioritization board\n├── fr-br-uxr-structure.md # Complete FR/BR/UXR listings by type\n├── fr-br-uxr-completed.md # Historical record of completed FR/BR/UXRs\n├── fr-br/                 # Individual FR/BR/UXR documents\n│   ├── FR-XXX-*.md        # Feature Request documents\n│   ├── BR-XXX-*.md        # Bug Report documents\n│   └── UXR-XXX-*.md       # User Experience Research documents\n└── epics/\n    ├── Epic-1/            # Epic 1 directory (all files here)\n    │   ├── Epic-1.md      # Epic 1 overview\n    │   ├── Story-001-ai-dev-kit-kanban-and-versioning.md\n    │   └── [other story files as needed]\n    ├── Epic-2/            # Epic 2 directory\n    │   ├── Epic-2.md\n    │   └── Story-XXX-*.md\n    └── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-principles",
      children: "Key Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single location:"
        }), " All Kanban docs (Epics, Stories, board views, FR/BR/UXRs) live under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic-centric:"
        }), " Each Epic has its own directory containing all its files (Epic overview, Stories, Task docs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story directories:"
        }), " Stories with associated files can have subdirectories (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-XXX/TXXX-*.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Five-way split:"
        }), " Board views are split into tasks, structure, guide, completed tasks, and FR/BR/UXR systems for clarity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual prioritization:"
        }), " Both tasks and FR/BR/UXRs use MoSCOW prioritization for consistency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR ownership:"
        }), " The UXR workflow owns Kanban template updates and documentation maintenance to keep terminology and formatting consistent across boards"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "files",
      children: "Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-kanban-system",
      children: "Core Kanban System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "_index.md"
          })
        }), " – Quick board view (table format)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-board.md"
          })
        }), " – MoSCOW prioritized tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-structure.md"
          })
        }), " – Epic/Story/Task structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-board-guide.md"
          })
        }), " – Rules and explanations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-completed.md"
          })
        }), " – Historical record of completed tasks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "frbruxr-system-snapshot",
      children: "FR/BR/UXR System Snapshot"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br-uxr-board.md"
          })
        }), " – MoSCOW prioritized FR/BR/UXR items"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br-uxr-structure.md"
          })
        }), " – Complete FR/BR/UXR listings by type"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br-uxr-completed.md"
          })
        }), " – Historical record of completed FR/BR/UXRs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br/FR-XXX-*.md"
          })
        }), " – Individual Feature Request documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br/BR-XXX-*.md"
          })
        }), " – Individual Bug Report documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br/UXR-XXX-*.md"
          })
        }), " – Individual User Experience Research documents"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "epic-structure",
      children: "Epic Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epics/Epic-X/Epic-X.md"
          })
        }), " – Epic overview document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epics/Epic-X/Story-XXX-*.md"
          })
        }), " – Story documents and associated files"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "frbruxr-prioritization-board",
      children: "FR/BR/UXR Prioritization Board"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR/BR/UXR Prioritization Board"
      }), " provides centralized visibility and prioritization for all open Feature Requests, Bug Reports, and User Experience Research items. It mirrors the Kanban board's MoSCOW structure but focuses on intake and prioritization rather than task execution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-features",
      children: "Key Features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MoSCOW Prioritization:"
        }), " Uses identical M/S/C/O/W structure as Kanban board"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mixed Prioritization:"
        }), " All FRs, BRs, and UXRs are prioritized together without type segregation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complete Integration:"
        }), " Links to individual documents and implementing tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Historical Tracking:"
        }), " Completed items move to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-completed.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "board-documents",
      children: "Board Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br-uxr-board.md"
          })
        }), " – Main prioritization board (MoSCOW structure)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br-uxr-structure.md"
          })
        }), " – Complete listings by type (FR/BR/UXR)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br-uxr-completed.md"
          })
        }), " – Historical record of completed items"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stakeholders:"
        }), " Review priorities and provide input on FR/BR/UXR documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Developers:"
        }), " Pick highest priority items and convert to tasks when appropriate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Product Management:"
        }), " Adjust priorities and plan based on board content"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow",
      children: "Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-management-workflow",
      children: "Task Management Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Epic:"
        }), " Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X/"
        }), " directory under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X.md"
        }), " inside"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Story:"
        }), " Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-XXX-*.md"
        }), " under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-X/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Board views:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_index.md"
        }), " (quick view), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board.md"
        }), " (tasks), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-structure.md"
        }), " (epics), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board-guide.md"
        }), " (guide), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        }), " (completed tasks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Track Progress:"
        }), " Update Epic and Story docs as work progresses"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "frbruxr-workflow",
      children: "FR/BR/UXR Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create FR/BR/UXR:"
        }), " Add document to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br/"
        }), " directory with appropriate prefix (FR/BR/UXR)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritize:"
        }), " Add item to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-board.md"
        }), " under appropriate MoSCOW section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Structure:"
        }), " Add item to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-structure.md"
        }), " in type-specific section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update templates/docs:"
        }), " UXR owns Kanban template/document updates across ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board*.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-structure.md"
        }), ", and related templates to keep formatting/terminology aligned"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Track Progress:"
        }), " Update status and move to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-completed.md"
        }), " when implemented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Tasks:"
        }), " Convert FR/BR/UXRs to Kanban tasks following intake process"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-points",
      children: "Integration Points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-references:"
        }), " FR/BR/UXR documents link to implementing tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority alignment:"
        }), " MoSCOW prioritization consistent across systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completion tracking:"
        }), " Both systems track completed items separately"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation updates:"
        }), " Board guide covers both systems"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statistics-current",
      children: "Statistics (Current)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-system",
      children: "Task System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Epics:"
        }), " 8 (Epics 1, 2, 4, 5, 6, 7, 8, 10, 11, 21, 24)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Stories:"
        }), " Multiple across epics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Tasks:"
        }), " Varies by priority level"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "frbruxr-system",
      children: "FR/BR/UXR System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total Items:"
        }), " 70 FR/BR/UXR documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Requests:"
        }), " 51 (1 completed: FR-051)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bug Reports:"
        }), " 15 (1 in progress: BR-037)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Experience Research:"
        }), " 4"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MoSCOW Distribution:"
        }), " M:2, S:6, C:62, W:0, O:0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "governance",
      children: "Governance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
      }), " for full governance details covering both task management and FR/BR/UXR prioritization systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This integrated system provides comprehensive project management with dual prioritization boards for both task execution and intake management."
      })
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