---
title: Known issues
description: Learn about known issues in Analytics Accelerator version 1.12.
product: EDB Postgres AI Analytics Accelerator
version: "1.12"
url: https://www.enterprisedb.com/docs/pgaa/latest/overview/known_issues/
lastModified: 2026-11-18T10:56:45Z
---

# Known issues

These are the currently known issues and limitations identified in this Analytics Accelerator release. Where applicable, we have included workarounds to help you mitigate the impact of these issues. These issues are actively tracked and are planned for resolution in a future release.

### Maintenance

- While the function `pgaa.launch_task()` supports multiple maintenance operations for Delta Lake (such as `z-order` and `vacuum`), it currently only supports the `compaction` and `purge` operations for Iceberg tables. For other Iceberg maintenance routines, use `pgaa.spark_sql()`.

### Spark

- Integration with Apache Spark is supported for:
  - Read-only queries on Parquet files in S3-compatible object storage or a shared POSIX filesystem.
  - Read-only queries for Iceberg tables in Iceberg REST catalogs.
- GPU acceleration with Apache Spark is only supported for read-only queries on Parquet files in S3-compatible object storage or a shared POSIX filesystem.
- There is a known issue in the Iceberg Spark Library version 1.9.2 when using Spark to read from Iceberg tables. Under certain conditions, equality deletes may occasionally be skipped during concurrent executions.
  The current workaround is to disable the Spark application setting [`spark.sql.iceberg.executor-cache.enabled`](https://iceberg.apache.org/docs/latest/spark-configuration/) on your `spark-defaults.conf` file.
  Disabling this cache ensures data consistency by correctly processing all deletes, but it may have performance implications for high-volume read workloads.

### Writing

- `UPDATE` and `DELETE` statements on PGAA tables don't return an error, but they don't change any rows.

### Object storage

- Integration with Amazon S3 Tables is currently not supported for PGD-integrated features (tiered tables, replication, and offloading) or for [native replication](https://www.enterprisedb.com/docs/pgaa/latest/replication/). For PGD-managed lifecycles and native replication, use either a storage location or an Iceberg REST-compliant catalog.
- Renaming a table configured for analytics replication with PGD, or renaming the schema that contains it, isn't supported and interrupts synchronization with the object storage copy. Don't rename these tables or their schemas. Native replication isn't affected. See [Renaming tables](https://www.enterprisedb.com/docs/pgaa/latest/replication/#renaming-tables).

### WarehousePG

- PGAA on WarehousePG supports only the standard Postgres planner, not the Orca optimizer.
- PGAA tables don't support `UPDATE` and `DELETE`. Use CTAS or `INSERT` to write new data into the data lake.
- `pgaa.launch_task()` requires the `pgcrypto` extension. If you see the error `function gen_random_uuid() does not exist`, run `CREATE EXTENSION pgcrypto;` on the coordinator before using maintenance functions.
- When restoring into an existing database that already contains PGAA tables, tables whose metadata already exists are skipped and only missing tables are restored. Use `--redirect-db` to restore a complete backup into a new, empty database.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
