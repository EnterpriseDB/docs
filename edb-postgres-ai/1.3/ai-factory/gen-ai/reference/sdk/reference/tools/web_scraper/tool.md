---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/web_scraper/tool/
lastModified: 2025-11-07T18:06:05Z
---

# tool

<span id="griptape.tools.web_scraper.tool.WebScraperTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")

<details>

<summary>

Source Code in <code>griptape/tools/web\_scraper/tool.py</code>

</summary>

```python
@define
class WebScraperTool(BaseTool):
    web_loader: WebLoader = field(default=Factory(lambda: WebLoader()), kw_only=True)
    text_chunker: TextChunker = field(default=Factory(lambda: TextChunker(max_tokens=400)), kw_only=True)

    @activity(
        config={
            "description": "Can be used to browse a web page and load its content",
            "schema": Schema({Literal("url", description="Valid HTTP URL"): str}),
        },
    )
    def get_content(self, params: dict) -> ListArtifact | ErrorArtifact:
        url = params["values"]["url"]

        try:
            result = self.web_loader.load(url)
            chunks = self.text_chunker.chunk(result)

            return ListArtifact(chunks)
        except Exception as e:
            return ErrorArtifact("Error getting page content: " + str(e))
```

</details>

- `text_chunker = field(default=Factory(lambda: TextChunker(max_tokens=400)), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.web_scraper.tool.WebScraperTool.text_chunker"></span>

- `web_loader = field(default=Factory(lambda: WebLoader()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.web_scraper.tool.WebScraperTool.web_loader"></span>

<span id="griptape.tools.web_scraper.tool.WebScraperTool.get_content"></span>

### get\_content(params)

<details>

<summary>

Source Code in <code>griptape/tools/web\_scraper/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Can be used to browse a web page and load its content",
        "schema": Schema({Literal("url", description="Valid HTTP URL"): str}),
    },
)
def get_content(self, params: dict) -> ListArtifact | ErrorArtifact:
    url = params["values"]["url"]

    try:
        result = self.web_loader.load(url)
        chunks = self.text_chunker.chunk(result)

        return ListArtifact(chunks)
    except Exception as e:
        return ErrorArtifact("Error getting page content: " + str(e))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
