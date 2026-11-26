---
title: azure_openai_drivers_config
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/azure_openai_drivers_config/
lastModified: 2025-11-07T18:06:05Z
---

# azure\_openai\_drivers\_config

<span id="griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig"></span>

Bases:
[`DriversConfig`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/#griptape.configs.drivers.DriversConfig "DriversConfig (griptape.configs.drivers.DriversConfig)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                                                                                                                                                | Description                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/azure_openai_drivers_config/#griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.azure_endpoint" title="azure_endpoint = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.azure_endpoint)"><code class="language-python">azure\_endpoint</code></a>                                                      | `str`                                                                                                                                                                                                                                                                                                                                                                                                               | The endpoint for the Azure OpenAI instance.<br/>        |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/azure_openai_drivers_config/#griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.azure_ad_token" title="azure_ad_token = field(kw_only=True, default=None, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.azure_ad_token)"><code class="language-python">azure\_ad\_token</code></a>                                      | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                                                     | An optional Azure Active Directory token.<br/>          |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/azure_openai_drivers_config/#griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.azure_ad_token_provider" title="azure_ad_token_provider = field(kw_only=True, default=None, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.azure_ad_token_provider)"><code class="language-python">azure\_ad\_token\_provider</code></a> | `Optional[Callable[[], str]]`                                                                                                                                                                                                                                                                                                                                                                                       | An optional Azure Active Directory token provider.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/azure_openai_drivers_config/#griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.api_key" title="api_key = field(kw_only=True, default=None, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.api_key)"><code class="language-python">api\_key</code></a>                                                                   | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                                                     | An optional Azure API key.<br/>                         |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/azure_openai_drivers_config/#griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.prompt_driver" title="prompt_driver() (griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.prompt_driver)"><code class="language-python">prompt\_driver</code></a>                                                                                                                                                                     | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/openai/#griptape.drivers.prompt.openai.AzureOpenAiChatPromptDriver" title="AzureOpenAiChatPromptDriver (griptape.drivers.prompt.openai.AzureOpenAiChatPromptDriver)"><code class="language-python">AzureOpenAiChatPromptDriver</code></a>                                                   | An Azure OpenAI Chat Prompt Driver.<br/>                |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/azure_openai_drivers_config/#griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.image_generation_driver" title="image_generation_driver() (griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.image_generation_driver)"><code class="language-python">image\_generation\_driver</code></a>                                                                                                                            | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/openai/#griptape.drivers.image_generation.openai.AzureOpenAiImageGenerationDriver" title="AzureOpenAiImageGenerationDriver (griptape.drivers.image_generation.openai.AzureOpenAiImageGenerationDriver)"><code class="language-python">AzureOpenAiImageGenerationDriver</code></a> | An Azure OpenAI Image Generation Driver.<br/>           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/azure_openai_drivers_config/#griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.embedding_driver" title="embedding_driver() (griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.embedding_driver)"><code class="language-python">embedding\_driver</code></a>                                                                                                                                                         | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver" title="AzureOpenAiEmbeddingDriver (griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver)"><code class="language-python">AzureOpenAiEmbeddingDriver</code></a>                                              | An Azure OpenAI Embedding Driver.<br/>                  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/azure_openai_drivers_config/#griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.vector_store_driver" title="vector_store_driver() (griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.vector_store_driver)"><code class="language-python">vector\_store\_driver</code></a>                                                                                                                                            | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/local/#griptape.drivers.vector.local.LocalVectorStoreDriver" title="LocalVectorStoreDriver (griptape.drivers.vector.local.LocalVectorStoreDriver)"><code class="language-python">LocalVectorStoreDriver</code></a>                                                                          | A Local Vector Store Driver.<br/>                       |

<details>

<summary>

Source Code in <code>griptape/configs/drivers/azure\_openai\_drivers\_config.py</code>

</summary>

```python
@define
class AzureOpenAiDriversConfig(DriversConfig):
    """Azure OpenAI Drivers Configuration.

    Attributes:
        azure_endpoint: The endpoint for the Azure OpenAI instance.
        azure_ad_token: An optional Azure Active Directory token.
        azure_ad_token_provider: An optional Azure Active Directory token provider.
        api_key: An optional Azure API key.
        prompt_driver: An Azure OpenAI Chat Prompt Driver.
        image_generation_driver: An Azure OpenAI Image Generation Driver.
        embedding_driver: An Azure OpenAI Embedding Driver.
        vector_store_driver: A Local Vector Store Driver.
    """

    azure_endpoint: str = field(kw_only=True, metadata={"serializable": True})
    azure_ad_token: Optional[str] = field(kw_only=True, default=None, metadata={"serializable": False})
    azure_ad_token_provider: Optional[Callable[[], str]] = field(
        kw_only=True,
        default=None,
        metadata={"serializable": False},
    )
    api_key: Optional[str] = field(kw_only=True, default=None, metadata={"serializable": False})

    @lazy_property()
    def prompt_driver(self) -> AzureOpenAiChatPromptDriver:
        return AzureOpenAiChatPromptDriver(
            model="gpt-4.1",
            azure_endpoint=self.azure_endpoint,
            api_key=self.api_key,
            azure_ad_token=self.azure_ad_token,
            azure_ad_token_provider=self.azure_ad_token_provider,
        )

    @lazy_property()
    def embedding_driver(self) -> AzureOpenAiEmbeddingDriver:
        return AzureOpenAiEmbeddingDriver(
            model="text-embedding-3-small",
            azure_endpoint=self.azure_endpoint,
            api_key=self.api_key,
            azure_ad_token=self.azure_ad_token,
            azure_ad_token_provider=self.azure_ad_token_provider,
        )

    @lazy_property()
    def image_generation_driver(self) -> AzureOpenAiImageGenerationDriver:
        return AzureOpenAiImageGenerationDriver(
            model="dall-e-2",
            azure_endpoint=self.azure_endpoint,
            api_key=self.api_key,
            azure_ad_token=self.azure_ad_token,
            azure_ad_token_provider=self.azure_ad_token_provider,
            image_size="512x512",
        )

    @lazy_property()
    def vector_store_driver(self) -> LocalVectorStoreDriver:
        return LocalVectorStoreDriver(
            embedding_driver=AzureOpenAiEmbeddingDriver(
                model="text-embedding-3-small",
                azure_endpoint=self.azure_endpoint,
                api_key=self.api_key,
                azure_ad_token=self.azure_ad_token,
                azure_ad_token_provider=self.azure_ad_token_provider,
            )
        )

    @lazy_property()
    def text_to_speech_driver(self) -> AzureOpenAiTextToSpeechDriver:
        return AzureOpenAiTextToSpeechDriver(
            model="tts",
            azure_endpoint=self.azure_endpoint,
            api_key=self.api_key,
            azure_ad_token=self.azure_ad_token,
            azure_ad_token_provider=self.azure_ad_token_provider,
        )
```

</details>

- `api_key = field(kw_only=True, default=None, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.api_key"></span>

- `azure_ad_token = field(kw_only=True, default=None, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.azure_ad_token"></span>

- `azure_ad_token_provider = field(kw_only=True, default=None, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.azure_ad_token_provider"></span>

- `azure_endpoint = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.azure_endpoint"></span>

<span id="griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.embedding_driver"></span>

### embedding\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/azure\_openai\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def embedding_driver(self) -> AzureOpenAiEmbeddingDriver:
    return AzureOpenAiEmbeddingDriver(
        model="text-embedding-3-small",
        azure_endpoint=self.azure_endpoint,
        api_key=self.api_key,
        azure_ad_token=self.azure_ad_token,
        azure_ad_token_provider=self.azure_ad_token_provider,
    )
```

</details>

<span id="griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.image_generation_driver"></span>

### image\_generation\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/azure\_openai\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def image_generation_driver(self) -> AzureOpenAiImageGenerationDriver:
    return AzureOpenAiImageGenerationDriver(
        model="dall-e-2",
        azure_endpoint=self.azure_endpoint,
        api_key=self.api_key,
        azure_ad_token=self.azure_ad_token,
        azure_ad_token_provider=self.azure_ad_token_provider,
        image_size="512x512",
    )
```

</details>

<span id="griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.prompt_driver"></span>

### prompt\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/azure\_openai\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def prompt_driver(self) -> AzureOpenAiChatPromptDriver:
    return AzureOpenAiChatPromptDriver(
        model="gpt-4.1",
        azure_endpoint=self.azure_endpoint,
        api_key=self.api_key,
        azure_ad_token=self.azure_ad_token,
        azure_ad_token_provider=self.azure_ad_token_provider,
    )
```

</details>

<span id="griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.text_to_speech_driver"></span>

### text\_to\_speech\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/azure\_openai\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def text_to_speech_driver(self) -> AzureOpenAiTextToSpeechDriver:
    return AzureOpenAiTextToSpeechDriver(
        model="tts",
        azure_endpoint=self.azure_endpoint,
        api_key=self.api_key,
        azure_ad_token=self.azure_ad_token,
        azure_ad_token_provider=self.azure_ad_token_provider,
    )
```

</details>

<span id="griptape.configs.drivers.azure_openai_drivers_config.AzureOpenAiDriversConfig.vector_store_driver"></span>

### vector\_store\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/azure\_openai\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def vector_store_driver(self) -> LocalVectorStoreDriver:
    return LocalVectorStoreDriver(
        embedding_driver=AzureOpenAiEmbeddingDriver(
            model="text-embedding-3-small",
            azure_endpoint=self.azure_endpoint,
            api_key=self.api_key,
            azure_ad_token=self.azure_ad_token,
            azure_ad_token_provider=self.azure_ad_token_provider,
        )
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
