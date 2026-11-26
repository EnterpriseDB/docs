---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/web_search/tool/
lastModified: 2025-11-07T18:06:05Z
---

# tool

<span id="griptape.tools.web_search.tool.WebSearchTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")

<details>

<summary>

Source Code in <code>griptape/tools/web\_search/tool.py</code>

</summary>

```python
@define
class WebSearchTool(BaseTool):
    web_search_driver: BaseWebSearchDriver = field(kw_only=True)

    @activity(
        config={
            "description": "Can be used for searching the web via the {{ _self.web_search_driver.__class__.__name__}}.",
            "schema": Schema(
                {
                    Literal(
                        "query",
                        description="Search engine request that returns a list of pages with titles, descriptions, and URLs",
                    ): str,
                },
            ),
        },
    )
    def search(self, values: dict) -> ListArtifact | ErrorArtifact:
        # `BaseWebSearchDriver.query` already has a parameter named `query`, so we need to pop it from the values
        # to avoid passing it twice.
        query = values.pop("query")

        try:
            return self.web_search_driver.search(query, **values)
        except Exception as e:
            return ErrorArtifact(f"Error searching '{query}' with {self.web_search_driver.__class__.__name__}: {e}")
```

</details>

- `web_search_driver = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.web_search.tool.WebSearchTool.web_search_driver"></span>

<span id="griptape.tools.web_search.tool.WebSearchTool.search"></span>

### search(values)

<details>

<summary>

Source Code in <code>griptape/tools/web\_search/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Can be used for searching the web via the {{ _self.web_search_driver.__class__.__name__}}.",
        "schema": Schema(
            {
                Literal(
                    "query",
                    description="Search engine request that returns a list of pages with titles, descriptions, and URLs",
                ): str,
            },
        ),
    },
)
def search(self, values: dict) -> ListArtifact | ErrorArtifact:
    # `BaseWebSearchDriver.query` already has a parameter named `query`, so we need to pop it from the values
    # to avoid passing it twice.
    query = values.pop("query")

    try:
        return self.web_search_driver.search(query, **values)
    except Exception as e:
        return ErrorArtifact(f"Error searching '{query}' with {self.web_search_driver.__class__.__name__}: {e}")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
