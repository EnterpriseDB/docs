---
title: image_generation_pipeline
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/
lastModified: 2026-05-22T19:45:14+05:30
---

# image\_generation\_pipeline

- `__all__ = ['BaseDiffusionImageGenerationPipelineDriver']` <small>module-attribute</small>  <span id="griptape.drivers.image_generation_pipeline.__all__"></span>

<span id="griptape.drivers.image_generation_pipeline.BaseDiffusionImageGenerationPipelineDriver"></span>

Bases:

<span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_pipeline/base\_image\_generation\_pipeline\_driver.py</code>

</summary>

```python
@define
class BaseDiffusionImageGenerationPipelineDriver(ABC):
    @abstractmethod
    def prepare_pipeline(self, model: str, device: Optional[str]) -> Any: ...

    @abstractmethod
    def make_image_param(self, image: Optional[Image]) -> Optional[dict[str, Image]]: ...

    @abstractmethod
    def make_additional_params(self, negative_prompts: Optional[list[str]], device: Optional[str]) -> dict: ...

    @property
    @abstractmethod
    def output_image_dimensions(self) -> tuple[int, int]: ...
```

</details>

- `output_image_dimensions` <small>abstractmethod</small> <small>property</small>  <span id="griptape.drivers.image_generation_pipeline.BaseDiffusionImageGenerationPipelineDriver.output_image_dimensions"></span>

<span id="griptape.drivers.image_generation_pipeline.BaseDiffusionImageGenerationPipelineDriver.make_additional_params"></span>

### make\_additional\_params(negative\_prompts, device)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_pipeline/base\_image\_generation\_pipeline\_driver.py</code>

</summary>

```python
@abstractmethod
def make_additional_params(self, negative_prompts: Optional[list[str]], device: Optional[str]) -> dict: ...
```

</details>

<span id="griptape.drivers.image_generation_pipeline.BaseDiffusionImageGenerationPipelineDriver.make_image_param"></span>

### make\_image\_param(image)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_pipeline/base\_image\_generation\_pipeline\_driver.py</code>

</summary>

```python
@abstractmethod
def make_image_param(self, image: Optional[Image]) -> Optional[dict[str, Image]]: ...
```

</details>

<span id="griptape.drivers.image_generation_pipeline.BaseDiffusionImageGenerationPipelineDriver.prepare_pipeline"></span>

### prepare\_pipeline(model, device)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation\_pipeline/base\_image\_generation\_pipeline\_driver.py</code>

</summary>

```python
@abstractmethod
def prepare_pipeline(self, model: str, device: Optional[str]) -> Any: ...
```

</details>

- [BaseDiffusionImageGenerationPipelineDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/base_image_generation_pipeline_driver/): Bases:
- [StableDiffusion3ImageGenerationPipelineDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/stable_diffusion_3/): -   all = \['StableDiffusion3ImageGenerationPipelineDriver'] module-attribute
- [StableDiffusion3ControlNetImageGenerationPipelineDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/stable_diffusion_3_controlnet/): -   all = \['StableDiffusion3ControlNetImageGenerationPipelineDriver'] module-attribute
- [StableDiffusion3ControlNetImageGenerationPipelineDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/stable_diffusion_3_controlnet_image_generation_pipeline_driver/): Bases:
- [StableDiffusion3ImageGenerationPipelineDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/stable_diffusion_3_image_generation_pipeline_driver/): Bases:
- [StableDiffusion3Img2ImgImageGenerationPipelineDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/stable_diffusion_3_img_2_img/): -   all = \['StableDiffusion3Img2ImgImageGenerationPipelineDriver'] module-attribute
- [StableDiffusion3Img2ImgImageGenerationPipelineDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_pipeline/stable_diffusion_3_img_2_img_image_generation_pipeline_driver/): Bases:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
