---
title: pg_foreign_data_wrapper
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_foreign_data_wrapper/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_foreign\_data\_wrapper

<a id="topic1"></a>

The system catalog table `pg_foreign_data_wrapper` stores foreign-data wrapper definitions. A foreign-data wrapper is a mechanism by which you access external data residing on foreign servers.

| column         | type       | references     | description                                                                                                                                                                                                                                                                          |
| -------------- | ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fdwname`      | name       |                | Name of the foreign-data wrapper.                                                                                                                                                                                                                                                    |
| `fdwowner`     | oid        | pg\_authid.oid | Owner of the foreign-data wrapper.                                                                                                                                                                                                                                                   |
| `fdwhandler`   | oid        | pg\_proc.oid   | A reference to a handler function that is responsible for supplying execution routines for the foreign-data wrapper. Zero if no handler is provided.                                                                                                                                 |
| `fdwvalidator` | oid        | pg\_proc.oid   | A reference to a validator function that is responsible for checking the validity of the options provided to the foreign-data wrapper. This function also checks the options for foreign servers and user mappings using the foreign-data wrapper. Zero if no validator is provided. |
| `fdwacl`       | aclitem\[] |                | Access privileges; see [GRANT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/GRANT/) and [REVOKE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/REVOKE/) for details.                                                              |
| `fdwoptions`   | text\[]    |                | Foreign-data wrapper-specific options, as "keyword=value" strings.                                                                                                                                                                                                                   |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
