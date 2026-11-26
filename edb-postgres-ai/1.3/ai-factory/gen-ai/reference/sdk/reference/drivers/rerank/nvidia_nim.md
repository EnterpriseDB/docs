---
title: nvidia_nim
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/nvidia_nim/
lastModified: 2025-11-07T18:06:05Z
---

# nvidia\_nim

- `__all__ = ['NvidiaNimRerankDriver']` <small>module-attribute</small>  <span id="griptape.drivers.rerank.nvidia_nim.__all__"></span>

<span id="griptape.drivers.rerank.nvidia_nim.NvidiaNimRerankDriver"></span>

Bases:
[`BaseRerankDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/base_rerank_driver/#griptape.drivers.rerank.base_rerank_driver.BaseRerankDriver "BaseRerankDriver (griptape.drivers.rerank.base_rerank_driver.BaseRerankDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/rerank/nvidia\_nim\_rerank\_driver.py</code>

</summary>

```python
@define(kw_only=True)
class NvidiaNimRerankDriver(BaseRerankDriver):
    """Nvidia Rerank Driver."""

    model: str = field()
    base_url: str = field()
    truncate: Literal["NONE", "END"] = field(default="NONE")
    headers: dict = field(factory=dict)

    def run(self, query: str, artifacts: list[TextArtifact]) -> list[TextArtifact]:
        if not artifacts:
            return []

        response = requests.post(
            url=f"{self.base_url.rstrip('/')}/v1/ranking",
            json=self._get_body(query, artifacts),
            headers=self.headers,
        )

        response.raise_for_status()

        ranked_artifacts = []
        for ranking in response.json()["rankings"]:
            artifact = artifacts[ranking["index"]]
            artifact.meta.update({"logit": ranking["logit"], "usage": ranking.get("usage")})
            ranked_artifacts.append(artifact)

        return ranked_artifacts

    def _get_body(self, query: str, artifacts: list[TextArtifact]) -> dict:
        return {
            "model": self.model,
            "query": {"text": query},
            "passages": [{"text": artifact.value} for artifact in artifacts],
            "truncate": self.truncate,
        }
```

</details>

- `base_url = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.rerank.nvidia_nim.NvidiaNimRerankDriver.base_url"></span>

- `headers = field(factory=dict)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.rerank.nvidia_nim.NvidiaNimRerankDriver.headers"></span>

- `model = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.rerank.nvidia_nim.NvidiaNimRerankDriver.model"></span>

- `truncate = field(default='NONE')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.rerank.nvidia_nim.NvidiaNimRerankDriver.truncate"></span>

<span id="griptape.drivers.rerank.nvidia_nim.NvidiaNimRerankDriver._get_body"></span>

### \_get\_body(query, artifacts)

<details>

<summary>

Source Code in <code>griptape/drivers/rerank/nvidia\_nim\_rerank\_driver.py</code>

</summary>

```python
def _get_body(self, query: str, artifacts: list[TextArtifact]) -> dict:
    return {
        "model": self.model,
        "query": {"text": query},
        "passages": [{"text": artifact.value} for artifact in artifacts],
        "truncate": self.truncate,
    }
```

</details>

<span id="griptape.drivers.rerank.nvidia_nim.NvidiaNimRerankDriver.run"></span>

### run(query, artifacts)

<details>

<summary>

Source Code in <code>griptape/drivers/rerank/nvidia\_nim\_rerank\_driver.py</code>

</summary>

```python
def run(self, query: str, artifacts: list[TextArtifact]) -> list[TextArtifact]:
    if not artifacts:
        return []

    response = requests.post(
        url=f"{self.base_url.rstrip('/')}/v1/ranking",
        json=self._get_body(query, artifacts),
        headers=self.headers,
    )

    response.raise_for_status()

    ranked_artifacts = []
    for ranking in response.json()["rankings"]:
        artifact = artifacts[ranking["index"]]
        artifact.meta.update({"logit": ranking["logit"], "usage": ranking.get("usage")})
        ranked_artifacts.append(artifact)

    return ranked_artifacts
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
