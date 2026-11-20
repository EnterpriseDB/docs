---
title: pg_matviews
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_matviews/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_matviews

<a id="topic1"></a><a id="gi143896"></a>

The view `pg_matviews` provides access to useful information about each materialized view in the database.

| column         | type    | references             | description                                                                                |
| -------------- | ------- | ---------------------- | ------------------------------------------------------------------------------------------ |
| `schemaname`   | name    | pg\_namespace.nspname  | Name of the schema containing the materialized view                                        |
| `matviewname`  | name    | pg\_class.relname      | Name of the materialized view                                                              |
| `matviewowner` | name    | pg\_authid.rolname     | Name of the materialized view's owner                                                      |
| `tablespace`   | name    | pg\_tablespace.spcname | Name of the tablespace containing the materialized view (NULL if default for the database) |
| `hasindexes`   | boolean |                        | True if the materialized view has (or recently had) any indexes                            |
| `ispopulated`  | boolean |                        | True if the materialized view is currently populated                                       |
| `definition`   | text    |                        | Materialized view definition (a reconstructed `SELECT` command)                            |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
