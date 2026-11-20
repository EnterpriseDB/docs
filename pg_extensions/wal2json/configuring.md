---
title: Configuring wal2json
product: wal2json
url: https://www.enterprisedb.com/docs/pg_extensions/wal2json/configuring/
lastModified: 2024-05-17T12:13:00-05:00
---

# Configuring wal2json

1. Add these changes to `postgresql.conf`:

   ```shell
   wal_level = logical
   ```

No other configuration steps are required.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
