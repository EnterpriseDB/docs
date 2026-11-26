---
title: Data abstractions
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/
lastModified: 2025-11-07T18:06:05Z
---

# Data abstractions

## Overview

Gen AI Builder provides several abstractions for working with data.

[Artifacts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/artifacts/) are used for passing different types of data, such as text, lists, and blobs, between Gen AI Builder components.

[Embedding Drivers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/embedding-drivers/) are used to generate vector embeddings from text.

[Loaders](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/loaders/) are used to load textual data from different sources.

[Chunkers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/chunkers/) are used to split arbitrarily long text into chunks of certain token length.

**Tokenizers** are used to tokenize and detokenize text in order to track LLM token limits.

[RAG Engines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/engines/) are used for implementing modular RAG pipelines.

[Extraction Engines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/engines/extraction-engines/) are used for extracting structured content.

[Summary Engines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/engines/summary-engines/) are used for summarizing text content.

[Vector Store Drivers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/vector-store-drivers/) are used to store and query vector databases.

[Prompt Drivers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/) are used to call LLM APIs.

- [Artifacts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/artifacts/): Overview
- [Loaders](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/loaders/): Overview
- [Chunkers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/chunkers/): Overview

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
