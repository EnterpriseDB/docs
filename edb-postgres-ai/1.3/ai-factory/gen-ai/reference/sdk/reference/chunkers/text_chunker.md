---
title: text_chunker
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/chunkers/text_chunker/
lastModified: 2025-11-07T18:06:05Z
---

# text\_chunker

<span id="griptape.chunkers.text_chunker.TextChunker"></span>

Bases:
[`BaseChunker`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/chunkers/#griptape.chunkers.BaseChunker "BaseChunker (griptape.chunkers.BaseChunker)")

<details>

<summary>

Source Code in <code>griptape/chunkers/text\_chunker.py</code>

</summary>

```python
class TextChunker(BaseChunker):
    DEFAULT_SEPARATORS = [
        ChunkSeparator("\n\n"),
        ChunkSeparator("\n"),
        ChunkSeparator(". "),
        ChunkSeparator("! "),
        ChunkSeparator("? "),
        ChunkSeparator(" "),
    ]
```

</details>

- `DEFAULT_SEPARATORS = [ChunkSeparator('\n\n'), ChunkSeparator('\n'), ChunkSeparator('. '), ChunkSeparator('! '), ChunkSeparator('? '), ChunkSeparator(' ')]` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.chunkers.text_chunker.TextChunker.DEFAULT_SEPARATORS"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
