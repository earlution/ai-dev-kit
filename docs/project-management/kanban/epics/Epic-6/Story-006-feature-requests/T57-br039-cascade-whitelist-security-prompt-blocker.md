---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T12:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 6, Task 57: BR-039 Cascade whitelist / security prompt usability (vendor)

**Task ID:** E6:S06:T57  
**Status:** IN PROGRESS (IPW durable package + BR-039 re-verification protocol; vendor/runtime evidence pending)  
**Priority:** CRITICAL  
**Estimated Effort:** Small (repo) / Unknown (vendor)  
**Created:** 2026-03-31  
**Last updated:** 2026-04-02 — IPW artifact + BR updates (pre-release)  
**Code:** E6S06T57

**Upstream:** [BR-039 – Cascade Whitelist Security Prompt Usability Blocker](../../../fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md)

**Planning Artifact (IPW):** [IPW-E6S06T57-br039-vendor-blocker-planning.md](../../../../../implementation-cycles/IPW-E6S06T57-br039-vendor-blocker-planning.md)

**Related:** [BR-038](../../../fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md) (symptoms); [E6:S06:T02](T02-fix-release-workflow-micromanagement-issues.md) (RW micromanagement — partial overlap; **BR-039** is root cause in **Cascade/Windsurf**)

---

## Input

- [BR-039](../../../fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md) (open; CRITICAL).
- Kanban / FR-UXR board rows; **epic/6-framework-management** as integration branch.
- [IPW-E6S06T57-br039-vendor-blocker-planning.md](../../../../../implementation-cycles/IPW-E6S06T57-br039-vendor-blocker-planning.md) (durable implementation-planning package for this task).

---

## Scope

**In this repository (ai-dev-kit):**

- Maintain traceability from **BR-039** to a single implementing task.
- Document known impact on **RW / terminal-heavy workflows** and link **BR-038** where relevant.
- Capture **vendor escalation** status, workaround notes, and **re-verification** steps when Cascade ships fixes (no false “Fixed” claims until validated).

**Out of scope:** Fixing Cascade product code (tracked externally / vendor).

---

## Deliverable

1. **BR-039** shows **Implementing Task:** `E6:S06:T57` and stays aligned on status.
2. Short **Evidence** (vendor): dates, links, product version when re-tested — no secrets.
3. On product fix: update **BR-039** success criteria and this task **Status** per changelog policy (attempted vs verified).

---

## Acceptance Criteria

- [ ] **AC1:** BR-039 linked to this task; kanban and FR/BR board rows include task link.
- [ ] **AC2:** Repro steps from BR-039 re-run on a current Windsurf/Cascade build; outcome recorded in **Evidence** (pass, fail, or blocked).
- [ ] **AC3:** If still blocked: documented workaround path for maintainers (e.g. Cursor for full RW) or explicit “vendor-only” note with owner for follow-up.
- [ ] **AC4:** Documentation and release notes use attempted/verified language only; no “fixed/resolved/completed” claim before evidence-backed validation.

---

## Version Anchor

**Forensic marker:** **RW** v0.6.6.57+2 — IPW durable package + BR-039 re-verification protocol (**vendor/runtime verification** still pending for **AC2** / **AC3**).

---

## Evidence

Add vendor ticket links, versions, and retest notes here.

---

## Execution Checklist (from IPW)

- [ ] Confirm current Cascade/Windsurf version/build under test.
- [ ] Run BR-039 repro sequence and whitelist persistence check.
- [ ] Run terminal-heavy workflow continuity check (RW-like sequence).
- [ ] Record evidence with: date, version, scenario, expected, observed, result.
- [ ] Decide status as fail/blocked/verified with rationale.
- [ ] If verified, prepare RW update to close task language and anchor release version.

---

## References

- **BR-039:** [BR-039-cascade-whitelist-security-prompt-usability-blocker.md](../../../fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md)
- **Video (repo root):** `Screen Recording 2026-03-09 at 16.07.14.mov` (per BR-039)
- **IPW package:** [IPW-E6S06T57-br039-vendor-blocker-planning.md](../../../../../implementation-cycles/IPW-E6S06T57-br039-vendor-blocker-planning.md)
