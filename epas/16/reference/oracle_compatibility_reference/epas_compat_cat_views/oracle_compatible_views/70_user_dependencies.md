---
title: USER_DEPENDENCIES
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/70_user_dependencies/
lastModified: 2024-11-22T12:16:04+01:00
---

# USER\_DEPENDENCIES

<div id="user_dependencies" class="registered_link"></div>

The `USER_DEPENDENCIES` view provides information about dependencies between objects owned by a current user, with the exception of synonyms.

| Name                     | Type                     | Description                                                |
| ------------------------ | ------------------------ | ---------------------------------------------------------- |
| `schema_name`            | `CHARACTER VARYING(128)` | Name of the schema in which the dependent object resides.  |
| `name`                   | `CHARACTER VARYING(128)` | Name of the dependent object.                              |
| `type`                   | `CHARACTER VARYING(18)`  | Type of the dependent object.                              |
| `referenced_owner`       | `CHARACTER VARYING(128)` | Owner of the referenced object.                            |
| `referenced_schema_name` | `CHARACTER VARYING(128)` | Name of the schema in which the referenced object resides. |
| `referenced_name`        | `CHARACTER VARYING(128)` | Name of the referenced object.                             |
| `referenced_type`        | `CHARACTER VARYING(18)`  | Type of the referenced object.                             |
| `referenced_link_name`   | `CHARACTER VARYING(128)` | Included only for compatibility. Always `NULL`.            |
| `schemaid`               | `NUMERIC`                | ID of the current schema.                                  |
| `dependency_type`        | `CHARACTER VARYING(4)`   | Included only for compatibility. Always set to `HARD`.     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
