---
title: "DDL: Defining Database Objects"
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/
lastModified: 2026-09-25T15:14:11+01:00
---

# DDL: Defining Database Objects

This section covers data definition language (DDL) in WarehousePG and how to create and manage database objects.

Creating objects in a WarehousePG includes making up-front choices about data distribution, storage options, data loading, and other WarehousePG features that will affect the ongoing performance of your database system. Understanding the options that are available and how the database will be used will help you make the right decisions.

Most of the advanced WarehousePG features are enabled with extensions to the SQL `CREATE` DDL statements.

- **[Creating and Managing Databases](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-database/)**

- **[Creating and Managing Tablespaces](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-tablespace/)**

- **[Creating and Managing Schemas](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-schema/)**

- **[About Table Definition Basics](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-basics/)**

- **[Creating and Managing Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-table/)**

- **[Choosing the Table Storage Model](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-storage/)**

- **[Partitioning Large Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-partition/)**

- **[Creating and Using Sequences](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-sequence/)**

- **[Using Indexes in WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-index/)**

- **[Creating and Managing Views](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-view/)**

- **[Creating and Managing Materialized Views](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-mat-view/)**

**Parent topic:** [WarehousePG Administrator Guide](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/)

- [Creating and Managing Databases](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-database/): A WarehousePG cluster is a single instance of WarehousePG. There can be several separate WarehousePG clusters installed, but usually just one is selected by environment variable settings. See your WarehousePG administrator for details.
- [Creating and Managing Tablespaces](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-tablespace/): Tablespaces allow database administrators to have multiple file systems per machine and decide how to best use physical storage to store database objects. Tablespaces allow you to assign different storage for frequently and infrequently used database objects or to control the I/O performance on certain database objects. For example, place frequently-used tables on file systems that use high performance solid-state drives (SSD), and place other tables on standard hard drives.
- [Creating and Managing Schemas](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-schema/): Schemas logically organize objects and data in a database. Schemas allow you to have more than one object (such as tables) with the same name in the database without conflict if the objects are in different schemas.
- [About Table Definition Basics](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-basics/): A table in a relational database is much like a table on paper: It consists of rows and columns. The number and order of the columns is fixed, and each column has a name. The number of rows is variable — it reflects how much data is stored at a given moment. SQL does not make any guarantees about the order of the rows in a table. When a table is read, the rows will appear in an unspecified order, unless sorting is explicitly requested. Furthermore, SQL does not assign unique identifiers to rows, so it is possible to have several completely identical rows in a table.
- [Creating and Managing Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-table/): WarehousePG tables are similar to tables in any relational database, except that table rows are distributed across the different segments in the system. When you create a table, you specify the table's distribution policy.
- [Choosing the Table Storage Model](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-storage/): WarehousePG supports several storage models and a mix of storage models. When you create a table, you choose how to store its data. This topic explains the options for table storage and how to choose the best storage model for your workload.
- [Partitioning Large Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-partition/): Table partitioning in WarehousePG enables you to logically divide large tables, such as fact tables, into smaller, more manageable pieces. Partitioning tables can improve query performance when it allows the WarehousePG query optimizer to scan only the data needed to satisfy a given query instead of scanning the complete contents of a large table.
- [Creating and Using Sequences](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-sequence/): A WarehousePG sequence object is a special single row table that functions as a number generator. You can use a sequence to generate unique integer identifiers for a row that you add to a table. Declaring a column of type SERIAL implicitly creates a sequence counter for use in that table column.
- [Using Indexes in WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-index/): In most traditional databases, indexes can greatly improve data access times. However, in a distributed database such as WarehousePG, indexes should be used more sparingly. WarehousePG performs very fast sequential scans; indexes use a random seek pattern to locate records on disk. WarehousePG data is distributed across the segments, so each segment scans a smaller portion of the overall data to get the result. With table partitioning, the total data to scan may be even smaller. Because business intelligence (BI) query workloads generally return very large data sets, using indexes is not efficient.
- [Creating and Managing Views](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-view/): Views enable you to save frequently used or complex queries, then access them in a SELECT statement as if they were a table. A view is not physically materialized on disk: the query runs as a subquery when you access the view.
- [Creating and Managing Materialized Views](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-mat-view/): Materialized views are similar to views. A materialized view enables you to save a frequently used or complex query, then access the query results in a SELECT statement as if they were a table. Materialized views persist the query results in a table-like form. While access to the data stored in a materialized view can be much faster than accessing the underlying tables directly or through a view, the data is not always current.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
