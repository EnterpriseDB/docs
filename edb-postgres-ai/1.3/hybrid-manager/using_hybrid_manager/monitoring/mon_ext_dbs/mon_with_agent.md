---
title: Monitoring self-managed deployments
description: Learn about monitoring self-managed external Postgres instances with Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/
lastModified: 2026-10-23T21:05:43+05:30
---

# Monitoring self-managed deployments

To monitor self-managed external Postgres instances from Hybrid Manager (HM) that are deployed on bare metal or virtual machines, you must first install EDB Postgres AI agent. The agent provides monitoring and observability metrics to your HM.

To have monitoring, query diagnostics, and recommendations for your self-managed Postgres instance:

1. [Create an OS user to run the agent.](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/agent_os_user/)
2. [Prepare your database.](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/prepare_postgres_database/)
3. [Create a machine user.](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/create_machine_user/)
4. [Install the agent.](https://www.enterprisedb.com/docs/tools/agent/installing/)
5. [Configure the agent.](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/)
6. [Run the agent.](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/run_agent/)
7. [Configure the agent to run as a service.](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/run_as_service/)

> **Note**
>
> To leverage full observability capabilities, we recommend deploying one agent per host machine with self-managed database clusters. Then, you can configure the agent on that host to connect to each database with a dedicated DSN string. Details on DSN configuration are provided in [Configuring your agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/).

For extra help with administrative tasks needed to configure the agent, see [Administrative tasks](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/admin_tasks/).

See [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/troubleshooting/) for help with general troubleshooting and [Data security and sovereignty](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/data_sovereignity/) to understand how your data is stored by the agent.

- [Create an OS user](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/agent_os_user/): Learn how to create a dedicated OS user to run the agent with Hybrid Manager.
- [Postgres database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/prepare_postgres_database/): Learn how to prepare your Postgres database for monitoring with Hybrid Manager.
- [Create a machine user](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/create_machine_user/): Learn how to create a machine user for monitoring with Hybrid Manager.
- [Configure the EDB Postgres AI agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/): Learn how to configure the agent for monitoring with Hybrid Manager.
- [Run the agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/run_agent/): Learn how to run the agent when setting up monitoring with Hybrid Manager.
- [Configure the agent to run as a service](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/run_as_service/): Learn how to run the agent as a service when setting up monitoring with Hybrid Manager.
- [Troubleshooting the agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/troubleshooting/): Learn how to troubleshoot the agent when setting up monitoring with Hybrid Manager.
- [Administrative tasks](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/admin_tasks/): Learn administrative tasks for EDB Postgres AI agent.
- [Data security and sovereignty](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/data_sovereignity/): Learn about data security and sovereignty for monitoring with Hybrid Manager.
- [Install the Agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/install_agent/): Learn how to install and configure the agent to monitor databases with Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
