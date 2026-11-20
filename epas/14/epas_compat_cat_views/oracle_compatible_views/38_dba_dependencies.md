---
title: DBA_DEPENDENCIES
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/38_dba_dependencies/
lastModified: 2023-02-14T16:10:29+05:30
---

# DBA\_DEPENDENCIES

<div id="dba_dependencies" class="registered_link"></div>

The `DBA_DEPENDENCIES` view provides information about the dependencies between all objects in the database except for synonyms.

| Name                     | Type                     | Description                                                |
| ------------------------ | ------------------------ | ---------------------------------------------------------- |
| `owner`                  | `CHARACTER VARYING(128)` | Owner of the dependent object.                             |
| `schema_name`            | `CHARACTER VARYING(128)` | Name of the schema in which the dependent object resides.  |
| `name`                   | `CHARACTER VARYING(128)` | Name of the dependent object.                              |
| `type`                   | `CHARACTER VARYING(18)`  | Type of the dependent object.                              |
| `referenced_owner`       | `CHARACTER VARYING(128)` | Owner of the referenced object.                            |
| `referenced_schema_name` | `CHARACTER VARYING(128)` | Name of the schema in which the referenced object resides. |
| `referenced_name`        | `CHARACTER VARYING(128)` | Name of the referenced object.                             |
| `referenced_type`        | `CHARACTER VARYING(18)`  | Type of the referenced object.                             |
| `referenced_link_name`   | `CHARACTER VARYING(128)` | Included only for compatibility. Always `NULL`.            |
| `dependency_type`        | `CHARACTER VARYING(4)`   | Included only for compatibility. Always set to `HARD`.     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
