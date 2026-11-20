---
title: Model Serving Quickstart
description: Get started with Model Serving in AI Factory. This quickstart provides a guided path for new and experienced users with links to essential resources.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/getting-started/
lastModified: 2026-03-17T02:16:04Z
---

# Model Serving Quickstart

This page helps you quickly understand how to start using **Model Serving** within the AI Factory and where to find supporting documentation.

Model Serving in AI Factory enables you to deploy AI models (such as NVIDIA NIM Microservices ) as scalable, production-grade inference services. It is powered by **KServe**, a Kubernetes-native model serving engine.

## Where to start

### 1. Learn the concepts

Before deploying models, it's useful to understand how Model Serving works and how it fits into the AI Factory ecosystem:

- [Model Serving Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/model-serving-explained/)
- [Model Serving Terminology](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/terminology/)

### 2. Understand how AI Factory integrates Model Serving

Model Serving interacts with:

- **Model Library**: Browse and manage model images for deployment (coming soon)
- **Knowledge Bases (AIDB)**: Vector stores that may use embedding models served by Model Serving
- **Gen AI Builder**: Applications may call into Model Serving endpoints for inferencing

### 3. Follow the How-To Guides

If you're ready to deploy or manage models:

- [How-To Guides: Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/how-to-deploy-ai-models/)

---

## Getting started checklist

Use this checklist to guide your progress depending on your experience level.

### For new users (101 level)

- Read the [Model Serving Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/model-serving-explained/)
- Review key [Model Serving Terminology](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/terminology/)
- Understand how KServe powers Model Serving in the [AI Factory Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/)
- Understand [How Model Library relates to Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/library/) (coming soon)

[Follow Learning Path 101 for Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/101/)

---

### For existing users familiar with Kubernetes (101 level)

- Verify your Kubernetes access in your HCP project

- Review the [Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/) and [Terminology](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/terminology/)

- Prepare your cluster prerequisites:

- GPU node pools (if needed)

- NVIDIA device plugin (if needed)

- Access to your container registry for model images

- Configure basic KServe resources:

- [Deploy NVIDIA NIM Container](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deploy-nim-container/)

- [Configure ClusterServingRuntime](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/configure-servingruntime/)

- [Create InferenceService](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/create-inferenceservice/)

[Follow Learning Path 101 for Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/101/)

---

### For advanced users (201 level)

- Tune deployed InferenceService resource usage:

- [Update GPU Resources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/update-gpu-resources/)

- Monitor deployed models:

- [List deployed InferenceServices](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/monitor-inferenceservice/)

- [Monitor KServe deployments](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/monitor-inferenceservice/) (coming soon)

- Understand traffic routing, canary rollouts, and scaling:

- [Model serving scaling patterns](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/)

- Future: Advanced How-Tos

[Follow Learning Path 201 for Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/201/)

---

### For expert users (301 level)

- Manage your own custom model images
- Build and configure custom ServingRuntime definitions
- Use Transformers and Explainers in KServe (coming soon)
- Build CI/CD pipelines for deploying models in KServe
- Instrument InferenceServices for advanced observability

[Follow Learning Path 301 for Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/301/)

---

## Next steps

- [Model Serving Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/model-serving-explained/)
- [Model Serving How-To Guides](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/how-to-deploy-ai-models/)
- [Model Library (future hub)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/library/)

---

Use this quickstart as your launch point into Model Serving within AI Factory.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
