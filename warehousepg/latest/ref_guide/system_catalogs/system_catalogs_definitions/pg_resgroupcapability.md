---
title: pg_resgroupcapability
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_resgroupcapability/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_resgroupcapability

> **Note** The `pg_resgroupcapability` system catalog table is valid only when resource group-based resource management is active.

The `pg_resgroupcapability` system catalog table contains information about the capabilities and limits of defined WarehousePG resource groups. You can join this table to the [pg\_resgroup](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_resgroup/) table by resource group object ID.

The `pg_resgroupcapability` table, defined in the `pg_global` tablespace, is globally shared across all databases in the system.

| column         | type        | references        | description                                                                                                                                                                                                               |
| -------------- | ----------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resgroupid`   | oid         | `pg_resgroup.oid` | The object ID of the associated resource group.                                                                                                                                                                           |
| `reslimittype` | smallint    | \`\`              | The resource group limit type:<br /><br />1 - Concurrency<br /><br />2 - CPU\_MAX\_WEIGHT<br /><br />3 - CPU\_WEIGHT<br /><br />4 - CPUSET<br /><br />5 - MEMORY\_QUOTA<br /><br />6 - MIN\_COST<br /><br />7 - IO\_LIMIT |
| `value`        | opaque type |                   | The specific value set for the resource limit referenced in this record. This value has the fixed type `text`, and will be converted to a different data type depending upon the limit referenced.                        |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
