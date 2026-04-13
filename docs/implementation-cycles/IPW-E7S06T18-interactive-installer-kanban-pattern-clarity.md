---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-10T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E7:S06:T18 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T18-interactive-installer-kanban-pattern-prompt-clarity.md`](../project-management/kanban/epics/Epic-7/Story-006-post-windsurf-project-review/T18-interactive-installer-kanban-pattern-prompt-clarity.md) **(E7:S06:T18)**  
**Planning for:** [UXR-007](../project-management/kanban/fr-br/UXR-007-interactive-installer-kanban-pattern-prompt-clarity.md)  
**Status:** Draft

---

## 1. Specification

### 1.1 Goal

Make interactive installer Kanban prompts self-explanatory, enforce placeholder-safe pattern input, and produce consistent end-to-end install-state messaging across chained installer runs.

### 1.2 Functional requirements

- **F1:** Epic pattern input must require `{epic}` and reject literal one-epic paths (for example `Epic-01/Epic-01.md`).
- **F2:** Story pattern input must require both `{epic}` and `{story}`.
- **F3:** Prompt copy must explain paths are relative to selected `kanban_root`, with concrete examples.
- **F4:** Installer must provide immediate match-preview feedback (match count and sample matches) for pattern-based inputs.
- **F5:** When pattern validation fails, installer must emit remediation with nearest valid examples derived from discovered files.
- **F6:** Kanban root selected during RW install config must be reused by Kanban framework installation flow unless explicitly overridden.
- **F7:** End-of-run output for chained installs must expose one canonical outcome (`SUCCESS`, `PARTIAL`, `FAILED`, `CANCELLED`) instead of mixed completion signals.
- **F8:** If `.cursorrules` already contains RW trigger section, installer must provide guided reconciliation (clear next action, optional diff path).

### 1.3 Non-functional requirements

- **N1:** Validation feedback should be fast enough for interactive use (no noticeable pause on typical repo sizes).
- **N2:** New validation must be deterministic and avoid false acceptance of malformed templates.
- **N3:** UX messaging must be consistent across dry-run and real execution paths.
- **N4:** Changes must preserve backward compatibility for non-Kanban modes (`A`/`B`) and explicit `--kanban-path` usage.

### 1.4 Out of scope

- Full redesign of installer architecture or replacing existing CLI scripts.
- Refactoring every workflow installer to a single shared engine in this task.
- Auto-fixing malformed external `release-workflow.yaml` files beyond reporting and state clarity.

### 1.5 Status transition intent (FR-077)

- First non-planning implementation commit for this task should move status `TODO -> IN PROGRESS`.
- Move `IN PROGRESS -> COMPLETE` only after acceptance evidence is captured in task/UXR references.

---

## 2. Test design

- **T1 — Epic placeholder enforcement:** Reject epic pattern when `{epic}` token is absent; verify remediation text.
- **T2 — Story placeholder enforcement:** Reject story pattern missing `{epic}` or `{story}`.
- **T3 — Relative path guidance clarity:** Prompt/help text explicitly references `kanban_root` with examples.
- **T4 — Match preview positive path:** Valid pattern shows non-zero match count and first N sample paths.
- **T5 — Match preview zero path:** Zero-match result shows actionable alternatives and no silent acceptance.
- **T6 — Cross-tool root propagation:** `install_kanban_framework.py` validates the same root captured by RW config in chained usage.
- **T7 — Existing rules reconciliation path:** Existing RW trigger in `.cursorrules` produces clear reconciliation guidance and optional diff hook.
- **T8 — Canonical final state banner:** Chained run ending with cancellation reports canonical final status (`CANCELLED`) without conflicting success banner.
- **T9 — Regression compatibility:** Modes without Kanban integration behave unchanged.

### 2.1 Likely test touchpoints

- `packages/frameworks/workflow mgt/scripts/install_release_workflow.py` (interactive config/prompt and state summary tests)
- `packages/frameworks/kanban/scripts/install_kanban_framework.py` (path propagation and final state output tests)
- Validation helpers used by `install_kanban_framework.py` (`validate_installation.py`) for root-aware checks
- CLI transcript-style tests where available for installer output expectations

---

## 3. Implementation plan

1. **Action:** Add pattern validation helper(s) in RW installer path collection logic for epic/story placeholders and semantic checks.  
   **Deliverable:** Early rejection of non-templated patterns with remediation guidance.
2. **Action:** Improve Kanban prompt copy with explicit "relative to kanban_root" semantics and examples based on common layouts.  
   **Deliverable:** Revised prompt/help strings for epic/story/board fields.
3. **Action:** Implement pattern match preview against selected root while collecting inputs.  
   **Deliverable:** Match count + sample paths + zero-match alternatives in interactive flow.
4. **Action:** Add/configure root propagation contract between RW installer output and Kanban installer invocation path.  
   **Deliverable:** Consistent root usage when running chained install commands.
5. **Action:** Introduce canonical end-of-run status aggregator for chained outcomes and remove contradictory completion messaging.  
   **Deliverable:** Single authoritative run-state banner.
6. **Action:** Improve `.cursorrules` existing-trigger handling with guided reconciliation message (and optional diff artifact path).  
   **Deliverable:** Reduced manual ambiguity when trigger section already exists.
7. **Action:** Add/update tests for validation, preview, propagation, and run-state messaging.  
   **Deliverable:** Regression coverage aligned to T1-T9.

### 3.1 Files likely to modify

- `packages/frameworks/workflow mgt/scripts/install_release_workflow.py`
- `packages/frameworks/kanban/scripts/install_kanban_framework.py`
- `packages/frameworks/kanban/scripts/validate_installation.py` (if root-aware checks require updates)
- Installer user docs under `docs/documentation/user-docs/` that describe interactive configuration prompts
- Host task and UXR docs for implementation evidence after coding

### 3.2 Dependency order

1. Placeholder validation and prompt semantics.
2. Match preview behavior.
3. Cross-tool root propagation.
4. Canonical final status messaging.
5. Existing-trigger reconciliation UX.
6. Tests and docs.

---

## 4. Success / verification criteria

- [ ] Epic/story pattern prompts reject non-templated inputs with clear remediation.
- [ ] Users get immediate match feedback and alternatives before config is written.
- [ ] Chained installer flows validate the intended kanban root, not default-only paths.
- [ ] End-of-run state is unambiguous (`SUCCESS`/`PARTIAL`/`FAILED`/`CANCELLED`).
- [ ] `T18` and `UXR-007` include cross-linked implementation evidence after delivery.

---

## References

- [Host Task E7:S06:T18](../project-management/kanban/epics/Epic-7/Story-006-post-windsurf-project-review/T18-interactive-installer-kanban-pattern-prompt-clarity.md)
- [UXR-007](../project-management/kanban/fr-br/UXR-007-interactive-installer-kanban-pattern-prompt-clarity.md)
- [RW installer script](../packages/frameworks/workflow%20mgt/scripts/install_release_workflow.py)
- [Kanban installer script](../packages/frameworks/kanban/scripts/install_kanban_framework.py)
