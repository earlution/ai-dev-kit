---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-02T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 019 – FR/BR/UXR abstract governance and intake

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2026-04-02  
**Last updated:** 2026-04-02 — **BR-060** canonical task **E2:S01:T09** (Epic 2); **E4:S19:T01** file is a redirect stub only; story remains **abstract-first** (intake / governance).  
**Version:** v0.4.19.0+0  
**Code:** E4S19  

**Story type:** Ongoing governance (not a perpetual “repo ledger”; not a dumping ground for individual **FR-### / BR-### / UXR-###** implementation work).

---

## Task Checklist

- [ ] **E4:S19:T01 – Charter: abstract vs concrete FR/BR/UXR ownership** - TODO (baseline scope; no charter task doc yet) — *Note: **[BR-060](../../fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md)** implementing task is **[E2:S01:T09](../Epic-2/Story-001-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md)**; [this story’s `T01-…br060` filename](Story-019-fr-br-uxr-abstract-governance-and-intake/T01-rw-allow-in-progress-task-releases-br060.md) is a redirect stub only.*

---

## Overview

This story holds **Epic 4 (Kanban framework) responsibility for FR / BR / UXR in the abstract**: the **rules, intake mechanics, governance, and cross-cutting documentation** that apply to *all* reports of those types — without owning the **substance** of any single report.

**“Abstract” here means:** not concerning **concrete** `fr-br/FR-*.md`, `BR-*.md`, or `UXR-*.md` work items as primary deliverables. Those stay anchored in **E5:S01** (FR repo), **E6:S01** (BR repo), **E7:S00** (UXR repo), and in **delivery** epics/stories under **KG-R6**. This story owns the **shape of the system** (how intake, boards, and policies fit together).

---

## In scope (examples)

- Intake workflow and **atomic filing** expectations (**KG-R2**) and **semantic placement** (**KG-R6**) as reflected in framework policy, guides, and agent skills.
- **Structure and hygiene** of **fr-br-uxr** surfaces (e.g. board layout, open-queue discipline) when the change is **policy or template**-level, not “fix this one BR”.
- Alignment narratives between **repository stories** (E5:S01, E6:S01, E7:S00) and **framework** docs under `packages/frameworks/kanban/`.
- Evolution of **workflow** definitions (e.g. packaged intake YAML, UKW gap-discovery expectations) where the benefit is **class-level** (all FR/BR/UXR), not one ticket.

## Out of scope

- **Implementing or closing a specific** FR / BR / UXR report (use the report’s **implementing task** under the correct epic/story — e.g. **E5:S01** / **E6:S01** / **E7:S00**, **E2:S01** for workflow/RW validators, or delivery epics).
- **RW validator / Step 1c mechanics** — belong under **Epic 2** (e.g. **E2:S01:T09** for **BR-060**), not this abstract governance story.
- **Versioning** a release attributed primarily to a single concrete report belongs on that report’s task unless the change is genuinely **framework/governance** for the whole class (then **E4:S19:Txx**).

---

## Relationship to other stories

| Item | Role |
|------|------|
| **E4:S02** (complete) | Original **FR/BR → task** intake design and automation; historical baseline. |
| **E4:S12** (complete) | **Repository story pattern** (S00→S01 migration, meta grouping). |
| **FR-074 / E5:S01:T74** etc. | Concrete policy edits filed as **FR repo** tasks; **this story** is where Epic 4 **tracks ongoing abstract ownership** so it does not disappear inside one FR. |
| **E5:S01 / E6:S01 / E7:S00** | **Ledgers** for **concrete** reports (traceability). **S19** does not replace them. |

---

## Goals

- [ ] Single obvious Epic 4 home for **“how FR/BR/UXR work in this framework”** (meta).
- [ ] Explicit boundaries so **concrete** report work does not default into **E6:S06** or **S19** by habit.
- [ ] Task checklist under S19 lists **only** abstract/governance tasks (**E4:S19:Txx**).

---

## Dependencies

**Coordinates with:** Epic 5 (docs), Epic 6 / 7 (BR/UXR repos), Epic 2 (workflows), `packages/frameworks/kanban/`.

**References:** `kanban-governance-policy.md`, `FR_BR_INTAKE_GUIDE.md`, `.cursor/skills/intake-process/SKILL.md`, `fr-br-uxr-board.md`.
