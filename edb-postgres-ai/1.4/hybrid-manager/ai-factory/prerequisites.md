---
title: Prerequisites for Agent Factory on Hybrid Manager
description: Environment requirements, GPU planning, and registry configuration needed before deploying Agent Factory components
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/prerequisites/
lastModified: 2026-10-21T00:19:17Z
---

# Prerequisites for Agent Factory on Hybrid Manager

## Enabling Agent Factory

Before you can use Agent Factory in Hybrid Manager, you need to enable it during the installation of HM.

See [Creating other necessary secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/environment_prep/#create-component-secrets) for the Agent Factory-specific enablement steps.

## Infrastructure Requirements

### Kubernetes Cluster Foundation

Agent Factory requires a properly configured Hybrid Manager Kubernetes cluster with sufficient resources for AI workloads. The cluster must support GPU scheduling and have appropriate node groups configured for different workload types.

**Cluster Requirements**

- Kubernetes 1.27 or later with GPU device plugin support
- NVIDIA GPU operator installed for GPU node management
- Sufficient CPU and memory for orchestration components
- Network policies supporting service mesh communication

### GPU Node Configuration

GPU resources are essential for model serving operations. Node configuration must align with model requirements and expected workload characteristics.

**GPU Node Requirements**

- NVIDIA GPUs with CUDA 12.1+ support
- GPU nodes labeled with `nvidia.com/gpu=true`
- GPU taint `nvidia.com/gpu` for dedicated scheduling
- Sufficient GPU memory for target model sizes

For per-model GPU requirements and cloud node recommendations, see [GPU recommendations](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/gpu-recommended/).

## Registry Configuration

### Internet-connected deployments

For clusters with internet access, no additional image mirroring is required. Ensure your cluster has egress to `nvcr.io` so HM can pull NVIDIA NIM images during model deployment.

### Air-gapped deployments

For environments without internet access, use the hub guides to prepare images and deployment assets in advance, and configure private registry access in Hybrid Manager.

#### Model image migration

Prepare and mirror required model images to your private registry following these hub references:

- Private registries and image governance: [Model Library](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/library/)
- KServe manifests and deployment flow: [Using NVIDIA NIM in your environment](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/using-nim-in-your-environment/)

#### Model registry updates

Update default model references to point to your private registry. Work with your Model Library configuration and HM API/console paths.

#### Profile caching (NIM)

Some NVIDIA NIM models use runtime profiles that must be available locally for offline operation. Follow NVIDIA’s documentation for profile discovery and caching strategies.

- NVIDIA NIM docs: <https://docs.nvidia.com/nim/>
- Hub usage patterns: [Using NVIDIA NIM in your environment](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/using-with/using-nvidia-nim/using-nim-in-your-environment/)
- [Air-gapped cache](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/air-gapped-cache-hybrid-manager/)

## Next Steps

With prerequisites satisfied, proceed to:

1. Review [GPU recommendations](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/gpu-recommended/) to plan your node groups.
2. Deploy your first model: [Deploy with HM UI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/deploy-with-hm-ui/).
3. Build your first AI flow: [Getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/getting-started/).

For architecture context, see [Agent Factory architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/architecture/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
