---
title: pg_stat_operations
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_stat_operations/
lastModified: 2026-09-25T15:27:49-07:00
---

# pg\_stat\_operations

The view `pg_stat_operations` shows details about the last operation performed on a database object (such as a table, index, view or database) or a global object (such as a role, resource queue, or resource group).

| column       | type        | references | description                                                                                                                                                                                                                                                                                                                                     |
| ------------ | ----------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `classname`  | text        |            | The name of the system table in the `pg_catalog` schema where the record about this object is stored (`pg_class`=relations, `pg_database`=databases, `pg_namespace`=schemas, `pg_authid`=roles, `pg_tablespace`=tablespaces, `pg_resqueue`=resource queues, `pg_resgroup`=resource groups, `pg_resgroupcapability`=resource group capabilities) |
| `objname`    | name        |            | The name of the object.                                                                                                                                                                                                                                                                                                                         |
| `objid`      | oid         |            | The OID of the object.                                                                                                                                                                                                                                                                                                                          |
| `schemaname` | name        |            | The name of the schema where the object resides.                                                                                                                                                                                                                                                                                                |
| `usestatus`  | text        |            | The status of the role who performed the last operation on the object (`CURRENT`=a currently active role in the system, `DROPPED`=a role that no longer exists in the system, `CHANGED`=a role name that exists in the system, but has changed since the last operation was performed).                                                         |
| `usename`    | name        |            | The name of the role that performed the operation on this object.                                                                                                                                                                                                                                                                               |
| `actionname` | name        |            | The action that was taken on the object.                                                                                                                                                                                                                                                                                                        |
| `subtype`    | text        |            | The type of object operated on or the subclass of operation performed.                                                                                                                                                                                                                                                                          |
| `statime`    | timestamptz |            | The timestamp of the operation. This is the same timestamp that is written to the WarehousePG server log files in case you need to look up more detailed information about the operation in the logs.                                                                                                                                           |

> **Note: Version availability**
>
> Resource queue and resource group operations (`pg_resqueue`, `pg_resgroup`, and `pg_resgroupcapability` in `classname`) are tracked starting with WarehousePG 7.6.0.

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
