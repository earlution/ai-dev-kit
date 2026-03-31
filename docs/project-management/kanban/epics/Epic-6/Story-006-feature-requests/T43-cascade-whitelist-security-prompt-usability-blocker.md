---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T16:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E6:S06:T43 – Cascade Whitelist / Security Prompt Usability (BR-039)

**Task ID:** E6:S06:T43  
**Status:** TODO  
**Priority:** CRITICAL  
**Version Anchor:** *(pending — run `RW -k E6:S06:T43` on `epic/6-framework-management`)*  

**Associated BR:** [BR-039](../../../fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md)

---

## Scope

Isolate **product / tooling work** for [BR-039](../../../fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md): Cascade whitelist ineffective, security prompts per every command, productivity blocker. **Out of scope for this task number:** broader RW “micromanagement” umbrella already tracked on **E6:S06:T02** / BR-038 — link and coordinate there for release-workflow ergonomics.

---

## Input

- [BR-039](../../../fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md) problem statement and evidence.  
- **E6:S06:T02** context where BR-038 and BR-039 overlap (terminal / agent execution).

---

## Deliverable

1. **Root cause** and fix or documented workaround for whitelist / prompt persistence (per BR acceptance).  
2. **Verification** notes or stakeholder sign-off when behaviour matches BR **Expected Behavior**.  
3. **RW** release on **`epic/6-framework-management`** attributing completed work to **T43** (or subsequent build).

---

## Acceptance Criteria

- [ ] **AC1:** Whitelisted commands do not re-prompt every execution in the documented reproduction path.  
- [ ] **AC2:** AI-enabled / trusted command path documented and matches Cascade product expectations (or BR updated with limitation).  
- [ ] **AC3:** BR-039 status and board lines updated after verification.

---

## Approach

1. Reproduce with attached screen recordings / steps from BR-039.  
2. Distinguish Cascade client bugs vs ai-dev-kit RW script patterns (coordinate with T02 if needed).  
3. Implement fix or escalate; run RW on epic 6 branch when closing.

---

## Dependencies

**Depends On:** None (can parallelize with T02 investigation).  
**Blocks:** Production RW throughput for Cascade-heavy users.  
**Parallel Development Candidacy:** Safe vs T02 (separate SemVer line).

---

## References

- [E6:S06:T02 – BR-038 micromanagement](T02-fix-release-workflow-micromanagement-issues.md)  
- [FR/BR/UXR board intake plan](../../../../fr-br-uxr-board.md)
