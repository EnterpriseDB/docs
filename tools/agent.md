---
title: Agent
description: How to use the Agent to monitor and manage your EDB Postgres databases
product: Postgres tools
url: https://www.enterprisedb.com/docs/tools/agent/
lastModified: 2026-08-17T11:02:15+02:00
---

# Agent

The EDB Postgres AI agent (packaged as `beacon-agent`) is a tool that provides database observability, migration assessment and usage reporting capabilities. Whether you integrate with Hybrid Manager (HM) to access its full suite of features, or deploy it standalone for targeted benefits, the agent adapts to your environment.

## Authenticating to source databases

However you use the EDB Postgres AI agent, it needs credentials to connect to your source database. By default, this means a username and password in the connection string. If you'd rather not embed plain text passwords in the `beacon-agent` DSN string or in an environment variable, refer to [Authenticating to source databases](https://www.enterprisedb.com/docs/tools/agent/authentication/) for password-less alternatives, including Oracle Wallet, pgpass, and Postgres client certificates.

## If you are using the Hybrid Manager

Configure the EDB Postgres AI agent on self-managed deployments that you connect to the Hybrid Manager to:

- Add observability and monitoring capabilities for _Postgres_ databases through Hybrid Manager. Refer to [Monitoring self-managed deployments](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/) for more information on how to install and configure the agent to collect monitoring data for HM observability.

- Collect basic usage data of _Postgres_ databases to help EDB understand how customers are using our products and facilitate core-based licensing and entitlements. Refer to [Usage reporting for Hybrid Manager connected databases](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/usage_reporting/) for more information on how to enable usage reporting and send data to EDB.

- Perform a migration assessment for _Oracle and Postgres_ databases through the Hybrid Manager, which provides:

  - A summarized view of database schema count, core count, migration complexity, and level of effort. It is available on the [**Migrations** tab](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrations/) of the **Estate** page.

  - A [detailed view](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrations/migration_database_details_view/) with an expanded analysis of **Schemas**, a global and more detailed **Assessment**, as well as a **Migrations** hub that provides direct connections to other tools in the Console that will help you perform migrations.

- Perform automatic schema extraction for _Oracle and Postgres_ databases through the Hybrid Manager. Refer to the [Oracle to Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/) or [Postgres to Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_hm_managed/) migration guides for more information on how to install and configure the agent to collect migration-related data and assessments.

## If you have a standalone database

Configure the EDB Postgres AI agent on self-managed deployments to:

- Collect basic usage data to help EDB understand how customers are using our products and facilitate core-based licensing and entitlements. Refer to [Usage reporting for standalone databases](https://www.enterprisedb.com/docs/tools/agent/stand_alone/) for more information.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
