---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/variation_image_generation/tool/
lastModified: 2026-05-22T19:45:14+05:30
---

# tool

<span id="griptape.tools.variation_image_generation.tool.VariationImageGenerationTool"></span>

Bases:
[`BaseImageGenerationTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/base_image_generation_tool/#griptape.tools.base_image_generation_tool.BaseImageGenerationTool "BaseImageGenerationTool (griptape.tools.base_image_generation_tool.BaseImageGenerationTool)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/variation_image_generation/tool/#griptape.tools.variation_image_generation.tool.VariationImageGenerationTool.image_generation_driver" title="image_generation_driver = field(kw_only=True)           class-attribute       instance-attribute    (griptape.tools.variation_image_generation.tool.VariationImageGenerationTool.image_generation_driver)"><code class="language-python">image\_generation\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseImageGenerationDriver" title="BaseImageGenerationDriver (griptape.drivers.image_generation.BaseImageGenerationDriver)"><code class="language-python">BaseImageGenerationDriver</code></a> | The image generation driver used to generate the image.<br/>                   |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir" title="output_dir = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.variation_image_generation.tool.VariationImageGenerationTool.output_dir)"><code class="language-python">output\_dir</code></a>                                                     | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk in output\_dir.<br/>  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file" title="output_file = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.variation_image_generation.tool.VariationImageGenerationTool.output_file)"><code class="language-python">output\_file</code></a>                                                 | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk as output\_file.<br/> |

<details>

<summary>

Source Code in <code>griptape/tools/variation\_image\_generation/tool.py</code>

</summary>

```python
@define
class VariationImageGenerationTool(BaseImageGenerationTool):
    """A tool that can be used to generate prompted variations of an image.

    Attributes:
        image_generation_driver: The image generation driver used to generate the image.
        output_dir: If provided, the generated image will be written to disk in output_dir.
        output_file: If provided, the generated image will be written to disk as output_file.
    """

    image_generation_driver: BaseImageGenerationDriver = field(kw_only=True)
    image_loader: ImageLoader = field(default=ImageLoader(), kw_only=True)

    @activity(
        config={
            "description": "Generates a variation of a given input image file.",
            "schema": Schema(
                {
                    Literal("prompt", description=BaseImageGenerationTool.PROMPT_DESCRIPTION): str,
                    Literal("negative_prompt", description=BaseImageGenerationTool.NEGATIVE_PROMPT_DESCRIPTION): str,
                    Literal(
                        "image_file",
                        description="The path to an image file to be used as a base to generate variations from.",
                    ): str,
                },
            ),
        },
    )
    def image_variation_from_file(self, params: dict[str, dict[str, str]]) -> ImageArtifact | ErrorArtifact:
        prompt = params["values"]["prompt"]
        negative_prompt = params["values"]["negative_prompt"]
        image_file = params["values"]["image_file"]

        image_artifact = self.image_loader.load(image_file)

        return self._generate_variation(prompt, negative_prompt, image_artifact)

    @activity(
        config={
            "description": "Generates a variation of a given input image artifact in memory.",
            "schema": Schema(
                {
                    Literal("prompt", description=BaseImageGenerationTool.PROMPT_DESCRIPTION): str,
                    Literal("negative_prompt", description=BaseImageGenerationTool.NEGATIVE_PROMPT_DESCRIPTION): str,
                    "memory_name": str,
                    "artifact_namespace": str,
                    "artifact_name": str,
                },
            ),
        },
    )
    def image_variation_from_memory(self, params: dict[str, dict[str, str]]) -> ImageArtifact | ErrorArtifact:
        prompt = params["values"]["prompt"]
        negative_prompt = params["values"]["negative_prompt"]
        artifact_namespace = params["values"]["artifact_namespace"]
        artifact_name = params["values"]["artifact_name"]
        memory = self.find_input_memory(params["values"]["memory_name"])

        if memory is None:
            return ErrorArtifact("memory not found")

        try:
            image_artifact = load_artifact_from_memory(memory, artifact_namespace, artifact_name, ImageArtifact)
        except ValueError as e:
            return ErrorArtifact(str(e))

        return self._generate_variation(prompt, negative_prompt, cast("ImageArtifact", image_artifact))

    def _generate_variation(
        self, prompt: str, negative_prompt: str, image_artifact: ImageArtifact
    ) -> ImageArtifact | ErrorArtifact:
        output_artifact = self.image_generation_driver.run_image_variation(
            prompts=[prompt], negative_prompts=[negative_prompt], image=image_artifact
        )

        if self.output_dir or self.output_file:
            self._write_to_file(output_artifact)

        return output_artifact
```

</details>

- `image_generation_driver = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.variation_image_generation.tool.VariationImageGenerationTool.image_generation_driver"></span>

- `image_loader = field(default=ImageLoader(), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.variation_image_generation.tool.VariationImageGenerationTool.image_loader"></span>

<span id="griptape.tools.variation_image_generation.tool.VariationImageGenerationTool._generate_variation"></span>

### \_generate\_variation(prompt, negative\_prompt, image\_artifact)

<details>

<summary>

Source Code in <code>griptape/tools/variation\_image\_generation/tool.py</code>

</summary>

```python
def _generate_variation(
    self, prompt: str, negative_prompt: str, image_artifact: ImageArtifact
) -> ImageArtifact | ErrorArtifact:
    output_artifact = self.image_generation_driver.run_image_variation(
        prompts=[prompt], negative_prompts=[negative_prompt], image=image_artifact
    )

    if self.output_dir or self.output_file:
        self._write_to_file(output_artifact)

    return output_artifact
```

</details>

<span id="griptape.tools.variation_image_generation.tool.VariationImageGenerationTool.image_variation_from_file"></span>

### image\_variation\_from\_file(params)

<details>

<summary>

Source Code in <code>griptape/tools/variation\_image\_generation/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Generates a variation of a given input image file.",
        "schema": Schema(
            {
                Literal("prompt", description=BaseImageGenerationTool.PROMPT_DESCRIPTION): str,
                Literal("negative_prompt", description=BaseImageGenerationTool.NEGATIVE_PROMPT_DESCRIPTION): str,
                Literal(
                    "image_file",
                    description="The path to an image file to be used as a base to generate variations from.",
                ): str,
            },
        ),
    },
)
def image_variation_from_file(self, params: dict[str, dict[str, str]]) -> ImageArtifact | ErrorArtifact:
    prompt = params["values"]["prompt"]
    negative_prompt = params["values"]["negative_prompt"]
    image_file = params["values"]["image_file"]

    image_artifact = self.image_loader.load(image_file)

    return self._generate_variation(prompt, negative_prompt, image_artifact)
```

</details>

<span id="griptape.tools.variation_image_generation.tool.VariationImageGenerationTool.image_variation_from_memory"></span>

### image\_variation\_from\_memory(params)

<details>

<summary>

Source Code in <code>griptape/tools/variation\_image\_generation/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Generates a variation of a given input image artifact in memory.",
        "schema": Schema(
            {
                Literal("prompt", description=BaseImageGenerationTool.PROMPT_DESCRIPTION): str,
                Literal("negative_prompt", description=BaseImageGenerationTool.NEGATIVE_PROMPT_DESCRIPTION): str,
                "memory_name": str,
                "artifact_namespace": str,
                "artifact_name": str,
            },
        ),
    },
)
def image_variation_from_memory(self, params: dict[str, dict[str, str]]) -> ImageArtifact | ErrorArtifact:
    prompt = params["values"]["prompt"]
    negative_prompt = params["values"]["negative_prompt"]
    artifact_namespace = params["values"]["artifact_namespace"]
    artifact_name = params["values"]["artifact_name"]
    memory = self.find_input_memory(params["values"]["memory_name"])

    if memory is None:
        return ErrorArtifact("memory not found")

    try:
        image_artifact = load_artifact_from_memory(memory, artifact_namespace, artifact_name, ImageArtifact)
    except ValueError as e:
        return ErrorArtifact(str(e))

    return self._generate_variation(prompt, negative_prompt, cast("ImageArtifact", image_artifact))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
