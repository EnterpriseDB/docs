---
title: DBMS_AQADM
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/
lastModified: 2023-11-09T17:35:38+05:30
---

# DBMS\_AQADM

EDB Postgres Advanced Server advanced queueing provides message queueing and message processing for the EDB Postgres Advanced Server database. User-defined messages are stored in a queue, and a collection of queues is stored in a queue table. Procedures in the `DBMS_AQADM` package create and manage message queues and queue tables. Use the `DBMS_AQ` package to add messages to or remove messages from a queue or to register or unregister a PL/SQL callback procedure.

EDB Postgres Advanced Server also provides extended (non-compatible) functionality for the `DBMS_AQ` package with SQL commands. See [SQL reference](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/) for detailed information about the following SQL commands:

- `ALTER QUEUE`
- `ALTER QUEUE TABLE`
- `CREATE QUEUE`
- `CREATE QUEUE TABLE`
- `DROP QUEUE`
- `DROP QUEUE TABLE`

The `DBMS_AQADM` package provides procedures that allow you to create and manage queues and queue tables. EDB Postgres Advanced Server's implementation of `DBMS_AQADM` is a partial implementation when compared to Oracle's version. Only those functions and procedures listed in the table are supported.

| Function/procedure   | Return type | Description                                                        |
| -------------------- | ----------- | ------------------------------------------------------------------ |
| `ALTER_QUEUE`        | n/a         | Modify an existing queue.                                          |
| `ALTER_QUEUE_TABLE`  | n/a         | Modify an existing queue table.                                    |
| `CREATE_QUEUE`       | n/a         | Create a queue.                                                    |
| `CREATE_QUEUE_TABLE` | n/a         | Create a queue table.                                              |
| `DROP_QUEUE`         | n/a         | Drop an existing queue.                                            |
| `DROP_QUEUE_TABLE`   | n/a         | Drop an existing queue table.                                      |
| `PURGE_QUEUE_TABLE`  | n/a         | Remove one or more messages from a queue table.                    |
| `START_QUEUE`        | n/a         | Make a queue available for enqueueing and dequeueing procedures.   |
| `STOP_QUEUE`         | n/a         | Make a queue unavailable for enqueueing and dequeueing procedures. |

EDB Postgres Advanced Server supports use of the arguments listed in the table:

| Constant                                | Description                                            | For parameters                    |
| --------------------------------------- | ------------------------------------------------------ | --------------------------------- |
| `DBMS_AQADM.TRANSACTIONAL(1)`           | This constant is defined but returns an error if used. | `message_grouping`                |
| `DBMS_AQADM.NONE(0)`                    | Use to specify message grouping for a queue table.     | `message_grouping`                |
| `DBMS_AQADM.NORMAL_QUEUE(0)`            | Use with `create_queue` to specify `queue_type`.       | `queue_type`                      |
| `DBMS_AQADM.EXCEPTION_QUEUE (1)`        | Use with `create_queue` to specify `queue_type`.       | `queue_type`                      |
| `DBMS_AQADM.INFINITE(-1)`               | Use with `create_queue` to specify `retention_time`.   | `retention_time`                  |
| `DBMS_AQADM.PERSISTENT (0)`             | Store the message in a table.                          | `enqueue_options_t.delivery_mode` |
| `DBMS_AQADM.BUFFERED (1)`               | This constant is defined but returns an error if used. | `enqueue_options_t.delivery_mode` |
| `DBMS_AQADM.PERSISTENT_OR_BUFFERED (2)` | This constant is defined but returns an error if used. | `enqueue_options_t.delivery_mode` |

- [ALTER\_QUEUE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/01_alter_queue/): Use the ALTER\_QUEUE procedure to modify an existing queue. The signature is:
- [ALTER\_QUEUE\_TABLE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/02_alter_queue_table/): Use the ALTERQUEUETABLE procedure to modify an existing queue table. The signature is:
- [CREATE\_QUEUE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/03_create_queue/): Use the CREATE\_QUEUE procedure to create a queue in an existing queue table. The signature is:
- [CREATE\_QUEUE\_TABLE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/04_create_queue_table/): Use the CREATEQUEUETABLE procedure to create a queue table. The signature is:
- [DROP\_QUEUE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/05_drop_queue/): Use the DROP\_QUEUE procedure to delete a queue. The signature is:
- [DROP\_QUEUE\_TABLE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/06_drop_queue_table/): Use the DROPQUEUETABLE procedure to delete a queue table. The signature is:
- [PURGE\_QUEUE\_TABLE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/07_purge_queue_table/): Use the PURGEQUEUETABLE procedure to delete messages from a queue table. The signature is:
- [START\_QUEUE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/08_start_queue/): Use the START\_QUEUE procedure to make a queue available for enqueuing and dequeueing. The signature is:
- [STOP\_QUEUE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/09_stop_queue/): Use the STOP\_QUEUE procedure to disable enqueuing or dequeueing on a specified queue. The signature is:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
