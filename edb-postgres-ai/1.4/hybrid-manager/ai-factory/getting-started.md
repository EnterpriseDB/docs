---
title: Getting started with Agent Factory on Hybrid Manager
description: Build an AI flow with a knowledge base and a deployed model endpoint using Agent Factory on Hybrid Manager.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/getting-started/
lastModified: 2026-10-21T00:19:17Z
---

# Getting started with Agent Factory on Hybrid Manager

Agent Factory is the AI and machine learning workload in Hybrid Manager. It lets you deploy and serve NVIDIA NIM models on your own GPU infrastructure, build AI flows and agents with Agent Studio, create knowledge bases and RAG pipelines with Pipeline Designer, and expose model endpoints to your applications, all within your sovereign Kubernetes environment.

This page walks you through the fastest path to get something running.

## What you'll build

Agent Factory on Hybrid Manager supports two starting paths:

- Building an AI flow in Agent Studio backed by a knowledge base.
- Creating a knowledge base pipeline through Pipeline Designer.

Both paths require a deployed model cluster, start there if you haven't already.

## Before you start

Complete these steps in order before following either path below. Agent Factory must be enabled and a model cluster must be running before Agent Studio and Pipeline Designer can use models.

- Enable Agent Factory in your project: [Prerequisites](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/prerequisites/#enabling-agent-factory)
- Provision GPU node groups: [GPU recommendations](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/gpu-recommended/)
- Deploy a model cluster from the Model Library: [Deploy with HM UI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/deploy-with-hm-ui/)

## Option A — Build an AI flow with Agent Studio

Agent Studio is a visual flow builder that ships with HM. Use it to wire together EDB components — knowledge bases, embedding models, LLMs, and Postgres databases — into AI flows and agents you can run interactively or deploy as callable services.

- [Agent Studio quickstart](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/langflow/quickstart/) — end-to-end walkthrough: knowledge base setup, component wiring, and running the flow in the playground.

## Option B — Create a knowledge base pipeline

Pipeline Designer is a no-code wizard in the HM console for building AIDB data pipelines. Use it to ingest documents, generate embeddings, and store them in a vector knowledge base ready for semantic search or RAG.

- [Pipeline Designer getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/getting-started/)
- [Creating pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/pipeline-designer/creating-pipelines/)

## Access model endpoints from your applications

Any model deployed through HM exposes an OpenAI-compatible REST endpoint. You can call it directly from applications, scripts, or external tools without going through Agent Studio or Pipeline Designer.

- [Access KServe endpoints](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/access-kserve-endpoints/)
- [Quickstart (Python)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/quickstart-python-using-inference-endpoint/)

## Monitor and iterate

Once your models and flows are running, use HM's built-in observability to track inference latency, GPU utilization, and flow health.

- [Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/observability/)
- [Monitor InferenceService](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/monitor-inferenceservice/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
