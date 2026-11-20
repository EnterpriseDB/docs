---
title: SQL
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/sql-drivers/
lastModified: 2025-11-07T18:06:05Z
---

# SQL

## Overview

SQL drivers can be used to make SQL queries and load table schemas. They are used by the [SqlLoader](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/sql_loader/) to process data. All loaders implement the following methods:

- `execute_query()` executes a query and returns [RowResult](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/sql/base_sql_driver/#griptape.drivers.sql.base_sql_driver.BaseSqlDriver.RowResult)s.
- `execute_query_row()` executes a query and returns a raw result from SQL.
- `get_table_schema()` returns a table schema.

## SQL Drivers

### SQL

> **Note: Info**
>
> This driver requires the `drivers-sql` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

Note that you may need to install the appropriate database driver for your SQL database.
For example, to use the `psycopg2` driver for PostgreSQL, you can install it with `pip install psycopg2-binary`.

This is a basic SQL loader based on [SQLAlchemy 2.0](https://docs.sqlalchemy.org/en/20/). Here is an example of how to use it:

```python
from griptape.drivers.sql.sql_driver import SqlDriver

driver = SqlDriver(engine_url="sqlite:///:memory:")

driver.execute_query("select 'foo', 'bar';")

```

### Amazon Redshift

> **Note: Info**
>
> This driver requires the `drivers-sql-amazon-redshift` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

This is a SQL driver for interacting with the [Amazon Redshift Data API](https://docs.aws.amazon.com/redshift-data/latest/APIReference/Welcome.html)
to execute statements. Here is an example of how to use it for Redshift Serverless:

```python
import os

import boto3

from griptape.drivers.sql.amazon_redshift import AmazonRedshiftSqlDriver

session = boto3.Session()

driver = AmazonRedshiftSqlDriver(
    database=os.environ["REDSHIFT_DATABASE"],
    session=session,
    cluster_identifier=os.environ["REDSHIFT_CLUSTER_IDENTIFIER"],
)

driver.execute_query("select * from people;")

```

### Snowflake

> **Note: Info**
>
> This driver requires the `drivers-sql-snowflake` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

This is a SQL driver based on the [Snowflake SQLAlchemy Toolkit](https://docs.snowflake.com/en/developer-guide/python-connector/sqlalchemy) which runs on top of the Snowflake Connector for Python. Here is an example of how to use it:

```python
import os

import snowflake.connector
from snowflake.connector import SnowflakeConnection

from griptape.drivers.sql.snowflake import SnowflakeSqlDriver


def get_snowflake_connection() -> SnowflakeConnection:
    return snowflake.connector.connect(
        account=os.environ["SNOWFLAKE_ACCOUNT"],
        user=os.environ["SNOWFLAKE_USER"],
        password=os.environ["SNOWFLAKE_PASSWORD"],
        database=os.environ["SNOWFLAKE_DATABASE"],
        schema=os.environ["SNOWFLAKE_SCHEMA"],
        warehouse=os.environ["SNOWFLAKE_WAREHOUSE"],
    )


driver = SnowflakeSqlDriver(get_connection=get_snowflake_connection)

driver.execute_query("select * from people;")

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
