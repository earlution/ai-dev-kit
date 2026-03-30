# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by **Keep a Changelog** ([`https://github.com/olivierlacan/keep-a-changelog`](https://github.com/olivierlacan/keep-a-changelog))  
and this project adheres to the **`RC.EPIC.STORY.TASK+BUILD`** versioning scheme described in the dev-kit versioning policy.

**Historical entries:** Per [`changelog-archival-policy`](docs/architecture/standards-and-adrs/changelog-archival-policy.md) (`changelog_archival.mode: latest_only` in `rw-config.yaml`), this file keeps only the latest release. Full history lives in [`CHANGELOG_ARCHIVE.md`](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md) and `CHANGELOG_v*.md` under `docs/changelog-and-release-notes/changelog-archive/`.

---

## [0.5.9.5+1] - 30-03-26

E5:S09:T05 — **FR-069:** GitHub Actions **Docusaurus site build** workflow ([`.github/workflows/docusaurus-build.yml`](.github/workflows/docusaurus-build.yml)) — path-filtered `pull_request` / `push` to `main`, Node 20, **`npm ci`** and **`npm run build`** in `portal/`; [`tests/test_portal_fr069_ci.py`](tests/test_portal_fr069_ci.py) contract tests; [`portal/README.md`](portal/README.md) CI pointer. **AC2** (simulated failure) remains optional manual verification.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.9.5+1.md)
