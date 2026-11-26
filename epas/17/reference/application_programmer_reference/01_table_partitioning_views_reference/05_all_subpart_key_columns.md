---
title: ALL_SUBPART_KEY_COLUMNS
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/application_programmer_reference/01_table_partitioning_views_reference/05_all_subpart_key_columns/
lastModified: 2025-11-25T20:57:39+05:30
---

# ALL\_SUBPART\_KEY\_COLUMNS

<div id="all_subpart_key_columns" class="registered_link"></div>

The following table lists the information available in the `ALL_SUBPART_KEY_COLUMNS` view.

| Column            | Type           | Description                                                                                                                                               |
| ----------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `owner`           | `name`         | The name of the table owner.                                                                                                                              |
| `schema_name`     | `name`         | The name of the schema on which the table resides.                                                                                                        |
| `name`            | `name`         | The name of the table.                                                                                                                                    |
| `object_type`     | `character(5)` | This column is always `TABLE`.                                                                                                                            |
| `column_name`     | `name`         | The name of the partitioning key column.                                                                                                                  |
| `column_position` | `integer`      | The position of this column within the subpartitioning key (the first column has a column position of 1, the second column has a column position of 2...) |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
