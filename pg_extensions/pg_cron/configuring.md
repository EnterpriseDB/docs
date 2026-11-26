---
title: Configuring pg_cron
product: pg_cron
version: 1.6.4
url: https://www.enterprisedb.com/docs/pg_extensions/pg_cron/configuring/
lastModified: 2025-07-16T09:13:18-05:00
---

# Configuring pg\_cron

1. In `postgresql.conf`, add `pg_cron` to the `shared_preload_libraries` parameter:

   ```ini
   shared_preload_libraries = 'pg_cron'
   ```

   If `shared_preload_libraries` has other extensions, then you can add `pg_cron` to the list. The order doesn't matter.

2. Metadata tables for `pg_cron` will be created in the "postgres" database, but you can alter this with:

   ```ini
   cron.database_name = 'mydbname'
   ```

3. You can alter the timezone of pg\_cron from GMT if required:

   ```ini
   cron.timezone = 'PRC'
   ```

4. Restart Postgres.

5. Create the `pg_cron` extension in your database:

   ```shell
   CREATE EXTENSION pg_cron;
   ```

6. Grant usage to `pg_cron` as needed to allow other users to schedule and manage their own jobs:

   ```sql
   GRANT USAGE ON SCHEMA cron TO username;
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
