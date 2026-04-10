# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by **Keep a Changelog** ([`https://github.com/olivierlacan/keep-a-changelog`](https://github.com/olivierlacan/keep-a-changelog))  
and this project adheres to the **`RC.EPIC.STORY.TASK+BUILD`** versioning scheme described in the dev-kit versioning policy.

**Historical entries:** Per [`changelog-archival-policy`](docs/architecture/standards-and-adrs/changelog-archival-policy.md) (`changelog_archival.mode: latest_only` in `rw-config.yaml`), this file keeps only the latest release. Full history lives in [`CHANGELOG_ARCHIVE.md`](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md) and `CHANGELOG_v*.md` under `docs/changelog-and-release-notes/changelog-archive/`.

---
## [0.3.2.12+2] - 10-04-26

E3:S02:T12 — Change implemented: hardened task-touch SemVer conversion with read-only derive plus explicit finalize semantics to prevent PATCH over-increment/collision drift (BR-061), with updated FR-046 tagging tests/docs. SemVer **v0.4.727+2**.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.3.2.12+2.md)
---