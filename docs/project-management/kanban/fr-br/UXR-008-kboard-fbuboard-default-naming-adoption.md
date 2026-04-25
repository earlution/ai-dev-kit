---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Canonical Kanban Filename Normalization (`kboard.md` / `fbuboard.md` pattern)

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-04-20  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** IN PROGRESS  
**Code:** UXR-008  
**Last updated:** 2026-04-25 (scope reopened from board-only naming to full Kanban/FR-BR-UXR filename normalization)  
**Implementing Tasks:** E6:S07:T114 (completed phase), E4:S19:T05 (normalization expansion; re-housed from misfiled E6:S07:T117)  
**Repository Tasks:** [E6:S07:T114](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard.md) · [E4:S19:T05](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md)
**Planning package (ICW):** [Specification](../../../implementation-cycles/ICW-E6S07T114-specification.md) · [Test design](../../../implementation-cycles/ICW-E6S07T114-test-design.md) · [Implementation plan](../../../implementation-cycles/ICW-E6S07T114-implementation-plan.md)

---

## Summary

The initial rename of long-form board filenames (`kanban-board.md` and `fr-br-uxr-board.md`) to shorthand defaults (`kboard.md` / `fbuboard.md`) is complete, but filename patterns across the rest of `docs/project-management/kanban/` remain inconsistent. This reopened UXR now captures full-surface normalization for kanban and FR/BR/UXR related filenames to the same concise, deterministic pattern family.

---

## Research Question

Does extending concise canonical naming beyond the two board files to all kanban and FR/BR/UXR related filenames improve discoverability, reduce maintenance friction, and lower path/link drift during RW/UKW/intake operations?

---

## Findings So Far

1. Runtime scripts and validators previously used long-form board names as defaults.
2. Existing documentation mixed shorthand terms with long-form file references.
3. Packaged installer and workflow tooling required default-path changes for downstream adopters.
4. Board-level defaults were normalized, but supporting kanban and FR/BR/UXR docs still use mixed naming styles.
5. Backward compatibility aliases/redirect handling are needed to avoid breaking existing references.

---

## Scope

- Preserve board defaults as `kboard.md` and `fbuboard.md`.
- Normalize all kanban + FR/BR/UXR related filenames under `docs/project-management/kanban/` to one concise pattern family.
- Update active docs and framework scripts that read/write renamed files.
- Keep legacy filename compatibility (aliases, redirect mappings, or migration notes) during transition.
- Ensure installed package behavior and generated links use canonical names.

---

## Acceptance Criteria

- [x] Canonical task board default is `kboard.md` in scripts and docs.
- [x] Canonical FR/BR/UXR board default is `fbuboard.md` in scripts and docs.
- [ ] Canonical filename policy is defined for all kanban/FR-BR-UXR related docs under `docs/project-management/kanban/`.
- [ ] Supporting kanban and FR/BR/UXR filenames are normalized to policy with deterministic migration mapping.
- [ ] Legacy filename compatibility remains available for transition.
- [ ] Installed framework scripts and references resolve canonical names without breaking existing repos.

---

## References

- [kboard](../kboard.md)
- [fbuboard](../fbuboard.md)
- [T114](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard.md)
- [T05](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md)
