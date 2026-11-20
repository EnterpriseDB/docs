---
title: Compatibility
description: Supported platforms and PostgreSQL versions for the AIDB and PGFS extensions.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/compatibility/
lastModified: 2026-11-02T11:42:05+01:00
---

# Compatibility

## AIDB

### Supported platforms

| Platform             | x86/64 | ARM64 | ppc64le              |
| -------------------- | ------ | ----- | -------------------- |
| Ubuntu 22.04 LTS     | ✓      | —     | —                    |
| Ubuntu 24.04 LTS     | ✓      | —     | —                    |
| Debian 12 (Bookworm) | ✓      | ✓     | —                    |
| RHEL 8               | ✓      | —     | —                    |
| RHEL 9               | ✓      | ✓     | ✓ (Postgres 18 only) |

SLES, earlier Debian versions, and non-Linux platforms are not currently supported.

### Supported Postgres versions

AIDB supports Postgres versions 14–18, including EDB Postgres Advanced Server, EDB Postgres Extended, and community PostgreSQL.

### Supported WarehousePG versions

AIDB supports WarehousePG 7 on RHEL 8 and RHEL 9, x86/64 only. WarehousePG 6 isn't supported.

Some AIDB features aren't supported or work differently on WarehousePG. See [AIDB on WarehousePG](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/aidb/).

## PGFS

AIDB pipelines that read from cloud storage (S3, GCS, Azure) require the PGFS extension. For platform and Postgres version compatibility, see [PGFS compatibility](https://www.enterprisedb.com/docs/pg_extensions/pgfs/compatibility/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
