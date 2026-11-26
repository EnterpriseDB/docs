---
title: base_image_generation_model_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/base_image_generation_model_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_image\_generation\_model\_driver

<span id="griptape.drivers.image_generation_model.base_image_generation_model_driver.BaseImageGenerationModelDriver"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/base\_image\_generation\_model\_driver.py</code>

</summary>

```python
@define
class BaseImageGenerationModelDriver(SerializableMixin, ABC):
    @abstractmethod
    def get_generated_image(self, response: dict) -> bytes: ...

    @abstractmethod
    def text_to_image_request_parameters(
        self,
        prompts: list[str],
        image_width: int,
        image_height: int,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
    ) -> dict[str, Any]: ...

    @abstractmethod
    def image_variation_request_parameters(
        self,
        prompts: list[str],
        image: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
    ) -> dict[str, Any]: ...

    @abstractmethod
    def image_inpainting_request_parameters(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
    ) -> dict[str, Any]: ...

    @abstractmethod
    def image_outpainting_request_parameters(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
        seed: Optional[int] = None,
    ) -> dict[str, Any]: ...
```

</details>

<span id="griptape.drivers.image_generation_model.base_image_generation_model_driver.BaseImageGenerationModelDriver.get_generated_image"></span>

### get\_generated\_image(response)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/base\_image\_generation\_model\_driver.py</code>

</summary>

```python
@abstractmethod
def get_generated_image(self, response: dict) -> bytes: ...
```

</details>

<span id="griptape.drivers.image_generation_model.base_image_generation_model_driver.BaseImageGenerationModelDriver.image_inpainting_request_parameters"></span>

### image\_inpainting\_request\_parameters(prompts, image, mask, negative\_prompts=None, seed=None)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/base\_image\_generation\_model\_driver.py</code>

</summary>

```python
@abstractmethod
def image_inpainting_request_parameters(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
    seed: Optional[int] = None,
) -> dict[str, Any]: ...
```

</details>

<span id="griptape.drivers.image_generation_model.base_image_generation_model_driver.BaseImageGenerationModelDriver.image_outpainting_request_parameters"></span>

### image\_outpainting\_request\_parameters(prompts, image, mask, negative\_prompts=None, seed=None)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/base\_image\_generation\_model\_driver.py</code>

</summary>

```python
@abstractmethod
def image_outpainting_request_parameters(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
    seed: Optional[int] = None,
) -> dict[str, Any]: ...
```

</details>

<span id="griptape.drivers.image_generation_model.base_image_generation_model_driver.BaseImageGenerationModelDriver.image_variation_request_parameters"></span>

### image\_variation\_request\_parameters(prompts, image, negative\_prompts=None, seed=None)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/base\_image\_generation\_model\_driver.py</code>

</summary>

```python
@abstractmethod
def image_variation_request_parameters(
    self,
    prompts: list[str],
    image: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
    seed: Optional[int] = None,
) -> dict[str, Any]: ...
```

</details>

<span id="griptape.drivers.image_generation_model.base_image_generation_model_driver.BaseImageGenerationModelDriver.text_to_image_request_parameters"></span>

### text\_to\_image\_request\_parameters(prompts, image\_width, image\_height, negative\_prompts=None, seed=None)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_model/base\_image\_generation\_model\_driver.py</code>

</summary>

```python
@abstractmethod
def text_to_image_request_parameters(
    self,
    prompts: list[str],
    image_width: int,
    image_height: int,
    negative_prompts: Optional[list[str]] = None,
    seed: Optional[int] = None,
) -> dict[str, Any]: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
