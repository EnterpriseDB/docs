---
title: text_loader
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/text_loader/
lastModified: 2025-11-07T18:06:05Z
---

# text\_loader

<span id="griptape.loaders.text_loader.TextLoader"></span>

Bases:
[`BaseFileLoader[TextArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/#griptape.loaders.BaseFileLoader "BaseFileLoader (griptape.loaders.BaseFileLoader)")

<details>

<summary>

Source Code in <code>griptape/loaders/text\_loader.py</code>

</summary>

```python
@define
class TextLoader(BaseFileLoader[TextArtifact]):
    encoding: str = field(default="utf-8", kw_only=True)

    def try_parse(self, data: str | bytes) -> TextArtifact:
        if isinstance(data, str):
            return TextArtifact(data, encoding=self.encoding)
        return TextArtifact(data.decode(self.encoding), encoding=self.encoding)
```

</details>

- `encoding = field(default='utf-8', kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.loaders.text_loader.TextLoader.encoding"></span>

<span id="griptape.loaders.text_loader.TextLoader.try_parse"></span>

### try\_parse(data)

<details>

<summary>

Source Code in <code>griptape/loaders/text\_loader.py</code>

</summary>

```python
def try_parse(self, data: str | bytes) -> TextArtifact:
    if isinstance(data, str):
        return TextArtifact(data, encoding=self.encoding)
    return TextArtifact(data.decode(self.encoding), encoding=self.encoding)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
