---
title: ALL_TYPES
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/28_all_types/
lastModified: 2023-11-09T17:35:38+05:30
---

# ALL\_TYPES

<div id="all_types" class="registered_link"></div>

The `ALL_TYPES` view provides information about the object types available to the current user.

| Name          | Type      | Description                                                                |
| ------------- | --------- | -------------------------------------------------------------------------- |
| `owner`       | `TEXT`    | Owner of the object type.                                                  |
| `schema_name` | `TEXT`    | Name of the schema in which the type is defined.                           |
| `type_name`   | `TEXT`    | Name of the type.                                                          |
| `type_oid`    | `OID`     | Object identifier (OID) of the type.                                       |
| `typecode`    | `TEXT`    | Typecode of the type. Possible values are: `OBJECT`, `COLLECTION`, `OTHER` |
| `attributes`  | `INTEGER` | Number of attributes in the type.                                          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
