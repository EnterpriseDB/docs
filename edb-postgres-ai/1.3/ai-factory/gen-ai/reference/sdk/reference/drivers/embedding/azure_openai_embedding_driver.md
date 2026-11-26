---
title: azure_openai_embedding_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/azure_openai_embedding_driver/
lastModified: 2025-11-07T18:06:05Z
---

# azure\_openai\_embedding\_driver

<span id="griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver"></span>

Bases:
[`OpenAiEmbeddingDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.OpenAiEmbeddingDriver "OpenAiEmbeddingDriver (griptape.drivers.embedding.openai.OpenAiEmbeddingDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                             | Description                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/azure_openai_embedding_driver/#griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.azure_deployment" title="azure_deployment = field(kw_only=True, default=Factory(lambda self: self.model, takes_self=True), metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.azure_deployment)"><code class="language-python">azure\_deployment</code></a> | `str`                                                                                                                                                                                                                                                                            | An optional Azure OpenAi deployment id. Defaults to the model name.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/azure_openai_embedding_driver/#griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.azure_endpoint" title="azure_endpoint = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.azure_endpoint)"><code class="language-python">azure\_endpoint</code></a>                                                                    | `str`                                                                                                                                                                                                                                                                            | An Azure OpenAi endpoint.<br/>                                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/azure_openai_embedding_driver/#griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.azure_ad_token" title="azure_ad_token = field(kw_only=True, default=None, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.azure_ad_token)"><code class="language-python">azure\_ad\_token</code></a>                                                    | `Optional[str]`                                                                                                                                                                                                                                                                  | An optional Azure Active Directory token.<br/>                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/azure_openai_embedding_driver/#griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.azure_ad_token_provider" title="azure_ad_token_provider = field(kw_only=True, default=None, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.azure_ad_token_provider)"><code class="language-python">azure\_ad\_token\_provider</code></a>               | `Optional[Callable[[], str]]`                                                                                                                                                                                                                                                    | An optional Azure Active Directory token provider.<br/>                  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/azure_openai_embedding_driver/#griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.api_version" title="api_version = field(default='2024-10-21', kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.api_version)"><code class="language-python">api\_version</code></a>                                                          | `str`                                                                                                                                                                                                                                                                            | An Azure OpenAi API version.<br/>                                        |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/azure_openai_embedding_driver/#griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.tokenizer" title="tokenizer = field(default=Factory(lambda self: OpenAiTokenizer(model=self.model), takes_self=True), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.tokenizer)"><code class="language-python">tokenizer</code></a>                                        | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tokenizers/#griptape.tokenizers.OpenAiTokenizer" title="OpenAiTokenizer (griptape.tokenizers.OpenAiTokenizer)"><code class="language-python">OpenAiTokenizer</code></a> | An `OpenAiTokenizer`.<br/>                                               |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/azure_openai_embedding_driver/#griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.client" title="client() (griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.client)"><code class="language-python">client</code></a>                                                                                                                                                                                                                | `AzureOpenAI`                                                                                                                                                                                                                                                                    | An `openai.AzureOpenAI` client.<br/>                                     |

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/azure\_openai\_embedding\_driver.py</code>

</summary>

```python
@define
class AzureOpenAiEmbeddingDriver(OpenAiEmbeddingDriver):
    """Azure OpenAi Embedding Driver.

    Attributes:
        azure_deployment: An optional Azure OpenAi deployment id. Defaults to the model name.
        azure_endpoint: An Azure OpenAi endpoint.
        azure_ad_token: An optional Azure Active Directory token.
        azure_ad_token_provider: An optional Azure Active Directory token provider.
        api_version: An Azure OpenAi API version.
        tokenizer: An `OpenAiTokenizer`.
        client: An `openai.AzureOpenAI` client.
    """

    azure_deployment: str = field(
        kw_only=True,
        default=Factory(lambda self: self.model, takes_self=True),
        metadata={"serializable": True},
    )
    azure_endpoint: str = field(kw_only=True, metadata={"serializable": True})
    azure_ad_token: Optional[str] = field(kw_only=True, default=None, metadata={"serializable": False})
    azure_ad_token_provider: Optional[Callable[[], str]] = field(
        kw_only=True,
        default=None,
        metadata={"serializable": False},
    )
    api_version: str = field(default="2024-10-21", kw_only=True, metadata={"serializable": True})
    tokenizer: OpenAiTokenizer = field(
        default=Factory(lambda self: OpenAiTokenizer(model=self.model), takes_self=True),
        kw_only=True,
    )
    _client: Optional[openai.AzureOpenAI] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> openai.AzureOpenAI:
        return openai.AzureOpenAI(
            organization=self.organization,
            api_key=self.api_key,
            api_version=self.api_version,
            azure_endpoint=self.azure_endpoint,
            azure_deployment=self.azure_deployment,
            azure_ad_token=self.azure_ad_token,
            azure_ad_token_provider=self.azure_ad_token_provider,
        )
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver._client"></span>

- `api_version = field(default='2024-10-21', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.api_version"></span>

- `azure_ad_token = field(kw_only=True, default=None, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.azure_ad_token"></span>

- `azure_ad_token_provider = field(kw_only=True, default=None, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.azure_ad_token_provider"></span>

- `azure_deployment = field(kw_only=True, default=Factory(lambda self: self.model, takes_self=True), metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.azure_deployment"></span>

- `azure_endpoint = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.azure_endpoint"></span>

- `tokenizer = field(default=Factory(lambda self: OpenAiTokenizer(model=self.model), takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.tokenizer"></span>

<span id="griptape.drivers.embedding.azure_openai_embedding_driver.AzureOpenAiEmbeddingDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/azure\_openai\_embedding\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> openai.AzureOpenAI:
    return openai.AzureOpenAI(
        organization=self.organization,
        api_key=self.api_key,
        api_version=self.api_version,
        azure_endpoint=self.azure_endpoint,
        azure_deployment=self.azure_deployment,
        azure_ad_token=self.azure_ad_token,
        azure_ad_token_provider=self.azure_ad_token_provider,
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
