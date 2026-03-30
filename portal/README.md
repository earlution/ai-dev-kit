# AI Dev Kit — documentation site

This directory (`portal/`) is the **[Docusaurus](https://docusaurus.io/)** site for **AI Dev Kit**. The monorepo overview, installation, and workflows live in the repository root [README.md](../README.md).

## Publish scope (FR-066)

**Source of truth** for site content is the repository **[`docs/`](../docs/)** tree, aligned with [Ultimate Canonical KB Structure](../docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md) (**pillars**: architecture, changelog-and-release-notes, project-management, guides, developer paths under `docs/`, knowledge, etc.).

### Included

- All markdown under `docs/` **except** paths listed under **Excluded** below.
- Entry page: [`docs/documentation/docusaurus-portal-index.md`](../docs/documentation/docusaurus-portal-index.md) (sidebar position `0`).

### Excluded (Docusaurus `exclude` globs)

- **`changelog-and-release-notes/changelog-archive/**`** — mass per-release changelog files (1000+); not intended for v1 static publish; summaries remain under `changelog-and-release-notes/` where present.
- **`knowledge/changelog-and-release-notes/changelog-archive/**`** — duplicate archive mirror under `knowledge/`.

### Broken links and anchors (FR-067)

- **`docusaurus.config.js`:** `onBrokenLinks: 'warn'` and `onBrokenMarkdownLinks: 'warn'`.
- **Rationale:** Many legacy markdown paths link to `packages/`, old epic/story layouts, or missing anchors; the production **build still completes** while warnings list remediation targets.
- **Follow-up (strict mode):** Tracked as **Kanban [E5:S09:T08](../docs/project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T08-docusaurus-strict-broken-links-post-fr067.md)** and **FR-067 → Follow-up work → FU-1** (coordinate markdown hygiene with **FR-058**). Do not rely on chat for this — those are the SoT.
- **Target state:** tighten to `'throw'` after batch link hygiene (follow-up; coordinate with [FR-058](../docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow.md)).
- **Detail:** [Docusaurus corpus triage (FR-067)](../docs/maintenance/docusaurus-corpus-triage-fr-067.md).

**FR-068** addresses navigation and sidebar information architecture (implemented in `sidebars.js` and the site homepage).

### Sidebar ↔ `docs/` mapping (FR-068)

| Sidebar label (nav) | `docs/` folder | Notes |
| ------------------- | -------------- | ----- |
| Architecture | `architecture/` | Canonical pillar |
| Changelog & release notes | `changelog-and-release-notes/` | Canonical pillar; archive globs still excluded per FR-066 |
| Project management | `project-management/` | Canonical pillar (Kanban, FR/BR, rituals) |
| Guides | `guides/` | Canonical pillar |
| Documentation (developer & user) | `documentation/` | Canonical pillar |
| Knowledge base | `knowledge/` | Canonical pillar |
| Maintenance (portal triage) | `maintenance/` | **Extension** (e.g. FR-067 triage notes) |
| Analysis | `analysis/` | **Extension** |
| Implementation cycles | `implementation-cycles/` | **Extension** |
| Developer tools | `developer-tools/` | **Extension** |
| Changelog (legacy root) | `changelog/` | **Extension** (legacy alongside `changelog-and-release-notes/`) |

Canonical structure reference: [Ultimate Canonical KB Structure](../docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md).

**CI (FR-069):** GitHub Actions runs `npm ci` and `npm run build` in this directory when `portal/`, `docs/`, or [`.github/workflows/docusaurus-build.yml`](../.github/workflows/docusaurus-build.yml) change on pull requests and on pushes to `main`.

## Installation

```bash
yarn
```

(or `npm install` in `portal/`.)

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

**Minification (FR-068):** `npm run build` runs `docusaurus build --no-minify`. On this stack (Docusaurus 3.9.x + current client bundle), the default Terser pass can fail with `Unexpected token: operator (<)` while the server bundle succeeds. **Attempted workaround:** skip JS minify until the pipeline is fixed or upgraded; the site is still a fully linked production build.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
