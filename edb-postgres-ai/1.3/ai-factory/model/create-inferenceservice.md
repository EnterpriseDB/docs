---
title: How-To Create an InferenceService for NVIDIA NIM Container
description: How to create an InferenceService to deploy an NVIDIA NIM container with KServe on Kubernetes.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/create-inferenceservice/
lastModified: 2026-03-17T02:16:04Z
---

# How-To Create an InferenceService for NVIDIA NIM Container

> Prerequisite: Access to the Hybrid Manager UI with AI Factory enabled. See [AI Factory in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/).

This How-To explains how to deploy an NVIDIA NIM container as an InferenceService using KServe on Kubernetes.

You will define and apply an `InferenceService.yaml` manifest that references an existing ClusterServingRuntime and runs a GPU-accelerated model instance.

This is a core step to making your model available for inference through a network-accessible endpoint.

## Goal

Deploy an InferenceService for an NVIDIA NIM container using KServe.

## Estimated time

10–15 minutes.

## What you will accomplish

- Define an InferenceService manifest.
- Deploy the InferenceService to your Kubernetes cluster.
- Make the model available via a network endpoint.

## What this unlocks

Once deployed, your model can be consumed by applications (such as Gen AI Builder agents) via standard inference APIs.
It will also appear in your KServe monitoring and can be scaled or updated dynamically.

## Prerequisites

- Kubernetes cluster with KServe installed and configured.
- ClusterServingRuntime configured for your NIM container.
  See [Configure ClusterServingRuntime](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/configure-servingruntime/).
- GPU-enabled node pool provisioned and labeled appropriately.
- build.nvidia.com API key stored as Kubernetes secret, if required.
- The desired NIM container image available in your registry.

## Steps

### 1. Create InferenceService manifest

Create a file named `InferenceService.yaml` with the following content:

```yaml
apiVersion: serving.kserve.io/v1beta1
kind: InferenceService
metadata:
  annotations:
    serving.kserve.io/enable-prometheus-scraping: "true"
    prometheus.kserve.io/port: "8000"
    prometheus.kserve.io/path: "/v1/metrics"
  name: llama-3-1-8b-instruct-1xgpu-g5
  namespace: default
spec:
  predictor:
    tolerations:
      - key: nvidia.com/gpu
    operator: Exists
    effect: NoSchedule
  nodeSelector:
    nvidia.com/gpu: "true"
  imagePullSecrets:
    - name: edb-cred
  model:
    modelFormat:
      name: nvidia-nim-llama-3.1-8b-instruct
    resources:
      limits:
        nvidia.com/gpu: "1"
      requests:
        nvidia.com/gpu: "1"
    runtime: nvidia-nim-llama-3.1-8b-instruct-1.3.3
```

Key points:

- **name** → provide a unique name for your InferenceService.
- **tolerations** and **nodeSelector** → must match your GPU node pool configuration.
- **runtime** and **modelFormat** → must match the values used in your ClusterServingRuntime.
- **GPU resources** → specify the number of GPUs to allocate.

### 2. Apply the InferenceService

Run:

```shell
kubectl apply -f InferenceService.yaml
```

### 3. Verify the deployment

Check the InferenceService status:

```shell
kubectl get InferenceService -o custom-columns=NAME:.metadata.name,MODEL:.spec.predictor.model.modelFormat.name,URL:.status.address.url,RUNTIME:.spec.predictor.model.runtime,GPUs:.spec.predictor.model.resources.limits.nvidia\\.com/gpu --namespace=default
```

You should see:

- The name of your InferenceService.
- The model format being served.
- The endpoint URL.
- The ClusterServingRuntime used.
- The number of GPUs allocated.

## What’s next

Now that your model is deployed:

- Your application (or Gen AI Builder agent) can send inference requests to the provided URL.
- You can monitor model performance and resource usage.
- You can update the GPU allocation or other runtime parameters if needed.

## Related topics

- [Configure ClusterServingRuntime](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/configure-servingruntime/)
- [Deploy NVIDIA NIM container with KServe](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deploy-nim-container/)
- [AI Factory Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/)
- [AI Factory Terminology](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/terminology/)

## Next steps

- [Update GPU resources for InferenceService](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/update-gpu-resources/)
- [List deployed InferenceServices](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/monitor-inferenceservice/)
- [Monitor KServe deployments](#)

Explore more in the [AI Factory learning guide](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/learn/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
