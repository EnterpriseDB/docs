---
title: google_embedding_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/google_embedding_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# google\_embedding\_driver

<span id="griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver"></span>

Bases:
[`BaseEmbeddingDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/#griptape.drivers.embedding.BaseEmbeddingDriver "BaseEmbeddingDriver (griptape.drivers.embedding.BaseEmbeddingDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Type            | Description                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/google_embedding_driver/#griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.api_key" title="api_key = field(default=None, kw_only=True, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.api_key)"><code class="language-python">api\_key</code></a>                        | `Optional[str]` | Google API key.<br/>                                                                                                                                                                                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/google_embedding_driver/#griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.model" title="model = field(default=DEFAULT_MODEL, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.model)"><code class="language-python">model</code></a>                         | `str`           | Google model name.<br/>                                                                                                                                                                                        |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/google_embedding_driver/#griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.task_type" title="task_type = field(default='retrieval_document', kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.task_type)"><code class="language-python">task\_type</code></a> | `str`           | Embedding model task type ([https://ai.google.dev/tutorials/python\\\_quickstart#use\\\_embeddings](https://ai.google.dev/tutorials/python_quickstart#use_embeddings)). Defaults to `retrieval_document`.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/google_embedding_driver/#griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.title" title="title = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.title)"><code class="language-python">title</code></a>                                  | `Optional[str]` | Optional title for the content. Only works with `retrieval_document` task type.<br/>                                                                                                                           |

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/google\_embedding\_driver.py</code>

</summary>

```python
@define
class GoogleEmbeddingDriver(BaseEmbeddingDriver):
    """Google Embedding Driver.

    Attributes:
        api_key: Google API key.
        model: Google model name.
        task_type: Embedding model task type (https://ai.google.dev/tutorials/python_quickstart#use_embeddings). Defaults to `retrieval_document`.
        title: Optional title for the content. Only works with `retrieval_document` task type.
    """

    DEFAULT_MODEL = "models/embedding-001"

    model: str = field(default=DEFAULT_MODEL, kw_only=True, metadata={"serializable": True})
    api_key: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": False})
    task_type: str = field(default="retrieval_document", kw_only=True, metadata={"serializable": True})
    title: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})

    def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
        genai = import_optional_dependency("google.generativeai")
        genai.configure(api_key=self.api_key)

        result = genai.embed_content(model=self.model, content=chunk, task_type=self.task_type, title=self.title)

        return result["embedding"]

    def _params(self, chunk: str) -> dict:
        return {"input": chunk, "model": self.model}
```

</details>

- `DEFAULT_MODEL = 'models/embedding-001'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.DEFAULT_MODEL"></span>

- `api_key = field(default=None, kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.api_key"></span>

- `model = field(default=DEFAULT_MODEL, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.model"></span>

- `task_type = field(default='retrieval_document', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.task_type"></span>

- `title = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.title"></span>

<span id="griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver._params"></span>

### \_params(chunk)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/google\_embedding\_driver.py</code>

</summary>

```python
def _params(self, chunk: str) -> dict:
    return {"input": chunk, "model": self.model}
```

</details>

<span id="griptape.drivers.embedding.google_embedding_driver.GoogleEmbeddingDriver.try_embed_chunk"></span>

### try\_embed\_chunk(chunk, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/google\_embedding\_driver.py</code>

</summary>

```python
def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
    genai = import_optional_dependency("google.generativeai")
    genai.configure(api_key=self.api_key)

    result = genai.embed_content(model=self.model, content=chunk, task_type=self.task_type, title=self.title)

    return result["embedding"]
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
