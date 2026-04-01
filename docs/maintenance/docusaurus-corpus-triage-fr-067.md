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
| Broken markdown links | **Policy (post–T08):** `onBrokenLinks: 'throw'`, `onBrokenMarkdownLinks: 'throw'` — corpus link repairs with **E5:S09:T08**; regressions fail `npm run build` |

## Excludes (unchanged vs FR-066)

- `changelog-and-release-notes/changelog-archive/**`
- `knowledge/changelog-and-release-notes/changelog-archive/**`

Listed in [portal/README.md (repository root)](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) under **Excluded**.

## Scale / stats (approximate)

- **Files touched:** wide sweep across `docs/**/*.md` (MDX-safe placeholders, Story-011 `<sup>` fix, ICW numerics, runbook tags, RW-AGENT placeholders, task-template-generator wording, etc.)
- **Automation:** `scripts/escape_mdx_placeholders.py` (re-runnable for new docs; skips `changelog-archive` tree)
- **Config:** `portal/docusaurus.config.js` — link check mode **`throw`**; see portal README

## Deferred outcomes (explicit owners)

Do **not** rely on conversation memory. Later work is on **FR / task**:

| Item | Owner |
|------|--------|
| ~~Switch link check from **`warn` → `throw`** after corpus link repair~~ | **Done — E5:S09:T08** at **`v0.5.9.8+2`**. Ongoing hygiene: **[FR-058](../project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow.md)**. **FU-1** closed on **[FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)**. |
| Populate **GitHub Releases** for SemVer tags | **[E6:S07:T103](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T103-release-workflow-maintenance-perpetual-task.md)** (RW Step 12.5); **[FR-041](../project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md)**; **FU-2** on **[FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)** |
| **Strict broken anchors** (`onBrokenAnchors` → **`throw`**) | **[E5:S09:T10](../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T10-docusaurus-strict-broken-anchors-post-t08.md)**; **FR-067 FU-3** |

## Verification

- `cd portal && npm run build` — **0** (Node 20+; CI representative)
- Optional: `PORTAL_BUILD_STRICT=1 pytest -m portal_build` for gate
