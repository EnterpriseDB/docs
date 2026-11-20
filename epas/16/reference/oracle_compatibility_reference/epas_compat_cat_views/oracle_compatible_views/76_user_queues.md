---
title: USER_QUEUES
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/76_user_queues/
lastModified: 2024-11-22T12:16:04+01:00
---

# USER\_QUEUES

<div id="user_queues" class="registered_link"></div>

The `USER_QUEUES` view provides information about any queue on which the current user has usage privileges.

| Name              | Type                | Description                                                                          |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------ |
| `name`            | `TEXT`              | Name of the queue.                                                                   |
| `queue_table`     | `TEXT`              | Name of the queue table in which the queue resides.                                  |
| `qid`             | `OID`               | The system-assigned object ID of the queue.                                          |
| `queue_type`      | `CHARACTER VARYING` | The queue type. Can be `EXCEPTION_QUEUE`, `NON_PERSISTENT_QUEUE`, or `NORMAL_QUEUE`. |
| `max_retries`     | `NUMERIC`           | The maximum number of dequeue attempts.                                              |
| `retrydelay`      | `NUMERIC`           | The maximum time allowed between retries.                                            |
| `enqueue_enabled` | `CHARACTER VARYING` | `YES` if the queue allows enqueuing, `NO` if the queue does not.                     |
| `dequeue_enabled` | `CHARACTER VARYING` | `YES` if the queue allows dequeuing, `NO` if the queue does not.                     |
| `retention`       | `CHARACTER VARYING` | Number of seconds that a processed message is retained in the queue.                 |
| `user_comment`    | `CHARACTER VARYING` | A user-specified comment.                                                            |
| `network_name`    | `CHARACTER VARYING` | Name of the network on which the queue resides.                                      |
| `sharded`         | `CHARACTER VARYING` | `YES` if the queue resides on a sharded network, `NO` if the queue does not.         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
