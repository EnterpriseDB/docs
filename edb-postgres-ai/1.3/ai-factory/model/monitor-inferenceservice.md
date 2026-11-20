---
title: How-To Monitor deployed models with KServe
description: Learn how to monitor deployed AI models using KServe, check status and resource utilization, and prepare for integration with Hybrid Manager AI Factory observability.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/monitor-inferenceservice/
lastModified: 2026-03-17T02:16:04Z
---

# How-To Monitor deployed models with KServe

> Prerequisite: Access to the Hybrid Manager UI with AI Factory enabled. See [AI Factory in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/).

This guide explains how to monitor deployed AI models using KServe on Kubernetes.

Monitoring your models helps ensure reliability, performance, and optimal use of resources — whether you are working in general Kubernetes or using Hybrid Manager AI Factory.

For AI Factory users, Hybrid Manager will provide additional value-add monitoring and observability features — see [Model Serving in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/).

## Goal

Monitor deployed models, check model status and serving endpoints, and retrieve resource usage information.

## Estimated time

5–10 minutes.

## What you will accomplish

- List deployed InferenceServices (models).
- Retrieve model endpoint and runtime details.
- Understand how to observe model performance.
- Prepare to integrate model metrics into observability pipelines.

## What this unlocks

- Confidence that models are correctly deployed and serving.
- Ability to troubleshoot or scale model deployments.
- Foundation for using Hybrid Manager AI Factory observability for model serving.

## Prerequisites

- Deployed InferenceService on KServe.
- ClusterServingRuntime defined.
- kubectl configured for your Kubernetes cluster.

For background concepts, see:

- [Model Serving Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/model-serving-concepts/)
- [AI Factory Terminology](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/terminology/)

## Steps

### 1. List deployed InferenceServices

To list deployed models and see key details:

```shell
kubectl get InferenceService \
-o custom-columns=NAME:.metadata.name,MODEL:.spec.predictor.model.modelFormat.name,URL:.status.address.url,RUNTIME:.spec.predictor.model.runtime,GPUs:.spec.predictor.model.resources.limits.nvidia\\.com/gpu \
--namespace=default
```

Key columns:

- **NAME**: Name of the InferenceService.
- **MODEL**: Model format name (from ClusterServingRuntime).
- **URL**: Service endpoint for inference requests.
- **RUNTIME**: ClusterServingRuntime used.
- **GPUs**: Number of GPUs allocated.

### 2. Retrieve runtime details

To view ClusterServingRuntime details, including serving port and resource allocations:

```shell
kubectl get ClusterServingRuntimes \
-o custom-columns=NAME:.metadata.name,IMAGE:.spec.containers[0].image,PORT:.spec.containers[0].ports[0].containerPort,CPUs:.spec.containers[0].resources.limits.cpu,MEMORY:.spec.containers[0].resources.limits.memory \
--namespace=all-namespaces
```

Key columns:

- **NAME**: Name of the runtime.
- **IMAGE**: Model server image used.
- **PORT**: Inference port (commonly 8000 for NIM).
- **CPUs**: CPU resources allocated.
- **MEMORY**: Memory allocated.

### 3. Observe model metrics

If you enabled Prometheus scraping via InferenceService annotations:

- serving.kserve.io/enable-prometheus-scraping: "true"

Then Prometheus can scrape metrics at:

/v1/metrics on port 8000 of the model service.

Metrics typically include:

- **Request latency**
- **Throughput (requests per second)**
- **Error rates**
- **GPU utilization (if GPUs used)**

You can visualize these metrics in tools such as **Grafana**.

### 4. Check pod status

For debugging, you can also view model pods directly:

```shell
kubectl get pods --namespace=default
```

Look for pods with names matching:

`<inference-service-name>-predictor-*`

Check pod status and logs if needed:

```shell
kubectl logs <pod-name> --namespace=default
```

## Next steps

- [Update GPU resources for a deployed model](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/update-gpu-resources/) _(Coming soon)_
- [Deploy additional NVIDIA NIM Microservices](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deploy-nim-container/)
- [Model Serving in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) _(Coming soon)_

## Related reading

- [Model Serving Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/model-serving-concepts/)
- [AI Factory Terminology](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/terminology/)
- [Deploy an NVIDIA NIM container with KServe](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deploy-nim-container/)

---

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
