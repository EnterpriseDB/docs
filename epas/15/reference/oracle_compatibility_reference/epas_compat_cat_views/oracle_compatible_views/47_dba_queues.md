---
title: DBA_QUEUES
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/47_dba_queues/
lastModified: 2023-11-09T17:35:38+05:30
---

# DBA\_QUEUES

<div id="dba_queues" class="registered_link"></div>

The `DBA_QUEUES` view provides information about any currently defined queues.

| Name              | Type                | Description                                                                                   |
| ----------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| `owner`           | `TEXT`              | User name of the queue owner.                                                                 |
| `name`            | `TEXT`              | Name of the queue.                                                                            |
| `queue_table`     | `TEXT`              | Name of the queue table in which the queue resides.                                           |
| `qid`             | `OID`               | System-assigned object ID of the queue.                                                       |
| `queue_type`      | `CHARACTER VARYING` | Queue type. Possible values are `EXCEPTION_QUEUE`, `NON_PERSISTENT_QUEUE`, or `NORMAL_QUEUE`. |
| `max_retries`     | `NUMERIC`           | Maximum number of dequeue attempts.                                                           |
| `retrydelay`      | `NUMERIC`           | Maximum time allowed between retries.                                                         |
| `enqueue_enabled` | `CHARACTER VARYING` | `YES` if the queue allows enqueuing, `NO` if the queue does not.                              |
| `dequeue_enabled` | `CHARACTER VARYING` | `YES` if the queue allows dequeuing, `NO` if the queue does not.                              |
| `retention`       | `CHARACTER VARYING` | Number of seconds that a processed message is retained in the queue.                          |
| `user_comment`    | `CHARACTER VARYING` | User-specified comment.                                                                       |
| `network_name`    | `CHARACTER VARYING` | Name of the network on which the queue resides.                                               |
| `sharded`         | `CHARACTER VARYING` | `YES` if the queue resides on a sharded network, `NO` if the queue does not.                  |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
