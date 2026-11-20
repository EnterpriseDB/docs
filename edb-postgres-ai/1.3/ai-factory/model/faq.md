---
title: Model Serving FAQ
description: Frequently Asked Questions about using Model Serving in AI Factory with KServe.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/faq/
lastModified: 2026-03-17T02:16:04Z
---

# Model Serving FAQ

Here are answers to common questions about using Model Serving with AI Factory.

## What models are currently supported?

AI Factory Model Serving (version 1.2) supports deploying models packaged as \*\*NVIDIA NIM Microservices \*\*

Support for deploying additional model types and formats will be expanded in future releases.

## What Kubernetes resources are used for serving models?

Models are served using [KServe InferenceServices](https://kserve.github.io/website/), which manage the lifecycle of model-serving pods.

Supporting KServe resources such as ServingRuntimes and related GPU-configured Kubernetes nodes are also used.

## What hardware is required?

NIM-based model serving requires **GPU-enabled Kubernetes nodes**.

Refer to the [GPU setup guide](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/update-gpu-resources/) for supported configurations and node recommendations by cloud provider.

## Can I deploy custom models?

At this time, AI Factory Model Serving is optimized for **NIM-based containers**. Support for deploying arbitrary models via KServe is planned, but requires manual configuration outside of the current AI Factory streamlined flow.

## How is scaling handled?

KServe InferenceServices use **Kubernetes-native scaling**, with auto-scaling supported for compatible runtimes.

Scaling behavior can be configured in the InferenceService specification (replicas, resources).

## How do I monitor running models?

You can monitor deployed models using:

- **KServe InferenceService status**
- Kubernetes monitoring tools (Prometheus, Grafana, etc.)
- [Model Serving Monitoring Guide](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/monitor-inferenceservice/)

## Where can I learn more about the model serving architecture?

See:

- [Model Serving Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/model-serving-concepts/)
- [AI Factory Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/)

---

Have more questions? Please contact your AI Factory administrator or consult [AI Factory Support Resources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
