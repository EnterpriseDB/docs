---
title: gp_distribution_policy
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/gp_distribution_policy/
lastModified: 2026-09-25T15:14:11+01:00
---

# gp\_distribution\_policy

The `gp_distribution_policy` table contains information about WarehousePG tables and their policy for distributing table data across the segments. This table is populated only on the coordinator. This table is not globally shared, meaning each database has its own copy of this table.

| column        | type       | references           | description                                                                                                                                                                                                   |
| ------------- | ---------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `localoid`    | oid        | pg\_class.oid        | The table object identifier (OID).                                                                                                                                                                            |
| `policytype`  | char       |                      | The table distribution policy:<br /><br />`p` - Partitioned policy. Table data is distributed among segment instances.<br /><br />`r` - Replicated policy. Table data is replicated on each segment instance. |
| `numsegments` | integer    |                      | The number of segment instances on which the table data is distributed.                                                                                                                                       |
| `distkey`     | int2vector | pg\_attribute.attnum | The column number(s) of the distribution column(s).                                                                                                                                                           |
| `distclass`   | oidvector  | pg\_opclass.oid      | The operator class identifier(s) of the distribution column(s).                                                                                                                                               |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
