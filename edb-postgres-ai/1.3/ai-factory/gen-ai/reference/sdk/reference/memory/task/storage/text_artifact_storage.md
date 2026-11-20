---
title: text_artifact_storage
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/task/storage/text_artifact_storage/
lastModified: 2025-11-07T18:06:05Z
---

# text\_artifact\_storage

<span id="griptape.memory.task.storage.text_artifact_storage.TextArtifactStorage"></span>

Bases:
[`BaseArtifactStorage`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/task/storage/#griptape.memory.task.storage.BaseArtifactStorage "BaseArtifactStorage (griptape.memory.task.storage.BaseArtifactStorage)")

<details>

<summary>

Source Code in <code>griptape/memory/task/storage/text\_artifact\_storage.py</code>

</summary>

```python
@define(kw_only=True)
class TextArtifactStorage(BaseArtifactStorage):
    vector_store_driver: BaseVectorStoreDriver = field(
        default=Factory(lambda: Defaults.drivers_config.vector_store_driver)
    )

    def can_store(self, artifact: BaseArtifact) -> bool:
        return isinstance(artifact, TextArtifact)

    def store_artifact(self, namespace: str, artifact: BaseArtifact) -> None:
        if isinstance(artifact, TextArtifact):
            self.vector_store_driver.upsert(artifact, namespace=namespace)
        else:
            raise ValueError("Artifact must be of instance TextArtifact")

    def load_artifacts(self, namespace: str) -> ListArtifact:
        return self.vector_store_driver.load_artifacts(namespace=namespace)
```

</details>

- `vector_store_driver = field(default=Factory(lambda: Defaults.drivers_config.vector_store_driver))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.task.storage.text_artifact_storage.TextArtifactStorage.vector_store_driver"></span>

<span id="griptape.memory.task.storage.text_artifact_storage.TextArtifactStorage.can_store"></span>

### can\_store(artifact)

<details>

<summary>

Source Code in <code>griptape/memory/task/storage/text\_artifact\_storage.py</code>

</summary>

```python
def can_store(self, artifact: BaseArtifact) -> bool:
    return isinstance(artifact, TextArtifact)
```

</details>

<span id="griptape.memory.task.storage.text_artifact_storage.TextArtifactStorage.load_artifacts"></span>

### load\_artifacts(namespace)

<details>

<summary>

Source Code in <code>griptape/memory/task/storage/text\_artifact\_storage.py</code>

</summary>

```python
def load_artifacts(self, namespace: str) -> ListArtifact:
    return self.vector_store_driver.load_artifacts(namespace=namespace)
```

</details>

<span id="griptape.memory.task.storage.text_artifact_storage.TextArtifactStorage.store_artifact"></span>

### store\_artifact(namespace, artifact)

<details>

<summary>

Source Code in <code>griptape/memory/task/storage/text\_artifact\_storage.py</code>

</summary>

```python
def store_artifact(self, namespace: str, artifact: BaseArtifact) -> None:
    if isinstance(artifact, TextArtifact):
        self.vector_store_driver.upsert(artifact, namespace=namespace)
    else:
        raise ValueError("Artifact must be of instance TextArtifact")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
