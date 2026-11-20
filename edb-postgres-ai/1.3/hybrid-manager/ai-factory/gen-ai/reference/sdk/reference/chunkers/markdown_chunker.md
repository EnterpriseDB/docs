---
title: markdown_chunker
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/chunkers/markdown_chunker/
lastModified: 2026-05-22T19:45:14+05:30
---

# markdown\_chunker

<span id="griptape.chunkers.markdown_chunker.MarkdownChunker"></span>

Bases:
[`BaseChunker`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/chunkers/#griptape.chunkers.BaseChunker "BaseChunker (griptape.chunkers.BaseChunker)")

<details>

<summary>

Source Code in <code>griptape/chunkers/markdown\_chunker.py</code>

</summary>

```python
class MarkdownChunker(BaseChunker):
    DEFAULT_SEPARATORS = [
        ChunkSeparator("##", is_prefix=True),
        ChunkSeparator("###", is_prefix=True),
        ChunkSeparator("####", is_prefix=True),
        ChunkSeparator("#####", is_prefix=True),
        ChunkSeparator("######", is_prefix=True),
        ChunkSeparator("\n\n"),
        ChunkSeparator(". "),
        ChunkSeparator("! "),
        ChunkSeparator("? "),
        ChunkSeparator(" "),
    ]
```

</details>

- `DEFAULT_SEPARATORS = [ChunkSeparator('##', is_prefix=True), ChunkSeparator('###', is_prefix=True), ChunkSeparator('####', is_prefix=True), ChunkSeparator('#####', is_prefix=True), ChunkSeparator('######', is_prefix=True), ChunkSeparator('\n\n'), ChunkSeparator('. '), ChunkSeparator('! '), ChunkSeparator('? '), ChunkSeparator(' ')]` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.chunkers.markdown_chunker.MarkdownChunker.DEFAULT_SEPARATORS"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
