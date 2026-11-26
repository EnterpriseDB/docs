---
title: Additional extensions
description: Open source extensions for WarehousePG that require a separate package install on each host.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/
lastModified: 2026-11-24T14:37:52Z
---

# Additional extensions

These extensions require a separate package install on each host in your WarehousePG cluster before you can enable them, and availability varies by version.

| Extension                                                                                                                                  | Description                                                                                                                                                 |  6  |  7  |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | :-: | :-: |
| [AIDB](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/aidb/)                                    | Provides AI model, pipeline, knowledge base, and agent capabilities inside WarehousePG.                                                                     |  —  |  ✓  |
| [MADlib](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/madlib/)                                               | Provides machine learning routines for structured and unstructured data.                                                                                    |  ✓  |  ✓  |
| [PGAA](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgaa/)                                    | Enables distributed analytical queries against object storage directly from WarehousePG, with support for Parquet, Delta Lake, and Iceberg formats.         |  —  |  ✓  |
| [pgAudit](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgaudit/)                              | Provides detailed session and object audit logging for WarehousePG.                                                                                         |  ✓  |  ✓  |
| [PGFS](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgfs/)                                    | Provides the storage layer for object storage connectivity, including credential management for S3, GCS, and Azure. Required dependency of PGAA.            |  —  |  ✓  |
| [PostGIS](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/postGIS/)                                             | Provides spatial and geographic data types and functions for WarehousePG.                                                                                   |  ✓  |  ✓  |
| [postgresql-hll](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/postgresql-hll/)                | Provides native HyperLogLog data types and relation functions, operators, and aggregates.                                                                   |  ✓  |  ✓  |
| [user\_profile](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/user_profile/)                   | Provides password quality checking and policy definition for WarehousePG.                                                                                   |  ✓  |  ✓  |
| [Vector Plus](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/vector-plus/)                      | Provides the `ivfplus` index access method for vector similarity search in WarehousePG, built on pgvector.                                                  |  —  |  ✓  |
| [whpg-anonymizer](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-anonymizer/)              | Provides dynamic data masking and static data anonymization for WarehousePG.                                                                                |  —  |  ✓  |
| [whpg-cjk](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-cjk/)                            | Provides full text search for Korean, Japanese, and Chinese based on morphological analysis.                                                                |  —  |  ✓  |
| [whpg-cron](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-cron/)                          | Provides a cron-based job scheduler for running periodic SQL commands directly from WarehousePG.                                                            |  —  |  ✓  |
| [whpg-diskquota](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/diskquota/)                     | Limits the amount of disk space used by schemas, roles, tablespaces, databases, or the cluster.                                                             |  ✓  |  ✓  |
| [whpg\_fdw](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg_fdw/)                           | Provides a foreign data wrapper (FDW) for accessing data stored in a remote WarehousePG cluster.                                                            |  ✓  |  ✓  |
| [whpg\_live\_query\_plan](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-live-query-plan/) | Provides the live execution plan, processes, and disk I/O of a running query, which WarehousePG Enterprise Manager uses to show live query plans.           |  ✓  |  ✓  |
| [whpg-partman](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-partman/)                    | Automates the creation, maintenance, and retention of time-based and serial ID-based partition sets.                                                        |  —  |  ✓  |
| [whpg-pgsphere](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgsphere/)                       | Provides spherical data types and operators for astronomical data.                                                                                          |  —  |  ✓  |
| [whpg-q3c](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-q3c/)                            | Provides spherical indexing for astronomical catalogues.                                                                                                    |  —  |  ✓  |
| [whpg-utl-raw](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg_utl_raw/)                    | Provides Oracle-compatible `UTL_RAW` functions for manipulating the `RAW` binary data type.                                                                 |  ✓  |  ✓  |
| [whpg-vector](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgvector/)                         | Provides vector similarity search capabilities for WarehousePG that enable searching, storing, and querying machine-learning-generated embeddings at scale. |  —  |  ✓  |

## Downloading and installing an extension

Install the EDB extension package on each host in your WarehousePG cluster.

1. From the coordinator, download the package from the EDB repository:

   ### RHEL 8, 9

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   export EDB_REPO=gpsupp
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_REPO/setup.rpm.sh" | sudo -E bash
   sudo dnf download edb-whpg<major_version>-<extension_name>
   ```

   ### RHEL 7

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   export EDB_REPO=gpsupp
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_REPO/setup.rpm.sh" | sudo -E bash
   sudo yumdownloader edb-whpg<major_version>-<extension_name>
   ```

   `<your-token>` is the token you received when you registered for the EDB subscription, `<major_version>` is your WarehousePG version, 6 or 7, and `<extension_name>` is the name of the extension you want to install.

2. Create a file `all_hosts` on your WarehousePG coordinator, listing all hosts in the cluster. For example:

   ```ini
   cdw
   scdw
   sdw1
   sdw2
   sdw3
   ```

