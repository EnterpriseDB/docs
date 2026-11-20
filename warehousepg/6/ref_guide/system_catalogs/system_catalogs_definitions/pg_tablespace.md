---
title: pg_tablespace
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_tablespace/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_tablespace

<a id="topic1"></a><a id="hx156255"></a>

The `pg_tablespace` system catalog table stores information about the available tablespaces. Tables can be placed in particular tablespaces to aid administration of disk layout. Unlike most system catalogs, `pg_tablespace` is shared across all databases of a WarehousePG cluster: there is only one copy of `pg_tablespace` per system, not one per database.

| column       | type       | references     | description                                               |
| ------------ | ---------- | -------------- | --------------------------------------------------------- |
| `spcname`    | name       |                | Tablespace name.                                          |
| `spcowner`   | oid        | pg\_authid.oid | Owner of the tablespace, usually the user who created it. |
| `spcacl`     | aclitem\[] |                | Tablespace access privileges.                             |
| `spcoptions` | text\[]    |                | Tablespace contentID locations.                           |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
