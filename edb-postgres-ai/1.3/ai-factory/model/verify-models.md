---
title: How-To Verify InferenceServices and GPU usage
description: How-To Verify InferenceServices deployments and GPU resource usage.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/verify-models/
lastModified: 2026-03-17T02:16:04Z
---

# How-To Verify InferenceServices and GPU usage

> Prerequisite: Access to the Hybrid Manager UI with AI Factory enabled. See [AI Factory in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/).

Use this guide to confirm the correct deployment and operational status of InferenceServices and GPU resource usage.

## Goal

Ensure your deployed InferenceServices are correctly utilizing GPU resources.

## Estimated time

5–10 minutes.

## Steps

### Check InferenceService status

```shell
kubectl get inferenceservice -n <namespace>
```

Look for `READY` to ensure the service is running.

### Confirm GPU resource usage

```shell
kubectl describe nodes | grep nvidia.com/gpu
kubectl exec -n <namespace> -it <pod-name> -- nvidia-smi
```

### Troubleshoot common issues

```shell
kubectl get ds -n kube-system nvidia-device-plugin-daemonset
kubectl describe pods -n <namespace>
```

## Related concepts

- [Setup GPU resources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/)
- [Deploy NIM containers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deploy-nim-container/)
- [KServe concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