3. From the coordinator, use the `gpsync` utility to transfer the package to all hosts in the cluster, then use the `gpssh` utility to install the package:

   ### RHEL 8, 9

   ```bash
   gpsync -f all_hosts <package-name> =:/tmp
   gpssh -f all_hosts -e 'sudo dnf install -y /tmp/<package-name>'
   ```

   ### RHEL 7

   ```bash
   gpsync -f all_hosts <package-name> =:/tmp
   gpssh -f all_hosts -e 'sudo yum install -y /tmp/<package-name>'
   ```

   Where `<package-name>` is the name of the package file you downloaded.

## Upgrading an extension

Upgrade the EDB extension package on each host in your WarehousePG cluster.

1. From the coordinator, download the new package version from the EDB repository:

   ### RHEL 8, 9

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   export EDB_REPO=gpsupp
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_REPO/setup.rpm.sh" | sudo -E bash
   sudo dnf download edb-whpg<major_version>-<extension_name>
   ```

   ### RHEL 7

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   export EDB_REPO=gpsupp
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_REPO/setup.rpm.sh" | sudo -E bash
   sudo yumdownloader edb-whpg<major_version>-<extension_name>
   ```

   `<your-token>` is the token you received when you registered for the EDB subscription, `<major_version>` is your WarehousePG version, 6 or 7, and `<extension_name>` is the name of the extension you want to upgrade.

2. On your WarehousePG coordinator, use the same `all_hosts` file you created when you installed the extension, listing all hosts in the cluster.

3. From the coordinator, use the `gpsync` utility to transfer the new package to all hosts in the cluster, then use the `gpssh` utility to upgrade the package:

   ### RHEL 8, 9

   ```bash
   gpsync -f all_hosts <package-name> =:/tmp
   gpssh -f all_hosts -e 'sudo dnf upgrade -y /tmp/<package-name>'
   ```

   ### RHEL 7

   ```bash
   gpsync -f all_hosts <package-name> =:/tmp
   gpssh -f all_hosts -e 'sudo yum upgrade -y /tmp/<package-name>'
   ```

   Where `<package-name>` is the name of the new package file you downloaded.

Once the package is upgraded on every host, follow the extension's own documentation to complete the upgrade, such as updating the extension in each database where it's registered.

- [AIDB](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/aidb/): Install AIDB on WarehousePG 7, and learn which AIDB features work differently, work with limits, or aren't supported there.
- [PGAA](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgaa/): Query data in object storage directly from WarehousePG using the Postgres Analytics Accelerator extension.
- [pgAudit](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgaudit/): Learn about the pgaudit extension for WarehousePG.
- [PGFS](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgfs/): Manage object storage connectivity and credentials in WarehousePG using the Postgres File System extension.
- [postgresql-hll](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/postgresql-hll/): Provides native HyperLogLog data types and relation functions, operators, and aggregates.
- [user\_profile](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/user_profile/): Manage password policies and account security in WarehousePG with the user\_profile extension.
- [Vector Plus](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/vector-plus/): Build and query ivfplus vector indexes in WarehousePG using the EDB Vector Plus extension.
- [whpg-anonymizer](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-anonymizer/): Learn how to implement dynamic data masking and anonymization in WarehousePG.
- [whpg-cjk](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-cjk/): Search Korean, Japanese, and Chinese text in WarehousePG with morphological analysis using the whpg-cjk extension.
- [whpg-cron](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-cron/): Learn how to schedule periodic SQL jobs in WarehousePG using the whpg-cron extension.
- [whpg-diskquota](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/diskquota/): Learn how to limit disk space usage in WarehousePG by schema, role, tablespace, database, or cluster with the whpg-diskquota extension.
- [whpg\_fdw](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg_fdw/): Learn about the whpg\_fdw extension for WarehousePG.
- [whpg\_live\_query\_plan](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-live-query-plan/): Watch the execution plan, processes, and disk I/O of a running query in WarehousePG with the whpg\_live\_query\_plan extension.
- [whpg-partman](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-partman/): Learn how to automate time-based and serial ID partition management in WarehousePG using the whpg-partman extension.
- [whpg-pgsphere](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgsphere/): Store, query, and index spherical data, such as astronomical coordinates, in WarehousePG with the whpg-pgsphere extension.
- [whpg-q3c](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-q3c/): Learn how to use the whpg-q3c extension for spherical indexing of astronomical catalogs in WarehousePG.
- [whpg-utl-raw](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg_utl_raw/): Learn about the whpg-utl-raw extension for WarehousePG.
- [whpg-vector](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgvector/): Learn how to store, query, and index embeddings in WarehousePG using the whpg-vector extension.
- [whpg-madlib](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/madlib/): Run machine learning, deep learning, and statistical workloads inside WarehousePG with the whpg-madlib extension.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
