---
title: EDB Postgres AI for ClickHouse® compatibility
description: Platform, storage, and integration compatibility for EDB Postgres AI for ClickHouse 26.8.
product: EDB Postgres AI for ClickHouse
version: "26.8"
url: https://www.enterprisedb.com/docs/clickhouse/latest/overview/compatibility/
lastModified: 2026-11-02T13:02:55+01:00
---

# EDB Postgres AI for ClickHouse® compatibility

### Platform compatibility

- RHEL 8, 9, and 10, and Rocky Linux 9 and 10, on x86\_64, aarch64, and ppc64le.
- Debian 13 (trixie) on amd64, arm64, and ppc64el.

### System requirements

Minimum recommended hardware per node:

|         | Single-node             | Cluster node            |
| ------- | ----------------------- | ----------------------- |
| CPU     | 16 cores                | 16 cores                |
| RAM     | 128 GB (8 GB per core)  | 128 GB (8 GB per core)  |
| Storage | 100 GB (NVMe preferred) | 100 GB (NVMe preferred) |

For production sizing guidance, see the [ClickHouse sizing and hardware recommendations](https://clickhouse.com/docs/guides/sizing-and-hardware-recommendations).

### WarehousePG

- WarehousePG 6.x or later.

### pg\_stat\_ch

These are the operating systems of the Postgres host, independent of the platform requirements for ClickHouse® itself.

| Platform             | Package format | Architectures | Postgres distributions                                                         | Postgres versions |
| -------------------- | -------------- | ------------- | ------------------------------------------------------------------------------ | ----------------- |
| Rocky Linux 9        | RPM            | x86-64, arm64 | Community Postgres, EDB Postgres Extended Server, EDB Postgres Advanced Server | 16, 17, 18        |
| Debian 12 (bookworm) | DEB            | amd64, arm64  | Community Postgres                                                             | 16, 17, 18        |
| Debian 12 (bookworm) | DEB            | amd64, arm64  | EDB Postgres Extended Server, EDB Postgres Advanced Server                     | 16, 17            |
| Debian 13 (trixie)   | DEB            | amd64, arm64  | Community Postgres                                                             | 16, 17, 18        |

EDB publishes no EDB Postgres Advanced Server or EDB Postgres Extended Server packages for Debian 13. See [Monitoring Postgres with pg\_stat\_ch](https://www.enterprisedb.com/docs/clickhouse/latest/monitoring_postgres/).

### pg\_clickhouse

These are the operating systems of the Postgres host, independent of the platform requirements for ClickHouse itself.

| Platform             | Package format | Architectures | Postgres distributions                                                         | Postgres versions |
| -------------------- | -------------- | ------------- | ------------------------------------------------------------------------------ | ----------------- |
| Rocky Linux 9        | RPM            | x86-64, arm64 | Community Postgres, EDB Postgres Extended Server, EDB Postgres Advanced Server | 16, 17, 18        |
| Debian 12 (bookworm) | DEB            | amd64, arm64  | Community Postgres, EDB Postgres Extended Server, EDB Postgres Advanced Server | 16, 17, 18        |
| Debian 13 (trixie)   | DEB            | amd64, arm64  | Community Postgres                                                             | 16, 17, 18        |

EDB publishes no EDB Postgres Advanced Server or EDB Postgres Extended Server packages for Debian 13. See [Querying ClickHouse from Postgres with pg\_clickhouse](https://www.enterprisedb.com/docs/clickhouse/latest/querying_from_postgres/).

### Apache Iceberg®

| Iceberg format version | Read | Write |
| ---------------------- | ---- | ----- |
| v1                     | Yes  | No    |
| v2 (position deletes)  | Yes  | No    |
| v2 (equality deletes)  | Yes  | No    |
| v3 (deletion vectors)  | No   | No    |

Write support for Iceberg isn't yet available. See [Known issues](https://www.enterprisedb.com/docs/clickhouse/latest/overview/known_issues/).

### Object storage

| Provider           | Table engines                                 |
| ------------------ | --------------------------------------------- |
| Amazon S3          | `IcebergS3`, `DeltaLake`, `S3`                |
| Azure Blob Storage | `IcebergAzureBlobStorage`, `AzureBlobStorage` |
| HDFS               | `IcebergHDFS`, `HDFS`                         |
| Local filesystem   | `IcebergLocal`, `File`                        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
