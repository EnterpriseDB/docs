---
title: bedrock_titan
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/bedrock_titan/
lastModified: 2026-05-22T19:45:14+05:30
---

# bedrock\_titan

- `__all__ = ['BedrockTitanImageGenerationModelDriver']` <small>module-attribute</small>  <span id="griptape.drivers.image_generation_model.bedrock_titan.__all__"></span>

<span id="griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver"></span>

Bases:
[`BaseImageGenerationModelDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/#griptape.drivers.image_generation_model.BaseImageGenerationModelDriver "BaseImageGenerationModelDriver (griptape.drivers.image_generation_model.BaseImageGenerationModelDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Type  | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- | ------------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/bedrock_titan/#griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.quality" title="quality = field(default='standard', kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.quality)"><code class="language-python">quality</code></a>                                     | `str` | The quality of the generated image, defaults to standard.<br/>                                          |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/bedrock_titan/#griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.cfg_scale" title="cfg_scale = field(default=7, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.cfg_scale)"><code class="language-python">cfg\_scale</code></a>                                     | `int` | Specifies how strictly image generation follows the provided prompt. Defaults to 7, (1.0 to 10.0].<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/bedrock_titan/#griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.outpainting_mode" title="outpainting_mode = field(default='PRECISE', kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.outpainting_mode)"><code class="language-python">outpainting\_mode</code></a> | `str` | Specifies the outpainting mode, defaults to PRECISE.<br/>                                               |

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_titan\_image\_generation\_model\_driver.py</code>

</summary>

```python
@define
class BedrockTitanImageGenerationModelDriver(BaseImageGenerationModelDriver):
    """Image Generation Model Driver for Amazon Bedrock Titan Image Generator.

    Attributes:
        quality: The quality of the generated image, defaults to standard.
        cfg_scale: Specifies how strictly image generation follows the provided prompt. Defaults to 7, (1.0 to 10.0].
        outpainting_mode: Specifies the outpainting mode, defaults to PRECISE.
    """

    quality: str = field(default="standard", kw_only=True, metadata={"serializable": True})
    cfg_scale: int = field(default=7, kw_only=True, metadata={"serializable": True})
    outpainting_mode: str = field(default="PRECISE", kw_only=True, metadata={"serializable": True})

    def text_to_image_request_parameters(
        self,
        prompts: list[str],
        image_width: int,
        image_height: int,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
    ) -> dict:
        prompt = ", ".join(prompts)

        request = {
            "taskType": "TEXT_IMAGE",
            "textToImageParams": {"text": prompt},
            "imageGenerationConfig": {
                "numberOfImages": 1,
                "quality": self.quality,
                "width": image_width,
                "height": image_height,
                "cfgScale": self.cfg_scale,
            },
        }

        if negative_prompts:
            request["textToImageParams"]["negativeText"] = ", ".join(negative_prompts)

        if seed:
            request["imageGenerationConfig"]["seed"] = seed

        return self._add_common_params(request, image_width, image_height, seed=seed)

    def image_variation_request_parameters(
        self,
        prompts: list[str],
        image: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
    ) -> dict:
        prompt = ", ".join(prompts)

        request = {
            "taskType": "IMAGE_VARIATION",
            "imageVariationParams": {"text": prompt, "images": [image.base64]},
            "imageGenerationConfig": {
                "numberOfImages": 1,
                "quality": self.quality,
                "width": image.width,
                "height": image.height,
                "cfgScale": self.cfg_scale,
            },
        }

        if negative_prompts:
            request["imageVariationParams"]["negativeText"] = ", ".join(negative_prompts)

        if seed:
            request["imageGenerationConfig"]["seed"] = seed

        return self._add_common_params(request, image.width, image.height, seed=seed)

    def image_inpainting_request_parameters(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
    ) -> dict:
        prompt = ", ".join(prompts)

        request = {
            "taskType": "INPAINTING",
            "inPaintingParams": {"text": prompt, "image": image.base64, "maskImage": mask.base64},
        }

        if negative_prompts:
            request["inPaintingParams"]["negativeText"] = ", ".join(negative_prompts)

        return self._add_common_params(request, image.width, image.height, seed=seed)

    def image_outpainting_request_parameters(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
    ) -> dict:
        prompt = ", ".join(prompts)

        request = {
            "taskType": "OUTPAINTING",
            "outPaintingParams": {
                "text": prompt,
                "image": image.base64,
                "maskImage": mask.base64,
                "outPaintingMode": self.outpainting_mode,
            },
        }

        if negative_prompts:
            request["outPaintingParams"]["negativeText"] = ", ".join(negative_prompts)

        return self._add_common_params(request, image.width, image.height, seed=seed)

    def get_generated_image(self, response: dict) -> bytes:
        b64_image_data = response["images"][0]

        return base64.decodebytes(bytes(b64_image_data, "utf-8"))

    def _add_common_params(self, request: dict[str, Any], width: int, height: int, seed: Optional[int] = None) -> dict:
        request["imageGenerationConfig"] = {
            "numberOfImages": 1,
            "quality": self.quality,
            "width": width,
            "height": height,
            "cfgScale": self.cfg_scale,
        }

        if seed:
            request["imageGenerationConfig"]["seed"] = seed

        return request
```

</details>

- `cfg_scale = field(default=7, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.cfg_scale"></span>

- `outpainting_mode = field(default='PRECISE', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.outpainting_mode"></span>

- `quality = field(default='standard', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.quality"></span>

<span id="griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver._add_common_params"></span>

### \_add\_common\_params(request, width, height, seed=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_titan\_image\_generation\_model\_driver.py</code>

</summary>

```python
def _add_common_params(self, request: dict[str, Any], width: int, height: int, seed: Optional[int] = None) -> dict:
    request["imageGenerationConfig"] = {
        "numberOfImages": 1,
        "quality": self.quality,
        "width": width,
        "height": height,
        "cfgScale": self.cfg_scale,
    }

    if seed:
        request["imageGenerationConfig"]["seed"] = seed

    return request
```

</details>

<span id="griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.get_generated_image"></span>

### get\_generated\_image(response)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_titan\_image\_generation\_model\_driver.py</code>

</summary>

```python
def get_generated_image(self, response: dict) -> bytes:
    b64_image_data = response["images"][0]

    return base64.decodebytes(bytes(b64_image_data, "utf-8"))
```

</details>

<span id="griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.image_inpainting_request_parameters"></span>

### image\_inpainting\_request\_parameters(prompts, image, mask, negative\_prompts=None, seed=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_titan\_image\_generation\_model\_driver.py</code>

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
    prompt = ", ".join(prompts)

    request = {
        "taskType": "INPAINTING",
        "inPaintingParams": {"text": prompt, "image": image.base64, "maskImage": mask.base64},
    }

    if negative_prompts:
        request["inPaintingParams"]["negativeText"] = ", ".join(negative_prompts)

    return self._add_common_params(request, image.width, image.height, seed=seed)
```

</details>

<span id="griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.image_outpainting_request_parameters"></span>

### image\_outpainting\_request\_parameters(prompts, image, mask, negative\_prompts=None, seed=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_titan\_image\_generation\_model\_driver.py</code>

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
    prompt = ", ".join(prompts)

    request = {
        "taskType": "OUTPAINTING",
        "outPaintingParams": {
            "text": prompt,
            "image": image.base64,
            "maskImage": mask.base64,
            "outPaintingMode": self.outpainting_mode,
        },
    }

    if negative_prompts:
        request["outPaintingParams"]["negativeText"] = ", ".join(negative_prompts)

    return self._add_common_params(request, image.width, image.height, seed=seed)
```

</details>

<span id="griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.image_variation_request_parameters"></span>

### image\_variation\_request\_parameters(prompts, image, negative\_prompts=None, seed=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_titan\_image\_generation\_model\_driver.py</code>

</summary>

```python
def image_variation_request_parameters(
    self,
    prompts: list[str],
    image: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
    seed: Optional[int] = None,
) -> dict:
    prompt = ", ".join(prompts)

    request = {
        "taskType": "IMAGE_VARIATION",
        "imageVariationParams": {"text": prompt, "images": [image.base64]},
        "imageGenerationConfig": {
            "numberOfImages": 1,
            "quality": self.quality,
            "width": image.width,
            "height": image.height,
            "cfgScale": self.cfg_scale,
        },
    }

    if negative_prompts:
        request["imageVariationParams"]["negativeText"] = ", ".join(negative_prompts)

    if seed:
        request["imageGenerationConfig"]["seed"] = seed

    return self._add_common_params(request, image.width, image.height, seed=seed)
```

</details>

<span id="griptape.drivers.image_generation_model.bedrock_titan.BedrockTitanImageGenerationModelDriver.text_to_image_request_parameters"></span>

### text\_to\_image\_request\_parameters(prompts, image\_width, image\_height, negative\_prompts=None, seed=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/bedrock\_titan\_image\_generation\_model\_driver.py</code>

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
    prompt = ", ".join(prompts)

    request = {
        "taskType": "TEXT_IMAGE",
        "textToImageParams": {"text": prompt},
        "imageGenerationConfig": {
            "numberOfImages": 1,
            "quality": self.quality,
            "width": image_width,
            "height": image_height,
            "cfgScale": self.cfg_scale,
        },
    }

    if negative_prompts:
        request["textToImageParams"]["negativeText"] = ", ".join(negative_prompts)

    if seed:
        request["imageGenerationConfig"]["seed"] = seed

    return self._add_common_params(request, image_width, image_height, seed=seed)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
