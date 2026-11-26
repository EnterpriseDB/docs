---
title: DDL replication
description: How DDL is replicated in PGD and when it isn't
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/ddl/
lastModified: 2026-11-20T11:33:47Z
---

# DDL replication

DDL stands for data definition language, the subset of the SQL
language that creates, alters, and drops database objects.

PGD provides automatic DDL replication, which makes certain DDL changes easier. With automatic replication, you don't have to manually distribute the DDL change to all nodes and ensure that they're consistent.

This section looks at how DDL replication is handled in PGD.

- [Overview](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-overview/) provides a general outline of what PGD's DDL replication is capable of.

- [Replication options](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-replication-options/) looks at the options for controlling replication.

- [Locking](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-locking/) examines how DDL replication uses locks to safely replicate DDL.

- [Managing DDL with PGD replication](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-managing-with-pgd-replication/) gives best practice advice on why and how to limit the impact of DDL changes so they don't overly affect the smooth running of the cluster.

- [Command handling](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-command-handling/) is a reference to all DDL commands, the locks they take, and any special handling involved in their use and execution.

- [DDL role manipulation](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-role-manipulation/) notes issues around manipulating roles over multiple databases in a cluster.

- [Workarounds](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-workarounds/) gives a range of options for handling situations where DDL replication may present restrictions, such as altering columns, constraints, and types.

- [DDL-like PGD functions](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-pgd-functions-like-ddl/) details the PGD functions that behave like DDL and therefore behave in a similar way and are subject to similar restrictions.

* [Overview](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-overview/): DDL stands for data definition language, the subset of the SQL
* [Options](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-replication-options/): The bdr.ddlreplication parameter specifies replication behavior.
* [Locking](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-locking/): Two kinds of locks enforce correctness of replicated DDL with PGD: the global DDL lock and the global DML lock.
* [Managing with replication](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-managing-with-pgd-replication/): Minimizing the impact of DDL
* [Command handling](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-command-handling/): The following table describes the utility or DDL commands that are allowed, the ones that
* [Roles](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-role-manipulation/): Users are global objects in a PostgreSQL instance, which means they span
* [Workarounds](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-workarounds/): You can work around some of the limitations of PGD DDL operation handling.
* [DDL-like PGD functions](https://www.enterprisedb.com/docs/pgd/5.10/ddl/ddl-pgd-functions-like-ddl/): The following PGD management functions act like DDL. This means that, if DDL

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
