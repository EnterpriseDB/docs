---
title: Enabling usage reporting for standalone databases
description: Enable usage reporting with the Agent for standalone Internet-connected and air-gapped environments.
product: Postgres tools
url: https://www.enterprisedb.com/docs/tools/agent/stand_alone/
lastModified: 2026-08-17T11:02:15+02:00
---

# Enabling usage reporting for standalone databases

For standalone database servers that you don't want to connect to the Hybrid Manager (HM), the EDB Postgres AI agent (packaged as `beacon-agent`) still offers a valuable function: usage reporting.

While monitoring and other advanced features are exclusive to the HM integration, the Agent can independently collect and send essential usage data. This allows EDB to better understand how our products are being used.

> **Note: Already using the Agent for Hybrid Manager monitoring?**
>
> This page details usage reporting for stand-alone databases (not connected to the Hybrid Manager). If you are already using the Agent for Hybrid Manager observability, and want to additionally report usage to EDB, refer to [Adding usage reporting for Hybrid-Manager monitored databases](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/usage_reporting/).

To configure usage reporting:

1. [Create an OS user to run the Agent](https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_agent_os_user/).
2. [Install the Agent](https://www.enterprisedb.com/docs/tools/agent/installing/).
3. [Prepare your database for connection](https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_prepare_database/).
4. Configure and run the agent on [Internet-connected environments](https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_config_agent_network/) or [air-gapped environments](https://www.enterprisedb.com/docs/tools/agent/stand_alone/sa_config_agent_airgapped/).

Deploy one Agent per host machine with self-managed database clusters. Then, configure a DSN string for only one database per database server instance (not per database). Refer to [How many Agents do I need to track several databases](https://www.enterprisedb.com/docs/tools/agent/usage_reporting/#how-many-edb-postgres-ai-agents-do-i-need-to-track-several-databases) for more information.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
