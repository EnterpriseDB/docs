---
title: Working with transactions
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/06_transaction_control/
lastModified: 2024-11-22T12:16:04+01:00
---

# Working with transactions

<div id="transaction_control" class="registered_link"></div>

There might be times when you want all updates to a database to occur successfully or for none to occur in case of any error. A set of database updates that occur successfully as a single unit or not at all is called a _transaction_.

A common example in banking is a funds transfer between two accounts. The two parts of the transaction are the withdrawal of funds from one account and the deposit of the funds in another account. Both parts of this transaction must occur for the bank’s books to balance. The deposit and withdrawal are one transaction.

You can create an SPL application that uses a style of transaction control compatible with Oracle databases if the following conditions are met:

- The `edb_stmt_level_tx` parameter is set to `TRUE`. This prevents the action of unconditionally rolling back all database updates in the `BEGIN/END` block if any exception occurs.
- The application isn't running in autocommit mode. If autocommit mode is on, each successful database update is immediately committed and can't be undone. The manner in which autocommit mode is turned on or off depends on the application.

The three main transaction commands are COMMIT, ROLLBACK, and PRAGM\_AUTONOMOUS\_TRANSACTION.

- [About transactions](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/06_transaction_control/about_transactions/): A transaction begins when the first SQL command is encountered in the SPL program. All subsequent SQL commands are included as part of that transaction.
- [COMMIT](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/06_transaction_control/01_commit/): The COMMIT command makes all database updates from the current transaction permanent and ends the current transaction.
- [ROLLBACK](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/06_transaction_control/02_rollback/): The ROLLBACK command undoes all database updates made during the current transaction and ends the current transaction.
- [PRAGMA AUTONOMOUS\_TRANSACTION](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/06_transaction_control/03_pragma_autonomous_transaction/): A stored procedural language (SPL) program can be declared as an autonomous transaction by specifying the following directive in the declaration section of the SPL block. An autonomous transaction is an independent transaction started by a calling program.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
