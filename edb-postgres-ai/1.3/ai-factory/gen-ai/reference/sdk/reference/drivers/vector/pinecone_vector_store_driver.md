---
title: pinecone_vector_store_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/pinecone_vector_store_driver/
lastModified: 2025-11-07T18:06:05Z
---

# pinecone\_vector\_store\_driver

<span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver"></span>

Bases:
[`BaseVectorStoreDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/#griptape.drivers.vector.BaseVectorStoreDriver "BaseVectorStoreDriver (griptape.drivers.vector.BaseVectorStoreDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pinecone\_vector\_store\_driver.py</code>

</summary>

```python
@define
class PineconeVectorStoreDriver(BaseVectorStoreDriver):
    api_key: str = field(kw_only=True, metadata={"serializable": True})
    index_name: str = field(kw_only=True, metadata={"serializable": True})
    environment: str = field(kw_only=True, metadata={"serializable": True})
    project_name: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    _client: Optional[pinecone.Pinecone] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )
    _index: Optional[pinecone.Index] = field(
        default=None, kw_only=True, alias="index", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> pinecone.Pinecone:
        return import_optional_dependency("pinecone").Pinecone(
            api_key=self.api_key,
            environment=self.environment,
            project_name=self.project_name,
        )

    @lazy_property()
    def index(self) -> pinecone.data.index.Index:
        return self.client.Index(self.index_name)

    def upsert_vector(
        self,
        vector: list[float],
        vector_id: Optional[str] = None,
        namespace: Optional[str] = None,
        meta: Optional[dict] = None,
        **kwargs,
    ) -> str:
        vector_id = vector_id or str_to_hash(str(vector))

        params: dict[str, Any] = {"namespace": namespace} | kwargs

        self.index.upsert(vectors=[(vector_id, vector, meta)], **params)  # pyright: ignore[reportArgumentType]

        return vector_id

    def load_entry(self, vector_id: str, *, namespace: Optional[str] = None) -> Optional[BaseVectorStoreDriver.Entry]:
        result = self.index.fetch(ids=[vector_id], namespace=namespace).to_dict()  # pyright: ignore[reportAttributeAccessIssue]
        vectors = list(result["vectors"].values())

        if len(vectors) > 0:
            vector = vectors[0]

            return BaseVectorStoreDriver.Entry(
                id=vector["id"],
                meta=vector["metadata"],
                vector=vector["values"],
                namespace=result["namespace"],
            )
        return None

    def load_entries(self, *, namespace: Optional[str] = None) -> list[BaseVectorStoreDriver.Entry]:
        # This is a hacky way to query up to 10,000 values from Pinecone. Waiting on an official API for fetching
        # all values from a namespace:
        # https://community.pinecone.io/t/is-there-a-way-to-query-all-the-vectors-and-or-metadata-from-a-namespace/797/5

        results = self.index.query(
            vector=self.embedding_driver.embed("", vector_operation="query"),
            top_k=10000,
            include_metadata=True,
            namespace=namespace,
        )

        return [
            BaseVectorStoreDriver.Entry(
                id=r["id"],
                vector=r["values"],
                meta=r["metadata"],
                namespace=results["namespace"],  # pyright: ignore[reportIndexIssue]
            )
            for r in results["matches"]  # pyright: ignore[reportIndexIssue]
        ]

    def query_vector(
        self,
        vector: list[float],
        *,
        count: Optional[int] = None,
        namespace: Optional[str] = None,
        include_vectors: bool = False,
        include_metadata: bool = True,
        **kwargs,
    ) -> list[BaseVectorStoreDriver.Entry]:
        params = {
            "top_k": count or BaseVectorStoreDriver.DEFAULT_QUERY_COUNT,
            "namespace": namespace,
            "include_values": include_vectors,
            "include_metadata": include_metadata,
        } | kwargs

        results = self.index.query(vector=vector, **params)

        return [
            BaseVectorStoreDriver.Entry(
                id=r["id"],
                vector=r["values"],
                score=r["score"],
                meta=r["metadata"],
                namespace=results["namespace"],  # pyright: ignore[reportIndexIssue]
            )
            for r in results["matches"]  # pyright: ignore[reportIndexIssue]
        ]

    def delete_vector(self, vector_id: str) -> NoReturn:
        raise NotImplementedError(f"{self.__class__.__name__} does not support deletion.")
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver._client"></span>

- `_index = field(default=None, kw_only=True, alias='index', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver._index"></span>

- `api_key = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver.api_key"></span>

- `environment = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver.environment"></span>

- `index_name = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver.index_name"></span>

- `project_name = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver.project_name"></span>

<span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pinecone\_vector\_store\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> pinecone.Pinecone:
    return import_optional_dependency("pinecone").Pinecone(
        api_key=self.api_key,
        environment=self.environment,
        project_name=self.project_name,
    )
```

</details>

<span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver.delete_vector"></span>

### delete\_vector(vector\_id)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pinecone\_vector\_store\_driver.py</code>

</summary>

```python
def delete_vector(self, vector_id: str) -> NoReturn:
    raise NotImplementedError(f"{self.__class__.__name__} does not support deletion.")
```

</details>

<span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver.index"></span>

### index()

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pinecone\_vector\_store\_driver.py</code>

</summary>

```python
@lazy_property()
def index(self) -> pinecone.data.index.Index:
    return self.client.Index(self.index_name)
```

</details>

<span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver.load_entries"></span>

### load\_entries(\*, namespace=None)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pinecone\_vector\_store\_driver.py</code>

</summary>

```python
def load_entries(self, *, namespace: Optional[str] = None) -> list[BaseVectorStoreDriver.Entry]:
    # This is a hacky way to query up to 10,000 values from Pinecone. Waiting on an official API for fetching
    # all values from a namespace:
    # https://community.pinecone.io/t/is-there-a-way-to-query-all-the-vectors-and-or-metadata-from-a-namespace/797/5

    results = self.index.query(
        vector=self.embedding_driver.embed("", vector_operation="query"),
        top_k=10000,
        include_metadata=True,
        namespace=namespace,
    )

    return [
        BaseVectorStoreDriver.Entry(
            id=r["id"],
            vector=r["values"],
            meta=r["metadata"],
            namespace=results["namespace"],  # pyright: ignore[reportIndexIssue]
        )
        for r in results["matches"]  # pyright: ignore[reportIndexIssue]
    ]
```

</details>

<span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver.load_entry"></span>

### load\_entry(vector\_id, \*, namespace=None)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pinecone\_vector\_store\_driver.py</code>

</summary>

```python
def load_entry(self, vector_id: str, *, namespace: Optional[str] = None) -> Optional[BaseVectorStoreDriver.Entry]:
    result = self.index.fetch(ids=[vector_id], namespace=namespace).to_dict()  # pyright: ignore[reportAttributeAccessIssue]
    vectors = list(result["vectors"].values())

    if len(vectors) > 0:
        vector = vectors[0]

        return BaseVectorStoreDriver.Entry(
            id=vector["id"],
            meta=vector["metadata"],
            vector=vector["values"],
            namespace=result["namespace"],
        )
    return None
```

</details>

<span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver.query_vector"></span>

### query\_vector(vector, \*, count=None, namespace=None, include\_vectors=False, include\_metadata=True, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pinecone\_vector\_store\_driver.py</code>

</summary>

```python
def query_vector(
    self,
    vector: list[float],
    *,
    count: Optional[int] = None,
    namespace: Optional[str] = None,
    include_vectors: bool = False,
    include_metadata: bool = True,
    **kwargs,
) -> list[BaseVectorStoreDriver.Entry]:
    params = {
        "top_k": count or BaseVectorStoreDriver.DEFAULT_QUERY_COUNT,
        "namespace": namespace,
        "include_values": include_vectors,
        "include_metadata": include_metadata,
    } | kwargs

    results = self.index.query(vector=vector, **params)

    return [
        BaseVectorStoreDriver.Entry(
            id=r["id"],
            vector=r["values"],
            score=r["score"],
            meta=r["metadata"],
            namespace=results["namespace"],  # pyright: ignore[reportIndexIssue]
        )
        for r in results["matches"]  # pyright: ignore[reportIndexIssue]
    ]
```

</details>

<span id="griptape.drivers.vector.pinecone_vector_store_driver.PineconeVectorStoreDriver.upsert_vector"></span>

### upsert\_vector(vector, vector\_id=None, namespace=None, meta=None, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pinecone\_vector\_store\_driver.py</code>

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
    vector_id = vector_id or str_to_hash(str(vector))

    params: dict[str, Any] = {"namespace": namespace} | kwargs

    self.index.upsert(vectors=[(vector_id, vector, meta)], **params)  # pyright: ignore[reportArgumentType]

    return vector_id
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
