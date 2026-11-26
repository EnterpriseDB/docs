---
title: Gen AI Builder FAQ
description: Practical answers for building with Gen AI Builder in Hybrid Manager — models, knowledge bases, assistants, tools, security, performance, and operations.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/faq/
lastModified: 2026-05-29T10:46:41-07:00
---

# Gen AI Builder FAQ

This FAQ focuses on Gen AI Builder  inside Hybrid Manager’s AI Factory. It covers common questions about models, knowledge bases, assistants, tools, SDK usage, security, performance, and operations.

Table of contents

- [Typical use cases and patterns](#typical-use-cases-and-patterns)
- [Which models/drivers are supported?](#which-modelsdrivers-are-supported)
- [When to use RAG vs. fine‑tuning?](#when-to-use-rag-vs-finetuning)
- [How do I create and update Knowledge Bases?](#how-do-i-create-and-update-knowledge-bases)
- [What are Retrievers and how do I tune them?](#what-are-retrievers-and-how-do-i-tune-them)
- [How do Assistants call Tools and Structures?](#how-do-assistants-call-tools-and-structures)
- [Where does data live and how is access governed?](#where-does-data-live-and-how-is-access-governed)
- [How do I improve latency and control cost?](#how-do-i-improve-latency-and-control-cost)
- [How do I test, observe, and troubleshoot?](#how-do-i-test-observe-and-troubleshoot)
- [Where to find SDK references and examples?](#where-to-find-sdk-references-and-examples)

### Which models/drivers are supported?

Gen AI Builder is driver‑based. You can use private/endpoints or hosted APIs via Prompt Drivers, Embedding Drivers, and Vector Store Drivers.

- Prompt Drivers: OpenAI, Anthropic, Google, and more (see reference: `reference/sdk/drivers/index.mdx` and per‑provider pages)
- Embedding Drivers: OpenAI, Google, NVIDIA NIM, Hugging Face, etc. (`reference/sdk/drivers/embedding-drivers.mdx`)
- Vector Store Drivers: pgvector (Postgres), local, Pinecone, Qdrant, Redis, and others (`reference/sdk/drivers/vector-store-drivers.mdx`)
- NVIDIA NIM: deploy as private endpoints via [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/)

See also: [AI Factory Models](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/) and [deploy NIM containers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deploy-nim-container/).

### When to use RAG vs fine‑tuning?

Prefer RAG for living knowledge and governed answers; use fine‑tuning for tone/format/narrow tasks. Many production assistants combine both: retrieve context from [Knowledge Bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/knowledge-bases/) and guide responses with [Rulesets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/rulesets/). For modular pipelines, explore [RAG Engines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/engines/).

### How do I create and update Knowledge Bases?

- Create: [Create a Knowledge Base](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/create-knowledge-base/) and configure [Data Sources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/data-sources/) (Confluence, Google Drive, S3, Web Page, Data Lake, Custom)
- Update: [Manage a Knowledge Base](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/manage-knowledge-base/); re‑sync when source Libraries change
- Storage: embeddings live in Postgres (pgvector) or a configured vector store
- Tuning: choose chunking and metadata that match your retrieval; validate with golden questions

SDK references: [Data Loaders](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/loaders/), [Embedding Drivers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/embedding-drivers/), [Vector Store Drivers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/vector-store-drivers/).

### What are Retrievers and how do I tune them?

Retrievers control how assistants fetch context: target KBs, max tokens, filters, re‑ranking.

- Create: [Create a Retriever](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/create-retriever/)
- Tune: similarity thresholds, top‑K, metadata filters, rerankers
- Advanced: modular [RAG Engines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/engines/) with retrieval/rerank/response stages

SDK references: [RAG Engines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/engines/), [Rerank Drivers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/rerank-drivers/).

### How do Assistants call Tools and Structures?

Assistants orchestrate retrieval + generation + actions. Use Tools for external systems, or promote Structures (pipelines/workflows/agents) as callable Tools.

- Build assistants: [Create an Assistant](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/create-assistant/) with [Rulesets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/create-ruleset/), [Retrievers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/create-retriever/), and [Tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/create-tool/)
- Structures: package logic as a ZIP and deploy [Structures](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/create-structure/); expose as Tool or run standalone
- Memory and threads: see [Threads](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/threads/) and conversation memory drivers

SDK references: [Structures](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/), [Tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/tools/), [Assistant Drivers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/assistant-drivers/), [Conversation Memory Drivers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/conversation-memory-drivers/).

### Where does data live and how is access governed?

- Documents: ingest via [Data Sources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/data-sources/); store in governed Data Lake or Postgres
- Embeddings/vectors: Postgres pgvector (recommended) or another configured vector store
- Governance: enforce permissions in source systems; restrict tool usage per project; audit retrieval and tool calls with threads/logs

See: [Configure Data Lake](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/configure-datalake/), [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/).

### How do I improve latency and control cost?

- Retrieval: reduce top‑K, improve chunking/metadata, use re‑rank selectively
- Generation: choose right model per route; stream responses; batch where safe
- Caching: memoize embeddings, hot retrievals, and tool outputs when possible
- Infra: colocate models and KBs; scale with Model Serving autoscaling

See SDK: [Engines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/engines/) and Drivers. See Models: [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/).

### How do I test, observe, and troubleshoot?

- Testing: golden sets, conversation playbooks, SDK unit tests
- Observability: thread logs, assistant/structure run events; optionally export to your observability stack
- Debugging: verify retrieval set first; inspect ruleset changes; re‑run the same structure/assistant with stored inputs

Docs: [Threads](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/threads/), SDK [Structures/observability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/observability/).

### Typical use cases and patterns

- Enterprise knowledge assistants: KB + Retriever + Assistant + Tooling (tickets/CRM)
- Customer support copilots: policy/FAQ KBs + routing + guardrails via Rulesets
- Workflow bots: Structures + Tools for approvals, data enrichment, and reporting
- RAG for analytics: pgvector + Pipelines + Assistant for guided exploration

Explore: [Hybrid KB best practices](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/hybrid-kb-best-practices/), [Quickstart UI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/quickstart-customer-service-agent-ui/).

### Where to find SDK references and examples?

- SDK overview: [Gen AI Builder SDK](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/)
- Data: [Artifacts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/artifacts/), [Loaders](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/loaders/), [Chunkers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/chunkers/)
- Drivers: [Prompt/Assistant](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/), [Embedding](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/embedding-drivers/), [Vector Stores](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/vector-store-drivers/)
- Structures: [Tasks](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/tasks/), [Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/pipelines/), [Workflows](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/workflows/)
- Tools: [Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/tools/)

See also the product guides: [assistants](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/assistants/), [knowledge bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/knowledge-bases/), [retrievers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/retrievers/), [rulesets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/rulesets/), [structures](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/structures/), [tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/tools/), [threads](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/threads/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
