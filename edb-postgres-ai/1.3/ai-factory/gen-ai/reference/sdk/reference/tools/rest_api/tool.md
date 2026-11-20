---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/rest_api/tool/
lastModified: 2025-11-07T18:06:05Z
---

# tool

<span id="griptape.tools.rest_api.tool.RestApiTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Type                       | Description                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/rest_api/tool/#griptape.tools.rest_api.tool.RestApiTool.base_url" title="base_url = field(kw_only=True)           class-attribute       instance-attribute    (griptape.tools.rest_api.tool.RestApiTool.base_url)"><code class="language-python">base\_url</code></a>                                                                                             | `str`                      | The base url that will be used for the request.<br/>                                                                    |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/rest_api/tool/#griptape.tools.rest_api.tool.RestApiTool.path" title="path = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.rest_api.tool.RestApiTool.path)"><code class="language-python">path</code></a>                                                                                                | `Optional[str]`            | The resource path that will be appended to base\_url.<br/>                                                              |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/rest_api/tool/#griptape.tools.rest_api.tool.RestApiTool.description" title="description = field(kw_only=True)           class-attribute       instance-attribute    (griptape.tools.rest_api.tool.RestApiTool.description)"><code class="language-python">description</code></a>                                                                                  | `str`                      | A description of what the REST API does.<br/>                                                                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/rest_api/tool/#griptape.tools.rest_api.tool.RestApiTool.request_body_schema" title="request_body_schema = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.rest_api.tool.RestApiTool.request_body_schema)"><code class="language-python">request\_body\_schema</code></a>                                  | `Optional[str]`            | A JSON schema string describing the request body. Recommended for PUT, POST, and PATCH requests.<br/>                   |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/rest_api/tool/#griptape.tools.rest_api.tool.RestApiTool.request_query_params_schema" title="request_query_params_schema = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.rest_api.tool.RestApiTool.request_query_params_schema)"><code class="language-python">request\_query\_params\_schema</code></a> | `Optional[str]`            | A JSON schema string describing the available query parameters.<br/>                                                    |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/rest_api/tool/#griptape.tools.rest_api.tool.RestApiTool.request_path_params_schema" title="request_path_params_schema = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.rest_api.tool.RestApiTool.request_path_params_schema)"><code class="language-python">request\_path\_params\_schema</code></a>     | `Optional[str]`            | A JSON schema string describing the available path parameters. The schema must describe an array of string values.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/rest_api/tool/#griptape.tools.rest_api.tool.RestApiTool.response_body_schema" title="response_body_schema = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.rest_api.tool.RestApiTool.response_body_schema)"><code class="language-python">response\_body\_schema</code></a>                              | `Optional[str]`            | A JSON schema string describing the response body.<br/>                                                                 |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/rest_api/tool/#griptape.tools.rest_api.tool.RestApiTool.request_headers" title="request_headers = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.rest_api.tool.RestApiTool.request_headers)"><code class="language-python">request\_headers</code></a>                                                   | `Optional[dict[str, str]]` | Headers to include in the requests.<br/>                                                                                |

<details>

<summary>

Source Code in <code>griptape/tools/rest\_api/tool.py</code>

</summary>

