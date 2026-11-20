---
title: AI Factory
description: Build AI-powered solutions with EDB Postgres® AI, including Gen AI, vector search, model serving, pipelines, and Postgres integration. Start here to explore concepts, learning paths, use cases, and tutorials.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/
lastModified: 2026-05-29T10:46:41-07:00
---

# AI Factory

**EDB Postgres® AI** provides a scalable, modular platform to build and operationalize AI-powered applications and intelligent data products — starting from **your data**, in **your databases**, running in **your data center or cloud environments**.
**EDB PG AI is designed for Hybrid Manager™ first.** Most capabilities are delivered and managed inside [Hybrid Manager’s AI Factory](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/), where you get a unified control plane, governance, and observability. You can also run selected components outside Hybrid Manager — notably Postgres extensions and AI DB (AIDB) — when supported by licensing.

At its core, EDB Postgres® AI (EDB PG AI) is designed to enable **Sovereign AI**: allowing you to build intelligence on top of your trusted Postgres data, governed within your enterprise boundaries. Your models, your pipelines, your vector indexes — all managed and controlled by you.

With EDB PG AI, you can:

- Build and run [**Gen AI agents**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/) and conversational experiences powered by your enterprise knowledge and sovereign Postgres data in [**Hybrid Manager**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/)
- Perform [**vector search**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/) and **retrieval-augmented generation (RAG)** over structured and unstructured sources
- Create [**document intelligence pipelines**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/) that ingest, process, and classify data from diverse sources
- Deploy scalable [**model serving**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/), using GPU acceleration and enterprise observability
- Extend Postgres with AI-driven query patterns and [**vector-native capabilities**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/)
- Seamlessly combine AI and analytics across Postgres, EDB Lakehouse, and other EDB-integrated platforms

---

## Where AI Factory runs

Choose the right operating model for your teams and environments:

- Hybrid Manager (recommended hub): Use [AI Factory in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/) to provision, govern, and observe AI workloads across Postgres, pipelines, vector search, model serving, and Gen AI.
- Outside Hybrid Manager (selected components): Run Postgres-focused capabilities on compatible platforms, such as the [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/), [Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/), or the AI DB (AIDB) feature set where available.

When you operate outside Hybrid Manager, you own cluster lifecycle, security, and observability. Validate compatibility, performance, and licensing for your target platform before deployment.

---

## Prerequisites

What you need depends on where you run:

- Using Hybrid Manager: Access to a Hybrid Manager instance with AI Factory enabled and the entitlements required for Gen AI, model serving, and vector search. See [AI Factory in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/).
- Running components outside Hybrid Manager: A supported Postgres environment for extensions and AIDB, and the necessary infrastructure for pipelines and model serving as applicable.

For precise component support (outside Hybrid Manager), minimum versions, and licensing boundaries, coordinate with your EDB representative and your platform owner.

---

## Why Sovereign AI?

EDB PG AI enables you to create **Sovereign AI solutions** that respect your data ownership, security, and governance requirements:

- Operate on **your data** — in your Postgres databases and EDB analytics lakes
- Train and serve **your models**, under your control — no opaque third-party APIs required
- Deploy **where you need** — in Hybrid Manager, on-prem data centers, or in your cloud tenancy
- Integrate AI, analytics, and operational data into unified, governed architectures
- Audit, monitor, and control the full lifecycle of AI workloads — from ingestion to inference

By combining Postgres, modern AI pipelines, and scalable model serving in a fully governed architecture, EDB PG AI helps you unlock AI innovation **without compromising trust or compliance**.

---

## What You Can Build

EDB PG AI is designed to help you create intelligent applications and systems **on top of your trusted data** — with Postgres at the center.

You can build:

- **Enterprise knowledge assistants** powered by Gen AI and Postgres-native [**vector search**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/)
- **AI-powered search portals** that integrate structured, semi-structured, and unstructured data
- **Document processing pipelines** with [**Pipelines**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/), OCR, summarization, classification, and extraction
- **Conversational applications** for both internal users and external customers, built with [**Gen AI Builder**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/)
- **AI-powered data apps** exposing [**model-serving APIs**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) for search, recommendations, NLP, and vision
- **Intelligent automation** embedded in business systems and workflows — driven by your data
- **RAG architectures** combining Postgres, Lakehouse, and Gen AI to deliver trusted answers

See our [Use Cases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/use-cases/) and [Industry Solutions](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/solutions/) for detailed examples and solution patterns.

---

## Choose your path

Use these entry points based on your goal (Diataxis):

