---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-10T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E7:S06:T18 - Interactive Installer Kanban Pattern Prompt Clarity

**Task ID:** E7:S06:T18  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last updated:** 2026-04-13  
**Version:** v0.7.6.18+0  
**Code:** E7S06T18

---

## Scope

Address UXR-007 by improving interactive installer wording and guidance for Kanban path/pattern prompts, especially "epic document pattern" input using `{epic}` placeholder.

## Input

- [UXR-007](../../../fr-br/UXR-007-interactive-installer-kanban-pattern-prompt-clarity.md)
- [IPW Plan: E7:S06:T18](../../../../../implementation-cycles/IPW-E7S06T18-interactive-installer-kanban-pattern-clarity.md)
- Installer prompt flow for Kanban integration in interactive mode
- `rw-config.yaml` keys: `kanban_root`, `epic_doc_pattern`, `story_doc_pattern`

## Deliverable

1. Prompt text clarified with explicit relative-path semantics and examples.
2. Input validation feedback improved (show match count and sample paths).
3. Fallback guidance added (auto-detect suggestion and remediation examples).
4. Documentation/tests updated for installer UX behavior.

## Acceptance Criteria

- [ ] User can understand and answer epic pattern prompt without external assistance.
- [ ] Installer provides immediate actionable feedback when pattern matches zero files.
- [ ] Prompt copy explicitly explains `{epic}` usage with examples.
- [ ] UXR-007 is cross-linked with implementation evidence.

## Dependencies

- None

## Related Work

- [UXR-007](../../../fr-br/UXR-007-interactive-installer-kanban-pattern-prompt-clarity.md)
- [E7:S06:T06](T06-fr-br-uxr-intake-documentation-quality.md)

## Version Anchor

- Planned release anchor: `v0.7.6.18+1`

## References

- [IPW Plan: E7:S06:T18](../../../../../implementation-cycles/IPW-E7S06T18-interactive-installer-kanban-pattern-clarity.md)
- [UXR-007](../../../fr-br/UXR-007-interactive-installer-kanban-pattern-prompt-clarity.md)
