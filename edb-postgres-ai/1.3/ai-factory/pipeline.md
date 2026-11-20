---
title: AI Factory Pipelines
description: AI Factory Pipelines automate and optimize AI data workflows in Postgres — powering RAG, Knowledge Bases, and more.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/
lastModified: 2026-05-29T10:46:41-07:00
---

# AI Factory Pipelines

**AI Factory Pipelines** is a core capability of **EDB Postgres® AI** (EDB PG AI), enabling intelligent, automated AI data workflows directly in your Postgres clusters — including **Retrieval-Augmented Generation (RAG)**, **Knowledge Bases**, and vector-powered applications.

Pipelines abstracts away complexity in preparing, managing, and serving AI data for Postgres — integrating with **Vector Engine** and enabling **Sovereign AI** patterns where your data stays inside your database or trusted object storage.

## Why Pipelines?

Modern AI workloads — especially RAG and Gen AI — require:

- Clean, preprocessed data
- Consistent embeddings
- Efficient vector indexes
- Real-time updates when source data changes

Manually managing these steps is complex and error-prone. Pipelines automates this lifecycle:

- Prepares and cleans data
- Runs embedding generation
- Maintains vector indexes
- Supports auto-processing and Knowledge Bases

Pipelines helps eliminate "hallucinations" from stale embeddings and makes building reliable Gen AI easier.

## What You Can Do

With Pipelines, you can:

- Automate **vector embedding pipelines** for text and image data
- Maintain **Knowledge Bases** with real-time or batch updates
- Perform **semantic and similarity search** using [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/)
- Integrate with **Gen AI Builder** and other AI Factory components
- Build fully auditable, controlled **Sovereign AI** systems on your data

## How It Works

### Preparers

Preparers define how source data is cleaned, chunked, and prepared for embedding. You can create preparers for:

- Postgres tables (`aidb.create_table_preparer()`)
- Object storage (S3-compatible) (`aidb.create_volume_preparer()`)

Once created, you can run:

- **Bulk processing** (`aidb.bulk_data_preparation()`)
- **Auto-processing** (`aidb.set_auto_preparer()`) to keep embeddings up to date automatically.

See [Preparer Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/) to learn more.

### Knowledge Bases

Knowledge Bases provide a simple abstraction for RAG:

- Define a Knowledge Base (`aidb.create_table_knowledge_base()`, `aidb.create_volume_knowledge_base()`)
- Automatically manage embeddings and vector indexes
- Use `aidb.retrieve_key()` and `aidb.retrieve_text()` for semantic search

Supports:

- Text and image data
- Multi-modal models (e.g., CLIP)
- Integration with Gen AI Builder’s retrieval flows

See [Knowledge Base Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/).

### Auto-Processing

Pipelines supports flexible auto-processing modes:

- Sync or async
- Table or volume sources
- Configurable batch sizes and triggers

See [Auto-Processing](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/capabilities/auto-processing/) for details.

## Who Should Use Pipelines?

Pipelines is ideal for:

- Gen AI Builders creating **enterprise Knowledge Bases**
- Data Engineers building **semantic search pipelines**
- AI teams needing **automated RAG pipelines**
- Architects implementing **Sovereign AI** in regulated environments

## When to Use Pipelines

Use Pipelines when you need to:

- Keep embeddings current with changing data
- Reduce RAG errors caused by stale or incomplete embeddings
- Power multi-modal Gen AI search across text and images
- Maintain full auditability and governance of embedding processes

## Configuration values explained

- Chunk size and overlap: Smaller chunks improve grounding; overlap helps preserve context across chunks. Tune based on document structure.
- Embedding model selection: Use a consistent model for ingestion and query. Choose for your domain and language.
- Auto‑processing cadence: Align with data change frequency and SLA. Consider sync vs. async modes.
- Batch sizes and parallelism: Increase for throughput but monitor storage, network, and memory.
- Similarity threshold and top‑K: Higher thresholds reduce noise; tune top‑K for recall vs. latency.

## Learn More

- [Knowledge Base Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/)
- [Preparer Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/)
- [Auto-Processing](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/capabilities/auto-processing/)
- [Supported Embedding Models](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/supported-models/)
- [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/)

**AI Accelerator Pipelines** helps you build trusted, scalable **Sovereign AI** solutions on top of your Postgres data — keeping AI pipelines clean, current, and production-ready.

## Start here

- [Pipelines overview](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/pipelines-overview/): Where to start with AI Accelerator Pipelines.
- [Compatibility](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/compatibility/): Compatibility information for the EDB Postgres AI - AI Accelerator Pipelines.
- [Limitations](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/limitations/): Limitations of the EDB Postgres AI - AI Accelerator Pipelines.

## Get started

- [Getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/gettingstarted/): How to get started with AI Accelerator Pipelines.
- [Installing](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/installing/): How to install (or upgrade) AI Accelerator Pipelines.

## Core concepts

- [Knowledge bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/): Creating and using knowledge bases in AI Accelerator Pipelines.
- [Preparers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/): Creating and using preparers in AI Accelerator Pipelines.
- [Capabilities](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/capabilities/): Capabilities of EDB Postgres AI - AI Accelerator Pipelines.
- [Models](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/): How to work with models in AI Accelerator Pipelines.

## Storage and access

- [PGFS](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/pgfs/): How to work with the Postgres File System (PGFS) in Pipelines.
- [Volumes](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/volumes/): AIDB volumes for accessing PGFS storage locations.

## Reference

- [Reference](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/): Reference documentation for AI Accelerator Pipelines.

## Release notes

- [Release notes](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/rel_notes/): Release notes for EDB Postgres AI - AI Accelerator

## Legal

- [Licenses](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/licenses/): Open Source Licenses for software incorporated in EDB Postgres AI - AI Accelerator - Pipelines, by package and license.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
