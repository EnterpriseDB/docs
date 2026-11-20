---
title: Use Cases and Personas for Agent Factory on Hybrid Manager
description: Real-world Agent Factory implementations on Hybrid Manager addressing specific organizational needs and user roles.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/use-cases-and-personas/
lastModified: 2026-08-07T14:25:48+05:30
---

# Use Cases and Personas for Agent Factory on Hybrid Manager

## Overview

Agent Factory on Hybrid Manager enables diverse organizational use cases through sovereign AI infrastructure. Organizations leverage these capabilities to build intelligent applications while maintaining complete control over data and models within their Kubernetes environments.

## Key Use Cases

### Internal Knowledge Management

Organizations deploy AI assistants that provide employees with natural language access to internal documentation, policies, and institutional knowledge.

**Implementation Pattern**

Financial services firms index compliance documentation, regulatory filings, and internal procedures into knowledge bases. Employees query these systems using conversational interfaces, receiving accurate answers with source citations while maintaining data sovereignty.

**Technical Components**

- Knowledge bases indexing SharePoint, Confluence, and database content
- LLM endpoints for query understanding and response generation
- Retrieval systems with role-based filtering for access control

See [Pipeline Designer](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/pipeline-designer/getting-started/) for implementation guidance.

### Customer Service Automation

AI-powered customer support systems handle routine inquiries while escalating complex issues to human agents.

**Implementation Pattern**

E-commerce companies deploy assistants that access order systems, product catalogs, and return policies through secure APIs. These assistants resolve a significant portion of customer inquiries automatically while maintaining full audit trails for quality assurance.

**Technical Components**

- REST API tools for order management system integration
- Knowledge bases containing product documentation and FAQs

See [Agent Studio quickstart](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/quickstart/) for a working example.

### Enterprise RAG Systems

Retrieval-augmented generation applications ground LLM responses in organizational data, reducing hallucination while maintaining accuracy.

**Implementation Pattern**

Healthcare organizations implement RAG systems over clinical guidelines, research papers, and treatment protocols. Medical professionals receive evidence-based recommendations with citations to source materials, supporting clinical decision-making while ensuring traceability.

**Technical Components**

- Vector embeddings stored in PostgreSQL with pgvector
- Hybrid search combining semantic and keyword matching
- Reranking models for result optimization

See [Knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/) for detailed architecture.

### AI-Enabled APIs

Organizations expose AI capabilities through secure APIs for integration with existing applications.

**Implementation Pattern**

Software companies provide intelligent features within their products by deploying model endpoints accessible through standard REST interfaces. These APIs handle tasks like document summarization, sentiment analysis, and content generation while maintaining predictable performance characteristics.

**Technical Components**

- InferenceServices exposing OpenAI-compatible endpoints
- API gateways with authentication and rate limiting
- Load balancing across model replicas for high availability

See [Model Serving Guide](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/serving/) for deployment instructions.

## User Personas

### Platform Engineers

Platform engineers manage Agent Factory infrastructure, ensuring reliable model serving and optimal resource utilization.

**Primary Responsibilities**

- Configure GPU nodes and resource allocation
- Deploy and monitor InferenceServices
- Manage model library and registry connections
- Implement security policies and network configurations

**Key Workflows**

1. Provision GPU resources following [GPU Setup Guide](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/setup-gpu/)
2. Configure model registries per [Model Library Documentation](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/library/)
3. Monitor inference performance using [Observability Tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/observability/)

### Data Scientists

Data scientists leverage Agent Factory to deploy models and build intelligent applications without managing infrastructure complexity.

**Primary Responsibilities**

- Create and optimize knowledge bases
- Configure retrieval strategies for RAG applications
- Evaluate model performance and accuracy
- Design assistant behaviors and tool integrations

**Key Workflows**

