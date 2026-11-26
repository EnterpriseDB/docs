---
title: Application use
description: How to develop an application that uses PGD and how PGD behaves with applications
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/
lastModified: 2026-08-21T09:22:11+02:00
---

# Application use

Developing an application with PGD is mostly the same as working with any PostgreSQL database. What's different, though, is that you need to be aware of how your application interacts with replication. You need to know how PGD behaves with applications, the SQL that is and isn't replicated, how different nodes are handled, and other important information.

- [DML and DDL replication](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/dml-ddl/) shows the differences between the two classes of SQL statements and how PGD handles replicating them. It also looks at the commands PGD doesn't replicate at all.

- [Nodes with differences](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/nodes-with-differences/) examines how PGD works with configurations where there are differing table structures and schemas on replicated nodes. Also covered is how to compare between such nodes with LiveCompare and how differences in PostgreSQL versions running on nodes can be handled.

- [Timing considerations](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/timing/) shows how the asynchronous/synchronous replication might affect an application's view of data and notes functions to mitigate stale reads.

- [Extension usage](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/extensions/) explains how to select, install, and configure extensions on PGD.

- [Table access methods](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/table-access-methods/) (TAMs) notes the TAMs available with PGD and how to enable them.

- [Feature compatibility](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/feature-compatibility/) shows which server features work with which commit scopes and which commit scopes can be daisy chained together.

* [DML and DDL replication](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/dml-ddl/): The two major classes of SQL statement are DML and DDL.
* [Nodes with differences](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/nodes-with-differences/): Replicating between nodes with differences
* [Timing considerations](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/timing/): Being asynchronous by default, peer nodes might lag behind. This behavior makes it
* [Extension usage](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/extensions/): PGD and other PostgreSQL extensions
* [Table access methods](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/table-access-methods/): The EDB Advanced Storage Pack provides a selection
* [Feature compatibility](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/appusage/feature-compatibility/): Server feature/commit scope interoperability

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
