---
title: DBA_SEQUENCES
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/51_dba_sequences/
lastModified: 2023-02-14T16:10:29+05:30
---

# DBA\_SEQUENCES

<div id="dba_sequences" class="registered_link"></div>

The `DBA_SEQUENCES` view provides information about all user-defined sequences.

| Name             | Type                | Description                                                                      |
| ---------------- | ------------------- | -------------------------------------------------------------------------------- |
| `sequence_owner` | `TEXT`              | User name of the sequence's owner.                                               |
| `schema_name`    | `TEXT`              | Name of the schema in which the sequence resides.                                |
| `sequence_name`  | `TEXT`              | Name of the sequence.                                                            |
| `min_value`      | `NUMERIC`           | Lowest value that the server assigns to the sequence.                            |
| `max_value`      | `NUMERIC`           | Highest value that the server assigns to the sequence.                           |
| `increment_by`   | `NUMERIC`           | Value added to the current sequence number to create the next sequent number.    |
| `cycle_flag`     | `CHARACTER VARYING` | Specifies whether the sequence wraps when it reaches `min_value` or `max_value`. |
| `order_flag`     | `CHARACTER VARYING` | Always returns `Y`.                                                              |
| `cache_size`     | `NUMERIC`           | The number of preallocated sequence numbers stored in memory.                    |
| `last_number`    | `NUMERIC`           | The value of the last sequence number saved to disk.                             |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
