---
title: pg_available_extensions
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_available_extensions/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_available\_extensions

<a id="topic1"></a><a id="gn143896"></a>

The `pg_available_extensions` view lists the extensions that are available for installation. The [_pg\_extension_](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_extension/) system catalog table shows the extensions currently installed.

The view is read only.

| column              | type | description                                                               |
| ------------------- | ---- | ------------------------------------------------------------------------- |
| `name`              | name | Extension name.                                                           |
| `default_version`   | text | Name of default version, or `NULL` if none is specified.                  |
| `installed_version` | text | Currently installed version of the extension, or `NULL` if not installed. |
| `comment`           | text | Comment string from the extension control file.                           |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
