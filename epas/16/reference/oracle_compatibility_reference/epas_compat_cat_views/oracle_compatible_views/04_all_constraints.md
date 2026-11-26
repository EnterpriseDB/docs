---
title: ALL_CONSTRAINTS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/04_all_constraints/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALL\_CONSTRAINTS

<div id="all_constraints" class="registered_link"></div>

The `ALL_CONSTRAINTS` view provides information about the constraints placed on tables accessible by the current user.

| Name                | Type      | Description                                                                                                                                                                                                                                                    |
| ------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `owner`             | `TEXT`    | User name of the constraint’s owner.                                                                                                                                                                                                                           |
| `schema_name`       | `TEXT`    | Name of the schema in which the constraint belongs.                                                                                                                                                                                                            |
| `constraint_name`   | `TEXT`    | Name of the constraint.                                                                                                                                                                                                                                        |
| `constraint_type`   | `TEXT`    | The constraint type. Possible values are: `C` – check constraint; `F` – foreign key constraint; `P` – primary key constraint; `U` – unique key constraint; `R` – referential integrity constraint; `V` – constraint on a view; `O` – with read-only, on a view |
| `table_name`        | `TEXT`    | Name of the table to which the constraint belongs.                                                                                                                                                                                                             |
| `search_condition`  | `TEXT`    | Search condition that applies to a check constraint.                                                                                                                                                                                                           |
| `r_owner`           | `TEXT`    | Owner of a table referenced by a referential constraint.                                                                                                                                                                                                       |
| `r_constraint_name` | `TEXT`    | Name of the constraint definition for a referenced table.                                                                                                                                                                                                      |
| `delete_rule`       | `TEXT`    | Delete rule for a referential constraint. Possible values are: `C` – cascade; `R` – restrict; `N` – no action                                                                                                                                                  |
| `deferrable`        | `BOOLEAN` | Specified if the constraint is deferrable (`T` or `F`).                                                                                                                                                                                                        |
| `deferred`          | `BOOLEAN` | Specified if the constraint was deferred (`T` or `F`).                                                                                                                                                                                                         |
| `index_owner`       | `TEXT`    | User name of the index owner.                                                                                                                                                                                                                                  |
| `index_name`        | `TEXT`    | Name of the index.                                                                                                                                                                                                                                             |
| `constraint_def`    | `TEXT`    | Definition of the constraint.                                                                                                                                                                                                                                  |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
