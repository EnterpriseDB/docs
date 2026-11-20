---
title: ALL_TAB_COLUMNS
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/22_all_tab_columns/
lastModified: 2023-08-14T09:54:04-07:00
---

# ALL\_TAB\_COLUMNS

<div id="all_tab_columns" class="registered_link"></div>

The `ALL_TAB_COLUMNS` view provides information on all columns in all user-defined tables and views.

| Name             | Type                | Description                                                                                                             |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `owner`          | `CHARACTER VARYING` | User name of the owner of the table or view in which the column resides.                                                |
| `schema_name`    | `CHARACTER VARYING` | Name of the schema in which the table or view resides.                                                                  |
| `table_name`     | `CHARACTER VARYING` | Name of the table or view.                                                                                              |
| `column_name`    | `CHARACTER VARYING` | Name of the column.                                                                                                     |
| `data_type`      | `CHARACTER VARYING` | Data type of the column.                                                                                                |
| `data_length`    | `NUMERIC`           | Length of text columns.                                                                                                 |
| `data_precision` | `NUMERIC`           | Precision (number of digits) for `NUMBER` columns.                                                                      |
| `data_scale`     | `NUMERIC`           | Scale of `NUMBER` columns.                                                                                              |
| `nullable`       | `CHARACTER(1)`      | Whether or not the column is nullable. Possible values are: `Y` – column is nullable; `N` – column does not allow null. |
| `column_id`      | `NUMERIC`           | Relative position of the column in the table or view.                                                                   |
| `data_default`   | `CHARACTER VARYING` | Default value assigned to the column.                                                                                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
