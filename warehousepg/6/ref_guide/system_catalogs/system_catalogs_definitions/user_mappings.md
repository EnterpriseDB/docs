---
title: user_mappings
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/user_mappings/
lastModified: 2026-08-11T09:07:15Z
---

# user\_mappings

<a id="topic1"></a><a id="fs142834"></a>

The `user_mappings` view contains all of the user mappings defined in the current database. WarehousePG displays only those user mappings to which the current user has access (by way of being the owner or having some privilege).

| column                     | type            | references | description                                                                                                     |
| -------------------------- | --------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| `authorization_identifier` | sql\_identifier |            | Name of the user being mapped, or `PUBLIC` if the mapping is public.                                            |
| `foreign_server_catalog`   | sql\_identifier |            | Name of the database in which the foreign server used by this mapping is defined (always the current database). |
| `foreign_server_name`      | sql\_identifier |            | Name of the foreign server used by this mapping.                                                                |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
