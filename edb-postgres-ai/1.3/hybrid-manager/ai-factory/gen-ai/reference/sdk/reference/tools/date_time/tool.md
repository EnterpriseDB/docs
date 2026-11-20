---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/date_time/tool/
lastModified: 2026-05-22T19:45:14+05:30
---

# tool

<span id="griptape.tools.date_time.tool.DateTimeTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")

<details>

<summary>

Source Code in <code>griptape/tools/date\_time/tool.py</code>

</summary>

```python
@define
class DateTimeTool(BaseTool):
    denylist: list[str] = field(default=Factory(lambda: ["get_relative_datetime"]), kw_only=True)

    @activity(config={"description": "Can be used to return current date and time."})
    def get_current_datetime(self) -> BaseArtifact:
        return TextArtifact(str(datetime.now()))

    @activity(
        config={
            "description": "Can be used to return a relative date and time.",
            "schema": schema.Schema(
                {
                    schema.Literal(
                        "relative_date_string",
                        description='Relative date in English compatible with the dateparser library. For example, "now EST", "20 minutes ago", '
                        '"in 2 days", "3 months, 1 week and 1 day ago", or "yesterday at 2pm"',
                    ): str,
                },
            ),
        },
    )
    def get_relative_datetime(self, params: dict) -> BaseArtifact:
        from dateparser import parse

        try:
            date_string = params["values"]["relative_date_string"]
            relative_datetime = parse(date_string)

            if relative_datetime:
                return TextArtifact(str(relative_datetime))
            return ErrorArtifact("invalid date string")
        except Exception as e:
            return ErrorArtifact(f"error getting current datetime: {e}")

    @activity(
        config={
            "description": "Can be used to add a timedelta to a datetime.",
            "schema": schema.Schema(
                {
                    schema.Literal(
                        "timedelta_kwargs",
                        description='A dictionary of keyword arguments to pass to the timedelta function. For example, {"days": -1, "hours": 2}',
                    ): dict,
                    schema.Optional(
                        schema.Literal(
                            "iso_datetime",
                            description='Datetime represented as a string in ISO 8601 format. For example, "2021-01-01T00:00:00". Defaults to the current datetime if not provided.',
                        )
                    ): str,
                },
            ),
        },
    )
    def add_timedelta(self, timedelta_kwargs: dict, iso_datetime: Optional[str] = None) -> BaseArtifact:
        if iso_datetime is None:
            iso_datetime = datetime.now().isoformat()
        return TextArtifact((datetime.fromisoformat(iso_datetime) + timedelta(**timedelta_kwargs)).isoformat())

    @activity(
        config={
            "description": "Can be used to calculate the difference between two datetimes. The difference is calculated as end_datetime - start_datetime.",
            "schema": schema.Schema(
                {
                    schema.Literal(
                        "start_datetime",
                        description='Datetime represented as a string in ISO 8601 format. For example, "2021-01-01T00:00:00"',
                    ): str,
                    schema.Literal(
                        "end_datetime",
                        description='Datetime represented as a string in ISO 8601 format. For example, "2021-01-02T00:00:00"',
                    ): str,
                }
            ),
        }
    )
    def get_datetime_diff(self, start_datetime: str, end_datetime: str) -> BaseArtifact:
        return TextArtifact(str(datetime.fromisoformat(end_datetime) - datetime.fromisoformat(start_datetime)))
```

</details>

- `denylist = field(default=Factory(lambda: ['get_relative_datetime']), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.date_time.tool.DateTimeTool.denylist"></span>

<span id="griptape.tools.date_time.tool.DateTimeTool.add_timedelta"></span>

### add\_timedelta(timedelta\_kwargs, iso\_datetime=None)

<details>

<summary>

Source Code in <code>griptape/tools/date\_time/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Can be used to add a timedelta to a datetime.",
        "schema": schema.Schema(
            {
                schema.Literal(
                    "timedelta_kwargs",
                    description='A dictionary of keyword arguments to pass to the timedelta function. For example, {"days": -1, "hours": 2}',
                ): dict,
                schema.Optional(
                    schema.Literal(
                        "iso_datetime",
                        description='Datetime represented as a string in ISO 8601 format. For example, "2021-01-01T00:00:00". Defaults to the current datetime if not provided.',
                    )
                ): str,
            },
        ),
    },
)
def add_timedelta(self, timedelta_kwargs: dict, iso_datetime: Optional[str] = None) -> BaseArtifact:
    if iso_datetime is None:
        iso_datetime = datetime.now().isoformat()
    return TextArtifact((datetime.fromisoformat(iso_datetime) + timedelta(**timedelta_kwargs)).isoformat())
```

</details>

<span id="griptape.tools.date_time.tool.DateTimeTool.get_current_datetime"></span>

### get\_current\_datetime()

<details>

<summary>

Source Code in <code>griptape/tools/date\_time/tool.py</code>

</summary>

```python
@activity(config={"description": "Can be used to return current date and time."})
def get_current_datetime(self) -> BaseArtifact:
    return TextArtifact(str(datetime.now()))
```

</details>

<span id="griptape.tools.date_time.tool.DateTimeTool.get_datetime_diff"></span>

### get\_datetime\_diff(start\_datetime, end\_datetime)

<details>

<summary>

Source Code in <code>griptape/tools/date\_time/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Can be used to calculate the difference between two datetimes. The difference is calculated as end_datetime - start_datetime.",
        "schema": schema.Schema(
            {
                schema.Literal(
                    "start_datetime",
                    description='Datetime represented as a string in ISO 8601 format. For example, "2021-01-01T00:00:00"',
                ): str,
                schema.Literal(
                    "end_datetime",
                    description='Datetime represented as a string in ISO 8601 format. For example, "2021-01-02T00:00:00"',
                ): str,
            }
        ),
    }
)
def get_datetime_diff(self, start_datetime: str, end_datetime: str) -> BaseArtifact:
    return TextArtifact(str(datetime.fromisoformat(end_datetime) - datetime.fromisoformat(start_datetime)))
```

</details>

<span id="griptape.tools.date_time.tool.DateTimeTool.get_relative_datetime"></span>

### get\_relative\_datetime(params)

<details>

<summary>

Source Code in <code>griptape/tools/date\_time/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Can be used to return a relative date and time.",
        "schema": schema.Schema(
            {
                schema.Literal(
                    "relative_date_string",
                    description='Relative date in English compatible with the dateparser library. For example, "now EST", "20 minutes ago", '
                    '"in 2 days", "3 months, 1 week and 1 day ago", or "yesterday at 2pm"',
                ): str,
            },
        ),
    },
)
def get_relative_datetime(self, params: dict) -> BaseArtifact:
    from dateparser import parse

    try:
        date_string = params["values"]["relative_date_string"]
        relative_datetime = parse(date_string)

        if relative_datetime:
            return TextArtifact(str(relative_datetime))
        return ErrorArtifact("invalid date string")
    except Exception as e:
        return ErrorArtifact(f"error getting current datetime: {e}")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
