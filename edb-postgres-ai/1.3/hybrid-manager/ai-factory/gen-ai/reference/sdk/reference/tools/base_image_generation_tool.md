---
title: base_image_generation_tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/base_image_generation_tool/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_image\_generation\_tool

<span id="griptape.tools.base_image_generation_tool.BaseImageGenerationTool"></span>

Bases:
[`ArtifactFileOutputMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin "ArtifactFileOutputMixin (griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin)")
,  [`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")

<details>

<summary>

Source Code in <code>griptape/tools/base\_image\_generation\_tool.py</code>

</summary>

```python
@define
class BaseImageGenerationTool(ArtifactFileOutputMixin, BaseTool):
    """A base class for tools that generate images from text prompts."""

    PROMPT_DESCRIPTION = "Features and qualities to include in the generated image, descriptive and succinct."
    NEGATIVE_PROMPT_DESCRIPTION = (
        "Features and qualities to avoid in the generated image. Affirmatively describe "
        "what to avoid, for example: to avoid the color red, include 'red' "
        "rather than 'no red'."
    )
```

</details>

- `NEGATIVE_PROMPT_DESCRIPTION = "Features and qualities to avoid in the generated image. Affirmatively describe what to avoid, for example: to avoid the color red, include 'red' rather than 'no red'."` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.base_image_generation_tool.BaseImageGenerationTool.NEGATIVE_PROMPT_DESCRIPTION"></span>

- `PROMPT_DESCRIPTION = 'Features and qualities to include in the generated image, descriptive and succinct.'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.base_image_generation_tool.BaseImageGenerationTool.PROMPT_DESCRIPTION"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
