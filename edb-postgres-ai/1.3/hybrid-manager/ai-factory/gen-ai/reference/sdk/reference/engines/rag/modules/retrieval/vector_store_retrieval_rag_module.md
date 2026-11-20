---
title: vector_store_retrieval_rag_module
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/retrieval/vector_store_retrieval_rag_module/
lastModified: 2026-05-22T19:45:14+05:30
---

# vector\_store\_retrieval\_rag\_module

<span id="griptape.engines.rag.modules.retrieval.vector_store_retrieval_rag_module.VectorStoreRetrievalRagModule"></span>

Bases:
[`BaseRetrievalRagModule`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/#griptape.engines.rag.modules.BaseRetrievalRagModule "BaseRetrievalRagModule (griptape.engines.rag.modules.BaseRetrievalRagModule)")

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/retrieval/vector\_store\_retrieval\_rag\_module.py</code>

</summary>

```python
@define(kw_only=True)
class VectorStoreRetrievalRagModule(BaseRetrievalRagModule):
    vector_store_driver: BaseVectorStoreDriver = field(
        default=Factory(lambda: Defaults.drivers_config.vector_store_driver)
    )
    query_params: dict[str, Any] = field(factory=dict)
    process_query_output: Callable[[list[BaseVectorStoreDriver.Entry]], Sequence[TextArtifact]] = field(
        default=Factory(lambda: lambda es: [e.to_artifact() for e in es]),
    )

    def run(self, context: RagContext) -> Sequence[TextArtifact]:
        query_params = utils.dict_merge(self.query_params, self.get_context_param(context, "query_params"))

        return self.process_query_output(self.vector_store_driver.query(context.query, **query_params))
```

</details>

- `process_query_output = field(default=Factory(lambda: lambda es: [e.to_artifact() for e in es]))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.retrieval.vector_store_retrieval_rag_module.VectorStoreRetrievalRagModule.process_query_output"></span>

- `query_params = field(factory=dict)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.retrieval.vector_store_retrieval_rag_module.VectorStoreRetrievalRagModule.query_params"></span>

- `vector_store_driver = field(default=Factory(lambda: Defaults.drivers_config.vector_store_driver))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.retrieval.vector_store_retrieval_rag_module.VectorStoreRetrievalRagModule.vector_store_driver"></span>

<span id="griptape.engines.rag.modules.retrieval.vector_store_retrieval_rag_module.VectorStoreRetrievalRagModule.run"></span>

### run(context)

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/retrieval/vector\_store\_retrieval\_rag\_module.py</code>

</summary>

```python
def run(self, context: RagContext) -> Sequence[TextArtifact]:
    query_params = utils.dict_merge(self.query_params, self.get_context_param(context, "query_params"))

    return self.process_query_output(self.vector_store_driver.query(context.query, **query_params))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
