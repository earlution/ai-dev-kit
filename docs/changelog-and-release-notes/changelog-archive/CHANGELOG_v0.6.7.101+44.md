# Detailed Changelog — v0.6.7.101+44

**Release Date:** 2026-04-13 17:13:35 UTC  
**Version:** `v0.6.7.101+44`  
**SemVer:** `v0.4.736+44`  
**Task Anchor:** `E6:S07:T101` (`RW -d` documentation-only, `--art` adoption)

---

## Summary

Change implemented: **RW -d** documentation release attributing the post-UKW Kanban batch to perpetual **E6:S07:T101** — main board lists UKW in Ongoing, `fr-br-uxr-board` metadata and **FR-046** row aligned after **v0.5.1.46+6**, with Epic/Story/T101 doc bookkeeping.

---

## Changed

- `kanban-board.md`: `Last Updated` / `Version`; added **E6:S07:T101** Ongoing row (UKW); normalized MoSCOW `Last modified` stamps.
- `fr-br-uxr-board.md`: version context, **FR-046** row status narrative, row timestamps.
- `T101-update-kanban-workflow-ukw.md`, Story-007 rollup, `Epic-6.md` (header): UKW + release traceability.
- `T46-rw-semver-tag-task-touch-mode.md`: UKW bookkeeping section (cross-release note).

---

## Verification

- `validate_branch_context.py --strict --requested E6:S07:T101 --art` → pass on `dev`.
- `validate_rw_task_complete.py` / `validate_rw_task_intent.py --art` → pass (perpetual T101).

---

## Traceability

- Epic: `6`
- Story: `7`
- Task: `101`
- Mode: **RW -d** (commit only; **no** git tag, **no** push, **no** GitHub release per documentation-only path)
