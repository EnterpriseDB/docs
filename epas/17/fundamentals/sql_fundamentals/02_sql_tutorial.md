---
title: SQL tutorial
description: Helps you get started with SQL quickly and effectively through practical examples
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/02_sql_tutorial/
lastModified: 2025-11-25T20:57:39+05:30
---

# SQL tutorial

<div id="sql_tutorial" class="registered_link"></div>

EDB Postgres Advanced Server is a _relational database management system_ (RDBMS), which means it's a system for managing data stored in _relations_. A relation is essentially a mathematical term for a _table_. Each table is a named collection of _rows_. Each row of a given table has the same set of named _columns_, and each column is of a specific _data type_. Whereas columns have a fixed order in each row, it's important to remember that SQL doesn't guarantee the order of the rows in the table in any way (although you can explicitly sort them for display).

Tables are grouped into _databases_, and a collection of databases managed by a single EDB Postgres Advanced Server instance constitutes a database _cluster_.

This tutorial walks you through the main features of an RDBMS using a sample database.

- [Sample database](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/02_sql_tutorial/01_sample_database/): Provides an introduction to the key elements of the sample database
- [Creating a new table](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/02_sql_tutorial/02_creating_a_new_table/): Describes how to create a new table
- [Populating a table With rows](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/02_sql_tutorial/03_populating_a_table_with_rows/): Provides an example of how to populate table
- [Querying a table](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/02_sql_tutorial/04_querying_a_table/): Provides an example of how to query a table
- [Executing joins between tables](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/02_sql_tutorial/05_joins_between_tables/): Describes how to execute a join query
- [Aggregating data](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/02_sql_tutorial/06_aggregate_functions/): Provides an example of how to aggregate data
- [Updating a table](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/02_sql_tutorial/07_updates/): Provides an example of updating a table
- [Deleting a table](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/02_sql_tutorial/08_deletions/): Provides an example of how to delete a table
- [The SQL language](https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/02_sql_tutorial/09_the_sql_language/): Provides an introduction to the subset of the EDB Postgres Advanced Server SQL language that is compatible with Oracle databases

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
