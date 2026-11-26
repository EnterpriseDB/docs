---
title: pgai_knowledge_base_vector_store_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/pgai_knowledge_base_vector_store_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# pgai\_knowledge\_base\_vector\_store\_driver

- `logger = logging.getLogger(__name__)` <small>module-attribute</small>  <span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.logger"></span>

<span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver"></span>

Bases:
[`BaseVectorStoreDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/#griptape.drivers.vector.BaseVectorStoreDriver "BaseVectorStoreDriver (griptape.drivers.vector.BaseVectorStoreDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pgai\_knowledge\_base\_vector\_store\_driver.py</code>

</summary>

```python
@define
class PgAiKnowledgeBaseVectorStoreDriver(BaseVectorStoreDriver):
    connection_string: str = field(kw_only=True, metadata={"serializable": True})
    knowledge_base_name: str = field(kw_only=True, metadata={"serializable": True})
    embedding_driver: BaseEmbeddingDriver = field(
        default=Factory(lambda: DummyEmbeddingDriver()),
        metadata={"serializable": True},
        kw_only=True,
        init=False,
    )
    _engine: sqlalchemy.Engine = field(default=None, kw_only=True, alias="engine", metadata={"serializable": False})

    @lazy_property()
    def engine(self) -> sqlalchemy.Engine:
        return import_optional_dependency("sqlalchemy").create_engine(self.connection_string)

    def query(
        self,
        query: str | TextArtifact | ImageArtifact,
        *,
        count: Optional[int] = BaseVectorStoreDriver.DEFAULT_QUERY_COUNT,
        **kwargs,
    ) -> list[BaseVectorStoreDriver.Entry]:
        if isinstance(query, ImageArtifact):
            raise ValueError(f"{self.__class__.__name__} does not support querying with Image Artifacts.")

        sqlalchemy = import_optional_dependency("sqlalchemy")

        with sqlalchemy.orm.Session(self.engine) as session:
            rows = session.query(sqlalchemy.func.aidb.retrieve_text(self.knowledge_base_name, query, count)).all()

        entries = []
        for (row,) in rows:
            # Remove the first and last parentheses from the row and list by commas
            # Example: '(foo,bar)' -> ['foo', 'bar']
            row_list = "".join(row.replace("(", "", 1).rsplit(")", 1)).split(",")
            entries.append(
                BaseVectorStoreDriver.Entry(
                    id=row_list[0],
                    score=float(row_list[2]),
                    meta={"artifact": TextArtifact(row_list[1]).to_json()},
                )
            )

        return entries

    def upsert_vector(
        self,
        vector: list[float],
        vector_id: Optional[str] = None,
        namespace: Optional[str] = None,
        meta: Optional[dict] = None,
        **kwargs,
    ) -> str:
        raise NotImplementedError(f"{self.__class__.__name__} does not support vector upsert.")

    def upsert_text_artifact(
        self,
        artifact: TextArtifact,
        namespace: Optional[str] = None,
        meta: Optional[dict] = None,
        vector_id: Optional[str] = None,
        **kwargs,
    ) -> str:
        raise NotImplementedError(f"{self.__class__.__name__} does not support text artifact upsert.")

    def upsert_text(
        self,
        string: str,
        vector_id: Optional[str] = None,
        namespace: Optional[str] = None,
        meta: Optional[dict] = None,
        **kwargs,
    ) -> str:
        raise NotImplementedError(f"{self.__class__.__name__} does not support text upsert.")

    def load_entry(self, vector_id: str, *, namespace: Optional[str] = None) -> BaseVectorStoreDriver.Entry:
        raise NotImplementedError(f"{self.__class__.__name__} does not support entry loading.")

    def load_entries(self, *, namespace: Optional[str] = None) -> list[BaseVectorStoreDriver.Entry]:
        raise NotImplementedError(f"{self.__class__.__name__} does not support entry loading.")

    def load_artifacts(self, *, namespace: Optional[str] = None) -> ListArtifact:
        raise NotImplementedError(f"{self.__class__.__name__} does not support Artifact loading.")

    def delete_vector(self, vector_id: str) -> NoReturn:
        raise NotImplementedError(f"{self.__class__.__name__} does not support deletion.")
```

</details>

- `_engine = field(default=None, kw_only=True, alias='engine', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver._engine"></span>

- `connection_string = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver.connection_string"></span>

- `embedding_driver = field(default=Factory(lambda: DummyEmbeddingDriver()), metadata={'serializable': True}, kw_only=True, init=False)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver.embedding_driver"></span>

- `knowledge_base_name = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver.knowledge_base_name"></span>

<span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver.delete_vector"></span>

### delete\_vector(vector\_id)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pgai\_knowledge\_base\_vector\_store\_driver.py</code>

</summary>

```python
def delete_vector(self, vector_id: str) -> NoReturn:
    raise NotImplementedError(f"{self.__class__.__name__} does not support deletion.")
```

</details>

<span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver.engine"></span>

### engine()

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pgai\_knowledge\_base\_vector\_store\_driver.py</code>

</summary>

```python
@lazy_property()
def engine(self) -> sqlalchemy.Engine:
    return import_optional_dependency("sqlalchemy").create_engine(self.connection_string)
```

</details>

<span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver.load_artifacts"></span>

### load\_artifacts(\*, namespace=None)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pgai\_knowledge\_base\_vector\_store\_driver.py</code>

</summary>

```python
def load_artifacts(self, *, namespace: Optional[str] = None) -> ListArtifact:
    raise NotImplementedError(f"{self.__class__.__name__} does not support Artifact loading.")
```

</details>

<span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver.load_entries"></span>

### load\_entries(\*, namespace=None)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pgai\_knowledge\_base\_vector\_store\_driver.py</code>

</summary>

```python
def load_entries(self, *, namespace: Optional[str] = None) -> list[BaseVectorStoreDriver.Entry]:
    raise NotImplementedError(f"{self.__class__.__name__} does not support entry loading.")
```

</details>

<span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver.load_entry"></span>

### load\_entry(vector\_id, \*, namespace=None)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pgai\_knowledge\_base\_vector\_store\_driver.py</code>

</summary>

```python
def load_entry(self, vector_id: str, *, namespace: Optional[str] = None) -> BaseVectorStoreDriver.Entry:
    raise NotImplementedError(f"{self.__class__.__name__} does not support entry loading.")
```

</details>

<span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver.query"></span>

### query(query, \*, count=BaseVectorStoreDriver.DEFAULT\_QUERY\_COUNT, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pgai\_knowledge\_base\_vector\_store\_driver.py</code>

</summary>

```python
def query(
    self,
    query: str | TextArtifact | ImageArtifact,
    *,
    count: Optional[int] = BaseVectorStoreDriver.DEFAULT_QUERY_COUNT,
    **kwargs,
) -> list[BaseVectorStoreDriver.Entry]:
    if isinstance(query, ImageArtifact):
        raise ValueError(f"{self.__class__.__name__} does not support querying with Image Artifacts.")

    sqlalchemy = import_optional_dependency("sqlalchemy")

    with sqlalchemy.orm.Session(self.engine) as session:
        rows = session.query(sqlalchemy.func.aidb.retrieve_text(self.knowledge_base_name, query, count)).all()

    entries = []
    for (row,) in rows:
        # Remove the first and last parentheses from the row and list by commas
        # Example: '(foo,bar)' -> ['foo', 'bar']
        row_list = "".join(row.replace("(", "", 1).rsplit(")", 1)).split(",")
        entries.append(
            BaseVectorStoreDriver.Entry(
                id=row_list[0],
                score=float(row_list[2]),
                meta={"artifact": TextArtifact(row_list[1]).to_json()},
            )
        )

    return entries
```

</details>

<span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver.upsert_text"></span>

### upsert\_text(string, vector\_id=None, namespace=None, meta=None, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pgai\_knowledge\_base\_vector\_store\_driver.py</code>

</summary>

```python
def upsert_text(
    self,
    string: str,
    vector_id: Optional[str] = None,
    namespace: Optional[str] = None,
    meta: Optional[dict] = None,
    **kwargs,
) -> str:
    raise NotImplementedError(f"{self.__class__.__name__} does not support text upsert.")
```

</details>

<span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver.upsert_text_artifact"></span>

### upsert\_text\_artifact(artifact, namespace=None, meta=None, vector\_id=None, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pgai\_knowledge\_base\_vector\_store\_driver.py</code>

</summary>

```python
def upsert_text_artifact(
    self,
    artifact: TextArtifact,
    namespace: Optional[str] = None,
    meta: Optional[dict] = None,
    vector_id: Optional[str] = None,
    **kwargs,
) -> str:
    raise NotImplementedError(f"{self.__class__.__name__} does not support text artifact upsert.")
```

</details>

<span id="griptape.drivers.vector.pgai_knowledge_base_vector_store_driver.PgAiKnowledgeBaseVectorStoreDriver.upsert_vector"></span>

### upsert\_vector(vector, vector\_id=None, namespace=None, meta=None, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/pgai\_knowledge\_base\_vector\_store\_driver.py</code>

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
    raise NotImplementedError(f"{self.__class__.__name__} does not support vector upsert.")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
