---
title: web_loader
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/web_loader/
lastModified: 2025-11-07T18:06:05Z
---

# web\_loader

<span id="griptape.loaders.web_loader.WebLoader"></span>

Bases:
[`BaseLoader[str, str, TextArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/#griptape.loaders.BaseLoader "BaseLoader (griptape.loaders.BaseLoader)")

<details>

<summary>

Source Code in <code>griptape/loaders/web\_loader.py</code>

</summary>

```python
@define
class WebLoader(BaseLoader[str, str, TextArtifact]):
    web_scraper_driver: BaseWebScraperDriver = field(
        default=Factory(lambda: TrafilaturaWebScraperDriver()),
        kw_only=True,
    )

    def fetch(self, source: str) -> str:
        return self.web_scraper_driver.fetch_url(source)

    def try_parse(self, data: str) -> TextArtifact:
        return self.web_scraper_driver.extract_page(data)
```

</details>

- `web_scraper_driver = field(default=Factory(lambda: TrafilaturaWebScraperDriver()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.loaders.web_loader.WebLoader.web_scraper_driver"></span>

<span id="griptape.loaders.web_loader.WebLoader.fetch"></span>

### fetch(source)

<details>

<summary>

Source Code in <code>griptape/loaders/web\_loader.py</code>

</summary>

```python
def fetch(self, source: str) -> str:
    return self.web_scraper_driver.fetch_url(source)
```

</details>

<span id="griptape.loaders.web_loader.WebLoader.try_parse"></span>

### try\_parse(data)

<details>

<summary>

Source Code in <code>griptape/loaders/web\_loader.py</code>

</summary>

```python
def try_parse(self, data: str) -> TextArtifact:
    return self.web_scraper_driver.extract_page(data)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
