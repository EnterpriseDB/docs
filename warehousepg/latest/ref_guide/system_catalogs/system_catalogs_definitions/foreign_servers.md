---
title: foreign_servers
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/foreign_servers/
lastModified: 2026-09-25T15:14:11+01:00
---

# foreign\_servers

The `foreign_servers` view contains all foreign servers defined in the current database. WarehousePG displays only those foreign servers to which the current user has access (by way of being the owner or having some privilege).

| column                         | type            | references | description                                                                                                                 |
| ------------------------------ | --------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| `foreign_server_catalog`       | sql\_identifier |            | Name of the database in which the foreign server is defined (always the current database).                                  |
| `foreign_server_name`          | sql\_identifier |            | Name of the foreign server.                                                                                                 |
| `foreign_data_wrapper_catalog` | sql\_identifier |            | Name of the database in which the foreign-data wrapper used by the foreign server is defined (always the current database). |
| `foreign_data_wrapper_name`    | sql\_identifier |            | Name of the foreign-data wrapper used by the foreign server.                                                                |
| `foreign_server_type`          | character\_data |            | Foreign server type information, if specified upon creation.                                                                |
| `foreign_server_version`       | character\_data |            | Foreign server version information, if specified upon creation.                                                             |
| `authorization_identifier`     | sql\_identifier |            | Name of the owner of the foreign server.                                                                                    |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
