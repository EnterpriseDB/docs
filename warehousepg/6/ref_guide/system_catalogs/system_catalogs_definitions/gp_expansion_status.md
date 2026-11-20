---
title: gpexpand.status
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_expansion_status/
lastModified: 2026-08-11T09:07:15Z
---

# gpexpand.status

<a id="topic1"></a><a id="fa138336"></a>

The `gpexpand.status` table contains information about the status of a system expansion operation. Status for specific tables involved in the expansion is stored in [gpexpand.status\_detail](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_expansion_tables/).

In a normal expansion operation it is not necessary to modify the data stored in this table.

| column    | type                        | references | description                                                                                                                                                                                    |
| --------- | --------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`  | text                        |            | Tracks the status of an expansion operation. Valid values are:<br /><br />`SETUP`<br /><br />`SETUP DONE`<br /><br />`EXPANSION STARTED`<br /><br />`EXPANSION STOPPED`<br /><br />`COMPLETED` |
| `updated` | timestamp without time zone |            | Timestamp of the last change in status.                                                                                                                                                        |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
