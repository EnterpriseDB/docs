---
title: USER_QUEUE_TABLES
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/77_user_queue_tables/
lastModified: 2023-02-14T16:10:29+05:30
---

# USER\_QUEUE\_TABLES

<div id="user_queue_tables" class="registered_link"></div>

The `USER_QUEUE_TABLES` view provides information about all of the queue tables the current user can access.

| Name                 | Type                | Description                                                                                           |
| -------------------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
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
| `secure`             | `CHARACTER VARYING` | `YES` indicates that the queue table is secure. `NO` indicates that it is not.                        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
