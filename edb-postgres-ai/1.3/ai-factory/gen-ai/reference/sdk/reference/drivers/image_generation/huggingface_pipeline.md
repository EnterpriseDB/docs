---
title: huggingface_pipeline
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/huggingface_pipeline/
lastModified: 2025-11-07T18:06:05Z
---

# huggingface\_pipeline

- `__all__ = ['HuggingFacePipelineImageGenerationDriver']` <small>module-attribute</small>  <span id="griptape.drivers.image_generation.huggingface_pipeline.__all__"></span>

<span id="griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver"></span>

Bases:
[`BaseImageGenerationDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseImageGenerationDriver "BaseImageGenerationDriver (griptape.drivers.image_generation.BaseImageGenerationDriver)")
, <span title="abc.ABC">ABC</span>

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/huggingface_pipeline/#griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.pipeline_driver" title="pipeline_driver = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.pipeline_driver)"><code class="language-python">pipeline\_driver</code></a>        | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/#griptape.drivers.image_generation_pipeline.BaseDiffusionImageGenerationPipelineDriver" title="BaseDiffusionImageGenerationPipelineDriver (griptape.drivers.image_generation_pipeline.BaseDiffusionImageGenerationPipelineDriver)"><code class="language-python">BaseDiffusionImageGenerationPipelineDriver</code></a> | A pipeline image generation model driver typed for the specific pipeline required by the model.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/huggingface_pipeline/#griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.device" title="device = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.device)"><code class="language-python">device</code></a>                               | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                                                                                                   | The hardware device used for inference. For example, "cpu", "cuda", or "mps".<br/>                   |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/huggingface_pipeline/#griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.output_format" title="output_format = field(default='png', kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.output_format)"><code class="language-python">output\_format</code></a> | `str`                                                                                                                                                                                                                                                                                                                                                                                                                                                             | The format the generated image is returned in. Defaults to "png".<br/>                               |

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/huggingface\_pipeline\_image\_generation\_driver.py</code>

</summary>

```python
@define
class HuggingFacePipelineImageGenerationDriver(BaseImageGenerationDriver, ABC):
    """Image generation driver for models hosted by Hugging Face's Diffusion Pipeline.

    For more information, see the HuggingFace documentation for Diffusers:
            https://huggingface.co/docs/diffusers/en/index

    Attributes:
        pipeline_driver: A pipeline image generation model driver typed for the specific pipeline required by the model.
        device: The hardware device used for inference. For example, "cpu", "cuda", or "mps".
        output_format: The format the generated image is returned in. Defaults to "png".
    """

    pipeline_driver: BaseDiffusionImageGenerationPipelineDriver = field(kw_only=True, metadata={"serializable": True})
    device: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    output_format: str = field(default="png", kw_only=True, metadata={"serializable": True})

    def try_text_to_image(self, prompts: list[str], negative_prompts: Optional[list[str]] = None) -> ImageArtifact:
        pipeline = self.pipeline_driver.prepare_pipeline(self.model, self.device)

        prompt = ", ".join(prompts)
        output_image = pipeline(
            prompt, **self.pipeline_driver.make_additional_params(negative_prompts, self.device)
        ).images[0]

        buffer = io.BytesIO()
        output_image.save(buffer, format=self.output_format.upper())

        return ImageArtifact(
            value=buffer.getvalue(),
            format=self.output_format.lower(),
            height=output_image.height,
            width=output_image.width,
            meta={"prompt": prompt},
        )

    def try_image_variation(
        self, prompts: list[str], image: ImageArtifact, negative_prompts: Optional[list[str]] = None
    ) -> ImageArtifact:
        pil_image = import_optional_dependency("PIL.Image")

        pipeline = self.pipeline_driver.prepare_pipeline(self.model, self.device)

        prompt = ", ".join(prompts)
        input_image = pil_image.open(io.BytesIO(image.value))
        # The size of the input image drives the size of the output image.
        # Resize the input image to the configured dimensions.
        output_width, output_height = self.pipeline_driver.output_image_dimensions
        if input_image.height != output_height or input_image.width != output_width:
            input_image = input_image.resize((output_width, output_height))

        output_image = pipeline(
            prompt,
            **self.pipeline_driver.make_image_param(input_image),
            **self.pipeline_driver.make_additional_params(negative_prompts, self.device),
        ).images[0]

        buffer = io.BytesIO()
        output_image.save(buffer, format=self.output_format.upper())

        return ImageArtifact(
            value=buffer.getvalue(),
            format=self.output_format.lower(),
            height=output_image.height,
            width=output_image.width,
            meta={"prompt": prompt},
        )

    def try_image_inpainting(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact:
        raise NotImplementedError("Inpainting is not supported by this driver.")

    def try_image_outpainting(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact:
        raise NotImplementedError("Outpainting is not supported by this driver.")
```

</details>

- `device = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.device"></span>

- `output_format = field(default='png', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.output_format"></span>

- `pipeline_driver = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.pipeline_driver"></span>

<span id="griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.try_image_inpainting"></span>

### try\_image\_inpainting(prompts, image, mask, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/huggingface\_pipeline\_image\_generation\_driver.py</code>

</summary>

```python
def try_image_inpainting(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact:
    raise NotImplementedError("Inpainting is not supported by this driver.")
```

</details>

<span id="griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.try_image_outpainting"></span>

### try\_image\_outpainting(prompts, image, mask, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/huggingface\_pipeline\_image\_generation\_driver.py</code>

</summary>

```python
def try_image_outpainting(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact:
    raise NotImplementedError("Outpainting is not supported by this driver.")
```

</details>

<span id="griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.try_image_variation"></span>

### try\_image\_variation(prompts, image, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/huggingface\_pipeline\_image\_generation\_driver.py</code>

</summary>

```python
def try_image_variation(
    self, prompts: list[str], image: ImageArtifact, negative_prompts: Optional[list[str]] = None
) -> ImageArtifact:
    pil_image = import_optional_dependency("PIL.Image")

    pipeline = self.pipeline_driver.prepare_pipeline(self.model, self.device)

    prompt = ", ".join(prompts)
    input_image = pil_image.open(io.BytesIO(image.value))
    # The size of the input image drives the size of the output image.
    # Resize the input image to the configured dimensions.
    output_width, output_height = self.pipeline_driver.output_image_dimensions
    if input_image.height != output_height or input_image.width != output_width:
        input_image = input_image.resize((output_width, output_height))

    output_image = pipeline(
        prompt,
        **self.pipeline_driver.make_image_param(input_image),
        **self.pipeline_driver.make_additional_params(negative_prompts, self.device),
    ).images[0]

    buffer = io.BytesIO()
    output_image.save(buffer, format=self.output_format.upper())

    return ImageArtifact(
        value=buffer.getvalue(),
        format=self.output_format.lower(),
        height=output_image.height,
        width=output_image.width,
        meta={"prompt": prompt},
    )
```

</details>

<span id="griptape.drivers.image_generation.huggingface_pipeline.HuggingFacePipelineImageGenerationDriver.try_text_to_image"></span>

### try\_text\_to\_image(prompts, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/huggingface\_pipeline\_image\_generation\_driver.py</code>

</summary>

```python
def try_text_to_image(self, prompts: list[str], negative_prompts: Optional[list[str]] = None) -> ImageArtifact:
    pipeline = self.pipeline_driver.prepare_pipeline(self.model, self.device)

    prompt = ", ".join(prompts)
    output_image = pipeline(
        prompt, **self.pipeline_driver.make_additional_params(negative_prompts, self.device)
    ).images[0]

    buffer = io.BytesIO()
    output_image.save(buffer, format=self.output_format.upper())

    return ImageArtifact(
        value=buffer.getvalue(),
        format=self.output_format.lower(),
        height=output_image.height,
        width=output_image.width,
        meta={"prompt": prompt},
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
