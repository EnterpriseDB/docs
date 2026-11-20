---
title: snowflake_sql_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/sql/snowflake_sql_driver/
lastModified: 2025-11-07T18:06:05Z
---

# snowflake\_sql\_driver

<span id="griptape.drivers.sql.snowflake_sql_driver.SnowflakeSqlDriver"></span>

Bases:
[`BaseSqlDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/sql/#griptape.drivers.sql.BaseSqlDriver "BaseSqlDriver (griptape.drivers.sql.BaseSqlDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/sql/snowflake\_sql\_driver.py</code>

</summary>

```python
@define
class SnowflakeSqlDriver(BaseSqlDriver):
    get_connection: Callable[[], SnowflakeConnection] = field(kw_only=True)
    _engine: Optional[Engine] = field(default=None, kw_only=True, alias="engine", metadata={"serializable": False})

    @get_connection.validator  # pyright: ignore[reportFunctionMemberAccess]
    def validate_get_connection(self, _: Attribute, get_connection: Callable[[], SnowflakeConnection]) -> None:
        snowflake_connection = get_connection()
        snowflake = import_optional_dependency("snowflake")

        if not isinstance(snowflake_connection, snowflake.connector.SnowflakeConnection):
            raise ValueError("The get_connection function must return a SnowflakeConnection")
        if not snowflake_connection.schema or not snowflake_connection.database:
            raise ValueError("Provide a schema and database for the Snowflake connection")

    @lazy_property()
    def engine(self) -> Engine:
        return import_optional_dependency("sqlalchemy").create_engine(
            "snowflake://not@used/db",
            creator=self.get_connection,
        )

    def execute_query(self, query: str) -> Optional[list[BaseSqlDriver.RowResult]]:
        rows = self.execute_query_raw(query)

        if rows:
            return [BaseSqlDriver.RowResult(row) for row in rows]
        return None

    def execute_query_raw(self, query: str) -> Optional[list[dict[str, Any]]]:
        sqlalchemy = import_optional_dependency("sqlalchemy")

        with self.engine.connect() as con:
            results = con.execute(sqlalchemy.text(query))

            if results is not None:
                if results.returns_rows:
                    return [dict(result._mapping) for result in results]
                return None
            raise ValueError("No results found")

    def get_table_schema(self, table_name: str, schema: Optional[str] = None) -> Optional[str]:
        sqlalchemy = import_optional_dependency("sqlalchemy")

        try:
            metadata_obj = sqlalchemy.MetaData()
            metadata_obj.reflect(bind=self.engine)
            table = sqlalchemy.Table(table_name, metadata_obj, schema=schema, autoload=True, autoload_with=self.engine)
            return str([(c.name, c.type) for c in table.columns])
        except sqlalchemy.exc.NoSuchTableError:
            return None
```

</details>

- `_engine = field(default=None, kw_only=True, alias='engine', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.sql.snowflake_sql_driver.SnowflakeSqlDriver._engine"></span>

- `get_connection = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.sql.snowflake_sql_driver.SnowflakeSqlDriver.get_connection"></span>

<span id="griptape.drivers.sql.snowflake_sql_driver.SnowflakeSqlDriver.engine"></span>

### engine()

<details>

<summary>

Source Code in <code>griptape/drivers/sql/snowflake\_sql\_driver.py</code>

</summary>

```python
@lazy_property()
def engine(self) -> Engine:
    return import_optional_dependency("sqlalchemy").create_engine(
        "snowflake://not@used/db",
        creator=self.get_connection,
    )
```

</details>

<span id="griptape.drivers.sql.snowflake_sql_driver.SnowflakeSqlDriver.execute_query"></span>

### execute\_query(query)

<details>

<summary>

Source Code in <code>griptape/drivers/sql/snowflake\_sql\_driver.py</code>

</summary>

```python
def execute_query(self, query: str) -> Optional[list[BaseSqlDriver.RowResult]]:
    rows = self.execute_query_raw(query)

    if rows:
        return [BaseSqlDriver.RowResult(row) for row in rows]
    return None
```

</details>

<span id="griptape.drivers.sql.snowflake_sql_driver.SnowflakeSqlDriver.execute_query_raw"></span>

### execute\_query\_raw(query)

<details>

<summary>

Source Code in <code>griptape/drivers/sql/snowflake\_sql\_driver.py</code>

</summary>

```python
def execute_query_raw(self, query: str) -> Optional[list[dict[str, Any]]]:
    sqlalchemy = import_optional_dependency("sqlalchemy")

    with self.engine.connect() as con:
        results = con.execute(sqlalchemy.text(query))

        if results is not None:
            if results.returns_rows:
                return [dict(result._mapping) for result in results]
            return None
        raise ValueError("No results found")
```

</details>

<span id="griptape.drivers.sql.snowflake_sql_driver.SnowflakeSqlDriver.get_table_schema"></span>

### get\_table\_schema(table\_name, schema=None)

<details>

<summary>

Source Code in <code>griptape/drivers/sql/snowflake\_sql\_driver.py</code>

</summary>

```python
def get_table_schema(self, table_name: str, schema: Optional[str] = None) -> Optional[str]:
    sqlalchemy = import_optional_dependency("sqlalchemy")

    try:
        metadata_obj = sqlalchemy.MetaData()
        metadata_obj.reflect(bind=self.engine)
        table = sqlalchemy.Table(table_name, metadata_obj, schema=schema, autoload=True, autoload_with=self.engine)
        return str([(c.name, c.type) for c in table.columns])
    except sqlalchemy.exc.NoSuchTableError:
        return None
```

</details>

<span id="griptape.drivers.sql.snowflake_sql_driver.SnowflakeSqlDriver.validate_get_connection"></span>

### validat&#x65;_&#x67;et\_connection(_, get\_connection)

<details>

<summary>

Source Code in <code>griptape/drivers/sql/snowflake\_sql\_driver.py</code>

</summary>

```python
@get_connection.validator  # pyright: ignore[reportFunctionMemberAccess]
def validate_get_connection(self, _: Attribute, get_connection: Callable[[], SnowflakeConnection]) -> None:
    snowflake_connection = get_connection()
    snowflake = import_optional_dependency("snowflake")

    if not isinstance(snowflake_connection, snowflake.connector.SnowflakeConnection):
        raise ValueError("The get_connection function must return a SnowflakeConnection")
    if not snowflake_connection.schema or not snowflake_connection.database:
        raise ValueError("Provide a schema and database for the Snowflake connection")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
