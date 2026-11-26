---
title: AI Factory Quickstart
description: Build a simple Gen AI assistant backed by a Knowledge Base and deploy a model endpoint using AI Factory.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/quickstart/
lastModified: 2026-06-24T12:48:12Z
---

# AI Factory Quickstart

Hub quick links: [Gen AI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/) — [Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/) — [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/)

## What you’ll build

This quickstart gets you from zero to a working Gen AI assistant that answers questions from a Knowledge Base, plus a deployed model endpoint you can call from applications.

## Prerequisites

- Prepare your deployment's GPU: [Setup GPU](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/)
- Familiarity with the Gen AI concepts and Pipelines: [Gen AI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/), [Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/)

## Step 1 — Create a Knowledge Base

Create a Knowledge Base and ingest your content so the assistant can retrieve context:

- [Create a Knowledge Base](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/create-knowledge-base/)
- (Optional) Review Knowledge Base concepts: [Knowledge Bases (explained)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/)

## Step 2 — Create an Assistant

Build a conversational assistant and attach your Knowledge Base:

- [Create an Assistant](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/create-assistant/)
- (Optional) Review assistants: [Assistants](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/assistants/)

## Step 3 — Deploy a model endpoint

Deploy a model using KServe so your applications can call it directly:

- [Deploy NIM containers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deploy-nim-container/)
- [Create an InferenceService](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/create-inferenceservice/)
- (Optional) Customize runtime: [Configure ServingRuntime](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/configure-servingruntime/)

## Step 4 — Call the endpoint from an app

Test your deployed model with a simple client and learn how to reach endpoints:

- [Quickstart (Python)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/quickstart-python-using-inference-endpoint/)
- [Access KServe endpoints](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/access-kserve-endpoints/)

## Step 5 — Monitor and iterate

Keep an eye on model health and performance:

- [Monitor InferenceService](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/monitor-inferenceservice/)
- (Optional) Tune Knowledge Base performance: [Knowledge Base performance](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/knowledge_base/performance_tuning/)

## Next steps

- Learn progressively: [Learning paths](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/learning-paths/)
- Explore patterns: [Use cases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/use-cases/) and [Solutions](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/solutions/)
- Deep dive into the APIs and reference material via the Gen AI and Model Serving hubs

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
