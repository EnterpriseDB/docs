---
title: base_rerank_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/base_rerank_driver/
lastModified: 2025-11-07T18:06:05Z
---

# base\_rerank\_driver

<span id="griptape.drivers.rerank.base_rerank_driver.BaseRerankDriver"></span>

Bases:

<span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/rerank/base\_rerank\_driver.py</code>

</summary>

```python
@define(kw_only=True)
class BaseRerankDriver(ABC):
    @abstractmethod
    def run(self, query: str, artifacts: list[TextArtifact]) -> list[TextArtifact]: ...
```

</details>

<span id="griptape.drivers.rerank.base_rerank_driver.BaseRerankDriver.run"></span>

### run(query, artifacts)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/rerank/base\_rerank\_driver.py</code>

</summary>

```python
@abstractmethod
def run(self, query: str, artifacts: list[TextArtifact]) -> list[TextArtifact]: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
