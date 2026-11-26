---
title: Supported Postgres extensions and tools
description: Cloud Service supported postgres extensions and tools available for use with your cluster.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_extension_tools/
lastModified: 2025-04-24T09:25:05+05:30
---

# Supported Postgres extensions and tools

Cloud Service supports a number of Postgres extensions and tools, which you can install on or alongside your cluster.

- See [Postgres extensions available by deployment](https://www.enterprisedb.com/docs/pg_extensions/) for the complete list of extensions supported in Cloud Service.

- Based on your subscription, you may be entitled to a subset of EDB tools that you can access via the EDB Repository. For instructions on using the EDB Repository, see [EDB Repository Access](https://info.enterprisedb.com/rs/069-ALB-339/images/Repository%20Access%2004-09-2019.pdf).

### EDB Postgres extensions and tools

EDB develops and maintains several extensions and tools. These include:

- [EDB Advanced Storage Pack](https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/) — Provides advanced storage options for PostgreSQL databases in the form of table access method (TAM) extensions. These storage options can enhance the performance and reliability of databases without requiring application changes.

  The TAM extensions included in the Advanced Storage Pack include:

  - [Autocluster](https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/#autocluster) — Provides faster access to clustered data by keeping track of the last inserted row for any value in a side table.

  - [Refdata](https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/#refdata) — Can provide performance gains of 5-10% and increased scalability.

- [EDB Postgres Tuner](https://www.enterprisedb.com/docs/pg_extensions/pg_tuner/) — Provides safe recommendations that maximize the use of available resources.

- [EDB Query Advisor](https://www.enterprisedb.com/docs/pg_extensions/query_advisor/) — Provides index recommendations by keeping statistics on predicates found in WHERE statements, JOIN clauses, and workload queries.

- [EDB Wait States](https://www.enterprisedb.com/docs/pg_extensions/wait_states/) — Probes each of the running sessions at regular intervals.

- [PG Failover Slots](https://www.enterprisedb.com/docs/pg_extensions/pg_failover_slots/) — Is an extension released as open source software under the PostgreSQL License. If you have logical replication publications on Postgres databases that are also part of a streaming replication architecture, PG Failover Slots avoids the need for you to reseed your logical replication tables when a new standby gets promoted to primary.

- [Foreign Data Wrappers](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/foreign_data_wrappers/) — Allow you to connect your Postgres database server to external data sources.

- [EDB PgBouncer](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/poolers/) — Allows you to manage your connections to your Postgres database.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
