---
title: amazon_bedrock_drivers_config
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/amazon_bedrock_drivers_config/
lastModified: 2025-11-07T18:06:05Z
---

# amazon\_bedrock\_drivers\_config

<span id="griptape.configs.drivers.amazon_bedrock_drivers_config.AmazonBedrockDriversConfig"></span>

Bases:
[`DriversConfig`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/#griptape.configs.drivers.DriversConfig "DriversConfig (griptape.configs.drivers.DriversConfig)")

<details>

<summary>

Source Code in <code>griptape/configs/drivers/amazon\_bedrock\_drivers\_config.py</code>

</summary>

```python
@define
class AmazonBedrockDriversConfig(DriversConfig):
    session: boto3.Session = field(
        default=Factory(lambda: import_optional_dependency("boto3").Session()),
        kw_only=True,
        metadata={"serializable": False},
    )

    @lazy_property()
    def prompt_driver(self) -> AmazonBedrockPromptDriver:
        return AmazonBedrockPromptDriver(session=self.session, model="anthropic.claude-3-7-sonnet-20250219-v1:0")

    @lazy_property()
    def embedding_driver(self) -> AmazonBedrockTitanEmbeddingDriver:
        return AmazonBedrockTitanEmbeddingDriver(session=self.session, model="amazon.titan-embed-text-v2:0")

    @lazy_property()
    def image_generation_driver(self) -> AmazonBedrockImageGenerationDriver:
        return AmazonBedrockImageGenerationDriver(
            session=self.session,
            model="amazon.titan-image-generator-v2:0",
            image_generation_model_driver=BedrockTitanImageGenerationModelDriver(),
        )

    @lazy_property()
    def vector_store_driver(self) -> LocalVectorStoreDriver:
        return LocalVectorStoreDriver(
            embedding_driver=AmazonBedrockTitanEmbeddingDriver(
                session=self.session, model="amazon.titan-embed-text-v2:0"
            )
        )
```

</details>

- `session = field(default=Factory(lambda: import_optional_dependency('boto3').Session()), kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.drivers.amazon_bedrock_drivers_config.AmazonBedrockDriversConfig.session"></span>

<span id="griptape.configs.drivers.amazon_bedrock_drivers_config.AmazonBedrockDriversConfig.embedding_driver"></span>

### embedding\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/amazon\_bedrock\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def embedding_driver(self) -> AmazonBedrockTitanEmbeddingDriver:
    return AmazonBedrockTitanEmbeddingDriver(session=self.session, model="amazon.titan-embed-text-v2:0")
```

</details>

<span id="griptape.configs.drivers.amazon_bedrock_drivers_config.AmazonBedrockDriversConfig.image_generation_driver"></span>

### image\_generation\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/amazon\_bedrock\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def image_generation_driver(self) -> AmazonBedrockImageGenerationDriver:
    return AmazonBedrockImageGenerationDriver(
        session=self.session,
        model="amazon.titan-image-generator-v2:0",
        image_generation_model_driver=BedrockTitanImageGenerationModelDriver(),
    )
```

</details>

<span id="griptape.configs.drivers.amazon_bedrock_drivers_config.AmazonBedrockDriversConfig.prompt_driver"></span>

### prompt\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/amazon\_bedrock\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def prompt_driver(self) -> AmazonBedrockPromptDriver:
    return AmazonBedrockPromptDriver(session=self.session, model="anthropic.claude-3-7-sonnet-20250219-v1:0")
```

</details>

<span id="griptape.configs.drivers.amazon_bedrock_drivers_config.AmazonBedrockDriversConfig.vector_store_driver"></span>

### vector\_store\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/amazon\_bedrock\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def vector_store_driver(self) -> LocalVectorStoreDriver:
    return LocalVectorStoreDriver(
        embedding_driver=AmazonBedrockTitanEmbeddingDriver(
            session=self.session, model="amazon.titan-embed-text-v2:0"
        )
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
