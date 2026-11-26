---
title: voyageai_embedding_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/voyageai_embedding_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# voyageai\_embedding\_driver

<span id="griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver"></span>

Bases:
[`BaseEmbeddingDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/#griptape.drivers.embedding.BaseEmbeddingDriver "BaseEmbeddingDriver (griptape.drivers.embedding.BaseEmbeddingDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                                    | Description                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/voyageai_embedding_driver/#griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.model" title="model = field(default=DEFAULT_MODEL, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.model)"><code class="language-python">model</code></a>                                                                   | `str`                                                                                                                                                                                                                                                                                                   | VoyageAI embedding model name. Defaults to `voyage-large-2`.<br/>                 |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/voyageai_embedding_driver/#griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.api_key" title="api_key = field(default=None, kw_only=True, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.api_key)"><code class="language-python">api\_key</code></a>                                                                  | `Optional[str]`                                                                                                                                                                                                                                                                                         | API key to pass directly. Defaults to `VOYAGE_API_KEY` environment variable.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/voyageai_embedding_driver/#griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.tokenizer" title="tokenizer = field(default=Factory(lambda self: VoyageAiTokenizer(model=self.model, api_key=self.api_key), takes_self=True), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.tokenizer)"><code class="language-python">tokenizer</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/#griptape.tokenizers.VoyageAiTokenizer" title="VoyageAiTokenizer (griptape.tokenizers.VoyageAiTokenizer)"><code class="language-python">VoyageAiTokenizer</code></a> | Optionally provide custom `VoyageAiTokenizer`.<br/>                               |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/voyageai_embedding_driver/#griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.client" title="client() (griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.client)"><code class="language-python">client</code></a>                                                                                                                                                                                                 | `Any`                                                                                                                                                                                                                                                                                                   | Optionally provide custom VoyageAI `Client`.<br/>                                 |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/voyageai_embedding_driver/#griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.input_type" title="input_type = field(default='document', kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.input_type)"><code class="language-python">input\_type</code></a>                                                 | `str`                                                                                                                                                                                                                                                                                                   | VoyageAI input type. Defaults to `document`.<br/>                                 |

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/voyageai\_embedding\_driver.py</code>

</summary>

```python
@define
class VoyageAiEmbeddingDriver(BaseEmbeddingDriver):
    """VoyageAI Embedding Driver.

    Attributes:
        model: VoyageAI embedding model name. Defaults to `voyage-large-2`.
        api_key: API key to pass directly. Defaults to `VOYAGE_API_KEY` environment variable.
        tokenizer: Optionally provide custom `VoyageAiTokenizer`.
        client: Optionally provide custom VoyageAI `Client`.
        input_type: VoyageAI input type. Defaults to `document`.
    """

    DEFAULT_MODEL = "voyage-large-2"

    model: str = field(default=DEFAULT_MODEL, kw_only=True, metadata={"serializable": True})
    api_key: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": False})
    tokenizer: VoyageAiTokenizer = field(
        default=Factory(lambda self: VoyageAiTokenizer(model=self.model, api_key=self.api_key), takes_self=True),
        kw_only=True,
    )
    input_type: str = field(default="document", kw_only=True, metadata={"serializable": True})
    _client: Optional[Client] = field(default=None, kw_only=True, alias="client", metadata={"serializable": False})

    @lazy_property()
    def client(self) -> Any:
        return import_optional_dependency("voyageai").Client(api_key=self.api_key)

    def try_embed_artifact(self, artifact: TextArtifact | ImageArtifact, **kwargs) -> list[float]:
        if isinstance(artifact, TextArtifact):
            return self.try_embed_chunk(artifact.value, **kwargs)
        pil_image = import_optional_dependency("PIL.Image")

        return self.client.multimodal_embed([[pil_image.open(BytesIO(artifact.value))]], model=self.model).embeddings[0]

    def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
        return self.client.embed([chunk], model=self.model, input_type=self.input_type).embeddings[0]
```

</details>

- `DEFAULT_MODEL = 'voyage-large-2'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.DEFAULT_MODEL"></span>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver._client"></span>

- `api_key = field(default=None, kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.api_key"></span>

- `input_type = field(default='document', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.input_type"></span>

- `model = field(default=DEFAULT_MODEL, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.model"></span>

- `tokenizer = field(default=Factory(lambda self: VoyageAiTokenizer(model=self.model, api_key=self.api_key), takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.tokenizer"></span>

<span id="griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/voyageai\_embedding\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> Any:
    return import_optional_dependency("voyageai").Client(api_key=self.api_key)
```

</details>

<span id="griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.try_embed_artifact"></span>

### try\_embed\_artifact(artifact, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/voyageai\_embedding\_driver.py</code>

</summary>

```python
def try_embed_artifact(self, artifact: TextArtifact | ImageArtifact, **kwargs) -> list[float]:
    if isinstance(artifact, TextArtifact):
        return self.try_embed_chunk(artifact.value, **kwargs)
    pil_image = import_optional_dependency("PIL.Image")

    return self.client.multimodal_embed([[pil_image.open(BytesIO(artifact.value))]], model=self.model).embeddings[0]
```

</details>

<span id="griptape.drivers.embedding.voyageai_embedding_driver.VoyageAiEmbeddingDriver.try_embed_chunk"></span>

### try\_embed\_chunk(chunk, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/voyageai\_embedding\_driver.py</code>

</summary>

```python
def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
    return self.client.embed([chunk], model=self.model, input_type=self.input_type).embeddings[0]
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
