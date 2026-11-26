---
title: rag_context
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/rag_context/
lastModified: 2026-05-22T19:45:14+05:30
---

# rag\_context

<span id="griptape.engines.rag.rag_context.RagContext"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                 | Description                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/rag_context/#griptape.engines.rag.rag_context.RagContext.query" title="query = field(metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.engines.rag.rag_context.RagContext.query)"><code class="language-python">query</code></a>                                                    | `str`                                                                                                                                                                                                                | Query provided by the user.<br/>                                                                                        |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/rag_context/#griptape.engines.rag.rag_context.RagContext.module_configs" title="module_configs = field(factory=dict, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.engines.rag.rag_context.RagContext.module_configs)"><code class="language-python">module\_configs</code></a> | `dict[str, dict]`                                                                                                                                                                                                    | Dictionary of module configs. First key should be a module name and the second a dictionary of configs parameters.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/rag_context/#griptape.engines.rag.rag_context.RagContext.before_query" title="before_query = field(factory=list, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.engines.rag.rag_context.RagContext.before_query)"><code class="language-python">before\_query</code></a>         | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[str]</code></a>          | An optional list of strings to add before the query in response modules.<br/>                                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/rag_context/#griptape.engines.rag.rag_context.RagContext.after_query" title="after_query = field(factory=list, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.engines.rag.rag_context.RagContext.after_query)"><code class="language-python">after\_query</code></a>             | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[str]</code></a>          | An optional list of strings to add after the query in response modules.<br/>                                            |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/rag_context/#griptape.engines.rag.rag_context.RagContext.text_chunks" title="text_chunks = field(factory=list, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.engines.rag.rag_context.RagContext.text_chunks)"><code class="language-python">text\_chunks</code></a>             | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[TextArtifact]</code></a> | A list of text chunks to pass around from the retrieval stage to the response stage.<br/>                               |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/rag_context/#griptape.engines.rag.rag_context.RagContext.outputs" title="outputs = field(factory=list, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.engines.rag.rag_context.RagContext.outputs)"><code class="language-python">outputs</code></a>                              | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[BaseArtifact]</code></a> | List of outputs from the response stage.<br/>                                                                           |

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

- `after_query = field(factory=list, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.rag_context.RagContext.after_query"></span>

- `before_query = field(factory=list, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.rag_context.RagContext.before_query"></span>

- `module_configs = field(factory=dict, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.rag_context.RagContext.module_configs"></span>

- `outputs = field(factory=list, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.rag_context.RagContext.outputs"></span>

- `query = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.rag_context.RagContext.query"></span>

- `text_chunks = field(factory=list, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.rag_context.RagContext.text_chunks"></span>

<span id="griptape.engines.rag.rag_context.RagContext.get_references"></span>

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

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
