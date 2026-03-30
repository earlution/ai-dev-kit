# AI Dev Kit — documentation site

This directory (`portal/`) is the **[Docusaurus](https://docusaurus.io/)** site for **AI Dev Kit**. The monorepo overview, installation, and workflows live in the repository root [README.md](../README.md).

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
