---
title: generic_artifact
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/generic_artifact/
lastModified: 2026-05-22T19:45:14+05:30
---

# generic\_artifact

- `T = TypeVar('T')` <small>module-attribute</small>  <span id="griptape.artifacts.generic_artifact.T"></span>

<span id="griptape.artifacts.generic_artifact.GenericArtifact"></span>

Bases:
[`BaseArtifact`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/#griptape.artifacts.BaseArtifact "BaseArtifact (griptape.artifacts.BaseArtifact)")
,  [`Generic[T]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/generic_artifact/#griptape.artifacts.generic_artifact.T "typing.Generic")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                                                 | Description                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/generic_artifact/#griptape.artifacts.generic_artifact.GenericArtifact.value" title="value = field(metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.artifacts.generic_artifact.GenericArtifact.value)"><code class="language-python">value</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/generic_artifact/#griptape.artifacts.generic_artifact.T" title="T = TypeVar('T')           module-attribute    (griptape.artifacts.generic_artifact.T)"><code class="language-python">T</code></a> | The value of the Artifact.<br/> |

<details>

<summary>

Source Code in <code>griptape/artifacts/generic\_artifact.py</code>

</summary>

```python
@define
class GenericArtifact(BaseArtifact, Generic[T]):
    """Serves as an escape hatch for artifacts that don't fit into any other category.

    Attributes:
        value: The value of the Artifact.
    """

    value: T = field(metadata={"serializable": True})

    def to_text(self) -> str:
        return str(self.value)
```

</details>

- `value = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.generic_artifact.GenericArtifact.value"></span>

<span id="griptape.artifacts.generic_artifact.GenericArtifact.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/artifacts/generic\_artifact.py</code>

</summary>

```python
def to_text(self) -> str:
    return str(self.value)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
