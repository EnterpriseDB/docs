---
title: text_chunks_rerank_rag_module
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/retrieval/text_chunks_rerank_rag_module/
lastModified: 2026-05-22T19:45:14+05:30
---

# text\_chunks\_rerank\_rag\_module

<span id="griptape.engines.rag.modules.retrieval.text_chunks_rerank_rag_module.TextChunksRerankRagModule"></span>

Bases:
[`BaseRerankRagModule`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/#griptape.engines.rag.modules.BaseRerankRagModule "BaseRerankRagModule (griptape.engines.rag.modules.BaseRerankRagModule)")

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/retrieval/text\_chunks\_rerank\_rag\_module.py</code>

</summary>

```python
@define(kw_only=True)
class TextChunksRerankRagModule(BaseRerankRagModule):
    def run(self, context: RagContext) -> Sequence[BaseArtifact]:
        return self.rerank_driver.run(context.query, context.text_chunks)
```

</details>

<span id="griptape.engines.rag.modules.retrieval.text_chunks_rerank_rag_module.TextChunksRerankRagModule.run"></span>

### run(context)

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/retrieval/text\_chunks\_rerank\_rag\_module.py</code>

</summary>

```python
def run(self, context: RagContext) -> Sequence[BaseArtifact]:
    return self.rerank_driver.run(context.query, context.text_chunks)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
