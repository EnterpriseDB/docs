---
title: USER_TAB_PARTITIONS
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/84_user_tab_partitions/
lastModified: 2025-11-25T20:57:39+05:30
---

# USER\_TAB\_PARTITIONS

<div id="user_tab_partitions" class="registered_link"></div>

The `USER_TAB_PARTITIONS` view provides information about all of the partitions that are owned by the current user.

| Name                 | Type                          | Description                                                                                                                             |
| -------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `schema_name`        | `TEXT`                        | Name of the schema in which the table resides.                                                                                          |
| `table_name`         | `TEXT`                        | Name of the table.                                                                                                                      |
| `composite`          | `TEXT`                        | `YES` if the table is subpartitioned, `NO` if the table isn't subpartitioned.                                                           |
| `partition_name`     | `TEXT`                        | Name of the partition.                                                                                                                  |
| `subpartition_count` | `BIGINT`                      | Number of subpartitions in the partition.                                                                                               |
| `high_value`         | `TEXT`                        | High-partitioning value specified in the `CREATE TABLE` statement.                                                                      |
| `high_value_length`  | `INTEGER`                     | Length of high-partitioning value.                                                                                                      |
| `partition_position` | `INTEGER`                     | The ordinal position of this partition.                                                                                                 |
| `tablespace_name`    | `TEXT`                        | Name of the tablespace in which the partition resides. If the tablespace name isn't specified, then default tablespace is `PG_DEFAULT`. |
| `pct_free`           | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                            |
| `pct_used`           | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                            |
| `ini_trans`          | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                            |
| `max_trans`          | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                            |
| `initial_extent`     | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                         |
| `next_extent`        | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                         |
| `min_extent`         | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                            |
| `max_extent`         | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                            |
| `pct_increase`       | `NUMERIC`                     | Included only for compatibility. Always `0`.                                                                                            |
| `freelists`          | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                         |
| `freelist_groups`    | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                         |
| `logging`            | `CHARACTER VARYING(7)`        | Included only for compatibility. Always `YES`.                                                                                          |
| `compression`        | `CHARACTER VARYING(8)`        | Included only for compatibility. Always `NONE`.                                                                                         |
| `num_rows`           | `NUMERIC`                     | Same as `pg_class.reltuples`.                                                                                                           |
| `blocks`             | `INTEGER`                     | Same as `pg_class.relpages`.                                                                                                            |
| `empty_blocks`       | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                         |
| `avg_space`          | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                         |
| `chain_cnt`          | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                         |
| `avg_row_len`        | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                         |
| `sample_size`        | `NUMERIC`                     | Included only for compatibility. Always `NULL`.                                                                                         |
| `last_analyzed`      | `TIMESTAMP WITHOUT TIME ZONE` | Included only for compatibility. Always `NULL`.                                                                                         |
| `buffer_pool`        | `CHARACTER VARYING(7)`        | Included only for compatibility. Always `NULL`.                                                                                         |
| `global_stats`       | `CHARACTER VARYING(3)`        | Included only for compatibility. Always `YES`.                                                                                          |
| `user_stats`         | `CHARACTER VARYING(3)`        | Included only for compatibility. Always `NO`.                                                                                           |
| `backing_table`      | `REGCLASS`                    | Name of the partition backing table.                                                                                                    |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
