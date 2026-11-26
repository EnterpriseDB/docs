---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/rag/tool/
lastModified: 2026-05-22T19:45:14+05:30
---

# tool

<span id="griptape.tools.rag.tool.RagTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                       | Description                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/rag/tool/#griptape.tools.rag.tool.RagTool.description" title="description = field()           class-attribute       instance-attribute    (griptape.tools.rag.tool.RagTool.description)"><code class="language-python">description</code></a> | `str`                                                                                                                                                                                                                                                                      | LLM-friendly RAG engine description.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/rag/tool/#griptape.tools.rag.tool.RagTool.rag_engine" title="rag_engine = field()           class-attribute       instance-attribute    (griptape.tools.rag.tool.RagTool.rag_engine)"><code class="language-python">rag\_engine</code></a>    | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/#griptape.engines.rag.RagEngine" title="RagEngine (griptape.engines.rag.RagEngine)"><code class="language-python">RagEngine</code></a> | `RagEngine`.<br/>                         |

<details>

<summary>

Source Code in <code>griptape/tools/rag/tool.py</code>

</summary>

```python
@define(kw_only=True)
class RagTool(BaseTool):
    """Tool for querying a RAG engine.

    Attributes:
        description: LLM-friendly RAG engine description.
        rag_engine: `RagEngine`.
    """

    description: str = field()
    rag_engine: RagEngine = field()

    @activity(
        config={
            "description": "{{ _self.description }}",
            "schema": Schema({Literal("query", description="A natural language search query"): str}),
        },
    )
    def search(self, params: dict) -> ListArtifact | ErrorArtifact:
        query = params["values"]["query"]

        try:
            artifacts = self.rag_engine.process_query(query).outputs

            outputs = []
            for artifact in artifacts:
                if isinstance(artifact, ListArtifact):
                    outputs.extend(artifact.value)
                else:
                    outputs.append(artifact)

            if len(outputs) > 0:
                return ListArtifact(outputs)
            return ErrorArtifact("query output is empty")

        except Exception as e:
            return ErrorArtifact(f"error querying: {e}")
```

</details>

- `description = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.rag.tool.RagTool.description"></span>

- `rag_engine = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.rag.tool.RagTool.rag_engine"></span>

<span id="griptape.tools.rag.tool.RagTool.search"></span>

### search(params)

<details>

<summary>

Source Code in <code>griptape/tools/rag/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "{{ _self.description }}",
        "schema": Schema({Literal("query", description="A natural language search query"): str}),
    },
)
def search(self, params: dict) -> ListArtifact | ErrorArtifact:
    query = params["values"]["query"]

    try:
        artifacts = self.rag_engine.process_query(query).outputs

        outputs = []
        for artifact in artifacts:
            if isinstance(artifact, ListArtifact):
                outputs.extend(artifact.value)
            else:
                outputs.append(artifact)

        if len(outputs) > 0:
            return ListArtifact(outputs)
        return ErrorArtifact("query output is empty")

    except Exception as e:
        return ErrorArtifact(f"error querying: {e}")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
