---
title: openai
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/
lastModified: 2025-11-07T18:06:05Z
---

# openai

- `__all__ = ['AzureOpenAiEmbeddingDriver', 'OpenAiEmbeddingDriver']` <small>module-attribute</small>  <span id="griptape.drivers.embedding.openai.__all__"></span>

<span id="griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver"></span>

Bases:
[`OpenAiEmbeddingDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.OpenAiEmbeddingDriver "OpenAiEmbeddingDriver (griptape.drivers.embedding.openai.OpenAiEmbeddingDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                             | Description                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.azure_deployment" title="azure_deployment = field(kw_only=True, default=Factory(lambda self: self.model, takes_self=True), metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.azure_deployment)"><code class="language-python">azure\_deployment</code></a> | `str`                                                                                                                                                                                                                                                                            | An optional Azure OpenAi deployment id. Defaults to the model name.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.azure_endpoint" title="azure_endpoint = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.azure_endpoint)"><code class="language-python">azure\_endpoint</code></a>                                                                    | `str`                                                                                                                                                                                                                                                                            | An Azure OpenAi endpoint.<br/>                                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.azure_ad_token" title="azure_ad_token = field(kw_only=True, default=None, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.azure_ad_token)"><code class="language-python">azure\_ad\_token</code></a>                                                    | `Optional[str]`                                                                                                                                                                                                                                                                  | An optional Azure Active Directory token.<br/>                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.azure_ad_token_provider" title="azure_ad_token_provider = field(kw_only=True, default=None, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.azure_ad_token_provider)"><code class="language-python">azure\_ad\_token\_provider</code></a>               | `Optional[Callable[[], str]]`                                                                                                                                                                                                                                                    | An optional Azure Active Directory token provider.<br/>                  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.api_version" title="api_version = field(default='2024-10-21', kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.api_version)"><code class="language-python">api\_version</code></a>                                                          | `str`                                                                                                                                                                                                                                                                            | An Azure OpenAi API version.<br/>                                        |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.tokenizer" title="tokenizer = field(default=Factory(lambda self: OpenAiTokenizer(model=self.model), takes_self=True), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.tokenizer)"><code class="language-python">tokenizer</code></a>                                        | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tokenizers/#griptape.tokenizers.OpenAiTokenizer" title="OpenAiTokenizer (griptape.tokenizers.OpenAiTokenizer)"><code class="language-python">OpenAiTokenizer</code></a> | An `OpenAiTokenizer`.<br/>                                               |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.client" title="client() (griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.client)"><code class="language-python">client</code></a>                                                                                                                                                                                                                | `AzureOpenAI`                                                                                                                                                                                                                                                                    | An `openai.AzureOpenAI` client.<br/>                                     |

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

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver._client"></span>

- `api_version = field(default='2024-10-21', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.api_version"></span>

- `azure_ad_token = field(kw_only=True, default=None, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.azure_ad_token"></span>

- `azure_ad_token_provider = field(kw_only=True, default=None, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.azure_ad_token_provider"></span>

- `azure_deployment = field(kw_only=True, default=Factory(lambda self: self.model, takes_self=True), metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.azure_deployment"></span>

- `azure_endpoint = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.azure_endpoint"></span>

- `tokenizer = field(default=Factory(lambda self: OpenAiTokenizer(model=self.model), takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.tokenizer"></span>

<span id="griptape.drivers.embedding.openai.AzureOpenAiEmbeddingDriver.client"></span>

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

<span id="griptape.drivers.embedding.openai.OpenAiEmbeddingDriver"></span>

## OpenAiEmbeddingDriver

Bases:
[`BaseEmbeddingDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/#griptape.drivers.embedding.BaseEmbeddingDriver "BaseEmbeddingDriver (griptape.drivers.embedding.BaseEmbeddingDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                             | Description                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.model" title="model = field(default=DEFAULT_MODEL, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.model)"><code class="language-python">model</code></a>                                           | `str`                                                                                                                                                                                                                                                                            | OpenAI embedding model name. Defaults to `text-embedding-3-small`.<br/>            |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.base_url" title="base_url = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.base_url)"><code class="language-python">base\_url</code></a>                                       | `Optional[str]`                                                                                                                                                                                                                                                                  | API URL. Defaults to OpenAI's v1 API URL.<br/>                                     |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.api_key" title="api_key = field(default=None, kw_only=True, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.api_key)"><code class="language-python">api\_key</code></a>                                          | `Optional[str]`                                                                                                                                                                                                                                                                  | API key to pass directly. Defaults to `OPENAI_API_KEY` environment variable.<br/>  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.organization" title="organization = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.organization)"><code class="language-python">organization</code></a>                        | `Optional[str]`                                                                                                                                                                                                                                                                  | OpenAI organization. Defaults to 'OPENAI\_ORGANIZATION' environment variable.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.tokenizer" title="tokenizer = field(default=Factory(lambda self: OpenAiTokenizer(model=self.model), takes_self=True), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.tokenizer)"><code class="language-python">tokenizer</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tokenizers/#griptape.tokenizers.OpenAiTokenizer" title="OpenAiTokenizer (griptape.tokenizers.OpenAiTokenizer)"><code class="language-python">OpenAiTokenizer</code></a> | Optionally provide custom `OpenAiTokenizer`.<br/>                                  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.client" title="client() (griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.client)"><code class="language-python">client</code></a>                                                                                                                                                                         | `OpenAI`                                                                                                                                                                                                                                                                         | Optionally provide custom `openai.OpenAI` client.<br/>                             |
| `azure_deployment`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `OpenAI`                                                                                                                                                                                                                                                                         | An Azure OpenAi deployment id.<br/>                                                |
| `azure_endpoint`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `OpenAI`                                                                                                                                                                                                                                                                         | An Azure OpenAi endpoint.<br/>                                                     |
| `azure_ad_token`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `OpenAI`                                                                                                                                                                                                                                                                         | An optional Azure Active Directory token.<br/>                                     |
| `azure_ad_token_provider`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `OpenAI`                                                                                                                                                                                                                                                                         | An optional Azure Active Directory token provider.<br/>                            |
| `api_version`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `OpenAI`                                                                                                                                                                                                                                                                         | An Azure OpenAi API version.<br/>                                                  |

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/openai\_embedding\_driver.py</code>

</summary>

```python
@define
class OpenAiEmbeddingDriver(BaseEmbeddingDriver):
    """OpenAI Embedding Driver.

    Attributes:
        model: OpenAI embedding model name. Defaults to `text-embedding-3-small`.
        base_url: API URL. Defaults to OpenAI's v1 API URL.
        api_key: API key to pass directly. Defaults to `OPENAI_API_KEY` environment variable.
        organization: OpenAI organization. Defaults to 'OPENAI_ORGANIZATION' environment variable.
        tokenizer: Optionally provide custom `OpenAiTokenizer`.
        client: Optionally provide custom `openai.OpenAI` client.
        azure_deployment: An Azure OpenAi deployment id.
        azure_endpoint: An Azure OpenAi endpoint.
        azure_ad_token: An optional Azure Active Directory token.
        azure_ad_token_provider: An optional Azure Active Directory token provider.
        api_version: An Azure OpenAi API version.
    """

    DEFAULT_MODEL = "text-embedding-3-small"

    model: str = field(default=DEFAULT_MODEL, kw_only=True, metadata={"serializable": True})
    base_url: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    api_key: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": False})
    organization: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    tokenizer: OpenAiTokenizer = field(
        default=Factory(lambda self: OpenAiTokenizer(model=self.model), takes_self=True),
        kw_only=True,
    )
    _client: Optional[openai.OpenAI] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> openai.OpenAI:
        return openai.OpenAI(api_key=self.api_key, base_url=self.base_url, organization=self.organization)

    def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
        # Address a performance issue in older ada models
        # https://github.com/openai/openai-python/issues/418#issuecomment-1525939500
        if self.model.endswith("001"):
            chunk = chunk.replace("\n", " ")
        return self.client.embeddings.create(**self._params(chunk)).data[0].embedding

    def _params(self, chunk: str) -> dict:
        return {"input": chunk, "model": self.model}
```

</details>

- `DEFAULT_MODEL = 'text-embedding-3-small'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.DEFAULT_MODEL"></span>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.OpenAiEmbeddingDriver._client"></span>

- `api_key = field(default=None, kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.api_key"></span>

- `base_url = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.base_url"></span>

- `model = field(default=DEFAULT_MODEL, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.model"></span>

- `organization = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.organization"></span>

- `tokenizer = field(default=Factory(lambda self: OpenAiTokenizer(model=self.model), takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.tokenizer"></span>

<span id="griptape.drivers.embedding.openai.OpenAiEmbeddingDriver._params"></span>

### \_params(chunk)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/openai\_embedding\_driver.py</code>

</summary>

```python
def _params(self, chunk: str) -> dict:
    return {"input": chunk, "model": self.model}
```

</details>

<span id="griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/openai\_embedding\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> openai.OpenAI:
    return openai.OpenAI(api_key=self.api_key, base_url=self.base_url, organization=self.organization)
```

</details>

<span id="griptape.drivers.embedding.openai.OpenAiEmbeddingDriver.try_embed_chunk"></span>

### try\_embed\_chunk(chunk, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/openai\_embedding\_driver.py</code>

</summary>

```python
def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
    # Address a performance issue in older ada models
    # https://github.com/openai/openai-python/issues/418#issuecomment-1525939500
    if self.model.endswith("001"):
        chunk = chunk.replace("\n", " ")
    return self.client.embeddings.create(**self._params(chunk)).data[0].embedding
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
