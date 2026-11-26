---
title: Configuring pg_textsearch
product: pg_textsearch
url: https://www.enterprisedb.com/docs/pg_extensions/pg_textsearch/configuring/
lastModified: 2026-09-30T22:23:49+05:30
---

# Configuring pg\_textsearch

`pg_textsearch` isn't relocatable. You must add it to `shared_preload_libraries` and restart the server before you can create the extension.

1. Add `pg_textsearch` to the `shared_preload_libraries` parameter, either in `postgresql.conf` or with `ALTER SYSTEM`:

   ```sql
   ALTER SYSTEM SET shared_preload_libraries = 'pg_textsearch';
   ```

   If `shared_preload_libraries` already lists other extensions, append `pg_textsearch` to the list rather than overwriting it. The order doesn't matter.

2. Restart Postgres for the change to take effect.

3. Create the `pg_textsearch` extension in your database:

   ```sql
   CREATE EXTENSION pg_textsearch;
   ```

4. Confirm the extension is installed:

   ```sql
   SELECT extname, extversion FROM pg_extension WHERE extname = 'pg_textsearch';
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
