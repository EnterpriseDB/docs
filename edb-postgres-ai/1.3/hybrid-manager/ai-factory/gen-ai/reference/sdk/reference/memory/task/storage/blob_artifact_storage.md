---
title: blob_artifact_storage
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/memory/task/storage/blob_artifact_storage/
lastModified: 2026-05-22T19:45:14+05:30
---

# blob\_artifact\_storage

<span id="griptape.memory.task.storage.blob_artifact_storage.BlobArtifactStorage"></span>

Bases:
[`BaseArtifactStorage`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/memory/task/storage/#griptape.memory.task.storage.BaseArtifactStorage "BaseArtifactStorage (griptape.memory.task.storage.BaseArtifactStorage)")

<details>

<summary>

Source Code in <code>griptape/memory/task/storage/blob\_artifact\_storage.py</code>

</summary>

```python
@define
class BlobArtifactStorage(BaseArtifactStorage):
    blobs: dict[str, list[BlobArtifact]] = field(factory=dict, kw_only=True)

    def can_store(self, artifact: BaseArtifact) -> bool:
        return isinstance(artifact, BlobArtifact)

    def store_artifact(self, namespace: str, artifact: BaseArtifact) -> None:
        if isinstance(artifact, BlobArtifact):
            if namespace not in self.blobs:
                self.blobs[namespace] = []

            self.blobs[namespace].append(artifact)
        else:
            raise ValueError("Artifact must be of instance BlobArtifact")

    def load_artifacts(self, namespace: str) -> ListArtifact:
        return ListArtifact(next((blobs for key, blobs in self.blobs.items() if key == namespace), []))
```

</details>

- `blobs = field(factory=dict, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.task.storage.blob_artifact_storage.BlobArtifactStorage.blobs"></span>

<span id="griptape.memory.task.storage.blob_artifact_storage.BlobArtifactStorage.can_store"></span>

### can\_store(artifact)

<details>

<summary>

Source Code in <code>griptape/memory/task/storage/blob\_artifact\_storage.py</code>

</summary>

```python
def can_store(self, artifact: BaseArtifact) -> bool:
    return isinstance(artifact, BlobArtifact)
```

</details>

<span id="griptape.memory.task.storage.blob_artifact_storage.BlobArtifactStorage.load_artifacts"></span>

### load\_artifacts(namespace)

<details>

<summary>

Source Code in <code>griptape/memory/task/storage/blob\_artifact\_storage.py</code>

</summary>

```python
def load_artifacts(self, namespace: str) -> ListArtifact:
    return ListArtifact(next((blobs for key, blobs in self.blobs.items() if key == namespace), []))
```

</details>

<span id="griptape.memory.task.storage.blob_artifact_storage.BlobArtifactStorage.store_artifact"></span>

### store\_artifact(namespace, artifact)

<details>

<summary>

Source Code in <code>griptape/memory/task/storage/blob\_artifact\_storage.py</code>

</summary>

```python
def store_artifact(self, namespace: str, artifact: BaseArtifact) -> None:
    if isinstance(artifact, BlobArtifact):
        if namespace not in self.blobs:
            self.blobs[namespace] = []

        self.blobs[namespace].append(artifact)
    else:
        raise ValueError("Artifact must be of instance BlobArtifact")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
