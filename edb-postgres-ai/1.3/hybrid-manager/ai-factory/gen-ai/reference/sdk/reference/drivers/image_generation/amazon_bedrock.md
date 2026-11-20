---
title: amazon_bedrock
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/amazon_bedrock/
lastModified: 2026-05-22T19:45:14+05:30
---

# amazon\_bedrock

- `__all__ = ['AmazonBedrockImageGenerationDriver']` <small>module-attribute</small>  <span id="griptape.drivers.image_generation.amazon_bedrock.__all__"></span>

<span id="griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver"></span>

Bases:
[`BaseMultiModelImageGenerationDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseMultiModelImageGenerationDriver "BaseMultiModelImageGenerationDriver (griptape.drivers.image_generation.BaseMultiModelImageGenerationDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Type                   | Description                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/base_image_generation_driver/#griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver.model" title="model = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.model)"><code class="language-python">model</code></a>                             | `str`                  | Bedrock model ID.<br/>                                                                              |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/amazon_bedrock/#griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.session" title="session = field(default=Factory(lambda: import_optional_dependency('boto3').Session()), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.session)"><code class="language-python">session</code></a> | `Session`              | boto3 session.<br/>                                                                                 |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/amazon_bedrock/#griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.client" title="client() (griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.client)"><code class="language-python">client</code></a>                                                                                                                                                       | `BedrockRuntimeClient` | Bedrock runtime client.<br/>                                                                        |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/amazon_bedrock/#griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.image_width" title="image_width = field(default=512, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.image_width)"><code class="language-python">image\_width</code></a>          | `int`                  | Width of output images. Defaults to 512 and must be a multiple of 64.<br/>                          |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/amazon_bedrock/#griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.image_height" title="image_height = field(default=512, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.image_height)"><code class="language-python">image\_height</code></a>      | `int`                  | Height of output images. Defaults to 512 and must be a multiple of 64.<br/>                         |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/amazon_bedrock/#griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.seed" title="seed = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.seed)"><code class="language-python">seed</code></a>                                      | `Optional[int]`        | Optionally provide a consistent seed to generation requests, increasing consistency in output.<br/> |

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/amazon\_bedrock\_image\_generation\_driver.py</code>

</summary>

```python
@define
class AmazonBedrockImageGenerationDriver(BaseMultiModelImageGenerationDriver):
    """Driver for image generation models provided by Amazon Bedrock.

    Attributes:
        model: Bedrock model ID.
        session: boto3 session.
        client: Bedrock runtime client.
        image_width: Width of output images. Defaults to 512 and must be a multiple of 64.
        image_height: Height of output images. Defaults to 512 and must be a multiple of 64.
        seed: Optionally provide a consistent seed to generation requests, increasing consistency in output.
    """

    session: boto3.Session = field(default=Factory(lambda: import_optional_dependency("boto3").Session()), kw_only=True)
    image_width: int = field(default=512, kw_only=True, metadata={"serializable": True})
    image_height: int = field(default=512, kw_only=True, metadata={"serializable": True})
    seed: Optional[int] = field(default=None, kw_only=True, metadata={"serializable": True})
    _client: Optional[BedrockRuntimeClient] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> BedrockRuntimeClient:
        return self.session.client("bedrock-runtime")

    def try_text_to_image(self, prompts: list[str], negative_prompts: Optional[list[str]] = None) -> ImageArtifact:
        request = self.image_generation_model_driver.text_to_image_request_parameters(
            prompts,
            self.image_width,
            self.image_height,
            negative_prompts=negative_prompts,
            seed=self.seed,
        )

        image_bytes = self._make_request(request)

        return ImageArtifact(
            value=image_bytes,
            format="png",
            width=self.image_width,
            height=self.image_height,
            meta={"prompt": ", ".join(prompts), "model": self.model},
        )

    def try_image_variation(
        self,
        prompts: list[str],
        image: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact:
        request = self.image_generation_model_driver.image_variation_request_parameters(
            prompts,
            image=image,
            negative_prompts=negative_prompts,
            seed=self.seed,
        )

        image_bytes = self._make_request(request)

        return ImageArtifact(
            value=image_bytes,
            format="png",
            width=image.width,
            height=image.height,
            meta={"prompt": ", ".join(prompts), "model": self.model},
        )

    def try_image_inpainting(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact:
        request = self.image_generation_model_driver.image_inpainting_request_parameters(
            prompts,
            image=image,
            mask=mask,
            negative_prompts=negative_prompts,
            seed=self.seed,
        )

        image_bytes = self._make_request(request)

        return ImageArtifact(
            value=image_bytes,
            format="png",
            width=image.width,
            height=image.height,
            meta={"prompt": ", ".join(prompts), "model": self.model},
        )

    def try_image_outpainting(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact:
        request = self.image_generation_model_driver.image_outpainting_request_parameters(
            prompts,
            image=image,
            mask=mask,
            negative_prompts=negative_prompts,
            seed=self.seed,
        )

        image_bytes = self._make_request(request)

        return ImageArtifact(
            value=image_bytes,
            format="png",
            width=image.width,
            height=image.height,
            meta={"prompt": ", ".join(prompts), "model": self.model},
        )

    def _make_request(self, request: dict) -> bytes:
        response = self.client.invoke_model(
            body=json.dumps(request),
            modelId=self.model,
            accept="application/json",
            contentType="application/json",
        )

        response_body = json.loads(response.get("body").read())

        try:
            image_bytes = self.image_generation_model_driver.get_generated_image(response_body)
        except Exception as e:
            raise ValueError(f"Inpainting generation failed: {e}") from e

        return image_bytes
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver._client"></span>

- `image_height = field(default=512, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.image_height"></span>

- `image_width = field(default=512, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.image_width"></span>

- `seed = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.seed"></span>

- `session = field(default=Factory(lambda: import_optional_dependency('boto3').Session()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.session"></span>

<span id="griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver._make_request"></span>

### \_make\_request(request)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/amazon\_bedrock\_image\_generation\_driver.py</code>

</summary>

```python
def _make_request(self, request: dict) -> bytes:
    response = self.client.invoke_model(
        body=json.dumps(request),
        modelId=self.model,
        accept="application/json",
        contentType="application/json",
    )

    response_body = json.loads(response.get("body").read())

    try:
        image_bytes = self.image_generation_model_driver.get_generated_image(response_body)
    except Exception as e:
        raise ValueError(f"Inpainting generation failed: {e}") from e

    return image_bytes
```

</details>

<span id="griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/amazon\_bedrock\_image\_generation\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> BedrockRuntimeClient:
    return self.session.client("bedrock-runtime")
```

</details>

<span id="griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.try_image_inpainting"></span>

### try\_image\_inpainting(prompts, image, mask, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/amazon\_bedrock\_image\_generation\_driver.py</code>

</summary>

```python
def try_image_inpainting(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact:
    request = self.image_generation_model_driver.image_inpainting_request_parameters(
        prompts,
        image=image,
        mask=mask,
        negative_prompts=negative_prompts,
        seed=self.seed,
    )

    image_bytes = self._make_request(request)

    return ImageArtifact(
        value=image_bytes,
        format="png",
        width=image.width,
        height=image.height,
        meta={"prompt": ", ".join(prompts), "model": self.model},
    )
```

</details>

<span id="griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.try_image_outpainting"></span>

### try\_image\_outpainting(prompts, image, mask, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/amazon\_bedrock\_image\_generation\_driver.py</code>

</summary>

```python
def try_image_outpainting(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact:
    request = self.image_generation_model_driver.image_outpainting_request_parameters(
        prompts,
        image=image,
        mask=mask,
        negative_prompts=negative_prompts,
        seed=self.seed,
    )

    image_bytes = self._make_request(request)

    return ImageArtifact(
        value=image_bytes,
        format="png",
        width=image.width,
        height=image.height,
        meta={"prompt": ", ".join(prompts), "model": self.model},
    )
```

</details>

<span id="griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.try_image_variation"></span>

### try\_image\_variation(prompts, image, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/amazon\_bedrock\_image\_generation\_driver.py</code>

</summary>

```python
def try_image_variation(
    self,
    prompts: list[str],
    image: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact:
    request = self.image_generation_model_driver.image_variation_request_parameters(
        prompts,
        image=image,
        negative_prompts=negative_prompts,
        seed=self.seed,
    )

    image_bytes = self._make_request(request)

    return ImageArtifact(
        value=image_bytes,
        format="png",
        width=image.width,
        height=image.height,
        meta={"prompt": ", ".join(prompts), "model": self.model},
    )
```

</details>

<span id="griptape.drivers.image_generation.amazon_bedrock.AmazonBedrockImageGenerationDriver.try_text_to_image"></span>

### try\_text\_to\_image(prompts, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/amazon\_bedrock\_image\_generation\_driver.py</code>

</summary>

```python
def try_text_to_image(self, prompts: list[str], negative_prompts: Optional[list[str]] = None) -> ImageArtifact:
    request = self.image_generation_model_driver.text_to_image_request_parameters(
        prompts,
        self.image_width,
        self.image_height,
        negative_prompts=negative_prompts,
        seed=self.seed,
    )

    image_bytes = self._make_request(request)

    return ImageArtifact(
        value=image_bytes,
        format="png",
        width=self.image_width,
        height=self.image_height,
        meta={"prompt": ", ".join(prompts), "model": self.model},
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
