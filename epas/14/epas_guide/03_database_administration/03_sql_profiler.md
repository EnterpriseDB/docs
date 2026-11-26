---
title: SQL Profiler
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/03_sql_profiler/
lastModified: 2023-06-13T16:27:35-04:00
---

# SQL Profiler

<div id="sql_profiler" class="registered_link"></div>

Inefficient SQL code is a leading cause of database performance problems. The challenge for database administrators and developers is locating and then optimizing this code in large, complex systems.

SQL Profiler helps you locate and optimize poorly running SQL code.

Specific features and benefits of SQL Profiler include:

- On-demand traces. You can capture SQL traces at any time by manually setting up your parameters and starting the trace.
- Scheduled traces. If the current time isn't convenient, you can also specify your trace parameters and schedule them to run later.
- Save traces. Execute your traces and save them for later review.
- Trace filters. Selectively filter SQL captures by database and by user, or capture every SQL statement sent by all users against all databases.
- Trace output analyzer. A graphical table lets you quickly sort and filter queries by duration or statement. A graphical or text-based `EXPLAIN` plan lays out your query paths and joins.
- Index Advisor integration. After you find your slow queries and optimize them, you can also let Index Advisor recommend the creation of underlying table indices to further improve performance.

## Installation

The following describes the installation process.

### 1. Install SQL Profiler

SQL Profiler is installed by the EDB Postgres Advanced Server installer on Windows or from the `edb-asxx-server-sqlprofiler` package along with the `edb-asxx-server` package installation, where `xx` is the EDB Postgres Advanced Server version number.

### 2. Add the SQL Profiler library

To include the SQL Profiler library in the `shared_preload_libraries` configuration parameter, modify the `postgresql.conf` parameter file for the instance.

For Linux installations, the parameter value must include:

```text
$libdir/sql-profiler
```

On Windows, the parameter value must include:

```text
$libdir\sql-profiler.dll
```

### 3. Create the SQL Profiler extension

Create the SQL Profiler extension in your database with the following command:

```sql
CREATE EXTENSION sql_profiler;
```

### 4. Stop and restart the servers

For the changes to take affect, you must stop and restart the servers. After configuring SQL Profiler, it's ready to use with all databases that reside on the server. You can take advantage of SQL Profiler functionality with EDB Postgres Enterprise Manager. For more information about Postgres Enterprise Manager, see the [PEM documentation](https://www.enterprisedb.com/docs/pem/latest/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
