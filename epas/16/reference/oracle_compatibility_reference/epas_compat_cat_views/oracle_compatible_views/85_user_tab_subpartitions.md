---
title: USER_TAB_SUBPARTITIONS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/85_user_tab_subpartitions/
lastModified: 2024-11-22T12:16:04+01:00
---

# USER\_TAB\_SUBPARTITIONS

<div id="user_tab_subpartitions" class="registered_link"></div>

The `USER_TAB_SUBPARTITIONS` view provides information about all of the subpartitions owned by the current user.

| Name                    | Type                          | Description                                                                                                                              |
| ----------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `schema_name`           | `TEXT`                        | Name of the schema in which the table resides.                                                                                           |
| `table_name`            | `TEXT`                        | Name of the table.                                                                                                                       |
| `partition_name`        | `TEXT`                        | Name of the partition.                                                                                                                   |
| `subpartition_name`     | `TEXT`                        | Name of the subpartition.                                                                                                                |
| `high_value`            | `TEXT`                        | High-subpartitioning value specified in the `CREATE TABLE` statement.                                                                    |
| `high_value_length`     | `INTEGER`                     | Length of high-partitioning value.                                                                                                       |
| `subpartition_position` | `INTEGER`                     | Ordinal position of this subpartition.                                                                                                   |
| `tablespace_name`       | `TEXT`                        | Name of the tablespace in which the subpartition resides. If the tablespace name is not specified, then default tablespace `PG_DEFAULT`. |
| `pct_free`              | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                             |
| `pct_used`              | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                             |
| `ini_trans`             | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                             |
| `max_trans`             | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                             |
| `initial_extent`        | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                          |
| `next_extent`           | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                          |
| `min_extent`            | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                             |
| `max_extent`            | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                             |
| `pct_increase`          | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                             |
| `freelists`             | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                          |
| `freelist_groups`       | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                          |
| `logging`               | `CHARACTER VARYING(7)`        | Included only for compatibility. Always `YES`.                                                                                           |
| `compression`           | `CHARACTER VARYING(8)`        | Included only for compatibility. Always `NONE`.                                                                                          |
| `num_rows`              | `NUMERIC`                     | Same as `pg_class.reltuples`.                                                                                                            |
| `blocks`                | `INTEGER`                     | Same as `pg_class.relpages`.                                                                                                             |
| `empty_blocks`          | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                          |
| `avg_space`             | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                          |
| `chain_cnt`             | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                          |
| `avg_row_len`           | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                          |
| `sample_size`           | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                          |
| `last_analyzed`         | `TIMESTAMP WITHOUT TIME ZONE` | Included only for compatibility. Always `NULL`.                                                                                          |
| `buffer_pool`           | `CHARACTER VARYING(7)`        | Included only for compatibility. Always `NULL`.                                                                                          |
| `global_stats`          | `CHARACTER VARYING(3)`        | Included only for compatibility. Always `YES`.                                                                                           |
| `user_stats`            | `CHARACTER VARYING(3)`        | Included only for compatibility. Always `NO`.                                                                                            |
| `backing_table`         | `REGCLASS`                    | Name of the partition backing table.                                                                                                     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
