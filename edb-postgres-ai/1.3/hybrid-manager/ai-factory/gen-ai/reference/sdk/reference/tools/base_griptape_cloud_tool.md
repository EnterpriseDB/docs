---
title: base_griptape_cloud_tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/base_griptape_cloud_tool/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_griptape\_cloud\_tool

<span id="griptape.tools.base_griptape_cloud_tool.BaseGriptapeCloudTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")
, <span title="abc.ABC">ABC</span>

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Type            | Description                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/base_griptape_cloud_tool/#griptape.tools.base_griptape_cloud_tool.BaseGriptapeCloudTool.base_url" title="base_url = field(default=Factory(lambda: os.getenv('GT_CLOUD_BASE_URL', 'https://cloud.griptape.ai')), kw_only=True)           class-attribute       instance-attribute    (griptape.tools.base_griptape_cloud_tool.BaseGriptapeCloudTool.base_url)"><code class="language-python">base\_url</code></a>  | `str`           | Base URL for the Gen AI Builder Knowledge Base API.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/base_griptape_cloud_tool/#griptape.tools.base_griptape_cloud_tool.BaseGriptapeCloudTool.api_key" title="api_key = field(default=Factory(lambda: os.getenv('GT_CLOUD_API_KEY')), kw_only=True)           class-attribute       instance-attribute    (griptape.tools.base_griptape_cloud_tool.BaseGriptapeCloudTool.api_key)"><code class="language-python">api\_key</code></a>                                    | `Optional[str]` | API key for Gen AI Builder.<br/>                         |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/base_griptape_cloud_tool/#griptape.tools.base_griptape_cloud_tool.BaseGriptapeCloudTool.headers" title="headers = field(default=Factory(lambda self: {'Authorization': f'Bearer {self.api_key}'}, takes_self=True), kw_only=True)           class-attribute       instance-attribute    (griptape.tools.base_griptape_cloud_tool.BaseGriptapeCloudTool.headers)"><code class="language-python">headers</code></a> | `dict`          | Headers for the Gen AI Builder Knowledge Base API.<br/>  |

<details>

<summary>

Source Code in <code>griptape/tools/base\_griptape\_cloud\_tool.py</code>

</summary>

```python
@define
class BaseGriptapeCloudTool(BaseTool, ABC):
    """Base class for Gen AI Builder clients.

    Attributes:
        base_url: Base URL for the Gen AI Builder Knowledge Base API.
        api_key: API key for Gen AI Builder.
        headers: Headers for the Gen AI Builder Knowledge Base API.
    """

    base_url: str = field(
        default=Factory(lambda: os.getenv("GT_CLOUD_BASE_URL", "https://cloud.griptape.ai")),
        kw_only=True,
    )
    api_key: Optional[str] = field(default=Factory(lambda: os.getenv("GT_CLOUD_API_KEY")), kw_only=True)
    headers: dict = field(
        default=Factory(lambda self: {"Authorization": f"Bearer {self.api_key}"}, takes_self=True),
        kw_only=True,
    )
```

</details>

- `api_key = field(default=Factory(lambda: os.getenv('GT_CLOUD_API_KEY')), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.base_griptape_cloud_tool.BaseGriptapeCloudTool.api_key"></span>

- `base_url = field(default=Factory(lambda: os.getenv('GT_CLOUD_BASE_URL', 'https://cloud.griptape.ai')), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.base_griptape_cloud_tool.BaseGriptapeCloudTool.base_url"></span>

- `headers = field(default=Factory(lambda self: {'Authorization': f'Bearer {self.api_key}'}, takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.base_griptape_cloud_tool.BaseGriptapeCloudTool.headers"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
