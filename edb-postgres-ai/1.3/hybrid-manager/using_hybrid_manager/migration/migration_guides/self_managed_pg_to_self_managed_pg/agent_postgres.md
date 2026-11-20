---
title: Configuring the EDB Postgres AI agent to assess your database
description: Configure the EDB Postgres AI agent to connect to your Postgres database, provide monitoring and perform a database assessment
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/agent_postgres/
lastModified: 2026-04-08T17:27:59+05:30
---

# Configuring the EDB Postgres AI agent to assess your database

You can install and configure the EDB Postgres AI agent to obtain observability and monitoring data for your Postgres database. This optional step provides high-level metrics like schema count and names, table count, and object count, which can aid in migration planning.

> **Note**
>
> Configuring the EDB Postgres AI agent isn't required to perform the migration, and it currently doesn't ingest the actual schema objects (DDL).

To register a database with the EDB Postgres AI agent, see:

- [Monitoring self-managed deployments](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/)

- [Monitoring Cloud Service Provider managed Postgres deployments](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_ext_csp/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
