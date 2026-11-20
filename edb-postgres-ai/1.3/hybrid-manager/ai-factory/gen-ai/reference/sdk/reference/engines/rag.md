---
title: rag
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/
lastModified: 2026-05-22T19:45:14+05:30
---

# rag

- `__all__ = ['RagContext', 'RagEngine']` <small>module-attribute</small>  <span id="griptape.engines.rag.__all__"></span>

<span id="griptape.engines.rag.RagContext"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                 | Description                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/#griptape.engines.rag.RagContext.query" title="query = field(metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.engines.rag.RagContext.query)"><code class="language-python">query</code></a>                                                    | `str`                                                                                                                                                                                                                | Query provided by the user.<br/>                                                                                        |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/#griptape.engines.rag.RagContext.module_configs" title="module_configs = field(factory=dict, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.engines.rag.RagContext.module_configs)"><code class="language-python">module\_configs</code></a> | `dict[str, dict]`                                                                                                                                                                                                    | Dictionary of module configs. First key should be a module name and the second a dictionary of configs parameters.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/#griptape.engines.rag.RagContext.before_query" title="before_query = field(factory=list, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.engines.rag.RagContext.before_query)"><code class="language-python">before\_query</code></a>         | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[str]</code></a>          | An optional list of strings to add before the query in response modules.<br/>                                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/#griptape.engines.rag.RagContext.after_query" title="after_query = field(factory=list, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.engines.rag.RagContext.after_query)"><code class="language-python">after\_query</code></a>             | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[str]</code></a>          | An optional list of strings to add after the query in response modules.<br/>                                            |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/#griptape.engines.rag.RagContext.text_chunks" title="text_chunks = field(factory=list, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.engines.rag.RagContext.text_chunks)"><code class="language-python">text\_chunks</code></a>             | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[TextArtifact]</code></a> | A list of text chunks to pass around from the retrieval stage to the response stage.<br/>                               |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/#griptape.engines.rag.RagContext.outputs" title="outputs = field(factory=list, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.engines.rag.RagContext.outputs)"><code class="language-python">outputs</code></a>                              | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[BaseArtifact]</code></a> | List of outputs from the response stage.<br/>                                                                           |

<details>

<summary>

Source Code in <code>griptape/engines/rag/rag\_context.py</code>

</summary>

```python
@define(kw_only=True)
class RagContext(SerializableMixin):
    """Used by RagEngine stages and module to pass context that individual modules are expected to update in the `run` method.

    Attributes:
        query: Query provided by the user.
        module_configs: Dictionary of module configs. First key should be a module name and the second a dictionary of configs parameters.
        before_query: An optional list of strings to add before the query in response modules.
        after_query: An optional list of strings to add after the query in response modules.
        text_chunks: A list of text chunks to pass around from the retrieval stage to the response stage.
        outputs: List of outputs from the response stage.
    """

    query: str = field(metadata={"serializable": True})
    module_configs: dict[str, dict] = field(factory=dict, metadata={"serializable": True})
    before_query: list[str] = field(factory=list, metadata={"serializable": True})
    after_query: list[str] = field(factory=list, metadata={"serializable": True})
    text_chunks: list[TextArtifact] = field(factory=list, metadata={"serializable": True})
    outputs: list[BaseArtifact] = field(factory=list, metadata={"serializable": True})

    def get_references(self) -> list[Reference]:
        return utils.references_from_artifacts(self.text_chunks)
```

</details>

