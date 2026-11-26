---
title: sql_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/sql/sql_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# sql\_driver

<span id="griptape.drivers.sql.sql_driver.SqlDriver"></span>

Bases:
[`BaseSqlDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/sql/#griptape.drivers.sql.BaseSqlDriver "BaseSqlDriver (griptape.drivers.sql.BaseSqlDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/sql/sql\_driver.py</code>

</summary>

```python
@define
class SqlDriver(BaseSqlDriver):
    engine_url: str = field(kw_only=True)
    create_engine_params: dict = field(factory=dict, kw_only=True)
    _engine: Optional[Engine] = field(default=None, kw_only=True, alias="engine", metadata={"serializable": False})

    @lazy_property()
    def engine(self) -> Engine:
        return import_optional_dependency("sqlalchemy").create_engine(self.engine_url, **self.create_engine_params)

    def execute_query(self, query: str) -> Optional[list[BaseSqlDriver.RowResult]]:
        rows = self.execute_query_raw(query)

        if rows:
            return [BaseSqlDriver.RowResult(row) for row in rows]
        return None

    def execute_query_raw(self, query: str) -> Optional[list[dict[str, Optional[Any]]]]:
        sqlalchemy = import_optional_dependency("sqlalchemy")

        with self.engine.connect() as con:
            results = con.execute(sqlalchemy.text(query))

            if results is not None:
                if results.returns_rows:
                    return [dict(result._mapping) for result in results]
                con.commit()
                return None
            raise ValueError("No result found")

    def get_table_schema(self, table_name: str, schema: Optional[str] = None) -> Optional[str]:
        sqlalchemy_exc = import_optional_dependency("sqlalchemy.exc")

        try:
            return str(SqlDriver._get_table_schema(self.engine, table_name, schema))
        except sqlalchemy_exc.NoSuchTableError:
            return None

    @staticmethod
    @lru_cache
    def _get_table_schema(
        engine: Engine, table_name: str, schema: Optional[str] = None
    ) -> Optional[list[tuple[str, str]]]:
        sqlalchemy = import_optional_dependency("sqlalchemy")

        return [(col["name"], col["type"]) for col in sqlalchemy.inspect(engine).get_columns(table_name, schema=schema)]
```

</details>

- `_engine = field(default=None, kw_only=True, alias='engine', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.sql.sql_driver.SqlDriver._engine"></span>

- `create_engine_params = field(factory=dict, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.sql.sql_driver.SqlDriver.create_engine_params"></span>

- `engine_url = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.sql.sql_driver.SqlDriver.engine_url"></span>

<span id="griptape.drivers.sql.sql_driver.SqlDriver._get_table_schema"></span>

### \_get\_table\_schema(engine, table\_name, schema=None)cachedstaticmethod

<details>

<summary>

Source Code in <code>griptape/drivers/sql/sql\_driver.py</code>

</summary>

```python
@staticmethod
@lru_cache
def _get_table_schema(
    engine: Engine, table_name: str, schema: Optional[str] = None
) -> Optional[list[tuple[str, str]]]:
    sqlalchemy = import_optional_dependency("sqlalchemy")

    return [(col["name"], col["type"]) for col in sqlalchemy.inspect(engine).get_columns(table_name, schema=schema)]
```

</details>

<span id="griptape.drivers.sql.sql_driver.SqlDriver.engine"></span>

### engine()

<details>

<summary>

Source Code in <code>griptape/drivers/sql/sql\_driver.py</code>

</summary>

```python
@lazy_property()
def engine(self) -> Engine:
    return import_optional_dependency("sqlalchemy").create_engine(self.engine_url, **self.create_engine_params)
```

</details>

<span id="griptape.drivers.sql.sql_driver.SqlDriver.execute_query"></span>

### execute\_query(query)

<details>

<summary>

Source Code in <code>griptape/drivers/sql/sql\_driver.py</code>

</summary>

```python
def execute_query(self, query: str) -> Optional[list[BaseSqlDriver.RowResult]]:
    rows = self.execute_query_raw(query)

    if rows:
        return [BaseSqlDriver.RowResult(row) for row in rows]
    return None
```

</details>

<span id="griptape.drivers.sql.sql_driver.SqlDriver.execute_query_raw"></span>

### execute\_query\_raw(query)

<details>

<summary>

Source Code in <code>griptape/drivers/sql/sql\_driver.py</code>

</summary>

```python
def execute_query_raw(self, query: str) -> Optional[list[dict[str, Optional[Any]]]]:
    sqlalchemy = import_optional_dependency("sqlalchemy")

    with self.engine.connect() as con:
        results = con.execute(sqlalchemy.text(query))

        if results is not None:
            if results.returns_rows:
                return [dict(result._mapping) for result in results]
            con.commit()
            return None
        raise ValueError("No result found")
```

</details>

<span id="griptape.drivers.sql.sql_driver.SqlDriver.get_table_schema"></span>

### get\_table\_schema(table\_name, schema=None)

<details>

<summary>

Source Code in <code>griptape/drivers/sql/sql\_driver.py</code>

</summary>

```python
def get_table_schema(self, table_name: str, schema: Optional[str] = None) -> Optional[str]:
    sqlalchemy_exc = import_optional_dependency("sqlalchemy.exc")

    try:
        return str(SqlDriver._get_table_schema(self.engine, table_name, schema))
    except sqlalchemy_exc.NoSuchTableError:
        return None
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
