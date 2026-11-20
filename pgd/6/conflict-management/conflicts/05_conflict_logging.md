---
title: Conflict logging
product: EDB Postgres Distributed (PGD)
version: 6.0.2
url: https://www.enterprisedb.com/docs/pgd/6/conflict-management/conflicts/05_conflict_logging/
lastModified: 2026-04-01T15:41:29+05:30
---

# Conflict logging

Starting with PGD 6.0, conflict-logging is not enabled by default. You can enable conflict logging on a per-node basis. This allows you to log conflicts that occur on a specific node, which can be useful for debugging and monitoring purposes.

Run this command on the named node to enable logging of all conflicts on that particular node. If you want to enable logging on all nodes, run this command on each node in the PGD group.

```sql
SELECT bdr.alter_node_set_log_config(`nodename`, false, true, NULL, NULL);
```

The other parameters after the nodename control, respectively, specify whether to log conflicts into the PGD logfile, and whether to log conflicts into the `bdr.conflict_history` table. The last two parameters take arrays of strings which specify the conflict types and conflict resolutions to log. See [Conflicts](https://www.enterprisedb.com/docs/pgd/6/reference/tables-views-functions/conflicts/) in the reference section for a full list of both. If you set these parameters to `NULL`, PGD will log all conflict types and resolutions.

PGD logs every conflict into the `bdr.conflict_history` table. You can change this behavior with more granularity using [bdr.alter\_node\_set\_log\_config](https://www.enterprisedb.com/docs/pgd/6/reference/tables-views-functions/conflict_functions/#bdralter_node_set_log_config).

## Conflict reporting

You can summarize conflicts logged to tables in reports. Reports allow application owners to identify, understand, and resolve conflicts and introduce application changes to prevent them.

````sql
SELECT nspname, relname
, date_trunc('day', local_time) :: date AS date
, count(*)
FROM bdr.conflict_history
WHERE local_time > date_trunc('day', current_timestamp)
GROUP BY 1,2,3
ORDER BY 1,2;

```sql
 nspname | relname |    date    | count
---------+---------+------------+-------
 my_app  | test    | 2019-04-05 |     1
(1 row)
````

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
