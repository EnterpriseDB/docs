---
title: markdownify_web_scraper_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_scraper/markdownify_web_scraper_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# markdownify\_web\_scraper\_driver

<span id="griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver"></span>

Bases:
[`BaseWebScraperDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_scraper/#griptape.drivers.web_scraper.BaseWebScraperDriver "BaseWebScraperDriver (griptape.drivers.web_scraper.BaseWebScraperDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                        | Description                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_scraper/markdownify_web_scraper_driver/#griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.include_links" title="include_links = field(default=True, kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.include_links)"><code class="language-python">include\_links</code></a>                                                         | `bool`                                                                                                                                                                                                      | If `True`, the driver will include link urls in the markdown output.<br/>                                                          |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_scraper/markdownify_web_scraper_driver/#griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.exclude_tags" title="exclude_tags = field(default=Factory(lambda self: self.DEFAULT_EXCLUDE_TAGS, takes_self=True), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.exclude_tags)"><code class="language-python">exclude\_tags</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[str]</code></a> | Optionally provide custom tags to exclude from the scraped content.<br/>                                                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_scraper/markdownify_web_scraper_driver/#griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.exclude_classes" title="exclude_classes = field(default=Factory(list), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.exclude_classes)"><code class="language-python">exclude\_classes</code></a>                                        | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[str]</code></a> | Optionally provide custom classes to exclude from the scraped content.<br/>                                                        |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_scraper/markdownify_web_scraper_driver/#griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.exclude_ids" title="exclude_ids = field(default=Factory(list), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.exclude_ids)"><code class="language-python">exclude\_ids</code></a>                                                        | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[str]</code></a> | Optionally provide custom ids to exclude from the scraped content.<br/>                                                            |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/web_scraper/markdownify_web_scraper_driver/#griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.timeout" title="timeout = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.timeout)"><code class="language-python">timeout</code></a>                                                                                  | `Optional[int]`                                                                                                                                                                                             | Optionally provide a timeout in milliseconds for the page to continue loading after the browser has emitted the "load" event.<br/> |

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/markdownify\_web\_scraper\_driver.py</code>

</summary>

```python
@define
class MarkdownifyWebScraperDriver(BaseWebScraperDriver):
    """Driver to scrape a webpage and return the content in markdown format.

    As a prerequisite to using MarkdownifyWebScraperDriver, you need to install the browsers used by
    playwright. You can do this by running: `poetry run playwright install`.
    For more details about playwright, see https://playwright.dev/python/docs/library.

    Attributes:
        include_links: If `True`, the driver will include link urls in the markdown output.
        exclude_tags: Optionally provide custom tags to exclude from the scraped content.
        exclude_classes: Optionally provide custom classes to exclude from the scraped content.
        exclude_ids: Optionally provide custom ids to exclude from the scraped content.
        timeout: Optionally provide a timeout in milliseconds for the page to continue loading after
            the browser has emitted the "load" event.
    """

    DEFAULT_EXCLUDE_TAGS = ["script", "style", "head", "audio", "img", "picture", "source", "video"]

    include_links: bool = field(default=True, kw_only=True)
    exclude_tags: list[str] = field(
        default=Factory(lambda self: self.DEFAULT_EXCLUDE_TAGS, takes_self=True),
        kw_only=True,
    )
    exclude_classes: list[str] = field(default=Factory(list), kw_only=True)
    exclude_ids: list[str] = field(default=Factory(list), kw_only=True)
    timeout: Optional[int] = field(default=None, kw_only=True)

    def fetch_url(self, url: str) -> str:
        sync_playwright = import_optional_dependency("playwright.sync_api").sync_playwright

        with sync_playwright() as p, p.chromium.launch(headless=True) as browser:
            page = browser.new_page()

            def skip_loading_images(route: Any) -> Any:
                if route.request.resource_type == "image":
                    return route.abort()
                route.continue_()
                return None

            page.route("**/*", skip_loading_images)

            page.goto(url)

            # Some websites require a delay before the content is fully loaded
            # even after the browser has emitted "load" event.
            if self.timeout:
                page.wait_for_timeout(self.timeout)

            content = page.content()

            if not content:
                raise Exception("can't access URL")

            return content

    def extract_page(self, page: str) -> TextArtifact:
        bs4 = import_optional_dependency("bs4")
        markdownify = import_optional_dependency("markdownify")
        include_links = self.include_links

        # Custom MarkdownConverter to optionally linked urls. If include_links is False only
        # the text of the link is returned.
        class OptionalLinksMarkdownConverter(markdownify.MarkdownConverter):
            def convert_a(self, el: Any, text: str, parent_tags: Any) -> str:
                if include_links:
                    return super().convert_a(el, text, parent_tags)
                return text

        soup = bs4.BeautifulSoup(page, "html.parser")

        # Remove unwanted elements
        exclude_selector = ",".join(
            self.exclude_tags + [f".{c}" for c in self.exclude_classes] + [f"#{i}" for i in self.exclude_ids],
        )
        if exclude_selector:
            for s in soup.select(exclude_selector):
                s.extract()

        text = OptionalLinksMarkdownConverter().convert_soup(soup)

        # Remove leading and trailing whitespace from the entire text
        text = text.strip()

        # Remove trailing whitespace from each line
        text = re.sub(r"[ \t]+$", "", text, flags=re.MULTILINE)

        # Indent using 2 spaces instead of tabs
        text = re.sub(r"(\n?\s*?)\t", r"\1  ", text)

        # Remove triple+ newlines (keep double newlines for paragraphs)
        text = re.sub(r"\n\n+", "\n\n", text)

        return TextArtifact(text)
```

</details>

- `DEFAULT_EXCLUDE_TAGS = ['script', 'style', 'head', 'audio', 'img', 'picture', 'source', 'video']` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.DEFAULT_EXCLUDE_TAGS"></span>

- `exclude_classes = field(default=Factory(list), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.exclude_classes"></span>

- `exclude_ids = field(default=Factory(list), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.exclude_ids"></span>

- `exclude_tags = field(default=Factory(lambda self: self.DEFAULT_EXCLUDE_TAGS, takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.exclude_tags"></span>

- `include_links = field(default=True, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.include_links"></span>

- `timeout = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.timeout"></span>

<span id="griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.extract_page"></span>

### extract\_page(page)

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/markdownify\_web\_scraper\_driver.py</code>

</summary>

```python
def extract_page(self, page: str) -> TextArtifact:
    bs4 = import_optional_dependency("bs4")
    markdownify = import_optional_dependency("markdownify")
    include_links = self.include_links

    # Custom MarkdownConverter to optionally linked urls. If include_links is False only
    # the text of the link is returned.
    class OptionalLinksMarkdownConverter(markdownify.MarkdownConverter):
        def convert_a(self, el: Any, text: str, parent_tags: Any) -> str:
            if include_links:
                return super().convert_a(el, text, parent_tags)
            return text

    soup = bs4.BeautifulSoup(page, "html.parser")

    # Remove unwanted elements
    exclude_selector = ",".join(
        self.exclude_tags + [f".{c}" for c in self.exclude_classes] + [f"#{i}" for i in self.exclude_ids],
    )
    if exclude_selector:
        for s in soup.select(exclude_selector):
            s.extract()

    text = OptionalLinksMarkdownConverter().convert_soup(soup)

    # Remove leading and trailing whitespace from the entire text
    text = text.strip()

    # Remove trailing whitespace from each line
    text = re.sub(r"[ \t]+$", "", text, flags=re.MULTILINE)

    # Indent using 2 spaces instead of tabs
    text = re.sub(r"(\n?\s*?)\t", r"\1  ", text)

    # Remove triple+ newlines (keep double newlines for paragraphs)
    text = re.sub(r"\n\n+", "\n\n", text)

    return TextArtifact(text)
```

</details>

<span id="griptape.drivers.web_scraper.markdownify_web_scraper_driver.MarkdownifyWebScraperDriver.fetch_url"></span>

### fetch\_url(url)

<details>

<summary>

Source Code in <code>griptape/drivers/web\_scraper/markdownify\_web\_scraper\_driver.py</code>

</summary>

```python
def fetch_url(self, url: str) -> str:
    sync_playwright = import_optional_dependency("playwright.sync_api").sync_playwright

    with sync_playwright() as p, p.chromium.launch(headless=True) as browser:
        page = browser.new_page()

        def skip_loading_images(route: Any) -> Any:
            if route.request.resource_type == "image":
                return route.abort()
            route.continue_()
            return None

        page.route("**/*", skip_loading_images)

        page.goto(url)

        # Some websites require a delay before the content is fully loaded
        # even after the browser has emitted "load" event.
        if self.timeout:
            page.wait_for_timeout(self.timeout)

        content = page.content()

        if not content:
            raise Exception("can't access URL")

        return content
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
