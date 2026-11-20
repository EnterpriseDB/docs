---
title: Enabling monitoring
description: Learn about monitoring external databases with Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/
lastModified: 2026-03-17T01:01:27Z
---

# Enabling monitoring

## On HM-managed database clusters

Since [Hybrid Manager (HM)-managed database clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/hm_terminology/#hm-managed-clusters) are created in the same environment as HM, their resources are already accessible. Therefore, these clusters are monitored by default, and monitoring starts as soon as their deployment is finished.

## On external database clusters

[External database clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/hm_terminology/#external-clusters) are either managed by a cloud service provider (CSP) or by you. For this reason, additional steps are required to create a connection between your database cluster and your HM instance.

There are two types of external databases that you can monitor:

- **Monitoring self-managed deployments**

  To [enable monitoring on self-managed deployments](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/), you must install the agent and register external self-managed databases.

  **Examples:** self-managed Postgres databases you have on bare metal, or those hosted in the cloud that aren't managed by the CSP (like a Postgres database on an EC2 instance).

- **Monitoring CSP-managed databases**

  To [enable monitoring on CSP-managed databases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_ext_csp/), connect the database to HM.

  **Examples:** Amazon RDS.

> **Note**
>
> You can also register databases with the agent to [assess them for migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/).

- [Self-managed deployments](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/): Learn about monitoring self-managed external Postgres instances with Hybrid Manager.
- [External cloud databases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_ext_csp/): Learn how to monitor cloud service provider-managed databases like AWS RDS with Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