```python
@define
class RestApiTool(BaseTool):
    """A tool for making REST API requests.

    Attributes:
        base_url: The base url that will be used for the request.
        path: The resource path that will be appended to base_url.
        description: A description of what the REST API does.
        request_body_schema: A JSON schema string describing the request body. Recommended for PUT, POST, and PATCH requests.
        request_query_params_schema: A JSON schema string describing the available query parameters.
        request_path_params_schema: A JSON schema string describing the available path parameters. The schema must describe an array of string values.
        response_body_schema: A JSON schema string describing the response body.
        request_headers: Headers to include in the requests.
    """

    base_url: str = field(kw_only=True)
    path: Optional[str] = field(default=None, kw_only=True)
    description: str = field(kw_only=True)
    request_path_params_schema: Optional[str] = field(default=None, kw_only=True)
    request_query_params_schema: Optional[str] = field(default=None, kw_only=True)
    request_body_schema: Optional[str] = field(default=None, kw_only=True)
    response_body_schema: Optional[str] = field(default=None, kw_only=True)
    request_headers: Optional[dict[str, str]] = field(default=None, kw_only=True)

    @property
    def full_url(self) -> str:
        return self._build_url(self.base_url, path=self.path)

    @activity(
        config={
            "description": dedent(
                """
                This tool can be used to make a put request to the rest api url: {{ _self.full_url }}
                This rest api has the following description: {{ _self.description }}
                {% if _self.request_body_schema %}The request body must follow this JSON schema: {{ _self.request_body_schema }}{% endif %}
                {% if _self.response_body_schema %}The response body must follow this JSON schema: {{ _self.response_body_schema }}{% endif %}
                """,
            ),
            "schema": Schema({Literal("body", description="The request body."): dict}),
        },
    )
    def put(self, params: dict) -> BaseArtifact:
        from requests import exceptions, put

        values = params["values"]
        base_url = self.base_url
        path = self.path
        body = values["body"]
        url = self._build_url(base_url, path=path)

        try:
            response = put(url, json=body, timeout=30, headers=self.request_headers)

            return TextArtifact(response.text)
        except exceptions.RequestException as err:
            return ErrorArtifact(str(err))

    @activity(
        config={
            "description": dedent(
                """
                This tool can be used to make a patch request to the rest api url: {{ _self.full_url }}
                This rest api has the following description: {{ _self.description }}
                {% if _self.request_path_parameters %}The request path parameters must follow this JSON schema: {{ _self.request_path_params_schema }}{% endif %}
                {% if _self.request_body_schema %}The request body must follow this JSON schema: {{ _self.request_body_schema }}{% endif %}
                {% if _self.response_body_schema %}The response body must follow this JSON schema: {{ _self.response_body_schema }}{% endif %}
                """,
            ),
            "schema": Schema(
                {
                    Literal("path_params", description="The request path parameters."): Schema([str]),
                    Literal("body", description="The request body."): dict,
                },
            ),
        },
    )
    def patch(self, params: dict) -> BaseArtifact:
        from requests import exceptions, patch

        values = params["values"]
        base_url = self.base_url
        path = self.path
        body = values["body"]
        path_params = values["path_params"]
        url = self._build_url(base_url, path=path, path_params=path_params)

        try:
            response = patch(url, json=body, timeout=30, headers=self.request_headers)
            return TextArtifact(response.text)
        except exceptions.RequestException as err:
            return ErrorArtifact(str(err))

    @activity(
        config={
            "description": dedent(
                """
                This tool can be used to make a post request to the rest api url: {{ _self.full_url }}
                This rest api has the following description: {{ _self.description }}
                {% if _self.request_body_schema %}The request body must follow this JSON schema: {{ _self.request_body_schema }}{% endif %}
                {% if _self.response_body_schema %}The response body must follow this JSON schema: {{ _self.response_body_schema }}{% endif %}
                """,
            ),
            "schema": Schema({Literal("body", description="The request body."): dict}),
        },
    )
    def post(self, params: dict) -> BaseArtifact:
        from requests import exceptions, post

        values = params["values"]
        base_url = self.base_url
        path = self.path
        url = self._build_url(base_url, path=path)
        body = values["body"]

        try:
            response = post(url, json=body, timeout=30, headers=self.request_headers)
            return TextArtifact(response.text)
        except exceptions.RequestException as err:
            return ErrorArtifact(str(err))

    @activity(
        config={
            "description": dedent(
                """
                This tool can be used to make a get request to the rest api url: {{ _self.full_url }}
                This rest api has the following description: {{ _self.description }}
                {% if _self.request_path_parameters %}The request path parameters must follow this JSON schema: {{ _self.request_path_params_schema }}{% endif %}
                {% if _self.request_query_parameters %}The request query parameters must follow this JSON schema: {{ _self.request_path_params_schema }}{% endif %}
                {% if _self.response_body_schema %}The response body must follow this JSON schema: {{ _self.response_body_schema }}{% endif %}
                """,
            ),
            "schema": schema.Optional(
                Schema(
                    {
                        schema.Optional(Literal("query_params", description="The request query parameters.")): dict,
                        schema.Optional(Literal("path_params", description="The request path parameters.")): Schema(
                            [str]
                        ),
                    },
                ),
            ),
        },
    )
    def get(self, params: dict) -> BaseArtifact:
        from requests import exceptions, get

        values = params["values"]
        base_url = self.base_url
        path = self.path

        query_params = {}
        path_params = []
        if values:
            query_params = values.get("query_params", {})
            path_params = values.get("path_params", [])
        url = self._build_url(base_url, path=path, path_params=path_params)

        try:
            response = get(url, params=query_params, timeout=30, headers=self.request_headers)
            return TextArtifact(response.text)
        except exceptions.RequestException as err:
            return ErrorArtifact(str(err))

    @activity(
        config={
            "description": dedent(
                """
                This tool can be used to make a delete request to the rest api url: {{ _self.full_url }}
                This rest api has the following description: {{ _self.description }}
                {% if _self.request_path_parameters %}The request path parameters must follow this JSON schema: {{ _self.request_path_params_schema }}{% endif %}
                {% if _self.request_query_parameters %}The request query parameters must follow this JSON schema: {{ _self.request_path_params_schema }}{% endif %}
                """,
            ),
            "schema": Schema(
                {
                    schema.Optional(Literal("query_params", description="The request query parameters.")): dict,
                    schema.Optional(Literal("path_params", description="The request path parameters.")): Schema([str]),
                },
            ),
        },
    )
    def delete(self, params: dict) -> BaseArtifact:
        from requests import delete, exceptions

        values = params["values"]
        base_url = self.base_url
        path = self.path

        query_params = values.get("query_params", {})
        path_params = values.get("path_params", [])
        url = self._build_url(base_url, path=path, path_params=path_params)

        try:
            response = delete(url, params=query_params, timeout=30, headers=self.request_headers)
            return TextArtifact(response.text)
        except exceptions.RequestException as err:
            return ErrorArtifact(str(err))

    def _build_url(self, base_url: str, path: Optional[str] = None, path_params: Optional[list] = None) -> str:
        url = ""

        if path:
            url += path.strip("/")

        if path_params:
            url += f"/{str.join('/', map(str, path_params))}"

        return urljoin(base_url.strip("/"), url)
```

