---
title: Redistributing Tables
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/expand/expand-redistribute/
lastModified: 2026-09-25T15:14:11+01:00
---

# Redistributing Tables

Redistribute tables to balance existing data over the newly expanded cluster.

After creating an expansion schema, you can redistribute tables across the entire system with [gpexpand](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/utility_guide/reference/gpexpand/). Plan to run this during low-use hours when the utility's CPU usage and table locks have minimal impact on operations. Rank tables to redistribute the largest or most critical tables first.

> **Note** When redistributing data, WarehousePG must be running in production mode. WarehousePG cannot be in restricted mode or in coordinator mode. The [gpstart](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/utility_guide/reference/gpstart/) options `-R` or `-m` cannot be specified to start WarehousePG.

While table redistribution is underway, any new tables or partitions created are distributed across all segments exactly as they would be under normal operating conditions. Queries can access all segments, even before the relevant data is redistributed to tables on the new segments. The table or partition being redistributed is locked and unavailable for read or write operations. When its redistribution completes, normal operations resume.

- [Ranking Tables for Redistribution](#topic29)
- [Redistributing Tables Using gpexpand](#topic30)
- [Monitoring Table Redistribution](#topic31)

**Parent topic:** [Expanding a WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/expand/)

<a id="topic29"></a>

## Ranking Tables for Redistribution

For large systems, you can control the table redistribution order. Adjust tables' `rank` values in the expansion schema to prioritize heavily-used tables and minimize performance impact. Available free disk space can affect table ranking; see [Managing Redistribution in Large-Scale WarehousePG clusters](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/expand/expand-planning/).

To rank tables for redistribution by updating `rank` values in _[gpexpand.status\_detail](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/gp_expansion_tables/)_, connect to WarehousePG using `psql` or another supported client. Update _gpexpand.status\_detail_ with commands such as:

```
=> UPDATE gpexpand.status_detail SET rank=10;

=> UPDATE gpexpand.status_detail SET rank=1 WHERE fq_name = 'public.lineitem';
=> UPDATE gpexpand.status_detail SET rank=2 WHERE fq_name = 'public.orders';
```

These commands lower the priority of all tables to `10` and then assign a rank of `1` to `lineitem` and a rank of `2` to `orders`. When table redistribution begins, `lineitem` is redistributed first, followed by `orders` and all other tables in _gpexpand.status\_detail_. To exclude a table from redistribution, remove the table from the _gpexpand.status\_detail_ table.

<a id="topic30"></a>

## Redistributing Tables Using gpexpand

<a id="no162282"></a>

### To redistribute tables with gpexpand

1. Log in on the coordinator host as the user who will run your WarehousePG cluster, for example, `gpadmin`.
2. Run the `gpexpand` utility. You can use the `-d` or `-e` option to define the expansion session time period. For example, to run the utility for up to 60 consecutive hours:

   ```
   $ gpexpand -d 60:00:00
   ```

   The utility redistributes tables until the last table in the schema completes or it reaches the specified duration or end time. `gpexpand` updates the status and time in _[gpexpand.status](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/gp_expansion_status/)_ when a session starts and finishes.

> **Note** After completing table redistribution, run the `VACUUM ANALYZE` and `REINDEX`commands on the catalog tables to update table statistics, and rebuild indexes. See [Routine Vacuum and Analyze](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/maintain/) in the _Administration Guide_ and [`VACUUM`](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/VACUUM/) in the _Reference Guide_.

<a id="topic31"></a>

## Monitoring Table Redistribution

During the table redistribution process you can query the expansion schema to view:

- a current progress summary, the estimated rate of table redistribution, and the estimated time to completion. Use _[gpexpand.expansion\_progress](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/catalog_ref-views/#gpexpandexpansion_progress)_, as described in [Viewing Expansion Status](#topic32).
- per-table status information, using _[gpexpand.status\_detail](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/gp_expansion_tables/)_. See [Viewing Table Status](#topic33).

See also [Monitoring the Cluster Expansion State](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/expand/expand-initialize/) for information about monitoring the overall expansion progress with the `gpstate` utility.

<a id="topic32"></a>

### Viewing Expansion Status

After the first table completes redistribution, _gpexpand.expansion\_progress_ calculates its estimates and refreshes them based on all tables' redistribution rates. Calculations restart each time you start a table redistribution session with `gpexpand`. To monitor progress, connect to WarehousePG using `psql` or another supported client; query _gpexpand.expansion\_progress_ with a command like the following:

```
=# SELECT * FROM gpexpand.expansion_progress;
             name             |         value
------------------------------+-----------------------
 Bytes Left                   | 5534842880
 Bytes Done                   | 142475264
 Estimated Expansion Rate     | 680.75667095996092 MB/s
 Estimated Time to Completion | 00:01:01.008047
 Tables Expanded              | 4
 Tables Left                  | 4
(6 rows)
```

<a id="topic33"></a>

### Viewing Table Status

The table _gpexpand.status\_detail_ stores status, time of last update, and more facts about each table in the schema. To see a table's status, connect to WarehousePG using `psql` or another supported client and query _gpexpand.status\_detail_:

```
=> SELECT status, expansion_started, source_bytes FROM
gpexpand.status_detail WHERE fq_name = 'public.sales';
  status   |     expansion_started      | source_bytes
-----------+----------------------------+--------------
 COMPLETED | 2017-02-20 10:54:10.043869 |   4929748992
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
