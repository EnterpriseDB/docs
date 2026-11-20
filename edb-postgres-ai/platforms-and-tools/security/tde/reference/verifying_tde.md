---
title: Verifying TDE is enabled
description: Verify TDE is enabled after creating a database server.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/verifying_tde/
lastModified: 2026-11-02T10:46:12+01:00
---

# Verifying TDE is enabled

You can find out whether TDE is present on a server by querying the `data_encryption_version` column returned by the `pg_control_init` function.

A value of 0 means TDE isn't enabled. Any nonzero value reflects the version of TDE in use. Currently, when TDE is enabled, this value is 1.

```sql
select data_encryption_version from pg_control_init();
```

```output title="Output"
 data_encryption_version
-------------------------
                       1
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
