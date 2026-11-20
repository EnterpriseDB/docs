---
title: Conflict logging
product: EDB Postgres Distributed (PGD)
version: 5.9.5
url: https://www.enterprisedb.com/docs/pgd/5.9/conflict-management/conflicts/05_conflict_logging/
lastModified: 2026-11-20T11:33:47Z
---

# Conflict logging

To ease diagnosing and handling multi-master conflicts, PGD, by default, logs every conflict into the `bdr.conflict_history` table. You can change this behavior with more granularity using [bdr.alter\_node\_set\_log\_config](https://www.enterprisedb.com/docs/pgd/5.9/reference/conflict_functions/#bdralter_node_set_log_config).

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
