---
title: base_web_scraper_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_scraper/base_web_scraper_driver/
lastModified: 2025-11-07T18:06:05Z
---

# base\_web\_scraper\_driver

<span id="griptape.drivers.web_scraper.base_web_scraper_driver.BaseWebScraperDriver"></span>

Bases:

<span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/base\_web\_scraper\_driver.py</code>

</summary>

```python
class BaseWebScraperDriver(ABC):
    def scrape_url(self, url: str) -> TextArtifact:
        source = self.fetch_url(url)

        return self.extract_page(source)

    @abstractmethod
    def fetch_url(self, url: str) -> str: ...

    @abstractmethod
    def extract_page(self, page: str) -> TextArtifact: ...
```

</details>

<span id="griptape.drivers.web_scraper.base_web_scraper_driver.BaseWebScraperDriver.extract_page"></span>

### extract\_page(page)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/base\_web\_scraper\_driver.py</code>

</summary>

```python
@abstractmethod
def extract_page(self, page: str) -> TextArtifact: ...
```

</details>

<span id="griptape.drivers.web_scraper.base_web_scraper_driver.BaseWebScraperDriver.fetch_url"></span>

### fetch\_url(url)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/base\_web\_scraper\_driver.py</code>

</summary>

```python
@abstractmethod
def fetch_url(self, url: str) -> str: ...
```

</details>

<span id="griptape.drivers.web_scraper.base_web_scraper_driver.BaseWebScraperDriver.scrape_url"></span>

### scrape\_url(url)

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/base\_web\_scraper\_driver.py</code>

</summary>

```python
def scrape_url(self, url: str) -> TextArtifact:
    source = self.fetch_url(url)

    return self.extract_page(source)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
