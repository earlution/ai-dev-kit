---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S15:T05 - Planning: Spec, Tests, Implementation Plan (IPP)

**Host Task:** [`T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md`](../project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md) **(E2:S15:T05)**  
**Planning for:** [FR-090 - UKW canonical row transform engine and board-specific rendering contracts](../project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)  
**Status:** Published

---

## 1. Specification

### 1.1 Goal

Implement FR-090 by introducing a shared canonical row-transform pipeline for UKW/RW so repeating MoSCOW tail segments are deterministically normalized and parity-safe across invocation contexts.

### 1.2 Functional requirements

| ID | Requirement | Source |
| ---- | ---- | ---- |
| F1 | RW and UKW must call one shared row-transform pipeline to remove ordering divergence. | T05 AC1, FR-090-F1 |
| F2 | Pipeline must use parse-model-normalize-render semantics instead of append-style mutation chains. | FR-090-F2 |
| F3 | `fbuboard` must render `FBU -> Task -> IPP -> Last modified` deterministically. | T05 AC2, FR-090-F3 |
| F4 | No synthetic second `Last modified` is appended when a valid timestamp already exists. | T05 AC3, FR-090-F4 |
| F5 | Duplicate FBU/task/IPP/footer segments are reduced to canonical single-instance output. | T05 AC4, FR-090-F5 |
| F6 | Divergence-safe diagnostics and forensic fallback remain consistent between RW and UKW. | T05 AC5, FR-090-F6 |

### 1.3 Non-functional requirements

| ID | Requirement |
| ---- | ---- |
| N1 | Idempotency: second run over canonical output is byte-stable. |
| N2 | Parity: same fixtures through RW and UKW yield identical output. |
| N3 | Auditability: diagnostics identify repaired rows and divergence cases. |
| N4 | Safety: unresolved divergence paths remain non-destructive. |

### 1.4 Out of scope

- MoSCOW reprioritization policy changes.
- Broad rewrites outside row-tail canonicalization paths.
- Release workflow semantics unrelated to board-row transforms.

---

## 2. Test design

| ID | Area | What to verify |
| ---- | ---- | ---- |
| T1 | Pipeline parity | RW and UKW paths produce identical canonical row output for shared fixtures. |
| T2 | fbuboard ordering | Output always enforces `FBU -> Task -> IPP -> Last modified`. |
| T3 | Timestamp safety | Valid existing timestamp prevents synthetic second footer append. |
| T4 | Deduplication | Repeated runs do not multiply task/FBU/IPP/footer segments. |
| T5 | Idempotency | Canonicalized fixtures are unchanged on subsequent runs. |
| T6 | Divergence policy | Divergence rows are diagnosed and preserved forensic-safe. |

### 2.1 Planned test updates

- Extend `packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py` with parity fixtures and canonical ordering assertions.
- Evolve documentary regression `test_4_13` into post-fix preservation/pass assertions once divergence is eliminated.
- Add repeated-run fixture checks for deduplication and timestamp stability.

---

## 3. Implementation plan

### Phase 1 - Canonical pipeline introduction

1. Introduce shared row-transform entrypoint in `update_kanban_docs.py`.
2. Consolidate parse-normalize-render logic behind board contract selection.

### Phase 2 - Integration and ordering unification

1. Route `update_kanban_board` and `enforce_terminal_timestamps_on_boards` through the shared pipeline.
2. Remove normalization/reconciliation/timestamp ordering divergence across contexts.

### Phase 3 - Regression and parity hardening

1. Add parity, ordering, timestamp, deduplication, and idempotency tests.
2. Validate that known BR-069 symptom fixtures resolve to canonical output.

### Phase 4 - Validation and traceability closure

1. Run full verification suite and dry-run checks for both update modes.
2. Map implemented evidence to T05 AC1-AC6 and FR-090/BR-069 residual closure readiness.

---

## 4. Verification gates

- Shared pipeline invoked by both RW and UKW row update paths.
- `fbuboard` ordering contract always satisfied.
- No synthetic second timestamp append for valid existing row timestamps.
- Repeated runs remain idempotent with no tail-segment multiplication.
- Regression suite demonstrates RW/UKW parity and forensic-safe divergence behavior.

---

## References

- [Host task E2:S15:T05](../project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md)
- [FR-090](../project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- [BR-069](../project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [ICW-E2S15T05-specification](ICW-E2S15T05-specification.md)
- [ICW-E2S15T05-test-design](ICW-E2S15T05-test-design.md)
- [ICW-E2S15T05-implementation-plan](ICW-E2S15T05-implementation-plan.md)
