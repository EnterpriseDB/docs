---
title: Agent Factory in Hybrid Manager
description: Deploy and serve AI models, build AI flows with Agent Studio, create knowledge base pipelines with Pipeline Designer, and expose model endpoints to your applications — all within Hybrid Manager's sovereign Kubernetes environment.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/
lastModified: 2026-10-21T00:19:17Z
---

# Agent Factory in Hybrid Manager

The **Agent Factory workload** in Hybrid Manager brings scalable AI and machine learning capabilities to your Hybrid Manager platform. It enables you to operationalize AI across your Hybrid Manager–managed clusters and data — with deep integration across Postgres, vector search, model serving, and AI pipelines.

With Agent Factory in Hybrid Manager, you can:

- Build AI flows and agents with Agent Studio for internal or external-facing use.
- Serve AI models at scale with integrated KServe-powered inferencing and GPU acceleration.
- Create knowledge bases and perform Retrieval-Augmented Generation (RAG) with vector search.
- Manage your model library and deploy trusted models under Hybrid Manager governance.
- Integrate AI features directly into your applications and data pipelines.

---

## Example AI solutions you can build

Agent Factory in Hybrid Manager enables solutions across many domains:

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

You can start small — with a single assistant or model endpoint — and scale to full AI-powered applications using the Agent Factory architecture.

---

## Agent Factory in Hybrid Manager workloads

Hybrid Manager supports a full set of Agent Factory capabilities, tightly integrated into its control plane:

### Build AI flows

- [Agent Studio](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/langflow/) — Build and deploy AI pipelines and flows using EDB components connected to HM-managed models, knowledge bases, and Postgres clusters
- [Pipeline Designer](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/) — Create AIDB data pipelines and knowledge bases through a no-code visual interface

### Model management and serving

- [Model Library](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/library/) — Manage and govern your model assets
- [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) — Deploy and scale model inference services on Kubernetes
- [GPU resource management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/) — Configure and allocate GPU capacity for serving

---

## How Agent Factory fits within Hybrid Manager

Hybrid Manager is the control plane for your databases, analytics, and AI workloads. Agent Factory complements other HM capabilities:

- Databases: Provision and manage Postgres clusters; Agent Factory connects to these for vector search, RAG, and application endpoints.
- Analytics: Offload data to Iceberg/Delta and query via SQL; Agent Factory’s pipelines and Vector Engine integrate with these datasets for retrieval.
- Operations: Use HM observability and governance to monitor AI flows, pipelines, and model serving alongside databases and analytics.

Prerequisites for Agent Factory in HM:

- A Hybrid Manager project with Agent Factory enabled and required entitlements for Agent Studio, Pipeline Designer, and Model Serving.
- Access to GPU resources where needed for serving. See [GPU resource management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/).

---

## Sovereign AI in Hybrid Manager

Agent Factory on Hybrid Manager runs AI workloads co-located with your data:

- **Your environment.** Model serving, pipelines, and vector search run directly inside your Hybrid Manager project and Kubernetes cluster.
- **Your data.** Source documents, embeddings, and inference results never leave your environment unless you explicitly configure it.
- **Your models.** Model images are curated in the Model Library and served from endpoints inside your cluster.
- **Your visibility.** Model logs and AI workload metrics are observable through the same platform you use for Postgres and analytics.

This is distinct from external AI services, where prompts, documents, and embeddings leave your network and are processed in a third-party environment. With Hybrid Manager, all retrieval, generation, and storage happen inside your project and infrastructure.

For high-security deployments, Hybrid Manager can operate fully air-gapped — model images are preloaded, and all workloads stay entirely within your controlled cluster. See [Prerequisites](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/prerequisites/#registry-configuration) for air-gapped setup.

---

## Get started

- New to Agent Factory on HM? Start here: [Getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/getting-started/)
- Review environment requirements: [Prerequisites](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/prerequisites/)
- Explore real-world patterns: [Use cases and personas](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/use-cases-and-personas/)
- Understand the architecture: [Architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/architecture/)

## Getting started

- [Getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/getting-started/): Build an AI flow with a knowledge base and a deployed model endpoint using Agent Factory on Hybrid Manager.
- [Prerequisites](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/prerequisites/): Environment requirements, GPU planning, and registry configuration needed before deploying Agent Factory components
- [GPU Recommendations](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/gpu-recommended/): Recommended GPUs and node sizes for the default NIM models used by Agent Factory.

## Understand

- [Architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/architecture/): Technical architecture of Agent Factory components within Hybrid Manager's Kubernetes infrastructure
- [Use Cases & Personas](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/use-cases-and-personas/): Real-world Agent Factory implementations on Hybrid Manager addressing specific organizational needs and user roles.
- [FAQ](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/faq/): Common questions about deploying, operating, and troubleshooting Agent Factory within Hybrid Manager environments

## Model management

- [Model](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/models/): Deploy and manage AI models within Hybrid Manager's sovereign infrastructure using Model Library and Model Serving capabilities
- [Deploy with HM UI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/deploy-with-hm-ui/): Step-by-step guide for deploying NVIDIA NIM model clusters and configuring AI flows through the Hybrid Manager web interface
- [External inference services](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/external-inference-service/): How to manage remote model endpoints (OpenAI, Google Gemini, Anthropic Claude, NVIDIA NIM, or any OpenAI-compatible API) in Hybrid Manager so that Agent Studio flows, Pipeline Designer pipelines, and AIDB can proxy calls to them.

## Build with AI

- [Agent Studio](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/langflow/): Build and deploy AI pipelines and MCP servers with Agent Studio in Hybrid Manager, using EDB-provided components and the EDB flow deployment lifecycle.
- [Pipeline Designer](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/): Build and manage AI data pipelines visually in Hybrid Manager using the Pipeline Designer, which provides a no-code interface for creating AIDB data pipelines, knowledge bases, and multi-step processing workflows.

## Operate & Observe

- [Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/observability/): Monitor model serving and Agent Studio workloads in Hybrid Manager using built-in dashboards, logs, and Grafana.
- [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/troubleshooting/): Diagnostic procedures and resolution strategies for common Agent Factory issues within Hybrid Manager deployments

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
