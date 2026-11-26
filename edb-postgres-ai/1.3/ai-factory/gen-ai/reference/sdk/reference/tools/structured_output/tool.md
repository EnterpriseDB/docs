---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/structured_output/tool/
lastModified: 2025-11-07T18:06:05Z
---

# tool

<span id="griptape.tools.structured_output.tool.StructuredOutputTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")

<details>

<summary>

Source Code in <code>griptape/tools/structured\_output/tool.py</code>

</summary>

```python
@define
class StructuredOutputTool(BaseTool):
    output_schema: Union[Schema, type[BaseModel]] = field(kw_only=True)

    @activity(
        config={
            "description": "Used to provide the final response which ends this conversation.",
            "schema": lambda _self: _self.output_schema,
        }
    )
    def provide_output(self, params: dict) -> BaseArtifact:
        return JsonArtifact(params["values"])
```

</details>

- `output_schema = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.structured_output.tool.StructuredOutputTool.output_schema"></span>

<span id="griptape.tools.structured_output.tool.StructuredOutputTool.provide_output"></span>

### provide\_output(params)

<details>

<summary>

Source Code in <code>griptape/tools/structured\_output/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Used to provide the final response which ends this conversation.",
        "schema": lambda _self: _self.output_schema,
    }
)
def provide_output(self, params: dict) -> BaseArtifact:
    return JsonArtifact(params["values"])
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
