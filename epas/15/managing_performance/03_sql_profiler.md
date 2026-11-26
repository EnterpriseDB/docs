---
title: Using SQL Profiler
description: How to use SQL Profiler to find and optimize inefficient SQL code
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/managing_performance/03_sql_profiler/
lastModified: 2025-03-05T15:58:55+01:00
---

# Using SQL Profiler

<div id="sql_profiler" class="registered_link"></div>

Inefficient SQL code is a leading cause of database performance problems. The challenge for database administrators and developers is locating and then optimizing this code in large, complex systems. SQL Profiler helps you locate and optimize poorly running SQL code.

Specific features and benefits of SQL Profiler include:

- **On-demand traces**. You can capture SQL traces at any time by manually setting up your parameters and starting the trace.
- **Scheduled traces**. If the current time isn't convenient, you can also specify your trace parameters and schedule them to run later.
- **Save traces**. Execute your traces and save them for later review.
- **Trace filters**. Selectively filter SQL captures by database and by user, or capture every SQL statement sent by all users against all databases.
- **Trace output analyzer**. A graphical table lets you quickly sort and filter queries by duration or statement. A graphical or text-based `EXPLAIN` plan lays out your query paths and joins.
- **Index Advisor integration**. After you find your slow queries and optimize them, you can also let Index Advisor recommend the creation of underlying table indices to further improve performance.

> **Tip: More information**
>
> For more information, see the EDB documentation for SQL Profiler.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
