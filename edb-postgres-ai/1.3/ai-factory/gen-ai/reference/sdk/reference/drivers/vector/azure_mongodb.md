---
title: azure_mongodb
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/azure_mongodb/
lastModified: 2025-11-07T18:06:05Z
---

# azure\_mongodb

- `__all__ = ['AzureMongoDbVectorStoreDriver']` <small>module-attribute</small>  <span id="griptape.drivers.vector.azure_mongodb.__all__"></span>

<span id="griptape.drivers.vector.azure_mongodb.AzureMongoDbVectorStoreDriver"></span>

Bases:
[`MongoDbAtlasVectorStoreDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/mongodb_atlas/#griptape.drivers.vector.mongodb_atlas.MongoDbAtlasVectorStoreDriver "MongoDbAtlasVectorStoreDriver (griptape.drivers.vector.mongodb_atlas.MongoDbAtlasVectorStoreDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/vector/azure\_mongodb\_vector\_store\_driver.py</code>

</summary>

```python
@define
class AzureMongoDbVectorStoreDriver(MongoDbAtlasVectorStoreDriver):
    """A Vector Store Driver for CosmosDB with MongoDB vCore API."""

    def query_vector(
        self,
        vector: list[float],
        *,
        count: Optional[int] = None,
        namespace: Optional[str] = None,
        include_vectors: bool = False,
        offset: Optional[int] = None,
        **kwargs,
    ) -> list[BaseVectorStoreDriver.Entry]:
        """Queries the MongoDB collection for documents that match the provided vector list.

        Results can be customized based on parameters like count, namespace, inclusion of vectors, offset, and index.
        """
        collection = self.get_collection()

        count = count or BaseVectorStoreDriver.DEFAULT_QUERY_COUNT
        offset = offset or 0

        pipeline = []

        pipeline.append(
            {
                "$search": {
                    "cosmosSearch": {
                        "vector": vector,
                        "path": self.vector_path,
                        "k": min(count * self.num_candidates_multiplier, self.MAX_NUM_CANDIDATES),
                    },
                    "returnStoredSource": True,
                },
            },
        )

        if namespace:
            pipeline.append({"$match": {"namespace": namespace}})

        pipeline.append({"$project": {"similarityScore": {"$meta": "searchScore"}, "document": "$$ROOT"}})

        return [
            BaseVectorStoreDriver.Entry(
                id=str(doc["_id"]),
                vector=doc[self.vector_path] if include_vectors else [],
                score=doc["similarityScore"],
                meta=doc["document"]["meta"],
                namespace=namespace,
            )
            for doc in collection.aggregate(pipeline)
        ]
```

</details>

<span id="griptape.drivers.vector.azure_mongodb.AzureMongoDbVectorStoreDriver.query_vector"></span>

### query\_vector(vector, \*, count=None, namespace=None, include\_vectors=False, offset=None, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/azure\_mongodb\_vector\_store\_driver.py</code>

</summary>

```python
def query_vector(
    self,
    vector: list[float],
    *,
    count: Optional[int] = None,
    namespace: Optional[str] = None,
    include_vectors: bool = False,
    offset: Optional[int] = None,
    **kwargs,
) -> list[BaseVectorStoreDriver.Entry]:
    """Queries the MongoDB collection for documents that match the provided vector list.

    Results can be customized based on parameters like count, namespace, inclusion of vectors, offset, and index.
    """
    collection = self.get_collection()

    count = count or BaseVectorStoreDriver.DEFAULT_QUERY_COUNT
    offset = offset or 0

    pipeline = []

    pipeline.append(
        {
            "$search": {
                "cosmosSearch": {
                    "vector": vector,
                    "path": self.vector_path,
                    "k": min(count * self.num_candidates_multiplier, self.MAX_NUM_CANDIDATES),
                },
                "returnStoredSource": True,
            },
        },
    )

    if namespace:
        pipeline.append({"$match": {"namespace": namespace}})

    pipeline.append({"$project": {"similarityScore": {"$meta": "searchScore"}, "document": "$$ROOT"}})

    return [
        BaseVectorStoreDriver.Entry(
            id=str(doc["_id"]),
            vector=doc[self.vector_path] if include_vectors else [],
            score=doc["similarityScore"],
            meta=doc["document"]["meta"],
            namespace=namespace,
        )
        for doc in collection.aggregate(pipeline)
    ]
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
