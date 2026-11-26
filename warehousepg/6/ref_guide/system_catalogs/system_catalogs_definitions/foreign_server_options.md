---
title: foreign_server_options
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/foreign_server_options/
lastModified: 2026-08-11T09:07:15Z
---

# foreign\_server\_options

<a id="topic1"></a><a id="fs142834"></a>

The `foreign_server_options` view contains all of the options defined for foreign servers in the current database. WarehousePG displays only those foreign servers to which the current user has access (by way of being the owner or having some privilege).

| column                   | type            | references | description                                                                                |
| ------------------------ | --------------- | ---------- | ------------------------------------------------------------------------------------------ |
| `foreign_server_catalog` | sql\_identifier |            | Name of the database in which the foreign server is defined (always the current database). |
| `foreign_server_name`    | sql\_identifier |            | Name of the foreign server.                                                                |
| `option_name`            | sql\_identifier |            | Name of an option.                                                                         |
| `option_value`           | character\_data |            | Value of the option.                                                                       |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
