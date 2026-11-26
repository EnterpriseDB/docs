---
title: Overview of data loading methods
description: Description of the data loading methods supported by EDB*Loader
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/database_administration/02_edb_loader/data_loading_methods/
lastModified: 2024-11-22T12:16:04+01:00
---

# Overview of data loading methods

As with Oracle SQL\*Loader, EDB\*Loader supports three data loading methods:

- **Conventional path load** — Conventional path load is the default method used by EDB\*Loader. Use basic insert processing to add rows to the table. The advantage of a conventional path load is that table constraints and database objects defined on the table are enforced during a conventional path load. Table constraints and database objects include primary keys, not null constraints, check constraints, unique indexes, foreign key constraints, triggers, and so on. One exception is that the EDB Postgres Advanced Server rules defined on the table aren't enforced. EDB\*Loader can load tables on which rules are defined. However, the rules aren't executed. As a consequence, you can't load partitioned tables implemented using rules with EDB\*Loader. See [Conventional path load](https://www.enterprisedb.com/docs/epas/16/database_administration/02_edb_loader/invoking_edb_loader/conventional_path_load/).

- **Direct path load** — A direct path load is faster than a conventional path load but requires removing most types of constraints and triggers from the table. See [Direct path load](https://www.enterprisedb.com/docs/epas/16/database_administration/02_edb_loader/invoking_edb_loader/direct_path_load/).

- **Parallel direct path load** — A parallel direct path load provides even greater performance improvement by permitting multiple EDB\*Loader sessions to run simultaneously to load a single table. See [Parallel direct path load](https://www.enterprisedb.com/docs/epas/16/database_administration/02_edb_loader/invoking_edb_loader/parallel_direct_path_load/).

> **Note**
>
> Create EDB Postgres Advanced Server rules using the `CREATE RULE` command. EDB Postgres Advanced Server rules aren't the same database objects as rules and rule sets used in Oracle.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
