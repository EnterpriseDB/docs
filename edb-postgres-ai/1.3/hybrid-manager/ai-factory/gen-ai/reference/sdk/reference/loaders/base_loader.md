---
title: base_loader
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/loaders/base_loader/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_loader

- `A = TypeVar('A', bound=BaseArtifact)` <small>module-attribute</small>  <span id="griptape.loaders.base_loader.A"></span>

- `F = TypeVar('F')` <small>module-attribute</small>  <span id="griptape.loaders.base_loader.F"></span>

- `S = TypeVar('S')` <small>module-attribute</small>  <span id="griptape.loaders.base_loader.S"></span>

<span id="griptape.loaders.base_loader.BaseLoader"></span>

Bases:
[`FuturesExecutorMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/futures_executor_mixin/#griptape.mixins.futures_executor_mixin.FuturesExecutorMixin "FuturesExecutorMixin (griptape.mixins.futures_executor_mixin.FuturesExecutorMixin)")
, <span title="abc.ABC">ABC</span>,  [`Generic[S, F, A]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/loaders/base_loader/#griptape.loaders.base_loader.S "typing.Generic")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                   | Description                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/loaders/base_loader/#griptape.loaders.base_loader.BaseLoader.reference" title="reference = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.loaders.base_loader.BaseLoader.reference)"><code class="language-python">reference</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/#griptape.common.Reference" title="Reference (griptape.common.Reference)"><code class="language-python">Optional\[Reference]</code></a> | The optional `Reference` to set on the Artifact.<br/> |

<details>

<summary>

Source Code in <code>griptape/loaders/base\_loader.py</code>

</summary>

```python
@define
class BaseLoader(FuturesExecutorMixin, ABC, Generic[S, F, A]):
    """Fetches data from a source, parses it, and returns an Artifact.

    Attributes:
        reference: The optional `Reference` to set on the Artifact.
    """

    reference: Optional[Reference] = field(default=None, kw_only=True)

    def load(self, source: S) -> A:
        data = self.fetch(source)

        return self.parse(data)

    @abstractmethod
    def fetch(self, source: S) -> F:
        """Fetches data from the source."""

    def parse(self, data: F) -> A:
        """Parses the fetched data and returns an Artifact."""
        artifact = self.try_parse(data)

        artifact.reference = self.reference

        return artifact

    def try_parse(self, data: F) -> A:
        """Parses the fetched data and returns an Artifact."""
        # TODO: Mark as abstract method for griptape 2.0
        raise NotImplementedError

    def load_collection(
        self,
        sources: list[Any],
    ) -> Mapping[str, A]:
        """Loads a collection of sources and returns a dictionary of Artifacts."""
        # Create a dictionary before actually submitting the jobs to the executor
        # to avoid duplicate work.
        sources_by_key = {self.to_key(source): source for source in sources}

        with self.create_futures_executor() as futures_executor:
            return execute_futures_dict(
                {
                    key: futures_executor.submit(with_contextvars(self.load), source)
                    for key, source in sources_by_key.items()
                },
            )

    def to_key(self, source: S) -> str:
        """Converts the source to a key for the collection."""
        if isinstance(source, bytes):
            return bytes_to_hash(source)
        return str_to_hash(str(source))
```

</details>

- `reference = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.loaders.base_loader.BaseLoader.reference"></span>

<span id="griptape.loaders.base_loader.BaseLoader.fetch"></span>

### fetch(source)abstractmethod

<details>

<summary>

Source Code in <code>griptape/loaders/base\_loader.py</code>

</summary>

```python
@abstractmethod
def fetch(self, source: S) -> F:
    """Fetches data from the source."""
```

</details>

<span id="griptape.loaders.base_loader.BaseLoader.load"></span>

### load(source)

<details>

<summary>

Source Code in <code>griptape/loaders/base\_loader.py</code>

</summary>

```python
def load(self, source: S) -> A:
    data = self.fetch(source)

    return self.parse(data)
```

</details>

<span id="griptape.loaders.base_loader.BaseLoader.load_collection"></span>

### load\_collection(sources)

<details>

<summary>

Source Code in <code>griptape/loaders/base\_loader.py</code>

</summary>

```python
def load_collection(
    self,
    sources: list[Any],
) -> Mapping[str, A]:
    """Loads a collection of sources and returns a dictionary of Artifacts."""
    # Create a dictionary before actually submitting the jobs to the executor
    # to avoid duplicate work.
    sources_by_key = {self.to_key(source): source for source in sources}

    with self.create_futures_executor() as futures_executor:
        return execute_futures_dict(
            {
                key: futures_executor.submit(with_contextvars(self.load), source)
                for key, source in sources_by_key.items()
            },
        )
```

</details>

<span id="griptape.loaders.base_loader.BaseLoader.parse"></span>

### parse(data)

<details>

<summary>

Source Code in <code>griptape/loaders/base\_loader.py</code>

</summary>

```python
def parse(self, data: F) -> A:
    """Parses the fetched data and returns an Artifact."""
    artifact = self.try_parse(data)

    artifact.reference = self.reference

    return artifact
```

</details>

<span id="griptape.loaders.base_loader.BaseLoader.to_key"></span>

### to\_key(source)

<details>

<summary>

Source Code in <code>griptape/loaders/base\_loader.py</code>

</summary>

```python
def to_key(self, source: S) -> str:
    """Converts the source to a key for the collection."""
    if isinstance(source, bytes):
        return bytes_to_hash(source)
    return str_to_hash(str(source))
```

</details>

<span id="griptape.loaders.base_loader.BaseLoader.try_parse"></span>

### try\_parse(data)

<details>

<summary>

Source Code in <code>griptape/loaders/base\_loader.py</code>

</summary>

```python
def try_parse(self, data: F) -> A:
    """Parses the fetched data and returns an Artifact."""
    # TODO: Mark as abstract method for griptape 2.0
    raise NotImplementedError
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
