---
title: Choosing a Postgres distribution
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/planning/choosing_server/
lastModified: 2026-09-29T15:30:26-07:00
---

# Choosing a Postgres distribution

EDB Postgres Distributed can be deployed with three different Postgres distributions: PostgreSQL, EDB Postgres Extended Server, or EDB Postgres Advanced Server. The availability of particular EDB Postgres Distributed features depends on the Postgres distribution being used. Therefore, it's essential to adopt the Postgres distribution best suited to your business needs. For example, if having the Commit At Most Once (CAMO) feature is mission critical to your use case, don't adopt open source PostgreSQL, which doesn't have the core capabilities required to handle CAMO.

The following table lists features of EDB Postgres Distributed that are dependent on the Postgres distribution and version.

| Feature                                                                                                                                                                | PostgreSQL | EDB Postgres Extended | EDB Postgres Advanced |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------------------- | --------------------- |
| [Rolling application and database upgrades](https://www.enterprisedb.com/docs/pgd/5.6/upgrades/)                                                                       | Y          | Y                     | Y                     |
| [Row-level last-update wins conflict resolution](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/conflicts/)                                             | Y          | Y                     | Y                     |
| [DDL replication](https://www.enterprisedb.com/docs/pgd/5.6/ddl/)                                                                                                      | Y          | Y                     | Y                     |
| [Granular DDL Locking](https://www.enterprisedb.com/docs/pgd/5.6/ddl/ddl-locking/)                                                                                     | Y          | Y                     | Y                     |
| [Streaming of large transactions](https://www.enterprisedb.com/docs/pgd/5.6/transaction-streaming/)                                                                    | v14+       | v13+                  | v14+                  |
| [Distributed sequences](https://www.enterprisedb.com/docs/pgd/5.6/sequences/#pgd-global-sequences)                                                                     | Y          | Y                     | Y                     |
| [Subscriber-only nodes](https://www.enterprisedb.com/docs/pgd/5.6/nodes/subscriber_only/)                                                                              | Y          | Y                     | Y                     |
| [Monitoring](https://www.enterprisedb.com/docs/pgd/5.6/monitoring/)                                                                                                    | Y          | Y                     | Y                     |
| [OpenTelemetry support](https://www.enterprisedb.com/docs/pgd/5.6/monitoring/otel/)                                                                                    | Y          | Y                     | Y                     |
| [Parallel apply](https://www.enterprisedb.com/docs/pgd/5.6/parallelapply/)                                                                                             | Y          | Y                     | Y                     |
| [Conflict-free replicated data types (CRDTs)](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/)                                                     | Y          | Y                     | Y                     |
| [Column-level conflict resolution](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/column-level-conflicts/)                                              | Y          | Y                     | Y                     |
| [Transform triggers](https://www.enterprisedb.com/docs/pgd/5.6/striggers/#transform-triggers)                                                                          | Y          | Y                     | Y                     |
| [Conflict triggers](https://www.enterprisedb.com/docs/pgd/5.6/striggers/#conflict-triggers)                                                                            | Y          | Y                     | Y                     |
| [Asynchronous replication](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/)                                                                                   | Y          | Y                     | Y                     |
| [Legacy synchronous replication](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/legacy-sync/)                                                                 | Y          | Y                     | Y                     |
| [Group Commit](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/group-commit/)                                                                                  | N          | Y                     | 14+                   |
| [Commit At Most Once (CAMO)](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/camo/)                                                                            | N          | Y                     | 14+                   |
| [Eager Conflict Resolution](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/group-commit/#eager-conflict-resolution)                                           | N          | Y                     | 14+                   |
| [Lag Control](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/lag-control/)                                                                                    | N          | Y                     | 14+                   |
| [Decoding Worker](https://www.enterprisedb.com/docs/pgd/5.6/decoding_worker/)                                                                                          | N          | 13+                   | 14+                   |
| [Lag tracker](https://www.enterprisedb.com/docs/pgd/5.6/monitoring/sql/#monitoring-outgoing-replication)                                                               | N          | Y                     | 14+                   |
| [Missing partition conflict](https://www.enterprisedb.com/docs/pgd/5.6/reference/conflicts/#target_table_note)                                                         | N          | Y                     | 14+                   |
| [No need for UPDATE Trigger on tables with TOAST](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/conflicts/02_types_of_conflict/#toast-support-details) | N          | Y                     | 14+                   |
| [Automatically hold back FREEZE](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/conflicts/03_conflict_detection/#origin-conflict-detection)             | N          | Y                     | 14+                   |
| [Transparent Data Encryption](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/)                                                     | N          | 15+                   | 15+                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
