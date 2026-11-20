---
title: rerank
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/
lastModified: 2025-11-07T18:06:05Z
---

# rerank

- `__all__ = ['BaseRerankDriver']` <small>module-attribute</small>  <span id="griptape.drivers.rerank.__all__"></span>

<span id="griptape.drivers.rerank.BaseRerankDriver"></span>

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

<span id="griptape.drivers.rerank.BaseRerankDriver.run"></span>

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

- [BaseRerankDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/base_rerank_driver/): Bases:
- [CohereRerankDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/cohere/): -   all = \['CohereRerankDriver'] module-attribute
- [CohereRerankDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/cohere_rerank_driver/): Bases:
- [LocalRerankDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/local/): -   all = \['LocalRerankDriver'] module-attribute
- [LocalRerankDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/local_rerank_driver/): Bases:
- [NvidiaNimRerankDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/nvidia_nim/): -   all = \['NvidiaNimRerankDriver'] module-attribute
- [NvidiaNimRerankDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/rerank/nvidia_nim_rerank_driver/): Bases:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
