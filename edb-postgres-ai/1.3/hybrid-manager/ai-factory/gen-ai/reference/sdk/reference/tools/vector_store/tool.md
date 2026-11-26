---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/vector_store/tool/
lastModified: 2026-05-22T19:45:14+05:30
---

# tool

<span id="griptape.tools.vector_store.tool.VectorStoreTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                                | Description                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/vector_store/tool/#griptape.tools.vector_store.tool.VectorStoreTool.description" title="description = field()           class-attribute       instance-attribute    (griptape.tools.vector_store.tool.VectorStoreTool.description)"><code class="language-python">description</code></a>                                                                                                                      | `str`                                                                                                                                                                                                                                                                                                                               | LLM-friendly vector DB description.<br/>                                       |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/vector_store/tool/#griptape.tools.vector_store.tool.VectorStoreTool.vector_store_driver" title="vector_store_driver = field()           class-attribute       instance-attribute    (griptape.tools.vector_store.tool.VectorStoreTool.vector_store_driver)"><code class="language-python">vector\_store\_driver</code></a>                                                                                    | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/#griptape.drivers.vector.BaseVectorStoreDriver" title="BaseVectorStoreDriver (griptape.drivers.vector.BaseVectorStoreDriver)"><code class="language-python">BaseVectorStoreDriver</code></a> | `BaseVectorStoreDriver`.<br/>                                                  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/vector_store/tool/#griptape.tools.vector_store.tool.VectorStoreTool.query_params" title="query_params = field(factory=dict)           class-attribute       instance-attribute    (griptape.tools.vector_store.tool.VectorStoreTool.query_params)"><code class="language-python">query\_params</code></a>                                                                                                     | `dict[str, Any]`                                                                                                                                                                                                                                                                                                                    | Optional dictionary of vector store driver query parameters.<br/>              |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/vector_store/tool/#griptape.tools.vector_store.tool.VectorStoreTool.process_query_output" title="process_query_output = field(default=Factory(lambda: lambda es: ListArtifact([e.to_artifact() for e in es])))           class-attribute       instance-attribute    (griptape.tools.vector_store.tool.VectorStoreTool.process_query_output)"><code class="language-python">process\_query\_output</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">Callable\[\[list\[Entry]], BaseArtifact]</code></a>                                                                                           | Optional lambda for processing vector store driver query output `Entry`s.<br/> |

<details>

<summary>

Source Code in <code>griptape/tools/vector\_store/tool.py</code>

</summary>

```python
@define(kw_only=True)
class VectorStoreTool(BaseTool):
    """A tool for querying a vector database.

    Attributes:
        description: LLM-friendly vector DB description.
        vector_store_driver: `BaseVectorStoreDriver`.
        query_params: Optional dictionary of vector store driver query parameters.
        process_query_output: Optional lambda for processing vector store driver query output `Entry`s.
    """

    DEFAULT_TOP_N = 5

    description: str = field()
    vector_store_driver: BaseVectorStoreDriver = field()
    query_params: dict[str, Any] = field(factory=dict)
    process_query_output: Callable[[list[BaseVectorStoreDriver.Entry]], BaseArtifact] = field(
        default=Factory(lambda: lambda es: ListArtifact([e.to_artifact() for e in es])),
    )

    @activity(
        config={
            "description": "Can be used to search a database with the following description: {{ _self.description }}",
            "schema": Schema(
                {
                    Literal(
                        "query",
                        description="A natural language search query to run against the vector database",
                    ): str,
                },
            ),
        },
    )
    def search(self, params: dict) -> BaseArtifact:
        query = params["values"]["query"]

        try:
            return self.process_query_output(self.vector_store_driver.query(query, **self.query_params))
        except Exception as e:
            return ErrorArtifact(f"error querying vector store: {e}")
```

</details>

- `DEFAULT_TOP_N = 5` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.vector_store.tool.VectorStoreTool.DEFAULT_TOP_N"></span>

- `description = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.vector_store.tool.VectorStoreTool.description"></span>

- `process_query_output = field(default=Factory(lambda: lambda es: ListArtifact([e.to_artifact() for e in es])))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.vector_store.tool.VectorStoreTool.process_query_output"></span>

- `query_params = field(factory=dict)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.vector_store.tool.VectorStoreTool.query_params"></span>

- `vector_store_driver = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.vector_store.tool.VectorStoreTool.vector_store_driver"></span>

<span id="griptape.tools.vector_store.tool.VectorStoreTool.search"></span>

### search(params)

<details>

<summary>

Source Code in <code>griptape/tools/vector\_store/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Can be used to search a database with the following description: {{ _self.description }}",
        "schema": Schema(
            {
                Literal(
                    "query",
                    description="A natural language search query to run against the vector database",
                ): str,
            },
        ),
    },
)
def search(self, params: dict) -> BaseArtifact:
    query = params["values"]["query"]

    try:
        return self.process_query_output(self.vector_store_driver.query(query, **self.query_params))
    except Exception as e:
        return ErrorArtifact(f"error querying vector store: {e}")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
