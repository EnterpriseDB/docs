---
title: url_artifact
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/url_artifact/
lastModified: 2025-11-07T18:06:05Z
---

# url\_artifact

<span id="griptape.artifacts.url_artifact.UrlArtifact"></span>

Bases:
[`BaseArtifact`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/#griptape.artifacts.BaseArtifact "BaseArtifact (griptape.artifacts.BaseArtifact)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                | Type  | Description   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/url_artifact/#griptape.artifacts.url_artifact.UrlArtifact.value" title="value = field(metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.artifacts.url_artifact.UrlArtifact.value)"><code class="language-python">value</code></a> | `str` | The url.<br/> |

<details>

<summary>

Source Code in <code>griptape/artifacts/url\_artifact.py</code>

</summary>

```python
@define
class UrlArtifact(BaseArtifact):
    """Stores a url.

    Attributes:
        value: The url.
    """

    value: str = field(metadata={"serializable": True})

    def to_bytes(self, *, headers: dict | None = None, **kwargs: dict) -> bytes:
        """Fetches the content of the URL and returns it as bytes.

        Args:
            headers: Optional headers to include in the request.
            **kwargs: Additional keyword arguments, not used.

        Returns:
            bytes: The content of the URL as bytes.

        """
        response = requests.get(self.value, headers=headers)
        response.raise_for_status()

        return response.content

    def to_text(self) -> str:
        """Returns the URL as is."""
        return self.value
```

</details>

- `value = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.url_artifact.UrlArtifact.value"></span>

<span id="griptape.artifacts.url_artifact.UrlArtifact.to_bytes"></span>

### to\_bytes(\*, headers=None, \*\*kwargs)

Fetches the content of the URL and returns it as bytes.

#### Parameters

| Name       | Type           | Description                                      | Default |
| ---------- | -------------- | ------------------------------------------------ | ------- |
| `headers`  | `dict \| None` | Optional headers to include in the request.<br/> | `None`  |
| `**kwargs` | `dict`         | Additional keyword arguments, not used.<br/>     | `{}`    |

#### Returns

| Name    | Type    | Description                           |
| ------- | ------- | ------------------------------------- |
| `bytes` | `bytes` | The content of the URL as bytes.<br/> |

<details>

<summary>

Source Code in <code>griptape/artifacts/url\_artifact.py</code>

</summary>

```python
def to_bytes(self, *, headers: dict | None = None, **kwargs: dict) -> bytes:
    """Fetches the content of the URL and returns it as bytes.

    Args:
        headers: Optional headers to include in the request.
        **kwargs: Additional keyword arguments, not used.

    Returns:
        bytes: The content of the URL as bytes.

    """
    response = requests.get(self.value, headers=headers)
    response.raise_for_status()

    return response.content
```

</details>

<span id="griptape.artifacts.url_artifact.UrlArtifact.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/artifacts/url\_artifact.py</code>

</summary>

```python
def to_text(self) -> str:
    """Returns the URL as is."""
    return self.value
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
