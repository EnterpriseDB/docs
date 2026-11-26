---
title: whpg-diskquota
description: Learn how to limit disk space usage in WarehousePG by schema, role, tablespace, database, or cluster with the whpg-diskquota extension.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/diskquota/
lastModified: 2026-10-01T10:13:21+01:00
---

# whpg-diskquota

Use `whpg-diskquota` to limit the disk space that schemas, roles, and tablespaces use in a WarehousePG database. Starting with version 2.4, you can also limit the disk space used by a whole database or the entire cluster.

> **Note: Version availability**
>
> WarehousePG 7 supports `whpg-diskquota` 2.4.0, which adds database and cluster quotas. WarehousePG 6 requires `whpg-diskquota` 2.3.x instead, which supports schema, role, and tablespace quotas only.

`whpg-diskquota` applies the same rule at each of the following scopes:

- **Schema:** limits all tables in a database that reside in a specific schema.
- **Role:** limits all tables in a database that a specific role owns, no matter which role's session writes to them.
- **Tablespace:** limits a schema's or role's usage on one tablespace in a database. A tablespace is the storage location on disk where WarehousePG keeps the data files for the tables and indexes assigned to it.
- **Database:** limits a whole database's total size.
- **Cluster:** limits the combined size of every monitored database.

For all scopes, a table's disk usage includes the table data, indexes, toast tables, and free space map, plus, for an append-optimized table, its visibility map and index, and its block directory table. `whpg-diskquota` sums this usage across every WarehousePG segment to get a scope's total.

> **Note**
>
> A role quota only limits that role's usage in the database where you set it, not across the whole cluster, as `whpg-diskquota` tracks each role's usage separately in every database. You can't set a role-based disk quota for the WarehousePG cluster owner, typically `gpadmin`.

## How whpg-diskquota works

`whpg-diskquota` runs two kinds of background worker:

- **The launcher.** One runs per cluster, in the `diskquota` database. It keeps the list of monitored databases, starts and stops each database's worker, handles `CREATE`/`DROP EXTENSION diskquota`, and holds the cluster quota and running total.
- **A worker.** Each monitored database has its own worker, or shares a rotating pool of workers in dynamic mode (see [`diskquota.max_workers`](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/diskquota/reference/#diskquotamax_workers)). Every `diskquota.naptime` seconds, it re-measures the tables that changed since its last pass, rolls the results up per schema, role, tablespace, and database, and publishes its database's total to the launcher.

The launcher only runs on the active coordinator node, and the standby coordinator's postmaster doesn't start it while in standby mode. When the coordinator goes down and an administrator runs [`gpactivatestandby`](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/utility_guide/reference/gpactivatestandby/), the standby coordinator becomes the coordinator, and the launcher starts automatically, using the monitored-database list in the `diskquota` database to recreate the workers. `whpg-diskquota` doesn't automatically resume monitoring a segment that's replaced by a mirror, though, so restart WarehousePG manually in that situation.

Each worker records every scope that's over quota in a shared structure called the rejectmap, and `whpg-diskquota` blocks writes in one of two ways:

- **Soft limit** (the default). The coordinator checks the rejectmap before a write runs and rejects it up front, so the query never starts.
- **Hard limit** (`diskquota.hard_limit = on`). Each database's worker also dispatches its rejectmap entries to the segments, which stop an over-quota query mid-execution.

Expect a short delay, up to one `diskquota.naptime`, before a new quota takes effect or a quota-exceeded scope clears. If you free space or raise a limit, writes resume on their own on the next cycle, without a restart or manual reset.

To get started with `whpg-diskquota`, see:

- [Installing and upgrading whpg-diskquota](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/diskquota/installing/)
- [Using whpg-diskquota](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/diskquota/using/)
- [Reference](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/diskquota/reference/)

* [Release notes](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/diskquota/rel_notes/): Release notes for the whpg-diskquota extension for WarehousePG.
* [Installing and upgrading](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/diskquota/installing/): Install, upgrade, and downgrade the whpg-diskquota extension for WarehousePG.
* [Using](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/diskquota/using/): Set disk quotas, control enforcement, and monitor usage with the whpg-diskquota extension for WarehousePG.
* [Reference](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/diskquota/reference/): Configuration parameters, functions, and views exposed by the whpg-diskquota extension for WarehousePG.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
