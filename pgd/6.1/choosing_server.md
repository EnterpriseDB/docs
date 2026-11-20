---
title: Choosing a Postgres distribution
product: EDB Postgres Distributed (PGD)
version: 6.1.0
url: https://www.enterprisedb.com/docs/pgd/6.1/choosing_server/
lastModified: 2026-09-29T15:30:26-07:00
---

# Choosing a Postgres distribution

EDB Postgres Distributed can be deployed with three different Postgres distributions: PostgreSQL, EDB Postgres Extended Server, or EDB Postgres Advanced Server. The availability of particular EDB Postgres Distributed features depends on the Postgres distribution being used. Therefore, it's essential to adopt the Postgres distribution best suited to your business needs. For example, if having the Commit At Most Once (CAMO) feature is mission critical to your use case, don't adopt open source PostgreSQL, which doesn't have the core capabilities required to handle CAMO.

The following table lists features of EDB Postgres Distributed that are dependent on the Postgres distribution and version.

| Feature                                                                                                                                                                   | PostgreSQL | EDB Postgres Extended | EDB Postgres Advanced |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------------------- | --------------------- |
| [Rolling application and database upgrades](https://www.enterprisedb.com/docs/pgd/6.1/upgrades/)                                                                          | Y          | Y                     | Y                     |
| [Row-level last-update wins conflict resolution](https://www.enterprisedb.com/docs/pgd/6.1/conflict-management/conflicts/)                                                | Y          | Y                     | Y                     |
| [DDL replication](https://www.enterprisedb.com/docs/pgd/6.1/ddl/)                                                                                                         | Y          | Y                     | Y                     |
| [Granular DDL Locking](https://www.enterprisedb.com/docs/pgd/6.1/ddl/ddl-locking/)                                                                                        | Y          | Y                     | Y                     |
| [Streaming of large transactions](https://www.enterprisedb.com/docs/pgd/6.1/transaction-streaming/)                                                                       | Y          | Y                     | Y                     |
| [Distributed sequences](https://www.enterprisedb.com/docs/pgd/6.1/sequences/#pgd-global-sequences)                                                                        | Y          | Y                     | Y                     |
| [Subscriber-only nodes](https://www.enterprisedb.com/docs/pgd/6.1/nodes/subscriber_only/)                                                                                 | Y          | Y                     | Y                     |
| [Monitoring](https://www.enterprisedb.com/docs/pgd/6.1/monitoring/)                                                                                                       | Y          | Y                     | Y                     |
| [Parallel apply](https://www.enterprisedb.com/docs/pgd/6.1/parallelapply/)                                                                                                | Y          | Y                     | Y                     |
| [Conflict-free replicated data types (CRDTs)](https://www.enterprisedb.com/docs/pgd/6.1/conflict-management/crdt/)                                                        | Y          | Y                     | Y                     |
| [Column-level conflict resolution](https://www.enterprisedb.com/docs/pgd/6.1/conflict-management/column-level-conflicts/)                                                 | Y          | Y                     | Y                     |
| [Transform triggers](https://www.enterprisedb.com/docs/pgd/6.1/stream-triggers/#transform-triggers)                                                                       | Y          | Y                     | Y                     |
| [Conflict triggers](https://www.enterprisedb.com/docs/pgd/6.1/stream-triggers/#conflict-triggers)                                                                         | Y          | Y                     | Y                     |
| [Asynchronous replication](https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/)                                                                                      | Y          | Y                     | Y                     |
| [Legacy synchronous replication](https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/legacy-sync/)                                                                    | Y          | Y                     | Y                     |
| [Group Commit](https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/group-commit/)                                                                                     | N          | Y                     | Y                     |
| [Commit At Most Once (CAMO)](https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/camo/)                                                                               | N          | Y                     | Y                     |
| [Eager Conflict Resolution](https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/group-commit/#eager-conflict-resolution)                                              | N          | Y                     | Y                     |
| [Lag Control](https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/lag-control/)                                                                                       | N          | Y                     | Y                     |
| [Decoding Worker](https://www.enterprisedb.com/docs/pgd/6.1/decoding_worker/)                                                                                             | N          | Y                     | Y                     |
| [Lag tracker](https://www.enterprisedb.com/docs/pgd/6.1/monitoring/sql/#monitoring-outgoing-replication)                                                                  | N          | Y                     | Y                     |
| [Missing partition conflict](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/conflicts/#target_table_note)                                  | N          | Y                     | Y                     |
| [No need for UPDATE Trigger on tables with TOAST](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/02_types_of_conflict/#toast-support-details) | N          | Y                     | Y                     |
| [Automatically hold back FREEZE](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/03_conflict_detection/#origin-conflict-detection)             | N          | Y                     | Y                     |
| [Transparent Data Encryption](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/)                                                        | N          | 15+                   | 15+                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
