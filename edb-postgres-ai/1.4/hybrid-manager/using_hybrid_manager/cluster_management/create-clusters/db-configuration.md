---
title: Database configuration parameters
description: Learn about various database configuration parameters for a Hybrid Manager cluster.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/db-configuration/
lastModified: 2026-07-23T19:28:07Z
---

# Database configuration parameters

When you're creating or editing a single-node or high-availability cluster, use the **DB Configuration** tab to specify database configuration parameters.

The database parameters listed on the **DB Configuration** tab are also referred to as Grand Unified Configuration (GUC) variables. See [What Is a GUC Variable?](https://www.enterprisedb.com/blog/what-guc-variable) for more information.

The list of parameters is populated based on the type of database you selected on the **Cluster Settings** tab when you created your cluster. For more information about the parameters for your database type:

- For PostgreSQL parameters, see [Setting Parameters](https://www.postgresql.org/docs/current/config-setting.html) and [Server Configuration](https://www.postgresql.org/docs/current/runtime-config.html) in the Postgres documentation.

- For EDB Postgres Advanced Server, see [Summary of configuration parameters](https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/02_summary_of_configuration_parameters/) and [Configuration parameters](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/).

- For more information on the types of values the parameters accept, see [Parameter Names and Values](https://www.postgresql.org/docs/current/config-setting.html#CONFIG-SETTING-NAMES-VALUES). The types apply to both PostgreSQL and EDB Postgres Advanced Server parameters.

> **Tip**
>
> To provision a FIPS-compatible cluster, set the `ssl_groups` parameter to `prime256v1`. See [Provisioning FIPS-compatible clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/fips-compatible-clusters/).

> **Note**
>
> You can make changes to database or server parameters after cluster creation is complete. Ensure you configure memory- and CPU-related database parameters within the physical limits of the underlying hardware. Changing some parameters requires a restart. Default `wal_segment_size` is set to 64MB for Physical Streaming Replication (PSR) cluster deployment and 128MB for Postgres Distributed (PGD) cluster deployment.

## Modifying a parameter

1. Find the parameter you want to modify using these methods:
   - Search for a parameter using the search field.
   - Filter the parameters that are listed by selecting an option in the **Show only** list:
     - **Custom Values** — Shows only parameters that changed from the default values, either in the current session or modified in a previous session and applied to the cluster.
     - **Currently Edited Values** — Shows only parameters that changed during the current editing session.

2. Enter the new value in the parameter value field. Your entry can be a literal value or a [formula](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/formula/) that calculates the value based on other parameters.

   > **Warning**
   >
   > Parameters identified with a yellow exclamation point icon trigger a restart when you save your changes. The restart terminates all open connections and takes a few minutes to complete. It takes a few more seconds for the new connection to establish. During this process, you can't connect to the database.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
