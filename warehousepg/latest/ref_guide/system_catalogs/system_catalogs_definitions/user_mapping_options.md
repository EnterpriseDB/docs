---
title: user_mapping_options
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/user_mapping_options/
lastModified: 2026-09-25T15:14:11+01:00
---

# user\_mapping\_options

The `user_mapping_options` view contains all of the options defined for user mappings in the current database. WarehousePG displays only those user mappings to which the current user has access (by way of being the owner or having some privilege).

| column                     | type            | references | description                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------- | --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `authorization_identifier` | sql\_identifier |            | Name of the user being mapped, or `PUBLIC` if the mapping is public.                                                                                                                                                                                                                                                                                         |
| `foreign_server_catalog`   | sql\_identifier |            | Name of the database in which the foreign server used by this mapping is defined (always the current database).                                                                                                                                                                                                                                              |
| `foreign_server_name`      | sql\_identifier |            | Name of the foreign server used by this mapping.                                                                                                                                                                                                                                                                                                             |
| `option_name`              | sql\_identifier |            | Name of an option.                                                                                                                                                                                                                                                                                                                                           |
| `option_value`             | character\_data |            | Value of the option. This column will display null unless:<br /><br />-   The current user is the user being mapped.<br /><br />-   The mapping is for `PUBLIC` and the current user is the foreign server owner.<br /><br />-   The current user is a superuser.<br /><br /> The intent is to protect password information stored as a user mapping option. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
