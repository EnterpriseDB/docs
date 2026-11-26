---
title: Agent Factory in Hybrid Manager
description: Deploy and serve AI models and expose model endpoints to your applications — all within your Hybrid Manager environment.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/
lastModified: 2026-11-20T19:53:06+05:30
---

# Agent Factory in Hybrid Manager

The **Agent Factory workload** in Hybrid Manager brings scalable AI and machine learning capabilities to your Hybrid Manager platform. It enables you to operationalize AI across your Hybrid Manager–managed clusters and data — with deep integration across Postgres, vector search, model serving, and AI pipelines.

With Agent Factory in Hybrid Manager, you can:

- Serve AI models at scale with integrated KServe-powered inferencing and GPU acceleration.
- Create knowledge bases and perform Retrieval-Augmented Generation (RAG) with vector search.
- Integrate AI features directly into your applications and data pipelines.

---

## Example AI solutions you can build

Agent Factory in Hybrid Manager enables solutions across many domains:

- Enterprise search and knowledge assistants: Build RAG-based assistants that integrate with corporate documents, databases, and intranet content.

- Customer support chatbots: Deploy assistants powered by your own data and domain-specific models, combining conversational AI with Knowledge Bases.

- AI-driven data apps: Expose AI-powered endpoints for apps — semantic search, recommendations, similarity search, or natural language querying.

- Operational AI for internal tools: Build AI agents and tools to assist with DevOps, customer success, HR automation, sales enablement, and more.

- Domain-specific model serving: Serve proprietary or fine-tuned models (LLMs, embedding models, ranking models) as scalable inference services within your Hybrid Manager cluster.

You can start small — with a single assistant or model endpoint — and scale to full AI-powered applications using the Agent Factory architecture.

---

## Agent Factory in Hybrid Manager workloads

Hybrid Manager supports a full set of Agent Factory capabilities, tightly integrated into its control plane:

### Model management and serving

- [Model Library](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/library/) — Manage and govern your model assets
- [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) — Deploy and scale model inference services on Kubernetes
- [GPU resource management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/) — Configure and allocate GPU capacity for serving

---

## How Agent Factory fits within Hybrid Manager

Hybrid Manager is the control plane for your databases, analytics, and AI workloads. For databases, Agent Factory is delivered as EDB's set of Postgres extensions and applications that run on your Postgres clusters. For AI workloads, Agent Factory is delivered as a set of Kubernetes workloads that run on your Hybrid Manager–managed clusters.

Prerequisites for Agent Factory in HM:

- A Hybrid Manager project with Agent Factory enabled and required entitlements for Model Serving.
- Access to GPU resources where needed for serving. See [GPU resource management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/).

---

## Get started

- New to Agent Factory on HM? Start here: [Getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/getting-started/)
- Review environment requirements: [Prerequisites](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/prerequisites/)
- Explore real-world patterns: [Use cases and personas](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/use-cases-and-personas/)
- Understand the architecture: [Architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/architecture/)

## Getting started

- [Getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/getting-started/): Deploy a model and call its endpoint using Agent Factory on Hybrid Manager.
- [Prerequisites](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/prerequisites/): Environment requirements, GPU planning, and registry configuration needed before deploying Agent Factory components
- [GPU Recommendations](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/gpu-recommended/): Recommended GPUs and node sizes for the default NIM models used by Agent Factory.

## Understand

- [Architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/architecture/): Technical architecture of Agent Factory components within Hybrid Manager's Kubernetes infrastructure
- [Use Cases & Personas](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/use-cases-and-personas/): Real-world Agent Factory implementations on Hybrid Manager addressing specific organizational needs and user roles.
- [FAQ](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/faq/): Common questions about deploying, operating, and troubleshooting Agent Factory within Hybrid Manager environments

## Model management

- [Model](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/models/): Deploy and manage AI models within your Hybrid Manager environment using Model Library and Model Serving capabilities
- [Deploy with HM UI](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/deploy-with-hm-ui/): Step-by-step instructions for deploying NVIDIA NIM model clusters through the Hybrid Manager web interface.
- [External inference services](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/external-inference-service/): How to manage remote model endpoints (OpenAI, Google Gemini, Anthropic Claude, NVIDIA NIM, or any OpenAI-compatible API) in Hybrid Manager so that AIDB can proxy calls to them.

## Operate & Observe

- [Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/observability/): Monitor model serving workloads in Hybrid Manager using built-in dashboards, logs, and Grafana.
- [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/troubleshooting/): Diagnostic procedures and resolution strategies for common Agent Factory issues within Hybrid Manager deployments

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
