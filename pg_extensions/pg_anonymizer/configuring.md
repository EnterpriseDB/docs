---
title: Configuring postgresql_anonymizer
product: pg_anonymizer
url: https://www.enterprisedb.com/docs/pg_extensions/pg_anonymizer/configuring/
lastModified: 2026-02-25T17:32:05+05:30
---

# Configuring postgresql\_anonymizer

1. In `postgresql.conf`, add `anon` to the `shared_preload_libraries` parameter:

   ```ini
   shared_preload_libraries = '$libdir/anon'
   ```

   If `shared_preload_libraries` has other extensions, then you can add `anon` to the list. The order doesn't matter.

2. Restart Postgres.

3. Create the `postgresql_anonymizer` extension in the database:

   ```sql
   CREATE EXTENSION anon;
   ```

After enabling the extension, you can perform additional configuration. See the [`postgresql_anonymizer` official documentation](https://postgresql-anonymizer.readthedocs.io/en/stable/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
