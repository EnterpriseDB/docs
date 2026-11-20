---
title: base_rag_stage
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/stages/base_rag_stage/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_rag\_stage

<span id="griptape.engines.rag.stages.base_rag_stage.BaseRagStage"></span>

Bases:
[`FuturesExecutorMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/futures_executor_mixin/#griptape.mixins.futures_executor_mixin.FuturesExecutorMixin "FuturesExecutorMixin (griptape.mixins.futures_executor_mixin.FuturesExecutorMixin)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/engines/rag/stages/base\_rag\_stage.py</code>

</summary>

```python
@define(kw_only=True)
class BaseRagStage(FuturesExecutorMixin, ABC):
    @abstractmethod
    def run(self, context: RagContext) -> RagContext: ...

    @property
    @abstractmethod
    def modules(self) -> Sequence[BaseRagModule]: ...
```

</details>

- `modules` <small>abstractmethod</small> <small>property</small>  <span id="griptape.engines.rag.stages.base_rag_stage.BaseRagStage.modules"></span>

<span id="griptape.engines.rag.stages.base_rag_stage.BaseRagStage.run"></span>

### run(context)abstractmethod

<details>

<summary>

Source Code in <code>griptape/engines/rag/stages/base\_rag\_stage.py</code>

</summary>

```python
@abstractmethod
def run(self, context: RagContext) -> RagContext: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
