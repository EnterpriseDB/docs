---
title: Working with encrypted files
description: How to work with files in an encrypted environment.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/encrypted_files/
lastModified: 2026-11-02T10:22:59+01:00
---

# Working with encrypted files

Certain Postgres utilities and operations require access to files to read data and deliver the required output.

In a TDE-enabled database server, data is encrypted and therefore not accessible without a decryption mechanism. For these utilities to be able to perform read operations on encrypted files, you must provide a decryption mechanism.

- [Backup files](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/encrypted_files/backup_files/) provides guidance on how to work with and troubleshoot any issues with backup files.

- [WAL files](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/encrypted_files/wal_files/) provides guidance on how to work with and troubleshoot any issues with WAL files.

* [Working with backup files](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/encrypted_files/backup_files/): Learn how to work with and troubleshoot encrypted backup files.
* [Working with WAL files](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/encrypted_files/wal_files/): Learn how to work with and troubleshoot encrypted WAL files.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
