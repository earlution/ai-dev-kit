---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T16:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E6:S07:T109 – UKW MoSCOW: Full Open-Task Coverage for IN PROGRESS Stories (BR-059)

**Task ID:** E6:S07:T109  
**Status:** TODO  
**Priority:** HIGH  
**Version Anchor:** *(pending — run `RW -k E6:S07:T109` on `epic/6-framework-management`)*  

**Associated BR:** [BR-059](../../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md)

---

## Scope

Implement ** durable UKW / rule / agent behaviour** so that for stories marked **IN PROGRESS**, **all non-complete tasks** from the story checklist appear in MoSCOW (or **Won’t** with rationale) — fixing the failure mode in [BR-059](../../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md) (example: **E5:S09:T01–T07**). Includes documentation updates to UKW guidance and optional validation/checklist hooks described in the BR.

---

## Input

- [BR-059](../../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md) expected vs observed behaviour.  
- [E6:S07:T101 – UKW perpetual](T101-update-kanban-workflow-ukw.md) (workflow owner).  
- Example story: [E5:S09 – Docusaurus portal](../../Epic-5/Story-009-docusaurus-documentation-portal.md).

---

## Deliverable

1. **UKW Step 6** procedure (rules + agent instructions) that **diffs** story checklist ↔ board rows and adds missing tasks.  
2. **Regression path:** documented UKW run that enumerates all open tasks for a multi-task story.  
3. **RW** on **`epic/6-framework-management`** when implementation is released (**T109** build).

---

## Acceptance Criteria

- [ ] **AC1:** UKW (or documented mandatory follow-up) cannot silently leave an IN PROGRESS story with **N** open checklist tasks but fewer than **N** corresponding MoSCOW rows without a **Won’t** / deferral note.  
- [ ] **AC2:** **E5:S09** (or successor example) stays consistent after a full UKW pass — no “only T01” drift.  
- [ ] **AC3:** BR-059 moved toward RESOLVED with verification note after adoption.

---

## Approach

1. Align with proposed direction § in BR-059 (diff checklist vs board; add T01…Tn in order).  
2. Update `.cursorrules` / UKW skill / workflow YAML as needed.  
3. Optional: lightweight script or validator stub for task-count parity.

---

## Dependencies

**Depends On:** Understanding of current UKW Step 6 implementation (T101).  
**Blocks:** Planner trust in MoSCOW as SoT for parallel portal work.  
**Related:** [BR-042](../../../fr-br/BR-042-ukw-agent-board-cleanup-failure.md) (opposite failure: completed items left on board).

---

## References

- [`kanban-board.md`](../../../../kanban-board.md)  
- [`fr-br-uxr-board.md`](../../../../fr-br-uxr-board.md) — Phase B intake mapping
