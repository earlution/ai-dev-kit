"use strict";
(globalThis["webpackChunkportal"] = globalThis["webpackChunkportal"] || []).push([[79799],{

/***/ 82299
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_8_story_002_additional_validators_md_1ab_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-8-story-002-additional-validators-md-1ab.json
const site_docs_project_management_kanban_epics_epic_8_story_002_additional_validators_md_1ab_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-management/kanban/epics/Epic-8/Story-002-additional-validators","title":"Story 002 – Additional Validators","description":"Status: COMPLETE ✅","source":"@site/../docs/project-management/kanban/epics/Epic-8/Story-002-additional-validators.md","sourceDirName":"project-management/kanban/epics/Epic-8","slug":"/project-management/kanban/epics/Epic-8/Story-002-additional-validators","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-8/Story-002-additional-validators","draft":false,"unlisted":false,"editUrl":"https://github.com/earlution/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/Epic-8/Story-002-additional-validators.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-05T14:20:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Story 001 – Code Generators","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-8/Story-001-code-generators"},"next":{"title":"Story 003 – Automation Scripts","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/Epic-8/Story-003-automation-scripts"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ../docs/project-management/kanban/epics/Epic-8/Story-002-additional-validators.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-05T14:20:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Story 002 – Additional Validators';

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
  "value": "E8:S02 – Create validator framework",
  "id": "e8s02--create-validator-framework",
  "level": 3
}, {
  "value": "E8:S02 – Build framework-specific validators",
  "id": "e8s02--build-framework-specific-validators",
  "level": 3
}, {
  "value": "E8:S02 – Establish validation patterns",
  "id": "e8s02--establish-validation-patterns",
  "level": 3
}, {
  "value": "Dependencies",
  "id": "dependencies",
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
        id: "story-002--additional-validators",
        children: "Story 002 – Additional Validators"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " Medium", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2025-12-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-01-06 (v0.8.2.3+1 – T03: Validation patterns established)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.8.2.3+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E8S02"]
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
          children: ["E8:S02", ":T01", " – Create validator framework"]
        }), " - ✅ COMPLETE (v0.8.2.1+1 – Validator framework implemented: BaseValidator, ValidationResult, ValidatorRegistry)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E8:S02", ":T02", " – Build framework-specific validators"]
        }), " - ✅ COMPLETE (v0.8.2.2+1 – Framework-specific validators created: KanbanValidator, WorkflowValidator, VersionValidator, DocumentLifecycleValidator)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E8:S02", ":T03", " – Establish validation patterns"]
        }), " - ✅ COMPLETE (v0.8.2.3+1 – Validation patterns library created: 7 pattern categories, pattern examples, best practices)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This story develops additional validators beyond the current 3 validation scripts."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Develop comprehensive validation framework and additional validators."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tasks",
      children: "Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "e8s02--create-validator-framework",
      children: ["E8:S02", ":T01", " – Create validator framework"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE (v0.8.2.1+1)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Current validators, validation requirements", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverable:"
      }), " Validator framework implementation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependencies:"
      }), " None", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocker:"
      }), " None"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze current validator patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design validator framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement core validator framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document validator framework"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BaseValidator"
        }), " abstract base class with workflow orchestration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ValidationResult"
        }), " with status, issues, and metadata"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ValidationIssue"
        }), " with severity levels (ERROR, WARNING, INFO)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ValidatorRegistry"
        }), " for validator discovery and management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ValidatorConfig"
        }), " for validator configuration"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created README with usage examples"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created example validator: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "simple_validator_example.py"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/base.py"
        }), " - BaseValidator and core types"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/registry.py"
        }), " - ValidatorRegistry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/__init__.py"
        }), " - Package exports"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/README.md"
        }), " - Framework documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/examples/simple_validator_example.py"
        }), " - Example validator"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "e8s02--build-framework-specific-validators",
      children: ["E8:S02", ":T02", " – Build framework-specific validators"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE (v0.8.2.2+1)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Validator framework, framework requirements", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverable:"
      }), " Framework-specific validator implementations", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependencies:"
      }), " E8:S02", ":T01", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocker:"
      }), " None"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Identify validation needs per framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Create framework-specific validators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Build validation test suites"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Document validators"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KanbanValidator"
        }), " - Validates Epic/Story/Task document structure, naming conventions, and consistency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WorkflowValidator"
        }), " - Validates workflow YAML files for structure, dependencies, and handler references"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VersionValidator"
        }), " - Validates version file format and version schema compliance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DocumentLifecycleValidator"
        }), " - Validates document lifecycle metadata and policy compliance"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created test suites for all validators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created comprehensive documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/framework/__init__.py"
        }), " - Framework validators package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/framework/kanban_validator.py"
        }), " - Kanban framework validator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/framework/workflow_validator.py"
        }), " - Workflow framework validator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/framework/version_validator.py"
        }), " - Version framework validator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/framework/document_lifecycle_validator.py"
        }), " - Document lifecycle validator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/framework/README.md"
        }), " - Framework validators documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/tests/test_kanban_validator.py"
        }), " - Kanban validator tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/tests/test_workflow_validator.py"
        }), " - Workflow validator tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/tests/test_version_validator.py"
        }), " - Version validator tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/tests/test_document_lifecycle_validator.py"
        }), " - Document lifecycle validator tests"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "e8s02--establish-validation-patterns",
      children: ["E8:S02", ":T03", " – Establish validation patterns"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE (v0.8.2.3+1)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Validator implementations", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverable:"
      }), " Validation pattern documentation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependencies:"
      }), " E8:S02", ":T02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocker:"
      }), " None"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Extract validation patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Document pattern library"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Create pattern examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Publish pattern documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extracted 7 pattern categories from existing validators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documented 20+ specific validation patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created pattern examples demonstrating each pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Established best practices for validator development"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/PATTERNS.md"
        }), " - Comprehensive validation patterns library"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/tooling & automation/validators/examples/pattern_examples.py"
        }), " - Pattern examples demonstrating each pattern"]
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
        children: "Epic 5 (Documentation Management)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 6 (Framework Management)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/Epic-8/Epic-8.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/Epic-8/Story-001-code-generators.md"
        })
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