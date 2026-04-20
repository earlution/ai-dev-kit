"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[95931],{

/***/ 1620
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fbuboard_md_9a1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fbuboard-md-9a1.json
const site_docs_project_management_kanban_fbuboard_md_9a1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-management/kanban/fbuboard","title":"AI Dev Kit – FR/BR/UXR Prioritization Board","description":"Last Updated 2026-04-20 14:24 UTC)","source":"@site/../docs/project-management/kanban/fbuboard.md","sourceDirName":"project-management/kanban","slug":"/project-management/kanban/fbuboard","permalink":"/ai-dev-kit/docs/project-management/kanban/fbuboard","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fbuboard.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-09T15:15:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 9, Story 5: Canonical E/S/T Review and Refinement","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-9/Story-005-canonical-est-review-and-refinement"},"next":{"title":"Bidirectional Wiring Principle: BR/FR ↔ Task ↔ Documentation","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/project-management/kanban/fbuboard.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-09T15:15:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'AI Dev Kit – FR/BR/UXR Prioritization Board';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "MoSCOW Prioritized FR/BR/UXR Items",
  "id": "moscow-prioritized-frbruxr-items",
  "level": 2
}, {
  "value": "Must Have (M) - Critical Items",
  "id": "must-have-m---critical-items",
  "level": 3
}, {
  "value": "Should Have (S) - Important Items",
  "id": "should-have-s---important-items",
  "level": 3
}, {
  "value": "Could Have (C) - Nice-to-Have Items",
  "id": "could-have-c---nice-to-have-items",
  "level": 3
}, {
  "value": "Ongoing (O) - Perpetual Items",
  "id": "ongoing-o---perpetual-items",
  "level": 3
}, {
  "value": "Board Statistics",
  "id": "board-statistics",
  "level": 2
}, {
  "value": "Usage Instructions",
  "id": "usage-instructions",
  "level": 2
}, {
  "value": "For Stakeholders",
  "id": "for-stakeholders",
  "level": 3
}, {
  "value": "For Developers",
  "id": "for-developers",
  "level": 3
}, {
  "value": "For Product Management",
  "id": "for-product-management",
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
        id: "ai-dev-kit--frbruxr-prioritization-board",
        children: "AI Dev Kit – FR/BR/UXR Prioritization Board"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-04-20 (fbuboard sync; latest row stamps: 2026-04-20 14:24 UTC)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Context:"
      }), " v0.5.9.11+5 (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SemVer"
      }), " v0.4.757+5); ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BR-068"
      }), " retired from board (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 4"
      }), " closure)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake migration note (FR-072 / Approach D):"
      }), " New FR/BR/UXR intake must use semantic host-story placement; dedicated repository stories remain historical traceability registries."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For MoSCOW prioritized tasks, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For Epic/Story/Task structure, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-structure",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-structure.md"
          })
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For FR/BR/UXR structure and full listings, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br-uxr-structure",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br-uxr-structure.md"
          })
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For completed FR/BR/UXRs, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br-uxr-completed",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fr-br-uxr-completed.md"
          })
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For rules and explanations, see:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-board-guide",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-board-guide.md"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This board provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "centralized visibility and prioritization"
      }), " for all open FRs (Feature Requests), BRs (Bug Reports), and UXRs (User Experience Research) in the AI Dev Kit project. It uses the same responsibility structure as the Kanban board but focuses on the intake and prioritization process."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Board Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visibility"
        }), " - Clear view of all FR/BR/UXR priorities and status"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritization"
        }), " - Systematic approach to deciding what to work on next"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking"
        }), " - Complete lifecycle tracking from intake to completion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration"
        }), " - Links to individual documents and implementing tasks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moscow-prioritized-frbruxr-items",
      children: "MoSCOW Prioritized FR/BR/UXR Items"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "must-have-m---critical-items",
      children: "Must Have (M) - Critical Items"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-039"
        }), " – Cascade Whitelist Security Prompt Usability Blocker - TODO (CRITICAL, Cascade whitelist feature non-functional, creates constant security prompt interruptions preventing productive workflow execution) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker",
          children: "BR-039"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-038"
        }), " – Release Workflow Micromanagement and Tool Discovery Issues - TODO (HIGH, Excessive manual intervention, tool discovery problems, and poor error recovery in Release Workflow) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues",
          children: "BR-038"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "should-have-s---important-items",
      children: "Should Have (S) - Important Items"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-067"
        }), " – RW doc-only / intake releases default to BUILD+1 instead of doc-init +0 - OPEN (HIGH, versioning policy vs validate_version_bump / RW Step 2 defaults; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6:S07", ":T103"]
        }), ") - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero",
          children: "BR-067"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T103-release-workflow-maintenance-perpetual-task",
          children: ["E6:S07", ":T103"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-083"
        }), " – Global IPW-gated implementation contract - OPEN (HIGH, enforce repository-wide implementation lock behind task+IPW+explicit-authorization gate; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6:S06", ":T62"]
        }), ") - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-083-global-ipw-gated-implementation-contract",
          children: "FR-083"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-006-feature-requests/T62-global-ipw-gated-implementation-contract-fr083",
          children: ["E6:S06", ":T62"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-081"
        }), " – Brownfield modular adopter integration - OPEN (MEDIUM, operationalize ADR-003 — matrices, contract-first wiring; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6:S09", ":T02"]
        }), ") - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration",
          children: "FR-081"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T02-brownfield-modular-adopter-integration-fr081",
          children: ["E6:S09", ":T02"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-077"
        }), " – IPW-built task status transition and kboard synchronization - IN PROGRESS (HIGH, core ownership matrix + deterministic requested-task drift checks shipped in v0.2.1.17+3; monitor recurrence and adoption) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync",
          children: "FR-077"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077",
          children: ["E2:S01", ":T17"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-065"
        }), " – RW Step 12.5 GitHub release parser fails on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v"
        }), "-prefixed version - OPEN (HIGH, GitHub release publish step fails with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "invalid literal for int() with base 10: 'v0'"
        }), "; RW remains non-blocking but release publication is skipped) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version",
          children: "BR-065"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T113-rw-step-12-5-github-release-parser-hardening-br065",
          children: ["E6:S07", ":T113"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-066"
        }), " – IPW missing Docusaurus filing for planning artifacts - OPEN (HIGH, contract/validator/inventory ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " under ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E2:S15", ":T01"]
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.2.15.1+1"
        }), "; BR remains ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OPEN"
        }), " for phased historical backfill) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts",
          children: "BR-066"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066",
          children: ["E2:S15", ":T01"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-040"
        }), " – Implementation Cycle Workflow (ICW) - TODO (HIGH, Create structured three-phase workflow: 1) Specification Definition, 2) Test Design, 3) Implementation Planning. Provides disciplined approach to implementation work similar to RW/UKW patterns.) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-040-implementation-cycle-workflow-icw",
          children: "FR-040"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-046"
        }), " – RW SemVer Tag When task_touch Enabled - IN PROGRESS (HIGH, dual-mode ⇒ task_touch validator + installer/examples shipped ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.5.1.46+6"
        }), "; FR doc + task remain open until verification closes the loop) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode",
          children: "FR-046"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode",
          children: ["E5:S01", ":T46"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-001"
        }), " – Migration User Experience Research - TODO (HIGH, Research user experience during migration processes) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-001-migration-user-experience-research",
          children: "UXR-001"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-002"
        }), " – Comprehensive UAT Migration Utilities - TODO (HIGH, User acceptance testing tools for migration) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-002-comprehensive-uat-migration-utilities",
          children: "UXR-002"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-005"
        }), " – Kanban Board Formatting & Governance - TODO (HIGH, Enforce blank-line readability rule across Kanban docs and assign UXR ownership for template maintenance) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-005-kanban-board-formatting-and-governance",
          children: "UXR-005"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-006"
        }), " – Single ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " branch and RW validator relaxation (solo workflow) - TODO (HIGH, evaluate allowing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " as accepted RW branch context to reduce multi-branch hygiene friction while preserving safety controls) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-006-dev-branch-and-rw-validator-relaxation",
          children: "UXR-006"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-008"
        }), " – Default board naming adoption (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard.md"
        }), ") - IN PROGRESS (HIGH, standardize canonical board filenames across docs, scripts, and packaged installs with compatibility aliases) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption",
          children: "UXR-008"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard",
          children: ["E6:S07", ":T114"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-009"
        }), " – Last-modified stamp forensic integrity and drift protection - IN PROGRESS (CRITICAL, enforce work-evidence-only timestamp mutation and block rewrite-driven stamp churn; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6:S07", ":T115"]
        }), ") - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection",
          children: "UXR-009"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails",
          children: ["E6:S07", ":T115"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "could-have-c---nice-to-have-items",
      children: "Could Have (C) - Nice-to-Have Items"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-082"
        }), " – Installation distribution canonical repository alignment - OPEN (MEDIUM, scripts/docs default to canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "earlution/ai-dev-kit"
        }), "; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6:S09", ":T03"]
        }), ") - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment",
          children: "FR-082"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T03-installation-canonical-repo-alignment-fr082",
          children: ["E6:S09", ":T03"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-031"
        }), " – Multi-Agent Coordination Feasibility Investigation - TODO (C priority, Investigate multi-agent coordination possibilities) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-031-multi-agent-coordination-feasibility-investigation",
          children: "FR-031"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T31-multi-agent-coordination-feasibility-investigation",
          children: ["E5:S01", ":T31"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-035"
        }), " – Task Template Cross-Wiring Section - TODO (MEDIUM, Cross-wiring section in task templates) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-035-task-template-cross-wiring-section",
          children: "FR-035"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T35-task-template-cross-wiring-section",
          children: ["E5:S01", ":T35"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-032"
        }), " – Release Candidate Readiness Gap Analysis - TODO (MEDIUM, Analyze gaps in release candidate readiness) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-032-release-candidate-readiness-gap-analysis",
          children: "FR-032"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-030"
        }), " – AI Dev Kit CLI Tool - TODO (MEDIUM, Command-line interface tool) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-030-ai-dev-kit-cli-tool",
          children: "FR-030"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-008-ai-dev-kit-cli-tool",
          children: ["E6", ":S08"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-021"
        }), " – FR/BR/UXR Repository Stories - TODO (MEDIUM, Repository stories for FR/BR/UXR management) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-021-fr-br-uxr-repository-stories",
          children: "FR-021"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR-003"
        }), " – Intelligent Epic Matching Canonical Adoption UAT - TODO (MEDIUM, User acceptance testing for intelligent epic matching) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-003-intelligent-epic-matching-canonical-adoption-uat",
          children: "UXR-003"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-043"
        }), " – UKW Gap Discovery TODO Tasks and Unfiled FR/BR - TODO (LOW, Discover gaps in UKW and unfiled items) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br",
          children: "FR-043"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-044"
        }), " – RW Temporary Execution Log for Recovery and Forensics - TODO (LOW, Temporary execution logs for Release Workflow) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics",
          children: "FR-044"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-039"
        }), " – AI Dev Kit Project Review and Legacy Clean-up - TODO (LOW, Review and clean up legacy project elements) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up",
          children: "FR-039"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-037"
        }), " – Kanban Policy Task Prioritisation Queue Stack - TODO (LOW, Queue stack for task prioritization) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack",
          children: "FR-037"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-029"
        }), " – Procedural Task Template Generation Hybrid Strategy - TODO (LOW, Hybrid strategy for task template generation) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-029-procedural-task-template-generation-hybrid-strategy",
          children: "FR-029"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-024"
        }), " – IDE Linter Check Before Commit in Release Workflow - TODO (LOW, Linter integration in Release Workflow) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-024-ide-linter-check-before-commit-in-release-workflow",
          children: "FR-024"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs",
          children: ["E2:S01", ":T08"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-023"
        }), " – Update Kanban Workflow (UKW) - TODO (LOW, Updates to Update Kanban Workflow) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-023-update-kanban-workflow-ukw",
          children: "FR-023"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-022"
        }), " – Policy Docs Machine-Readable Salience - TODO (LOW, Machine-readable policy documentation) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-022-policy-docs-machine-readable-salience",
          children: "FR-022"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-020"
        }), " – Version Validator Abstract Space Awareness - TODO (LOW, Abstract space awareness in version validator) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-020-version-validator-abstract-space-awareness",
          children: "FR-020"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-019"
        }), " – Intake Workflow Automation - TODO (LOW, Automation for intake workflow) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-019-intake-workflow-automation",
          children: "FR-019"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-018"
        }), " – Abstract Space Zero Numbered Est Docs - TODO (LOW, Zero-numbered documents in abstract space) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-018-abstract-space-zero-numbered-est-docs",
          children: "FR-018"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-017"
        }), " – Versioning Policy Hardening Doc-Init Build - TODO (LOW, Hardening versioning policy for doc-init builds) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build",
          children: "FR-017"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-016"
        }), " – Kanban Granularity Discrete Task Docs - TODO (LOW, Discrete task documents for kanban granularity) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs",
          children: "FR-016"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-014"
        }), " – RW Trigger for FR/BR Commits - TODO (LOW, Release Workflow trigger for FR/BR commits) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-014-rw-trigger-for-fr-br-commits",
          children: "FR-014"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-2/Story-007-trigger-aware-release-workflow",
          children: ["E2:S07", ":T05"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-013"
        }), " – Trigger-Aware Release Workflow - TODO (LOW, Trigger-aware enhancements to Release Workflow) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-013-trigger-aware-release-workflow",
          children: "FR-013"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-2/Story-007-trigger-aware-release-workflow",
          children: ["E2:S07", ":T01"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-012"
        }), " – Agentic Kanban Task Creation from FR/BR - TODO (LOW, Agentic task creation from FR/BR documents) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-012-agentic-kanban-task-creation-from-fr-br",
          children: "FR-012"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-4/Story-010-agentic-kanban-task-creation-from-fr-br",
          children: ["E4:S10", ":T01"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-011"
        }), " – Task Splitting Multiple Canonical Epics - TODO (LOW, Task splitting across multiple canonical epics) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-011-task-splitting-multiple-canonical-epics",
          children: "FR-011"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011",
          children: ["E4:S08", ":T07"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-010"
        }), " – Implement Actual Agentic Intelligence Task Mapping - TODO (LOW, Actual implementation of agentic task mapping) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-010-implement-actual-agentic-intelligence-task-mapping",
          children: "FR-010"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence",
          children: ["E4:S09", ":T06"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-010"
        }), " – Template Task Installation Two-Phase Migration - TODO (LOW, Two-phase migration for template task installation) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-010-template-task-installation-two-phase-migration",
          children: "FR-010"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence",
          children: ["E4:S09", ":T06"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-009"
        }), " – Intelligent Epic Matching AI-Assisted Canonical Adoption - TODO (LOW, AI-assisted epic matching for canonical adoption) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-009-intelligent-epic-matching-ai-assisted-canonical-adoption",
          children: "FR-009"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-008"
        }), " – Package Uninstall Capabilities - TODO (LOW, Uninstall capabilities for packages) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-008-package-uninstall-capabilities",
          children: "FR-008"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-2/Story-006-package-uninstall-and-recovery",
          children: ["E2:S06", ":T01"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-007"
        }), " – Migration Utilities and Installation Modes - TODO (LOW, Migration utilities and installation modes) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-007-migration-utilities-and-installation-modes",
          children: "FR-007"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-4/Story-007-migration-support-and-installation-modes",
          children: ["E4:S07", ":T02"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-006"
        }), " – Localization Language Selection UK/US English - TODO (LOW, Language selection for UK/US English) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english",
          children: "FR-006"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-21/Story-000-language-selection-at-setup",
          children: ["E21:S00", ":T01"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-005"
        }), " – Systematic Canonical Epics Stories Tasks Templates - TODO (LOW, Systematic templates for canonical structure) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-005-systematic-canonical-epics-stories-tasks-templates",
          children: "FR-005"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-4/Story-006-comprehensive-canonical-est-template-system",
          children: ["E4:S06", ":T01"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-003"
        }), " – Dependency Tracking in Adopting Projects - TODO (LOW, Dependency tracking for project adoption) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-003-dependency-tracking-in-adopting-projects",
          children: "FR-003"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-002"
        }), " – Update Been There README - TODO (LOW, Update README for been-there functionality) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-002-update-been-there-readme",
          children: "FR-002"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-008"
        }), " – Arbitrary 80 Threshold Contradicts Agentic Intelligence - TODO (LOW, Arbitrary threshold contradicts agentic approach) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-008-arbitrary-80-threshold-contradicts-agentic-intelligence",
          children: "BR-008"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence",
          children: ["E4:S09", ":T05"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-007"
        }), " – Multiple Bugs Kanban Package Installation - TODO (LOW, Multiple bugs in kanban package installation) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation",
          children: "BR-007"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence",
          children: ["E4:S09", ":T01"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-006"
        }), " – Missing Migration Support Pre-existing Kanban - TODO (LOW, Missing migration support for pre-existing kanban) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban",
          children: "BR-006"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-4/Story-007-migration-support-and-installation-modes",
          children: ["E4:S07", ":T01"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-005"
        }), " – Kanban Framework Epic Structure Gap UAT Finding - TODO (LOW, Gap found in kanban framework epic structure) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding",
          children: "BR-005"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-003"
        }), " – RW Branch Validation Update Branches - TODO (LOW, RW branch validation for update branches) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-003-rw-branch-validation-update-branches",
          children: "BR-003"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-002"
        }), " – Changelog Validator Ordering Bug - TODO (LOW, Ordering bug in changelog validator) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug",
          children: "BR-002"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-001"
        }), " – Validate Version Bump Epic Story Detection Bug - TODO (LOW, Bug in epic/story detection for version bump validation) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-001-validate-version-bump-epic-story-detection-bug",
          children: "BR-001"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-058"
        }), " – Ci test workflow missing and pytest failures - OPEN (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures",
          children: "BR-058"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-059"
        }), " – Ukw moscow incomplete story task coverage - OPEN (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage",
          children: "BR-059"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-048"
        }), " – Icw task identifier argument - PENDING (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-048-icw-task-identifier-argument",
          children: "FR-048"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-049"
        }), " – Enhanced kanban completed with timestamps and recent tasks - TODO (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-049-enhanced-kanban-completed-with-timestamps-and-recent-tasks",
          children: "FR-049"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-050"
        }), " – Ukw extension for fr br uxr temporal tracking and synchronization - TODO (backlog sync) (note: duplicate source docs exist) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization",
          children: "FR-050"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T108-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization",
          children: ["E6:S07", ":T108"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-056"
        }), " – Standardize packaged workflow documentation and instructions - TODO (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-056-standardize-packaged-workflow-documentation-and-instructions",
          children: "FR-056"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T56-standardize-packaged-workflow-documentation-and-instructions",
          children: ["E5:S01", ":T56"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-057"
        }), " – Update changelog workflow - PROPOSED (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-057-update-changelog-workflow",
          children: "FR-057"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks",
          children: ["E7:S01", ":T06"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-058"
        }), " – Markdown maintenance workflow - PROPOSED (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow",
          children: "FR-058"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-059"
        }), " – Enhanced workflow logging system - PROPOSED (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-059-enhanced-workflow-logging-system",
          children: "FR-059"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-2/Story-008-harden-release-workflow-reliability/T08-enhanced-workflow-forensic-logging-and-rollback-hardening-fr-059",
          children: ["E2:S08", ":T08"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-062"
        }), " – Github release installation experience - PROPOSED (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-062-github-release-installation-experience",
          children: "FR-062"
        }), " | ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T62-github-release-installation-experience",
          children: ["E5:S01", ":T62"]
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-063"
        }), " – Cmw epic 5 execution context - ACTIVE (intake released v0.5.2.6+1; implementation ACs open) (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-063-cmw-epic-5-execution-context",
          children: "FR-063"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-072"
        }), " – Uniform repository abstract space kanban rules - PENDING (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules",
          children: "FR-072"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-073"
        }), " – Fr br uxr board open taskless intake execution plan - PENDING ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Phase B/C filed ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "v0.5.1.74+2"
          }), " — verify UKW/statistics ACs in production use)"]
        }), " (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan",
          children: "FR-073"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-074"
        }), " – Kanban intake atomic kg r2 kg r6 governance - PENDING (backlog sync) - ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-074-kanban-intake-atomic-kg-r2-kg-r6-governance",
          children: "FR-074"
        }), " | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ongoing-o---perpetual-items",
      children: "Ongoing (O) - Perpetual Items"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No ongoing FR/BR/UXR items currently."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "board-statistics",
      children: "Board Statistics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Items:"
      }), " 74 FR/BR/UXR documents"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Requests:"
        }), " 52 | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bug Reports:"
        }), " 15   | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Experience Research:"
        }), " 7 | Last modified: 2026-04-20 14:24 UTC"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "By Priority:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritization is represented directly by MoSCOW section placement above."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid treating static numeric summaries as canonical; row-level entries are the source of truth."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "By Status:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mixed board statuses are in use (", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OPEN"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PENDING"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PROPOSED"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ACTIVE"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IMPLEMENTED"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETED"
        }), "); treat per-row status as source of truth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Completed archival remains tracked in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-completed.md"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disambiguation Note:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BR-061"
        }), " currently exists as two legacy records (RW explicit task-id alignment, and SemVer task_touch counter behavior). Board rows include qualifiers and direct task links to prevent cross-wiring confusion."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage-instructions",
      children: "Usage Instructions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-stakeholders",
      children: "For Stakeholders"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review priorities"
        }), " - Check the appropriate priority section for items needing attention"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Track progress"
        }), " - Monitor status changes and task creation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provide input"
        }), " - Add comments or requirements to relevant FR/BR/UXR documents"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-developers",
      children: "For Developers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pick items"
        }), " - Choose highest priority items appropriate to your skills"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create tasks"
        }), " - Convert FR/BR/UXRs to Kanban tasks following the intake process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update status"
        }), " - Move items between sections as work progresses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Track completion"
        }), " - Move completed items to fr-br-uxr-completed.md"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-product-management",
      children: "For Product Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritize"
        }), " - Adjust priority levels based on business needs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review"
        }), " - Regular board reviews to ensure alignment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan"
        }), " - Use board information for release planning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Report"
        }), " - Provide status updates based on board content"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This board provides systematic FR/BR/UXR management with the same level of organization and visibility that the Kanban board provides to task execution."
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