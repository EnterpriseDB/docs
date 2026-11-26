---
title: database_*
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/gpperfmon/db-database/
lastModified: 2026-08-11T09:07:15Z
---

# database\_\*

<a id="db-database"></a>

The `database_*` tables store query workload information for a WarehousePG instance. There are three database tables, all having the same columns:

- `database_now` is an external table whose data files are stored in `$MASTER_DATA_DIRECTORY/gpperfmon/data`. Current query workload data is stored in `database_now` during the period between data collection from the data collection agents and automatic commitment to the `database_history` table.
- `database_tail` is an external table whose data files are stored in `$MASTER_DATA_DIRECTORY/gpperfmon/data`. This is a transitional table for query workload data that has been cleared from `database_now` but has not yet been committed to `database_history`. It typically only contains a few minutes worth of data.
- `database_history` is a regular table that stores historical database-wide query workload data. It is pre-partitioned into monthly partitions. Partitions are automatically added in two month increments as needed.

| Column            | Type      | Description                                                                                                                                              |
| ----------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ctime`           | timestamp | Time this row was created.                                                                                                                               |
| `queries_total`   | int       | The total number of queries in WarehousePG at data collection time.                                                                                      |
| `queries_running` | int       | The number of active queries running at data collection time.                                                                                            |
| `queries_queued`  | int       | The number of queries waiting in a resource group or resource queue, depending upon which resource management scheme is active, at data collection time. |

**Parent topic:** [The gpperfmon Database](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/gpperfmon/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
