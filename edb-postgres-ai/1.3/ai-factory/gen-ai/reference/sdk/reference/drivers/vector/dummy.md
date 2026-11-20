---
title: dummy
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/dummy/
lastModified: 2025-11-07T18:06:05Z
---

# dummy

- `__all__ = ['DummyVectorStoreDriver']` <small>module-attribute</small>  <span id="griptape.drivers.vector.dummy.__all__"></span>

<span id="griptape.drivers.vector.dummy.DummyVectorStoreDriver"></span>

Bases:
[`BaseVectorStoreDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/#griptape.drivers.vector.BaseVectorStoreDriver "BaseVectorStoreDriver (griptape.drivers.vector.BaseVectorStoreDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/vector/dummy\_vector\_store\_driver.py</code>

</summary>

```python
@define()
class DummyVectorStoreDriver(BaseVectorStoreDriver):
    embedding_driver: BaseEmbeddingDriver = field(
        kw_only=True,
        default=Factory(lambda: DummyEmbeddingDriver()),
        metadata={"serializable": True},
    )

    def delete_vector(self, vector_id: str) -> None:
        raise DummyError(__class__.__name__, "delete_vector")

    def upsert_vector(
        self,
        vector: list[float],
        vector_id: Optional[str] = None,
        namespace: Optional[str] = None,
        meta: Optional[dict] = None,
        **kwargs,
    ) -> str:
        raise DummyError(__class__.__name__, "upsert_vector")

    def load_entry(self, vector_id: str, *, namespace: Optional[str] = None) -> Optional[BaseVectorStoreDriver.Entry]:
        raise DummyError(__class__.__name__, "load_entry")

    def load_entries(self, *, namespace: Optional[str] = None) -> list[BaseVectorStoreDriver.Entry]:
        raise DummyError(__class__.__name__, "load_entries")

    def query_vector(
        self,
        vector: list[float],
        *,
        count: Optional[int] = None,
        namespace: Optional[str] = None,
        include_vectors: bool = False,
        **kwargs,
    ) -> list[BaseVectorStoreDriver.Entry]:
        raise DummyError(__class__.__name__, "query_vector")

    def query(
        self,
        query: str | TextArtifact | ImageArtifact,
        *,
        count: Optional[int] = None,
        namespace: Optional[str] = None,
        include_vectors: bool = False,
        **kwargs,
    ) -> list[BaseVectorStoreDriver.Entry]:
        raise DummyError(__class__.__name__, "query")
```

</details>

- `embedding_driver = field(kw_only=True, default=Factory(lambda: DummyEmbeddingDriver()), metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.dummy.DummyVectorStoreDriver.embedding_driver"></span>

<span id="griptape.drivers.vector.dummy.DummyVectorStoreDriver.delete_vector"></span>

### delete\_vector(vector\_id)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/dummy\_vector\_store\_driver.py</code>

</summary>

```python
def delete_vector(self, vector_id: str) -> None:
    raise DummyError(__class__.__name__, "delete_vector")
```

</details>

<span id="griptape.drivers.vector.dummy.DummyVectorStoreDriver.load_entries"></span>

### load\_entries(\*, namespace=None)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/dummy\_vector\_store\_driver.py</code>

</summary>

```python
def load_entries(self, *, namespace: Optional[str] = None) -> list[BaseVectorStoreDriver.Entry]:
    raise DummyError(__class__.__name__, "load_entries")
```

</details>

<span id="griptape.drivers.vector.dummy.DummyVectorStoreDriver.load_entry"></span>

### load\_entry(vector\_id, \*, namespace=None)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/dummy\_vector\_store\_driver.py</code>

</summary>

```python
def load_entry(self, vector_id: str, *, namespace: Optional[str] = None) -> Optional[BaseVectorStoreDriver.Entry]:
    raise DummyError(__class__.__name__, "load_entry")
```

</details>

<span id="griptape.drivers.vector.dummy.DummyVectorStoreDriver.query"></span>

### query(query, \*, count=None, namespace=None, include\_vectors=False, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/dummy\_vector\_store\_driver.py</code>

</summary>

```python
def query(
    self,
    query: str | TextArtifact | ImageArtifact,
    *,
    count: Optional[int] = None,
    namespace: Optional[str] = None,
    include_vectors: bool = False,
    **kwargs,
) -> list[BaseVectorStoreDriver.Entry]:
    raise DummyError(__class__.__name__, "query")
```

</details>

<span id="griptape.drivers.vector.dummy.DummyVectorStoreDriver.query_vector"></span>

### query\_vector(vector, \*, count=None, namespace=None, include\_vectors=False, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/dummy\_vector\_store\_driver.py</code>

</summary>

```python
def query_vector(
    self,
    vector: list[float],
    *,
    count: Optional[int] = None,
    namespace: Optional[str] = None,
    include_vectors: bool = False,
    **kwargs,
) -> list[BaseVectorStoreDriver.Entry]:
    raise DummyError(__class__.__name__, "query_vector")
```

</details>

<span id="griptape.drivers.vector.dummy.DummyVectorStoreDriver.upsert_vector"></span>

### upsert\_vector(vector, vector\_id=None, namespace=None, meta=None, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/dummy\_vector\_store\_driver.py</code>

</summary>

```python
def upsert_vector(
    self,
    vector: list[float],
    vector_id: Optional[str] = None,
    namespace: Optional[str] = None,
    meta: Optional[dict] = None,
    **kwargs,
) -> str:
    raise DummyError(__class__.__name__, "upsert_vector")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
