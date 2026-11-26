---
title: AIDB
description: AIDB is an EDB-maintained PostgreSQL extension for building AI data pipelines — embedding, indexing, and searching your data — entirely in SQL.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/
lastModified: 2026-11-26T13:15:29+05:30
---

# AIDB

AIDB is an EDB-maintained PostgreSQL extension that brings AI data workflows directly into your Postgres database. Define pipelines in SQL to parse, chunk, embed, and index your data — then query it with semantic search, hybrid search, and LLM-powered retrieval. Common use cases include retrieval-augmented generation (RAG), semantic search over documents and images, and automated document ingestion pipelines from S3 or local storage.

> **Note: Using AIDB with an AI coding agent**
>
> If you work with AIDB through an AI coding agent such as Claude Code, install the [AIDB Agent Skill](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/agent-skills/) so the agent has built-in, validated knowledge of AIDB.

## Where to start

If you're new to AIDB, follow this end-to-end workflow:

1. **[Overview](https://www.enterprisedb.com/docs/aidb/latest/overview/)** — Learn the core concepts: what pipelines and knowledge bases are, and how they fit together.

2. **[Install](https://www.enterprisedb.com/docs/aidb/latest/install/)** — Install the `aidb` package, configure `shared_preload_libraries`, and enable the extension in your database.

3. **[Integrating models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/)** — Register the AI model that will power your pipeline. Every pipeline step that generates embeddings or processes text requires a model — either a default local model (no setup needed) or an external API model that you register with `aidb.create_model()`. Do this before creating pipelines.

4. **[External storage](https://www.enterprisedb.com/docs/aidb/latest/external-data-sources/)** _(optional)_ — If your source data lives in S3 or a local file system rather than a Postgres table, configure a volume using PGFS so pipelines can read from it.

5. **[AI SQL functions](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/)** _(optional)_ — Call chunking, parsing, OCR, summarization, PII detection, embedding, and reranking directly in SQL queries, without defining a pipeline.

6. **[Agents](https://www.enterprisedb.com/docs/aidb/latest/agents/)** _(optional)_ — Build an in-database agent that reasons over multiple steps and calls [tools](https://www.enterprisedb.com/docs/aidb/latest/tools/) — AIDB's own operations, your own SQL queries, or tools imported from an external MCP server.

7. **[Governance](https://www.enterprisedb.com/docs/aidb/latest/governance/)** _(optional)_ — Confine an agent's tool calls to a specific Postgres role, and record every allow/deny decision, using purposes.

8. **[AI pipelines](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/)** — Define a pipeline that reads from your data source, transforms it (chunk, parse, embed), and writes the output to a knowledge base. The pipeline puts the model you registered in step 3 to work.

9. **[Knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/)** — Query the vector embeddings your pipeline produced. Use `aidb.retrieve_text()` or `aidb.retrieve_key()` for semantic search, or combine vector and keyword search with hybrid search.

10. **[Semantic knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/)** _(optional)_ — Index your schema — tables, views, columns, and comments — for natural-language schema search and text-to-SQL, so questions map to the right relations and to reusable, parameterized queries.

11. **[Agent memory](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/)** _(optional)_ — Give an agent a durable, per-user memory of past conversations, using SQL functions.

## Documentation map

| Section                                                                                             | What it covers                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Release notes](https://www.enterprisedb.com/docs/aidb/latest/release-notes/)                       | What changed in each version                                                                                                                                    |
| [Compatibility](https://www.enterprisedb.com/docs/aidb/latest/compatibility/)                       | Supported platforms and versions for AIDB and PGFS                                                                                                              |
| [Install](https://www.enterprisedb.com/docs/aidb/latest/install/)                                   | How to install and configure the AIDB extension                                                                                                                 |
| [Integrating models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/)             | Local models, external APIs (OpenAI, NIM, Gemini, OpenRouter), and supported model variants                                                                     |
| [External storage](https://www.enterprisedb.com/docs/aidb/latest/external-data-sources/)            | Using S3-compatible object stores and local file systems as pipeline data sources                                                                               |
| [AI SQL functions](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/)                    | Standalone SQL functions for chunking, parsing, OCR, summarization, PII detection, embedding, and reranking                                                     |
| [Agents](https://www.enterprisedb.com/docs/aidb/latest/agents/)                                     | Building in-database agents, invoking them, and delegation                                                                                                      |
| [Tools](https://www.enterprisedb.com/docs/aidb/latest/tools/)                                       | The unified tool catalog: native tools, custom SQL tools, and MCP tools                                                                                         |
| [Governance](https://www.enterprisedb.com/docs/aidb/latest/governance/)                             | Confining agent tool calls to a Postgres role with purposes, and recording every allow/deny decision                                                            |
| [edb-endpoints](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/)                       | Settings, OAuth, databases, and operations shared by the MCP server and the OTLP receiver                                                                       |
| [MCP server](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/)                           | Serving AIDB's tool catalog to external MCP clients over HTTP                                                                                                   |
| [OTLP receiver](https://www.enterprisedb.com/docs/aidb/latest/otlp-server/)                         | Receiving OpenTelemetry traces, logs, and metrics from external agents into the `aidb_otel` tables                                                              |
| [AI pipelines](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/)                       | Defining pipelines, pipeline steps, orchestration, and examples                                                                                                 |
| [Knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/)                   | Semantic search, hybrid search, and vector index options                                                                                                        |
| [Semantic knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/) | Schema-metadata search and text-to-SQL: semantic KBs, semantic aliases, and agent tools                                                                         |
| [Agent memory](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/)                         | Adding, searching, listing, and deleting per-actor memories with SQL functions                                                                                  |
| [Reference](https://www.enterprisedb.com/docs/aidb/latest/reference/)                               | Full API reference for all AIDB functions and views                                                                                                             |
| [Observability](https://www.enterprisedb.com/docs/aidb/latest/reference/observability/)             | Built-in OpenTelemetry tracing: the `aidb_otel` schema, access control, storage format, background workers, receiving external telemetry, and traced attributes |

- [Release notes](https://www.enterprisedb.com/docs/aidb/latest/release-notes/): Release notes for every AIDB version, including new features, changes, and bug fixes.
  - [Version 7.x](https://www.enterprisedb.com/docs/aidb/latest/release-notes/7/)
  - [Version 6.x](https://www.enterprisedb.com/docs/aidb/latest/release-notes/6/)
  - [Version 5.x](https://www.enterprisedb.com/docs/aidb/latest/release-notes/5/)
  - [Version 4.x](https://www.enterprisedb.com/docs/aidb/latest/release-notes/4/)
  - +3 more
- [Overview](https://www.enterprisedb.com/docs/aidb/latest/overview/): Core concepts for AIDB — pipelines, knowledge bases, agents, tools, model integration, and how the pieces fit together.
  - [Known issues](https://www.enterprisedb.com/docs/aidb/latest/overview/known-issues/)
- [Compatibility](https://www.enterprisedb.com/docs/aidb/latest/compatibility/): Supported platforms and PostgreSQL versions for the AIDB and PGFS extensions.
- [Install](https://www.enterprisedb.com/docs/aidb/latest/install/): Learn how to install and configure AIDB for your project.
  - [Installing](https://www.enterprisedb.com/docs/aidb/latest/install/install/)
  - [Configuring](https://www.enterprisedb.com/docs/aidb/latest/install/configure/)
  - [Threading limits](https://www.enterprisedb.com/docs/aidb/latest/install/threading-limits/)
  - [Default footprint](https://www.enterprisedb.com/docs/aidb/latest/install/default-footprint/)
  - +1 more
- [Integrating models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/): How to register and connect AI models with AIDB, both local models that run on the Postgres host and remote models called over an API.
  - [Local models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/integrated-models/)
  - [Remote models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/remote-models/)
  - [Model credentials](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/credentials/)
- [External storage](https://www.enterprisedb.com/docs/aidb/latest/external-data-sources/): How to connect AIDB pipelines to external storage — S3-compatible object stores, Google Cloud Storage, Azure, and local file systems — using PGFS storage locations and AIDB volumes.
- [AI SQL functions](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/): Use the standalone SQL functions in AIDB for chunking, parsing, OCR, summarization, PII detection, AI inference, and reranking. Call them directly in SQL queries or use them as building blocks in custom AI workflows.
  - [Text chunking](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/chunk-text/)
  - [Data parsing](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/parse/)
  - [Performing OCR](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/perform-ocr/)
  - [Summarization](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/summarize-text/)
  - +3 more
- [Agents](https://www.enterprisedb.com/docs/aidb/latest/agents/): Build in-database AI agents that reason over multiple steps and delegate to other agents — all driven from SQL.
  - [Managing agents](https://www.enterprisedb.com/docs/aidb/latest/agents/creating-agents/)
  - [Invoking agents](https://www.enterprisedb.com/docs/aidb/latest/agents/conversing-with-agents/)
  - [Delegation](https://www.enterprisedb.com/docs/aidb/latest/agents/delegation/)
  - [Agent plugins](https://www.enterprisedb.com/docs/aidb/latest/agents/plugins/)
- [Tools](https://www.enterprisedb.com/docs/aidb/latest/tools/): AIDB's unified tool catalog — native, custom SQL, and MCP tools that agents can call.
  - [Native tools](https://www.enterprisedb.com/docs/aidb/latest/tools/native-tools/)
  - [Custom SQL tools](https://www.enterprisedb.com/docs/aidb/latest/tools/custom-sql-tools/)
  - [MCP tools](https://www.enterprisedb.com/docs/aidb/latest/tools/mcp-tools/)
- [Governance](https://www.enterprisedb.com/docs/aidb/latest/governance/): Confine what an in-database agent's tools can do, and record every allow/deny decision, using purposes and Postgres roles.
  - [Purposes](https://www.enterprisedb.com/docs/aidb/latest/governance/purposes/)
  - [Enforcement](https://www.enterprisedb.com/docs/aidb/latest/governance/enforcement/)
  - [Decision records](https://www.enterprisedb.com/docs/aidb/latest/governance/decision-records/)
- [edb-endpoints](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/): Settings, OAuth, databases, and operations shared by the MCP server and the OTLP receiver that the edb-endpoints server runs.
  - [Configuring the endpoint](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/configuring-the-endpoint/)
  - [Multiple databases](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/serving-multiple-databases/)
  - [OAuth](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/oauth/)
  - [Operating the endpoint](https://www.enterprisedb.com/docs/aidb/latest/edb-endpoints/operating-the-endpoint/)
- [MCP server](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/): Serve AIDB's tool catalog to external MCP clients over streamable HTTP, and receive OpenTelemetry data from external agents.
  - [Enabling the endpoint](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/enabling-the-endpoint/)
  - [Configuring agent roles](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/configuring-agent-roles/)
  - [Connecting a client](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/connecting-a-client/)
  - [Provisioning example](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/provisioning-example/)
- [OTLP receiver](https://www.enterprisedb.com/docs/aidb/latest/otlp-server/): Accept OpenTelemetry traces, logs, and metrics from agents outside AIDB and store them in the aidb\_otel tables.
- [AI pipelines](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/): Define pipelines to parse, chunk, embed, and index your data — then keep your knowledge base in sync automatically.
  - [Creating pipelines](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/data-processing/)
  - [Pipeline steps](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/pipeline-steps/)
  - [Orchestration](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/orchestration/)
  - [Troubleshooting](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/troubleshooting/)
  - +2 more
- [Knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/): Query vector-indexed knowledge bases in EDB Postgres AI using semantic search, hybrid search, and retrieval functions.
  - [Multi-pipeline KBs](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/multi-pipeline/)
  - [Hybrid search](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/hybrid-search/)
  - [Examples](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/example/)
- [Semantic knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/): Index your database's schema metadata into a semantic knowledge base for natural-language schema search, agent tools, and text-to-SQL.
  - [Searching](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/searching/)
  - [Relationships](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/relationships/)
  - [Query history](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/query-history/)
  - [Business glossary](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/business-glossary/)
  - +6 more
- [Agent memory](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/): Give AI agents a durable, per-user memory of past conversations, stored in Postgres and built into AIDB.
  - [Overview](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/overview/)
  - [Installing](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/install/)
  - [Configuring](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/configuring/)
  - [Managing](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/memory-operations/)
  - +3 more
- [Reference](https://www.enterprisedb.com/docs/aidb/latest/reference/): Full API reference for all AIDB functions, views, and types.
  - [Models](https://www.enterprisedb.com/docs/aidb/latest/reference/models/)
  - [Knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/reference/knowledge-bases/)
  - [Semantic knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/reference/semantic-knowledge-bases/)
  - [Operations](https://www.enterprisedb.com/docs/aidb/latest/reference/operations/)
  - +7 more

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
