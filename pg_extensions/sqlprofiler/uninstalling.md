---
title: Uninstalling SQL Profiler
product: SQL Profiler
url: https://www.enterprisedb.com/docs/pg_extensions/sqlprofiler/uninstalling/
lastModified: 2025-03-21T16:37:19-04:00
---

# Uninstalling SQL Profiler

You must uninstall SQL Profiler on each Postgres database server where you want to remove it.

To uninstall SQL Profiler:

1. Drop the `sql_profiler` extension:

   ```sql
   # Connect to your database using psql
   psql -d postgres -U enterprisedb
   # Drop the extension
   DROP EXTENSION sql_profiler;
   ```

2. Edit the `postgresql.conf` file on the server where you want to remove the extension. Delete the `shared_preload_libraries` parameter line.

   In Linux, remove:

   ```ini
   shared_preload_libraries = `$libdir/sql_profiler`
   ```

   In Windows, remove:

   ```ini
   shared_preload_libraries = `$libdir/sql_profiler.dll`
   ```

3. To apply the changes, restart the Postgres database server.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
