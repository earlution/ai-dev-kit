---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T17:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 9: Bug Fixes and Agentic Intelligence Implementation

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** 2025-12-10 (v0.4.9.0+1 – Task 0 complete: Story creation and intake)  
**Version:** v0.4.9.0+1  
**Code:** E4S09

---

## Goal

Fix critical bugs in Kanban package installation process and implement actual agentic intelligence for task mapping to replace deterministic word matching approach.

---

## Tasks

- [x] **E4:S09:T00 – Story creation and BR-007, BR-008, FR-010, UXR-004 intake** ✅ COMPLETE (v0.4.9.0+1)
  - Created Story 9: Bug Fixes and Agentic Intelligence Implementation
  - Intake BR-007: Multiple Bugs in Kanban Package Installation Process (GitHub issue #9)
  - Intake BR-008: Arbitrary 80% Threshold Contradicts Agentic Intelligence Claims (GitHub issue #10)
  - Intake FR-010: Implement Actual Agentic Intelligence for Task Mapping (GitHub issue #11)
  - Intake UXR-004: Kanban Package Installation UAT (GitHub issue #13)
  - **Linked Issues:** GitHub #9, #10, #11, #13

- [x] **E4:S09:T01 – BR-007: Fix missing Tuple import in analyze_structure.py** ✅ COMPLETE
  - Added `Tuple` to imports from `typing` module
  - Fixed line 192: `Optional[Tuple]` now works correctly
  - **Linked BR:** `BR-007-multiple-bugs-kanban-package-installation.md` (GitHub issue #9)
  - **Acceptance:** ✅ Criterion 1 of BR-007 satisfied.

- [x] **E4:S09:T02 – BR-007: Fix semantic matcher regex optional group handling** ✅ COMPLETE
  - Fixed `load_canonical_epic_definitions()` in `semantic_matcher.py`
  - Used try/except to handle optional regex groups safely
  - Prevents "no such group" error when optional groups don't match
  - **Linked BR:** `BR-007-multiple-bugs-kanban-package-installation.md` (GitHub issue #9)
  - **Acceptance:** ✅ Criterion 2 of BR-007 satisfied.

- [x] **E4:S09:T03 – BR-007: Add canonical_adoption mode to migrate_structure.py** ✅ COMPLETE
  - Added `canonical_adoption` to argparse choices in `migrate_structure.py`
  - Mode consistency ensured across install and migrate scripts
  - **Linked BR:** `BR-007-multiple-bugs-kanban-package-installation.md` (GitHub issue #9)
  - **Acceptance:** ✅ Criterion 3 of BR-007 satisfied.

- [x] **E4:S09:T04 – BR-007: Fix analysis recommendation logic** ✅ COMPLETE
  - Fixed logic to properly check for detected structure before recommending "fresh" mode
  - Improved recommendation rationale to include detected epic counts
  - Added structure_detected check to prevent incorrect "fresh" recommendations
  - **Linked BR:** `BR-007-multiple-bugs-kanban-package-installation.md` (GitHub issue #9)
  - **Acceptance:** ✅ Criterion 4 of BR-007 satisfied.

- [x] **E4:S09:T05 – BR-008/FR-010: Remove arbitrary 80% threshold** ✅ COMPLETE
  - Removed all blocking threshold-based logic from `migrate_structure.py`
  - Removed threshold check: `if match["similarity_score"] >= 80:`
  - Updated `analyze_structure.py` to process all semantic matches
  - Updated display logic to show all matches (informational only)
  - **Linked BR:** `BR-008-arbitrary-80-threshold-contradicts-agentic-intelligence.md` (GitHub issue #10)
  - **Linked FR:** `FR-010-implement-actual-agentic-intelligence-task-mapping.md` (GitHub issue #11)
  - **Acceptance:** ✅ Criterion 1 of BR-008 and FR-1 of FR-010 satisfied.

- [ ] **E4:S09:T06 – FR-010: Implement actual agentic intelligence for task mapping** TODO (DESIGN REQUIRED)
  - **Status:** Design document created (`AGENTIC_INTELLIGENCE_DESIGN.md`)
  - **Requirements:** AI/LLM integration needed for actual content understanding
  - **Current State:** Threshold removed, all matches processed, but still deterministic word matching
  - **Next Steps:** Choose implementation approach (LLM API vs Local Model vs Hybrid), design prompts, implement agentic_mapper.py
  - **Linked FR:** `FR-010-implement-actual-agentic-intelligence-task-mapping.md` (GitHub issue #11)
  - **Acceptance:** ⚠️ Design complete, implementation pending (requires AI/LLM integration)

- [x] **E4:S09:T07 – UXR-004: Synthesize UAT findings and update documentation** ✅ COMPLETE
  - Reviewed UXR-004 comprehensive findings
  - All bugs from UXR-004 addressed (T01-T04)
  - Threshold removal completed (T05)
  - Updated code comments to note threshold removal
  - Documentation reflects current state: deterministic matching without threshold
  - Agentic intelligence (T06) documented as requiring AI/LLM integration
  - **Linked UXR:** `UXR-004-kanban-package-installation-uat.md` (GitHub issue #13)
  - **Acceptance:** ✅ UXR findings synthesized and addressed through T01-T05.

---

## References

- BR-007: `KB/PM_and_Portfolio/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation.md`
- BR-008: `KB/PM_and_Portfolio/kanban/fr-br/BR-008-arbitrary-80-threshold-contradicts-agentic-intelligence.md`
- FR-010: `KB/PM_and_Portfolio/kanban/fr-br/FR-010-implement-actual-agentic-intelligence-task-mapping.md`
- UXR-004: `KB/PM_and_Portfolio/kanban/fr-br/UXR-004-kanban-package-installation-uat.md`
- GitHub Issues: #9, #10, #11, #13

---

**Template Usage:** Story follows Kanban framework story template; Tasks trace to BR/FR/UXR for forensic linkage.

