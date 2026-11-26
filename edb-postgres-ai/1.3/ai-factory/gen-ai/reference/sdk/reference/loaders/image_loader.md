---
title: image_loader
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/image_loader/
lastModified: 2025-11-07T18:06:05Z
---

# image\_loader

<span id="griptape.loaders.image_loader.ImageLoader"></span>

Bases:
[`BaseFileLoader[ImageArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/#griptape.loaders.BaseFileLoader "BaseFileLoader (griptape.loaders.BaseFileLoader)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                         | Type            | Description                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/image_loader/#griptape.loaders.image_loader.ImageLoader.format" title="format = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.loaders.image_loader.ImageLoader.format)"><code class="language-python">format</code></a> | `Optional[str]` | If provided, attempts to ensure image artifacts are in this format when loaded. For example, when set to 'PNG', loading image.jpg will return an ImageArtifact containing the image bytes in PNG format.<br/> |

<details>

<summary>

Source Code in <code>griptape/loaders/image\_loader.py</code>

</summary>

```python
@define
class ImageLoader(BaseFileLoader[ImageArtifact]):
    """Loads images into image artifacts.

    Attributes:
        format: If provided, attempts to ensure image artifacts are in this format when loaded.
                For example, when set to 'PNG', loading image.jpg will return an ImageArtifact containing the image
                    bytes in PNG format.
    """

    format: Optional[str] = field(default=None, kw_only=True)

    def try_parse(self, data: bytes) -> ImageArtifact:
        pil_image = import_optional_dependency("PIL.Image")
        image = pil_image.open(BytesIO(data))

        # Normalize format only if requested.
        if self.format is not None:
            byte_stream = BytesIO()
            image.save(byte_stream, format=self.format)
            image = pil_image.open(byte_stream)
            data = byte_stream.getvalue()

        return ImageArtifact(data, format=image.format.lower(), width=image.width, height=image.height)
```

</details>

- `format = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.loaders.image_loader.ImageLoader.format"></span>

<span id="griptape.loaders.image_loader.ImageLoader.try_parse"></span>

### try\_parse(data)

<details>

<summary>

Source Code in <code>griptape/loaders/image\_loader.py</code>

</summary>

```python
def try_parse(self, data: bytes) -> ImageArtifact:
    pil_image = import_optional_dependency("PIL.Image")
    image = pil_image.open(BytesIO(data))

    # Normalize format only if requested.
    if self.format is not None:
        byte_stream = BytesIO()
        image.save(byte_stream, format=self.format)
        image = pil_image.open(byte_stream)
        data = byte_stream.getvalue()

    return ImageArtifact(data, format=image.format.lower(), width=image.width, height=image.height)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
