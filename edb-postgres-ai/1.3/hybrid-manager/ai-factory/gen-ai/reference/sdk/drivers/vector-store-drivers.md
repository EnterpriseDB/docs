---
title: Vector Store
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/vector-store-drivers/
lastModified: 2026-05-22T19:45:14+05:30
---

# Vector Store

## Overview

Gen AI Builder provides a way to build drivers for vector DBs where embeddings can be stored and queried. Every Vector Store Driver implements the following methods:

- `upsert()` for updating or inserting new text, [TextArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/text_artifact/)s or [ImageArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/text_artifact/)s into vector DBs. The method will automatically generate embeddings for a given value.
- `upsert_collection()` for performing an `upsert()` in parallel.
- `upsert_vector()` for updating new vectors directly.
- `query()` for querying vector DBs.

Each Vector Store Driver takes a [BaseEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/base_embedding_driver/) used to dynamically generate embeddings for strings.

> **Note: Info**
>
> When working with vector database indexes with Gen AI Builder Drivers, make sure the number of dimensions is equal to 1536. Nearly all embedding models create vectors with this number of dimensions. Check the documentation for your vector database on how to create/update vector indexes.

> **Note: Info**
>
> More Vector Store Drivers are coming soon.

## Vector Store Drivers

### Local

The [LocalVectorStoreDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/local_vector_store_driver/) can be used to load and query data from memory. Here is a complete example of how the Driver can be used to load a webpage into the Driver and query it later:

#### Code

```python
import os

from griptape.chunkers import TextChunker
from griptape.drivers.embedding.openai import OpenAiEmbeddingDriver
from griptape.drivers.vector.local import LocalVectorStoreDriver
from griptape.loaders import WebLoader

# Initialize an Embedding Driver
embedding_driver = OpenAiEmbeddingDriver(api_key=os.environ["OPENAI_API_KEY"])

vector_store_driver = LocalVectorStoreDriver(embedding_driver=embedding_driver)

# Load Artifacts from the web
artifact = WebLoader().load("https://www.griptape.ai")
chunks = TextChunker(max_tokens=100).chunk(artifact)

# Upsert Artifacts into the Vector Store Driver
vector_store_driver.upsert_collection({"griptape": chunks})

results = vector_store_driver.query(query="What is griptape?")

values = [r.to_artifact().value for r in results]

print("\n\n".join(values))

```

#### Logs

```text
Build, Deploy, and Scale End-to-End Solutions, from LLM-Powered Data Prep and Retrieval to AI Agents, Pipelines, and Workflows.
Griptape gives developers everything they need, from the open source AI framework ([Griptape AI Framework](/ai-framework)) to the execution runtime ([Griptape AI Cloud](/cloud)).

- Enforce policy for each user, structure, task, and query
🎢 Griptape AI Framework
Griptape provides clean and clear abstractions for building Gen AI Agents, Systems of Agents, Pipelines, Workflows, and RAG implementations without having to spend weeks learning Gen AI nor need to ever learn Prompt Engineering.

- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization

Build
Build ETL pipelines to prep your data for secure LLM access.
Compose
Compose retrieval patterns that give fast, accurate, detailed information.
Write
Write agents, pipelines, and workflows (i.e. structures) to integrate your business logic.
🌩️ Griptape AI Cloud

(ETL)
Connect any data source and extract. Prep/transform it (extract, clean, chunk, embed, add metadata). Load it into a vector database index.
Retrieval as a Service
(RAG)

Generate answers, summaries, and details from your own data. Use ready-made retrieval patterns, customize them to fit your use case, or compose your own from scratch (Modular RAG).
Structure Runtime
(RUN)
Build your own AI agents, pipelines, and workflows. Real-time interfaces, transactional processes, batch workloads. Plug them into client applications.

Build &
Secure
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
Deploy &
Scale

Skip the infrastructure management. We’ll host and operate everything for you, from the data processing pipeline to the retrieval-ready database to the serverless application runtime. Simple to complex, one layer of the stack or the whole enchilada, we’ve got you covered.
Automated Data Prep

```

### Gen AI Builder Knowledge Base

The [GriptapeCloudVectorStoreDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/griptape_cloud_vector_store_driver/) can be used to query data from a Gen AI Builder Knowledge Base. Loading into Knowledge Bases is not supported at this time, only querying. Here is a complete example of how the Driver can be used to query an existing Knowledge Base:

#### Code

```python
import os

from griptape.drivers.vector.griptape_cloud import GriptapeCloudVectorStoreDriver

# Initialize environment variables
gt_cloud_api_key = os.environ["GT_CLOUD_API_KEY"]
gt_cloud_knowledge_base_id = os.environ["GT_CLOUD_KB_ID"]

vector_store_driver = GriptapeCloudVectorStoreDriver(
    api_key=gt_cloud_api_key, knowledge_base_id=gt_cloud_knowledge_base_id
)

results = vector_store_driver.query(query="What is griptape?")

values = [r.to_artifact().value for r in results]

print("\n\n".join(values))

```

#### Logs

```text


```

### Pinecone

