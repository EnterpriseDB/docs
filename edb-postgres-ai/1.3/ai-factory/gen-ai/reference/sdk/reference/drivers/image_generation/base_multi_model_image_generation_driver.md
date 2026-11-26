---
title: base_multi_model_image_generation_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/base_multi_model_image_generation_driver/
lastModified: 2025-11-07T18:06:05Z
---

# base\_multi\_model\_image\_generation\_driver

<span id="griptape.drivers.image_generation.base_multi_model_image_generation_driver.BaseMultiModelImageGenerationDriver"></span>

Bases:
[`BaseImageGenerationDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseImageGenerationDriver "BaseImageGenerationDriver (griptape.drivers.image_generation.BaseImageGenerationDriver)")
, <span title="abc.ABC">ABC</span>

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                                                                     | Description                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/base_multi_model_image_generation_driver/#griptape.drivers.image_generation.base_multi_model_image_generation_driver.BaseMultiModelImageGenerationDriver.image_generation_model_driver" title="image_generation_model_driver = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.image_generation.base_multi_model_image_generation_driver.BaseMultiModelImageGenerationDriver.image_generation_model_driver)"><code class="language-python">image\_generation\_model\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation_model/#griptape.drivers.image_generation_model.BaseImageGenerationModelDriver" title="BaseImageGenerationModelDriver (griptape.drivers.image_generation_model.BaseImageGenerationModelDriver)"><code class="language-python">BaseImageGenerationModelDriver</code></a> | Image Model Driver to use.<br/> |

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/base\_multi\_model\_image\_generation\_driver.py</code>

</summary>

```python
@define
class BaseMultiModelImageGenerationDriver(BaseImageGenerationDriver, ABC):
    """Image Generation Driver for platforms like Amazon Bedrock that host many LLM models.

    Instances of this Image Generation Driver require a Image Generation Model Driver which is used to structure the
    image generation request in the format required by the model and to process the output.

    Attributes:
        image_generation_model_driver: Image Model Driver to use.
    """

    image_generation_model_driver: BaseImageGenerationModelDriver = field(kw_only=True, metadata={"serializable": True})
```

</details>

- `image_generation_model_driver = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation.base_multi_model_image_generation_driver.BaseMultiModelImageGenerationDriver.image_generation_model_driver"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
