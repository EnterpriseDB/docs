---
title: base_sql_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/sql/base_sql_driver/
lastModified: 2025-11-07T18:06:05Z
---

# base\_sql\_driver

<span id="griptape.drivers.sql.base_sql_driver.BaseSqlDriver"></span>

Bases:

<span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/sql/base\_sql\_driver.py</code>

</summary>

```python
@define
class BaseSqlDriver(ABC):
    @dataclass
    class RowResult:
        cells: dict[str, Any]

    @abstractmethod
    def execute_query(self, query: str) -> Optional[list[RowResult]]: ...

    @abstractmethod
    def execute_query_raw(self, query: str) -> Optional[list[dict[str, Any]]]: ...

    @abstractmethod
    def get_table_schema(self, table_name: str, schema: Optional[str] = None) -> Optional[str]: ...
```

</details>

<span id="griptape.drivers.sql.base_sql_driver.BaseSqlDriver.RowResult"></span>

### RowResultdataclass

<details>

<summary>

Source Code in <code>griptape/drivers/sql/base\_sql\_driver.py</code>

</summary>

```python
@dataclass
class RowResult:
    cells: dict[str, Any]
```

</details>

- `cells` <small>instance-attribute</small>  <span id="griptape.drivers.sql.base_sql_driver.BaseSqlDriver.RowResult.cells"></span>

<span id="griptape.drivers.sql.base_sql_driver.BaseSqlDriver.execute_query"></span>

### execute\_query(query)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/sql/base\_sql\_driver.py</code>

</summary>

```python
@abstractmethod
def execute_query(self, query: str) -> Optional[list[RowResult]]: ...
```

</details>

<span id="griptape.drivers.sql.base_sql_driver.BaseSqlDriver.execute_query_raw"></span>

### execute\_query\_raw(query)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/sql/base\_sql\_driver.py</code>

</summary>

```python
@abstractmethod
def execute_query_raw(self, query: str) -> Optional[list[dict[str, Any]]]: ...
```

</details>

<span id="griptape.drivers.sql.base_sql_driver.BaseSqlDriver.get_table_schema"></span>

### get\_table\_schema(table\_name, schema=None)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/sql/base\_sql\_driver.py</code>

</summary>

```python
@abstractmethod
def get_table_schema(self, table_name: str, schema: Optional[str] = None) -> Optional[str]: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
