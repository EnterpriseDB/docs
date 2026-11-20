---
title: Advanced SQL features per distribution
description: Dive deeper into advanced SQL features and their availability per Postgres distribution.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/databases/advanced_sql/
lastModified: 2025-03-19T16:00:16Z
---

# Advanced SQL features per distribution

The following advanced SQL features are only supported in EDB Postgres Advanced server deployments.

|                                                                                                                                                                                                                       | PostgreSQL                         | EDB Postgres Extended Server | EDB Postgres Advanced Server | EDB Postgres Advanced Server in Oracle compatibility mode |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------------------------- | ---------------------------- | --------------------------------------------------------- |
| [Oracle style packages](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/)                                                           | No                                 | No                           | Yes                          | Yes                                                       |
| [Autonomous transactions](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/06_transaction_control/03_pragma_autonomous_transaction/)                                             | No                                 | No                           | Yes                          | Yes                                                       |
| [Interval partitioning](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/09_alter_table_set_interval/)                | No                                 | No                           | Yes                          | Yes                                                       |
| [AUTOMATIC partitioning](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/10_alter_table_set_partitioning_automatic/) | No                                 | No                           | Yes                          | Yes                                                       |
| [Optimizer hints](https://www.enterprisedb.com/docs/epas/latest/application_programming/optimizing_code/05_optimizer_hints/)                                                                                          | No                                 | No                           | Yes                          | Yes                                                       |
| [COLLECTIONS](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/12_working_with_collections/)                                                                                     | No                                 | No                           | Yes                          | Yes                                                       |
| [Hierarchical queries](https://www.enterprisedb.com/docs/epas/latest/fundamentals/sql_fundamentals/03_advanced_concepts/05_hierarchical_queries/)                                                                     | No                                 | No                           | Yes                          | Yes                                                       |

For more information on choosing a subscription plan, see [EDB Subscription Plans Comparison](https://www.enterprisedb.com/products/plans-comparison).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
