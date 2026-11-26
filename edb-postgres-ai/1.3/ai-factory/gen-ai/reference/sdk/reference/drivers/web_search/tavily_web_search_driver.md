---
title: tavily_web_search_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/tavily_web_search_driver/
lastModified: 2025-11-07T18:06:05Z
---

# tavily\_web\_search\_driver

<span id="griptape.drivers.web_search.tavily_web_search_driver.TavilyWebSearchDriver"></span>

Bases:
[`BaseWebSearchDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/#griptape.drivers.web_search.BaseWebSearchDriver "BaseWebSearchDriver (griptape.drivers.web_search.BaseWebSearchDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/tavily\_web\_search\_driver.py</code>

</summary>

```python
@define
class TavilyWebSearchDriver(BaseWebSearchDriver):
    api_key: str = field(kw_only=True)
    params: dict[str, Any] = field(factory=dict, kw_only=True, metadata={"serializable": True})
    _client: Optional[TavilyClient] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> TavilyClient:
        return import_optional_dependency("tavily").TavilyClient(self.api_key)

    def search(self, query: str, **kwargs) -> ListArtifact:
        response = self.client.search(query, max_results=self.results_count, **self.params, **kwargs)
        results = response.get("results", [])
        return ListArtifact([(JsonArtifact(result)) for result in results])
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.tavily_web_search_driver.TavilyWebSearchDriver._client"></span>

- `api_key = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.tavily_web_search_driver.TavilyWebSearchDriver.api_key"></span>

- `params = field(factory=dict, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.tavily_web_search_driver.TavilyWebSearchDriver.params"></span>

<span id="griptape.drivers.web_search.tavily_web_search_driver.TavilyWebSearchDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/tavily\_web\_search\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> TavilyClient:
    return import_optional_dependency("tavily").TavilyClient(self.api_key)
```

</details>

<span id="griptape.drivers.web_search.tavily_web_search_driver.TavilyWebSearchDriver.search"></span>

### search(query, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/tavily\_web\_search\_driver.py</code>

</summary>

```python
def search(self, query: str, **kwargs) -> ListArtifact:
    response = self.client.search(query, max_results=self.results_count, **self.params, **kwargs)
    results = response.get("results", [])
    return ListArtifact([(JsonArtifact(result)) for result in results])
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
