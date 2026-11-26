---
title: nvidia_nim
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/nvidia_nim/
lastModified: 2026-05-22T19:45:14+05:30
---

# nvidia\_nim

- `__all__ = ['NvidiaNimEmbeddingDriver']` <small>module-attribute</small>  <span id="griptape.drivers.embedding.nvidia_nim.__all__"></span>

<span id="griptape.drivers.embedding.nvidia_nim.NvidiaNimEmbeddingDriver"></span>

Bases:
[`OpenAiEmbeddingDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai/#griptape.drivers.embedding.openai.OpenAiEmbeddingDriver "OpenAiEmbeddingDriver (griptape.drivers.embedding.openai.OpenAiEmbeddingDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/nvidia\_nim\_embedding\_driver.py</code>

</summary>

```python
@define
class NvidiaNimEmbeddingDriver(OpenAiEmbeddingDriver):
    """Nvidia Embedding Driver. The API is OpenAI compatible, but requires an extra parameter 'input_type'."""

    def try_embed_chunk(self, chunk: str, *, vector_operation: VectorOperation | None = None, **kwargs) -> list[float]:
        if vector_operation not in get_args(VectorOperation):
            raise ValueError(f"invalid value for vector_operation, must be one of {get_args(VectorOperation)}")

        extra_body = {
            "input_type": "query" if vector_operation == "query" else "passage",
        }

        return self.client.embeddings.create(**self._params(chunk), extra_body=extra_body).data[0].embedding
```

</details>

<span id="griptape.drivers.embedding.nvidia_nim.NvidiaNimEmbeddingDriver.try_embed_chunk"></span>

### try\_embed\_chunk(chunk, \*, vector\_operation=None, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/nvidia\_nim\_embedding\_driver.py</code>

</summary>

```python
def try_embed_chunk(self, chunk: str, *, vector_operation: VectorOperation | None = None, **kwargs) -> list[float]:
    if vector_operation not in get_args(VectorOperation):
        raise ValueError(f"invalid value for vector_operation, must be one of {get_args(VectorOperation)}")

    extra_body = {
        "input_type": "query" if vector_operation == "query" else "passage",
    }

    return self.client.embeddings.create(**self._params(chunk), extra_body=extra_body).data[0].embedding
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
