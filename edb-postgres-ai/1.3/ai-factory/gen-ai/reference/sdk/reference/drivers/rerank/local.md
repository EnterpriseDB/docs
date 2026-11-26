---
title: local
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/local/
lastModified: 2025-11-07T18:06:05Z
---

# local

- `__all__ = ['LocalRerankDriver']` <small>module-attribute</small>  <span id="griptape.drivers.rerank.local.__all__"></span>

<span id="griptape.drivers.rerank.local.LocalRerankDriver"></span>

Bases:
[`BaseRerankDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/#griptape.drivers.rerank.BaseRerankDriver "BaseRerankDriver (griptape.drivers.rerank.BaseRerankDriver)")
,  [`FuturesExecutorMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/futures_executor_mixin/#griptape.mixins.futures_executor_mixin.FuturesExecutorMixin "FuturesExecutorMixin (griptape.mixins.futures_executor_mixin.FuturesExecutorMixin)")

<details>

<summary>

Source Code in <code>griptape/drivers/rerank/local\_rerank\_driver.py</code>

</summary>

```python
@define(kw_only=True)
class LocalRerankDriver(BaseRerankDriver, FuturesExecutorMixin):
    calculate_relatedness: Callable = field(default=lambda x, y: dot(x, y) / (norm(x) * norm(y)))
    embedding_driver: BaseEmbeddingDriver = field(
        kw_only=True, default=Factory(lambda: Defaults.drivers_config.embedding_driver), metadata={"serializable": True}
    )

    def run(self, query: str, artifacts: list[TextArtifact]) -> list[TextArtifact]:
        query_embedding = self.embedding_driver.embed(query, vector_operation="query")

        with self.create_futures_executor() as futures_executor:
            artifact_embeddings = execute_futures_list(
                [
                    futures_executor.submit(
                        with_contextvars(self.embedding_driver.embed_text_artifact), a, vector_operation="upsert"
                    )
                    for a in artifacts
                ],
            )

        artifacts_and_relatednesses = [
            (artifact, self.calculate_relatedness(query_embedding, artifact_embedding))
            for artifact, artifact_embedding in zip(artifacts, artifact_embeddings)
        ]

        artifacts_and_relatednesses.sort(key=operator.itemgetter(1), reverse=True)

        return [artifact for artifact, _ in artifacts_and_relatednesses]
```

</details>

- `calculate_relatedness = field(default=lambda x, y: dot(x, y) / norm(x) * norm(y))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.rerank.local.LocalRerankDriver.calculate_relatedness"></span>

- `embedding_driver = field(kw_only=True, default=Factory(lambda: Defaults.drivers_config.embedding_driver), metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.rerank.local.LocalRerankDriver.embedding_driver"></span>

<span id="griptape.drivers.rerank.local.LocalRerankDriver.run"></span>

### run(query, artifacts)

<details>

<summary>

Source Code in <code>griptape/drivers/rerank/local\_rerank\_driver.py</code>

</summary>

```python
def run(self, query: str, artifacts: list[TextArtifact]) -> list[TextArtifact]:
    query_embedding = self.embedding_driver.embed(query, vector_operation="query")

    with self.create_futures_executor() as futures_executor:
        artifact_embeddings = execute_futures_list(
            [
                futures_executor.submit(
                    with_contextvars(self.embedding_driver.embed_text_artifact), a, vector_operation="upsert"
                )
                for a in artifacts
            ],
        )

    artifacts_and_relatednesses = [
        (artifact, self.calculate_relatedness(query_embedding, artifact_embedding))
        for artifact, artifact_embedding in zip(artifacts, artifact_embeddings)
    ]

    artifacts_and_relatednesses.sort(key=operator.itemgetter(1), reverse=True)

    return [artifact for artifact, _ in artifacts_and_relatednesses]
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
