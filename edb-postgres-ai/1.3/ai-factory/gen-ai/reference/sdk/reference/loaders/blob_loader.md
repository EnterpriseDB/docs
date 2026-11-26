---
title: blob_loader
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/blob_loader/
lastModified: 2025-11-07T18:06:05Z
---

# blob\_loader

<span id="griptape.loaders.blob_loader.BlobLoader"></span>

Bases:
[`BaseFileLoader[BlobArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/#griptape.loaders.BaseFileLoader "BaseFileLoader (griptape.loaders.BaseFileLoader)")

<details>

<summary>

Source Code in <code>griptape/loaders/blob\_loader.py</code>

</summary>

```python
@define
class BlobLoader(BaseFileLoader[BlobArtifact]):
    def try_parse(self, data: bytes) -> BlobArtifact:
        if self.encoding is None:
            return BlobArtifact(data)
        return BlobArtifact(data, encoding=self.encoding)
```

</details>

<span id="griptape.loaders.blob_loader.BlobLoader.try_parse"></span>

### try\_parse(data)

<details>

<summary>

Source Code in <code>griptape/loaders/blob\_loader.py</code>

</summary>

```python
def try_parse(self, data: bytes) -> BlobArtifact:
    if self.encoding is None:
        return BlobArtifact(data)
    return BlobArtifact(data, encoding=self.encoding)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
