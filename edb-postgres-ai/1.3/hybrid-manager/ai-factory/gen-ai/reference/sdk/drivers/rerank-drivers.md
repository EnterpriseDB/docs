---
title: Rerank
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/rerank-drivers/
lastModified: 2026-05-22T19:45:14+05:30
---

# Rerank

## Overview

Rerank Drivers can be used to rerank search results for a particular query. Every Rerank Driver implements the following methods that can be used directly:

- `run(query: str, artifacts: list[TextArtifact])` reranks a list of [TextArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/text_artifact/) based on the original query.

Rerank Drivers can also be used with a [RagEngine's Rerank Module](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/engines/#retrieval-stage-modules).

## Rerank Drivers

### Local

The [LocalRerankDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/local_rerank_driver/) uses a simple relatedness calculation.

#### Code

```python
from griptape.artifacts import TextArtifact
from griptape.drivers.rerank.local import LocalRerankDriver

rerank_driver = LocalRerankDriver()

artifacts = rerank_driver.run(
    "What is the capital of France?",
    [
        TextArtifact("Hotdog"),
        TextArtifact("San Francisco"),
        TextArtifact("Paris"),
        TextArtifact("Baguette"),
        TextArtifact("French Hotdog"),
    ],
)
for artifact in artifacts:
    print(artifact.value)

```

#### Logs

```text
Paris
San Francisco
Baguette
French Hotdog
Hotdog

```

### Cohere

The [CohereRerankDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/cohere_rerank_driver/) uses [Cohere's Rerank](https://cohere.com/rerank) model.

#### Code

```python
import os

from griptape.artifacts import TextArtifact
from griptape.drivers.rerank.cohere import CohereRerankDriver

rerank_driver = CohereRerankDriver(
    api_key=os.environ["COHERE_API_KEY"],
)

artifacts = rerank_driver.run(
    "Where is NYC located?",
    [
        TextArtifact("NYC Media"),
        TextArtifact("New York City Police Department"),
        TextArtifact("New York City"),
        TextArtifact("New York City Subway"),
    ],
)
for artifact in artifacts:
    print(artifact.value)

```

#### Logs

```text
New York City
NYC Media
New York City Police Department
New York City Subway

```

### Nvidia NIM

The [NvidiaNimRerankDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/nvidia_nim_rerank_driver/) uses the [Nvidia NIM Reranking API](https://docs.nvidia.com/nim/nemo-retriever/text-reranking/latest/index.html).

#### Code

```python
from griptape.artifacts import TextArtifact
from griptape.drivers.rerank.nvidia_nim import NvidiaNimRerankDriver

rerank_driver = NvidiaNimRerankDriver(
    model="nvidia/bert-base-uncased",
    base_url="http://localhost:8000",
)

artifacts = rerank_driver.run(
    "Where is NYC located?",
    [
        TextArtifact("NYC Media"),
        TextArtifact("New York City Police Department"),
        TextArtifact("New York City"),
        TextArtifact("New York City Subway"),
    ],
)
for artifact in artifacts:
    print(artifact.value)

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
