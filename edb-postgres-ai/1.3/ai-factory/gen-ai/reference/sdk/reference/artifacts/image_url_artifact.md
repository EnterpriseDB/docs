---
title: image_url_artifact
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/image_url_artifact/
lastModified: 2025-11-07T18:06:05Z
---

# image\_url\_artifact

<span id="griptape.artifacts.image_url_artifact.ImageUrlArtifact"></span>

Bases:
[`UrlArtifact`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/url_artifact/#griptape.artifacts.url_artifact.UrlArtifact "UrlArtifact (griptape.artifacts.url_artifact.UrlArtifact)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                   | Type  | Description   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- | ------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/#griptape.artifacts.BaseArtifact.value" title="value = field()           class-attribute       instance-attribute    (griptape.artifacts.image_url_artifact.ImageUrlArtifact.value)"><code class="language-python">value</code></a> | `str` | The url.<br/> |

<details>

<summary>

Source Code in <code>griptape/artifacts/image\_url\_artifact.py</code>

</summary>

```python
class ImageUrlArtifact(UrlArtifact):
    """Stores a url to an image.

    Attributes:
        value: The url.
    """
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
