---
title: info_artifact
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/info_artifact/
lastModified: 2025-11-07T18:06:05Z
---

# info\_artifact

<span id="griptape.artifacts.info_artifact.InfoArtifact"></span>

Bases:
[`BaseArtifact`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/#griptape.artifacts.BaseArtifact "BaseArtifact (griptape.artifacts.BaseArtifact)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                    | Type  | Description              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------------------------ |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/info_artifact/#griptape.artifacts.info_artifact.InfoArtifact.value" title="value = field(converter=str, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.artifacts.info_artifact.InfoArtifact.value)"><code class="language-python">value</code></a> | `str` | The info to convey.<br/> |

<details>

<summary>

Source Code in <code>griptape/artifacts/info\_artifact.py</code>

</summary>

```python
@define
class InfoArtifact(BaseArtifact):
    """Represents helpful info that can be conveyed to the LLM.

    For example, "No results found" or "Please try again.".

    Attributes:
        value: The info to convey.
    """

    value: str = field(converter=str, metadata={"serializable": True})

    def to_text(self) -> str:
        return self.value
```

</details>

- `value = field(converter=str, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.info_artifact.InfoArtifact.value"></span>

<span id="griptape.artifacts.info_artifact.InfoArtifact.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/artifacts/info\_artifact.py</code>

</summary>

```python
def to_text(self) -> str:
    return self.value
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
