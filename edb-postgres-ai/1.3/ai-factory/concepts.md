---
title: Concepts
description: EDB’s vision, strategy, and technologies for delivering AI Factory capabilities in Postgres and Hybrid Manager environments.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/
lastModified: 2026-05-29T10:46:41-07:00
---

# Concepts

**EDB Postgres® AI** (EDB PG AI) brings **AI workloads into your Postgres platform and infrastructure** — with an architecture designed to power **Sovereign AI** on hybrid and cloud-native environments.

AI Factory extends Postgres to support:

- Vector search and semantic search
- Data pipelines for embedding generation
- Gen AI application development
- Scalable model serving and inference
- AI-driven governance and observability

AI Factory helps you build and operate **trusted, enterprise-grade AI systems** using your data, models, and applications.

---

## Before you start

### Prerequisites

You’ll get the most out of this section if you have:

- Familiarity with **Postgres** and database concepts
- Basic understanding of **Large Language Models (LLMs)** and vector search
- Awareness of **Retrieval-Augmented Generation (RAG)** techniques
- Experience with AI concepts such as embedding models, pipelines, and inference services

If new to AI Factory, consider starting with:

- [AI Factory Terminology](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/terminology/)
- [AI Factory 101 Path](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/101/)

---

## EDB’s vision for AI with Postgres and Hybrid Manager

EDB’s AI Factory strategy makes Postgres a **first-class platform** for AI workloads and AI-driven applications.

The architecture combines:

- **AI in Postgres:** vector search, embedding pipelines, and AI functions within the database
- **Gen AI apps:** conversational and task-driven AI applications with Gen AI Builder
- **Scalable inference:** GPU-accelerated model serving using Kubernetes and KServe
- **Unified control plane:** model lifecycle management and observability in Hybrid Manager

This enables **Sovereign AI** — AI on your data, on your infrastructure, with full governance.

---

## Core AI patterns

### Vector search and semantic search

AI Factory makes it easy to implement **semantic search**, **product recommendations**, **anomaly detection**, and similar patterns using vector search.

You can leverage:

- The [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/), providing pgvector-based capabilities
- AI Factory [Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/) to generate embeddings
- [Knowledge Bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/) for integrated vector search across structured and unstructured data

---

### Retrieval-Augmented Generation (RAG)

**RAG pipelines** enhance LLM responses by combining:

- Domain-specific embeddings from [Knowledge Bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/)
- Configurable search behavior with [Retrievers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/retrievers/)
- Scalable model inference through [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/)
- Application orchestration via [Gen AI Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/)

This enables more accurate, grounded, and compliant AI applications.

---

### AI in Database (In-DB AI and Vector Search)

AI Factory transforms Postgres into an **AI data platform** with:

- Vector similarity search using the [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/)
- Embedding pipelines integrated via [Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/)
- Search and retrieval across [Knowledge Bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/)

Future capabilities will extend in-database AI to include **model scoring** and advanced AI operations.

---

### Model serving and inference

AI Factory provides robust model serving with:

- Scalable inference services for LLMs, embedding models, and vision models
- GPU-accelerated serving via Kubernetes + KServe
- Flexible deployment options through the [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) framework
- Lifecycle management and discoverability with the [Model Library Explained](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/model-library-explained/)

These services power both **Gen AI Builder agents** and **Knowledge Bases**.

---

### Gen AI application development

**Gen AI Builder** enables rapid development of intelligent applications that:

- Orchestrate LLMs with [Assistants](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/assistants/)
- Retrieve content using [Knowledge Bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/) and [Retrievers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/retrievers/)
- Enforce behavior via [Rulesets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/rulesets/)
- Execute actions via [Tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/tools/)
- Maintain conversational context through memory settings in [Assistants](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/assistants/)

Explore [Gen AI Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/getting-started/) to start building AI-driven apps.

---

### Pipelines and data preparation

AI Factory [Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/) automate:

- Embedding generation
- Chunking, parsing, summarizing content
- Keeping embeddings fresh with [Auto-Processing](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/capabilities/auto-processing/)

Explore [Preparers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/preparers/) for reusable data preparation components.

---

## Architectural principles

### Modular architecture

AI Factory is built for:

- Hybrid environments (on-premises, cloud, multi-cloud)
- Seamless integration with Postgres and cloud-native services
- **Composable building blocks** for AI applications and workflows

### Open standards and interoperability

AI Factory components use:

- Open model formats via KServe
- pgvector for vector search in Postgres
- Griptape for framework-agnostic LLM orchestration
- RAG-friendly patterns with flexible data and model integration

---

## Summary

EDB PG AI enables you to:

- Embed AI capabilities directly into Postgres
- Build scalable, production-ready AI applications
- Operate Sovereign AI on your infrastructure with unified governance
- Integrate open-source tools and standards across the AI stack

**Next steps:**

- [AI Factory Terminology](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/terminology/)
- [AI Factory Generic Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/generic-concepts/)
- [AI Factory Learning Center](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/)

---

- [Differences & FAQ](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/differences-and-faq/): Understand how AI Factory differs from generic AI approaches, when to use each, and how they can work together across Postgres, Hybrid Manager, and your existing AI stack.
- [Fundamental AI Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/generic-concepts/): Industry concepts that underpin modern AI workloads, data architectures, and AI Factory capabilities.
- [Terminology](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/terminology/): Definitions of key concepts, technologies, and architecture patterns used in AI Factory and Hybrid Manager AI Factory.
- [Sovereign AI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/sovereign-ai/): Understand Sovereign AI and how EDB Postgres AI enables trusted, governed AI solutions — with your data, in your control.
- [Security & governance](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/security-governance/): Understand how AI Factory supports secure, governed Gen AI and data workloads, how Hybrid Manager strengthens governance, and when to consider additional controls.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
