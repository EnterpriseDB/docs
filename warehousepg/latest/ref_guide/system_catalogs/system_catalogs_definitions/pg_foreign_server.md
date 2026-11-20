---
title: pg_foreign_server
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_foreign_server/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_foreign\_server

The system catalog table `pg_foreign_server` stores foreign server definitions. A foreign server describes a source of external data, such as a remote server. You access a foreign server via a foreign-data wrapper.

| column       | type       | references                     | description                                                                                                                                                                                                                      |
| ------------ | ---------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `oid`        | oid        |                                | The object ID                                                                                                                                                                                                                    |
| `srvname`    | name       |                                | Name of the foreign server                                                                                                                                                                                                       |
| `srvowner`   | oid        | pg\_authid.oid                 | Owner of the foreign server                                                                                                                                                                                                      |
| `srvfdw`     | oid        | pg\_foreign\_data\_wrapper.oid | OID of the foreign-data wrapper of this foreign server                                                                                                                                                                           |
| `srvtype`    | text       |                                | Type of server (optional)                                                                                                                                                                                                        |
| `srvversion` | text       |                                | Version of the server (optional)                                                                                                                                                                                                 |
| `srvacl`     | aclitem\[] |                                | Access privileges; see [GRANT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/GRANT/) and [REVOKE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/REVOKE/) for details |
| `srvoptions` | text\[]    |                                | Foreign server-specific options, as "keyword=value" strings                                                                                                                                                                      |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
