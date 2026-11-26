---
title: USER_TYPES
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/89_user_types/
lastModified: 2023-02-14T16:10:29+05:30
---

# USER\_TYPES

<div id="user_types" class="registered_link"></div>

The `USER_TYPES` view provides information about all object types owned by the current user.

| Name          | Type      | Description                                                                     |
| ------------- | --------- | ------------------------------------------------------------------------------- |
| `schema_name` | `TEXT`    | Name of the schema in which the type is defined.                                |
| `type_name`   | `TEXT`    | Name of the type.                                                               |
| `type_oid`    | `OID`     | The object identifier (OID) of the type.                                        |
| `typecode`    | `TEXT`    | The typecode of the type. Possible values are: `OBJECT`, `COLLECTION`, `OTHER`. |
| `attributes`  | `INTEGER` | Number of attributes in the type.                                               |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
