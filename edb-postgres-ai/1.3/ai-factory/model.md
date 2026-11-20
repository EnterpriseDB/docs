---
title: AI Factory Models
description: Comprehensive model management and inference deployment within EDB Postgres AI through Hybrid Manager integration. Govern, deploy, and operationalize AI models with enterprise-grade control.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/
lastModified: 2026-05-29T10:46:41-07:00
---

# AI Factory Models

**AI Factory Models** provides comprehensive lifecycle management for AI models within EDB Postgres AI environments, delivering enterprise-grade governance and scalable inference capabilities through deep integration with Hybrid Manager infrastructure.

## System Overview

AI Factory Models operates as a unified platform that bridges model governance and production deployment, ensuring organizational control over AI assets while enabling seamless integration across EDB PG AI capabilities. The system manages the complete model lifecycle from acquisition through retirement, providing consistent operational procedures and security controls.

### Core Components

**Model Library**
Centralized governance system that manages model image repositories, approval workflows, and metadata tracking. The library ensures only validated models reach production environments while maintaining comprehensive audit trails for compliance requirements.

**Model Serving Infrastructure**
KServe-based deployment engine that transforms approved models into scalable inference endpoints within Kubernetes clusters managed by Hybrid Manager. The serving layer provides enterprise-grade operational characteristics including auto-scaling, health monitoring, and resource optimization.

**Integration Framework**
Standardized interfaces that connect model inference capabilities with AI Accelerator Pipelines, Knowledge Bases, and Gen AI Builder applications, ensuring consistent model access patterns across all EDB PG AI workloads.

## Strategic Benefits

### Sovereign AI Implementation

Organizations achieve complete control over their AI infrastructure by deploying models within their own Kubernetes environments rather than relying on external API services. This approach ensures sensitive data and proprietary models remain within organizational boundaries while maintaining enterprise-grade operational capabilities.

### Operational Consistency

Standardized deployment patterns and governance frameworks eliminate the complexity of managing diverse model types and frameworks. Teams benefit from unified operational procedures regardless of the underlying model architecture or intended use case.

### Scalable Resource Management

Efficient GPU and compute resource allocation across multiple models optimizes infrastructure costs while maintaining performance guarantees. The system prevents resource underutilization through dynamic allocation strategies based on actual workload demands.

## Architecture Integration

AI Factory Models integrates deeply with Hybrid Manager to provide comprehensive model lifecycle management within existing Kubernetes infrastructure. The system leverages Hybrid Manager's cluster orchestration capabilities while extending them with AI-specific governance and deployment features.

### Hybrid Manager Dependencies

**Asset Library Integration**
Model images, metadata, and version information are managed through Hybrid Manager's Asset Library, providing centralized storage and governance capabilities that extend beyond traditional container image management.

**Kubernetes Orchestration**
Model serving workloads deploy as native Kubernetes resources through Hybrid Manager's cluster management capabilities, ensuring consistent operational behavior and resource allocation across all deployed models.

**Security Framework**
Access control, network policies, and audit logging leverage Hybrid Manager's security infrastructure while adding model-specific governance controls and compliance features.

## Operational Workflows

### Model Lifecycle Management

**Acquisition and Validation**
Models enter the system through automated synchronization from private registries or manual registration processes. Each model undergoes security scanning, performance validation, and compliance verification before approval for production use.

**Deployment and Scaling**
Approved models deploy as InferenceServices that automatically scale based on demand patterns. The system optimizes resource allocation across multiple models while maintaining isolation and performance guarantees.

**Monitoring and Maintenance**
Comprehensive observability provides visibility into model performance, resource utilization, and operational health. Automated alerting and recovery procedures minimize service disruptions while maintaining detailed audit trails.

### Governance Framework

**Approval Workflows**
Configurable approval processes ensure models meet organizational standards before production deployment. The system supports complex multi-stakeholder workflows while automating routine approvals for models meeting predefined criteria.

**Policy Enforcement**
Security policies, resource constraints, and compliance requirements are enforced automatically across all model deployments. This ensures consistent application of organizational standards without manual intervention.

**Audit and Compliance**
Detailed logging and reporting capabilities support regulatory compliance requirements while providing comprehensive visibility into model usage patterns and operational activities.

## Learning Pathways

### Foundation Understanding

Begin with core concepts to establish architectural understanding before progressing to practical implementation:

**Conceptual Framework**

1. [Model Serving Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/model-serving-concepts/) - Understanding inference deployment patterns
2. [Architecture Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/architecture/) - System design and component relationships
3. [Model Library Explained](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/model-library-explained/) - Governance and lifecycle management principles

**System Design**

1. [Deployment Strategies](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deployment/) - Production deployment patterns and considerations
2. [Observability Framework](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/observability/) - Monitoring and operational visibility

### Practical Implementation

Progress through hands-on implementation after establishing conceptual understanding:

**Initial Setup**

1. [Python Inference Quickstart](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/quickstart-python-using-inference-endpoint/) - Basic client integration
2. [GPU Resource Setup](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/) - Infrastructure preparation for model workloads
3. [ServingRuntime Configuration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/configure-servingruntime/) - Framework-specific deployment settings

**Model Deployment**

1. [InferenceService Creation](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/create-inferenceservice/) - Basic model deployment procedures
2. [NVIDIA NIM Integration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deploy-nim-container/) - Specialized deployment patterns
3. [Endpoint Access Configuration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/access-kserve-endpoints/) - Internal and external connectivity

**Advanced Operations**

1. [Private Registry Integration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/integrate-private-registry/) - Custom model source configuration
2. [Repository Rules Management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/define-repository-rules/) - Automated model discovery
3. [Infrastructure Verification](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/verify-models/) - Deployment validation and troubleshooting

