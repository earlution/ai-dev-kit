---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-01T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 10: Strict broken-anchor checking (post–E5:S09:T08)

**Task ID:** E5:S09:T10  
**Status:** TODO  
**Priority:** LOW  
**Estimated Effort:** Medium (corpus sweep; anchor slug alignment across MDX)  
**Created:** 2026-04-01  
**Last updated:** 2026-04-01 — **`v0.5.9.10+1`** Kanban filing (**FR-067 FU-3**)  
**Code:** E5S09T10

---

## Task ID

**Full Task ID:** `E5:S09:T10`

---

**Origin:** **[E5:S09:T08](./T08-docusaurus-strict-broken-links-post-fr067.md)** enabled **`onBrokenLinks` / `onBrokenMarkdownLinks` → `throw`**. Docusaurus still **warns** on **broken in-page anchors** (`#fragment`) while the production build exits **0** unless **`onBrokenAnchors`** is set to **`throw`**. **FR-067 FU-3** tracks this optional hardening.

---

## Purpose

- Align published docs with **zero false `#heading` / cross-doc anchor** references (or justified exceptions).
- Make **CI / `npm run build`** fail when a new broken anchor is introduced (**strict** mode), mirroring T08 for hrefs.

---

## Input

- [T08 – Strict broken links](./T08-docusaurus-strict-broken-links-post-fr067.md) (completed)
- [FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) — **FU-3**
- [docs/maintenance/docusaurus-corpus-triage-fr-067.md](../../../../../maintenance/docusaurus-corpus-triage-fr-067.md)
- Docusaurus: [`onBrokenAnchors`](https://docusaurus.io/docs/docusaurus-core#onBrokenAnchors)

---

## Inventory (known warnings as of T08 verification)

Re-run `cd portal && npm run build` and refresh this list before implementation:

- `workflow-flaws-reference-guide` — `#wf-001` … `#wf-004`
- `framework-dependency-installation-guide` / `troubleshooting-guide` / `use-cases` — install/integration anchor slugs
- `building-persistent-knowledge` — SOP anchor slug
- `UC-D-001` / `UC-D-002` / `UC-D-003`, **BR-002** — Story-001 changelog-validator anchor
- `kanban-completed` — Epic 4/8/10/11 story anchors

---

## Deliverables

1. **`portal/docusaurus.config.js`:** `onBrokenAnchors: 'throw'` (or project-equivalent) after corpus is clean.
2. **Corpus:** Fix or retarget headings / links so anchors resolve (Docusaurus slug rules; MDX quirks).
3. **`portal/README.md`:** Document anchor policy next to link policy.
4. **Tests:** Extend [tests/test_portal_fr067_build_triage.py](../../../../../tests/test_portal_fr067_build_triage.py) (or successor) to assert strict anchors when enabled.
5. **Traceability:** Close **FR-067 FU-3** with version marker via **RW** on **`epic/5-documentation-management`** when implemented.

---

## Acceptance criteria

1. `npm run build` exits **0** with **`onBrokenAnchors: 'throw'`**.
2. **FR-067 FU-3** marked done with pointer to this task and release version.
3. Maintenance triage / portal README updated for anchor policy.

---

## Related

- **E5:S09:T08** — strict **link** checking.
- **FR-058** — markdown hygiene workflow.
