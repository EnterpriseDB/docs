---
title: DROP_QUEUE_TABLE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/03_dbms_aqadm/06_drop_queue_table/
lastModified: 2023-02-14T16:10:29+05:30
---

# DROP\_QUEUE\_TABLE

Use the `DROP_QUEUE_TABLE` procedure to delete a queue table. The signature is:

```text
DROP_QUEUE_TABLE(
  <queue_table> IN VARCHAR2,
  <force> IN BOOLEAN default FALSE,
  <auto_commit> IN BOOLEAN default TRUE)
```

## Parameters

`queue_table`

The (optionally schema-qualified) name of the queue table.

`force`

The `force` keyword determines the behavior of the `DROP_QUEUE_TABLE` command when dropping a table that contain entries:

- If the target table contains entries and `force` is `FALSE`, the command fails, and the server issues an error.
- If the target table contains entries and `force` is `TRUE`, the command drops the table and any dependent objects.

`auto_commit`

`auto_commit` is accepted for compatibility but is ignored.

## Example

The following anonymous block drops a table named `work_order_table`:

```text
BEGIN
   DBMS_AQADM.DROP_QUEUE_TABLE ('work_order_table', force => TRUE);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
