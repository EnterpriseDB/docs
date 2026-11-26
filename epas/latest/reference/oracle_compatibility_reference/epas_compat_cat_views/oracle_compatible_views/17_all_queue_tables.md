---
title: ALL_QUEUE_TABLES
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/17_all_queue_tables/
lastModified: 2025-11-25T20:39:04+05:30
---

# ALL\_QUEUE\_TABLES

<div id="all_queue_tables" class="registered_link"></div>

The `ALL_QUEUE_TABLES` view provides information about all of the queue tables in the database.

| Name                 | Type                | Description                                                                                           |
| -------------------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| `owner`              | `TEXT`              | Role name of the owner of the queue table.                                                            |
| `queue_table`        | `TEXT`              | User-specified name of the queue table.                                                               |
| `type`               | `CHARACTER VARYING` | Type of data stored in the queue table.                                                               |
| `object_type`        | `TEXT`              | User-defined payload type.                                                                            |
| `sort_order`         | `CHARACTER VARYING` | Order in which the queue table is sorted.                                                             |
| `recipients`         | `CHARACTER VARYING` | Always `SINGLE`.                                                                                      |
| `message_grouping`   | `CHARACTER VARYING` | Always `NONE`.                                                                                        |
| `compatible`         | `CHARACTER VARYING` | Release number of the EDB Postgres Advanced Server release with which this queue table is compatible. |
| `primary_instance`   | `NUMERIC`           | Always `0`.                                                                                           |
| `secondary_instance` | `NUMERIC`           | Always `0`.                                                                                           |
| `owner_instance`     | `NUMERIC`           | Instance number of the instance that owns the queue table.                                            |
| `user_comment`       | `CHARACTER VARYING` | User comment provided when the table was created.                                                     |
| `secure`             | `CHARACTER VARYING` | `YES` indicates that the queue table is secure. `NO` indicates that it isn't.                         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
