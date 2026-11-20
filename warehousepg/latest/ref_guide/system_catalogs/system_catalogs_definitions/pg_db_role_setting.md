---
title: pg_db_role_setting
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_db_role_setting/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_db\_role\_setting

The `pg_db_role_setting` system catalog table records the default values of server configuration settings for each role and database combination.

There is a single copy of `pg_db_role_settings` per WarehousePG cluster. This system catalog table is shared across all databases.

You can view the server configuration settings for your WarehousePG cluster with `psql`'s `\drds` meta-command.

| column        | type    | references       | description                                                                                       |
| ------------- | ------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| `setdatabase` | oid     | pg\_database.oid | The database to which the setting is applicable, or zero if the setting is not database-specific. |
| `setrole`     | oid     | pg\_authid.oid   | The role to which the setting is applicable, or zero if the setting is not role-specific.         |
| `setconfig`   | text\[] |                  | Per-database- and per-role-specific defaults for user-settable server configuration parameters.   |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
