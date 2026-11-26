---
title: WarehousePG Disaster Recovery
description: Use WarehousePG Disaster Recovery to protect WarehousePG clusters with physical backups, point-in-time recovery, and warm standby.
product: WarehousePG Disaster Recovery
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/
lastModified: 2026-10-02T11:11:03+01:00
---

# WarehousePG Disaster Recovery

WarehousePG Disaster Recovery (`whpg-dr`) is a command-line tool for protecting WarehousePG (WHPG) clusters against data loss and extended outages. It takes physical backups of your cluster's coordinator and segment data directories, ships write-ahead log (WAL) files to a secondary storage repository, and lets you restore the cluster to any restore point on the same infrastructure or different infrastructure.

## Key capabilities

- Three DR modes:
  - [Cold DR](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/performing-disaster-recovery/cold-dr/) for on-demand restore at failover time
  - [Warm DR](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/performing-disaster-recovery/warm-dr/) for a continuously current standby with low RTO
  - [Point-in-time recovery](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/performing-disaster-recovery/pitr/) for restoring to a specific past state
- Back up the entire cluster in parallel to a POSIX-compliant filesystem such as NFS, or S3-compatible storage
- Restore to any point in time, whether to recover from data loss or inspect historical cluster state
- Advance an already-restored cluster to a later restore point without a full re-restore, enabling warm DR with low RTO
- Promote a restored cluster to a writable primary in a single command

## How WarehousePG Disaster Recovery works

WarehousePG Disaster Recovery wraps [Barman](https://www.enterprisedb.com/docs/supported-open-source/barman/) as its backup and restore engine, giving you a purpose-built CLI for WarehousePG while Barman handles the low-level mechanics. Each segment has its own Barman process, so backups and restores run in parallel across all segments automatically.

The storage repository, an NFS share or an S3-compatible object store, connects the primary and DR sites. `whpg-dr` requires no persistent link between the two clusters other than shared access to the repository. See [Understanding disaster recovery](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/overview/concepts/) for a deeper explanation of how these pieces fit together.

## DR modes

WarehousePG Disaster Recovery supports three operational modes:

- **[Cold DR](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/performing-disaster-recovery/cold-dr/):** The DR cluster doesn't need to exist until a failure occurs. Backups and WAL sit in storage, and you restore on demand. Recovery Time Objective (RTO) is higher than warm DR because provisioning and a full restore are required at failover time, but infrastructure cost is lower.
- **[PITR (point-in-time recovery)](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/performing-disaster-recovery/pitr/):** Restores the cluster to any restore point in storage, regardless of whether a DR cluster currently exists. Use it to recover from data corruption or to inspect the database as it was at a specific past point.
- **[Warm DR](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/performing-disaster-recovery/warm-dr/):** A pre-provisioned DR cluster keeps pace with the primary by replaying WAL at a regular interval. The cluster remains in recovery mode (not queryable) until you promote it. RTO is low because the data is mostly current.

* [Release notes](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/release_notes/): Release notes provide information on what's new in each release of WarehousePG Disaster Recovery.
* [Overview](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/overview/): Learn about the architecture, DR modes, and key concepts for WarehousePG Disaster Recovery.
* [Setting up the primary cluster](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/setting-up-primary/): Set up the storage repository and install and configure whpg-dr on the primary WarehousePG cluster.
* [Setting up the DR cluster](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/configuring-dr/): Create a restore configuration YAML file and run whpg-dr configure restore to prepare the DR cluster for WAL replay.
* [Choosing a recovery method](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/performing-disaster-recovery/): Choose a recovery scenario — cold DR, point-in-time recovery, or warm DR — and follow the end-to-end procedure.
* [Troubleshooting](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/troubleshooting/): Diagnose and resolve common issues with whpg-dr backup, restore, and configuration.
* [Reference](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/reference/): Reference documentation for whpg-dr commands and configuration schemas.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
