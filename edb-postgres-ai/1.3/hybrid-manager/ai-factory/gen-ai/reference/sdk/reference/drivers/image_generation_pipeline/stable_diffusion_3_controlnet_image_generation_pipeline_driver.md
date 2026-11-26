---
title: stable_diffusion_3_controlnet_image_generation_pipeline_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/stable_diffusion_3_controlnet_image_generation_pipeline_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# stable\_diffusion\_3\_controlnet\_image\_generation\_pipeline\_driver

<span id="griptape.drivers.image_generation_pipeline.stable_diffusion_3_controlnet_image_generation_pipeline_driver.StableDiffusion3ControlNetImageGenerationPipelineDriver"></span>

Bases:
[`StableDiffusion3ImageGenerationPipelineDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/stable_diffusion_3/#griptape.drivers.image_generation_pipeline.stable_diffusion_3.StableDiffusion3ImageGenerationPipelineDriver "StableDiffusion3ImageGenerationPipelineDriver (griptape.drivers.image_generation_pipeline.stable_diffusion_3.StableDiffusion3ImageGenerationPipelineDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Type              | Description                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/stable_diffusion_3_controlnet_image_generation_pipeline_driver/#griptape.drivers.image_generation_pipeline.stable_diffusion_3_controlnet_image_generation_pipeline_driver.StableDiffusion3ControlNetImageGenerationPipelineDriver.controlnet_model" title="controlnet_model = field(kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.image_generation_pipeline.stable_diffusion_3_controlnet_image_generation_pipeline_driver.StableDiffusion3ControlNetImageGenerationPipelineDriver.controlnet_model)"><code class="language-python">controlnet\_model</code></a>                                                                                                     | `str`             | The ControlNet model to use for image generation.<br/>                  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/stable_diffusion_3_controlnet_image_generation_pipeline_driver/#griptape.drivers.image_generation_pipeline.stable_diffusion_3_controlnet_image_generation_pipeline_driver.StableDiffusion3ControlNetImageGenerationPipelineDriver.controlnet_conditioning_scale" title="controlnet_conditioning_scale = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation_pipeline.stable_diffusion_3_controlnet_image_generation_pipeline_driver.StableDiffusion3ControlNetImageGenerationPipelineDriver.controlnet_conditioning_scale)"><code class="language-python">controlnet\_conditioning\_scale</code></a> | `Optional[float]` | The conditioning scale for the ControlNet model. Defaults to None.<br/> |

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_pipeline/stable\_diffusion\_3\_controlnet\_image\_generation\_pipeline\_driver.py</code>

</summary>

```python
@define
class StableDiffusion3ControlNetImageGenerationPipelineDriver(StableDiffusion3ImageGenerationPipelineDriver):
    """Image generation model driver for Stable Diffusion 3 models with ControlNet.

    For more information, see the HuggingFace documentation for the StableDiffusion3ControlNetPipeline:
        https://huggingface.co/docs/diffusers/en/api/pipelines/controlnet_sd3

    Attributes:
        controlnet_model: The ControlNet model to use for image generation.
        controlnet_conditioning_scale: The conditioning scale for the ControlNet model. Defaults to None.
    """

    controlnet_model: str = field(kw_only=True)
    controlnet_conditioning_scale: Optional[float] = field(default=None, kw_only=True, metadata={"serializable": True})

    def prepare_pipeline(self, model: str, device: Optional[str]) -> Any:
        sd3_controlnet_model = import_optional_dependency("diffusers.models.controlnet_sd3").SD3ControlNetModel
        sd3_controlnet_pipeline = import_optional_dependency(
            "diffusers.pipelines.controlnet_sd3.pipeline_stable_diffusion_3_controlnet"
        ).StableDiffusion3ControlNetPipeline

        pipeline_params = {}
        controlnet_pipeline_params = {}
        if self.torch_dtype is not None:
            pipeline_params["torch_dtype"] = self.torch_dtype
            controlnet_pipeline_params["torch_dtype"] = self.torch_dtype

        if self.drop_t5_encoder:
            pipeline_params["text_encoder_3"] = None
            pipeline_params["tokenizer_3"] = None

        # For both Stable Diffusion and ControlNet, models can be provided either
        # as a path to a local file or as a HuggingFace model repo name.
        # We use the from_single_file method if the model is a local file and the
        # from_pretrained method if the model is a local directory or hosted on HuggingFace.
        if os.path.isfile(self.controlnet_model):
            pipeline_params["controlnet"] = sd3_controlnet_model.from_single_file(
                self.controlnet_model, **controlnet_pipeline_params
            )
        else:
            pipeline_params["controlnet"] = sd3_controlnet_model.from_pretrained(
                self.controlnet_model, **controlnet_pipeline_params
            )

        if os.path.isfile(model):
            pipeline = sd3_controlnet_pipeline.from_single_file(model, **pipeline_params)
        else:
            pipeline = sd3_controlnet_pipeline.from_pretrained(model, **pipeline_params)

        if self.enable_model_cpu_offload:
            pipeline.enable_model_cpu_offload()

        if device is not None:
            pipeline.to(device)

        return pipeline

    def make_image_param(self, image: Optional[Image]) -> Optional[dict[str, Image]]:
        if image is None:
            raise ValueError("Input image is required for ControlNet pipelines.")

        return {"control_image": image}

    def make_additional_params(self, negative_prompts: Optional[list[str]], device: Optional[str]) -> dict[str, Any]:
        additional_params = super().make_additional_params(negative_prompts, device)

        del additional_params["height"]
        del additional_params["width"]

        if self.controlnet_conditioning_scale is not None:
            additional_params["controlnet_conditioning_scale"] = self.controlnet_conditioning_scale

        return additional_params
```

</details>

- `controlnet_conditioning_scale = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation_pipeline.stable_diffusion_3_controlnet_image_generation_pipeline_driver.StableDiffusion3ControlNetImageGenerationPipelineDriver.controlnet_conditioning_scale"></span>

- `controlnet_model = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation_pipeline.stable_diffusion_3_controlnet_image_generation_pipeline_driver.StableDiffusion3ControlNetImageGenerationPipelineDriver.controlnet_model"></span>

<span id="griptape.drivers.image_generation_pipeline.stable_diffusion_3_controlnet_image_generation_pipeline_driver.StableDiffusion3ControlNetImageGenerationPipelineDriver.make_additional_params"></span>

### make\_additional\_params(negative\_prompts, device)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_pipeline/stable\_diffusion\_3\_controlnet\_image\_generation\_pipeline\_driver.py</code>

</summary>

```python
def make_additional_params(self, negative_prompts: Optional[list[str]], device: Optional[str]) -> dict[str, Any]:
    additional_params = super().make_additional_params(negative_prompts, device)

    del additional_params["height"]
    del additional_params["width"]

    if self.controlnet_conditioning_scale is not None:
        additional_params["controlnet_conditioning_scale"] = self.controlnet_conditioning_scale

    return additional_params
```

</details>

<span id="griptape.drivers.image_generation_pipeline.stable_diffusion_3_controlnet_image_generation_pipeline_driver.StableDiffusion3ControlNetImageGenerationPipelineDriver.make_image_param"></span>

### make\_image\_param(image)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_pipeline/stable\_diffusion\_3\_controlnet\_image\_generation\_pipeline\_driver.py</code>

</summary>

```python
def make_image_param(self, image: Optional[Image]) -> Optional[dict[str, Image]]:
    if image is None:
        raise ValueError("Input image is required for ControlNet pipelines.")

    return {"control_image": image}
```

</details>

<span id="griptape.drivers.image_generation_pipeline.stable_diffusion_3_controlnet_image_generation_pipeline_driver.StableDiffusion3ControlNetImageGenerationPipelineDriver.prepare_pipeline"></span>

### prepare\_pipeline(model, device)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_pipeline/stable\_diffusion\_3\_controlnet\_image\_generation\_pipeline\_driver.py</code>

</summary>

```python
def prepare_pipeline(self, model: str, device: Optional[str]) -> Any:
    sd3_controlnet_model = import_optional_dependency("diffusers.models.controlnet_sd3").SD3ControlNetModel
    sd3_controlnet_pipeline = import_optional_dependency(
        "diffusers.pipelines.controlnet_sd3.pipeline_stable_diffusion_3_controlnet"
    ).StableDiffusion3ControlNetPipeline

    pipeline_params = {}
    controlnet_pipeline_params = {}
    if self.torch_dtype is not None:
        pipeline_params["torch_dtype"] = self.torch_dtype
        controlnet_pipeline_params["torch_dtype"] = self.torch_dtype

    if self.drop_t5_encoder:
        pipeline_params["text_encoder_3"] = None
        pipeline_params["tokenizer_3"] = None

    # For both Stable Diffusion and ControlNet, models can be provided either
    # as a path to a local file or as a HuggingFace model repo name.
    # We use the from_single_file method if the model is a local file and the
    # from_pretrained method if the model is a local directory or hosted on HuggingFace.
    if os.path.isfile(self.controlnet_model):
        pipeline_params["controlnet"] = sd3_controlnet_model.from_single_file(
            self.controlnet_model, **controlnet_pipeline_params
        )
    else:
        pipeline_params["controlnet"] = sd3_controlnet_model.from_pretrained(
            self.controlnet_model, **controlnet_pipeline_params
        )

    if os.path.isfile(model):
        pipeline = sd3_controlnet_pipeline.from_single_file(model, **pipeline_params)
    else:
        pipeline = sd3_controlnet_pipeline.from_pretrained(model, **pipeline_params)

    if self.enable_model_cpu_offload:
        pipeline.enable_model_cpu_offload()

    if device is not None:
        pipeline.to(device)

    return pipeline
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
