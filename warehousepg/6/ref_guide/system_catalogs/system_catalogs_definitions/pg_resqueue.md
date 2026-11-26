---
title: pg_resqueue
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_resqueue/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_resqueue

<a id="topic1"></a><a id="hi141670"></a>

> **Note** The `pg_resqueue` system catalog table is valid only when resource queue-based resource management is active.

The `pg_resqueue` system catalog table contains information about WarehousePG resource queues, which are used for the resource management feature. This table is populated only on the coordinator. This table is defined in the `pg_global` tablespace, meaning it is globally shared across all databases in the system.

| column               | type    | references | description                                                                                                                              |
| -------------------- | ------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `rsqname`            | name    |            | The name of the resource queue.                                                                                                          |
| `rsqcountlimit`      | real    |            | The active query threshold of the resource queue.                                                                                        |
| `rsqcostlimit`       | real    |            | The query cost threshold of the resource queue.                                                                                          |
| `rsqovercommit`      | boolean |            | Allows queries that exceed the cost threshold to run when the system is idle.                                                            |
| `rsqignorecostlimit` | real    |            | The query cost limit of what is considered a 'small query'. Queries with a cost under this limit will not be queued and run immediately. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