- `after_query = field(factory=list, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.RagContext.after_query"></span>

- `before_query = field(factory=list, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.RagContext.before_query"></span>

- `module_configs = field(factory=dict, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.RagContext.module_configs"></span>

- `outputs = field(factory=list, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.RagContext.outputs"></span>

- `query = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.RagContext.query"></span>

- `text_chunks = field(factory=list, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.RagContext.text_chunks"></span>

<span id="griptape.engines.rag.RagContext.get_references"></span>

### get\_references()

<details>

<summary>

Source Code in <code>griptape/engines/rag/rag\_context.py</code>

</summary>

```python
def get_references(self) -> list[Reference]:
    return utils.references_from_artifacts(self.text_chunks)
```

</details>

<span id="griptape.engines.rag.RagEngine"></span>

## RagEngine

<details>

<summary>

Source Code in <code>griptape/engines/rag/rag\_engine.py</code>

</summary>

```python
@define(kw_only=True)
class RagEngine:
    query_stage: Optional[QueryRagStage] = field(default=None)
    retrieval_stage: Optional[RetrievalRagStage] = field(default=None)
    response_stage: Optional[ResponseRagStage] = field(default=None)

    def __attrs_post_init__(self) -> None:
        modules = []

        if self.query_stage is not None:
            modules.extend(self.query_stage.modules)

        if self.retrieval_stage is not None:
            modules.extend(self.retrieval_stage.modules)

        if self.response_stage is not None:
            modules.extend(self.response_stage.modules)

        module_names = [m.name for m in modules]

        if len(module_names) > len(set(module_names)):
            raise ValueError("module names have to be unique")

    def process_query(self, query: str) -> RagContext:
        return self.process(RagContext(query=query))

    def process(self, context: RagContext) -> RagContext:
        if self.query_stage:
            context = self.query_stage.run(context)

        if self.retrieval_stage:
            context = self.retrieval_stage.run(context)

        if self.response_stage:
            context = self.response_stage.run(context)

        return context
```

</details>

- `query_stage = field(default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.RagEngine.query_stage"></span>

- `response_stage = field(default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.RagEngine.response_stage"></span>

- `retrieval_stage = field(default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.RagEngine.retrieval_stage"></span>

<span id="griptape.engines.rag.RagEngine.__attrs_post_init__"></span>

### **attrs\_post\_init**()

<details>

<summary>

Source Code in <code>griptape/engines/rag/rag\_engine.py</code>

</summary>

```python
def __attrs_post_init__(self) -> None:
    modules = []

    if self.query_stage is not None:
        modules.extend(self.query_stage.modules)

    if self.retrieval_stage is not None:
        modules.extend(self.retrieval_stage.modules)

    if self.response_stage is not None:
        modules.extend(self.response_stage.modules)

    module_names = [m.name for m in modules]

    if len(module_names) > len(set(module_names)):
        raise ValueError("module names have to be unique")
```

</details>

<span id="griptape.engines.rag.RagEngine.process"></span>

### process(context)

<details>

<summary>

Source Code in <code>griptape/engines/rag/rag\_engine.py</code>

</summary>

```python
def process(self, context: RagContext) -> RagContext:
    if self.query_stage:
        context = self.query_stage.run(context)

    if self.retrieval_stage:
        context = self.retrieval_stage.run(context)

    if self.response_stage:
        context = self.response_stage.run(context)

    return context
```

</details>

<span id="griptape.engines.rag.RagEngine.process_query"></span>

### process\_query(query)

<details>

<summary>

Source Code in <code>griptape/engines/rag/rag\_engine.py</code>

</summary>

```python
def process_query(self, query: str) -> RagContext:
    return self.process(RagContext(query=query))
```

</details>

- [BaseAfterResponseRagModule](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/): -   all = \['BaseAfterResponseRagModule', 'BaseBeforeResponseRagModule', 'BaseQueryRagModule', 'BaseRagModule', 'BaseRerankRagModule', 'BaseResponseRagModule', 'BaseRetrievalRagModule', 'FootnotePromptResponseRagModule', 'PromptResponseRagModule', 'TextChunksRerankRagModule', 'TextChunksResponseRagModule', 'TextLoaderRetrievalRagModule', 'TranslateQueryRagModule', 'VectorStoreRetrievalRagModule'] module-attribute
- [RagContext](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/rag_context/): Bases:
- [RagEngine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/rag_engine/): Source Code in griptape/engines/rag/rag\_engine.py
- [BaseRagStage](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/stages/): -   all = \['BaseRagStage', 'QueryRagStage', 'ResponseRagStage', 'RetrievalRagStage'] module-attribute

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
