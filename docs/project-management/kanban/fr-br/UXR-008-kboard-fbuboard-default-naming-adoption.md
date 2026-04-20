---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Default Board Naming (`kboard.md` / `fbuboard.md`)

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-04-20  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** IN PROGRESS  
**Code:** UXR-008  
**Last updated:** 2026-04-20 (reverse-engineered implementation artifacts backfilled)  
**Implementing Task:** E6:S07:T114  
**Repository Task:** [E6:S07:T114](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard.md)
**Planning package (ICW):** [Specification](../../../implementation-cycles/ICW-E6S07T114-specification.md) · [Test design](../../../implementation-cycles/ICW-E6S07T114-test-design.md) · [Implementation plan](../../../implementation-cycles/ICW-E6S07T114-implementation-plan.md)

---

## Summary

The current board filenames (`kanban-board.md` and `fr-br-uxr-board.md`) are verbose and inconsistent with established shorthand usage (`kboard` and `fbuboard`) in automation and maintenance narratives. This UXR captures the request to make `kboard.md` and `fbuboard.md` the default canonical names for board operations across documentation, scripts, and installed framework assets.

---

## Research Question

Does adopting concise canonical filenames (`kboard.md`, `fbuboard.md`) improve operator speed, reduce naming drift across scripts/docs, and lower board-maintenance errors during RW/UKW execution and greenfield installs?

---

## Findings So Far

1. Runtime scripts and validators previously used long-form board names as defaults.
2. Existing documentation mixed shorthand terms with long-form file references.
3. Packaged installer and workflow tooling required default-path changes for downstream adopters.
4. Backward compatibility aliases are needed to avoid breaking older references.

---

## Scope

- Canonicalize default board filenames to `kboard.md` and `fbuboard.md`.
- Update active docs and framework scripts that read/write board files.
- Keep legacy filenames as compatibility aliases during transition.
- Ensure installed package behavior uses new defaults.

---

## Acceptance Criteria

- [ ] Canonical task board default is `kboard.md` in scripts and docs.
- [ ] Canonical FR/BR/UXR board default is `fbuboard.md` in scripts and docs.
- [ ] Legacy board filenames remain backward-compatible aliases.
- [ ] Installed framework scripts resolve new defaults without breaking existing repos.

---

## References

- [kboard](../kboard.md)
- [fbuboard](../fbuboard.md)
- [T114](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard.md)
