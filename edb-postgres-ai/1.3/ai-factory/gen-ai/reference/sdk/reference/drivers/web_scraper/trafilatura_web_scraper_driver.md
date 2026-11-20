---
title: trafilatura_web_scraper_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_scraper/trafilatura_web_scraper_driver/
lastModified: 2025-11-07T18:06:05Z
---

# trafilatura\_web\_scraper\_driver

<span id="griptape.drivers.web_scraper.trafilatura_web_scraper_driver.TrafilaturaWebScraperDriver"></span>

Bases:
[`BaseWebScraperDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_scraper/#griptape.drivers.web_scraper.BaseWebScraperDriver "BaseWebScraperDriver (griptape.drivers.web_scraper.BaseWebScraperDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/trafilatura\_web\_scraper\_driver.py</code>

</summary>

```python
@define
class TrafilaturaWebScraperDriver(BaseWebScraperDriver):
    include_links: bool = field(default=True, kw_only=True)
    no_ssl: bool = field(default=False, kw_only=True)

    def fetch_url(self, url: str) -> str:
        trafilatura = import_optional_dependency("trafilatura")
        use_config = trafilatura.settings.use_config

        config = use_config()
        page = trafilatura.fetch_url(url, no_ssl=self.no_ssl)

        # This disables signal, so that trafilatura can work on any thread:
        # More info: https://trafilatura.readthedocs.io/usage-python.html#disabling-signal
        config.set("DEFAULT", "EXTRACTION_TIMEOUT", "0")

        # Disable error logging in trafilatura as it sometimes logs errors from lxml, even though
        # the end result of page parsing is successful.
        logging.getLogger("trafilatura").setLevel(logging.FATAL)

        if page is None:
            raise Exception("can't access URL")

        return page

    def extract_page(self, page: str) -> TextArtifact:
        trafilatura = import_optional_dependency("trafilatura")
        use_config = trafilatura.settings.use_config

        config = use_config()

        extracted_page = trafilatura.extract(
            page,
            include_links=self.include_links,
            output_format="json",
            config=config,
        )

        if not extracted_page:
            raise Exception("can't extract page")

        text = json.loads(extracted_page).get("text")

        return TextArtifact(text)
```

</details>

- `include_links = field(default=True, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_scraper.trafilatura_web_scraper_driver.TrafilaturaWebScraperDriver.include_links"></span>

- `no_ssl = field(default=False, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_scraper.trafilatura_web_scraper_driver.TrafilaturaWebScraperDriver.no_ssl"></span>

<span id="griptape.drivers.web_scraper.trafilatura_web_scraper_driver.TrafilaturaWebScraperDriver.extract_page"></span>

### extract\_page(page)

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/trafilatura\_web\_scraper\_driver.py</code>

</summary>

```python
def extract_page(self, page: str) -> TextArtifact:
    trafilatura = import_optional_dependency("trafilatura")
    use_config = trafilatura.settings.use_config

    config = use_config()

    extracted_page = trafilatura.extract(
        page,
        include_links=self.include_links,
        output_format="json",
        config=config,
    )

    if not extracted_page:
        raise Exception("can't extract page")

    text = json.loads(extracted_page).get("text")

    return TextArtifact(text)
```

</details>

<span id="griptape.drivers.web_scraper.trafilatura_web_scraper_driver.TrafilaturaWebScraperDriver.fetch_url"></span>

### fetch\_url(url)

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/trafilatura\_web\_scraper\_driver.py</code>

</summary>

```python
def fetch_url(self, url: str) -> str:
    trafilatura = import_optional_dependency("trafilatura")
    use_config = trafilatura.settings.use_config

    config = use_config()
    page = trafilatura.fetch_url(url, no_ssl=self.no_ssl)

    # This disables signal, so that trafilatura can work on any thread:
    # More info: https://trafilatura.readthedocs.io/usage-python.html#disabling-signal
    config.set("DEFAULT", "EXTRACTION_TIMEOUT", "0")

    # Disable error logging in trafilatura as it sometimes logs errors from lxml, even though
    # the end result of page parsing is successful.
    logging.getLogger("trafilatura").setLevel(logging.FATAL)

    if page is None:
        raise Exception("can't access URL")

    return page
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
