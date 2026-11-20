---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/outpainting_image_generation/tool/
lastModified: 2026-05-22T19:45:14+05:30
---

# tool

<span id="griptape.tools.outpainting_image_generation.tool.OutpaintingImageGenerationTool"></span>

Bases:
[`BaseImageGenerationTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseImageGenerationTool "BaseImageGenerationTool (griptape.tools.BaseImageGenerationTool)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/outpainting_image_generation/tool/#griptape.tools.outpainting_image_generation.tool.OutpaintingImageGenerationTool.image_generation_driver" title="image_generation_driver = field(kw_only=True)           class-attribute       instance-attribute    (griptape.tools.outpainting_image_generation.tool.OutpaintingImageGenerationTool.image_generation_driver)"><code class="language-python">image\_generation\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseImageGenerationDriver" title="BaseImageGenerationDriver (griptape.drivers.image_generation.BaseImageGenerationDriver)"><code class="language-python">BaseImageGenerationDriver</code></a> | The image generation driver used to generate the image.<br/>                   |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir" title="output_dir = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.outpainting_image_generation.tool.OutpaintingImageGenerationTool.output_dir)"><code class="language-python">output\_dir</code></a>                                                           | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk in output\_dir.<br/>  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file" title="output_file = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.outpainting_image_generation.tool.OutpaintingImageGenerationTool.output_file)"><code class="language-python">output\_file</code></a>                                                       | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk as output\_file.<br/> |

<details>

<summary>

Source Code in <code>griptape/tools/outpainting\_image\_generation/tool.py</code>

</summary>

```python
@define
class OutpaintingImageGenerationTool(BaseImageGenerationTool):
    """A tool that can be used to generate prompted outpaintings of an image.

    Attributes:
        image_generation_driver: The image generation driver used to generate the image.
        output_dir: If provided, the generated image will be written to disk in output_dir.
        output_file: If provided, the generated image will be written to disk as output_file.
    """

    image_generation_driver: BaseImageGenerationDriver = field(kw_only=True)
    image_loader: ImageLoader = field(default=ImageLoader(), kw_only=True)

    @activity(
        config={
            "description": "Modifies an image outside a specified mask area using image and mask files.",
            "schema": Schema(
                {
                    Literal("prompt", description=BaseImageGenerationTool.PROMPT_DESCRIPTION): str,
                    Literal("negative_prompt", description=BaseImageGenerationTool.NEGATIVE_PROMPT_DESCRIPTION): str,
                    Literal(
                        "image_file",
                        description="The path to an image file to be used as a base to generate variations from.",
                    ): str,
                    Literal("mask_file", description="The path to mask image file."): str,
                },
            ),
        },
    )
    def image_outpainting_from_file(self, params: dict[str, dict[str, str]]) -> ImageArtifact | ErrorArtifact:
        prompt = params["values"]["prompt"]
        negative_prompt = params["values"]["negative_prompt"]
        image_file = params["values"]["image_file"]
        mask_file = params["values"]["mask_file"]

        input_artifact = self.image_loader.load(image_file)
        mask_artifact = self.image_loader.load(mask_file)

        return self._generate_outpainting(prompt, negative_prompt, input_artifact, mask_artifact)

    @activity(
        config={
            "description": "Modifies an image outside a specified mask area using image and mask artifacts in memory.",
            "schema": Schema(
                {
                    Literal("prompt", description=BaseImageGenerationTool.PROMPT_DESCRIPTION): str,
                    Literal("negative_prompt", description=BaseImageGenerationTool.NEGATIVE_PROMPT_DESCRIPTION): str,
                    "memory_name": str,
                    "image_artifact_namespace": str,
                    "mask_artifact_namespace": str,
                },
            ),
        },
    )
    def image_outpainting_from_memory(self, params: dict[str, dict[str, str]]) -> ImageArtifact | ErrorArtifact:
        prompt = params["values"]["prompt"]
        negative_prompt = params["values"]["negative_prompt"]
        image_artifact_namespace = params["values"]["image_artifact_namespace"]
        image_artifact_name = params["values"]["image_artifact_name"]
        mask_artifact_namespace = params["values"]["mask_artifact_namespace"]
        mask_artifact_name = params["values"]["mask_artifact_name"]
        memory = self.find_input_memory(params["values"]["memory_name"])

        if memory is None:
            return ErrorArtifact("memory not found")

        try:
            image_artifact = load_artifact_from_memory(
                memory,
                image_artifact_namespace,
                image_artifact_name,
                ImageArtifact,
            )
            mask_artifact = load_artifact_from_memory(
                memory,
                mask_artifact_namespace,
                mask_artifact_name,
                ImageArtifact,
            )
        except ValueError as e:
            return ErrorArtifact(str(e))

        return self._generate_outpainting(
            prompt, negative_prompt, cast("ImageArtifact", image_artifact), cast("ImageArtifact", mask_artifact)
        )

    def _generate_outpainting(
        self, prompt: str, negative_prompt: str, image_artifact: ImageArtifact, mask_artifact: ImageArtifact
    ) -> ImageArtifact | ErrorArtifact:
        output_artifact = self.image_generation_driver.run_image_outpainting(
            prompts=[prompt], negative_prompts=[negative_prompt], image=image_artifact, mask=mask_artifact
        )

        if self.output_dir or self.output_file:
            self._write_to_file(output_artifact)

        return output_artifact
```

</details>

- `image_generation_driver = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.outpainting_image_generation.tool.OutpaintingImageGenerationTool.image_generation_driver"></span>

- `image_loader = field(default=ImageLoader(), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.outpainting_image_generation.tool.OutpaintingImageGenerationTool.image_loader"></span>

<span id="griptape.tools.outpainting_image_generation.tool.OutpaintingImageGenerationTool._generate_outpainting"></span>

### \_generate\_outpainting(prompt, negative\_prompt, image\_artifact, mask\_artifact)

<details>

<summary>

Source Code in <code>griptape/tools/outpainting\_image\_generation/tool.py</code>

</summary>

```python
def _generate_outpainting(
    self, prompt: str, negative_prompt: str, image_artifact: ImageArtifact, mask_artifact: ImageArtifact
) -> ImageArtifact | ErrorArtifact:
    output_artifact = self.image_generation_driver.run_image_outpainting(
        prompts=[prompt], negative_prompts=[negative_prompt], image=image_artifact, mask=mask_artifact
    )

    if self.output_dir or self.output_file:
        self._write_to_file(output_artifact)

    return output_artifact
```

</details>

<span id="griptape.tools.outpainting_image_generation.tool.OutpaintingImageGenerationTool.image_outpainting_from_file"></span>

### image\_outpainting\_from\_file(params)

<details>

<summary>

Source Code in <code>griptape/tools/outpainting\_image\_generation/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Modifies an image outside a specified mask area using image and mask files.",
        "schema": Schema(
            {
                Literal("prompt", description=BaseImageGenerationTool.PROMPT_DESCRIPTION): str,
                Literal("negative_prompt", description=BaseImageGenerationTool.NEGATIVE_PROMPT_DESCRIPTION): str,
                Literal(
                    "image_file",
                    description="The path to an image file to be used as a base to generate variations from.",
                ): str,
                Literal("mask_file", description="The path to mask image file."): str,
            },
        ),
    },
)
def image_outpainting_from_file(self, params: dict[str, dict[str, str]]) -> ImageArtifact | ErrorArtifact:
    prompt = params["values"]["prompt"]
    negative_prompt = params["values"]["negative_prompt"]
    image_file = params["values"]["image_file"]
    mask_file = params["values"]["mask_file"]

    input_artifact = self.image_loader.load(image_file)
    mask_artifact = self.image_loader.load(mask_file)

    return self._generate_outpainting(prompt, negative_prompt, input_artifact, mask_artifact)
```

</details>

<span id="griptape.tools.outpainting_image_generation.tool.OutpaintingImageGenerationTool.image_outpainting_from_memory"></span>

### image\_outpainting\_from\_memory(params)

<details>

<summary>

Source Code in <code>griptape/tools/outpainting\_image\_generation/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Modifies an image outside a specified mask area using image and mask artifacts in memory.",
        "schema": Schema(
            {
                Literal("prompt", description=BaseImageGenerationTool.PROMPT_DESCRIPTION): str,
                Literal("negative_prompt", description=BaseImageGenerationTool.NEGATIVE_PROMPT_DESCRIPTION): str,
                "memory_name": str,
                "image_artifact_namespace": str,
                "mask_artifact_namespace": str,
            },
        ),
    },
)
def image_outpainting_from_memory(self, params: dict[str, dict[str, str]]) -> ImageArtifact | ErrorArtifact:
    prompt = params["values"]["prompt"]
    negative_prompt = params["values"]["negative_prompt"]
    image_artifact_namespace = params["values"]["image_artifact_namespace"]
    image_artifact_name = params["values"]["image_artifact_name"]
    mask_artifact_namespace = params["values"]["mask_artifact_namespace"]
    mask_artifact_name = params["values"]["mask_artifact_name"]
    memory = self.find_input_memory(params["values"]["memory_name"])

    if memory is None:
        return ErrorArtifact("memory not found")

    try:
        image_artifact = load_artifact_from_memory(
            memory,
            image_artifact_namespace,
            image_artifact_name,
            ImageArtifact,
        )
        mask_artifact = load_artifact_from_memory(
            memory,
            mask_artifact_namespace,
            mask_artifact_name,
            ImageArtifact,
        )
    except ValueError as e:
        return ErrorArtifact(str(e))

    return self._generate_outpainting(
        prompt, negative_prompt, cast("ImageArtifact", image_artifact), cast("ImageArtifact", mask_artifact)
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
