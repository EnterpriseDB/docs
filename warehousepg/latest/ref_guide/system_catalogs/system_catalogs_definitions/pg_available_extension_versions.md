---
title: pg_available_extension_versions
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_available_extension_versions/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_available\_extension\_versions

The `pg_available_extension_versions` view lists the specific extension versions that are available for installation. The [pg\_extension](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_extension/) system catalog table shows the extensions currently installed.

The view is read only.

| column        | type    | description                                                                                                |
| ------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `name`        | name    | Extension name.                                                                                            |
| `version`     | text    | Version name.                                                                                              |
| `installed`   | boolean | `True` if this version of this extension is currently installed, `False` otherwise.                        |
| `superuser`   | boolean | `True` if only superusers are allowed to install the extension, `False` otherwise.                         |
| `relocatable` | boolean | `True` if extension can be relocated to another schema, `False` otherwise.                                 |
| `schema`      | name    | Name of the schema that the extension must be installed into, or `NULL` if partially or fully relocatable. |
| `requires`    | name\[] | Names of prerequisite extensions, or `NULL` if none                                                        |
| `comment`     | text    | Comment string from the extension control file.                                                            |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
