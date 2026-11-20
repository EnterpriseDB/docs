---
title: duck_duck_go_web_search_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/duck_duck_go_web_search_driver/
lastModified: 2025-11-07T18:06:05Z
---

# duck\_duck\_go\_web\_search\_driver

<span id="griptape.drivers.web_search.duck_duck_go_web_search_driver.DuckDuckGoWebSearchDriver"></span>

Bases:
[`BaseWebSearchDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/#griptape.drivers.web_search.BaseWebSearchDriver "BaseWebSearchDriver (griptape.drivers.web_search.BaseWebSearchDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/duck\_duck\_go\_web\_search\_driver.py</code>

</summary>

```python
@define
class DuckDuckGoWebSearchDriver(BaseWebSearchDriver):
    language: str = field(default="en", kw_only=True)
    country: str = field(default="us", kw_only=True)
    _client: Optional[DDGS] = field(default=None, kw_only=True, alias="client", metadata={"serializable": False})

    @lazy_property()
    def client(self) -> DDGS:
        return import_optional_dependency("duckduckgo_search").DDGS()

    def search(self, query: str, **kwargs) -> ListArtifact:
        try:
            results = self.client.text(
                query, region=f"{self.language}-{self.country}", max_results=self.results_count, **kwargs
            )
            return ListArtifact(
                [
                    TextArtifact(
                        json.dumps({"title": result["title"], "url": result["href"], "description": result["body"]}),
                    )
                    for result in results
                ],
            )
        except Exception as e:
            raise Exception(f"Error searching '{query}' with DuckDuckGo: {e}") from e
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.duck_duck_go_web_search_driver.DuckDuckGoWebSearchDriver._client"></span>

- `country = field(default='us', kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.duck_duck_go_web_search_driver.DuckDuckGoWebSearchDriver.country"></span>

- `language = field(default='en', kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.duck_duck_go_web_search_driver.DuckDuckGoWebSearchDriver.language"></span>

<span id="griptape.drivers.web_search.duck_duck_go_web_search_driver.DuckDuckGoWebSearchDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/duck\_duck\_go\_web\_search\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> DDGS:
    return import_optional_dependency("duckduckgo_search").DDGS()
```

</details>

<span id="griptape.drivers.web_search.duck_duck_go_web_search_driver.DuckDuckGoWebSearchDriver.search"></span>

### search(query, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/duck\_duck\_go\_web\_search\_driver.py</code>

</summary>

```python
def search(self, query: str, **kwargs) -> ListArtifact:
    try:
        results = self.client.text(
            query, region=f"{self.language}-{self.country}", max_results=self.results_count, **kwargs
        )
        return ListArtifact(
            [
                TextArtifact(
                    json.dumps({"title": result["title"], "url": result["href"], "description": result["body"]}),
                )
                for result in results
            ],
        )
    except Exception as e:
        raise Exception(f"Error searching '{query}' with DuckDuckGo: {e}") from e
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
