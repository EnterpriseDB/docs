---
title: pg_resgroupcapability
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_resgroupcapability/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_resgroupcapability

<a id="topic1"></a><a id="hk141670"></a>

> **Note** The `pg_resgroupcapability` system catalog table is valid only when resource group-based resource management is active.

The `pg_resgroupcapability` system catalog table contains information about the capabilities and limits of defined WarehousePG resource groups. You can join this table to the [pg\_resgroup](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_resgroup/) table by resource group object ID.

The `pg_resgroupcapability` table, defined in the `pg_global` tablespace, is globally shared across all databases in the system.

| column         | type        | references        | description                                                                                                                                                                                                                                         |
| -------------- | ----------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resgroupid`   | oid         | `pg_resgroup.oid` | The object ID of the associated resource group.                                                                                                                                                                                                     |
| `reslimittype` | smallint    | \`\`              | The resource group limit type:<br /><br />0 - Unknown<br /><br />1 - Concurrency<br /><br />2 - CPU<br /><br />3 - Memory<br /><br />4 - Memory shared quota<br /><br />5 - Memory spill ratio<br /><br />6 - Memory auditor<br /><br />7 - CPU set |
| `value`        | opaque type |                   | The specific value set for the resource limit referenced in this record. This value has the fixed type `text`, and will be converted to a different data type depending upon the limit referenced.                                                  |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