### Reference Materials

**Technical References**

- [Model Serving Manual](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) - Comprehensive deployment and configuration reference
- [Model Library Manual](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/library/) - Complete governance framework documentation
- [FAQ](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/faq/) - Common issues and implementation considerations

**Integration Guides**

- [AI Accelerator Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/) - Pipeline model integration
- [Gen AI Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/) - Application development with served models
- [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/) - Embedding model integration

## Use Case Applications

### Enterprise RAG Systems

Deploy embedding models for semantic search and retrieval augmented generation workflows that require consistent model versions across development and production environments.

### Private LLM Deployment

Implement internal language model services that process sensitive data within organizational boundaries while maintaining enterprise-grade operational capabilities.

### Multi-Modal AI Applications

Integrate vision, language, and embedding models into unified applications that require coordinated inference capabilities across different model types.

### Hybrid Model Architectures

Combine private and external model services within applications that require both proprietary models for sensitive operations and external services for general capabilities.

## Implementation Considerations

### Infrastructure Requirements

Model serving requires substantial compute resources, particularly GPU infrastructure for large language models and vision workloads. Organizations should plan capacity based on anticipated model sizes and throughput requirements.

### Network Architecture

Hybrid Manager cluster connectivity affects both model deployment and runtime access patterns. Consider network latency, bandwidth requirements, and security boundaries when designing model serving architectures.

### Security Framework

Model governance extends beyond traditional container security to include AI-specific concerns such as model provenance, data privacy, and inference audit trails. Implement comprehensive security controls aligned with organizational AI governance policies.

### Operational Complexity

Managing multiple models across different frameworks requires substantial operational expertise. Establish clear procedures for deployment, monitoring, and troubleshooting before scaling to production workloads.

---

AI Factory Models provides the foundation for enterprise AI operations through comprehensive model lifecycle management and scalable inference deployment within your controlled infrastructure environments.

## Getting started

- [Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/model-serving-concepts/): Learn how Model Serving in AI Factory delivers scalable, Kubernetes-native model inferencing for intelligent applications and data products.
- [Architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/architecture/): How Model Library and Model Serving work together in AI Factory to deliver enterprise LLM inference capabilities through governed model management and scalable deployment infrastructure.
- [Deployment Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deployment/): Understand how model deployment works in AI Factory and how to deploy your models as scalable inference services.
- [Use Cases and Personas](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/use-case-and-personas/): Real-world implementation scenarios for AI Factory Models across different organizational roles and technical requirements.
- [FAQ](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/faq/): Frequently Asked Questions about using Model Serving in AI Factory with KServe.

## Manual

- [Model Serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/): Comprehensive reference for deploying and managing scalable AI model inference services within EDB Postgres AI environments.
- [Model Library](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/library/): Comprehensive reference for understanding and implementing centralized AI model governance through the EDB Postgres AI Model Library.
- [Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/observability/): Learn how to monitor and observe your Model Serving workloads in AI Factory.

## Explainers

- [Model Serving Explained In Depth](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/model-serving-explained/): Understand how Model Serving works in AI Factory, using KServe to provide scalable, production-ready model inference.
- [Model Library Explained In Depth](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/model-library-explained/): Understand the Model Library in AI Factory, how it works, and how it is powered by the Hybrid Manager Image and Model Library.

## How-to (Set Up Serving)

- [Integrate Private Registry](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/integrate-private-registry/): How to connect a private container registry to the AI Factory Model Library to enable the use of your own model images.
- [Define Repository Rules](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/define-repository-rules/): How to define and manage repository rules to control which model images appear in the Model Library.
- [Manage Metadata](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/manage-repository-metadata/): How to manage metadata for repositories and image tags in the Image and Model Library.
- [Setup GPU resources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/): How to provision and configure GPU resources to support KServe model serving.
- [Configure ServingRuntime](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/configure-servingruntime/): Learn how to configure a ClusterServingRuntime in KServe to define an AI model serving environment on Kubernetes.

## How-to (Deploy Models)

- [Deploy AI Models](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/how-to-deploy-ai-models/): Step-by-step guide to deploying AI models from the Model Library to Model Serving in Hybrid Manager.
- [Create InferenceService](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/create-inferenceservice/): How to create an InferenceService to deploy an NVIDIA NIM container with KServe on Kubernetes.
- [Deploy NIM Container](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/deploy-nim-container/): Learn how to deploy an NVIDIA NIM Microservices available on build.nvidia.com container using KServe on a Kubernetes cluster. Understand core concepts and prepare for using this capability in EDB Hybrid Manager AI Factory.

## How-to (Integrate with Your Apps)

- [Python Quickstart Tutorial - LLM Inference Example](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/quickstart-python-using-inference-endpoint/): Call your InferenceService endpoint to chat with a model.
- [Access KServe endpoints](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/access-kserve-endpoints/): How to call KServe InferenceService endpoints from inside your Kubernetes cluster and from outside via a secured portal, with examples and security considerations.

## How-to (Operate & Observe)

- [Verify deployments & GPUs](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/verify-models/): How-To Verify InferenceServices deployments and GPU resource usage.
- [Monitor model serving](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/monitor-inferenceservice/): Learn how to monitor deployed AI models using KServe, check status and resource utilization, and prepare for integration with Hybrid Manager AI Factory observability.
- [Update GPU Resources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/update-gpu-resources/): How to update GPU resource allocation for an NVIDIA NIM InferenceService deployed with KServe.
- [Use Air‑Gapped Model Cache](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/air-gapped-cache-hybrid-manager/): Build a model profile cache in a connected environment, upload it to object storage, and use it from an air‑gapped HM cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
