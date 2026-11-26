---
title: boolean_artifact
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/boolean_artifact/
lastModified: 2025-11-07T18:06:05Z
---

# boolean\_artifact

<span id="griptape.artifacts.boolean_artifact.BooleanArtifact"></span>

Bases:
[`BaseArtifact`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/#griptape.artifacts.BaseArtifact "BaseArtifact (griptape.artifacts.BaseArtifact)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                    | Type   | Description             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/boolean_artifact/#griptape.artifacts.boolean_artifact.BooleanArtifact.value" title="value = field(converter=bool, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.artifacts.boolean_artifact.BooleanArtifact.value)"><code class="language-python">value</code></a> | `bool` | The boolean value.<br/> |

<details>

<summary>

Source Code in <code>griptape/artifacts/boolean\_artifact.py</code>

</summary>

```python
@define
class BooleanArtifact(BaseArtifact):
    """Stores a boolean value.

    Attributes:
        value: The boolean value.
    """

    value: bool = field(converter=bool, metadata={"serializable": True})

    @classmethod
    def parse_bool(cls, value: Union[str, bool]) -> BooleanArtifact:
        """Convert a string literal or bool to a BooleanArtifact. The string must be either "true" or "false"."""
        if value is not None:
            if isinstance(value, str):
                if value.lower() == "true":
                    return BooleanArtifact(value=True)
                if value.lower() == "false":
                    return BooleanArtifact(value=False)
            elif isinstance(value, bool):
                return BooleanArtifact(value)
        raise ValueError(f"Cannot convert '{value}' to BooleanArtifact")

    def __add__(self, other: BaseArtifact) -> BooleanArtifact:
        raise ValueError("Cannot add BooleanArtifact with other artifacts")

    def __eq__(self, value: object) -> bool:
        return self.value == value

    def to_text(self) -> str:
        return str(self.value).lower()
```

</details>

- `value = field(converter=bool, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.boolean_artifact.BooleanArtifact.value"></span>

<span id="griptape.artifacts.boolean_artifact.BooleanArtifact.__add__"></span>

### **add**(other)

<details>

<summary>

Source Code in <code>griptape/artifacts/boolean\_artifact.py</code>

</summary>

```python
def __add__(self, other: BaseArtifact) -> BooleanArtifact:
    raise ValueError("Cannot add BooleanArtifact with other artifacts")
```

</details>

<span id="griptape.artifacts.boolean_artifact.BooleanArtifact.__eq__"></span>

### **eq**(value)

<details>

<summary>

Source Code in <code>griptape/artifacts/boolean\_artifact.py</code>

</summary>

```python
def __eq__(self, value: object) -> bool:
    return self.value == value
```

</details>

<span id="griptape.artifacts.boolean_artifact.BooleanArtifact.parse_bool"></span>

### parse\_bool(value)classmethod

<details>

<summary>

Source Code in <code>griptape/artifacts/boolean\_artifact.py</code>

</summary>

```python
@classmethod
def parse_bool(cls, value: Union[str, bool]) -> BooleanArtifact:
    """Convert a string literal or bool to a BooleanArtifact. The string must be either "true" or "false"."""
    if value is not None:
        if isinstance(value, str):
            if value.lower() == "true":
                return BooleanArtifact(value=True)
            if value.lower() == "false":
                return BooleanArtifact(value=False)
        elif isinstance(value, bool):
            return BooleanArtifact(value)
    raise ValueError(f"Cannot convert '{value}' to BooleanArtifact")
```

</details>

<span id="griptape.artifacts.boolean_artifact.BooleanArtifact.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/artifacts/boolean\_artifact.py</code>

</summary>

```python
def to_text(self) -> str:
    return str(self.value).lower()
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
