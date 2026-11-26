---
title: base_web_search_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/base_web_search_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_web\_search\_driver

<span id="griptape.drivers.web_search.base_web_search_driver.BaseWebSearchDriver"></span>

Bases:

<span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/base\_web\_search\_driver.py</code>

</summary>

```python
@define
class BaseWebSearchDriver(ABC):
    results_count: int = field(default=5, kw_only=True)

    @abstractmethod
    def search(self, query: str, **kwargs) -> ListArtifact: ...
```

</details>

- `results_count = field(default=5, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.base_web_search_driver.BaseWebSearchDriver.results_count"></span>

<span id="griptape.drivers.web_search.base_web_search_driver.BaseWebSearchDriver.search"></span>

### search(query, \*\*kwargs)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/base\_web\_search\_driver.py</code>

</summary>

```python
@abstractmethod
def search(self, query: str, **kwargs) -> ListArtifact: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
