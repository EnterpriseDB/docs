---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/prompt_summary/tool/
lastModified: 2026-05-22T19:45:14+05:30
---

# tool

<span id="griptape.tools.prompt_summary.tool.PromptSummaryTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")
,  [`RuleMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/rule_mixin/#griptape.mixins.rule_mixin.RuleMixin "RuleMixin (griptape.mixins.rule_mixin.RuleMixin)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                   | Description                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/prompt_summary/tool/#griptape.tools.prompt_summary.tool.PromptSummaryTool.prompt_summary_engine" title="prompt_summary_engine = field(kw_only=True, default=Factory(lambda: PromptSummaryEngine()))           class-attribute       instance-attribute    (griptape.tools.prompt_summary.tool.PromptSummaryTool.prompt_summary_engine)"><code class="language-python">prompt\_summary\_engine</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/#griptape.engines.PromptSummaryEngine" title="PromptSummaryEngine (griptape.engines.PromptSummaryEngine)"><code class="language-python">PromptSummaryEngine</code></a> | `PromptSummaryEngine`.<br/> |

<details>

<summary>

Source Code in <code>griptape/tools/prompt\_summary/tool.py</code>

</summary>

```python
@define(kw_only=True)
class PromptSummaryTool(BaseTool, RuleMixin):
    """Tool for using a Prompt Summary Engine.

    Attributes:
        prompt_summary_engine: `PromptSummaryEngine`.
    """

    prompt_summary_engine: PromptSummaryEngine = field(kw_only=True, default=Factory(lambda: PromptSummaryEngine()))

    @activity(
        config={
            "description": "Can be used to summarize text content.",
            "schema": Schema(
                {
                    Literal("summary"): Or(
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
    def summarize(self, params: dict) -> BaseArtifact:
        summary = params["values"]["summary"]

        if isinstance(summary, str):
            artifacts = ListArtifact([TextArtifact(summary)])
        else:
            memory = self.find_input_memory(summary["memory_name"])
            artifact_namespace = summary["artifact_namespace"]

            if memory is not None:
                artifacts = memory.load_artifacts(artifact_namespace)
            else:
                return ErrorArtifact("memory not found")

        return self.prompt_summary_engine.summarize_artifacts(artifacts, rulesets=self.rulesets)
```

</details>

- `prompt_summary_engine = field(kw_only=True, default=Factory(lambda: PromptSummaryEngine()))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.prompt_summary.tool.PromptSummaryTool.prompt_summary_engine"></span>

<span id="griptape.tools.prompt_summary.tool.PromptSummaryTool.summarize"></span>

### summarize(params)

<details>

<summary>

Source Code in <code>griptape/tools/prompt\_summary/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Can be used to summarize text content.",
        "schema": Schema(
            {
                Literal("summary"): Or(
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
def summarize(self, params: dict) -> BaseArtifact:
    summary = params["values"]["summary"]

    if isinstance(summary, str):
        artifacts = ListArtifact([TextArtifact(summary)])
    else:
        memory = self.find_input_memory(summary["memory_name"])
        artifact_namespace = summary["artifact_namespace"]

        if memory is not None:
            artifacts = memory.load_artifacts(artifact_namespace)
        else:
            return ErrorArtifact("memory not found")

    return self.prompt_summary_engine.summarize_artifacts(artifacts, rulesets=self.rulesets)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
