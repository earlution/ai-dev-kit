---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T21:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Task T63 - RW Recovery Journal and Rollback Contract (BR-038)

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-20  
**Last updated:** 2026-04-21  
**Version:** N/A  
**Task ID:** E6:S06:T63  
**Code:** E6:S06:T63  
**Associated BR:** [BR-038](../../../fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)

---

## Input

- [BR-038](../../../fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md) active unresolved scope.
- Current RW execution and validation contract.
- Existing workflow executor placeholders for checkpoint/rollback semantics.

## Problem Statement

RW is operationally stable, but failure recovery is not yet deterministic. When a run fails mid-sequence, operators need explicit run logs and a reproducible recovery contract to avoid state ambiguity and manual guesswork.

## Deliverable

- Deterministic **RW run journal** contract (per-step state, command/action, exit status, touched artifacts, timestamps).
- **Recovery report** contract produced on failure with actionable next steps.
- **Rollback/compensation contract** specifying what can be automatically reverted, what needs manual reconciliation, and safety guardrails.
- Documentation and acceptance tests for rerun/recovery behavior.

## Scope

1. Define RW run identity and journal schema.
2. Define required checkpoint events and failure snapshots.
3. Define rollback/compensation semantics and safety boundaries.
4. Define operator-facing recovery procedure and expected outputs.

## Acceptance Criteria

- [ ] **AC1:** RW journals each step deterministically with run ID, timestamp, and step outcome.
- [ ] **AC2:** Failure path emits a machine-readable and human-readable recovery report.
- [ ] **AC3:** Rollback/compensation rules are explicitly documented (automatic vs manual surfaces).
- [ ] **AC4:** Rerun behavior after failed runs is deterministic and test-covered.
- [ ] **AC5:** BR-038, T63, and Story 006 references are wired and consistent.

## References

- [BR-038](../../../fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)
- [T02 historical anchor](T02-fix-release-workflow-micromanagement-issues.md)
