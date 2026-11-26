---
title: ALL_PART_KEY_COLUMNS
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/07_retrieving_information_about_a_partitioned_table/01_table_partitioning_views_reference/04_all_part_key_columns/
lastModified: 2023-02-14T16:10:29+05:30
---

# ALL\_PART\_KEY\_COLUMNS

<div id="all_part_key_columns" class="registered_link"></div>

The following table lists the information available in the `ALL_PART_KEY_COLUMNS` view.

| Column            | Type           | Description                                                                                                                                                |
| ----------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `owner`           | `name`         | The name of the table owner.                                                                                                                               |
| `schema_name`     | `name`         | The name of the schema on which the table resides.                                                                                                         |
| `name`            | `name`         | The name of the table.                                                                                                                                     |
| `object_type`     | `character(5)` | This column is always `TABLE`.                                                                                                                             |
| `column_name`     | `name`         | The name of the partitioning key column.                                                                                                                   |
| `column_position` | `integer`      | The position of this column in the partitioning key. The first column has a column position of 1, the second column has a column position of 2, and so on. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
