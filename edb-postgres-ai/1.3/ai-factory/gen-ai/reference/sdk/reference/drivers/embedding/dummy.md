---
title: dummy
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/dummy/
lastModified: 2025-11-07T18:06:05Z
---

# dummy

- `__all__ = ['DummyEmbeddingDriver']` <small>module-attribute</small>  <span id="griptape.drivers.embedding.dummy.__all__"></span>

<span id="griptape.drivers.embedding.dummy.DummyEmbeddingDriver"></span>

Bases:
[`BaseEmbeddingDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/#griptape.drivers.embedding.BaseEmbeddingDriver "BaseEmbeddingDriver (griptape.drivers.embedding.BaseEmbeddingDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/dummy\_embedding\_driver.py</code>

</summary>

```python
@define
class DummyEmbeddingDriver(BaseEmbeddingDriver):
    model: None = field(init=False, default=None, kw_only=True)

    def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
        raise DummyError(__class__.__name__, "try_embed_chunk")
```

</details>

- `model = field(init=False, default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.embedding.dummy.DummyEmbeddingDriver.model"></span>

<span id="griptape.drivers.embedding.dummy.DummyEmbeddingDriver.try_embed_chunk"></span>

### try\_embed\_chunk(chunk, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/embedding/dummy\_embedding\_driver.py</code>

</summary>

```python
def try_embed_chunk(self, chunk: str, **kwargs) -> list[float]:
    raise DummyError(__class__.__name__, "try_embed_chunk")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
