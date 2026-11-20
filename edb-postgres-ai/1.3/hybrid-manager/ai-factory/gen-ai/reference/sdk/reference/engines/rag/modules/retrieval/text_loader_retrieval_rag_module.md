---
title: text_loader_retrieval_rag_module
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/retrieval/text_loader_retrieval_rag_module/
lastModified: 2026-05-22T19:45:14+05:30
---

# text\_loader\_retrieval\_rag\_module

<span id="griptape.engines.rag.modules.retrieval.text_loader_retrieval_rag_module.TextLoaderRetrievalRagModule"></span>

Bases:
[`BaseRetrievalRagModule`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/#griptape.engines.rag.modules.BaseRetrievalRagModule "BaseRetrievalRagModule (griptape.engines.rag.modules.BaseRetrievalRagModule)")

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/retrieval/text\_loader\_retrieval\_rag\_module.py</code>

</summary>

```python
@define(kw_only=True)
class TextLoaderRetrievalRagModule(BaseRetrievalRagModule):
    loader: TextLoader = field()
    chunker: TextChunker = field(default=Factory(lambda: TextChunker()))
    vector_store_driver: BaseVectorStoreDriver = field()
    source: Any = field()
    query_params: dict[str, Any] = field(factory=dict)
    process_query_output: Callable[[list[BaseVectorStoreDriver.Entry]], Sequence[TextArtifact]] = field(
        default=Factory(lambda: lambda es: [e.to_artifact() for e in es]),
    )

    def run(self, context: RagContext) -> Sequence[TextArtifact]:
        namespace = uuid.uuid4().hex
        context_source = self.get_context_param(context, "source")
        source = self.source if context_source is None else context_source

        query_params = utils.dict_merge(self.query_params, self.get_context_param(context, "query_params"))

        query_params["namespace"] = namespace

        loader_output = self.loader.load(source)
        chunks = self.chunker.chunk(loader_output)

        self.vector_store_driver.upsert_collection({namespace: chunks})

        return self.process_query_output(self.vector_store_driver.query(context.query, **query_params))
```

</details>

- `chunker = field(default=Factory(lambda: TextChunker()))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.retrieval.text_loader_retrieval_rag_module.TextLoaderRetrievalRagModule.chunker"></span>

- `loader = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.retrieval.text_loader_retrieval_rag_module.TextLoaderRetrievalRagModule.loader"></span>

- `process_query_output = field(default=Factory(lambda: lambda es: [e.to_artifact() for e in es]))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.retrieval.text_loader_retrieval_rag_module.TextLoaderRetrievalRagModule.process_query_output"></span>

- `query_params = field(factory=dict)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.retrieval.text_loader_retrieval_rag_module.TextLoaderRetrievalRagModule.query_params"></span>

- `source = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.retrieval.text_loader_retrieval_rag_module.TextLoaderRetrievalRagModule.source"></span>

- `vector_store_driver = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.retrieval.text_loader_retrieval_rag_module.TextLoaderRetrievalRagModule.vector_store_driver"></span>

<span id="griptape.engines.rag.modules.retrieval.text_loader_retrieval_rag_module.TextLoaderRetrievalRagModule.run"></span>

### run(context)

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/retrieval/text\_loader\_retrieval\_rag\_module.py</code>

</summary>

```python
def run(self, context: RagContext) -> Sequence[TextArtifact]:
    namespace = uuid.uuid4().hex
    context_source = self.get_context_param(context, "source")
    source = self.source if context_source is None else context_source

    query_params = utils.dict_merge(self.query_params, self.get_context_param(context, "query_params"))

    query_params["namespace"] = namespace

    loader_output = self.loader.load(source)
    chunks = self.chunker.chunk(loader_output)

    self.vector_store_driver.upsert_collection({namespace: chunks})

    return self.process_query_output(self.vector_store_driver.query(context.query, **query_params))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
