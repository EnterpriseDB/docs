---
title: pg_resqueuecapability
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_resqueuecapability/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_resqueuecapability

<a id="topic1"></a><a id="hk141670"></a>

> **Note** The `pg_resqueuecapability` system catalog table is valid only when resource queue-based resource management is active.

The `pg_resqueuecapability` system catalog table contains information about the extended attributes, or capabilities, of existing WarehousePG resource queues. Only resource queues that have been assigned an extended capability, such as a priority setting, are recorded in this table. This table is joined to the [pg\_resqueue](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_resqueue/) table by resource queue object ID, and to the [pg\_resourcetype](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_resourcetype/) table by resource type ID (`restypid`).

This table is populated only on the coordinator. This table is defined in the `pg_global` tablespace, meaning it is globally shared across all databases in the system.

| column      | type        | references                  | description                                                                                                                                                                                          |
| ----------- | ----------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rsqueueid` | oid         | `pg_resqueue.oid`           | The object ID of the associated resource queue.                                                                                                                                                      |
| `restypid`  | smallint    | `pg_resourcetype. restypid` | The resource type, derived from the _[pg\_resqueuecapability](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_resourcetype/)_ system table. |
| `resetting` | opaque type |                             | The specific value set for the capability referenced in this record. Depending on the actual resource type, this value may have different data types.                                                |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
