---
title: Configuring pg_ivm
product: pg_ivm
url: https://www.enterprisedb.com/docs/pg_extensions/pg_ivm/configuring/
lastModified: 2026-04-03T15:51:09+05:30
---

# Configuring pg\_ivm

Configure pg\_ivm by following these steps:

1. Add pg\_ivm to the `shared_preload_libraries` parameter in your `postgresql.conf` file:

   ```ini
   shared_preload_libraries = 'pg_ivm'
   ```

   > **Note**
   >
   > If `shared_preload_libraries` has other extensions, then you can add pg\_ivm to the list. The order doesn't matter.

2. Restart Postgres server to apply the changes.

3. Create the pg\_ivm extension in your database:

   ```sql
   CREATE EXTENSION pg_ivm;
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
