---
title: Chunkers
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/chunkers/
lastModified: 2026-05-22T19:45:14+05:30
---

# Chunkers

## Overview

Chunkers are used to split arbitrarily long text into chunks of certain token length.
Each chunker has a tokenizer, a max token count, and a list of default separators used to split up text into [TextArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/text_artifact/)s.
Different types of chunkers provide lists of separators for specific text shapes:

- [TextChunker](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/chunkers/text_chunker/): works on most texts.
- [PdfChunker](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/chunkers/pdf_chunker/): works on text from PDF docs.
- [MarkdownChunker](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/chunkers/markdown_chunker/) works on markdown text.

Here is how to use a chunker:

```python
from griptape.chunkers import TextChunker
from griptape.tokenizers import OpenAiTokenizer

TextChunker(
    # set an optional custom tokenizer
    tokenizer=OpenAiTokenizer(model="gpt-4.1"),
    # optionally modify default number of tokens
    max_tokens=100,
).chunk("long text")

```

The most common use of a Chunker is to split up a long text into smaller chunks for inserting into a Vector Database when doing Retrieval Augmented Generation (RAG).

See [RagEngine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/engines/) for more information on how to use Chunkers in RAG pipelines.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
