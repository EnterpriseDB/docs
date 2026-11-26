---
title: DBA_TYPES
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/61_dba_types/
lastModified: 2024-11-22T12:16:04+01:00
---

# DBA\_TYPES

<div id="dba_types" class="registered_link"></div>

The `DBA_TYPES` view provides information about all object types in the database.

| Name          | Type      | Description                                                                 |
| ------------- | --------- | --------------------------------------------------------------------------- |
| `owner`       | `TEXT`    | Owner of the object type.                                                   |
| `schema_name` | `TEXT`    | Name of the schema in which the type is defined.                            |
| `type_name`   | `TEXT`    | Name of the type.                                                           |
| `type_oid`    | `OID`     | Oject identifier (OID) of the type.                                         |
| `typecode`    | `TEXT`    | Typecode of the type. Possible values are: `OBJECT`, `COLLECTION`, `OTHER`. |
| `attributes`  | `INTEGER` | Number of attributes in the type.                                           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
