---
title: pdf_chunker
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/chunkers/pdf_chunker/
lastModified: 2025-11-07T18:06:05Z
---

# pdf\_chunker

<span id="griptape.chunkers.pdf_chunker.PdfChunker"></span>

Bases:
[`BaseChunker`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/chunkers/#griptape.chunkers.BaseChunker "BaseChunker (griptape.chunkers.BaseChunker)")

<details>

<summary>

Source Code in <code>griptape/chunkers/pdf\_chunker.py</code>

</summary>

```python
class PdfChunker(BaseChunker):
    DEFAULT_SEPARATORS = [
        ChunkSeparator("\n\n"),
        ChunkSeparator(". "),
        ChunkSeparator("! "),
        ChunkSeparator("? "),
        ChunkSeparator(" "),
    ]
```

</details>

- `DEFAULT_SEPARATORS = [ChunkSeparator('\n\n'), ChunkSeparator('. '), ChunkSeparator('! '), ChunkSeparator('? '), ChunkSeparator(' ')]` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.chunkers.pdf_chunker.PdfChunker.DEFAULT_SEPARATORS"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
