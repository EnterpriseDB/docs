---
title: List of Oracle compatible configuration parameters
description: Descriptions of the configuration parameters used to control system behaviors to act more like PostgreSQL or more like Oracle
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/summary_oracle_config_parameters/
lastModified: 2025-11-25T20:57:39+05:30
---

# List of Oracle compatible configuration parameters

EDB Postgres Advanced Server supports developing and running applications compatible with PostgreSQL and Oracle. You can alter some system behaviors to act in a more PostgreSQL- or in a more Oracle-compliant manner. You control these behaviors by using configuration parameters.

- `edb_redwood_date` — Controls whether or not a time component is stored in `DATE` columns. For behavior compatible with Oracle databases, set `edb_redwood_date` to `TRUE`.
- `edb_redwood_raw_names` — Controls whether database object names appear in uppercase or lowercase letters when viewed from Oracle system catalogs. For behavior compatible with Oracle databases, `edb_redwood_raw_names` is set to its default value of `FALSE`. To view database object names as they are actually stored in the PostgreSQL system catalogs, set `edb_redwood_raw_names` to `TRUE`.
- `edb_redwood_strings` — Equates `NULL` to an empty string for purposes of string concatenation operations. For behavior compatible with Oracle databases, set `edb_redwood_strings` to `TRUE`.
- `edb_stmt_level_tx` — Isolates automatic rollback of an aborted SQL command to statement level rollback only – the entire, current transaction is not automatically rolled back as is the case for default PostgreSQL behavior. For behavior compatible with Oracle databases, set `edb_stmt_level_tx` to `TRUE`; however, use only when absolutely necessary.
- `oracle_home` — Point EDB Postgres Advanced Server to the correct Oracle installation directory.

See [Configuration parameters compatible with Oracle databases](https://www.enterprisedb.com/docs/epas/17/reference/database_administrator_reference/01_introduction/) for access to more detailed information.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
