---
title: error_artifact
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/error_artifact/
lastModified: 2026-05-22T19:45:14+05:30
---

# error\_artifact

<span id="griptape.artifacts.error_artifact.ErrorArtifact"></span>

Bases:
[`BaseArtifact`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/#griptape.artifacts.BaseArtifact "BaseArtifact (griptape.artifacts.BaseArtifact)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Type                  | Description                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/error_artifact/#griptape.artifacts.error_artifact.ErrorArtifact.value" title="value = field(converter=str, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.artifacts.error_artifact.ErrorArtifact.value)"><code class="language-python">value</code></a>                               | `str`                 | The error message.<br/>                                     |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/error_artifact/#griptape.artifacts.error_artifact.ErrorArtifact.exception" title="exception = field(default=None, kw_only=True, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.artifacts.error_artifact.ErrorArtifact.exception)"><code class="language-python">exception</code></a> | `Optional[Exception]` | The exception that caused the error. Defaults to None.<br/> |

<details>

<summary>

Source Code in <code>griptape/artifacts/error\_artifact.py</code>

</summary>

```python
@define
class ErrorArtifact(BaseArtifact):
    """Represents an error that may want to be conveyed to the LLM.

    Attributes:
        value: The error message.
        exception: The exception that caused the error. Defaults to None.
    """

    value: str = field(converter=str, metadata={"serializable": True})
    exception: Optional[Exception] = field(default=None, kw_only=True, metadata={"serializable": False})

    def to_text(self) -> str:
        return self.value
```

</details>

- `exception = field(default=None, kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.error_artifact.ErrorArtifact.exception"></span>

- `value = field(converter=str, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.error_artifact.ErrorArtifact.value"></span>

<span id="griptape.artifacts.error_artifact.ErrorArtifact.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/artifacts/error\_artifact.py</code>

</summary>

```python
def to_text(self) -> str:
    return self.value
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
