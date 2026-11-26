---
title: Data security and sovereignty
description: Learn about data security and sovereignty for monitoring with Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/data_sovereignity/
lastModified: 2026-11-05T19:23:14Z
---

# Data security and sovereignty

When you deploy the agent to monitor your external databases with Hybrid Manager (HM), you retain control over the data collected for monitoring and assessment, aligning with your security and compliance requirements.

## Limited data collection

The agent gathers the following data:

- General database metadata to display metrics in the **Estate** view.

For Postgres databases:

- Database logs and metrics to provide observability features via the [HM console](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/monitoring_console/) and [Grafana](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/).

For Oracle databases:

- Database data to generate the automatic assessment of migration complexity and level of effort displayed in **Estate** section in the **Migrations** tab.

- Schema DDL for eventual retrieval and use by Migration Portal if you decide to use that tooling for schema conversion.

> **Note**
>
> Currently, migration assessment data and schema DDL data are collected only for Oracle databases. Later releases will also gather migration assessment and schema DDL data for external Postgres and cloud service provider (CSP) databases.

We don't collect data beyond what's strictly necessary for these purposes.

## Data storage location

Your collected data stays within your chosen environment. HM respects your data sovereignty. For example, if you deployed HM on your own premises, all collected data from your monitored databases remains within your on-premises infrastructure. If your HM instance is deployed on a cloud platform like EKS, the collected data will reside securely in your specific cloud environment.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
