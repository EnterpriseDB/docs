---
title: Using the Index Advisor
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/profiling_workloads/index_advisor/
lastModified: 2024-01-22T17:48:09+05:30
---

# Using the Index Advisor

> **Note: Important**
>
> Index Advisor isn't supported for EDB Postgres Advanced Server and PostgreSQL version 16 and later.

Index Advisor is distributed with EDB Postgres Advanced Server. Index Advisor works with SQL Profiler by examining collected SQL statements and making indexing recommendations for any underlying tables to improve SQL response time. Index Advisor works on all DML (INSERT, UPDATE, DELETE) and SELECT statements that are invoked by a superuser.

Diagnostic output from the Index Advisor includes:

- Forecasted performance benefits from any recommended indexes
- The predicted size of any recommended indexes
- DDL statements you can use to create the recommended indexes

Index Advisor can make indexing recommendations based on trace data captured by SQL Profiler. To open Index Advisor, select one or more queries in the SQL Profiler Trace Data pane and select **Index Advisor** from the toolbar. For more information about configuring and using Index Advisor, see [EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/15/managing_performance/02_index_advisor/).

> **Note**
>
> Index Advisor can't analyze statements invoked by a non-superuser. If you attempt to analyze statements invoked by a non-superuser, the server log includes the following error:

`ERROR: access to library "index_advisor" is not allowed` 

> **Note**
>
> We recommend that you disable Index Advisor while using the pg\_dump functionality.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
