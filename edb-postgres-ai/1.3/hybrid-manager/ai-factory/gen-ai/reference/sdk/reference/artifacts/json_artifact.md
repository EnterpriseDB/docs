---
title: json_artifact
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/json_artifact/
lastModified: 2026-05-22T19:45:14+05:30
---

# json\_artifact

- `Json = Union[dict[str, 'Json'], list['Json'], str, int, float, bool, None]` <small>module-attribute</small>  <span id="griptape.artifacts.json_artifact.Json"></span>

<span id="griptape.artifacts.json_artifact.JsonArtifact"></span>

Bases:
[`BaseArtifact`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/#griptape.artifacts.BaseArtifact "BaseArtifact (griptape.artifacts.BaseArtifact)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/json_artifact/#griptape.artifacts.json_artifact.JsonArtifact.value" title="value = field(converter=lambda value: JsonArtifact.value_to_json(value), metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.artifacts.json_artifact.JsonArtifact.value)"><code class="language-python">value</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/json_artifact/#griptape.artifacts.json_artifact.Json" title="Json = Union[dict[str, 'Json'], list['Json'], str, int, float, bool, None]           module-attribute    (griptape.artifacts.json_artifact.Json)"><code class="language-python">Json</code></a> | The JSON data. Values will automatically be converted to a JSON-compatible format.<br/> |

<details>

<summary>

Source Code in <code>griptape/artifacts/json\_artifact.py</code>

</summary>

```python
@define
class JsonArtifact(BaseArtifact):
    """Stores JSON data.

    Attributes:
        value: The JSON data. Values will automatically be converted to a JSON-compatible format.
    """

    value: Json = field(converter=lambda value: JsonArtifact.value_to_json(value), metadata={"serializable": True})

    @classmethod
    def value_to_json(cls, value: Any) -> Json:
        if isinstance(value, str):
            return json.loads(value)
        return json.loads(json.dumps(value))

    def to_text(self) -> str:
        return json.dumps(self.value)
```

</details>

- `value = field(converter=lambda value: JsonArtifact.value_to_json(value), metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.json_artifact.JsonArtifact.value"></span>

<span id="griptape.artifacts.json_artifact.JsonArtifact.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/artifacts/json\_artifact.py</code>

</summary>

```python
def to_text(self) -> str:
    return json.dumps(self.value)
```

</details>

<span id="griptape.artifacts.json_artifact.JsonArtifact.value_to_json"></span>

### value\_to\_json(value)classmethod

<details>

<summary>

Source Code in <code>griptape/artifacts/json\_artifact.py</code>

</summary>

```python
@classmethod
def value_to_json(cls, value: Any) -> Json:
    if isinstance(value, str):
        return json.loads(value)
    return json.loads(json.dumps(value))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
