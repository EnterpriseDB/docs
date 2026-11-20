---
title: Frequently Asked Questions - Agent Factory on Hybrid Manager
description: Common questions about deploying, operating, and troubleshooting Agent Factory within Hybrid Manager environments
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/faq/
lastModified: 2026-08-07T14:25:48+05:30
---

# Frequently Asked Questions - Agent Factory on Hybrid Manager

## Table of Contents

- [Platform Capabilities](#platform-capabilities)
- [Installation and Setup](#installation-and-setup)
- [Model Management](#model-management)
- [Agent Studio](#agent-studio)
- [Operations and Maintenance](#operations-and-maintenance)
- [Troubleshooting](#troubleshooting)
- [Security and Compliance](#security-and-compliance)
- [Performance and Scaling](#performance-and-scaling)

## Platform Capabilities

### What types of models does Hybrid Manager support?

Hybrid Manager supports Large Language Model (LLM) deployments exclusively through NVIDIA NIM containers. Traditional machine learning models (classification, regression, time-series forecasting) are not supported in this release.

Supported NVIDIA NIM model categories:

- **Text Generation**: Large language models for chat and completion tasks
- **Text Embeddings**: Models for semantic search and RAG applications
- **Text Reranking**: Models for search result optimization
- **Multimodal Models**: Vision models including CLIP and OCR capabilities

### Can I deploy custom models?

Custom models must be packaged as NVIDIA NIM containers to be compatible with Hybrid Manager. Standard machine learning frameworks (scikit-learn, XGBoost, TensorFlow for traditional ML) are not supported. Custom LLMs can be deployed if they conform to NIM container specifications and API standards.

See [Private Registry Integration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/integrate-private-registry/) for custom NIM deployment procedures.

### What distinguishes Agent Factory from cloud AI services?

Agent Factory provides complete sovereignty over AI operations:

- Models execute within your Kubernetes infrastructure
- Data remains within organizational boundaries
- No external API dependencies for inference
- Complete audit trails for regulatory compliance

## Installation and Setup

### What are the minimum infrastructure requirements?

**Core Requirements**

- Kubernetes 1.27+ with NVIDIA GPU operator
- NVIDIA GPUs compatible with NIM containers (L40S, A100, H100)
- 100GB+ object storage for model artifacts
- Network connectivity to NVIDIA NGC registry (or air-gapped configuration)

**GPU Requirements by NIM Model Type**

- Text completion (Nemotron Super 49B): 4 x L40S GPUs
- Text embeddings: 1 x L40S GPU
- Text reranking: 1 x L40S GPU
- Vision models: 1 x L40S GPU

See [Prerequisites](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/prerequisites/) for comprehensive specifications.

### How do I configure GPU nodes for NIM models?

GPU node preparation involves:

1. Install NVIDIA GPU operator on the cluster
2. Label GPU nodes with `nvidia.com/gpu=true`
3. Apply GPU taints for dedicated scheduling
4. Verify CUDA compatibility for NIM requirements

Detailed instructions available in [GPU Setup Documentation](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/).

### Can Agent Factory operate in air-gapped environments?

Air-gapped deployments require advance preparation:

1. Mirror NVIDIA NIM images to private registry
2. Download and cache model profiles
3. Upload profiles to object storage
4. Configure Model Library for private registry access

Complete procedures documented in [Air-Gap Configuration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/prerequisites/#air-gapped-deployments).

## Model Management

### How do I deploy NVIDIA NIM models?

NIM model deployment workflow:

1. Access Model Library in HM console
2. Select NVIDIA NIM model from catalog
3. Configure resources (GPU allocation, memory, replicas)
4. Deploy InferenceService to project namespace
5. Access through generated endpoints

Step-by-step guide: [Create InferenceService](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/create-inferenceservice/).

### Which NVIDIA NIM models are available by default?

Default NIM models:

- **llama-3.3-nemotron-super-49b-v1**: Advanced reasoning and chat
- **llama-3.2-nemoretriever-300m-embed-v1**: Text embeddings
- **llama-3.2-nv-rerankqa-1b-v2**: Query-document reranking
- **nvclip**: Multimodal embeddings
- **paddleocr**: Optical character recognition

### How do I manage NIM model versions?

Version management strategies:

- Model Library maintains version tags for each NIM image
- Blue-green deployments enable zero-downtime updates
- Canary deployments allow gradual traffic shifting
- Rollback through InferenceService configuration updates

## Agent Studio

Agent Studio is the AI flow builder in Hybrid Manager, replacing the previous Griptape-based Gen AI Builder. You build AI pipelines and flows using EDB components that connect directly to your HM-managed models, knowledge bases, and Postgres clusters.

For Agent Studio-specific questions — components, Global Variables, knowledge bases, model usage, flow promotion, and common errors — see the [Agent Studio FAQ](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/langflow/faq/).

## Operations and Maintenance

### How do I monitor NIM model performance?

Monitoring encompasses:

**Metrics Collection**

- Prometheus metrics for inference latency
- GPU utilization and memory consumption
- Token generation throughput
- Request success rates

**Visualization**

- Grafana dashboards integrated in HM console
- Custom panels for model-specific metrics
- Alert configuration for SLA breaches

Reference: [Model Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/observability/).

### How should I handle NIM model updates?

Update procedure for production deployments:

1. **Validation**: Deploy new version in development namespace
2. **Testing**: Execute performance and accuracy tests
3. **Deployment**: Implement canary or blue-green strategy
4. **Monitoring**: Track metrics during transition
5. **Decision**: Complete rollout or rollback based on metrics

## Troubleshooting

### NIM model fails to start - diagnostic steps?

Common initialization failures:

1. **GPU unavailability**: Verify GPU resources match model requirements
2. **Image pull failures**: Check NGC credentials and network connectivity
3. **Profile cache missing**: Ensure profiles available in air-gapped setups
4. **Insufficient memory**: Validate memory allocation for model size

Diagnostic commands:

```bash
kubectl describe inferenceservice <name> -n <namespace>
kubectl logs <pod-name> -n <namespace>
kubectl get events -n <namespace>
```

### High inference latency - optimization strategies?

Performance optimization approaches:

- **Batch processing**: Increase batch size for throughput optimization
- **Model quantization**: Use INT8 quantization where supported
- **Response caching**: Cache frequent queries at application layer
- **Horizontal scaling**: Deploy additional replicas for load distribution

### Poor retrieval quality in RAG applications?

Check that the correct embedding model is in use, chunk sizes are appropriate for your content, and all documents have been indexed. For Agent Studio-specific guidance including AIDB knowledge base diagnostics, see [How do I improve retrieval quality in a RAG flow?](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/langflow/faq/#how-do-i-improve-retrieval-quality-in-a-rag-flow).

## Security and Compliance

### How do I implement access control?

Role-based access control for AI resources involves:

- Kubernetes RBAC for namespace and resource permissions
- Model Library access controls for deployment authorization
- API key management for external endpoint access
- Network policies for inter-service communication

### What encryption is implemented?

Encryption coverage:

- **At rest**: Kubernetes secrets encryption, database encryption
- **In transit**: TLS for API calls, mTLS within service mesh
- **Model artifacts**: Encrypted object storage
- **Knowledge bases**: Encrypted vector storage in PostgreSQL

### Which operations are audited?

Audit logging captures:

- NIM model deployment and configuration changes
- Inference requests (configurable detail level)
- Knowledge base queries and updates
- Administrative operations on AI resources

## Performance and Scaling

### How do I configure resource quotas?

Resource quotas prevent resource exhaustion at the namespace level. Configure GPU quotas, memory limits, and storage constraints based on project requirements and available infrastructure capacity.

### When should I scale horizontally versus vertically?

**Horizontal Scaling** (additional replicas):

- High concurrent request volume
- Stateless inference workloads
- Load distribution requirements

**Vertical Scaling** (increased resources per instance):

- Large model memory requirements
- Batch processing optimization
- Single-request latency minimization

### What model sizes can Hybrid Manager support?

Model size constraints:

- **Single GPU**: Models up to 13B parameters
- **Multi-GPU**: Models up to 70B+ parameters using tensor parallelism
- **Memory limits**: 80GB (A100), 48GB (L40S) per GPU

NVIDIA NIM handles model sharding and parallelism automatically based on available resources.

## Additional Resources

**Getting Started**

- [Prerequisites](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/prerequisites/)
- [Architecture Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/architecture/)

**Implementation Guides**

- [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/)
- [Agent Studio](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/langflow/)
- [Knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/) (AIDB)
- [Data pipelines](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/) (AIDB)

**Troubleshooting Resources**

- [Model Verification](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/verify-models/)

For issues not addressed here, contact EDB support or see [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/ai-factory/troubleshooting/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
