---
title: PG_PARTITIONED_TABLE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_partitioned_table/
lastModified: 2025-11-25T20:39:04+05:30
---

# PG\_PARTITIONED\_TABLE

The `PG_PARTITIONED_TABLE` view provides information about how tables are partitioned.

In addition to the information in the [PostgreSQL pg\_partitioned\_table description](https://www.postgresql.org/docs/current/catalog-pg-partitioned-table.html), EDB Postgres Advanced Server provides the following information.

| Name                | Type           | Description                                |
| ------------------- | -------------- | ------------------------------------------ |
| partdynamicspec     | pg\_node\_tree | The dynamic partitioning specification     |
| partnullorder       | smallint       | Null ordering for range-partitioned tables |
| partsubparttemplate | pg\_node\_tree | Subpartition number specification          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
