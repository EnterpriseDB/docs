---
title: pg_user_mapping
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_user_mapping/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_user\_mapping

The system catalog table `pg_user_mapping` stores the mappings from local user to remote user. You must have administrator privileges to view this catalog. Access to this catalog is restricted from normal users, use the `pg_user_mappings` view instead.

| column      | type    | references              | description                                                          |
| ----------- | ------- | ----------------------- | -------------------------------------------------------------------- |
| `oid`       | oid     |                         | The object ID                                                        |
| `umuser`    | oid     | pg\_authid.oid          | OID of the local role being mapped, 0 if the user mapping is public. |
| `umserver`  | oid     | pg\_foreign\_server.oid | OID of the foreign server that contains this mapping                 |
| `umoptions` | text\[] |                         | User mapping-specific options, as "keyword=value" strings.           |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
