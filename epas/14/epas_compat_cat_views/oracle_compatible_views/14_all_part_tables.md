---
title: ALL_PART_TABLES
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/14_all_part_tables/
lastModified: 2023-02-14T16:10:29+05:30
---

# ALL\_PART\_TABLES

<div id="all_part_tables" class="registered_link"></div>

The `ALL_PART_TABLES` view provides information about all of the partitioned tables that reside in the database.

| Name                        | Type                      | Description                                              |
| --------------------------- | ------------------------- | -------------------------------------------------------- |
| `owner`                     | `TEXT`                    | Owner of the partitioned table.                          |
| `schema_name`               | `TEXT`                    | Name of the schema in which the table resides.           |
| `table_name`                | `TEXT`                    | Name of the table.                                       |
| `partitioning_type`         | `TEXT`                    | Partitioning type used to define table partitions.       |
| `subpartitioning_type`      | `TEXT`                    | Subpartitioning type used to define table subpartitions. |
| `partition_count`           | `BIGINT`                  | Number of partitions in the table.                       |
| `def_subpartition_count`    | `INTEGER`                 | Number of subpartitions in the table.                    |
| `partitioning_key_count`    | `INTEGER`                 | Number of partitioning keys specified.                   |
| `subpartitioning_key_count` | `INTEGER`                 | Number of subpartitioning keys specified.                |
| `status`                    | `CHARACTER VARYING(8)`    | Provided only for compatibility. Always `VALID`.         |
| `def_tablespace_name`       | `CHARACTER VARYING(30)`   | Provided only for compatibility. Always `NULL`.          |
| `def_pct_free`              | `NUMERIC`                 | Provided only for compatibility. Always `NULL`.          |
| `def_pct_used`              | `NUMERIC`                 | Provided only for compatibility. Always `NULL`.          |
| `def_ini_trans`             | `NUMERIC`                 | Provided only for compatibility. Always `NULL`.          |
| `def_max_trans`             | `NUMERIC`                 | Provided only for compatibility. Always `NULL`.          |
| `def_initial_extent`        | `CHARACTER VARYING(40)`   | Provided only for compatibility. Always `NULL`.          |
| `def_next_extent`           | `CHARACTER VARYING(40)`   | Provided only for compatibility. Always `NULL`.          |
| `def_min_extents`           | `CHARACTER VARYING(40)`   | Provided only for compatibility. Always `NULL`.          |
| `def_max_extents`           | `CHARACTER VARYING(40)`   | Provided only for compatibility. Always `NULL`.          |
| `def_pct_increase`          | `CHARACTER VARYING(40)`   | Provided only for compatibility. Always `NULL`.          |
| `def_freelists`             | `NUMERIC`                 | Provided only for compatibility. Always `NULL`.          |
| `def_freelist_groups`       | `NUMERIC`                 | Provided only for compatibility. Always `NULL`.          |
| `def_logging`               | `CHARACTER VARYING(7)`    | Provided only for compatibility. Always `YES`.           |
| `def_compression`           | `CHARACTER VARYING(8)`    | Provided only for compatibility. Always `NONE`.          |
| `def_buffer_pool`           | `CHARACTER VARYING(7)`    | Provided only for compatibility. Always `DEFAULT`.       |
| `ref_ptn_constraint_name`   | `CHARACTER VARYING(30)`   | Provided only for compatibility. Always `NULL`.          |
| `interval`                  | `CHARACTER VARYING(1000)` | Provided only for compatibility. Always `NULL`.          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