</details>

- `base_url = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.rest_api.tool.RestApiTool.base_url"></span>

- `description = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.rest_api.tool.RestApiTool.description"></span>

- `full_url` <small>property</small>  <span id="griptape.tools.rest_api.tool.RestApiTool.full_url"></span>

- `path = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.rest_api.tool.RestApiTool.path"></span>

- `request_body_schema = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.rest_api.tool.RestApiTool.request_body_schema"></span>

- `request_headers = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.rest_api.tool.RestApiTool.request_headers"></span>

- `request_path_params_schema = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.rest_api.tool.RestApiTool.request_path_params_schema"></span>

- `request_query_params_schema = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.rest_api.tool.RestApiTool.request_query_params_schema"></span>

- `response_body_schema = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.rest_api.tool.RestApiTool.response_body_schema"></span>

<span id="griptape.tools.rest_api.tool.RestApiTool._build_url"></span>

### \_build\_url(base\_url, path=None, path\_params=None)

<details>

<summary>

Source Code in <code>griptape/tools/rest\_api/tool.py</code>

</summary>

```python
def _build_url(self, base_url: str, path: Optional[str] = None, path_params: Optional[list] = None) -> str:
    url = ""

    if path:
        url += path.strip("/")

    if path_params:
        url += f"/{str.join('/', map(str, path_params))}"

    return urljoin(base_url.strip("/"), url)
```

</details>

<span id="griptape.tools.rest_api.tool.RestApiTool.delete"></span>

### delete(params)

<details>

<summary>

Source Code in <code>griptape/tools/rest\_api/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": dedent(
            """
            This tool can be used to make a delete request to the rest api url: {{ _self.full_url }}
            This rest api has the following description: {{ _self.description }}
            {% if _self.request_path_parameters %}The request path parameters must follow this JSON schema: {{ _self.request_path_params_schema }}{% endif %}
            {% if _self.request_query_parameters %}The request query parameters must follow this JSON schema: {{ _self.request_path_params_schema }}{% endif %}
            """,
        ),
        "schema": Schema(
            {
                schema.Optional(Literal("query_params", description="The request query parameters.")): dict,
                schema.Optional(Literal("path_params", description="The request path parameters.")): Schema([str]),
            },
        ),
    },
)
def delete(self, params: dict) -> BaseArtifact:
    from requests import delete, exceptions

    values = params["values"]
    base_url = self.base_url
    path = self.path

    query_params = values.get("query_params", {})
    path_params = values.get("path_params", [])
    url = self._build_url(base_url, path=path, path_params=path_params)

    try:
        response = delete(url, params=query_params, timeout=30, headers=self.request_headers)
        return TextArtifact(response.text)
    except exceptions.RequestException as err:
        return ErrorArtifact(str(err))
