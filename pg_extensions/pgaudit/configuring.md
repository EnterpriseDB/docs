---
title: Configuring pgaudit
product: pgaudit
url: https://www.enterprisedb.com/docs/pg_extensions/pgaudit/configuring/
lastModified: 2025-01-23T08:52:47-06:00
---

# Configuring pgaudit

1. In `postgresql.conf`, add `pgaudit` to the `shared_preload_libraries` parameter:

   ```ini
   shared_preload_libraries = 'pgaudit'
   ```

   If `shared_preload_libraries` has other extensions, then you can add `pgaudit` to the list. The order doesn't matter.

2. Restart Postgres.

3. Create the `pgaudit` extension in your database:

   ```shell
   CREATE EXTENSION pgaudit;
   ```

For detailed information on other configuration steps, see the official [pgaudit documentation](https://github.com/pgaudit/pgaudit).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
