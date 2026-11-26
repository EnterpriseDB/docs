---
title: WarehousePG Backup and Restore
description: Use WarehousePG Backup and Restore (whpg-backup) to create and restore logical backups of WarehousePG clusters in parallel, with optional Amazon S3 support.
product: WarehousePG Backup and Restore
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/
lastModified: 2026-11-03T13:45:29Z
---

# WarehousePG Backup and Restore

Use WarehousePG Backup and Restore (`whpg-backup`) to create and restore logical backups of your WarehousePG tables in parallel. By default, backups are written to local disk on the coordinator and segment hosts, though you can consolidate them in a shared directory or write them directly to S3-compatible storage or a Dell PowerProtect Data Domain appliance. `whpg-backup` writes the metadata and DDL for a backup to the coordinator host, while each segment writes its own table data to CSV files, so backup and restore performance scales with your cluster.

## Key capabilities

- Parallel backup and restore across the coordinator and all segment hosts
- Full database backups, plus [incremental backups](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/incremental/) that include every heap table but back up append-optimized tables only if they changed
- [Filtering](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/using/#filtering-backups-and-restores) backups and restores by schema, table, or leaf partition
- [Email notifications](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/using/#setting-up-email-alerts) when a backup or restore completes
- Backing up directly to [Amazon S3 or S3-compatible storage](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/s3-plugin/)
- Backing up directly to a [Dell PowerProtect Data Domain appliance over DD Boost](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/ddboost-plugin/)

* [Release notes](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/release_notes/): Release notes provide information on what's new in each release of WarehousePG Backup and Restore.
* [Overview](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/overview/): Learn about the architecture, compatibility, and known issues for WarehousePG Backup and Restore.
* [Installing and upgrading](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/installing/): Learn how to install and upgrade the gpbackup and gprestore utilities on your WarehousePG cluster.
* [Backing up and restoring](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/using/): Back up and restore WarehousePG tables with gpbackup and gprestore, including full backups, filtering, email notifications, and incremental backups.
* [Creating incremental backups](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/incremental/): Create and restore incremental backups of append-optimized tables with gpbackup and gprestore.
* [Using the S3 storage plugin](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/s3-plugin/): Configure gpbackup and gprestore to back up WarehousePG tables directly to Amazon S3 or an S3-compatible storage server.
* [Backing up to Dell Data Domain](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/ddboost-plugin/): Configure gpbackup and gprestore to back up and restore WarehousePG tables using a Dell PowerProtect Data Domain appliance over DD Boost.
* [Reference](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/reference/): The complete reference to gpbackup and gprestore commands.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
