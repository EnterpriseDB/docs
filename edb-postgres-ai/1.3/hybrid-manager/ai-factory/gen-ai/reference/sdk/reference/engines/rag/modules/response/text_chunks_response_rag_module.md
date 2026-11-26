---
title: text_chunks_response_rag_module
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/response/text_chunks_response_rag_module/
lastModified: 2026-05-22T19:45:14+05:30
---

# text\_chunks\_response\_rag\_module

<span id="griptape.engines.rag.modules.response.text_chunks_response_rag_module.TextChunksResponseRagModule"></span>

Bases:
[`BaseResponseRagModule`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/#griptape.engines.rag.modules.BaseResponseRagModule "BaseResponseRagModule (griptape.engines.rag.modules.BaseResponseRagModule)")

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/response/text\_chunks\_response\_rag\_module.py</code>

</summary>

```python
@define(kw_only=True)
class TextChunksResponseRagModule(BaseResponseRagModule):
    def run(self, context: RagContext) -> BaseArtifact:
        return ListArtifact(context.text_chunks)
```

</details>

<span id="griptape.engines.rag.modules.response.text_chunks_response_rag_module.TextChunksResponseRagModule.run"></span>

### run(context)

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/response/text\_chunks\_response\_rag\_module.py</code>

</summary>

```python
def run(self, context: RagContext) -> BaseArtifact:
    return ListArtifact(context.text_chunks)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
