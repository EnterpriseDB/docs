---
title: Context
description: Give agents durable memory and a searchable model of your schema.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/context/
lastModified: 2026-11-04T13:59:00+05:30
---

# Context

Give agents the memory and knowledge they need to reason well, using durable conversation memory and a searchable model of your schema.

## Agent memory

Agent memory gives AI agents a durable, per-user memory of past conversations, stored in Postgres and built into the AIDB extension, with per-actor scoping, session and agent filters, safe retries, and auditable deletion.

Install AIDB and configure the Agent Memory Server before using agent memory — see [Installing agent memory](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/install/) and [Configuring agent memory](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/configuring/).

Add, search, list, and delete memories with the `aidb_memory` SQL functions — see [Managing agent memories](https://www.enterprisedb.com/docs/aidb/latest/agent-memory/memory-operations/).

## Semantic knowledge bases

Semantic knowledge bases index your database's schema, including tables, views, columns, and comments, into a searchable vector store, so an agent, or you, can find the right relations and columns by meaning instead of guessing from column names.

Install and configure the AIDB extension before creating a semantic knowledge base — see [Installing and configuring AIDB](https://www.enterprisedb.com/docs/aidb/latest/install/).

Create a semantic knowledge base with `aidb.create_semantic_kb()`, then search it by meaning or use it for text-to-SQL — see [Getting started](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/#getting-started), [Searching a semantic knowledge base](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/searching/), and [Text-to-SQL](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/text-to-sql/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
