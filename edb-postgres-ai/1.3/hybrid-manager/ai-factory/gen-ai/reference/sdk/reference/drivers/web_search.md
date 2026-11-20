---
title: web_search
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/
lastModified: 2026-05-22T19:45:14+05:30
---

# web\_search

- `__all__ = ['BaseWebSearchDriver']` <small>module-attribute</small>  <span id="griptape.drivers.web_search.__all__"></span>

<span id="griptape.drivers.web_search.BaseWebSearchDriver"></span>

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

- `results_count = field(default=5, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.BaseWebSearchDriver.results_count"></span>

<span id="griptape.drivers.web_search.BaseWebSearchDriver.search"></span>

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

- [BaseWebSearchDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/base_web_search_driver/): Bases:
- [DuckDuckGoWebSearchDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/duck_duck_go/): -   all = \['DuckDuckGoWebSearchDriver'] module-attribute
- [DuckDuckGoWebSearchDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/duck_duck_go_web_search_driver/): Bases:
- [ExaWebSearchDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/exa/): -   all = \['ExaWebSearchDriver'] module-attribute
- [ExaWebSearchDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/exa_web_search_driver/): Bases:
- [GoogleWebSearchDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/google/): -   all = \['GoogleWebSearchDriver'] module-attribute
- [GoogleWebSearchDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/google_web_search_driver/): Bases:
- [PerplexityWebSearchDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/perplexity/): -   all = \['PerplexityWebSearchDriver'] module-attribute
- [PerplexityWebSearchDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/perplexity_web_search_driver/): Bases:
- [TavilyWebSearchDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/tavily/): -   all = \['TavilyWebSearchDriver'] module-attribute
- [TavilyWebSearchDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/tavily_web_search_driver/): Bases:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
