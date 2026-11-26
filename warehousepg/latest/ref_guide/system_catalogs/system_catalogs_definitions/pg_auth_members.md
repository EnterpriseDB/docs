---
title: pg_auth_members
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_auth_members/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_auth\_members

The `pg_auth_members` system catalog table shows the membership relations between roles. Any non-circular set of relationships is allowed. Because roles are system-wide, `pg_auth_members` is shared across all databases of a WarehousePG cluster.

| column         | type    | references     | description                                        |
| -------------- | ------- | -------------- | -------------------------------------------------- |
| `roleid`       | oid     | pg\_authid.oid | ID of the parent-level (group) role                |
| `member`       | oid     | pg\_authid.oid | ID of a member role                                |
| `grantor`      | oid     | pg\_authid.oid | ID of the role that granted this membership        |
| `admin_option` | boolean |                | True if role member may grant membership to others |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
