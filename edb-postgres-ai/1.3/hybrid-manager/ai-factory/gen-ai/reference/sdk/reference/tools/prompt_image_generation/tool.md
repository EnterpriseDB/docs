---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/prompt_image_generation/tool/
lastModified: 2026-05-22T19:45:14+05:30
---

# tool

<span id="griptape.tools.prompt_image_generation.tool.PromptImageGenerationTool"></span>

Bases:
[`BaseImageGenerationTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseImageGenerationTool "BaseImageGenerationTool (griptape.tools.BaseImageGenerationTool)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/prompt_image_generation/tool/#griptape.tools.prompt_image_generation.tool.PromptImageGenerationTool.image_generation_driver" title="image_generation_driver = field(kw_only=True)           class-attribute       instance-attribute    (griptape.tools.prompt_image_generation.tool.PromptImageGenerationTool.image_generation_driver)"><code class="language-python">image\_generation\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseImageGenerationDriver" title="BaseImageGenerationDriver (griptape.drivers.image_generation.BaseImageGenerationDriver)"><code class="language-python">BaseImageGenerationDriver</code></a> | The image generation driver used to generate the image.<br/>                   |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir" title="output_dir = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.prompt_image_generation.tool.PromptImageGenerationTool.output_dir)"><code class="language-python">output\_dir</code></a>                                            | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk in output\_dir.<br/>  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file" title="output_file = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.prompt_image_generation.tool.PromptImageGenerationTool.output_file)"><code class="language-python">output\_file</code></a>                                        | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk as output\_file.<br/> |

<details>

<summary>

Source Code in <code>griptape/tools/prompt\_image\_generation/tool.py</code>

</summary>

```python
@define
class PromptImageGenerationTool(BaseImageGenerationTool):
    """A tool that can be used to generate an image from a text prompt.

    Attributes:
        image_generation_driver: The image generation driver used to generate the image.
        output_dir: If provided, the generated image will be written to disk in output_dir.
        output_file: If provided, the generated image will be written to disk as output_file.
    """

    image_generation_driver: BaseImageGenerationDriver = field(kw_only=True)

    @activity(
        config={
            "description": "Generates an image from text prompts.",
            "schema": Schema(
                {
                    Literal("prompt", description=BaseImageGenerationTool.PROMPT_DESCRIPTION): str,
                    Literal("negative_prompt", description=BaseImageGenerationTool.NEGATIVE_PROMPT_DESCRIPTION): str,
                }
            ),
        },
    )
    def generate_image(self, params: dict[str, dict[str, str]]) -> ImageArtifact | ErrorArtifact:
        prompt = params["values"]["prompt"]
        negative_prompt = params["values"]["negative_prompt"]

        output_artifact = self.image_generation_driver.run_text_to_image(
            prompts=[prompt], negative_prompts=[negative_prompt]
        )

        if self.output_dir or self.output_file:
            self._write_to_file(output_artifact)

        return output_artifact
```

</details>

- `image_generation_driver = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.prompt_image_generation.tool.PromptImageGenerationTool.image_generation_driver"></span>

<span id="griptape.tools.prompt_image_generation.tool.PromptImageGenerationTool.generate_image"></span>

### generate\_image(params)

<details>

<summary>

Source Code in <code>griptape/tools/prompt\_image\_generation/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Generates an image from text prompts.",
        "schema": Schema(
            {
                Literal("prompt", description=BaseImageGenerationTool.PROMPT_DESCRIPTION): str,
                Literal("negative_prompt", description=BaseImageGenerationTool.NEGATIVE_PROMPT_DESCRIPTION): str,
            }
        ),
    },
)
def generate_image(self, params: dict[str, dict[str, str]]) -> ImageArtifact | ErrorArtifact:
    prompt = params["values"]["prompt"]
    negative_prompt = params["values"]["negative_prompt"]

    output_artifact = self.image_generation_driver.run_text_to_image(
        prompts=[prompt], negative_prompts=[negative_prompt]
    )

    if self.output_dir or self.output_file:
        self._write_to_file(output_artifact)

    return output_artifact
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
