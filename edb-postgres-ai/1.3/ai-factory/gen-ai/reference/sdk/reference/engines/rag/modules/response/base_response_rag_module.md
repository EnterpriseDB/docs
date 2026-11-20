---
title: base_response_rag_module
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/response/base_response_rag_module/
lastModified: 2025-11-07T18:06:05Z
---

# base\_response\_rag\_module

<span id="griptape.engines.rag.modules.response.base_response_rag_module.BaseResponseRagModule"></span>

Bases:
[`BaseRagModule`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/#griptape.engines.rag.modules.BaseRagModule "BaseRagModule (griptape.engines.rag.modules.BaseRagModule)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/response/base\_response\_rag\_module.py</code>

</summary>

```python
@define(kw_only=True)
class BaseResponseRagModule(BaseRagModule, ABC):
    @abstractmethod
    def run(self, context: RagContext) -> BaseArtifact: ...
```

</details>

<span id="griptape.engines.rag.modules.response.base_response_rag_module.BaseResponseRagModule.run"></span>

### run(context)abstractmethod

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/response/base\_response\_rag\_module.py</code>

</summary>

```python
@abstractmethod
def run(self, context: RagContext) -> BaseArtifact: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
