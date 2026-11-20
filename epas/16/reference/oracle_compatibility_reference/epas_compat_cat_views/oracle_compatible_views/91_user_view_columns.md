---
title: USER_VIEW_COLUMNS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/91_user_view_columns/
lastModified: 2024-11-22T12:16:04+01:00
---

# USER\_VIEW\_COLUMNS

<div id="user_view_columns" class="registered_link"></div>

The `USER_VIEW_COLUMNS` view provides information about all columns in views owned by the current user.

| Name             | Type                | Description                                                                                                             |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `schema_name`    | `CHARACTER VARYING` | Name of the schema in which the view belongs.                                                                           |
| `view_name`      | `CHARACTER VARYING` | Name of the view.                                                                                                       |
| `column_name`    | `CHARACTER VARYING` | Name of the column.                                                                                                     |
| `data_type`      | `CHARACTER VARYING` | Data type of the column.                                                                                                |
| `data_length`    | `NUMERIC`           | Length of text columns.                                                                                                 |
| `data_precision` | `NUMERIC`           | Precision (number of digits) for `NUMBER` columns.                                                                      |
| `data_scale`     | `NUMERIC`           | Scale of `NUMBER` columns.                                                                                              |
| `nullable`       | `CHARACTER(1)`      | Whether or not the column is nullable. Possible values are: `Y` – column is nullable; `N` – column does not allow null. |
| `column_id`      | `NUMERIC`           | Relative position of the column in the view.                                                                            |
| `data_default`   | `CHARACTER VARYING` | Default value assigned to the column.                                                                                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
