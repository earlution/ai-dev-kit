# CHANGELOG_v0.2.15.4+1

## Release Summary

`RW E2:S15:T04 --art` publishes governance-aligned re-housing for `BR-069`, moving the implementing task from `E6:S07:T117` to `E2:S15:T04` and reconciling Story/FBU/board traceability to remove Story 007 default-housing drift.

## Internal and SemVer

- Internal version: `0.2.15.4+1`
- SemVer (`task_touch`): `0.4.764+1`

## Included Changes

- Created `E2:S15:T04` task doc for `BR-069` under Story 015.
- Deleted mis-housed `E6:S07:T117` task doc.
- Updated `BR-069` implementing-task linkage to `E2:S15:T04`.
- Updated `Story 015`, `Story 007`, `kboard.md`, and `fbuboard.md` for re-housing traceability.
- Updated `FR-087` and `E4:S19:T03` to explicitly include mis-housing re-housing governance protocol.

## Verification

- `validate_rw_task_complete --requested E2:S15:T04`
- `validate_rw_task_intent --requested E2:S15:T04 --art`
- `validate_version_bump --strict --requested E2:S15:T04 --art`
- `validate_changelog_format`
- `check_changelog_size`
- `update_kanban_docs.py`
- targeted `validate_links.py --files ...`
