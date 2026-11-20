---
title: SET TRANSACTION
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/74_set_transaction/
lastModified: 2023-02-14T16:10:29+05:30
---

# SET TRANSACTION

<div id="set_transaction" class="registered_link"></div>

## Name

`SET TRANSACTION` — Set the characteristics of the current transaction.

## Synopsis

```text
SET TRANSACTION transaction_mode
```

Where `transaction_mode` is one of:

```
ISOLATION LEVEL { SERIALIZABLE | READ COMMITTED }
READ WRITE | READ ONLY
```

## Description

The `SET TRANSACTION` command sets the characteristics of the current transaction. It has no effect on any later transactions. The available transaction characteristics are the transaction isolation level and the transaction access mode (read/write or read-only). The isolation level of a transaction determines the data the transaction can see when other transactions are running concurrently.

`READ COMMITTED`

A statement can see only rows committed before it began. This is the default.

`SERIALIZABLE`

All statements of the current transaction can see only rows committed before the first query or data-modification statement was executed in this transaction.

You can't change the transaction isolation level after the first query or data-modification statement (`SELECT`, `INSERT`, `DELETE`, `UPDATE`, or `FETCH`) of a transaction is executed. The transaction access mode determines whether the transaction is read/write or read-only. Read/write is the default.

When a transaction is read-only, the following SQL commands aren't allowed:

- `INSERT`, `UPDATE`, and `DELETE` if the table they write to isn't a temporary table
- All `CREATE`, `ALTER`, and `DROP` commands
- `COMMENT`, `GRANT`, `REVOKE`, `TRUNCATE`
- `EXECUTE` if the command it executes is among those listed.

This is a high-level notion of read-only that doesn't prevent all writes to disk.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
