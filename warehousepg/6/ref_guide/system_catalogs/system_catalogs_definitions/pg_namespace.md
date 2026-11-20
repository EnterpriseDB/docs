---
title: pg_namespace
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_namespace/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_namespace

<a id="topic1"></a><a id="gx143896"></a>

The `pg_namespace` system catalog table stores namespaces. A namespace is the structure underlying SQL schemas: each namespace can have a separate collection of relations, types, etc. without name conflicts.

| column     | type       | references     | description                                                    |
| ---------- | ---------- | -------------- | -------------------------------------------------------------- |
| `oid`      | oid        |                | Row identifier (hidden attribute; must be explicitly selected) |
| `nspname`  | name       |                | Name of the namespace                                          |
| `nspowner` | oid        | pg\_authid.oid | Owner of the namespace                                         |
| `nspacl`   | aclitem\[] |                | Access privileges as given by `GRANT` and `REVOKE`             |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
