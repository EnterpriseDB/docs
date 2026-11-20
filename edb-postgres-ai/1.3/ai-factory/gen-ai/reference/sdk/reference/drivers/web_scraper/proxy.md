---
title: proxy
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_scraper/proxy/
lastModified: 2025-11-07T18:06:05Z
---

# proxy

- `__all__ = ['ProxyWebScraperDriver']` <small>module-attribute</small>  <span id="griptape.drivers.web_scraper.proxy.__all__"></span>

<span id="griptape.drivers.web_scraper.proxy.ProxyWebScraperDriver"></span>

Bases:
[`BaseWebScraperDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_scraper/#griptape.drivers.web_scraper.BaseWebScraperDriver "BaseWebScraperDriver (griptape.drivers.web_scraper.BaseWebScraperDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/proxy\_web\_scraper\_driver.py</code>

</summary>

```python
@define
class ProxyWebScraperDriver(BaseWebScraperDriver):
    proxies: dict = field(kw_only=True, metadata={"serializable": False})
    params: dict = field(default=Factory(dict), kw_only=True, metadata={"serializable": True})

    def fetch_url(self, url: str) -> str:
        response = requests.get(url, proxies=self.proxies, **self.params)

        return response.text

    def extract_page(self, page: str) -> TextArtifact:
        return TextArtifact(page)
```

</details>

- `params = field(default=Factory(dict), kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_scraper.proxy.ProxyWebScraperDriver.params"></span>

- `proxies = field(kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_scraper.proxy.ProxyWebScraperDriver.proxies"></span>

<span id="griptape.drivers.web_scraper.proxy.ProxyWebScraperDriver.extract_page"></span>

### extract\_page(page)

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/proxy\_web\_scraper\_driver.py</code>

</summary>

```python
def extract_page(self, page: str) -> TextArtifact:
    return TextArtifact(page)
```

</details>

<span id="griptape.drivers.web_scraper.proxy.ProxyWebScraperDriver.fetch_url"></span>

### fetch\_url(url)

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/proxy\_web\_scraper\_driver.py</code>

</summary>

```python
def fetch_url(self, url: str) -> str:
    response = requests.get(url, proxies=self.proxies, **self.params)

    return response.text
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