1. Build knowledge base pipelines using [Pipeline Designer](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/pipeline-designer/getting-started/)
2. Configure retrieval in an Agent Studio flow: [EDB Knowledge Base component](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/knowledge-base/)
3. Deploy flows as services: [Flow deployment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/flow-deployment/)

### Application Developers

Developers integrate AI capabilities into business applications through APIs and SDKs.

**Primary Responsibilities**

- Integrate model endpoints into applications
- Build custom tooling for AI-powered features
- Handle error conditions and fallback strategies

**Key Workflows**

1. Access model endpoints via [KServe Integration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/access-kserve-endpoints/)
2. Call models from Python: [Python Client Guide](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/quickstart-python-using-inference-endpoint/)
3. Invoke deployed Agent Studio flows over HTTP or MCP: [Accessing deployed flows](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/flow-deployment/accessing-deployed-flows/)

### Business Analysts

Business analysts use Agent Studio's visual flow builder to create AI applications without coding expertise.

**Primary Responsibilities**

- Define flow behaviors and knowledge domains
- Configure data source connections
- Test and validate flow responses
- Monitor usage patterns and effectiveness

**Key Workflows**

1. Build flows using the Agent Studio visual editor: [Agent Studio quickstart](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/quickstart/)
2. Use pre-built templates as starting points: [Templates](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/templates/)
3. Publish and deploy flows for others to use: [Flow deployment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/flow-deployment/)

## Industry-Specific Implementations

### Financial Services

**Use Case**: Regulatory compliance assistant analyzing transaction patterns and generating required reports.

**Components**

- Knowledge base of regulatory documentation
- Tools accessing transaction databases
- Audit logging for compliance tracking

### Healthcare

**Use Case**: Clinical decision support system providing evidence-based treatment recommendations.

**Components**

- RAG over medical literature and guidelines
- Integration with electronic health records
- Strict access controls for patient data

### Manufacturing

**Use Case**: Maintenance assistant diagnosing equipment issues using sensor data and technical manuals.

**Components**

- Knowledge base of equipment documentation
- Real-time data integration from IoT sensors
- Predictive maintenance model endpoints

## Implementation Considerations

### Scalability Planning

Different use cases require varying levels of scale:

- **High-volume customer service**: Multiple model replicas with auto-scaling
- **Internal knowledge systems**: Moderate scaling with caching optimization
- **Specialized assistants**: Single instances with dedicated resources

### Security Requirements

Use cases determine security configurations:

- **Public-facing applications**: External ingress with authentication
- **Internal systems**: Cluster-local access with RBAC
- **Regulated industries**: Enhanced audit logging and encryption

### Performance Optimization

Optimize based on use case characteristics:

- **Real-time applications**: Low-latency model serving with edge caching
- **Batch processing**: Higher throughput with larger batch sizes
- **Interactive assistants**: Balanced latency and throughput

## Getting Started by Use Case

### For Knowledge Management

1. Create a knowledge base pipeline: [Pipeline Designer getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/pipeline-designer/getting-started/)
2. Query the knowledge base from a flow: [EDB Knowledge Base component](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/components/knowledge-base/)
3. Build a RAG flow end-to-end: [Agent Studio quickstart](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/quickstart/)

### For Customer Service

1. Build a conversational flow: [Agent Studio quickstart](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/quickstart/)
2. Try the Simple Migration Agent template as a reference for agentic flows: [Templates](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/templates/)
3. Deploy the flow as a callable service: [Flow deployment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/flow-deployment/)

### For API Development

1. Deploy models via [Deploy with HM UI](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/deploy-with-hm-ui/)
2. Access endpoints: [Python Client Guide](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/quickstart-python-using-inference-endpoint/)
3. Monitor performance: [Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/observability/)

## Additional Resources

**Related Documentation**

- [Hybrid Manager Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/)
- [Agent Factory architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/architecture/)
- [Agent Studio](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/langflow/)
- [Pipeline Designer](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/ai-factory/pipeline-designer/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