> **Note: Info**
>
> This Driver requires the `drivers-vector-pinecone` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The [PineconeVectorStoreDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/pinecone_vector_store_driver/) supports the [Pinecone vector database](https://www.pinecone.io/).

Here is an example of how the Driver can be used to load and query information in a Pinecone cluster:

#### Code

```python
import os

from griptape.chunkers import TextChunker
from griptape.drivers.embedding.openai import OpenAiEmbeddingDriver
from griptape.drivers.vector.pinecone import PineconeVectorStoreDriver
from griptape.loaders import WebLoader

NAMESPACE = "griptape"

# Initialize an Embedding Driver
embedding_driver = OpenAiEmbeddingDriver(api_key=os.environ["OPENAI_API_KEY"])

vector_store_driver = PineconeVectorStoreDriver(
    api_key=os.environ["PINECONE_API_KEY"],
    environment=os.environ["PINECONE_ENVIRONMENT"],
    index_name=os.environ["PINECONE_INDEX_NAME"],
    embedding_driver=embedding_driver,
)

# Load Artifacts from the web
artifact = WebLoader().load("https://www.griptape.ai")
chunks = TextChunker(max_tokens=100).chunk(artifact)

# Upsert Artifacts into the Vector Store Driver
vector_store_driver.upsert_collection({NAMESPACE: chunks})

results = vector_store_driver.query(query="What is griptape?", namespace=NAMESPACE)

values = [r.to_artifact().value for r in results]

print("\n\n".join(values))

```

#### Logs

```text
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Griptape gives developers everything they need, from the open source AI framework (Griptape AI Framework) to the execution runtime (Griptape AI Cloud).
🎢 Griptape

Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and scale secure AI applications with predictable output.
🛠️ AI Consulting Services

🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud

```

### Marqo

> **Note: Info**
>
> This Driver requires the `drivers-vector-marqo` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The [MarqoVectorStoreDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/marqo_vector_store_driver/) supports the Marqo vector database.

Here is an example of how the Driver can be used to load and query information in a Marqo cluster:

#### Code

```python
import os

from griptape.chunkers import TextChunker
from griptape.drivers.embedding.openai import OpenAiEmbeddingDriver
from griptape.drivers.prompt.openai import OpenAiChatPromptDriver
from griptape.drivers.vector.marqo import MarqoVectorStoreDriver
from griptape.loaders import WebLoader

# Initialize an Embedding Driver
embedding_driver = OpenAiEmbeddingDriver(api_key=os.environ["OPENAI_API_KEY"])
prompt_driver = OpenAiChatPromptDriver(model="gpt-3.5-turbo")

# Define the namespace
namespace = "griptape-ai"

# Initialize the Vector Store Driver
vector_store_driver = MarqoVectorStoreDriver(
    api_key=os.environ["MARQO_API_KEY"],
    url=os.environ["MARQO_URL"],
    index=os.environ["MARQO_INDEX_NAME"],
    embedding_driver=embedding_driver,
)

# Load Artifacts from the web
artifact = WebLoader().load("https://www.griptape.ai")
chunks = TextChunker(max_tokens=200).chunk(artifact)

# Upsert Artifacts into the Vector Store Driver
vector_store_driver.upsert_collection(
    {
        "griptape": chunks,
    }
)

results = vector_store_driver.query(query="What is griptape?")

values = [r.to_artifact().value for r in results]

print("\n\n".join(values))

```

#### Logs

```text
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization
- Enforce policy for each user, structure, task, and query
🎢 Griptape AI Framework
Griptape provides clean and clear abstractions for building Gen AI Agents, Systems of Agents, Pipelines, Workflows, and RAG implementations without having to spend weeks learning Gen AI nor need to ever learn Prompt Engineering.

- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization
- Enforce policy for each user, structure, task, and query
🎢 Griptape AI Framework
Griptape provides clean and clear abstractions for building Gen AI Agents, Systems of Agents, Pipelines, Workflows, and RAG implementations without having to spend weeks learning Gen AI nor need to ever learn Prompt Engineering.

Build, Deploy, and Scale End-to-End Solutions, from LLM-Powered Data Prep and Retrieval to AI Agents, Pipelines, and Workflows.
Griptape gives developers everything they need, from the open source AI framework ([Griptape AI Framework](/ai-framework)) to the execution runtime ([Griptape AI Cloud](/cloud)).
Build &
Secure
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
Deploy &
Scale
- Deploy and run the ETL, RAG, and structures you developed.

Build, Deploy, and Scale End-to-End Solutions, from LLM-Powered Data Prep and Retrieval to AI Agents, Pipelines, and Workflows.
Griptape gives developers everything they need, from the open source AI framework ([Griptape AI Framework](/ai-framework)) to the execution runtime ([Griptape AI Cloud](/cloud)).
Build &
Secure
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
Deploy &
Scale

Build
Build ETL pipelines to prep your data for secure LLM access.
Compose
Compose retrieval patterns that give fast, accurate, detailed information.
Write
Write agents, pipelines, and workflows (i.e. structures) to integrate your business logic.
🌩️ Griptape AI Cloud
Skip the infrastructure management. We’ll host and operate everything for you, from the data processing pipeline to the retrieval-ready database to the serverless application runtime. Simple to complex, one layer of the stack or the whole enchilada, we’ve got you covered.
Automated Data Prep

```

### Mongodb Atlas

> **Note: Info**
>
> This Driver requires the `drivers-vector-mongodb` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The [MongodbAtlasVectorStoreDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/mongodb_atlas_vector_store_driver/) provides support for storing vector data in a MongoDB Atlas database.

Here is an example of how the Driver can be used to load and query information in a MongoDb Atlas Cluster:

#### Code

```python
import os

from griptape.chunkers import TextChunker
from griptape.drivers.embedding.openai import OpenAiEmbeddingDriver
from griptape.drivers.vector.mongodb_atlas import MongoDbAtlasVectorStoreDriver
from griptape.loaders import WebLoader

# Initialize an Embedding Driver
embedding_driver = OpenAiEmbeddingDriver(api_key=os.environ["OPENAI_API_KEY"])

host = os.environ["MONGODB_HOST"]
username = os.environ["MONGODB_USERNAME"]
password = os.environ["MONGODB_PASSWORD"]
database_name = os.environ["MONGODB_DATABASE_NAME"]
collection_name = os.environ["MONGODB_COLLECTION_NAME"]
index_name = os.environ["MONGODB_INDEX_NAME"]
vector_path = os.environ["MONGODB_VECTOR_PATH"]

# Initialize the Vector Store Driver
vector_store_driver = MongoDbAtlasVectorStoreDriver(
    connection_string=f"mongodb+srv://{username}:{password}@{host}/{database_name}",
    database_name=database_name,
    collection_name=collection_name,
    embedding_driver=embedding_driver,
    index_name=index_name,
    vector_path=vector_path,
)

# Load Artifacts from the web
artifact = WebLoader().load("https://www.griptape.ai")
chunks = TextChunker(max_tokens=200).chunk(artifact)

# Upsert Artifacts into the Vector Store Driver
vector_store_driver.upsert_collection({"griptape": chunks})

results = vector_store_driver.query(query="What is griptape?")

values = [r.to_artifact().value for r in results]

print("\n\n".join(values))

```

#### Logs

```text
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Griptape gives developers everything they need, from the open source AI framework (Griptape AI Framework) to the execution runtime (Griptape AI Cloud).
🎢 Griptape
AI Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
AI Cloud
- Deploy and run the ETL, RAG, and structures you developed.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and scale secure AI applications with predictable output.
🛠️ AI Consulting Services
Design to Proof of Concept in 4 Weeks. Deliver on the promise of AI with the expertise of ex-AWS engineers, supercharged with tech-enabled services through the Griptape AI platform.
Build, deploy, and manage end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and manage retrieval-driven AI-powered applications, from the development framework to the execution runtime.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud

🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
🔍 Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization
- Enforce policy for each user, structure, task, and query

```

The format for creating a vector index should look similar to the following:

```json
{
  "fields": [
    {
      "numDimensions": 1536,
      "path": "<path_to_vector>",
      "similarity": "euclidean",
      "type": "vector"
    },
    {
      "path": "namespace",
      "type": "filter"
    }
  ]
}
```

Replace `path_to_vector` with the expected field name where the vector content will be.

### Azure MongoDB

> **Note: Info**
>
> This Driver requires the `drivers-vector-mongodb` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The [AzureMongoDbVectorStoreDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/azure_mongodb_vector_store_driver/) provides support for storing vector data in an Azure CosmosDb database account using the MongoDb vCore API

Here is an example of how the Driver can be used to load and query information in an Azure CosmosDb MongoDb vCore database. It is very similar to the Driver for [MongoDb Atlas](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/vector-store-drivers/#mongodb-atlas):

#### Code

```python
import os

from griptape.chunkers import TextChunker
from griptape.drivers.embedding.openai import OpenAiEmbeddingDriver
from griptape.drivers.vector.azure_mongodb import AzureMongoDbVectorStoreDriver
from griptape.loaders import WebLoader

# Initialize an Embedding Driver
embedding_driver = OpenAiEmbeddingDriver(api_key=os.environ["OPENAI_API_KEY"])

azure_host = os.environ["AZURE_MONGODB_HOST"]
username = os.environ["AZURE_MONGODB_USERNAME"]
password = os.environ["AZURE_MONGODB_PASSWORD"]
database_name = os.environ["AZURE_MONGODB_DATABASE_NAME"]
collection_name = os.environ["AZURE_MONGODB_COLLECTION_NAME"]
index_name = os.environ["AZURE_MONGODB_INDEX_NAME"]
vector_path = os.environ["AZURE_MONGODB_VECTOR_PATH"]

# Initialize the Vector Store Driver
vector_store_driver = AzureMongoDbVectorStoreDriver(
    connection_string=f"mongodb+srv://{username}:{password}@{azure_host}/{database_name}?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000",
    database_name=database_name,
    collection_name=collection_name,
    embedding_driver=embedding_driver,
    index_name=index_name,
    vector_path=vector_path,
)

# Load Artifacts from the web
artifact = WebLoader().load("https://www.griptape.ai")
chunks = TextChunker(max_tokens=200).chunk(artifact)

# Upsert Artifacts into the Vector Store Driver
vector_store_driver.upsert_collection(
    {
        "griptape": chunks,
    }
)

results = vector_store_driver.query(query="What is griptape?")

values = [r.to_artifact().value for r in results]

print("\n\n".join(values))

```

#### Logs

```text
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Griptape gives developers everything they need, from the open source AI framework (Griptape AI Framework) to the execution runtime (Griptape AI Cloud).
🎢 Griptape
AI Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
AI Cloud
- Deploy and run the ETL, RAG, and structures you developed.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and scale secure AI applications with predictable output.
🛠️ AI Consulting Services
Design to Proof of Concept in 4 Weeks. Deliver on the promise of AI with the expertise of ex-AWS engineers, supercharged with tech-enabled services through the Griptape AI platform.
Build, deploy, and manage end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and manage retrieval-driven AI-powered applications, from the development framework to the execution runtime.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud

🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
🔍 Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization
- Enforce policy for each user, structure, task, and query

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Turn any developer into an AI developer.
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
🛠️ Solutions & Applications
- Have a custom project you need done?
- Need a turnkey SaaS offering for your nontech business?
- Looking for a finished app, or want to offer your apps to customers?

Build, deploy and scale end-to-end solutions, from LLM-powered data prep and retrieval to AI Agents, Pipelines, and Workflows.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-Prompt™ gives you better security, performance, and lower costs.
-
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-
🛠️ Solutions & Applications
Have a custom project you need done?
-
Need a turnkey SaaS offering for your nontech business?
-
Looking for a finished app, or want to offer your apps to customers?
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-Prompt™ gives you better security, performance, and lower costs.
-
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-
🛠️ Solutions & Applications
Have a custom project you need done?
-
Need a turnkey SaaS offering for your nontech business?
-
Looking for a finished app, or want to offer your apps to customers?
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-Prompt™ gives you better security, performance, and lower costs.
-
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-
🛠️ Solutions & Applications
Have a custom project you need done?
-
Need a turnkey SaaS offering for your nontech business?
-
Looking for a finished app, or want to offer your apps to customers?
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-Prompt™ gives you better security, performance, and lower costs.
-
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-
🛠️ Solutions & Applications
Have a custom project you need done?
-
Need a turnkey SaaS offering for your nontech business?
-
Looking for a finished app, or want to offer your apps to customers?
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-Prompt™ gives you better security, performance, and lower costs.
-
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-
🛠️ Solutions & Applications
Have a custom project you need done?
-
Need a turnkey SaaS offering for your nontech business?
-
Looking for a finished app, or want to offer your apps to customers?
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-prompt gives you better security, performance, and lower costs.
-
GitHub
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-

```

### Redis

> **Note: Info**
>
> This Driver requires the `drivers-vector-redis` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The [RedisVectorStoreDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/redis_vector_store_driver/) integrates with the Redis vector storage system.

Here is an example of how the Driver can be used to load and query information in a Redis Cluster:

#### Code

```python
import os

from griptape.chunkers import TextChunker
from griptape.drivers.embedding.openai import OpenAiEmbeddingDriver
from griptape.drivers.vector.redis import RedisVectorStoreDriver
from griptape.loaders import WebLoader

# Initialize an Embedding Driver
embedding_driver = OpenAiEmbeddingDriver(api_key=os.environ["OPENAI_API_KEY"])

vector_store_driver = RedisVectorStoreDriver(
    host=os.environ["REDIS_HOST"],
    port=int(os.environ["REDIS_PORT"]),
    username=os.environ["REDIS_USERNAME"],
    password=os.environ["REDIS_PASSWORD"],
    index=os.environ["REDIS_INDEX"],
    embedding_driver=embedding_driver,
)

# Load Artifacts from the web
artifact = WebLoader().load("https://www.griptape.ai")
chunks = TextChunker(max_tokens=200).chunk(artifact)

# Upsert Artifacts into the Vector Store Driver
vector_store_driver.upsert_collection(
    {
        "griptape": chunks,
    }
)

results = vector_store_driver.query(query="What is griptape?")

values = [r.to_artifact().value for r in results]

print("\n\n".join(values))

```

#### Logs

```text
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Griptape gives developers everything they need, from the open source AI framework (Griptape AI Framework) to the execution runtime (Griptape AI Cloud).
🎢 Griptape
AI Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
AI Cloud
- Deploy and run the ETL, RAG, and structures you developed.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and scale secure AI applications with predictable output.
🛠️ AI Consulting Services
Design to Proof of Concept in 4 Weeks. Deliver on the promise of AI with the expertise of ex-AWS engineers, supercharged with tech-enabled services through the Griptape AI platform.
Build, deploy, and manage end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and manage retrieval-driven AI-powered applications, from the development framework to the execution runtime.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud

🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
🔍 Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization
- Enforce policy for each user, structure, task, and query

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Turn any developer into an AI developer.
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
🛠️ Solutions & Applications
- Have a custom project you need done?
- Need a turnkey SaaS offering for your nontech business?
- Looking for a finished app, or want to offer your apps to customers?

Build, deploy and scale end-to-end solutions, from LLM-powered data prep and retrieval to AI Agents, Pipelines, and Workflows.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-Prompt™ gives you better security, performance, and lower costs.
-
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-
🛠️ Solutions & Applications
Have a custom project you need done?
-
Need a turnkey SaaS offering for your nontech business?
-
Looking for a finished app, or want to offer your apps to customers?
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-Prompt™ gives you better security, performance, and lower costs.
-
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-
🛠️ Solutions & Applications
Have a custom project you need done?
-
Need a turnkey SaaS offering for your nontech business?
-
Looking for a finished app, or want to offer your apps to customers?
-

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
Turn any developer into an AI developer.
-
Build your business logic using predictable, programmable python - don’t gamble on prompting.
-
Off-Prompt™ gives you better security, performance, and lower costs.
-
🌩️ Griptape
Cloud
Deploy and run the ETL, RAG, and structures you developed.
-
Simple API abstractions.
-
Skip the infrastructure management.
-
Scale seamlessly so you can grow with your workload requirements.
-
🛠️ Solutions & Applications
Have a custom project you need done?
-
Need a turnkey SaaS offering for your nontech business?
-
Looking for a finished app, or want to offer your apps to customers?
-

```

The format for creating a vector index should be similar to the following:

```
FT.CREATE idx:griptape ON hash PREFIX 1 "griptape:" SCHEMA namespace TAG vector VECTOR FLAT 6 TYPE FLOAT32 DIM 1536 DISTANCE_METRIC COSINE
```

### OpenSearch

> **Note: Info**
>
> This Driver requires the `drivers-vector-opensearch` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The [OpenSearchVectorStoreDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/opensearch_vector_store_driver/) integrates with the OpenSearch platform, allowing for storage, retrieval, and querying of vector data.

Here is an example of how the Driver can be used to load and query information in an OpenSearch Cluster:

#### Code

```python
import os

import boto3

from griptape.chunkers import TextChunker
from griptape.drivers.embedding.openai import OpenAiEmbeddingDriver
from griptape.drivers.vector.amazon_opensearch import AmazonOpenSearchVectorStoreDriver
from griptape.loaders import WebLoader

# Initialize an Embedding Driver
embedding_driver = OpenAiEmbeddingDriver(api_key=os.environ["OPENAI_API_KEY"])

vector_store_driver = AmazonOpenSearchVectorStoreDriver(
    host=os.environ["AMAZON_OPENSEARCH_HOST"],
    index_name=os.environ["AMAZON_OPENSEARCH_INDEX_NAME"],
    session=boto3.Session(),
    embedding_driver=embedding_driver,
)

# Load Artifacts from the web
artifact = WebLoader().load("https://www.griptape.ai")
chunks = TextChunker(max_tokens=200).chunk(artifact)

# Upsert Artifacts into the Vector Store Driver
vector_store_driver.upsert_collection(
    {
        "griptape": chunks,
    }
)

results = vector_store_driver.query(query="What is griptape?")

values = [r.to_artifact().value for r in results]

print("\n\n".join(values))

```

#### Logs

```text
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Griptape gives developers everything they need, from the open source AI framework (Griptape AI Framework) to the execution runtime (Griptape AI Cloud).
🎢 Griptape
AI Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
AI Cloud
- Deploy and run the ETL, RAG, and structures you developed.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and scale secure AI applications with predictable output.
🛠️ AI Consulting Services
Design to Proof of Concept in 4 Weeks. Deliver on the promise of AI with the expertise of ex-AWS engineers, supercharged with tech-enabled services through the Griptape AI platform.
Build, deploy, and manage end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and manage retrieval-driven AI-powered applications, from the development framework to the execution runtime.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud

🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
🔍 Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization
- Enforce policy for each user, structure, task, and query

```

The body mappings for creating a vector index should look similar to the following:

```json
{
    "mappings": {
        "properties": {
            "vector": {"type": "knn_vector", "dimension": 1536},
            "namespace": {"type": "keyword"},
            "metadata": {"type": "object", "enabled": true}
        }
    }
}
```

### PGVector

> **Note: Info**
>
> This Driver requires the `drivers-vector-pgvector` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The [PGVectorVectorStoreDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/pgvector_vector_store_driver/) integrates with PGVector, a vector storage and search extension for Postgres. While Gen AI Builder will handle enabling the extension, PGVector must be installed and ready for use in your Postgres instance before using this Vector Store Driver.

Here is an example of how the Driver can be used to load and query information in a Postgres database:

#### Code

```python
import os

from griptape.chunkers import TextChunker
from griptape.drivers.embedding.openai import OpenAiEmbeddingDriver
from griptape.drivers.vector.pgvector import PgVectorVectorStoreDriver
from griptape.loaders import WebLoader

# Initialize an Embedding Driver.
embedding_driver = OpenAiEmbeddingDriver(api_key=os.environ["OPENAI_API_KEY"])

db_user = os.environ["POSTGRES_USER"]
db_pass = os.environ["POSTGRES_PASSWORD"]
db_host = os.environ["POSTGRES_HOST"]
db_port = os.environ["POSTGRES_PORT"]
db_name = os.environ["POSTGRES_DB"]
db_connection_string = f"postgresql://{db_user}:{db_pass}@{db_host}:{db_port}/{db_name}"
vector_store_driver = PgVectorVectorStoreDriver(
    connection_string=db_connection_string,
    embedding_driver=embedding_driver,
    table_name="griptape_vectors",
)

# Install required Postgres extensions and create database schema.
vector_store_driver.setup()

# Load Artifacts from the web
artifact = WebLoader().load("https://www.griptape.ai")
chunks = TextChunker().chunk(artifact)

# Upsert Artifacts into the Vector Store Driver
vector_store_driver.upsert_collection(
    {
        "griptape": chunks,
    }
)

results = vector_store_driver.query(query="What is griptape?")

values = [r.to_artifact().value for r in results]

print("\n\n".join(values))

```

#### Logs

```text
Build, Deploy, and Scale End-to-End Solutions, from LLM-Powered Data Prep and Retrieval to AI Agents, Pipelines, and Workflows.
Griptape gives developers everything they need, from the open source AI framework ([Griptape AI Framework](/ai-framework)) to the execution runtime ([Griptape AI Cloud](/cloud)).
Build &
Secure
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
Deploy &
Scale
- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization
- Enforce policy for each user, structure, task, and query
🎢 Griptape AI Framework
Griptape provides clean and clear abstractions for building Gen AI Agents, Systems of Agents, Pipelines, Workflows, and RAG implementations without having to spend weeks learning Gen AI nor need to ever learn Prompt Engineering.
Build
Build ETL pipelines to prep your data for secure LLM access.
Compose
Compose retrieval patterns that give fast, accurate, detailed information.
Write
Write agents, pipelines, and workflows (i.e. structures) to integrate your business logic.
🌩️ Griptape AI Cloud
Skip the infrastructure management. We’ll host and operate everything for you, from the data processing pipeline to the retrieval-ready database to the serverless application runtime. Simple to complex, one layer of the stack or the whole enchilada, we’ve got you covered.
Automated Data Prep
(ETL)
Connect any data source and extract. Prep/transform it (extract, clean, chunk, embed, add metadata). Load it into a vector database index.
Retrieval as a Service
(RAG)
Generate answers, summaries, and details from your own data. Use ready-made retrieval patterns, customize them to fit your use case, or compose your own from scratch (Modular RAG).
Structure Runtime
(RUN)
Build your own AI agents, pipelines, and workflows. Real-time interfaces, transactional processes, batch workloads. Plug them into client applications.

```

### Qdrant

> **Note: Info**
>
> This Driver requires the `drivers-vector-qdrant` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The QdrantVectorStoreDriver supports the [Qdrant vector database](https://qdrant.tech/).

Here is an example of how the Driver can be used to query information in a Qdrant collection:

#### Code

```python
import os

from qdrant_client.http.models import Distance, VectorParams

from griptape.chunkers import TextChunker
from griptape.drivers.embedding.openai import OpenAiEmbeddingDriver
from griptape.drivers.vector.qdrant import QdrantVectorStoreDriver
from griptape.loaders import WebLoader

# Set up environment variables
host = os.environ["QDRANT_CLUSTER_ENDPOINT"]
api_key = os.environ["QDRANT_CLUSTER_API_KEY"]

# Initialize an Embedding Driver.
embedding_driver = OpenAiEmbeddingDriver(api_key=os.environ["OPENAI_API_KEY"])

vector_store_driver = QdrantVectorStoreDriver(
    url=host,
    collection_name="griptape",
    content_payload_key="content",
    embedding_driver=embedding_driver,
    api_key=api_key,
)

# Load Artifacts from the web
artifact = WebLoader().load("https://www.griptape.ai")
chunks = TextChunker(max_tokens=100).chunk(artifact)

# Recreate Qdrant collection
vector_store_driver.client.recreate_collection(
    collection_name=vector_store_driver.collection_name,
    vectors_config=VectorParams(size=1536, distance=Distance.COSINE),
)

# Upsert Artifacts into the Vector Store Driver
vector_store_driver.upsert_collection({"griptape": chunks})

results = vector_store_driver.query(query="What is griptape?")

values = [r.to_artifact().value for r in results]

print("\n\n".join(values))

```

#### Logs

```text
Build, Deploy, and Scale End-to-End Solutions, from LLM-Powered Data Prep and Retrieval to AI Agents, Pipelines, and Workflows.
Griptape gives developers everything they need, from the open source AI framework ([Griptape AI Framework](/ai-framework)) to the execution runtime ([Griptape AI Cloud](/cloud)).

- Enforce policy for each user, structure, task, and query
🎢 Griptape AI Framework
Griptape provides clean and clear abstractions for building Gen AI Agents, Systems of Agents, Pipelines, Workflows, and RAG implementations without having to spend weeks learning Gen AI nor need to ever learn Prompt Engineering.

- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization

Build
Build ETL pipelines to prep your data for secure LLM access.
Compose
Compose retrieval patterns that give fast, accurate, detailed information.
Write
Write agents, pipelines, and workflows (i.e. structures) to integrate your business logic.
🌩️ Griptape AI Cloud

(ETL)
Connect any data source and extract. Prep/transform it (extract, clean, chunk, embed, add metadata). Load it into a vector database index.
Retrieval as a Service
(RAG)

Generate answers, summaries, and details from your own data. Use ready-made retrieval patterns, customize them to fit your use case, or compose your own from scratch (Modular RAG).
Structure Runtime
(RUN)
Build your own AI agents, pipelines, and workflows. Real-time interfaces, transactional processes, batch workloads. Plug them into client applications.

Build &
Secure
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
Deploy &
Scale

Skip the infrastructure management. We’ll host and operate everything for you, from the data processing pipeline to the retrieval-ready database to the serverless application runtime. Simple to complex, one layer of the stack or the whole enchilada, we’ve got you covered.
Automated Data Prep

```

### Astra DB

> **Note: Info**
>
> This Driver requires the `drivers-vector-astra-db` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The AstraDbVectorStoreDriver supports [DataStax Astra DB](https://www.datastax.com/products/datastax-astra).

The following example shows how to store vector entries and query the information using the driver:

#### Code

```python
import os

from griptape.chunkers import TextChunker
from griptape.drivers.embedding.openai import OpenAiEmbeddingDriver
from griptape.drivers.vector.astradb import AstraDbVectorStoreDriver
from griptape.loaders import WebLoader

# Astra DB secrets and connection parameters
api_endpoint = os.environ["ASTRA_DB_API_ENDPOINT"]
token = os.environ["ASTRA_DB_APPLICATION_TOKEN"]
astra_db_namespace = os.environ.get("ASTRA_DB_KEYSPACE")  # optional

# Initialize an Embedding Driver.
embedding_driver = OpenAiEmbeddingDriver(api_key=os.environ["OPENAI_API_KEY"])

vector_store_driver = AstraDbVectorStoreDriver(
    embedding_driver=embedding_driver,
    api_endpoint=api_endpoint,
    token=token,
    collection_name="griptape_test_collection",
    astra_db_namespace=astra_db_namespace,  # optional
)

# Load Artifacts from the web
artifact = WebLoader().load("https://www.griptape.ai")
chunks = TextChunker().chunk(artifact)

# Upsert Artifacts into the Vector Store Driver
vector_store_driver.upsert_collection({"griptape": chunks})

results = vector_store_driver.query(query="What is griptape?")

values = [r.to_artifact().value for r in results]

print("\n\n".join(values))

```

#### Logs

```text
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Griptape gives developers everything they need, from the open source AI framework (Griptape AI Framework) to the execution runtime (Griptape AI Cloud).
🎢 Griptape
AI Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
AI Cloud
- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
🔍 Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization
- Enforce policy for each user, structure, task, and query
🎢 Griptape AI Framework
Griptape provides clean and clear abstractions for building Gen AI Agents, Systems of Agents, Pipelines, Workflows, and RAG implementations without having to spend weeks learning Gen AI nor need to ever learn Prompt Engineering.
Build
Build ETL pipelines to prep your data for secure LLM access.
Compose
Compose retrieval patterns that give fast, accurate, detailed information.
Write
Write agents, pipelines, and workflows (i.e. structures) to integrate your business logic.
🌩️ Griptape AI Cloud
Skip the infrastructure management. We’ll host and operate everything for you, from the data processing pipeline to the retrieval-ready database to the serverless application runtime. Simple to complex, one layer of the stack or the whole enchilada, we’ve got you covered.
Automated Data Prep
(ETL)
Connect any data source and extract. Prep/transform it (extract, clean, chunk, embed, add metadata). Load it into a vector database index.
Retrieval as a Service
(RAG)
Generate answers, summaries, and details from your own data. Use ready-made retrieval patterns, customize them to fit your use case, or compose your own from scratch (Modular RAG).
Structure Runtime
(RUN)
Build your own AI agents, pipelines, and workflows. Real-time interfaces, transactional processes, batch workloads. Plug them into client applications.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and scale secure AI applications with predictable output.
🛠️ AI Consulting Services
Design to Proof of Concept in 4 Weeks. Deliver on the promise of AI with the expertise of ex-AWS engineers, supercharged with tech-enabled services through the Griptape AI platform.
Build, deploy, and manage end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and manage retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
🔍 Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization
- Enforce policy for each user, structure, task, and query
🎢 Griptape Framework
Griptape provides clean and clear abstractions for building Gen AI Agents, Systems of Agents, Pipelines, Workflows, and RAG implementations without having to spend weeks learning Gen AI nor need to ever learn Prompt Engineering.
Build
Build ETL pipelines to prep your data for secure LLM access.
Compose
Compose retrieval patterns that give fast, accurate, detailed information.
Write
Write agents, pipelines, and workflows (i.e. structures) to integrate your business logic.
🌩️ Griptape Cloud
Skip the infrastructure management. We’ll host and operate everything for you, from the data processing pipeline to the retrieval-ready database to the serverless application runtime. Simple to complex, one layer of the stack or the whole enchilada, we’ve got you covered.
Automated Data Prep
(ETL)
Connect any data source and extract. Prep/transform it (extract, clean, chunk, embed, add metadata). Load it into a vector database index.
Retrieval as a Service
(RAG)
Generate answers, summaries, and details from your own data. Use ready-made retrieval patterns, customize them to fit your use case, or compose your own from scratch (Modular RAG).
Structure Runtime
(RUN)
Build your own AI agents, pipelines, and workflows. Real-time interfaces, transactional processes, batch workloads. Plug them into client applications.

Griptape enables developers to build and deploy AI applications 5x faster with more reliable output.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
🔍 Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization
- Enforce policy for each user, structure, task, and query
🛠️ AI Consulting Services
Design to Proof of Concept in 4 Weeks. Deliver on the promise of AI with the expertise of ex-AWS engineers, supercharged with tech-enabled services through the Griptape AI platform.
🎢 Griptape Framework
Griptape provides clean and clear abstractions for building Gen AI Agents, Systems of Agents, Pipelines, Workflows, and RAG implementations without having to spend weeks learning Gen AI nor need to ever learn Prompt Engineering.
Build
Build ETL pipelines to prep your data for secure LLM access.
Compose
Compose retrieval patterns that give fast, accurate, detailed information.
Write
Write agents, pipelines, and workflows (i.e. structures) to integrate your business logic.
🌩️ Griptape Cloud
Skip the infrastructure management. We’ll host and operate everything for you, from the data processing pipeline to the retrieval-ready database to the serverless application runtime. Simple to complex, one layer of the stack or the whole enchilada, we’ve got you covered.
Automated Data Prep
(ETL)
Connect any data source and extract. Prep/transform it (extract, clean, chunk, embed, add metadata). Load it into a vector database index.
Retrieval as a Service
(RAG)
Generate answers, summaries, and details from your own data. Use ready-made retrieval patterns, customize them to fit your use case, or compose your own from scratch (Modular RAG).
Structure Runtime
(RUN)
Build your own AI agents, pipelines, and workflows. Real-time interfaces, transactional processes, batch workloads. Plug them into client applications.

Build, deploy and scale end-to-end solutions, from LLM-powered data prep and retrieval to AI Agents, Pipelines, and Workflows.
Griptape is an end-to-end AI application stack that enables teams of developers to efficiently build, deploy and manage secure AI applications with predictable output.
Everything you need.
Griptape gives developers everything they need, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Turn any developer into an AI developer.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
🔍 Manage &
Monitor
- Monitor directly in Griptape Cloud or integrate with any third-party service.
- Measure performance, reliability, and spending across the organization
- Enforce policy for each user, structure, task, and query
🎢 Griptape Framework
Griptape provides clean and clear abstractions for building Gen AI Agents, Systems of Agents, Pipelines, Workflows, and RAG implementations without having to spend weeks learning Gen AI nor need to ever learn Prompt Engineering.
Build
Build ETL pipelines to prep your data for secure LLM access.
Compose
Compose retrieval patterns that give fast, accurate, detailed information.
Write
Write agents, pipelines, and workflows (i.e. structures) to integrate your business logic.
🌩️ Griptape Cloud
Skip the infrastructure management. We’ll host and operate everything for you, from the data processing pipeline to the retrieval-ready database to the serverless application runtime. Simple to complex, one layer of the stack or the whole enchilada, we’ve got you covered.
Automated Data Prep
(ETL)
Connect any data source and extract. Prep/transform it (extract, clean, chunk, embed, add metadata). Load it into a vector database index.
Retrieval as a Service
(RAG)
Generate answers, summaries, and details from your own data. Use ready-made retrieval patterns, customize them to fit your use case, or compose your own from scratch (Modular RAG).
Structure Runtime
(RUN)
Build your own AI agents, pipelines, and workflows. Real-time interfaces, transactional processes, batch workloads. Plug them into client applications.

Build, deploy, and scale end-to-end AI applications in the cloud.
Griptape gives developers everything they need to build, deploy, and scale retrieval-driven AI-powered applications, from the development framework to the execution runtime.
🎢 Griptape
Framework
- Turn any developer into an AI developer.
- Build your business logic using predictable, programmable python - don’t gamble on prompting.
- Off-Prompt™ gives you better security, performance, and lower costs.
🌩️ Griptape
Cloud
- Deploy and run the ETL, RAG, and structures you developed.
- Simple API abstractions.
- Skip the infrastructure management.
- Scale seamlessly so you can grow with your workload requirements.
🛠️ Solutions & Applications
- Have a custom project you need done?
- Need a turnkey SaaS offering for your nontech business?
- Looking for a finished app, or want to offer your apps to customers?
🎢 Griptape Framework
Griptape provides clean and clear abstractions for building Gen AI Agents, Systems of Agents, Pipelines, Workflows, and RAG implementations without having to spend weeks learning Gen AI nor need to ever learn Prompt Engineering.
Build
Build ETL pipelines to prep your data for secure LLM access.
Compose
Compose retrieval patterns that give fast, accurate, detailed information.
Write
Write agents, pipelines, and workflows (i.e. structures) to integrate your business logic.
🌩️ Griptape Cloud
Skip the infrastructure management. We’ll host and operate everything for you, from the data processing pipeline to the retrieval-ready database to the serverless application runtime. Simple to complex, one layer of the stack or the whole enchilada, we’ve got you covered.
Automated Data Prep
(ETL)
Connect any data source and extract. Prep/transform it (extract, clean, chunk, embed, add metadata). Load it into a vector database index.
Retrieval as a Service
(RAG)
Generate answers, summaries, and details from your own data. Use ready-made retrieval patterns, customize them to fit your use case, or compose your own from scratch (Modular RAG).
Structure Runtime
(RUN)
Build your own AI agents, pipelines, and workflows. Real-time interfaces, transactional processes, batch workloads. Plug them into client applications.

```

### PG.AI

> **Note: Info**
>
> This Driver requires the `drivers-vector-pgai` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The PgAiKnowledgeBaseVectorStoreDriver integrates with PG.AI, a managed postgres platform from [EnterpriseDB](https://www.enterprisedb.com/).

Here is an example of how the Driver can be used to load and query information in a PG.AI Knowledge Base:

#### Code

```python
import os

from griptape.drivers.vector.pgai import PgAiKnowledgeBaseVectorStoreDriver

# PG.AI connection parameters
connection_string = os.environ["PGAI_CONNECTION_STRING"]
knowledge_base_name = os.environ["PGAI_KNOWLEDGE_BASE_NAME"]

vector_store_driver = PgAiKnowledgeBaseVectorStoreDriver(
    connection_string=connection_string,
    knowledge_base_name=knowledge_base_name,  # optional
)

results = vector_store_driver.query(query="What is griptape?")

values = [r.to_artifact().value for r in results]

print("\n\n".join(values))

```

#### Logs

```text
--8<-- "docs/griptape-framework/drivers/logs/vector_store_drivers_12.txt"
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
