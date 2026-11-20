---
title: Adding usage reporting for Hybrid Manager-monitored databases
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/usage_reporting/
lastModified: 2026-07-23T17:52:58+02:00
---

# Adding usage reporting for Hybrid Manager-monitored databases

You can complement your monitoring efforts by providing EDB with valuable insights into product usage, all from a unified agent deployment. When usage reporting is enabled, the agent collects basic usage data to enable EDB to better understand our customers. It sends data to EDB only if you enable it.

> **Note: Not using Hybrid Manager (HM)?**
>
> If you aren't using HM and need to configure usage reporting for a stand-alone database, see [Enabling usage reporting for stand-alone databases](https://www.enterprisedb.com/docs/tools/agent/stand_alone/).

## In internet-connected environments

1. In the [agent configuration example](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/#prepare-a-configuration-file), the `beacon_agent.yaml` file already has `general.metrics.usage.output.file.enabled` set to `true`. This setting allows the agent to save a local copy of the usage data in the file `beacon_usage.json`.

2. Review this file to ensure that the information is accurate and doesn't contain any data you don't want to share with EDB.

3. Enable reporting to EDB by setting `general.metrics.usage.output.http.enabled` to `true`.

## In air-gapped environments

1. In the [agent configuration example](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/#prepare-a-configuration-file), the `beacon_agent.yaml` file already has `general.metrics.usage.output.file.enabled` set to `true`. This setting allows the agent to save a local copy of the usage data in the file `beacon_usage.json`.

2. Review this file to verify that the information is accurate and doesn't contain any data you don't want to share with EDB.

3. Copy the `beacon_usage.json` report file to a machine that has internet access.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
