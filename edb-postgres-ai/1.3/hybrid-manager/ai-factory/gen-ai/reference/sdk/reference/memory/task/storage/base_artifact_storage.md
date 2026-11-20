---
title: base_artifact_storage
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/memory/task/storage/base_artifact_storage/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_artifact\_storage

<span id="griptape.memory.task.storage.base_artifact_storage.BaseArtifactStorage"></span>

Bases:

<span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/memory/task/storage/base\_artifact\_storage.py</code>

</summary>

```python
@define
class BaseArtifactStorage(ABC):
    @abstractmethod
    def store_artifact(self, namespace: str, artifact: BaseArtifact) -> None: ...

    @abstractmethod
    def load_artifacts(self, namespace: str) -> ListArtifact: ...

    @abstractmethod
    def can_store(self, artifact: BaseArtifact) -> bool: ...
```

</details>

<span id="griptape.memory.task.storage.base_artifact_storage.BaseArtifactStorage.can_store"></span>

### can\_store(artifact)abstractmethod

<details>

<summary>

Source Code in <code>griptape/memory/task/storage/base\_artifact\_storage.py</code>

</summary>

```python
@abstractmethod
def can_store(self, artifact: BaseArtifact) -> bool: ...
```

</details>

<span id="griptape.memory.task.storage.base_artifact_storage.BaseArtifactStorage.load_artifacts"></span>

### load\_artifacts(namespace)abstractmethod

<details>

<summary>

Source Code in <code>griptape/memory/task/storage/base\_artifact\_storage.py</code>

</summary>

```python
@abstractmethod
def load_artifacts(self, namespace: str) -> ListArtifact: ...
```

</details>

<span id="griptape.memory.task.storage.base_artifact_storage.BaseArtifactStorage.store_artifact"></span>

### store\_artifact(namespace, artifact)abstractmethod

<details>

<summary>

Source Code in <code>griptape/memory/task/storage/base\_artifact\_storage.py</code>

</summary>

```python
@abstractmethod
def store_artifact(self, namespace: str, artifact: BaseArtifact) -> None: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
