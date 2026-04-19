---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 009 – AI Dev Kit installation and adopter integration

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-04-19  
**Last updated:** 2026-04-19 (RW **v0.6.9.1+5** — **E6:S09:T01** `--art`; Wave 3 user-doc alignment tranche 1)  
**Version:** v0.6.9.1+5  
**Code:** E6S09

---

## Task Checklist

- [ ] **E6:S09:T01 – Greenfield installation process (FR-080)** - IN PROGRESS (HIGH — Wave 2 orchestration implemented; verification/logging waves pending)
  - Task: [`T01-greenfield-installation-process-fr080.md`](Story-009-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080.md) | [FR-080](../../fr-br/FR-080-greenfield-installation-process.md)
  - IPW: [`IPW-E6S09T01-greenfield-installation-fr080.md`](../../../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)

- [ ] **E6:S09:T02 – Brownfield modular adopter integration (FR-081)** - TODO (MEDIUM — operationalize ADR-003: modular surfaces, matrices, respectful host architecture)
  - Task: [`T02-brownfield-modular-adopter-integration-fr081.md`](Story-009-ai-dev-kit-installation-and-adopter-integration/T02-brownfield-modular-adopter-integration-fr081.md) | [FR-081](../../fr-br/FR-081-brownfield-modular-adopter-integration.md)

- [ ] **E6:S09:T03 – Installation canonical repository alignment (FR-082)** - TODO (MEDIUM — defaults and docs aligned to canonical `earlution/ai-dev-kit` coordinates)
  - Task: [`T03-installation-canonical-repo-alignment-fr082.md`](Story-009-ai-dev-kit-installation-and-adopter-integration/T03-installation-canonical-repo-alignment-fr082.md) | [FR-082](../../fr-br/FR-082-installation-distribution-canonical-repo-alignment.md)

---

## Overview

This story owns **design and delivery** of how AI Dev Kit is installed and integrated into **recipient** repositories: a **complete greenfield** first-run path (FR-080), **brownfield** modular adoption aligned with [ADR-003](../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) (FR-081), and **tooling/doc accuracy** for canonical distribution coordinates (FR-082).

Work is tracked in **Epic 6** because this is **framework distribution and adoption mechanics**, not documentation-only maintenance.

---

## Goal

- **Greenfield:** Opinionated, reproducible install → configure → verify for new or template projects.  
- **Brownfield:** Contract-first, optional surfaces; host project owns architecture.  
- **Hygiene:** Install scripts and docs reference the correct public GitHub repository by default.

---

## Related

- [ADR-003](../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- [FR-080](../../fr-br/FR-080-greenfield-installation-process.md) · [FR-081](../../fr-br/FR-081-brownfield-modular-adopter-integration.md) · [FR-082](../../fr-br/FR-082-installation-distribution-canonical-repo-alignment.md)
- [INSTALL_IN_YOUR_PROJECT.md](../../../../../INSTALL_IN_YOUR_PROJECT.md)
