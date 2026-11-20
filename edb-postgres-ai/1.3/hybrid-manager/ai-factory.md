---
title: AI Factory in Hybrid Manager
description: Learn how to use the AI Factory workload within Hybrid Manager (Hybrid Manager AI Factory), including Gen AI, model serving, vector search, and knowledge bases. Explore learning paths, use cases, and Hybrid Manager-specific capabilities.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/
lastModified: 2026-06-24T12:48:12Z
---

# AI Factory in Hybrid Manager

The **AI Factory workload** in Hybrid Manager brings scalable AI, machine learning, and Gen AI capabilities to your Hybrid Manager platform. It enables you to operationalize AI across your Hybrid Manager–managed clusters and data — with deep integration across Postgres, vector search, model serving, and AI assistants.

With AI Factory in Hybrid Manager, you can:

- Deploy Gen AI assistants and agents for internal or external-facing use
- Serve AI models at scale with integrated KServe-powered inferencing and GPU acceleration
- Create Knowledge Bases and perform Retrieval-Augmented Generation (RAG) with vector search
- Manage your model library and deploy trusted models under Hybrid Manager governance
- Integrate AI features directly into your applications and data pipelines

Hub quick links: [AI Factory Hub](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/) — [Gen AI (hub)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/) — [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/)

For in-depth architecture and core concepts, see the [AI Factory Hub](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/).

---

## Example AI solutions you can build

AI Factory in Hybrid Manager enables solutions across many domains:

- Enterprise search and knowledge assistants
  Build RAG-based assistants that integrate with corporate documents, databases, and intranet content.

- Customer support chatbots
  Deploy assistants powered by your own data and domain-specific models, combining conversational AI with Knowledge Bases.

- AI-driven data apps
  Expose AI-powered endpoints for apps — semantic search, recommendations, similarity search, or natural language querying.

- Operational AI for internal tools
  Build AI agents and tools to assist with DevOps, customer success, HR automation, sales enablement, and more.

- Domain-specific model serving
  Serve proprietary or fine-tuned models (LLMs, embedding models, ranking models) as scalable inference services within your Hybrid Manager cluster.

You can start small — with a single assistant or model endpoint — and scale to full AI-powered applications using the AI Factory architecture.

---

## Learning paths

Follow structured learning paths to master AI Factory in Hybrid Manager:

- [AI Factory 101](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/101/) — Introductory concepts and usage
- [AI Factory 201](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/201/) — Building and managing Gen AI and AI Factory workloads
- [AI Factory 301](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/301/) — Advanced integration, scaling, governance, and optimization

---

## Use cases and solutions

We provide detailed guidance and patterns to help you build solutions with AI Factory:

- [Common Use Cases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/use-cases/) — Proven patterns for AI Factory–powered applications
- [Industry Solutions](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/solutions/) — Industry-specific examples and best practices

---

## AI Factory in Hybrid Manager workloads

Hybrid Manager supports a full set of AI Factory capabilities, tightly integrated into its control plane:

### Gen AI workloads

- [Gen AI in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/) — Gen AI capabilities in Hybrid Manager
- [Agent Studio & Builder (consolidated)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/) — Create assistants, tools, structures, rulesets; manage Knowledge Bases

### Model management and serving

- [Model Library](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/library/) — Manage and govern your model assets
- [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) — Deploy and scale model inference services on Kubernetes
- [GPU resource management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/) — Configure and allocate GPU capacity for serving

### Vector Engine

- [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/) — Integrated vector search and similarity capabilities with Postgres

---

## Hybrid Manager learn content

In addition to AI Factory content in the hub, Hybrid Manager provides additional Learn content for Hybrid Manager–specific usage:

- [AI Factory concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/)
- [How-To Guides](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/how-to/)
- [Learning Paths](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/learning-paths/)

---

## How AI Factory fits within Hybrid Manager

Hybrid Manager is the control plane for your databases, analytics, and AI workloads. AI Factory complements other HM capabilities:

- Databases: Provision and manage Postgres clusters; AI Factory connects to these for vector search, RAG, and application endpoints.
- Analytics: Offload data to Iceberg/Delta and query via SQL; AI Factory’s Pipelines and Vector Engine integrate with these datasets for retrieval.
- Operations: Use HM observability and governance to monitor Gen AI, Pipelines, and model serving alongside databases and analytics.

Prerequisites for AI Factory in HM:

- A Hybrid Manager project with AI Factory enabled and required entitlements for Gen AI, Pipelines, Vector Engine, and Model Serving.
- Access to GPU resources where needed for serving. See [GPU resource management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/).

---

## Get started

To begin building with AI Factory in Hybrid Manager:

- Follow the [AI Factory learning paths](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/learning-paths/)
- Explore [use cases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/use-cases/) and [industry solutions](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/solutions/)
- Read [How-To Guides](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/how-to/)
- Deploy your first Gen AI assistant or model using [Gen AI in HM](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/) or [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/)

AI Factory in Hybrid Manager gives you a scalable, secure platform to operationalize AI across your hybrid data estate.

---

## Getting started

- [Getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/getting-started/): Quick orientation to AI Factory on Hybrid Manager with pointers to hub concepts and how-tos.
- [Architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/architecture/): Technical architecture of AI Factory components within Hybrid Manager's Kubernetes infrastructure
- [Sovereign AI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/sovereign-ai-on-hm/): Applying Sovereign AI principles with AI Factory in HM.
- [Use Cases & Personas](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/use-cases-and-personas/): Real-world AI Factory implementations on Hybrid Manager addressing specific organizational needs and user roles
- [FAQ](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/faq/): Common questions about deploying, operating, and troubleshooting AI Factory within Hybrid Manager environments
- [GPU Recommendations](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gpu-recommended/): Recommended GPUs and node sizes for the default NIM models used by AI Factory.
- [Quickstart](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/quickstart/): Build a simple Gen AI assistant backed by a Knowledge Base and deploy a model endpoint using AI Factory.

## Manual

- [How To Enable AI Factory](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/how-to-enable-ai-factory/): Enabling AI Factory in EDB Postgres AI Hybrid Manager
- [Gen AI Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/): Comprehensive platform for building intelligent applications and retrieval-augmented generation systems using governed knowledge bases and private AI infrastructure within EDB Postgres AI.
- [Model](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/models/): Deploy and manage AI models within Hybrid Manager's sovereign infrastructure using Model Library and Model Serving capabilities

## Setup

- [Prerequisites](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/prerequisites/): Environment requirements, GPU planning, and registry configuration needed before deploying AI Factory components
- [Deploy with HM UI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/deploy-with-hm-ui/): Step-by-step guide for deploying NVIDIA NIM models and Gen AI applications through the Hybrid Manager web interface

## How-to (Use Models)

- [Using models (Model Clusters)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/using-models-in-model-clusters/): Accessing KServe endpoints from applications and AIDB; links to hub procedures and examples.

## How-to (Use Gen AI builder)

- [Using models (Builder)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/using-models-in-gen-ai-builder/): How to consume model endpoints from Gen AI Builder in Hybrid Manager; links to hub how-tos.

## Operate & Observe

- [Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/observability/): Where to observe Gen AI and Model Serving workloads in Hybrid Manager; links to hub.
- [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/troubleshooting/): Diagnostic procedures and resolution strategies for common AI Factory issues within Hybrid Manager deployments

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
