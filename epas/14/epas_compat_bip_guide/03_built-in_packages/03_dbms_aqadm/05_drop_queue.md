---
title: DROP_QUEUE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/05_drop_queue/
lastModified: 2023-02-14T16:10:29+05:30
---

# DROP\_QUEUE

Use the `DROP_QUEUE` procedure to delete a queue. The signature is:

```text
DROP_QUEUE(
  <queue_name>  IN VARCHAR2,
  <auto_commit> IN BOOLEAN DEFAULT TRUE)
```

## Parameters

`queue_name`

The name of the queue that you want to drop.

`auto_commit`

`auto_commit` is accepted for compatibility but is ignored.

## Example

The following anonymous block drops the queue named `work_order`:

```text
BEGIN
DBMS_AQADM.DROP_QUEUE(queue_name => 'work_order');
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
