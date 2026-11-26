---
title: Supported platforms
description: Provides information for determining the platform support for WarehousePG Enterprise Manager.
product: WarehousePG Enterprise Manager
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/overview/supported_platforms/
lastModified: 2026-11-24T14:37:52Z
---

# Supported platforms

Check which WarehousePG (WHPG) versions, operating systems, host agent versions, and WHPG components WarehousePG Enterprise Manager (WEM) supports before you install or upgrade.

## Supported WarehousePG versions

WEM is compatible with the following versions of WHPG:

| WHPG version | Supported RHEL versions |
| ------------ | ----------------------- |
| 6.x          | RHEL 7, RHEL 8, RHEL 9  |
| 7.x          | RHEL 8, RHEL 9          |

## Supported platforms

| Component     | Supported operating systems                                       |
| ------------- | ----------------------------------------------------------------- |
| WEM           | RHEL 8, RHEL 9, RHEL 10, Debian 13                                |
| WEM (ppc64le) | RHEL 8, RHEL 9, RHEL 10                                           |
| ClickHouse    | RHEL 8, RHEL 9, RHEL 10, Rocky Linux 9, Rocky Linux 10, Debian 13 |

WEM requires ClickHouse for metrics and log storage. You can deploy ClickHouse inside your WHPG cluster, on the coordinator or standby coordinator, or on a separate host outside the cluster. See [ClickHouse compatibility](https://www.enterprisedb.com/docs/clickhouse/latest/overview/compatibility/) for supported platforms and architectures.

> **Note**
>
> Neither WEM nor ClickHouse supports RHEL 7. If you're running WHPG 6.x on RHEL 7, you can't deploy WEM or ClickHouse on a node inside that cluster. Deploy WEM and ClickHouse on a separate host running a supported RHEL version instead. WEM can still monitor the RHEL 7 cluster remotely.

> **Note**
>
> On Debian 13, run WEM and ClickHouse on a dedicated host outside the cluster. The cluster nodes must still run a RHEL-based operating system, because WHPG doesn't support Debian, and the host agent installs on those nodes.

## Host agent compatibility

WEM 1.6 requires `acp-host-agent` 1.2.0 or later on every cluster node, so upgrade both the host agent and WEM. See [Installing the host agent](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/host-agent/).

## WarehousePG component compatibility

WEM works with the following WarehousePG components.

### Backup and restore

WEM uses [WarehousePG Backup and Restore](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/) (`whpg-backup`) 1.34 or later on every cluster node. Version 1.33 can still take and schedule backups, but it can't list, restore, or delete them from WEM. See [Securing backups](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/protecting-data/backups/).

### Disaster recovery

WEM manages disaster recovery with [WarehousePG Disaster Recovery](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/) (`whpg-dr`) for WHPG 6.x and 7.x. See [Compatibility for WarehousePG Disaster Recovery](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/overview/compatibility/) for the supported operating systems and storage repositories, and [Managing disaster recovery](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/protecting-data/safeguard/) for how to manage it in WEM.

### FlowServer

WEM manages FlowServer jobs for WHPG 6.x and 7.x. FlowServer must run on the coordinator. See [Running FlowServer jobs](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/flowserver-jobs/).

| WHPG version | FlowServer package  | Supported version |
| ------------ | ------------------- | ----------------- |
| 6.x          | `whpg6-flow-server` | 1.1.0             |
| 7.x          | `whpg7-flow-server` | 1.1.1             |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
