---
title: pg_resqueue_attributes
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_resqueue_attributes/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_resqueue\_attributes

<a id="topic1"></a><a id="hj141670"></a>

> **Note** The `pg_resqueue_attributes` view is valid only when resource queue-based resource management is active.

The `pg_resqueue_attributes` view allows administrators to see the attributes set for a resource queue, such as its active statement limit, query cost limits, and priority.

| column      | type    | references           | description                                      |
| ----------- | ------- | -------------------- | ------------------------------------------------ |
| `rsqname`   | name    | pg\_resqueue.rsqname | The name of the resource queue.                  |
| `resname`   | text    |                      | The name of the resource queue attribute.        |
| `resetting` | text    |                      | The current value of a resource queue attribute. |
| `restypid`  | integer |                      | System assigned resource type id.                |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
