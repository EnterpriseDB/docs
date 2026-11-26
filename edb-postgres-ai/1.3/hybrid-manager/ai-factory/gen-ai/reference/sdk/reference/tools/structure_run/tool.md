---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/structure_run/tool/
lastModified: 2026-05-22T19:45:14+05:30
---

# tool

<span id="griptape.tools.structure_run.tool.StructureRunTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/base_tool/#griptape.tools.base_tool.BaseTool "BaseTool (griptape.tools.base_tool.BaseTool)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                                                                                         | Description                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/structure_run/tool/#griptape.tools.structure_run.tool.StructureRunTool.description" title="description = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.tools.structure_run.tool.StructureRunTool.description)"><code class="language-python">description</code></a>                                       | `str`                                                                                                                                                                                                                                                                                                                                                        | A description of what the Structure does.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/structure_run/tool/#griptape.tools.structure_run.tool.StructureRunTool.structure_run_driver" title="structure_run_driver = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.tools.structure_run.tool.StructureRunTool.structure_run_driver)"><code class="language-python">structure\_run\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/#griptape.drivers.structure_run.BaseStructureRunDriver" title="BaseStructureRunDriver (griptape.drivers.structure_run.BaseStructureRunDriver)"><code class="language-python">BaseStructureRunDriver</code></a> | Driver to run the Structure.<br/>              |

<details>

<summary>

Source Code in <code>griptape/tools/structure\_run/tool.py</code>

</summary>

```python
@define
class StructureRunTool(BaseTool):
    """Tool for running a Structure.

    Attributes:
        description: A description of what the Structure does.
        structure_run_driver: Driver to run the Structure.
    """

    description: str = field(kw_only=True, metadata={"serializable": True})
    structure_run_driver: BaseStructureRunDriver = field(kw_only=True, metadata={"serializable": True})

    @activity(
        config={
            "description": "Can be used to run a Gen AI Builder Structure with the following description: {{ _self.description }}",
            "schema": Schema(
                {
                    Literal("args", description="A list of string arguments to submit to the Structure Run"): Schema(
                        [str]
                    )
                },
            ),
        },
    )
    def run_structure(self, params: dict) -> BaseArtifact:
        args: list[str] = params["values"]["args"]

        return self.structure_run_driver.run(*[TextArtifact(arg) for arg in args])
```

</details>

- `description = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.structure_run.tool.StructureRunTool.description"></span>

- `structure_run_driver = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.structure_run.tool.StructureRunTool.structure_run_driver"></span>

<span id="griptape.tools.structure_run.tool.StructureRunTool.run_structure"></span>

### run\_structure(params)

<details>

<summary>

Source Code in <code>griptape/tools/structure\_run/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Can be used to run a Gen AI Builder Structure with the following description: {{ _self.description }}",
        "schema": Schema(
            {
                Literal("args", description="A list of string arguments to submit to the Structure Run"): Schema(
                    [str]
                )
            },
        ),
    },
)
def run_structure(self, params: dict) -> BaseArtifact:
    args: list[str] = params["values"]["args"]

    return self.structure_run_driver.run(*[TextArtifact(arg) for arg in args])
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
