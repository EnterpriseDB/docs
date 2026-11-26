---
title: START_QUEUE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/08_start_queue/
lastModified: 2023-11-09T17:35:38+05:30
---

# START\_QUEUE

Use the `START_QUEUE` procedure to make a queue available for enqueuing and dequeueing. The signature is:

```sql
START_QUEUE(
  <queue_name> IN VARCHAR2,
  <enqueue> IN BOOLEAN DEFAULT TRUE,
  <dequeue> IN BOOLEAN DEFAULT TRUE)
```

## Parameters

`queue_name`

`queue_name` specifies the name of the queue that you're starting.

`enqueue`

Specify `TRUE` to enable enqueueing (the default) or `FALSE` to leave the current setting unchanged.

`dequeue`

Specify `TRUE` to enable dequeueing (the default) or `FALSE` to leave the current setting unchanged.

## Example

The following anonymous block makes a queue named `work_order` available for enqueueing:

```sql
BEGIN
DBMS_AQADM.START_QUEUE
(queue_name => 'work_order);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
