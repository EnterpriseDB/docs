---
title: json_loader
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/json_loader/
lastModified: 2025-11-07T18:06:05Z
---

# json\_loader

<span id="griptape.loaders.json_loader.JsonLoader"></span>

Bases:
[`BaseFileLoader[JsonArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/#griptape.loaders.BaseFileLoader "BaseFileLoader (griptape.loaders.BaseFileLoader)")

<details>

<summary>

Source Code in <code>griptape/loaders/json\_loader.py</code>

</summary>

```python
@define
class JsonLoader(BaseFileLoader[JsonArtifact]):
    def parse(self, data: bytes) -> JsonArtifact:
        return JsonArtifact(json.loads(data), encoding=self.encoding)
```

</details>

<span id="griptape.loaders.json_loader.JsonLoader.parse"></span>

### parse(data)

<details>

<summary>

Source Code in <code>griptape/loaders/json\_loader.py</code>

</summary>

```python
def parse(self, data: bytes) -> JsonArtifact:
    return JsonArtifact(json.loads(data), encoding=self.encoding)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
