---
title: blob_artifact
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/blob_artifact/
lastModified: 2026-05-22T19:45:14+05:30
---

# blob\_artifact

<span id="griptape.artifacts.blob_artifact.BlobArtifact"></span>

Bases:
[`BaseArtifact`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/#griptape.artifacts.BaseArtifact "BaseArtifact (griptape.artifacts.BaseArtifact)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Type    | Description           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/blob_artifact/#griptape.artifacts.blob_artifact.BlobArtifact.value" title="value = field(converter=lambda value: value if isinstance(value, bytes) else str(value).encode(), metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.artifacts.blob_artifact.BlobArtifact.value)"><code class="language-python">value</code></a> | `bytes` | The binary data.<br/> |

<details>

<summary>

Source Code in <code>griptape/artifacts/blob\_artifact.py</code>

</summary>

```python
@define
class BlobArtifact(BaseArtifact):
    """Stores arbitrary binary data.

    Attributes:
        value: The binary data.
    """

    value: bytes = field(
        converter=lambda value: value if isinstance(value, bytes) else str(value).encode(),
        metadata={"serializable": True},
    )

    @property
    def base64(self) -> str:
        return base64.b64encode(self.value).decode(self.encoding)

    @property
    def mime_type(self) -> str:
        return "application/octet-stream"

    def to_bytes(self, **kwargs) -> bytes:
        return self.value

    def to_text(self) -> str:
        return self.value.decode(encoding=self.encoding, errors=self.encoding_error_handler)
```

</details>

- `base64` <small>property</small>  <span id="griptape.artifacts.blob_artifact.BlobArtifact.base64"></span>

- `mime_type` <small>property</small>  <span id="griptape.artifacts.blob_artifact.BlobArtifact.mime_type"></span>

- `value = field(converter=lambda value: value if isinstance(value, bytes) else str(value).encode(), metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.blob_artifact.BlobArtifact.value"></span>

<span id="griptape.artifacts.blob_artifact.BlobArtifact.to_bytes"></span>

### to\_bytes(\*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/artifacts/blob\_artifact.py</code>

</summary>

```python
def to_bytes(self, **kwargs) -> bytes:
    return self.value
```

</details>

<span id="griptape.artifacts.blob_artifact.BlobArtifact.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/artifacts/blob\_artifact.py</code>

</summary>

```python
def to_text(self) -> str:
    return self.value.decode(encoding=self.encoding, errors=self.encoding_error_handler)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
