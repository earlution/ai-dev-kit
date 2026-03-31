---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 09: GitHub Pages go-live verification (FR-070 follow-up)

**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-03-31  
**Last updated:** 2026-03-31 (RW -k **v0.5.9.9+1** — discrete task + kanban wiring)  
**Code:** E5S09T09

**Upstream:** [FR-070 – Deployment and hosting](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md) (automation shipped in **T06**); this task **closes the operational gap** between “`gh-pages` branch updated by Actions” and “canonical URL returns **200** for readers.”

---

## Task ID

**Full Task ID:** `E5:S09:T09`

---

## Scope

Make the Docusaurus site **actually served** from GitHub Pages and **prove** it: repo **Settings → Pages**, confirm deploy workflow health, verify **`https://earlution.github.io/ai-dev-kit/`** (and key paths), update docs if discoverability steps are wrong or incomplete.

The **Docusaurus deploy to GitHub Pages** workflow can succeed and **`gh-pages`** can contain a fresh build, while the **project Pages URL still returns 404** if the repository has not enabled **Build and deployment** → **Deploy from a branch** → **`gh-pages`** / **`/(root)`**, or if org policies / naming prevents publishing.

---

## Input

- **E5:S09:T06** / [FR-070](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md) — deploy workflow and [portal hosting docs](../../../../../../portal/README.md).
- **Public** `earlution/ai-dev-kit` repo; maintainer access to **Settings → Pages** and **Actions**.
- Remote **`gh-pages`** branch present (Actions publish from `main`).

---

## Deliverable

- **Repo configuration** — GitHub Pages source matches FR-070 docs: branch **`gh-pages`**, folder **`/ (root)`** (or documented alternative).
- **Verification** — Canonical URL **HTTP 200**; spot-check home + one docs path; optional FR-071 search smoke on production.
- **Actions** — Green **Docusaurus deploy to GitHub Pages** on `main` (or fix + **`workflow_dispatch`** redeploy).
- **Documentation** — Optional **Troubleshooting** / go-live notes under **Production hosting (FR-070)** in `portal/README.md` if gaps found.

---

## Acceptance Criteria

- [ ] AC1: **`https://earlution.github.io/ai-dev-kit/`** returns success (not 404) after configuration/propagation.
- [ ] AC2: Evidence recorded; **Evidence** section lists verification command/date or Actions narrative.
- [ ] AC3: [FR-070](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md) **R01** “reachable” **validated** or residual blockers documented with owner/next step.

---

## Dependencies

**Depends on:** E5:S09:T06 (complete).

---

## Out of scope

- Switching host off GitHub Pages (separate FR/ADR).
- **FR-071** search behavior beyond quick smoke on prod (already T07).

---

## Version Anchor

**Forensic marker (when implementation complete):** `✅ COMPLETE (v0.5.9.9+N)` — **RW** (non `-k`) when ACs are met.  
**Kanban init:** `v0.5.9.9+1` — **RW -k E5:S09:T09** (discrete task filed + board/Story/Epic/FR-070 follow-up).

---

## Evidence

- **v0.5.9.9+1 (RW -k):** Task document; Story 009 / Epic 5 / `kanban-board` / FR-070 Follow-up section.
- *(Post go-live: Settings confirmation, `curl`/browser, Actions run, README edits.)*
