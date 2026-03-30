---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Docusaurus corpus triage (FR-067 / E5:S09:T03)

**FR:** [FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)  
**Task:** [E5:S09:T03](../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T03-docusaurus-build-triage-fr-067.md)

## Summary

Triage to achieve **`npm run build` exit 0** for the FR-066 publish scope (`portal/` → `../docs/` with changelog-archive excludes).

## Failure classes addressed

| Class | Approach |
|-------|-----------|
| MDX JSX / expressions | Escaped or rephrased `<N`, `<=`, `{placeholder}` patterns; PIR templates use HTML entities; automated `scripts/escape_mdx_placeholders.py` for common tokens outside fenced code |
| MDX in templates / docs | Curly-brace placeholders (`{epic}`, `{PROJECT_NAME}`, `{Name}`, etc.) escaped or rewritten so MDX does not treat them as expressions |
| Assets / embeds | [building-persistent-knowledge.md](../knowledge/guides/building-persistent-knowledge.md): YouTube iframe → markdown link; missing PNGs → prose figure notes |
| Broken markdown links | **Policy:** `onBrokenLinks: 'warn'`, `onBrokenMarkdownLinks: 'warn'` in `portal/docusaurus.config.js` until batch link repair (many legacy relative links) |

## Excludes (unchanged vs FR-066)

- `changelog-and-release-notes/changelog-archive/**`
- `knowledge/changelog-and-release-notes/changelog-archive/**`

Listed in [portal/README.md](../../portal/README.md) under **Excluded**.

## Scale / stats (approximate)

- **Files touched:** wide sweep across `docs/**/*.md` (MDX-safe placeholders, Story-011 `<sup>` fix, ICW numerics, runbook tags, RW-AGENT placeholders, task-template-generator wording, etc.)
- **Automation:** `scripts/escape_mdx_placeholders.py` (re-runnable for new docs; skips `changelog-archive` tree)
- **Config:** `portal/docusaurus.config.js` — link check mode `warn` + comment; see portal README for policy and follow-up

## Deferred outcomes (explicit owners)

Do **not** rely on conversation memory. Later work is on **FR / task**:

| Item | Owner |
|------|--------|
| Switch link check from **`warn` → `throw`** after corpus link repair | **[E5:S09:T08](../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T08-docusaurus-strict-broken-links-post-fr067.md)** — coordinate **[FR-058](../project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow.md)**; summary table **FU-1** on **[FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)** |
| Populate **GitHub Releases** for SemVer tags when desired | **RW Step 12.5** — `create_github_release.py` (see project `.cursorrules`); **FU-2** on **[FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)** |

## Verification

- `cd portal && npm run build` — **0** (Node 20+; CI representative)
- Optional: `PORTAL_BUILD_STRICT=1 pytest -m portal_build` for gate
