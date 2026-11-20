---
title: SQL tutorial
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/
lastModified: 2023-02-14T16:10:29+05:30
---

# SQL tutorial

<div id="sql_tutorial" class="registered_link"></div>

EDB Postgres Advanced Server is a _relational database management system_ (RDBMS). That means it's a system for managing data stored in _relations_. A relation is essentially a mathematical term for a _table_. The notion of storing data in tables is so commonplace today that it might seem obvious, but there are a number of other ways of organizing databases. Files and directories on Unix-like operating systems form an example of a hierarchical database. A more modern development is the object-oriented database.

Each table is a named collection of _rows_. Each row of a given table has the same set of named _columns_, and each column is of a specific _data type_. Whereas columns have a fixed order in each row, it's important to remember that SQL doesn't guarantee the order of the rows in the table in any way (although you can explicitly sort them for display).

Tables are grouped into _databases_, and a collection of databases managed by a single EDB Postgres Advanced Server instance constitutes a database _cluster_.

- [Sample database](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/01_sample_database/): Throughout this tutorial, we work with a sample database to help explain database concepts, from basic to advanced.
- [Creating a new table](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/02_creating_a_new_table/): Create a new table by specifying the table name, along with all column names and their types. The following is a simplified version of the emp sample table with the minimal information needed to define a table.
- [Populating a table With rows](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/03_populating_a_table_with_rows/): Use the INSERT statement to populate a table with rows:
- [Querying a table](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/04_querying_a_table/): To retrieve data from a table, the table is queried. Use an SQL SELECT statement to do this. The statement is divided into:
- [Joins between tables](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/05_joins_between_tables/): Queries can access multiple tables at once or access the same table in such a way that multiple rows of the table are processed at the same time. A query that accesses multiple rows of the same or different tables at one time is called a join query. For example, suppose you want to list all the employee records together with the name and location of the associated department. To do that, you need to compare the deptno column of each row of the emp table with the deptno column of all rows in the dept table. Then select the pairs of rows where these values match. You can accomplish this using the following query:
- [Aggregate functions](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/06_aggregate_functions/): Like most other relational database products, EDB Postgres Advanced Server supports aggregate functions. An aggregate function computes a single result from multiple input rows. For example, some aggregates compute the COUNT, SUM, AVG (average), MAX (maximum), and MIN (minimum) over a set of rows.
- [Updates](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/07_updates/): You can change the column values of existing rows using the UPDATE command. For example, the following sequence of commands shows the before and after results of giving everyone who is a manager a 10% raise:
- [Deletions](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/08_deletions/): You can remove rows from a table using the DELETE command. For example, the following sequence of commands shows the before and after results of deleting all employees in department 20.
- [The SQL language](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/09_the_sql_language/): EDB Postgres Advanced Server supports SQL language that's compatible with Oracle syntax as well as syntax and commands for extended functionality. Extended functionality doesn't provide database compatibility for Oracle or support Oracle-styled applications.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
