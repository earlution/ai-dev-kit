---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: Kanban Install Delivers Mixed Dev Kit Backlog and Templates into Consumer Boards

**Type:** Bug Report (BR)  
**Submitted:** 2026-02-26  
**Submitted By:** XOforge (consumer project)  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** PENDING  
**GitHub Issue:** [#20](https://github.com/earlution/ai-dev-kit/issues/20)

---

## Summary

When a consumer project installs the Kanban framework from AI Dev Kit, the resulting Kanban board and epics contain a **mixture of abstract/template stories and AI Dev Kit’s own live stories/tasks**, leaving adopters with a board that still looks like “AI Dev Kit – Kanban Board” instead of a clean, project-specific Kanban.

---

## Description

### What is the bug?

The Kanban install path for consumer projects currently:

- Copies or exposes **AI Dev Kit’s own backlog** (epics, stories, tasks, FR/BR links, dev-kit policies) into the consumer project.
- Mixes that live backlog with more **abstract or template-style content** intended as canonical examples.
- Produces a board that is labelled and structured as the AI Dev Kit board, requiring significant manual clean-up and rescoping by adopters (as experienced in XOforge).

This goes beyond earlier epic-only issues (e.g. BR-004) and affects **board title, stories, tasks, and FR/BR wiring**, making it unclear what is:

- Canonical framework/template content meant for adopters, vs.
- AI Dev Kit’s own project backlog that should stay in the source repo.

### What should happen vs. what actually happens?

**Expected:**

- A new consumer project that installs the Kanban framework should receive:
  - A **clean, project-agnostic Kanban skeleton** (board + epics/stories/tasks) suitable for that project.
  - Any example or reference content clearly isolated and labelled as **AI Dev Kit reference**, not part of the live board.
- The resulting board should read as **“<Project Name> – Kanban Board”**, with epics/stories/tasks that either:
  - Are generic and obviously intended to be customised, or
  - Are minimal placeholders clearly marked as such.

**Actual:**

- The installed Kanban structure still reads as the **AI Dev Kit board**:
  - Board title and overview are dev-kit-specific.
  - Epics/stories/tasks include AI Dev Kit’s real backlog and references to its FR/BRs and policies.
  - Abstract/template content is intermixed with live dev-kit work.
- Consumer projects (e.g. XOforge) must:
  - Manually separate framework templates from dev-kit-specific backlog.
  - Rescope or delete many imported stories/tasks.
  - Rewrite board/epic/story docs to reflect their own project.

### When does it occur?

- When installing Kanban from AI Dev Kit into a new consumer project (e.g. XOforge) using the documented installation steps.
- When copying or initialising `docs/project-management/kanban/` and related structures from AI Dev Kit.

### Who is affected?

- Any **consumer project** that:
  - Installs Kanban from AI Dev Kit expecting a clean, template-only starting point.
  - Uses AI Dev Kit as a base/template repository for its own work.

---

## Affected Component

**Primary Component:** Kanban Framework – Installation/Initialization & Templates  
**Affected Areas:**

- [x] Documentation (board/epic/story content, naming)
- [x] Installation / scaffolding behaviour
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service
- [ ] Other: 

**Root Cause (suspected):**

- The current Kanban install/scaffolding behaviour does not clearly separate:
  - **Canonical, abstract templates** (to be shipped to consumers), from
  - **AI Dev Kit’s own epics/stories/tasks and FR/BR wiring** (which should remain in the source repo).
- Prior fixes (e.g. BR-004) addressed epic-level issues but **did not fully resolve** contamination at the board/story/task level.

---

## Steps to Reproduce

1. Create a new consumer project repository.
2. Install AI Dev Kit frameworks and run the documented Kanban install steps (e.g. copying or initialising `docs/project-management/kanban/` from AI Dev Kit).
3. Open `docs/project-management/kanban/kanban-board.md` in the consumer project.
4. Inspect epics, stories, and tasks under `docs/project-management/kanban/epics/`.
5. Observe:
   - Board title and narrative still refer to AI Dev Kit.
   - Epics/stories/tasks reference AI Dev Kit-specific paths, FR/BRs, and policy docs.
   - Abstract/template content is mixed with dev-kit-specific backlog.

**Expected result:**  
Board and epics reflect a clean, consumer-specific or clearly template-based Kanban, not AI Dev Kit’s live backlog.

**Actual result:**  
Board and epics reflect a hybrid of templates and AI Dev Kit’s own backlog, requiring significant manual clean-up.

---

## Environment

**Environment:** Development  
**Version (Dev Kit):** Current as of 2026-02-26  
**Consumer Example:** XOforge project (Crossout crafting calculator)  
**OS:** Any (observed on macOS)

---

## Impact

**User Impact:**

- [ ] Critical - System unusable
- [x] High - Major functionality/UX broken for adopters
- [ ] Medium - Some functionality affected
- [ ] Low - Minor issue, workaround available

**Business Impact:**

- Blocks **clean adoption** of the Kanban framework.
- Requires extensive manual Kanban clean-up and rescoping for each new consumer project.
- Causes confusion about what is canonical framework template vs. AI Dev Kit’s own backlog.
- Increases cognitive load for both humans and agents trying to follow governance rules.

**Workaround:**

- Manually:
  - Delete or archive AI Dev Kit-specific epics/stories/tasks from the consumer project.
  - Rewrite board/epic/story docs to align with the consumer project.
  - Recreate a minimal, project-specific Kanban structure.
- This workaround is **time-consuming, error-prone, and undocumented**.

---

## Acceptance Criteria (Fix Requirements)

- [ ] **Criterion 1:** Kanban install/scaffolding for consumer projects ships **only canonical, project-agnostic templates** and/or clearly labelled example content, not AI Dev Kit’s live backlog.
- [ ] **Criterion 2:** The default board and epic/story docs in consumer projects do **not** present as “AI Dev Kit – Kanban Board”; they are either:
  - Neutral templates, or
  - Cleanly scoped to the consumer project.
- [ ] **Criterion 3:** Any AI Dev Kit-specific examples or reference materials are:
  - Located in clearly separated paths (e.g. `templates/` or `reference/`), and
  - Explicitly marked as **upstream reference**, not part of the consumer’s live board.
- [ ] **Criterion 4:** Documentation clearly explains:
  - What Kanban content is installed into consumer projects.
  - How to customise epics/stories/tasks for a new project.
- [ ] **Criterion 5:** Regression tests or scripted checks exist to ensure dev-kit-specific backlog is not reintroduced into the install payload.

**Verification Method:**

- [ ] Manual testing in at least one fresh consumer project (e.g. XOforge-like repo).
- [ ] (Optional) Automated checks over installed Kanban content for dev-kit-specific markers.

**Fix Verification Status:**

- [ ] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)

