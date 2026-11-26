---
title: Assessing multiple databases at once
description: Use the EDB Postgres AI agent's `configure-onprem-dbs` command to enroll many databases for migration assessment in a single step.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrations/assessing_multiple_databases/
lastModified: 2026-07-23T17:52:58+02:00
---

# Assessing multiple databases at once

When you have a large database estate — dozens of Oracle or Postgres databases — manually constructing a DSN string and adding a `beacon_agent.yaml` entry for each one is time-consuming and error-prone. The EDB Postgres AI agent's `configure-onprem-dbs` command solves this problem by reading your existing database inventory from a file (or discovering databases directly from AWS) and automatically populating `beacon_agent.yaml` with the correct DSN entries.

Once you start the agent with the populated configuration, the agent registers all enrolled databases with HM and generates migration assessments for each one. Bulk enrollment with `configure-onprem-dbs` is the recommended starting point when you want an estate-wide migration readiness report before committing to individual migration projects.

> **Note**
>
> `configure-onprem-dbs` only populates the `provider.onprem.databases` section of `beacon_agent.yaml` with DSN entries. It doesn't generate the full agent configuration, start the agent, or connect to HM.

## Supported input sources

The `configure-onprem-dbs` command can populate your configuration from three sources:

- CSV file

- Oracle `tnsnames.ora` file

- AWS RDS discovery

## Full command reference

For all available flags — including RDS-specific options such as `--region`, `--rds-engine`, and `--tag-filter` — see [`configure-onprem-dbs`](https://www.enterprisedb.com/docs/tools/agent/agent_ref/#configure-onprem-dbs) in the EDB Postgres AI agent CLI reference.

## Related topics

- See [Assessment support](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrations/compatibility/) for the Oracle and Postgres versions supported for migration assessment.
- To get started, see [Enrolling multiple databases for assessment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrations/assessing_multiple_databases/enrolling_databases/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
