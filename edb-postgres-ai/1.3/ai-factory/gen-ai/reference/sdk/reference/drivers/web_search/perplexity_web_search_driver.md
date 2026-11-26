---
title: perplexity_web_search_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/perplexity_web_search_driver/
lastModified: 2025-11-07T18:06:05Z
---

# perplexity\_web\_search\_driver

<span id="griptape.drivers.web_search.perplexity_web_search_driver.PerplexityWebSearchDriver"></span>

Bases:
[`BaseWebSearchDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/web_search/#griptape.drivers.web_search.BaseWebSearchDriver "BaseWebSearchDriver (griptape.drivers.web_search.BaseWebSearchDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/perplexity\_web\_search\_driver.py</code>

</summary>

```python
@define
class PerplexityWebSearchDriver(BaseWebSearchDriver):
    model: str = field(default="sonar-pro", kw_only=True, metadata={"serializable": True})
    api_key: Optional[str] = field(kw_only=True, default=None)
    _prompt_driver: Optional[PerplexityPromptDriver] = field(default=None, alias="prompt_driver")

    @lazy_property()
    def prompt_driver(self) -> PerplexityPromptDriver:
        if self.api_key is None:
            raise ValueError("api_key is required")
        return PerplexityPromptDriver(model=self.model, api_key=self.api_key)

    def search(self, query: str, **kwargs) -> ListArtifact:
        message = self.prompt_driver.run(PromptStack.from_artifact(TextArtifact(query)))

        return ListArtifact([message.to_artifact()])
```

</details>

- `_prompt_driver = field(default=None, alias='prompt_driver')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.perplexity_web_search_driver.PerplexityWebSearchDriver._prompt_driver"></span>

- `api_key = field(kw_only=True, default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.perplexity_web_search_driver.PerplexityWebSearchDriver.api_key"></span>

- `model = field(default='sonar-pro', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.web_search.perplexity_web_search_driver.PerplexityWebSearchDriver.model"></span>

<span id="griptape.drivers.web_search.perplexity_web_search_driver.PerplexityWebSearchDriver.prompt_driver"></span>

### prompt\_driver()

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/perplexity\_web\_search\_driver.py</code>

</summary>

```python
@lazy_property()
def prompt_driver(self) -> PerplexityPromptDriver:
    if self.api_key is None:
        raise ValueError("api_key is required")
    return PerplexityPromptDriver(model=self.model, api_key=self.api_key)
```

</details>

<span id="griptape.drivers.web_search.perplexity_web_search_driver.PerplexityWebSearchDriver.search"></span>

### search(query, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/web\_search/perplexity\_web\_search\_driver.py</code>

</summary>

```python
def search(self, query: str, **kwargs) -> ListArtifact:
    message = self.prompt_driver.run(PromptStack.from_artifact(TextArtifact(query)))

    return ListArtifact([message.to_artifact()])
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
