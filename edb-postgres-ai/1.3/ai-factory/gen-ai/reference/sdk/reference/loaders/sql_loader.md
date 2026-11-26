---
title: sql_loader
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/sql_loader/
lastModified: 2025-11-07T18:06:05Z
---

# sql\_loader

<span id="griptape.loaders.sql_loader.SqlLoader"></span>

Bases:
[`BaseLoader[str, list[RowResult], ListArtifact[TextArtifact]]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/#griptape.loaders.BaseLoader "BaseLoader (griptape.loaders.BaseLoader)")

<details>

<summary>

Source Code in <code>griptape/loaders/sql\_loader.py</code>

</summary>

```python
@define
class SqlLoader(BaseLoader[str, list[BaseSqlDriver.RowResult], ListArtifact[TextArtifact]]):
    sql_driver: BaseSqlDriver = field(kw_only=True)
    format_row: Callable[[dict], str] = field(
        default=lambda value: "\n".join(f"{key}: {val}" for key, val in value.items()), kw_only=True
    )

    def fetch(self, source: str) -> list[BaseSqlDriver.RowResult]:
        return self.sql_driver.execute_query(source) or []

    def parse(self, data: list[BaseSqlDriver.RowResult]) -> ListArtifact[TextArtifact]:
        return ListArtifact([TextArtifact(self.format_row(row.cells)) for row in data])
```

</details>

- `format_row = field(default=lambda value: '\n'.join(f'{key}: {val}' for (key, val) in value.items()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.loaders.sql_loader.SqlLoader.format_row"></span>

- `sql_driver = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.loaders.sql_loader.SqlLoader.sql_driver"></span>

<span id="griptape.loaders.sql_loader.SqlLoader.fetch"></span>

### fetch(source)

<details>

<summary>

Source Code in <code>griptape/loaders/sql\_loader.py</code>

</summary>

```python
def fetch(self, source: str) -> list[BaseSqlDriver.RowResult]:
    return self.sql_driver.execute_query(source) or []
```

</details>

<span id="griptape.loaders.sql_loader.SqlLoader.parse"></span>

### parse(data)

<details>

<summary>

Source Code in <code>griptape/loaders/sql\_loader.py</code>

</summary>

```python
def parse(self, data: list[BaseSqlDriver.RowResult]) -> ListArtifact[TextArtifact]:
    return ListArtifact([TextArtifact(self.format_row(row.cells)) for row in data])
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
