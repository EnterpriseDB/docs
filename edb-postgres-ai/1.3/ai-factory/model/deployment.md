---
title: Deployment Overview
description: Understand how model deployment works in AI Factory and how to deploy your models as scalable inference services.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deployment/
lastModified: 2026-03-17T02:16:04Z
---

# Deployment Overview

AI Factory makes it easy to deploy your AI models as scalable, production-ready inference services. The platform uses **KServe** as the model serving engine, operating within the Hybrid Manager (HM) Kubernetes infrastructure.

This page explains the general flow of model deployment and links to key how-to guides for hands-on instructions.

---

## Deployment flow overview

- You deploy models by creating **KServe InferenceServices** in your HM project.
- AI Factory provides **GPU-enabled Kubernetes infrastructure** to run these services.
- You can deploy supported \*\*NVIDIA NIM Microservices \*\* or other compatible models.
- The **Model Library** helps you discover and manage model images.
- Applications access model endpoints over **HTTP** or **gRPC** APIs.

---

## Deployment components

### KServe InferenceService

Each model is deployed via a Kubernetes-native `InferenceService` object:

- Manages lifecycle of the model server pods.
- Handles scaling, health checks, and routing.
- Exposes a network endpoint for model consumption.

### ClusterServingRuntime

Advanced users can also configure `ClusterServingRuntime` resources to customize runtime environments for their models.

---

## Where to start

If you're ready to deploy models, follow these guides:

- [Deploy NIM Containers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deploy-nim-container/)
- [Create InferenceService](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/create-inferenceservice/)
- [Configure ServingRuntime](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/configure-servingruntime/)
- [Monitor InferenceService](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/monitor-inferenceservice/)
- [Update GPU Resources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/update-gpu-resources/)

---

## Hybrid Manager integration

Model Serving runs on **Hybrid Manager (HM)** Kubernetes clusters. For more on Hybrid Manager and GPU setup:

- [Setting Up GPU Resources in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/)
- [Verifying Model Deployment in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/verify-models/)

---

## Best practices

- Use the Model Library to select supported models.
- Verify that your cluster has sufficient GPU resources.
- Monitor deployed models to ensure performance and availability.
- Use `ClusterServingRuntime` where advanced customization is needed.

---

## Next steps

- Explore our [Model Serving How-To Guides](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/how-to-deploy-ai-models/)
- Review supported models in the [Supported Models Index](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/supported-models/)
- Learn about [Observability for Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/observability/)

---

By following this deployment flow, you can run AI models in production with full observability and scale — directly integrated with the broader AI Factory and Hybrid Manager ecosystem.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
