---
title: model_artifact
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/model_artifact/
lastModified: 2025-11-07T18:06:05Z
---

# model\_artifact

<span id="griptape.artifacts.model_artifact.ModelArtifact"></span>

Bases:
[`GenericArtifact[BaseModel]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/generic_artifact/#griptape.artifacts.generic_artifact.GenericArtifact "GenericArtifact (griptape.artifacts.generic_artifact.GenericArtifact)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                          | Type        | Description                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/model_artifact/#griptape.artifacts.model_artifact.ModelArtifact.value" title="value = field(metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.artifacts.model_artifact.ModelArtifact.value)"><code class="language-python">value</code></a> | `BaseModel` | The pydantic model to store.<br/> |

<details>

<summary>

Source Code in <code>griptape/artifacts/model\_artifact.py</code>

</summary>

```python
@define
class ModelArtifact(GenericArtifact[BaseModel]):
    """Stores Pydantic models as Artifacts.

    Required since Pydantic models require a custom serialization method.

    Attributes:
        value: The pydantic model to store.
    """

    # We must explicitly define the type rather than rely on the parent T since
    # generic type information is lost at runtime.
    value: BaseModel = field(metadata={"serializable": True})

    def to_text(self) -> str:
        return self.value.model_dump_json()
```

</details>

- `value = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.model_artifact.ModelArtifact.value"></span>

<span id="griptape.artifacts.model_artifact.ModelArtifact.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/artifacts/model\_artifact.py</code>

</summary>

```python
def to_text(self) -> str:
    return self.value.model_dump_json()
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
