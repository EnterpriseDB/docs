---
title: transaction_rollback_scope parameter
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/sql_features/txnrollback/
lastModified: 2025-11-25T15:48:33+01:00
---

# transaction\_rollback\_scope parameter

To set the transaction rollback scope inside the database, use the `transaction_rollback_scope` parameter.
The `transaction_rollback_scope` parameter has two possible values:

- `transaction` — Standard Postgres behavior, where each error
  aborts the whole transaction.

- `statement`— An error while executing one statement affects only
  that statement and not the status of the transaction as a whole.

## Setting the parameter

You can set the parameter as a user-level property, a connection option, or the mode for specific functions or procedures.

### Set the parameter as a user-level property

```sql
ALTER USER somebody SET transaction_rollback_scope TO statement;
```

### Set the parameter as a connection option

```sh-session
PGOPTIONS="-c transaction_rollback_scope=statement" psql <other options>
```

### Set the mode for specific functions or procedures

If using PL/pgSQL, you can set the mode for specific functions or procedures:

```sql
ALTER FUNCTION myfunc SET transaction_rollback_scope TO statement;
```

## How subtransactions are handled

If you select the `statement` value, then a subtransaction is opened just before each SQL
command. If the command is successful, the subtransaction is _committed_. If the command causes an error, the subtransaction is
rolled back, and the parent transaction can continue normally. The
effect is that an error during execution of one statement affects only
that statement and not the status of the transaction as a whole.

Committing a subtransaction assigns the
resources it holds only to its parent transaction, which might be the top-level
transaction. Or it might be some other subtransaction if there are user-defined
savepoints involved. So this is not an "autonomous transaction."
Rolling back a subtransaction releases all the
resources it holds, such as any locks it acquired.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
