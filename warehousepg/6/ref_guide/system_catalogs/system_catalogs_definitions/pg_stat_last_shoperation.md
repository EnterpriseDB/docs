---
title: pg_stat_last_shoperation
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_stat_last_shoperation/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_stat\_last\_shoperation

<a id="topic1"></a><a id="hs138336"></a>

The pg\_stat\_last\_shoperation table contains metadata tracking information about global objects (roles, tablespaces, etc.).

| column          | type                    | references     | description                                                                                                                                                                                           |
| --------------- | ----------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| classid         | oid                     | pg\_class.oid  | OID of the system catalog containing the object.                                                                                                                                                      |
| `objid`         | oid                     | any OID column | OID of the object within its system catalog.                                                                                                                                                          |
| `staactionname` | name                    |                | The action that was taken on the object.                                                                                                                                                              |
| `stasysid`      | oid                     |                |                                                                                                                                                                                                       |
| `stausename`    | name                    |                | The name of the role that performed the operation on this object.                                                                                                                                     |
| `stasubtype`    | text                    |                | The type of object operated on or the subclass of operation performed.                                                                                                                                |
| `statime`       | timestamp with timezone |                | The timestamp of the operation. This is the same timestamp that is written to the WarehousePG server log files in case you need to look up more detailed information about the operation in the logs. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
