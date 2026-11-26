---
title: Installing and upgrading WarehousePG Enterprise Manager
description: Learn how to install and upgrade WarehousePG Enterprise Manager.
product: WarehousePG Enterprise Manager
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/
lastModified: 2026-11-24T14:37:52Z
---

# Installing and upgrading WarehousePG Enterprise Manager

Install WarehousePG Enterprise Manager (WEM) to monitor and manage a WarehousePG (WHPG) cluster. See [Architecture](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/overview/architecture/) for an overview of WEM's components.

## Choosing a deployment topology

Before you start, decide where ClickHouse and WEM run relative to your WHPG cluster. This choice determines your installation steps and settings.

- **WEM and ClickHouse within the WHPG cluster:** typically on the standby coordinator, or the coordinator if your cluster doesn't have one. This is the simplest topology for a single WHPG cluster. That node must run RHEL 8 or RHEL 9, WEM doesn't support RHEL 7 even where WHPG 6.x does.
- **WEM and ClickHouse on a dedicated host, outside the cluster:** keeps observability components isolated from the cluster's own nodes.

ClickHouse doesn't have to run on either host WEM does. You can instead point WEM at an existing ClickHouse instance you already manage elsewhere, as long as it's reachable from every cluster node's OTel Collector or gateway collector. See [Installing ClickHouse](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/observability-stack/) for details.

Regardless of topology, install the gateway collector only when multiple systems or clusters send observability data to the same ClickHouse instance. A single WHPG cluster sending data directly to ClickHouse doesn't need one.

The installation process consists of the following steps:

1. Verify the [prerequisites](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/prerequisites/).
2. [Install ClickHouse, and optionally PostgreSQL](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/observability-stack/), the storage backends for historical metrics, log data, and WEM's own application state.
3. Optionally, [install the gateway collector](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/collector/), a centralized OpenTelemetry Protocol (OTLP) ingestion endpoint, if multiple systems or clusters send observability data to the same ClickHouse instance.
4. [Install and configure WEM](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/wem/) on your dedicated host.
5. [Install the host agent](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/host-agent/) on every cluster node to enable privileged operations, such as HBA editing, and to collect host metrics and logs.
6. Optionally, [install the live query plan extension](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/live-query-plan/) on your WHPG cluster to watch running queries.

If you're upgrading an existing installation, see [Upgrading](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/upgrading/).

- [Prerequisites](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/prerequisites/): Understand the prerequisites before installing the WarehousePG Observability components.
- [Installing ClickHouse and PostgreSQL](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/observability-stack/): Install and configure ClickHouse, and optionally PostgreSQL, the storage backends WEM uses for metrics, logs, and application state.
- [Installing the gateway collector](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/collector/): Install and configure the optional gateway collector for centralized OTLP ingestion into ClickHouse.
- [Installing WEM](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/wem/): Learn how to install the WarehousePG Enterprise Manager service.
- [Installing the host agent and OTel Collector](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/host-agent/): Install and configure the acp-host-agent and OTel Collector services on every WarehousePG cluster node.
- [Installing the live query plan extension](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/live-query-plan/): Install and enable the whpg\_live\_query\_plan extension on your WarehousePG cluster to use the live query plan in WEM.
- [Upgrading](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/upgrading/): Learn how to upgrade WEM and its supporting components to a new version.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
