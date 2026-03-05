---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-05T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E6:S01:T37 – Kanban Install Consumer Board Contamination

**Status:** IN PROGRESS  
**Priority:** CRITICAL  
**Last updated:** 2026-03-05 (v0.6.1.37+1 – Detector + remediation tooling implemented, pending release RW)  
**Version:** v0.6.1.37+1  
**Bug Report:** [BR-037 – Kanban Install Consumer Board Contamination](../../../fr-br/BR-037-kanban-install-consumer-board-contamination.md)  

---

## Problem Statement

Early versions of the Kanban framework installer allowed **consumer projects** to import `ai-dev-kit`’s own Kanban backlog (epics, stories, tasks, BR/FR repos) instead of a clean, project-agnostic template tree. This created **contaminated consumer boards** that mixed:

- The dev-kit’s internal Kanban (e.g. `Epic-24: Book Related Work`, BR/FR repo stories).
- The consumer project’s own work.

This broke:

- Epic/Story/Task isolation between framework and consumer projects.
- Forensic guarantees around version markers and BR/FR traceability.
- The mental model that a consumer’s Kanban tree is “about their project”, not the dev-kit itself.

---

## Goals

1. **Prevent** future installs from ever copying dev-kit’s live backlog into consumer boards.
2. **Detect** contamination in existing consumer repositories in a repeatable, scriptable way.
3. **Remediate** contaminated trees safely (dry-run → archive → optional delete).
4. **Integrate** detection into installation validation so that contaminated states are visible and actionable.
5. **Document** the behaviour and provide a clear workflow for consumer projects.

---

## Scope

This task covers:

- Kanban framework installer behaviour for consumer projects (fresh installs).
- Contamination detection and remediation tooling under the Kanban framework.
- Validator integration.
- Documentation updates (BR, task, board guide).

Out of scope:

- Retroactive reconstruction of historical contamination prior to this fix (beyond what install logs/validators can see).
- Arbitrary migration of bespoke consumer Kanban customizations.

---

## Specification

### 1. Fresh install invariants (PREVENTION)

After this task:

- `install_kanban_framework.py --mode fresh`:
  - Creates a **clean, project-agnostic** Kanban skeleton under `docs/project-management/kanban/`.
  - Does **not** copy `ai-dev-kit`’s live backlog, BR/FR repo stories, or project-specific epics.
  - Produces a consumer board that does **not** claim `AI Dev Kit – Kanban Board` as the title.
  - Emits structured install logs with `[KANBAN_*]` markers (FR-047).

Tests assert:

- No `Epic-24` contamination in consumer epics after a fresh install.
- The consumer board content does not include `AI Dev Kit – Kanban Board`.

### 2. Contamination detector (DETECTION)

Implement a detector that:

- Walks `docs/project-management/kanban/` and classifies each file as:
  - `template` – expected consumer template/structure.
  - `devkit_reference` – legitimate dev-kit reference material (where applicable in the dev-kit repo itself).
  - `contaminated` – dev-kit backlog artefacts in consumer trees (board, epics, FR/BR repo docs, etc.).
  - `unknown` – not covered by rules.
- Encodes explicit rules for:
  - Board title contamination (`AI Dev Kit – Kanban Board`).
  - Dev-kit FR/BR repo documents under `docs/project-management/kanban/fr-br/`.
  - Dev-kit repository stories and specific epics known to be framework-internal.
- Returns a list of findings `(path, classification, reason)` suitable for:
  - Standalone inspection.
  - Use in validators and remediation tooling.

### 3. Remediation engine (CLEAN-UP)

Implement a remediation tool that:

- Accepts:
  - `--kanban-root` (default: `docs/project-management/kanban`).
  - `--no-dry-run` (default is dry-run).
  - `--delete` (otherwise archive).
- Behaviour:
  - **Dry-run (default):**
    - Runs detector and prints a CSV-style summary of all findings.
    - Prints planned actions (`DRY-RUN archive: …` / `DRY-RUN delete: …`) for `contaminated` files only.
    - Makes **no** filesystem changes.
  - **Archive mode (`--no-dry-run`):**
    - Moves `contaminated` files into `.contaminated/` under the Kanban root, preserving relative paths.
    - Prints a short summary of each archive operation.
  - **Delete mode (`--no-dry-run --delete`):**
    - Deletes `contaminated` files instead of archiving them.
    - Intended for use only after an archived copy has been inspected/committed, or in ephemeral test repos.
- **Idempotency:**
  - Re-running remediation on an already cleaned tree should be effectively a no-op, with no new archives or errors.

### 4. Validator integration

- Extend the Kanban installation validator to:
  - Invoke the contamination detector on the target Kanban tree.
  - When any `contaminated` findings are present:
    - Mark validation as failed.
    - Emit a clear message instructing the user to run the remediation tool (with dry-run recommended first).

### 5. Documentation updates

- **BR-037:** Describe:
  - The original contamination problem and its impact.
  - The prevention behaviour for fresh installs.
  - The contamination detector/remediator and how they are used.
  - The validator integration and operational playbook.
- **Kanban board:** Update the E6:S01:T37 entry to:
  - Reflect that prevention + remediation tooling now exist.
  - Keep the task in IN PROGRESS until the release RW is run and verified.
- **Kanban board guide:** Add a short note linking:
  - Install logs (FR-047).
  - Contamination detection + remediation tools.
  - The expected workflow for consumer projects that suspect contamination.

---

## Acceptance Criteria

- **AC1 – Fresh install safety:**
  - A fresh Kanban install into a new consumer repo:
    - Creates only the expected skeleton.
    - Does not introduce dev-kit backlog or FR/BR repo documents.
    - Produces install logs with `[KANBAN_*]` markers.
  - Verified by automated tests.

- **AC2 – Detector coverage:**
  - The detector correctly classifies:
    - A clean, fresh install as having no `contaminated` files.
    - A synthetic contaminated tree (board title and known dev-kit epics/FR/BR docs) as having `contaminated` findings with clear reasons.

- **AC3 – Remediation behaviour:**
  - Dry-run mode prints planned archive/delete actions with no filesystem changes.
  - Archive mode moves all `contaminated` files under `.contaminated/` and leaves a clean tree behind.
  - Delete mode removes contaminated files entirely when requested.
  - Remediation is idempotent (second run reports no new work, tests pass).

- **AC4 – Validator integration:**
  - The Kanban validation script:
    - Passes on a fresh, uncontaminated install.
    - Fails when contamination is present and points explicitly to the remediation tool.

- **AC5 – Documentation:**
  - BR-037, this task doc, and the Kanban board/guide describe:
    - The contamination problem.
    - The detection and remediation workflow.
    - How this ties into install logging (FR-047).

---

## Status & Next Steps

- **Status:** IN PROGRESS – Code and tests implemented; docs updated; pending Release Workflow and external verification in a consumer repo.  
- **Next Steps:**
  - Run RW over E6:S01:T37 to release the remediation tooling.
  - Use a fresh test repo (and/or previously contaminated repo) to:
    - Confirm detection and remediation behaviour end-to-end.
    - Mark BR-037 as fully verified once the consumer-side workflow has been exercised.  

