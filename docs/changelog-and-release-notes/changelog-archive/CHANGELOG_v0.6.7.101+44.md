# Detailed Changelog — v0.6.7.101+44

**Release Date:** 2026-04-09 13:15:24 UTC  
**Version:** `v0.6.7.101+44`  
**SemVer:** `v0.4.712+44`  
**Task Anchor:** `E6:S07:T101`

---

## Summary

Change implemented: repo-wide open-task status sweep synchronized task-status truth between task documents, story checklists, and active Kanban board rows.

---

## Changed

- Updated status fields for `E7:S06:T10` through `E7:S06:T16` task documents to match completion evidence.
- Corrected stale unchecked-but-complete checklist rows in Story docs (`E2:S09:T00`, `E2:S10:T00`, `E4:S11:T05`, `E7:S06:T09`).
- Removed stale completed entries from active `Should Have` rows on `kanban-board.md`.
- Updated internal version anchor to `0.6.7.101+44`.

---

## Traceability

- Epic: `6`
- Story: `7`
- Task: `101` (Perpetual UKW maintenance)
# Changelog — v0.6.7.101+44

**Release Date:** 2026-04-09 10:59:35 UTC
**Version:** `v0.6.7.101+44`  
**Task Anchor:** `E6:S07:T101`  
**Release Type:** RW `-k` maintenance release (`--art`)

## Summary

This release finalizes MoSCOW board hygiene updates by pruning stale completed entries from active board sections and aligning active-board summaries with row-level truth.

## Changes Implemented

### Kanban Board Cleanup

- Removed completed tasks that were still listed in active MoSCOW sections on `kanban-board.md`.
- Preserved completed-history traceability in `kanban-completed.md`.

### FR/BR/UXR Board Cleanup

- Removed FR/BR/UXR rows from active MoSCOW sections where linked source docs are already in completed/implemented/fixed/resolved states.
- Kept `BR-039` active due to unresolved product-level verification status.
- Replaced brittle static numeric priority counts with source-of-truth guidance based on row placement.

### Versioning

- Bumped internal version from `v0.6.7.101+43` to `v0.6.7.101+44`.

## Validation Notes

- Branch safety, task completeness, and task-intent guard validations passed for `RW -k E6:S07:T101 --art`.
- Post-cleanup board audit confirms no stale completed rows remain in active FR/BR/UXR MoSCOW sections.

