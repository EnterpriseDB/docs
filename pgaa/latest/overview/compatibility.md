---
title: Analytics Accelerator compatibility
description: Compatibility of Analytics Accelerator.
product: EDB Postgres AI Analytics Accelerator
version: "1.12"
url: https://www.enterprisedb.com/docs/pgaa/latest/overview/compatibility/
lastModified: 2026-11-18T10:56:45Z
---

# Analytics Accelerator compatibility

### Postgres compatibility

| Postgres distribution                   | Postgres version |
| :-------------------------------------- | :--------------- |
| **Postgres (PG)**                       | 16, 17, 18       |
| **EDB Postgres Extended Server (PGE)**  | 16, 17, 18       |
| **EDB Postgres Advanced Server (EPAS)** | 16, 17, 18       |

### Platform compatibility

Debian 11/12 or Ubuntu 22/24 on amd64 architectures, and RHEL 8/9 on both amd64 and arm64.

### Spark

- Apache Spark version 3.5.4 or later.
- Iceberg Spark Library version 1.9.2 or later

### PGD

PGD version 6.1 or later.

### WarehousePG

- WarehousePG 7.4 or later.
- whpg-backup version 1.33 or later.

### Supported storage formats and providers

| Data Format | Operation                      | Object storage                                | Engine support                               | WarehousePG                    |
| ----------- | ------------------------------ | --------------------------------------------- | -------------------------------------------- | ------------------------------ |
| Iceberg     | Read                           | Local, S3, GCP, Azure (via storage locations) | Seafowl                                      | Yes                            |
| Iceberg     | Read                           | Iceberg REST catalog                          | Seafowl  <br /> Spark                        | Yes                            |
| Delta Lake  | Read                           | Local, S3, GCP, Azure (via storage locations) | Seafowl                                      | Yes                            |
| Parquet     | Read                           | Local, S3, GCP, Azure (via storage locations) | Seafowl                                      | Yes                            |
| Parquet     | Read                           | Local, S3 (via storage locations)             | Seafowl <br />  Spark <br />  Spark + RAPIDS | Seafowl, Spark, Spark + RAPIDS |
| Iceberg     | Write (via `CTAS` or `INSERT`) | Local, S3, GCP, Azure (via storage locations) | Postgres                                     | Yes                            |
| Iceberg     | Write (via `CTAS` or `INSERT`) | Iceberg REST catalog                          | Postgres                                     | Yes                            |
| Delta Lake  | Write (via `CTAS` or `INSERT`) | Local, S3, GCP, Azure (via storage locations) | Postgres                                     | Yes                            |
| Iceberg     | Write (via native replication) | Local, S3, GCP, Azure (via storage locations) | Postgres                                     | No                             |
| Iceberg     | Write (via native replication) | Iceberg REST catalog                          | Postgres                                     | No                             |
| Delta Lake  | Write (via native replication) | Local, S3, GCP, Azure (via storage locations) | Postgres                                     | No                             |
| Iceberg     | Write (using PGD)              | Local, S3, GCP, Azure (via storage locations) | Seafowl                                      | No                             |
| Delta Lake  | Write (using PGD)              | Local, S3, GCP, Azure (via storage locations) | Seafowl                                      | No                             |
| Iceberg     | Write (using PGD)              | Iceberg REST catalog                          | Postgres engine via CompatScan               | No                             |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
