---
title: ALL_DEPENDENCIES
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/07_all_dependencies/
lastModified: 2023-11-09T17:35:38+05:30
---

# ALL\_DEPENDENCIES

<div id="all_dependencies" class="registered_link"></div>

The `ALL_DEPENDENCIES` view provides information about the dependencies between database objects that the current user can access, except for synonyms.

| Name                     | Type                     | Description                                                |
| ------------------------ | ------------------------ | ---------------------------------------------------------- |
| `owner`                  | `CHARACTER VARYING(128)` | Owner of dependent object.                                 |
| `schema_name`            | `CHARACTER VARYING(128)` | Name of the schema in which the dependent object resides.  |
| `name`                   | `CHARACTER VARYING(128)` | Name of the dependent object.                              |
| `type`                   | `CHARACTER VARYING(18)`  | Type of the dependent object.                              |
| `referenced_owner`       | `CHARACTER VARYING(128)` | Owner of the referenced object.                            |
| `referenced_schema_name` | `CHARACTER VARYING(128)` | Name of the schema in which the referenced object resides. |
| `referenced_name`        | `CHARACTER VARYING(128)` | Name of the referenced object.                             |
| `referenced_type`        | `CHARACTER VARYING(18)`  | Type of the referenced object.                             |
| `referenced_link_name`   | `CHARACTER VARYING(128)` | Included for compatibility only. Always `NULL`.            |
| `dependency_type`        | `CHARACTER VARYING(4)`   | Included for compatibility only. Always set to `HARD`.     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
