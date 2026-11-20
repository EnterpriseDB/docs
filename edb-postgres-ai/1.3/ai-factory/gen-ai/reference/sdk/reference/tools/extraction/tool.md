---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/extraction/tool/
lastModified: 2025-11-07T18:06:05Z
---

# tool

<span id="griptape.tools.extraction.tool.ExtractionTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")
,  [`RuleMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/rule_mixin/#griptape.mixins.rule_mixin.RuleMixin "RuleMixin (griptape.mixins.rule_mixin.RuleMixin)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                                        | Description              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/extraction/tool/#griptape.tools.extraction.tool.ExtractionTool.extraction_engine" title="extraction_engine = field()           class-attribute       instance-attribute    (griptape.tools.extraction.tool.ExtractionTool.extraction_engine)"><code class="language-python">extraction\_engine</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/engines/#griptape.engines.BaseExtractionEngine" title="BaseExtractionEngine (griptape.engines.BaseExtractionEngine)"><code class="language-python">BaseExtractionEngine</code></a> | `ExtractionEngine`.<br/> |

<details>

<summary>

Source Code in <code>griptape/tools/extraction/tool.py</code>

</summary>

```python
@define(kw_only=True)
class ExtractionTool(BaseTool, RuleMixin):
    """Tool for using an Extraction Engine.

    Attributes:
        extraction_engine: `ExtractionEngine`.
    """

    extraction_engine: BaseExtractionEngine = field()

    @activity(
        config={
            "description": "Can be used extract structured text from data.",
            "schema": Schema(
                {
                    Literal("data"): Or(
                        str,
                        Schema(
                            {
                                "memory_name": str,
                                "artifact_namespace": str,
                            }
                        ),
                    ),
                }
            ),
        },
    )
    def extract(self, params: dict) -> ListArtifact | InfoArtifact | ErrorArtifact:
        data = params["values"]["data"]

        if isinstance(data, str):
            artifacts = ListArtifact([TextArtifact(data)])
        else:
            memory = self.find_input_memory(data["memory_name"])
            artifact_namespace = data["artifact_namespace"]

            if memory is not None:
                artifacts = memory.load_artifacts(artifact_namespace)
            else:
                return ErrorArtifact("memory not found")

        return self.extraction_engine.extract_artifacts(artifacts)
```

</details>

- `extraction_engine = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.extraction.tool.ExtractionTool.extraction_engine"></span>

<span id="griptape.tools.extraction.tool.ExtractionTool.extract"></span>

### extract(params)

<details>

<summary>

Source Code in <code>griptape/tools/extraction/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Can be used extract structured text from data.",
        "schema": Schema(
            {
                Literal("data"): Or(
                    str,
                    Schema(
                        {
                            "memory_name": str,
                            "artifact_namespace": str,
                        }
                    ),
                ),
            }
        ),
    },
)
def extract(self, params: dict) -> ListArtifact | InfoArtifact | ErrorArtifact:
    data = params["values"]["data"]

    if isinstance(data, str):
        artifacts = ListArtifact([TextArtifact(data)])
    else:
        memory = self.find_input_memory(data["memory_name"])
        artifact_namespace = data["artifact_namespace"]

        if memory is not None:
            artifacts = memory.load_artifacts(artifact_namespace)
        else:
            return ErrorArtifact("memory not found")

    return self.extraction_engine.extract_artifacts(artifacts)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
