---
title: Uninstalling EDB OTEL
description: Removing the EDB OTEL extension from Postgres
product: EDB OTEL
url: https://www.enterprisedb.com/docs/pg_extensions/otel/uninstalling/
lastModified: 2025-08-25T16:24:25Z
---

# Uninstalling EDB OTEL

To uninstall edb\_otel:

1. Drop the edb\_otel extension:

   ```sql
   # Connect to your database using psql
   psql -d postgres -U enterprisedb
   # Drop the extension
   DROP EXTENSION edb_otel;
   ```

2. On the server where you want to remove the extension, edit the `postgresql.conf` file. Delete the `shared_preload_libraries` parameter line.

   In Linux, remove:

   ```ini
   shared_preload_libraries = `$libdir/edb_otel`
   ```

3. To apply the changes, restart the Postgres database server.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
