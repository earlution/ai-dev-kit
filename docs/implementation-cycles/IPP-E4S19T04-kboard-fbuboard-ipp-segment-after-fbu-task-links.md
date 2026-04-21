---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T22:05:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S19:T04 - Planning: Spec, Tests, Implementation Plan (IPP)

**Host Task:** [`T04-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links-uxr010.md`](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T04-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links-uxr010.md) **(E4:S19:T04)**  
**Planning for:** [UXR-010 - kboard/fbuboard add `IPP` segment after FBU and task links](../project-management/kanban/fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md)  
**Status:** Published

---

## 1. Specification

### 1.1 Goal

Implement deterministic row-level traceability formatting in `kboard.md` and `fbuboard.md` such that each governed row includes FBU token, task token, and IPP token in a stable order with explicit fallback behavior.

### 1.2 Normative row contract

- **FBU segment token text:** `BR/BR/UXR-xxx` as a markdown link token.
- **Task segment token text:** `Exx:Sxx:Txx` as a markdown link token.
- **IPP segment token text:**
  - `—IPP—` as a markdown link token when a planning artifact exists.
  - `—No IPP—` as plain text (non-link) when no planning artifact exists.
- **Required segment order:** `... | [FBU token] | [Task token] | [IPP token or —No IPP—] | ...`

### 1.3 Artifact resolution policy for IPP

1. Resolve canonical `IPP-*` artifact first.
2. If no canonical `IPP-*` exists, optionally resolve legacy `IPW-*` artifact only for backward compatibility.
3. If neither exists, render `—No IPP—` as plain text.
4. Never emit broken markdown links for missing planning artifacts.

### 1.4 Non-functional requirements

- **N1:** Normalization is deterministic and idempotent.
- **N2:** Existing row links remain valid after normalization.
- **N3:** Existing timestamp and row-pruning behavior remains unchanged unless explicitly required by T04 scope.
- **N4:** Formatting output is machine-checkable by tests.

### 1.5 Out of scope

- Re-prioritizing MoSCOW ordering.
- Changing board ownership semantics or task placement policy.
- Global migration of unrelated board row formats.

---

## 2. Test design

| ID | Area | What to verify |
| ---- | ------ | ---------------- |
| T1 | Token grammar | FBU/task/IPP tokens match exact text forms and segment order. |
| T2 | IPP present case | Rows with resolvable planning artifacts render linked `—IPP—`. |
| T3 | IPP absent case | Rows without planning artifacts render plain text `—No IPP—` (not a markdown link). |
| T4 | Compatibility | Legacy `IPW-*` fallback resolves to linked `—IPP—` when canonical `IPP-*` missing. |
| T5 | Idempotency | Re-running formatter does not mutate compliant rows beyond no-op normalization. |
| T6 | No regression | Existing `update_kanban_docs.py` timestamp and cleanup behavior stays intact. |
| T7 | Link integrity | Updated board links resolve and do not introduce broken references. |

### 2.1 Planned test updates

- Extend `test_update_kanban_docs.py` with focused cases for:
  - strict token/ordering verification,
  - IPP-present and IPP-absent formatting,
  - legacy IPW compatibility fallback,
  - no-regression assertions for existing cleanup/timestamp tests.

---

## 3. Implementation plan

### Phase A - Row grammar and resolver contract

1. Add deterministic formatter/resolver for board row segments in `update_kanban_docs.py`.
2. Encode canonical token text and ordering rules.
3. Implement IPP resolution with `IPP-*` primary and optional `IPW-*` compatibility fallback.

### Phase B - Board integration

1. Apply formatter in both `kboard` and `fbuboard` reconciliation paths.
2. Ensure formatter is non-destructive for rows already compliant.
3. Ensure absent-artifact rows emit plain `—No IPP—` text.

### Phase C - Regression and verification

1. Add/extend tests in `test_update_kanban_docs.py` for all normative behaviors.
2. Run targeted test category for new row-format logic plus no-regression tests.
3. Validate touched docs for lint and link integrity.

### Phase D - Governance reconciliation

1. Ensure host task + UXR remain bidirectionally linked to this IPP artifact.
2. Ensure wording uses `IPP` for produced artifact references.

---

## 4. Verification gates

- Board rows render exact token text and order as specified.
- `—No IPP—` is plain non-link text when no planning artifact exists.
- `—IPP—` resolves as valid link when planning artifact exists.
- Test suite passes for new formatting and legacy no-regression behavior.
- Lint and link checks pass for touched governance docs.

---

## References

- [Host task E4:S19:T04](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T04-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links-uxr010.md)
- [UXR-010](../project-management/kanban/fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md)
- [kboard](../project-management/kanban/kboard.md)
- [fbuboard](../project-management/kanban/fbuboard.md)
- [update_kanban_docs.py](../../packages/frameworks/workflow mgt/scripts/update_kanban_docs.py)
- [test_update_kanban_docs.py](../../packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py)
