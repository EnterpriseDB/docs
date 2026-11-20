---
title: Gen AI Builder
description: Comprehensive platform for building intelligent applications and retrieval-augmented generation systems using governed knowledge bases and private AI infrastructure within EDB Postgres AI.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/
lastModified: 2026-10-21T00:19:17Z
---

# Gen AI Builder

Gen AI Builder provides comprehensive tooling for developing intelligent applications that leverage organizational knowledge through [retrieval‑augmented generation](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/terminology/#retrieval-augmented-generation-rag) patterns. The platform operates within controlled infrastructure environments, ensuring complete organizational sovereignty over data, models, and inference operations.

New here? Start with [Getting started](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/getting-started/), review [Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/concepts/) and the [Architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/architecture/), then use the [How‑to guides](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/how-to/) or jump into the [Quickstart UI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/quickstart-customer-service-agent-ui/).

## Platform Architecture

Gen AI Builder integrates multiple components to deliver end-to-end AI application development capabilities within the EDB Postgres AI ecosystem. The platform emphasizes data sovereignty by maintaining all operations within organizational boundaries while providing enterprise-grade governance and auditability. Explore the [assistants](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/assistants/), [knowledge bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/), [retrievers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/retrievers/), [rulesets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/rulesets/), [structures](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/structures/), [tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/tools/), [threads](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/threads/), [data sources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-sources/), [data lake](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-lake/), and [libraries](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/libraries/) manuals.

### Core Infrastructure Integration

**Hybrid Manager Foundation**
Gen AI Builder operates within [Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/)'s Kubernetes orchestration layer, leveraging distributed computing capabilities while maintaining centralized governance. This architecture ensures consistent operational procedures across development and production environments.

**Data Estate Integration**
[Knowledge bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/) connect directly to Postgres databases and object storage systems (see [Data Lake](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-lake/)) within organizational infrastructure, eliminating external data dependencies while supporting diverse [data source](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-sources/) types.

**Model Serving Integration**
Applications access language models and embedding models through the [AI Factory Models](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/) infrastructure, ensuring consistent governance policies across all AI capabilities.

## Architectural Components

### Knowledge Base Framework

[Knowledge bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/) serve as the foundation for retrieval‑augmented generation applications by combining structured database content with unstructured document repositories. The framework provides semantic search capabilities through vector embeddings (see [Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/)) while maintaining complete data lineage.

**Data Source Integration**

- Postgres database tables with semantic indexing
- Document repositories from object storage systems
- Real-time data feeds through API integrations
- Web content through controlled scraping operations

**Embedding Management**

- Private embedding models for sensitive content processing
- Vector storage optimization within Postgres infrastructure
- Semantic similarity algorithms for retrieval accuracy
- Hybrid search combining vector and keyword approaches

### Retrieval Systems

[Retrieval](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/retrievers/) components orchestrate search operations across diverse data sources, providing unified interfaces for knowledge discovery while maintaining source attribution and access controls.

**Retrieval Strategies**

- Vector similarity search for semantic content matching
- Keyword-based search for exact term identification
- Hybrid approaches combining multiple retrieval methods
- Contextual filtering based on user permissions and data classification

### Assistant Framework

Intelligent [assistants](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/assistants/) combine knowledge retrieval with language model capabilities to provide conversational interfaces for organizational knowledge. The framework supports complex reasoning workflows while maintaining audit trails for all interactions (see [threads](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/threads/)).

**Assistant Capabilities**

- Multi-turn conversational interfaces with context preservation
- [Tool](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/tools/) integration for external system interactions
- Reasoning workflows for complex query resolution
- Audit logging for compliance and operational transparency

## Implementation Patterns

### Enterprise Knowledge Systems

Organizations implement comprehensive knowledge management systems that unify structured and unstructured information sources through semantic search capabilities.

**Typical Architecture**

1. **Data Integration Layer**: Connects multiple organizational [data sources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-sources/) including databases, document repositories, and knowledge management systems
2. **Processing Pipeline**: Transforms content into searchable formats with appropriate metadata and access control annotations
3. **Retrieval Interface**: Provides unified search across all integrated content with relevance ranking and source attribution
4. **Application Layer**: Delivers knowledge access through conversational interfaces and API integrations

**Implementation Considerations**

- Data governance policies for content classification and access control
- Performance optimization for large document collections
- Integration with existing authentication and authorization systems
- Compliance requirements for audit trails and data lineage

### Retrieval-Augmented Generation Applications

Applications combine retrieval capabilities with language model inference to provide context-aware responses based on organizational knowledge.

**Development Workflow**

1. **Knowledge Base Construction**: Establish comprehensive document indexing with semantic embeddings (see [create a Knowledge Base](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/create-knowledge-base/) and [manage a Knowledge Base](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/manage-knowledge-base/))
2. **Retrieval Configuration**: Implement search strategies optimized for application requirements
3. **Generation Integration**: Connect language models for response generation based on retrieved context
4. **Response Orchestration**: Coordinate retrieval and generation workflows with appropriate caching and optimization

**Technical Requirements**

- Low-latency retrieval for interactive applications
- Context window management for large document processing
- Response quality evaluation and improvement workflows
- Integration testing across knowledge base updates

### Conversational AI Platforms

Interactive applications provide natural language interfaces for complex organizational workflows and information discovery.

**Platform Components**

- Multi-modal input processing for text, voice, and document interactions
- Context management for extended conversational sessions
- Tool integration for external system operations
- Response personalization based on user roles and preferences

**Operational Features**

- Session management with conversation state persistence
- Performance monitoring for response quality and latency
- Usage analytics for application optimization and capacity planning
- Security controls for sensitive information handling

## Development Framework

### Knowledge Base Development

Knowledge base creation involves data source integration, content processing, and semantic indexing to support efficient retrieval operations.

**Development Process**

1. **Source Assessment**: Evaluate [data sources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-sources/) for content quality, update frequency, and access requirements
2. **Processing Pipeline Design**: Configure content transformation workflows including cleaning, chunking, and metadata extraction (see [configure Data Lake](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/configure-datalake/))
3. **Indexing Strategy**: Implement embedding generation and vector storage optimization
4. **Retrieval Testing**: Validate search quality through systematic evaluation procedures

**Quality Assurance**

- Content accuracy verification through systematic sampling
- Retrieval relevance evaluation using standard metrics
- Performance benchmarking under expected load conditions
- Security testing for access control and data isolation

### Assistant Configuration

Assistant development requires careful orchestration of retrieval, reasoning, and response generation capabilities to deliver reliable user experiences (see [create an Assistant](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/create-assistant/)).

**Configuration Areas**

- **Behavior Definition**: Establish assistant personality, capabilities, and operational boundaries
- **Knowledge Integration**: Configure retrieval strategies and knowledge source prioritization (see [retrievers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/retrievers/))
- **Tool Integration**: Connect external systems and APIs for expanded functionality (see [tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/tools/))
- **Response Optimization**: Tune generation parameters for appropriate response characteristics

**Testing Strategies**

- Conversational flow validation through systematic dialog testing
- Knowledge accuracy verification across diverse query types
- Integration testing for external tool interactions
- Load testing for concurrent user scenarios

### API Development

Applications expose functionality through standardized APIs that support diverse client applications while maintaining consistent security and operational characteristics (see [SDK reference](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/)).

**API Design Principles**

- RESTful interfaces with clear resource modeling
- Authentication and authorization integration with organizational systems
- Rate limiting and quota management for resource protection
- Comprehensive documentation and SDK support

## Integration Architecture

### EDB Postgres AI Ecosystem

Gen AI Builder integrates seamlessly with other EDB Postgres AI components to provide comprehensive AI application development capabilities.

**Component Interactions**

- **[AI Factory Models](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/)**: Governed access to language models and embedding models
- **[AI Accelerator Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/)**: Automated content processing and knowledge base updates
- **[Vector Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/vector-engine/)**: High‑performance semantic search within Postgres infrastructure
- **[Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/)**: Orchestration and resource management

### External System Integration

Applications connect with existing organizational systems through standardized interfaces while maintaining security boundaries and audit capabilities.

**Integration Patterns**

- API-based connections for real-time data access
- Batch processing for large data source synchronization
- Event-driven updates for dynamic content management
- Secure authentication delegation for user access control

## Operational Considerations

### Performance Characteristics

Gen AI Builder applications require careful performance optimization to deliver responsive user experiences while managing computational resources efficiently.

**Performance Factors**

- Knowledge base size affects retrieval latency and resource requirements
- Model complexity influences response generation time and GPU utilization
- Concurrent user load impacts system scalability and resource allocation
- Network connectivity affects distributed component communication

### Security Framework

Comprehensive security controls protect sensitive organizational knowledge while enabling appropriate access for authorized users and applications.

**Security Components**

- Multi-tenant isolation for different organizational units
- Role-based access control aligned with existing authorization systems
- Data encryption for knowledge base content and communication channels
- Audit logging for all knowledge access and assistant interactions

### Governance Integration

Built-in governance capabilities ensure applications comply with organizational policies and regulatory requirements throughout their operational lifecycle.

**Governance Features**

- Content approval workflows for knowledge base updates
- Model usage tracking and compliance reporting
- Data lineage maintenance for audit and troubleshooting
- Performance monitoring aligned with service level objectives

## Getting Started

### Prerequisites

Gen AI Builder requires foundational infrastructure components including Hybrid Manager installation and appropriate compute resources for AI workloads.

**Infrastructure Requirements**

- Kubernetes cluster with sufficient compute and storage capacity
- GPU resources for model serving and embedding generation
- Network connectivity to organizational data sources
- Integration with identity and access management systems

### Initial Implementation

Organizations should begin with focused use cases that demonstrate value while establishing operational procedures for broader deployment.

**Implementation Sequence**

1. **Pilot Knowledge Base**: Create initial knowledge base with well-defined content scope
2. **Basic Retrieval**: Implement simple search functionality with performance validation
3. **Assistant Prototype**: Develop conversational interface for pilot knowledge domain
4. **Production Deployment**: Scale successful prototypes with comprehensive operational controls

### Learning Resources

**Conceptual Foundation**

- [Getting Started Guide](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/getting-started/) - Platform overview and initial setup procedures
- [How-to Documentation](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/how-to/) - Practical implementation guidance for common scenarios

**Component Documentation**

- [Knowledge Base Management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/libraries/) - Comprehensive knowledge base development guidance
- [Assistant Development](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/assistants/) - Intelligent assistant creation and configuration
- [API Reference](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/) - Detailed technical documentation for development teams

**Advanced Topics**

- [Data Lake Integration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-lake/) - Large-scale data processing and management
- [SDK Documentation](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/) - Programmatic interfaces for custom development

---

Gen AI Builder enables organizations to develop sophisticated AI applications while maintaining complete control over data, models, and inference operations within their existing infrastructure environments.

## Getting started

- [Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/getting-started/): Explore Gen AI Builder in AI Factory — build agentic AI applications with Knowledge Bases, Tools, and advanced AI workflows.
- [Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/concepts/): Core concepts for building Gen AI applications in AI Factory — assistants, rulesets, tools, structures, threads, and the knowledge stack (knowledge bases, retrievers, data lakes).
- [Architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/architecture/): A practical manual for Gen AI architecture in AI Factory — entities, relationships, and runtime flows across assistants, knowledge, tools, threads, and model endpoints.
- [FAQ](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/faq/): Practical answers for building with Gen AI Builder in Hybrid Manager — models, knowledge bases, assistants, tools, security, performance, and operations.

## Manual

- [Assistants](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/assistants/): Assistants in Gen AI Builder (Griptape) — how they orchestrate knowledge retrieval, rules, and tools to deliver governed AI experiences, with use cases, setup, and SDK links.
- [Knowledge Bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/knowledge-bases/): Comprehensive reference for semantic search infrastructure that transforms organizational content into queryable knowledge repositories supporting retrieval-augmented generation workflows.
- [Configure Data Sources in Gen AI Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-sources/): Learn how to configure and manage Data Sources in Gen AI Builder to bring external and internal content into your Knowledge Bases.
- [Retrievers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/retrievers/): Comprehensive reference for specialized information retrieval components that enable precise knowledge base querying and semantic search capabilities within Gen AI Builder.
- [Rulesets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/rulesets/): Comprehensive reference for behavioral governance components that define assistant behavior patterns, compliance requirements, and organizational guidelines within Gen AI Builder.
- [Structures](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/structures/): Comprehensive reference for advanced AI workflow orchestration components that enable multi-step processing, external system integration, and custom business logic execution within Gen AI Builder.
- [Tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/tools/): Comprehensive reference for extensible action components that enable AI assistants to interact with external systems, perform computations, and execute custom logic within Gen AI Builder.
- [Threads](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/threads/): Comprehensive reference for conversation management components that provide persistent interaction history, state tracking, and quality assurance capabilities within Gen AI Builder.
- [Data Lake](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-lake/): Comprehensive reference for the foundational object storage infrastructure that enables content management, workflow orchestration, and artifact storage within Gen AI Builder.
- [Libraries](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/libraries/): Comprehensive reference for data management infrastructure that powers knowledge-driven AI applications through systematic organization and retrieval optimization within Gen AI Builder.
- [Gen AI Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/): Gen AI Builder provides managed services for your AI app stack. Deploy and scale end-to-end solutions, from LLM-powered data prep and retrieval to AI Agents, Pipelines, and Workflows.

## Explainers

- [Best practices for Hybrid Knowledge Bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/hybrid-kb-best-practices/): How to design Hybrid Knowledge Bases in Gen AI Builder using structured and unstructured columns effectively.

## How-to (Prepare Data & KB)

- [Gen AI How-To](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/how-to/): Practical guides for configuring and managing Gen AI features in AI Factory — including Assistants, Structures, Tools, Knowledge Bases, and more.
- [Create Knowledge Base](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/create-knowledge-base/): How to create a Knowledge Base in Gen AI Builder to organize content from your Libraries for AI applications.
- [Manage Knowledge Bases in Gen AI Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/manage-knowledge-base/): How to view, edit, refresh, and delete Knowledge Bases in Gen AI Builder.
- [Configure an Atlassian Confluence data source](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-source-confluence/): How to configure an Atlassian Confluence data source in Gen AI Builder to ingest content from Confluence spaces and pages.
- [Configure a Google Drive data source](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-source-google-drive/): How to configure a Google Drive data source in Gen AI Builder to ingest files from Google Drive folders into your Knowledge Bases.
- [Configure an Amazon S3 data source](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-source-s3/): How to configure an Amazon S3 data source in Gen AI Builder to ingest files from S3 buckets into your Knowledge Bases.
- [Configure a Web Page data source](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-source-webpage/): How to configure a Web Page data source in Gen AI Builder to ingest content from publicly accessible websites.
- [Configure a Custom data source](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-source-custom/): How to configure a Custom data source in Gen AI Builder using a PG.AI Structure to ingest data from proprietary systems.
- [Configure a Data Lake data source](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/data-source-data-lake/): How to configure a Data Lake data source in Gen AI Builder to ingest files from your platform-managed Data Lake.
- [Configure the Data Lake in Gen AI Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/configure-datalake/): How to configure the Data Lake in Gen AI Builder to support content storage and AI pipelines.
- [Create Retriever](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/create-retriever/): How to create a Retriever in Gen AI Builder to control how your Assistants retrieve information from Knowledge Bases.

## How-to (Build Assistants)

- [Create Ruleset](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/create-ruleset/): How to create a Ruleset in Gen AI Builder and define Rules to guide Assistant behavior.
- [Create Structure](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/create-structure/): How to create a Structure in Gen AI Builder by deploying an agent, pipeline, or workflow from a Zip file.
- [Create Tool](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/create-tool/): Step-by-step guide for deploying custom tools from packaged components to extend AI assistant capabilities with external system integration.
- [Create Assistant](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/create-assistant/): How to create an Assistant in Gen AI Builder and configure it to deliver AI-powered conversational experiences.

## How-to (Integrate with Your Apps)

- [Customer Service Agent Quickstart](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/quickstart-customer-service-agent-ui/): Comprehensive guide for building production-ready customer service assistants using Hybrid Manager's Agent Studio, Knowledge Bases, and Model Serving infrastructure.

## How-to (Operate & Observe)

- [View and Manage Threads](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/view-threads/): Step-by-step procedures for accessing, analyzing, and managing conversation threads to evaluate assistant performance and maintain operational oversight.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
