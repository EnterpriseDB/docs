---
title: image_artifact
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/image_artifact/
lastModified: 2025-11-07T18:06:05Z
---

# image\_artifact

<span id="griptape.artifacts.image_artifact.ImageArtifact"></span>

Bases:
[`BlobArtifact`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/#griptape.artifacts.BlobArtifact "BlobArtifact (griptape.artifacts.BlobArtifact)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                            | Type  | Description                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | -------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/image_artifact/#griptape.artifacts.image_artifact.ImageArtifact.format" title="format = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.artifacts.image_artifact.ImageArtifact.format)"><code class="language-python">format</code></a> | `str` | The format of the image data. Used when building the MIME type.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/image_artifact/#griptape.artifacts.image_artifact.ImageArtifact.width" title="width = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.artifacts.image_artifact.ImageArtifact.width)"><code class="language-python">width</code></a>     | `int` | The width of the image.<br/>                                         |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/image_artifact/#griptape.artifacts.image_artifact.ImageArtifact.height" title="height = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.artifacts.image_artifact.ImageArtifact.height)"><code class="language-python">height</code></a> | `int` | The height of the image<br/>                                         |

<details>

<summary>

Source Code in <code>griptape/artifacts/image\_artifact.py</code>

</summary>

```python
@define
class ImageArtifact(BlobArtifact):
    """Stores image data.

    Attributes:
        format: The format of the image data. Used when building the MIME type.
        width: The width of the image.
        height: The height of the image
    """

    format: str = field(kw_only=True, metadata={"serializable": True})
    width: int = field(kw_only=True, metadata={"serializable": True})
    height: int = field(kw_only=True, metadata={"serializable": True})

    def __attrs_post_init__(self) -> None:
        # Generating the name string requires attributes set by child classes.
        # This waits until all attributes are available before generating a name.
        if self.name == self.id:
            self.name = self.make_name()

    @property
    def mime_type(self) -> str:
        return f"image/{self.format}"

    def to_bytes(self, **kwargs) -> bytes:
        return self.value

    def to_text(self) -> str:
        return f"Image, format: {self.format}, size: {len(self.value)} bytes"

    def make_name(self) -> str:
        entropy = "".join(random.choices(string.ascii_lowercase + string.digits, k=4))
        fmt_time = time.strftime("%y%m%d%H%M%S", time.localtime())

        return f"image_artifact_{fmt_time}_{entropy}.{self.format}"
```

</details>

- `format = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.image_artifact.ImageArtifact.format"></span>

- `height = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.image_artifact.ImageArtifact.height"></span>

- `mime_type` <small>property</small>  <span id="griptape.artifacts.image_artifact.ImageArtifact.mime_type"></span>

- `width = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.image_artifact.ImageArtifact.width"></span>

<span id="griptape.artifacts.image_artifact.ImageArtifact.__attrs_post_init__"></span>

### **attrs\_post\_init**()

<details>

<summary>

Source Code in <code>griptape/artifacts/image\_artifact.py</code>

</summary>

```python
def __attrs_post_init__(self) -> None:
    # Generating the name string requires attributes set by child classes.
    # This waits until all attributes are available before generating a name.
    if self.name == self.id:
        self.name = self.make_name()
```

</details>

<span id="griptape.artifacts.image_artifact.ImageArtifact.make_name"></span>

### make\_name()

<details>

<summary>

Source Code in <code>griptape/artifacts/image\_artifact.py</code>

</summary>

```python
def make_name(self) -> str:
    entropy = "".join(random.choices(string.ascii_lowercase + string.digits, k=4))
    fmt_time = time.strftime("%y%m%d%H%M%S", time.localtime())

    return f"image_artifact_{fmt_time}_{entropy}.{self.format}"
```

</details>

<span id="griptape.artifacts.image_artifact.ImageArtifact.to_bytes"></span>

### to\_bytes(\*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/artifacts/image\_artifact.py</code>

</summary>

```python
def to_bytes(self, **kwargs) -> bytes:
    return self.value
```

</details>

<span id="griptape.artifacts.image_artifact.ImageArtifact.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/artifacts/image\_artifact.py</code>

</summary>

```python
def to_text(self) -> str:
    return f"Image, format: {self.format}, size: {len(self.value)} bytes"
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