---

## Fix Attempt History

**Purpose:** Document all fix attempts so future builds can learn from previous work.

### Attempt 1: _TBD_ – _TBD_

**Fix Description:**
- _TBD_

**Changes Made:**
- _TBD_

**Verification Status:**
- [ ] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)
- [ ] Fix Failed (bug still present)

**Verification Method:**
- [ ] Test suite execution
- [ ] Manual testing
- [ ] Both

**Verification Evidence:**
- _TBD_

**Result:**
- [ ] Bug Fixed
- [ ] Bug Partially Fixed
- [ ] Bug Not Fixed

**Lessons Learned:**
- _TBD_

**Next Steps:**
- _TBD_

---

## Dependencies

**Blocks:**

- Clean, low-friction Kanban framework adoption in new consumer projects.

**Blocked By:**

- Design decisions about how to split **canonical templates** vs **AI Dev Kit backlog** in the Kanban package and installer.

**Related Work:**

- [BR-004 – Kanban Installation Includes Project-Specific Epics from Template](BR-004-kanban-installation-includes-project-specific-epics.md)
- [BR-007 – Multiple Bugs in Kanban Package Installation Process](BR-007-multiple-bugs-kanban-package-installation.md)
- XOforge internal task: Epic 2, Story 3 – XOforge-centric review of all Kanban docs.

---

## Intake Decision

**Intake Status:** PENDING  
**Intake Date:** 2026-02-26  
**Intake By:** [TBD]

**Decision Flow Results:**

- [ ] Story Match Found: [Epic X, Story Y] → Task [T]
- [ ] New Story Created: [Epic X, Story Y] → Task 1
- [ ] New Epic Created: [Epic X, Story 1, Task 1]

**Assigned To:**

- Epic: [TBD – likely Kanban Framework epic]
- Story: [TBD – Kanban install/consumer adoption behaviour]
- Task: [TBD]
- Version: `[RC.EPIC.STORY.TASK+BUILD]`

**Kanban Links:**

- Epic: [`docs/project-management/kanban/epics/Epic-6/Epic-6.md`](../epics/Epic-6/Epic-6.md)
- Story: [`docs/project-management/kanban/epics/Epic-6/Story-001-br-repo.md`](../epics/Epic-6/Story-001-br-repo.md)
- Task: _TBD (implementation task once created)_

---

## Notes

- This BR is informed by XOforge’s real-world adoption experience and aims to prevent future consumers from needing to perform the same large manual clean-up.

---

## References

- GitHub Issue [#20](https://github.com/earlution/ai-dev-kit/issues/20) – original report.
- XOforge Kanban review: `docs/project-management/kanban/epics/Epic-2/Story-003-xoforge-centric-review-all-kanban-docs.md` (in XOforge repo; referenced here conceptually).

---

_This bug report follows the AI Dev Kit Kanban Framework BR template and is anchored as BR-037 in the BR repository story (E6:S01:T37)._

