---
title: pg_auth_members
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_auth_members/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_auth\_members

<a id="topic1"></a><a id="gc143896"></a>

The `pg_auth_members` system catalog table shows the membership relations between roles. Any non-circular set of relationships is allowed. Because roles are system-wide, `pg_auth_members` is shared across all databases of a WarehousePG cluster.

| column         | type    | references     | description                                        |
| -------------- | ------- | -------------- | -------------------------------------------------- |
| `roleid`       | oid     | pg\_authid.oid | ID of the parent-level (group) role                |
| `member`       | oid     | pg\_authid.oid | ID of a member role                                |
| `grantor`      | oid     | pg\_authid.oid | ID of the role that granted this membership        |
| `admin_option` | boolean |                | True if role member may grant membership to others |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
