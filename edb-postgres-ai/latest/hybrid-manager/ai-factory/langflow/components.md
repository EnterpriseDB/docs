---
title: EDB components
description: Reference for the EDB-provided Agent Studio components that connect flows to Hybrid Manager resources.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/
lastModified: 2026-08-07T14:25:48+05:30
---

# EDB components

The **EDB** folder in Agent Studio contains components that connect flows to resources managed by Hybrid Manager (HM): knowledge bases, databases, vector indexes, embedding and model server clusters, embedded models, and MCP tooling.

| Component                                                                                                                                      | Connects flow to                             | Required roles                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------ |
| [EDB Knowledge Base](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/knowledge-base/)   | An AIDB knowledge base in an HM cluster      | Project Viewer                             |
| [EDB Vector Index](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/vector-index/)       | Vector indexes on Postgres tables (pgvector) | Project Viewer                             |
| [EDB Database](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/database/)               | A Postgres database in an HM cluster         | Project Viewer                             |
| [EDB Airman MCP](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/airman/)               | The Airman MCP server's tools                | None (requires valid PG connection string) |
| [EDB Platform](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/platform/)               | HM platform MCP tools for the current user   | Depends on operations invoked              |
| [EDB Embeddings](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/embeddings/)           | An HM-hosted embedding model                 | AI Model Manager                           |
| [EDB Model Server](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/model-server/)       | An HM-hosted inference model (LLM or other)  | AI Model Manager                           |
| [EDB Embedded Models](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/embedded-models/) | AIDB embedded models for CPU-based inference | Project Viewer                             |

See the parent [Agent Studio](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/) page for role requirements and Global Variables setup.

- [EDB Knowledge Base](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/knowledge-base/): Agent Studio component that performs semantic similarity search, optionally combined with column filtering, against an AIDB knowledge base in a Hybrid Manager cluster.
- [EDB Vector Index](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/vector-index/): Agent Studio component that creates, drops, rebuilds, or checks pgvector indexes on PostgreSQL tables in a Hybrid Manager cluster.
- [EDB Database](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/database/): Agent Studio component that produces a Postgres connection URL for a database in a Hybrid Manager cluster.
- [EDB Airman MCP](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/airman/): Agent Studio component that exposes a Postgres database to agents as MCP tools, with read-only or unrestricted SQL access.
- [EDB Platform](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/platform/): Agent Studio component that exposes Hybrid Manager platform operations (projects, clusters, knowledge bases, and more) as MCP tools to an agent.
- [EDB Embeddings](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/embeddings/): Agent Studio component that produces embedding vectors via a Hybrid Manager-hosted embedding model cluster.
- [EDB Model Server](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/model-server/): Agent Studio component that calls an inference model (LLM or other) hosted on a Hybrid Manager model server cluster.
- [EDB Embedded Models](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/embedded-models/): Agent Studio component that runs CPU-based inference (text and image embeddings, text generation) directly on a Postgres cluster using the aidb extension.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
