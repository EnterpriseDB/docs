---
title: USER_SEQUENCES
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/79_user_sequences/
lastModified: 2023-02-14T16:10:29+05:30
---

# USER\_SEQUENCES

<div id="user_sequences" class="registered_link"></div>

The `USER_SEQUENCES` view provides information about all user-defined sequences that belong to the current user.

| Name            | Type                | Description                                                                      |
| --------------- | ------------------- | -------------------------------------------------------------------------------- |
| `schema_name`   | `TEXT`              | Name of the schema in which the sequence resides.                                |
| `sequence_name` | `TEXT`              | Name of the sequence.                                                            |
| `min_value`     | `NUMERIC`           | Lowest value for the server to assign to the sequence.                           |
| `max_value`     | `NUMERIC`           | Highest value for the server to assign to the sequence.                          |
| `increment_by`  | `NUMERIC`           | Value added to the current sequence number to create the next sequent number.    |
| `cycle_flag`    | `CHARACTER VARYING` | Specifies whether the sequence wraps when it reaches `min_value` or `max_value`. |
| `order_flag`    | `CHARACTER VARYING` | Included only for compatibility. Always `Y`.                                     |
| `cache_size`    | `NUMERIC`           | Number of preallocated sequence numbers in memory.                               |
| `last_number`   | `NUMERIC`           | The value of the last sequence number saved to disk.                             |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
