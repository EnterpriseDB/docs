---
title: amazon_bedrock_cohere_embedding_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_bedrock_cohere_embedding_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# amazon\_bedrock\_cohere\_embedding\_driver

<span id="griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver"></span>

Bases:
[`BaseEmbeddingDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/#griptape.drivers.embedding.BaseEmbeddingDriver "BaseEmbeddingDriver (griptape.drivers.embedding.BaseEmbeddingDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_bedrock_cohere_embedding_driver/#griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.model" title="model = field(default=DEFAULT_MODEL, kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.model)"><code class="language-python">model</code></a>                                                                                   | `str`                                                                                                                                                                                                                                                                                                                                | Embedding model name. Defaults to DEFAULT\_MODEL.<br/>                                                                                                                                                                                                                        |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_bedrock_cohere_embedding_driver/#griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.input_type" title="input_type = field(default='search_query', kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.input_type)"><code class="language-python">input\_type</code></a>                                                             | `str`                                                                                                                                                                                                                                                                                                                                | Defaults to `search_query`. Prepends special tokens to differentiate each type from one another: `search_document` when you encode documents for embeddings that you store in a vector database. `search_query` when querying your vector DB to find relevant documents.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_bedrock_cohere_embedding_driver/#griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.session" title="session = field(default=Factory(lambda: import_optional_dependency('boto3').Session()), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.session)"><code class="language-python">session</code></a>                          | `Session`                                                                                                                                                                                                                                                                                                                            | Optionally provide custom `boto3.Session`.<br/>                                                                                                                                                                                                                               |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_bedrock_cohere_embedding_driver/#griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.tokenizer" title="tokenizer = field(default=Factory(lambda self: AmazonBedrockTokenizer(model=self.model), takes_self=True), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.tokenizer)"><code class="language-python">tokenizer</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/base_tokenizer/#griptape.tokenizers.base_tokenizer.BaseTokenizer" title="BaseTokenizer (griptape.tokenizers.base_tokenizer.BaseTokenizer)"><code class="language-python">BaseTokenizer</code></a> | Optionally provide custom `BedrockCohereTokenizer`.<br/>                                                                                                                                                                                                                      |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_bedrock_cohere_embedding_driver/#griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.client" title="client() (griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.client)"><code class="language-python">client</code></a>                                                                                                                                                                                | `BedrockRuntimeClient`                                                                                                                                                                                                                                                                                                               | Optionally provide custom `bedrock-runtime` client.<br/>                                                                                                                                                                                                                      |

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/amazon\_bedrock\_cohere\_embedding\_driver.py</code>

</summary>

```python
@define
class AmazonBedrockCohereEmbeddingDriver(BaseEmbeddingDriver):
    """Amazon Bedrock Cohere Embedding Driver.

    Attributes:
        model: Embedding model name. Defaults to DEFAULT_MODEL.
        input_type: Defaults to `search_query`. Prepends special tokens to differentiate each type from one another:
            `search_document` when you encode documents for embeddings that you store in a vector database.
            `search_query` when querying your vector DB to find relevant documents.
        session: Optionally provide custom `boto3.Session`.
        tokenizer: Optionally provide custom `BedrockCohereTokenizer`.
        client: Optionally provide custom `bedrock-runtime` client.
    """

    DEFAULT_MODEL = "cohere.embed-english-v3"

    model: str = field(default=DEFAULT_MODEL, kw_only=True)
    input_type: str = field(default="search_query", kw_only=True)
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

    def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
        payload = {"input_type": self.input_type, "texts": [chunk]}

        response = self.client.invoke_model(
            body=json.dumps(payload),
            modelId=self.model,
            accept="*/*",
            contentType="application/json",
        )
        response_body = json.loads(response.get("body").read())

        return response_body.get("embeddings")[0]
```

</details>

- `DEFAULT_MODEL = 'cohere.embed-english-v3'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.DEFAULT_MODEL"></span>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver._client"></span>

- `input_type = field(default='search_query', kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.input_type"></span>

- `model = field(default=DEFAULT_MODEL, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.model"></span>

- `session = field(default=Factory(lambda: import_optional_dependency('boto3').Session()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.session"></span>

- `tokenizer = field(default=Factory(lambda self: AmazonBedrockTokenizer(model=self.model), takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.tokenizer"></span>

<span id="griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/amazon\_bedrock\_cohere\_embedding\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> BedrockRuntimeClient:
    return self.session.client("bedrock-runtime")
```

</details>

<span id="griptape.drivers.embedding.amazon_bedrock_cohere_embedding_driver.AmazonBedrockCohereEmbeddingDriver.try_embed_chunk"></span>

### try\_embed\_chunk(chunk, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/amazon\_bedrock\_cohere\_embedding\_driver.py</code>

</summary>

```python
def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
    payload = {"input_type": self.input_type, "texts": [chunk]}

    response = self.client.invoke_model(
        body=json.dumps(payload),
        modelId=self.model,
        accept="*/*",
        contentType="application/json",
    )
    response_body = json.loads(response.get("body").read())

    return response_body.get("embeddings")[0]
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
