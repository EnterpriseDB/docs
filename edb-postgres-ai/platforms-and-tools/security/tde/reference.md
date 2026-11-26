---
title: Reference
description: Reference material for TDE, including commands affected by TDE, initdb, pg_upgrade, WAL file, and backup file options, limitations, and how to verify TDE is enabled.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/
lastModified: 2026-11-02T10:34:59+01:00
---

# Reference

Reference material for TDE, including commands affected by TDE, `initdb`, `pg_upgrade`, WAL file, and backup file options, limitations, and how to verify TDE is enabled.

When TDE is enabled, some Postgres commands have TDE-specific options or read TDE settings from environment variables or configuration files:

- [initdb](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/)
- [pg\_upgrade](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/pg_upgrade_arguments/)
- [pg\_waldump](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/wal_file_options/#pg_waldump)
- [pg\_resetwal](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/wal_file_options/#pg_resetwal)
- [pg\_verifybackup](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/backup_file_options/#pg_verifybackup)
- [pg\_rewind](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/backup_file_options/#pg_rewind)

* [initdb TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/): Learn about the initdb options required to initialize a TDE-encrypted database.
* [pg\_upgrade TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/pg_upgrade_arguments/): Learn about the pg\_upgrade options for upgrading TDE-encrypted clusters.
* [WAL file options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/wal_file_options/): Learn about the pg\_waldump and pg\_resetwal options for TDE-encrypted WAL files.
* [Backup file options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/backup_file_options/): Learn about the pg\_verifybackup and pg\_rewind options for TDE-encrypted backups.
* [Limitations](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/limitations/): Learn about TDE limitations.
* [Verifying TDE](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/verifying_tde/): Verify TDE is enabled after creating a database server.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
