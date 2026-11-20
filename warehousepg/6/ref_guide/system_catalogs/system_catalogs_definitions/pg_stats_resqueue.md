---
title: pg_stat_resqueues
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_stats_resqueue/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_stat\_resqueues

<a id="topic1"></a><a id="hw141670"></a>

> **Note** The `pg_stat_resqueues` view is valid only when resource queue-based resource management is active.

The `pg_stat_resqueues` view allows administrators to view metrics about a resource queue's workload over time. To allow statistics to be collected for this view, you must enable the `stats_queue_level` server configuration parameter on the WarehousePG coordinator instance. Enabling the collection of these metrics does incur a small performance penalty, as each statement submitted through a resource queue must be logged in the system catalog tables.

| column           | type   | references | description                                                                                                |
| ---------------- | ------ | ---------- | ---------------------------------------------------------------------------------------------------------- |
| `queueid`        | oid    |            | The OID of the resource queue.                                                                             |
| `queuename`      | name   |            | The name of the resource queue.                                                                            |
| `n_queries_exec` | bigint |            | Number of queries submitted for execution from this resource queue.                                        |
| `n_queries_wait` | bigint |            | Number of queries submitted to this resource queue that had to wait before they could run.                 |
| `elapsed_exec`   | bigint |            | Total elapsed execution time for statements submitted through this resource queue.                         |
| `elapsed_wait`   | bigint |            | Total elapsed time that statements submitted through this resource queue had to wait before they were run. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
