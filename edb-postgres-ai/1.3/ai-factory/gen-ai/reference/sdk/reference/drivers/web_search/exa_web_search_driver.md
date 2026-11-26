---
title: exa_web_search_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/exa_web_search_driver/
lastModified: 2025-11-07T18:06:05Z
---

# exa\_web\_search\_driver

<span id="griptape.drivers.web_search.exa_web_search_driver.ExaWebSearchDriver"></span>

Bases:
[`BaseWebSearchDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/#griptape.drivers.web_search.BaseWebSearchDriver "BaseWebSearchDriver (griptape.drivers.web_search.BaseWebSearchDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/exa\_web\_search\_driver.py</code>

</summary>

```python
@define
class ExaWebSearchDriver(BaseWebSearchDriver):
    api_key: str = field(kw_only=True, default=None)
    highlights: bool = field(default=False, kw_only=True)
    use_autoprompt: bool = field(default=False, kw_only=True)
    params: dict[str, Any] = field(factory=dict, kw_only=True, metadata={"serializable": True})
    _client: Optional[Exa] = field(default=None, kw_only=True, alias="client")

    @lazy_property()
    def client(self) -> Exa:
        return import_optional_dependency("exa_py").Exa(api_key=self.api_key)

    def search(self, query: str, **kwargs) -> ListArtifact[JsonArtifact]:
        response = self.client.search_and_contents(  # pyright: ignore[reportCallIssue]
            highlights=self.highlights,  # pyright: ignore[reportArgumentType]
            use_autoprompt=self.use_autoprompt,
            query=query,
            num_results=self.results_count,
            text=True,
            **self.params,
            **kwargs,
        )
        results = [
            {"title": result.title, "url": result.url, "highlights": result.highlights, "text": result.text}
            for result in response.results
        ]
        return ListArtifact([JsonArtifact(result) for result in results])
```

</details>

- `_client = field(default=None, kw_only=True, alias='client')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.exa_web_search_driver.ExaWebSearchDriver._client"></span>

- `api_key = field(kw_only=True, default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.exa_web_search_driver.ExaWebSearchDriver.api_key"></span>

- `highlights = field(default=False, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.exa_web_search_driver.ExaWebSearchDriver.highlights"></span>

- `params = field(factory=dict, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.exa_web_search_driver.ExaWebSearchDriver.params"></span>

- `use_autoprompt = field(default=False, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.exa_web_search_driver.ExaWebSearchDriver.use_autoprompt"></span>

<span id="griptape.drivers.web_search.exa_web_search_driver.ExaWebSearchDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/exa\_web\_search\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> Exa:
    return import_optional_dependency("exa_py").Exa(api_key=self.api_key)
```

</details>

<span id="griptape.drivers.web_search.exa_web_search_driver.ExaWebSearchDriver.search"></span>

### search(query, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/exa\_web\_search\_driver.py</code>

</summary>

```python
def search(self, query: str, **kwargs) -> ListArtifact[JsonArtifact]:
    response = self.client.search_and_contents(  # pyright: ignore[reportCallIssue]
        highlights=self.highlights,  # pyright: ignore[reportArgumentType]
        use_autoprompt=self.use_autoprompt,
        query=query,
        num_results=self.results_count,
        text=True,
        **self.params,
        **kwargs,
    )
    results = [
        {"title": result.title, "url": result.url, "highlights": result.highlights, "text": result.text}
        for result in response.results
    ]
    return ListArtifact([JsonArtifact(result) for result in results])
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
