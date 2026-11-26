---
title: ALL_SEQUENCES
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/18_all_sequences/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALL\_SEQUENCES

<div id="all_sequences" class="registered_link"></div>

The `ALL_SEQUENCES` view provides information about all user-defined sequences on which the user has `SELECT` or `UPDATE` privileges.

| Name             | Type                | Description                                                                      |
| ---------------- | ------------------- | -------------------------------------------------------------------------------- |
| `sequence_owner` | `TEXT`              | User name of the sequence owner.                                                 |
| `schema_name`    | `TEXT`              | Name of the schema in which the sequence resides.                                |
| `sequence_name`  | `TEXT`              | Name of the sequence.                                                            |
| `min_value`      | `NUMERIC`           | Lowest value that the server assigns to the sequence.                            |
| `max_value`      | `NUMERIC`           | Highest value that the server assigns to the sequence.                           |
| `increment_by`   | `NUMERIC`           | Value added to the current sequence number to create the next sequent number.    |
| `cycle_flag`     | `CHARACTER VARYING` | Specifies whether the sequence wraps when it reaches `min_value` or `max_value`. |
| `order_flag`     | `CHARACTER VARYING` | Always returns `Y`.                                                              |
| `cache_size`     | `NUMERIC`           | Number of preallocated sequence numbers stored in memory.                        |
| `last_number`    | `NUMERIC`           | Value of the last sequence number saved to disk.                                 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
