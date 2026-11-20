---
title: bedrock_stable_diffusion_image_generation_model_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/bedrock_stable_diffusion_image_generation_model_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# bedrock\_stable\_diffusion\_image\_generation\_model\_driver

<span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver"></span>

Bases:
[`BaseImageGenerationModelDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/#griptape.drivers.image_generation_model.BaseImageGenerationModelDriver "BaseImageGenerationModelDriver (griptape.drivers.image_generation_model.BaseImageGenerationModelDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type              | Description                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/bedrock_stable_diffusion_image_generation_model_driver/#griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.cfg_scale" title="cfg_scale = field(default=7, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.cfg_scale)"><code class="language-python">cfg\_scale</code></a>                                                 | `int`             | Specifies how strictly image generation follows the provided prompt. Defaults to 7.<br/>                                                   |
| `mask_source`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `int`             | Specifies mask image configuration for image-to-image generations. Defaults to "MASK\_IMAGE\_BLACK".<br/>                                  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/bedrock_stable_diffusion_image_generation_model_driver/#griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.style_preset" title="style_preset = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.style_preset)"><code class="language-python">style\_preset</code></a>                                  | `Optional[str]`   | If provided, specifies a specific image generation style preset.<br/>                                                                      |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/bedrock_stable_diffusion_image_generation_model_driver/#griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.clip_guidance_preset" title="clip_guidance_preset = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.clip_guidance_preset)"><code class="language-python">clip\_guidance\_preset</code></a> | `Optional[str]`   | If provided, requests a specific clip guidance preset to be used in the diffusion process.<br/>                                            |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/bedrock_stable_diffusion_image_generation_model_driver/#griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.sampler" title="sampler = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.sampler)"><code class="language-python">sampler</code></a>                                                       | `Optional[str]`   | If provided, requests a specific sampler to be used in the diffusion process.<br/>                                                         |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/bedrock_stable_diffusion_image_generation_model_driver/#griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.steps" title="steps = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.steps)"><code class="language-python">steps</code></a>                                                               | `Optional[int]`   | If provided, specifies the number of diffusion steps to use in the image generation.<br/>                                                  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/bedrock_stable_diffusion_image_generation_model_driver/#griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.start_schedule" title="start_schedule = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.start_schedule)"><code class="language-python">start\_schedule</code></a>                          | `Optional[float]` | If provided, specifies the start\_schedule parameter used to determine the influence of the input image in image-to-image generation.<br/> |

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_stable\_diffusion\_image\_generation\_model\_driver.py</code>

</summary>

```python
@define
class BedrockStableDiffusionImageGenerationModelDriver(BaseImageGenerationModelDriver):
    """Image generation model driver for Stable Diffusion models on Amazon Bedrock.

    For more information on all supported parameters, see the Stable Diffusion documentation:
        https://platform.stability.ai/docs/api-reference#tag/v1generation

    Attributes:
        cfg_scale: Specifies how strictly image generation follows the provided prompt. Defaults to 7.
        mask_source: Specifies mask image configuration for image-to-image generations. Defaults to "MASK_IMAGE_BLACK".
        style_preset: If provided, specifies a specific image generation style preset.
        clip_guidance_preset: If provided, requests a specific clip guidance preset to be used in the diffusion process.
        sampler: If provided, requests a specific sampler to be used in the diffusion process.
        steps: If provided, specifies the number of diffusion steps to use in the image generation.
        start_schedule: If provided, specifies the start_schedule parameter used to determine the influence of the input
            image in image-to-image generation.
    """

    cfg_scale: int = field(default=7, kw_only=True, metadata={"serializable": True})
    style_preset: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    clip_guidance_preset: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    sampler: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    steps: Optional[int] = field(default=None, kw_only=True, metadata={"serializable": True})
    start_schedule: Optional[float] = field(default=None, kw_only=True, metadata={"serializable": True})

    def text_to_image_request_parameters(
        self,
        prompts: list[str],
        image_width: int,
        image_height: int,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
    ) -> dict:
        return self._request_parameters(
            prompts,
            width=image_width,
            height=image_height,
            negative_prompts=negative_prompts,
            seed=seed,
        )

    def image_variation_request_parameters(
        self,
        prompts: list[str],
        image: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
    ) -> dict:
        return self._request_parameters(prompts, image=image, negative_prompts=negative_prompts, seed=seed)

    def image_inpainting_request_parameters(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
    ) -> dict:
        return self._request_parameters(
            prompts,
            image=image,
            mask=mask,
            mask_source="MASK_IMAGE_BLACK",
            negative_prompts=negative_prompts,
            seed=seed,
        )

    def image_outpainting_request_parameters(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
    ) -> dict:
        return self._request_parameters(
            prompts,
            image=image,
            mask=mask,
            mask_source="MASK_IMAGE_WHITE",
            negative_prompts=negative_prompts,
            seed=seed,
        )

    def _request_parameters(
        self,
        prompts: list[str],
        width: Optional[int] = None,
        height: Optional[int] = None,
        image: Optional[ImageArtifact] = None,
        mask: Optional[ImageArtifact] = None,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
        mask_source: Optional[str] = None,
    ) -> dict:
        if negative_prompts is None:
            negative_prompts = []

        text_prompts = [{"text": prompt, "weight": 1.0} for prompt in prompts]
        text_prompts += [{"text": negative_prompt, "weight": -1.0} for negative_prompt in negative_prompts]

        request = {
            "text_prompts": text_prompts,
            "cfg_scale": self.cfg_scale,
            "style_preset": self.style_preset,
            "clip_guidance_preset": self.clip_guidance_preset,
            "sampler": self.sampler,
            "steps": self.steps,
            "seed": seed,
            "start_schedule": self.start_schedule,
        }

        if image is not None:
            request["init_image"] = image.base64
            request["width"] = image.width
            request["height"] = image.height
        else:
            request["width"] = width
            request["height"] = height

        if mask is not None:
            if not mask_source:
                raise ValueError("mask_source must be provided when mask is provided")

            request["mask_source"] = mask_source
            request["mask_image"] = mask.base64

        return {k: v for k, v in request.items() if v is not None}

    def get_generated_image(self, response: dict) -> bytes:
        image_response = response["artifacts"][0]

        # finishReason may be SUCCESS, CONTENT_FILTERED, or ERROR.
        if image_response.get("finishReason") == "ERROR":
            raise Exception(f"Image generation failed: {image_response.get('finishReason')}")
        if image_response.get("finishReason") == "CONTENT_FILTERED":
            logging.warning("Image generation triggered content filter and may be blurred")

        return base64.decodebytes(bytes(image_response.get("base64"), "utf-8"))
```

</details>

- `cfg_scale = field(default=7, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.cfg_scale"></span>

- `clip_guidance_preset = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.clip_guidance_preset"></span>

- `sampler = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.sampler"></span>

- `start_schedule = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.start_schedule"></span>

- `steps = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.steps"></span>

- `style_preset = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.style_preset"></span>

<span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver._request_parameters"></span>

### \_request\_parameters(prompts, width=None, height=None, image=None, mask=None, negative\_prompts=None, seed=None, mask\_source=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_stable\_diffusion\_image\_generation\_model\_driver.py</code>

</summary>

```python
def _request_parameters(
    self,
    prompts: list[str],
    width: Optional[int] = None,
    height: Optional[int] = None,
    image: Optional[ImageArtifact] = None,
    mask: Optional[ImageArtifact] = None,
    negative_prompts: Optional[list[str]] = None,
    seed: Optional[int] = None,
    mask_source: Optional[str] = None,
) -> dict:
    if negative_prompts is None:
        negative_prompts = []

    text_prompts = [{"text": prompt, "weight": 1.0} for prompt in prompts]
    text_prompts += [{"text": negative_prompt, "weight": -1.0} for negative_prompt in negative_prompts]

    request = {
        "text_prompts": text_prompts,
        "cfg_scale": self.cfg_scale,
        "style_preset": self.style_preset,
        "clip_guidance_preset": self.clip_guidance_preset,
        "sampler": self.sampler,
        "steps": self.steps,
        "seed": seed,
        "start_schedule": self.start_schedule,
    }

    if image is not None:
        request["init_image"] = image.base64
        request["width"] = image.width
        request["height"] = image.height
    else:
        request["width"] = width
        request["height"] = height

    if mask is not None:
        if not mask_source:
            raise ValueError("mask_source must be provided when mask is provided")

        request["mask_source"] = mask_source
        request["mask_image"] = mask.base64

    return {k: v for k, v in request.items() if v is not None}
```

</details>

<span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.get_generated_image"></span>

### get\_generated\_image(response)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_stable\_diffusion\_image\_generation\_model\_driver.py</code>

</summary>

```python
def get_generated_image(self, response: dict) -> bytes:
    image_response = response["artifacts"][0]

    # finishReason may be SUCCESS, CONTENT_FILTERED, or ERROR.
    if image_response.get("finishReason") == "ERROR":
        raise Exception(f"Image generation failed: {image_response.get('finishReason')}")
    if image_response.get("finishReason") == "CONTENT_FILTERED":
        logging.warning("Image generation triggered content filter and may be blurred")

    return base64.decodebytes(bytes(image_response.get("base64"), "utf-8"))
```

</details>

<span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.image_inpainting_request_parameters"></span>

### image\_inpainting\_request\_parameters(prompts, image, mask, negative\_prompts=None, seed=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_stable\_diffusion\_image\_generation\_model\_driver.py</code>

</summary>

```python
def image_inpainting_request_parameters(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
    seed: Optional[int] = None,
) -> dict:
    return self._request_parameters(
        prompts,
        image=image,
        mask=mask,
        mask_source="MASK_IMAGE_BLACK",
        negative_prompts=negative_prompts,
        seed=seed,
    )
```

</details>

<span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.image_outpainting_request_parameters"></span>

### image\_outpainting\_request\_parameters(prompts, image, mask, negative\_prompts=None, seed=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_stable\_diffusion\_image\_generation\_model\_driver.py</code>

</summary>

```python
def image_outpainting_request_parameters(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
    seed: Optional[int] = None,
) -> dict:
    return self._request_parameters(
        prompts,
        image=image,
        mask=mask,
        mask_source="MASK_IMAGE_WHITE",
        negative_prompts=negative_prompts,
        seed=seed,
    )
```

</details>

<span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.image_variation_request_parameters"></span>

### image\_variation\_request\_parameters(prompts, image, negative\_prompts=None, seed=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_stable\_diffusion\_image\_generation\_model\_driver.py</code>

</summary>

```python
def image_variation_request_parameters(
    self,
    prompts: list[str],
    image: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
    seed: Optional[int] = None,
) -> dict:
    return self._request_parameters(prompts, image=image, negative_prompts=negative_prompts, seed=seed)
```

</details>

<span id="griptape.drivers.image_generation_model.bedrock_stable_diffusion_image_generation_model_driver.BedrockStableDiffusionImageGenerationModelDriver.text_to_image_request_parameters"></span>

### text\_to\_image\_request\_parameters(prompts, image\_width, image\_height, negative\_prompts=None, seed=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_stable\_diffusion\_image\_generation\_model\_driver.py</code>

</summary>

```python
def text_to_image_request_parameters(
    self,
    prompts: list[str],
    image_width: int,
    image_height: int,
    negative_prompts: Optional[list[str]] = None,
    seed: Optional[int] = None,
) -> dict:
    return self._request_parameters(
        prompts,
        width=image_width,
        height=image_height,
        negative_prompts=negative_prompts,
        seed=seed,
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
