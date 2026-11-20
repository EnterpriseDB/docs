---
title: Limitations
description: Learn about TDE limitations.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/limitations/
lastModified: 2026-11-02T10:46:12+01:00
---

# Limitations

## `FILE_COPY` strategy with `CREATE DATABASE`

If transparent data encryption is enabled, you can't use the `FILE_COPY` strategy in the `strategy` parameter with `CREATE DATABASE`.

See the [PostgreSQL CREATE DATABASE documentation](https://www.postgresql.org/docs/current/sql-createdatabase.html) for more information.

## EDB\*Loader direct path loads

When TDE is enabled, EDB\*Loader doesn't support the `DIRECT=TRUE` option and returns an error. See [Running a direct path load](https://www.enterprisedb.com/docs/epas/latest/database_administration/02_edb_loader/invoking_edb_loader/direct_path_load/) for details.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
