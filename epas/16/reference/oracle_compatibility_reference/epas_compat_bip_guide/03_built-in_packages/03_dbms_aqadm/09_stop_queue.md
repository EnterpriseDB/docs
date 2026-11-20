---
title: STOP_QUEUE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/09_stop_queue/
lastModified: 2024-11-22T12:16:04+01:00
---

# STOP\_QUEUE

Use the `STOP_QUEUE` procedure to disable enqueuing or dequeueing on a specified queue. The signature is:

```sql
STOP_QUEUE(
  <queue_name> IN VARCHAR2,
  <enqueue> IN BOOLEAN DEFAULT TRUE,
  <dequeue> IN BOOLEAN DEFAULT TRUE,
  <wait> IN BOOLEAN DEFAULT TRUE)
```

## Parameters

`queue_name`

`queue_name` specifies the name of the queue that you're stopping.

`enqueue`

Specify `TRUE` to disable enqueueing (the default) or `FALSE` to leave the current setting unchanged.

`dequeue`

Specify `TRUE` to disable dequeueing (the default) or `FALSE` to leave the current setting unchanged.

`wait`

Specify `TRUE` to instruct the server to wait for any uncompleted transactions to complete before applying the specified changes. While waiting to stop the queue, no transactions are allowed to enqueue or dequeue from the specified queue. Specify `FALSE` to stop the queue immediately.

## Example

The following anonymous block disables enqueueing and dequeueing from the queue named `work_order`:

```sql
BEGIN
DBMS_AQADM.STOP_QUEUE(queue_name =>'work_order', enqueue=>TRUE,
dequeue=>TRUE, wait=>TRUE);
END;
```

Enqueueing and dequeueing stops after any outstanding transactions complete.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