```

</details>

<span id="griptape.tools.rest_api.tool.RestApiTool.get"></span>

### get(params)

<details>

<summary>

Source Code in <code>griptape/tools/rest\_api/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": dedent(
            """
            This tool can be used to make a get request to the rest api url: {{ _self.full_url }}
            This rest api has the following description: {{ _self.description }}
            {% if _self.request_path_parameters %}The request path parameters must follow this JSON schema: {{ _self.request_path_params_schema }}{% endif %}
            {% if _self.request_query_parameters %}The request query parameters must follow this JSON schema: {{ _self.request_path_params_schema }}{% endif %}
            {% if _self.response_body_schema %}The response body must follow this JSON schema: {{ _self.response_body_schema }}{% endif %}
            """,
        ),
        "schema": schema.Optional(
            Schema(
                {
                    schema.Optional(Literal("query_params", description="The request query parameters.")): dict,
                    schema.Optional(Literal("path_params", description="The request path parameters.")): Schema(
                        [str]
                    ),
                },
            ),
        ),
    },
)
def get(self, params: dict) -> BaseArtifact:
    from requests import exceptions, get

    values = params["values"]
    base_url = self.base_url
    path = self.path

    query_params = {}
    path_params = []
    if values:
        query_params = values.get("query_params", {})
        path_params = values.get("path_params", [])
    url = self._build_url(base_url, path=path, path_params=path_params)

    try:
        response = get(url, params=query_params, timeout=30, headers=self.request_headers)
        return TextArtifact(response.text)
    except exceptions.RequestException as err:
        return ErrorArtifact(str(err))
```

</details>

<span id="griptape.tools.rest_api.tool.RestApiTool.patch"></span>

### patch(params)

<details>

<summary>

Source Code in <code>griptape/tools/rest\_api/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": dedent(
            """
            This tool can be used to make a patch request to the rest api url: {{ _self.full_url }}
            This rest api has the following description: {{ _self.description }}
            {% if _self.request_path_parameters %}The request path parameters must follow this JSON schema: {{ _self.request_path_params_schema }}{% endif %}
            {% if _self.request_body_schema %}The request body must follow this JSON schema: {{ _self.request_body_schema }}{% endif %}
            {% if _self.response_body_schema %}The response body must follow this JSON schema: {{ _self.response_body_schema }}{% endif %}
            """,
        ),
        "schema": Schema(
            {
                Literal("path_params", description="The request path parameters."): Schema([str]),
                Literal("body", description="The request body."): dict,
            },
        ),
    },
)
def patch(self, params: dict) -> BaseArtifact:
    from requests import exceptions, patch

    values = params["values"]
    base_url = self.base_url
    path = self.path
    body = values["body"]
    path_params = values["path_params"]
    url = self._build_url(base_url, path=path, path_params=path_params)

    try:
        response = patch(url, json=body, timeout=30, headers=self.request_headers)
        return TextArtifact(response.text)
    except exceptions.RequestException as err:
        return ErrorArtifact(str(err))
```

</details>

<span id="griptape.tools.rest_api.tool.RestApiTool.post"></span>

### post(params)

<details>

<summary>

Source Code in <code>griptape/tools/rest\_api/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": dedent(
            """
            This tool can be used to make a post request to the rest api url: {{ _self.full_url }}
            This rest api has the following description: {{ _self.description }}
            {% if _self.request_body_schema %}The request body must follow this JSON schema: {{ _self.request_body_schema }}{% endif %}
            {% if _self.response_body_schema %}The response body must follow this JSON schema: {{ _self.response_body_schema }}{% endif %}
            """,
        ),
        "schema": Schema({Literal("body", description="The request body."): dict}),
    },
)
def post(self, params: dict) -> BaseArtifact:
    from requests import exceptions, post

    values = params["values"]
    base_url = self.base_url
    path = self.path
    url = self._build_url(base_url, path=path)
    body = values["body"]

    try:
        response = post(url, json=body, timeout=30, headers=self.request_headers)
        return TextArtifact(response.text)
    except exceptions.RequestException as err:
        return ErrorArtifact(str(err))
```

</details>

<span id="griptape.tools.rest_api.tool.RestApiTool.put"></span>

### put(params)

<details>

<summary>

Source Code in <code>griptape/tools/rest\_api/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": dedent(
            """
            This tool can be used to make a put request to the rest api url: {{ _self.full_url }}
            This rest api has the following description: {{ _self.description }}
            {% if _self.request_body_schema %}The request body must follow this JSON schema: {{ _self.request_body_schema }}{% endif %}
            {% if _self.response_body_schema %}The response body must follow this JSON schema: {{ _self.response_body_schema }}{% endif %}
            """,
        ),
        "schema": Schema({Literal("body", description="The request body."): dict}),
    },
)
def put(self, params: dict) -> BaseArtifact:
    from requests import exceptions, put

    values = params["values"]
    base_url = self.base_url
    path = self.path
    body = values["body"]
    url = self._build_url(base_url, path=path)

    try:
        response = put(url, json=body, timeout=30, headers=self.request_headers)

        return TextArtifact(response.text)
    except exceptions.RequestException as err:
        return ErrorArtifact(str(err))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