- Concepts and architecture: [AI Factory Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/)
- How-to guides: [Gen AI how-to](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/how-to/) and [Model serving how-to](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/how-to-deploy-ai-models/)
- Tutorials and learning: [Learning Paths](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/learning-paths/) — 101, 201, and 301
- Reference: [Gen AI reference](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/), [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/), [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/), and [Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/)

---

## Who Is It For, and How to Get Started?

EDB PG AI serves **data-driven organizations** that want to build AI applications and systems **on top of their core Postgres and analytics estate**:

- **Developers** building Gen AI apps and intelligent data experiences
- **Data engineers** managing [**Pipelines**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/), [**vector search**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/), and hybrid data preparation
- **AI engineers** operationalizing models with [**Model Serving**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) within governed Postgres-integrated environments
- **Data architects** designing AI + analytics solutions at scale
- **IT leaders and security teams** seeking enterprise-grade control and auditability

Getting started is easy:

- Explore our [Learning Paths](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/learning-paths/) to build foundational skills
- Start building **knowledge bases** and **assistants** with [**Gen AI Builder**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/) and [**Agent Studio**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/assistants/)
- Deploy your first [**model serving workload**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) and integrate with Postgres queries
- Build [**pipelines**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/) and [**vector search**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/) to power intelligent applications on trusted data

---

## Core Capabilities

Explore each capability area of EDB PG AI:

### Gen AI Workloads

- [Gen AI Workloads](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/) — Overview of capabilities
- [Agent Studio](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/assistants/) — Build assistants, tools, structures, and rulesets
- [Gen AI Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/) — Manage knowledge bases and data lakes

### Asset Library and Model Serving

- [Asset Library](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/library/) — Manage and govern models and AI assets
- [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) — Deploy and scale model inference services

### Pipelines and Vector Engine

- [Pipeline Capabilities](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/) — Build pipelines for document intelligence and vectorization
- [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/) — Integrate vector search and AI-driven query patterns into Postgres

---

## EDB PG AI and Analytics

EDB PG AI is deeply integrated with the [**EDB Analytics ecosystem**](https://www.enterprisedb.com/docs/pgaa/1.3/):

- Combine structured + unstructured data for AI-powered search and insights
- Build Lakehouse-backed RAG pipelines that feed Gen AI agents
- Store and query vector embeddings natively alongside Postgres and Lakehouse data
- Create hybrid AI + analytics solutions that leverage Postgres extensions, analytics engines, and AI serving — all governed within EDB PG AI

This enables truly **data-driven AI** — where the best of your operational, transactional, and analytical data powers your AI systems.

---

## Learn and Build

Go deeper with the following resources:

- [Explained Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/explained/) — Understand the architecture and components of EDB PG AI
- [How-to Guides](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/how-to/) — Practical guides for building EDB PG AI solutions

---

## Build Your EDB PG AI Solution

Start today with one or more of these steps:

- Build your first [**Gen AI Assistant**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/assistants/) using Agent Studio
- Deploy a [**Knowledge Base**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/) with Gen AI Builder and integrate with RAG
- Launch your first [**Model Serving InferenceService**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/)
- Create [**Data Pipelines**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/) for document intelligence
- Add [**Vector Search**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/) to Postgres

Explore [Use Cases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/use-cases/) and [Industry Solutions](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/solutions/) for end-to-end patterns and architecture guidance.

---

**EDB PG AI** gives you a powerful, modular foundation to build AI-powered solutions **on your data, in your datacenter or cloud, governed by you**.

**Start building today.**

## Start

- [Hub Map](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/hub-map/): A one-screen map of the AI Factory hub to help you find concepts, how-tos, and references fast — and understand how the Hybrid Manager spoke relates.
- [Learning Center](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/): Explore concepts, hands-on guides, learning paths, and tutorials to build intelligent applications and data products with EDB PG AI.
- [Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/): EDB’s vision, strategy, and technologies for delivering AI Factory capabilities in Postgres and Hybrid Manager environments.

## Usage

- [Models](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/): Comprehensive model management and inference deployment within EDB Postgres AI through Hybrid Manager integration. Govern, deploy, and operationalize AI models with enterprise-grade control.
- [Gen AI Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/): Comprehensive platform for building intelligent applications and retrieval-augmented generation systems using governed knowledge bases and private AI infrastructure within EDB Postgres AI.
- [Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/): AI Factory Pipelines automate and optimize AI data workflows in Postgres — powering RAG, Knowledge Bases, and more.
- [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/): Vector Engine extends Postgres with vector search capabilities, using the PGvector extension, to power Retrieval-Augmented Generation (RAG) and other AI-driven workloads.
- [Release Notes](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/release_notes/): Release notes provides information on what is new in each release of AI Factory.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
