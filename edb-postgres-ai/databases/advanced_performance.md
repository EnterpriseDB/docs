---
title: Advanced performance features per distribution
description: Dive deeper into advanced performance features and their availability per Postgres distribution.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/databases/advanced_performance/
lastModified: 2026-02-26T06:45:03-08:00
---

# Advanced performance features per distribution

The following table shows the advanced performance feature supported for each Postgres distribution.

|                                                                                                                                                                                                   | PostgreSQL                         | EDB Postgres Extended Server | EDB Postgres Advanced Server | EDB Postgres Advanced Server in Oracle compatibility mode |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------------------------- | ---------------------------- | --------------------------------------------------------- |
| [Query advisor](https://www.enterprisedb.com/docs/pg_extensions/query_advisor/)                                                                                                                   | Yes (only EDB PostgreSQL)          | Yes                          | Yes                          | Yes                                                       |
| [Dynatune](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/02_resource_usage_memory/#edb_dynatune) | No                                 | No                           | Yes                          | Yes                                                       |
| [CPU and memory resource management](https://www.enterprisedb.com/docs/epas/latest/database_administration/10_edb_resource_manager/)                                                              | No                                 | No                           | Yes                          | Yes                                                       |
| [High performance bulk data loader](https://www.enterprisedb.com/docs/epas/latest/database_administration/02_edb_loader/)                                                                         | No                                 | No                           | Yes                          | Yes                                                       |
| [Foreign key optimized tables (TAM)](https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/#refdata)                                                                              | refdata                            | refdata                      | refdata                      | refdata                                                   |
| [Clustered data retrieval optimization](https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/#autocluster)                                                                       | autocluster                        | autocluster                  | autocluster                  | autocluster                                               |
| [Time Series optimized tables (TAM)](https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/#bluefin)                                                                              | bluefin                            | bluefin                      | bluefin                      | bluefin                                                   |
| [Dynamic parameter tuning (\*)](https://www.enterprisedb.com/docs/pg_extensions/pg_tuner/)                                                                                                        | edb\_pg\_tuner                     | edb\_pg\_tuner               | edb\_pg\_tuner               | edb\_pg\_tuner                                            |
| [Wait state analysis](https://www.enterprisedb.com/docs/pg_extensions/wait_states/)                                                                                                               | edb\_wait\_states                  | edb\_wait\_states            | edb\_wait\_states            | edb\_wait\_states                                         |
| [Real SQL execution traces for use with PEM](https://www.enterprisedb.com/docs/pem/latest/profiling_workloads/)                                                                                   | sqlprofiler                        | sqlprofiler                  | sqlprofiler                  | sqlprofiler                                               |
| [DRITA (Dynamic Runtime Inst. Tools)](https://www.enterprisedb.com/docs/epas/17/managing_performance/04_dynamic_runtime_instrumentation_tools_architecture_DRITA/)                                | No                                 | No                           | Yes                          | Yes                                                       |

> **Note**
>
> (\*) For dynamic database server tuning, `edb_pg_tuner` is the preferred tool over DRITA. Future development and enhancements will focus exclusively on `edb_pg_tuner`.

For more information on choosing a subscription plan, see [EDB Subscription Plans Comparison](https://www.enterprisedb.com/products/plans-comparison).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
