---
title: pg_tablespace
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_tablespace/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_tablespace

The `pg_tablespace` system catalog table stores information about the available tablespaces. Tables can be placed in particular tablespaces to aid administration of disk layout. Unlike most system catalogs, `pg_tablespace` is shared across all databases of a WarehousePG cluster: there is only one copy of `pg_tablespace` per system, not one per database.

| column       | type       | references     | description                                               |
| ------------ | ---------- | -------------- | --------------------------------------------------------- |
| `oid`        | oid        |                | The object ID                                             |
| `spcname`    | name       |                | Tablespace name.                                          |
| `spcowner`   | oid        | pg\_authid.oid | Owner of the tablespace, usually the user who created it. |
| `spcacl`     | aclitem\[] |                | Tablespace access privileges.                             |
| `spcoptions` | text\[]    |                | Tablespace contentID locations.                           |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
