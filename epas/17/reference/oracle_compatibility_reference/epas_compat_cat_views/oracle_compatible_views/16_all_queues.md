---
title: ALL_QUEUES
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/16_all_queues/
lastModified: 2025-11-25T20:57:39+05:30
---

# ALL\_QUEUES

<div id="all_queues" class="registered_link"></div>

The `ALL_QUEUES` view provides information about any currently defined queues.

| Name              | Type                | Description                                                                          |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------ |
| `owner`           | `TEXT`              | User name of the queue owner.                                                        |
| `name`            | `TEXT`              | Name of the queue.                                                                   |
| `queue_table`     | `TEXT`              | Name of the queue table in which the queue resides.                                  |
| `qid`             | `OID`               | The system-assigned object ID of the queue.                                          |
| `queue_type`      | `CHARACTER VARYING` | The queue type. Can be `EXCEPTION_QUEUE`, `NON_PERSISTENT_QUEUE`, or `NORMAL_QUEUE`. |
| `max_retries`     | `NUMERIC`           | The maximum number of dequeue attempts.                                              |
| `retrydelay`      | `NUMERIC`           | The maximum time allowed between retries.                                            |
| `enqueue_enabled` | `CHARACTER VARYING` | `YES` if the queue allows enqueuing, `NO` if the queue does not.                     |
| `dequeue_enabled` | `CHARACTER VARYING` | `YES` if the queue allows dequeuing, `NO` if the queue does not.                     |
| `retention`       | `CHARACTER VARYING` | The number of seconds that a processed message is retained in the queue.             |
| `user_comment`    | `CHARACTER VARYING` | User-specified comment.                                                              |
| `network_name`    | `CHARACTER VARYING` | Name of the network on which the queue resides.                                      |
| `sharded`         | `CHARACTER VARYING` | `YES` if the queue resides on a sharded network, `NO` if the queue does not.         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
