---
title: Transaction control
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/06_transaction_control/
lastModified: 2023-02-14T16:10:29+05:30
---

# Transaction control

<div id="transaction_control" class="registered_link"></div>

There might be times when you want all updates to a database to occur successfully or for none to occur in case of any error. A set of database updates that occur successfully as a single unit or not at all is called a _transaction_.

A common example in banking is a funds transfer between two accounts. The two parts of the transaction are the withdrawal of funds from one account and the deposit of the funds in another account. Both parts of this transaction must occur for the bank’s books to balance. The deposit and withdrawal are one transaction.

You can create an SPL application that uses a style of transaction control compatible with Oracle databases if the following conditions are met:

- The `edb_stmt_level_tx` parameter is set to `TRUE`. This prevents the action of unconditionally rolling back all database updates in the `BEGIN/END` block if any exception occurs.
- The application isn't running in autocommit mode. If autocommit mode is on, each successful database update is immediately committed and can't be undone. The manner in which autocommit mode is turned on or off depends on the application.

A transaction begins when the first SQL command is encountered in the SPL program. All subsequent SQL commands are included as part of that transaction. The transaction ends when one of the following occurs:

- An unhandled exception occurs. In this case, the effects of all database updates made during the transaction are rolled back, and the transaction is aborted.
- A `COMMIT` command is encountered. In this case, the effect of all database updates made during the transaction become permanent.
- A `ROLLBACK` command is encountered. In this case, the effects of all database updates made during the transaction are rolled back, and the transaction is aborted. If a new SQL command is encountered, a new transaction begins.
- Control returns to the calling application (such as Java or PSQL). In this case, the action of the application determines whether the transaction is committed or rolled back. The exception is when the transaction is in a block in which `PRAGMA AUTONOMOUS_TRANSACTION` was declared. In this case, the commitment or rollback of the transaction occurs independently of the calling program.

> **Note**
>
> Unlike Oracle, DDL commands such as `CREATE TABLE` don't implicitly occur in their own transaction. Therefore, DDL commands don't cause an immediate database commit as in Oracle, and you can roll back DDL commands just like DML commands.

A transaction can span one or more `BEGIN/END` blocks, or a single `BEGIN/END` block can contain one or more transactions.

- [COMMIT](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/06_transaction_control/01_commit/): The COMMIT command makes all database updates from the current transaction permanent and ends the current transaction.
- [ROLLBACK](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/06_transaction_control/02_rollback/): The ROLLBACK command undoes all database updates made during the current transaction and ends the current transaction.
- [PRAGMA AUTONOMOUS\_TRANSACTION](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/06_transaction_control/03_pragma_autonomous_transaction/): An SPL program can be declared as an autonomous transaction by specifying the following directive in the declaration section of the SPL block. An autonomous transaction is an independent transaction started by a calling program.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
