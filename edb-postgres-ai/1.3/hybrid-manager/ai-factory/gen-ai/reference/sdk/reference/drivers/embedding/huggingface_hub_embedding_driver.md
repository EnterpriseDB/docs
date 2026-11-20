---
title: huggingface_hub_embedding_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/huggingface_hub_embedding_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# huggingface\_hub\_embedding\_driver

<span id="griptape.drivers.embedding.huggingface_hub_embedding_driver.HuggingFaceHubEmbeddingDriver"></span>

Bases:
[`BaseEmbeddingDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/#griptape.drivers.embedding.BaseEmbeddingDriver "BaseEmbeddingDriver (griptape.drivers.embedding.BaseEmbeddingDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Type              | Description                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | --------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/huggingface_hub_embedding_driver/#griptape.drivers.embedding.huggingface_hub_embedding_driver.HuggingFaceHubEmbeddingDriver.api_token" title="api_token = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.huggingface_hub_embedding_driver.HuggingFaceHubEmbeddingDriver.api_token)"><code class="language-python">api\_token</code></a> | `str`             | Hugging Face Hub API token.<br/>  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/#griptape.drivers.embedding.BaseEmbeddingDriver.model" title="model = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.huggingface_hub_embedding_driver.HuggingFaceHubEmbeddingDriver.model)"><code class="language-python">model</code></a>                                                                                              | `str`             | Hugging Face Hub model name.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/huggingface_hub_embedding_driver/#griptape.drivers.embedding.huggingface_hub_embedding_driver.HuggingFaceHubEmbeddingDriver.client" title="client() (griptape.drivers.embedding.huggingface_hub_embedding_driver.HuggingFaceHubEmbeddingDriver.client)"><code class="language-python">client</code></a>                                                                                                                         | `InferenceClient` | Custom `InferenceApi`.<br/>       |

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/huggingface\_hub\_embedding\_driver.py</code>

</summary>

```python
@define
class HuggingFaceHubEmbeddingDriver(BaseEmbeddingDriver):
    """Hugging Face Hub Embedding Driver.

    Attributes:
        api_token: Hugging Face Hub API token.
        model: Hugging Face Hub model name.
        client: Custom `InferenceApi`.
    """

    api_token: str = field(kw_only=True, metadata={"serializable": True})
    _client: Optional[InferenceClient] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> InferenceClient:
        return import_optional_dependency("huggingface_hub").InferenceClient(
            model=self.model,
            token=self.api_token,
        )

    def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
        response = self.client.feature_extraction(chunk)

        return [float(val) for val in response.flatten().tolist()]
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.huggingface_hub_embedding_driver.HuggingFaceHubEmbeddingDriver._client"></span>

- `api_token = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.huggingface_hub_embedding_driver.HuggingFaceHubEmbeddingDriver.api_token"></span>

<span id="griptape.drivers.embedding.huggingface_hub_embedding_driver.HuggingFaceHubEmbeddingDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/huggingface\_hub\_embedding\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> InferenceClient:
    return import_optional_dependency("huggingface_hub").InferenceClient(
        model=self.model,
        token=self.api_token,
    )
```

</details>

<span id="griptape.drivers.embedding.huggingface_hub_embedding_driver.HuggingFaceHubEmbeddingDriver.try_embed_chunk"></span>

### try\_embed\_chunk(chunk, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/huggingface\_hub\_embedding\_driver.py</code>

</summary>

```python
def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
    response = self.client.feature_extraction(chunk)

    return [float(val) for val in response.flatten().tolist()]
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
