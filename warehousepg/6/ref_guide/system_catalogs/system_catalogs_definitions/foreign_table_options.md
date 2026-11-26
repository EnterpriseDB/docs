---
title: foreign_table_options
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/foreign_table_options/
lastModified: 2026-08-11T09:07:15Z
---

# foreign\_table\_options

<a id="topic1"></a><a id="fs142834"></a>

The `foreign_table_options` view contains all of the options defined for foreign tables in the current database. WarehousePG displays only those foreign tables to which the current user has access (by way of being the owner or having some privilege).

| column                  | type            | references | description                                                                               |
| ----------------------- | --------------- | ---------- | ----------------------------------------------------------------------------------------- |
| `foreign_table_catalog` | sql\_identifier |            | Name of the database in which the foreign table is defined (always the current database). |
| `foreign_table_schema`  | sql\_identifier |            | Name of the schema that contains the foreign table.                                       |
| `foreign_table_name`    | sql\_identifier |            | Name of the foreign table.                                                                |
| `option_name`           | sql\_identifier |            | Name of an option.                                                                        |
| `option_value`          | character\_data |            | Value of the option.                                                                      |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
