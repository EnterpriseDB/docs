---
title: foreign_data_wrapper_options
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/foreign_data_wrapper_options/
lastModified: 2026-09-25T15:14:11+01:00
---

# foreign\_data\_wrapper\_options

The `foreign_data_wrapper_options` view contains all of the otpions defined for foreign-data wrappers in the current database. WarehousePG displays only those foreign-data wrappers to which the current user has access (by way of being the owner or having some privilege).

| column                         | type            | references | description                                                                                      |
| ------------------------------ | --------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| `foreign_data_wrapper_catalog` | sql\_identifier |            | Name of the database in which the foreign-data wrapper is defined (always the current database). |
| `foreign_data_wrapper_name`    | sql\_identifier |            | Name of the foreign-data wrapper.                                                                |
| `option_name`                  | sql\_identifier |            | Name of an option.                                                                               |
| `option_value`                 | character\_data |            | Value of the option.                                                                             |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
