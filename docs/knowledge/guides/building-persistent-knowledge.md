---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Building Persistent Knowledge in Cursor

**How can you leverage Cursor's existing architecture to build permanent knowledge bases to increase breadth for developers?**

Cursor is an AI-first code editor that helps build software faster. It's an editor designed for pair programming with AI. It performs well for so many tasks, and has already improved my workflow. I found myself using the web search tool a lot across different sessions and workspaces to import external information or documentation.

The issue is that its web search and indexing function is tied to individual chats or workspaces, and the results of the agentic process of searching, scraping, and indexing the webpages to build a knowledgebase is lost between sessions.

Agents and Multi-Agent Systems, paired with appropriate web and file tools, can enhance UX and improve cursor's breadth of capacity. The @Web search is great for small and simple tasks, but why not curate and store the more important knowledge and simply import it into workspaces for recurring tasks?

<iframe width="560" height="315" src="https://www.youtube.com/embed/wuSoM0DlXXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Transcript: Building a Persistent Local Knowledgebase with CrewAI for Cursor](./Building%20a%20Persistent%20Local%20Knowledgebase%20with%20CrewAI%20for%20Cursor.txt)

## GitHub Repo: cursor-knowledge
https://github.com/philippe-page/cursor-knowledge

## Insight 

Cursor already has a super smooth and effective indexing, vectorization and search capabilities making it possible to manage whole directories of different files with LLMs. This allows Cursor to query and examine relevant code across multiple files.

![Frame 819.png](./Frame%20819.png)

Context management is a major challenge in pair-programming with AI. I think there's a huge opportunity here to build in-editor knowledge management systems.

## Agentic Knowledge Management 

A multi-agent system with web search and file save capabilities would allow users to enter a query on which developer docs to search and study, and what specifically to focus on. Agents then can search the web for those docs, and scrape a few of the websites to build an understanding and save it as a local file, which can then be drawn in to a workspace and re-indexed to update the workspace with the new information in the knowledge file.

![Frame 126.png](./Frame%20126.png)

When you ask a question across the codebase, Cursor can then see the file in its folder, and choose to read it based on its relevance.

## @knowledgebuilder 

![Frame 870.png](./Frame%20870.png)

In the example video, I use this to demonstrate how to leverage Cursor to build or at least start a Crew file. Since this is recurring work I do, having this saved to my permanent files allows me to drag it into Cursor when necessary and add to the knowledge base's complexity. This enables users to bring in whatever existing research context they want whenever they need to.

## @knowledge 

![Frame 871.png](./Frame%20871.png)

## Expansion 

Programming, simply put, is really just a means to an end; people want to build! (software). Multi-agent-systems enable recursive agentic tasks to be carried out right in the editor.

Over time, the knowledgebase becomes a curated asset that each Cursor user can curate and build to match what they need to use frequently. Game devs might cultivate a deep knowledgebase on game mechanics and add to it with any new updates, where other devs may be working on a smaller project that integrates with a few less common APIs. With this setup, Cursor can just search the local knowledgebase.

![Frame 820.png](./Frame%20820.png)

These can be updated and refreshed whenever, effectively forming a small agentic library system, where agents search, acquire, collect, document, save, store, as well as cull and remove outdated or incorrect information.

![Frame 821b.png](./Frame%20821b.png)

The overall idea is that these systems could be operating as a feature enabling a knowledge management system to make Cursor the smartest and best integrated code-editor that's always informed with high-quality and up to date contextual information.

his feature makes knowledge expandable and more permanent rather than ephemeral, and enables users to curate a knowledge base that is best suited to their needs.

![cursor_crew_graph_lg.png](./cursor_crew_graph_lg.png)
![network_lg.png](./network_lg.png)

# Standard Operating Procedure (SoP): Taxonomical Standards for Structuring Knowledge

## Purpose
To ensure all knowledge in the fynd.deals knowledge base is organized, discoverable, maintainable, and process-compliant, this SoP defines canonical standards for taxonomy, directory structure, file naming, and update workflows.

## Principles
- **Discoverability:** Knowledge must be easy to find via logical, hierarchical structure and standard naming.
- **Maintainability:** Structure must support easy updates, versioning, and curation.
- **Process Compliance:** All changes must be documented with real timestamps and rationale.
- **Separation of Concerns:** Each directory/file should have a clear, single responsibility.

## Canonical Directory Structure
- Top-level: `knowledge/fynd_deals/`
- Major categories: `epics/`, `debug-paths/`, `kanban/`, `use-cases/`, `building-persistent-knowledge/`, `templates/`, `debugging/`, `learning/`
- Subcategories: Use lowercase, hyphen-separated names (e.g., `core-system-stability/`)
- All directories must contain a `README.md` describing their purpose and structure.

## File Naming Conventions
- Use lowercase, hyphen-separated names (e.g., `process-overview.md`)
- Prefix with context if needed (e.g., `epic-2-core-system-stability.md`)
- For SoPs: `sop-taxonomy.md`, `sop-debugging.md`, etc.
- For templates: `template-<purpose>.md`

## Versioning and Updates
- Major changes require a new versioned file or a clear changelog section at the end of the file.
- All edits must be timestamped (system-derived, not fabricated) and attributed.
- Deprecated files must be clearly marked and linked to their replacements.

## Update & Curation Workflow
1. Propose changes in a draft file or branch.
2. Review for compliance with this SoP.
3. Upon approval, update the canonical file and document the change in a changelog section.
4. Announce major taxonomy changes in the project communication channel.

## Example Directory
```
knowledge/fynd_deals/
  epics/
    README.md
    epic-2-core-system-stability.md
  building-persistent-knowledge/
    README.md
    sop-taxonomy.md
```

## Compliance
- All contributors must follow this SoP for any new knowledge or structural changes.
- Non-compliant files/dirs will be flagged for review and correction.

## Key Knowledge Artifacts

- [Disciplined Debugging & Type Checking Workflow](./disciplined-debugging-type-checking-workflow.md): Canonical process and retrospective for debugging and type checking in fynd.deals.
- [Standard Operating Procedure (SoP): Taxonomical Standards for Structuring Knowledge](#standard-operating-procedure-sop-taxonomical-standards-for-structuring-knowledge): Canonical standards for structuring and organizing knowledge in the KB.

---
_Last updated: 2025-12-18T00:00:00Z_

