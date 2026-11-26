---
title: Packages
description: Install and reference each of the packages that make up Agent Factory.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/
lastModified: 2026-11-04T13:59:00+05:30
---

# Packages

Find installation instructions and reference documentation for the extensions and applications that implement Search, Context, Runtime, and Governance. Where available, package documentation also includes upgrade guidance, release notes, and known issues.

- **[AIDB extension](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/aidb/)** — AIDB acts as the orchestrator of your AI workflows. It automates the complex backend tasks required to make your data AI-ready:

  - **In-Database LLM integration**: Connect directly to OpenAI, Azure, Google Cloud Storage, AWS S3, or local models using SQL.

  - **AI data preparation**: Automatically transform table data into vector embeddings.

  - **Semantic management**: No more glue code — manage your RAG workflows with standard SQL commands.

  AIDB's own capabilities — pipelines, agent memory, semantic knowledge bases, model integration, agents, and the MCP endpoint — are covered under [Search](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/search/), [Context](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/context/), [Runtime](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/runtime/), and [Governance](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/governance/) in Agent Factory.

- **[EDB Vector Plus](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/vector-plus/)** — EDB Vector Plus is a Postgres extension that adds the `ivfplus` vector index type for faster, lower-footprint vector search at scale. It works alongside pgvector, using the same `vector` type, and is one of the extensions behind [Search](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/search/) in Agent Factory.

- **[pgvector](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/pgvector/)** — pgvector is an open-source Postgres extension for storing and querying vector embeddings directly in your database using standard SQL. It's also one of the extensions behind [Search](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/search/) in Agent Factory.

- **[Agent Governance](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/agent-governance/)** — EDB Agent Governance is a standalone application that audits how AI agents interact with your Postgres data by reading the telemetry and governance decisions `aidb` records. Postgres query logs from HM or Loki are supported as a legacy source. It's covered under [Governance](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/governance/) in Agent Factory.

- **[Agent Skills](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/agent-skills/)** — Install EDB's Agent Skills so AI coding agents have built-in, validated knowledge of each product.

* [AIDB](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/aidb/): Install, upgrade, and review release notes and known issues for the AIDB extension.
* [Vector Plus](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/vector-plus/): Install, upgrade, and review release notes and troubleshooting for EDB Vector Plus.
* [pgvector](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/pgvector/): Install, upgrade, and review release notes and known limitations for pgvector.
* [Agent Governance](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/agent-governance/): Install EDB Agent Governance.
* [Agent Skills](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/agent-skills/): Install EDB's Agent Skills so AI coding agents like Claude Code have built-in, validated knowledge of AIDB, PGAA, and PGFS.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
