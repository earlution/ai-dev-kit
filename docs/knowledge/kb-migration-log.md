# KB to Notion Migration Log

**Generated:** 2026-02-20  
**Target:** Engineering KB 3.1 AI Dev Kit  
**Source:** docs/ (excluding changelog-archive)

## Migration Summary

| Phase | Section | Target | Files | Status |
|-------|---------|--------|-------|--------|
| 0 | Changelog archive summary | 3.1.4 | 1 page | ✅ |
| 1a | maintenance/, changelog (non-archive) | 3.1.4 | 7 | ✅ |
| 1b | analysis/ | 3.1.5 | 9 | ✅ |
| 1c | documentation/, guides/, root | 3.1.1 | 31 | ✅ |
| 2a | architecture/ | 3.1.2 | 84 | ✅ |
| 2b | knowledge/ (excl. changelog-archive) | 3.1.3 | 60 | ✅ |
| 3 | project-management/ | 3.1.7 | 273 | ✅ |
| 4 | Path→URL map, navigation | - | - | ✅ |

**Total pages under 3.1.x:** ~484

## Full-Content Migration (In Progress)

Full content is being pushed to Notion pages via Notion MCP (`replace_content`). Repo markdown is used as source.

### Updated with full content

- maintenance/README.md, BUILD_AND_UPLOAD.md, BUILD_PACKAGES.md, BUILD_PACKAGES_COMMANDS.md, UPLOAD_PACKAGES.md
- changelog-and-release-notes/README.md, semver-tag-v0.5.39+2-correction.md
- guides/README.md, getting-started/README.md, framework-consumption/README.md
- documentation/ai-dev-kit-vision-and-purpose.md
- documentation/engineering-and-platform/open-kb-starter-map.md, knowledge-service-vision.md, versioning-task-ordering-anti-pattern.md
- analysis/cmw-ordering-flaw-analysis.md, ukw-versioning-reasoning-analysis.md, repository-story-abstract-space-contradiction-analysis.md, task-template-system-analysis.md

### Pending (27 files — use payloads in docs/knowledge/kb-migration-payloads/ or agent MCP)

- analysis/phase3-package-distribution-plan.md (re-push FULL; first push was condensed)
- analysis/perpetual-task-range-options-analysis.md (re-push FULL; push was condensed – full content in payload)
- analysis/package-management-*.md (3 files)
- documentation/engineering-and-platform/ (2 files)
- documentation/templates/ (2 files)
- documentation/user-docs/ (16 files)
- guides/framework-consumption/adk-feedback-guide.md
- for-dummies-*.md, vibe-coding-for-dummies-outline-and-sample.md (3 files)

### Blocker (resolved)

The 5 previously archived pages (Build and Upload, Build Packages, Build Packages Commands, Upload Packages, SemVer Tag Correction) were restored and pushed with full content.

### Tools

- **Manifest script:** `scripts/kb_migrate_full_content.py` – produces JSON manifest of path, page_id, content_length
- **Payload script:** `scripts/kb_push_to_notion.py --emit-payloads` – writes `docs/knowledge/kb-migration-payloads/*.json` (path, page_id, full content)
- **MCP args script:** `scripts/kb_push_to_notion.py --emit-mcp-args` – writes `docs/knowledge/kb-migration-mcp-args/*.json` (MCP-ready `{server, toolName, arguments}`). Load each and pass `arguments` to `call_mcp_tool` or inspect manually.
- **Mapping:** `docs/knowledge/kb-migration-map.json` (47 Phase 1–2 entries with explicit path→URL)

### Path → URL Map

- **Explicit mappings:** `kb-migration-map.json` (Phase 1–2: maintenance, changelog, analysis, documentation, guides, root)
- **Architecture (3.1.2):** 84 pages – flat under 3.1.2 (no path→URL in map yet)
- **Knowledge (3.1.3):** 60 pages – flat under 3.1.3  
- **Project Management (3.1.7):** 273 pages – flat under 3.1.7

## Link Rewrites

Use `kb-migration-map.json` for path→URL lookups when rewriting internal markdown links in Notion pages.

## Engineering KB Sync-source

3.1 AI Dev Kit section is populated. Update Engineering KB Sync-source if needed for 3.1 visibility.
