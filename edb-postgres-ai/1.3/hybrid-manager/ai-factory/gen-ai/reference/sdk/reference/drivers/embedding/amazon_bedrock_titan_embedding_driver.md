---
title: amazon_bedrock_titan_embedding_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_bedrock_titan_embedding_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# amazon\_bedrock\_titan\_embedding\_driver

<span id="griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver"></span>

Bases:
[`BaseEmbeddingDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/#griptape.drivers.embedding.BaseEmbeddingDriver "BaseEmbeddingDriver (griptape.drivers.embedding.BaseEmbeddingDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                                                                 | Description                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_bedrock_titan_embedding_driver/#griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.model" title="model = field(default=DEFAULT_MODEL, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.model)"><code class="language-python">model</code></a>                                                  | `str`                                                                                                                                                                                                                                                                                                                                | Embedding model name. Defaults to DEFAULT\_MODEL.<br/>   |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_bedrock_titan_embedding_driver/#griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.tokenizer" title="tokenizer = field(default=Factory(lambda self: AmazonBedrockTokenizer(model=self.model), takes_self=True), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.tokenizer)"><code class="language-python">tokenizer</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/base_tokenizer/#griptape.tokenizers.base_tokenizer.BaseTokenizer" title="BaseTokenizer (griptape.tokenizers.base_tokenizer.BaseTokenizer)"><code class="language-python">BaseTokenizer</code></a> | Optionally provide custom `BedrockTitanTokenizer`.<br/>  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_bedrock_titan_embedding_driver/#griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.session" title="session = field(default=Factory(lambda: import_optional_dependency('boto3').Session()), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.session)"><code class="language-python">session</code></a>                          | `Session`                                                                                                                                                                                                                                                                                                                            | Optionally provide custom `boto3.Session`.<br/>          |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_bedrock_titan_embedding_driver/#griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.client" title="client() (griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.client)"><code class="language-python">client</code></a>                                                                                                                                                                                | `BedrockRuntimeClient`                                                                                                                                                                                                                                                                                                               | Optionally provide custom `bedrock-runtime` client.<br/> |

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/amazon\_bedrock\_titan\_embedding\_driver.py</code>

</summary>

```python
@define
class AmazonBedrockTitanEmbeddingDriver(BaseEmbeddingDriver):
    """Amazon Bedrock Titan Embedding Driver.

    Attributes:
        model: Embedding model name. Defaults to DEFAULT_MODEL.
        tokenizer: Optionally provide custom `BedrockTitanTokenizer`.
        session: Optionally provide custom `boto3.Session`.
        client: Optionally provide custom `bedrock-runtime` client.
    """

    DEFAULT_MODEL = "amazon.titan-embed-text-v1"

    model: str = field(default=DEFAULT_MODEL, kw_only=True, metadata={"serializable": True})
    session: boto3.Session = field(default=Factory(lambda: import_optional_dependency("boto3").Session()), kw_only=True)
    tokenizer: BaseTokenizer = field(
        default=Factory(lambda self: AmazonBedrockTokenizer(model=self.model), takes_self=True),
        kw_only=True,
    )
    _client: Optional[BedrockRuntimeClient] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> BedrockRuntimeClient:
        return self.session.client("bedrock-runtime")

    def try_embed_artifact(self, artifact: TextArtifact | ImageArtifact, **kwargs) -> list[float]:
        if isinstance(artifact, TextArtifact):
            return self.try_embed_chunk(artifact.value)
        return self._invoke_model({"inputImage": base64.b64encode(artifact.value).decode()})["embedding"]

    def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
        return self._invoke_model(
            {
                "inputText": chunk,
            }
        )["embedding"]

    def _invoke_model(self, payload: dict) -> dict[str, Any]:
        response = self.client.invoke_model(
            body=json.dumps(payload),
            modelId=self.model,
            accept="application/json",
            contentType="application/json",
        )
        return json.loads(response.get("body").read())
```

</details>

- `DEFAULT_MODEL = 'amazon.titan-embed-text-v1'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.DEFAULT_MODEL"></span>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver._client"></span>

- `model = field(default=DEFAULT_MODEL, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.model"></span>

- `session = field(default=Factory(lambda: import_optional_dependency('boto3').Session()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.session"></span>

- `tokenizer = field(default=Factory(lambda self: AmazonBedrockTokenizer(model=self.model), takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.tokenizer"></span>

<span id="griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver._invoke_model"></span>

### \_invoke\_model(payload)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/amazon\_bedrock\_titan\_embedding\_driver.py</code>

</summary>

```python
def _invoke_model(self, payload: dict) -> dict[str, Any]:
    response = self.client.invoke_model(
        body=json.dumps(payload),
        modelId=self.model,
        accept="application/json",
        contentType="application/json",
    )
    return json.loads(response.get("body").read())
```

</details>

<span id="griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/amazon\_bedrock\_titan\_embedding\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> BedrockRuntimeClient:
    return self.session.client("bedrock-runtime")
```

</details>

<span id="griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.try_embed_artifact"></span>

### try\_embed\_artifact(artifact, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/amazon\_bedrock\_titan\_embedding\_driver.py</code>

</summary>

```python
def try_embed_artifact(self, artifact: TextArtifact | ImageArtifact, **kwargs) -> list[float]:
    if isinstance(artifact, TextArtifact):
        return self.try_embed_chunk(artifact.value)
    return self._invoke_model({"inputImage": base64.b64encode(artifact.value).decode()})["embedding"]
```

</details>

<span id="griptape.drivers.embedding.amazon_bedrock_titan_embedding_driver.AmazonBedrockTitanEmbeddingDriver.try_embed_chunk"></span>

### try\_embed\_chunk(chunk, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/amazon\_bedrock\_titan\_embedding\_driver.py</code>

</summary>

```python
def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
    return self._invoke_model(
        {
            "inputText": chunk,
        }
    )["embedding"]
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
