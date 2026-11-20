---
title: Configuration parameters compatible with Oracle databases
description: Descriptions of the configuration parameters used to control system behaviors to act more like PostgreSQL or more like Oracle
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/01_introduction/
lastModified: 2025-11-25T20:39:04+05:30
---

# Configuration parameters compatible with Oracle databases

<div id="configuration_parameters_compatible_with_oracle_databases" class="registered_link"></div>

EDB Postgres Advanced Server supports developing and running applications compatible with PostgreSQL and Oracle. You can alter some system behaviors to act in a more PostgreSQL- or in a more Oracle-compliant manner. You control these behaviors by using configuration parameters.

- `edb_redwood_date` — Controls whether or not a time component is stored in `DATE` columns. For behavior compatible with Oracle databases, set `edb_redwood_date` to `TRUE`. See [edb\_redwood\_date](https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/01_introduction/01_edb_redwood_date/#edb_redwood_date).
- `edb_redwood_raw_names` — Controls whether database object names appear in uppercase or lowercase letters when viewed from Oracle system catalogs. For behavior compatible with Oracle databases, `edb_redwood_raw_names` is set to its default value of `FALSE`. To view database object names as they are actually stored in the PostgreSQL system catalogs, set `edb_redwood_raw_names` to `TRUE`. See [edb\_redwood\_raw\_names](https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/01_introduction/02_edb_redwood_raw_names/#edb_redwood_raw_names).
- `edb_redwood_strings` — Equates `NULL` to an empty string for purposes of string concatenation operations. For behavior compatible with Oracle databases, set `edb_redwood_strings` to `TRUE`. See [edb\_redwood\_strings](https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/01_introduction/03_edb_redwood_strings/#edb_redwood_strings).
- `edb_stmt_level_tx` — Isolates automatic rollback of an aborted SQL command to statement level rollback only – the entire, current transaction is not automatically rolled back as is the case for default PostgreSQL behavior. For behavior compatible with Oracle databases, set `edb_stmt_level_tx` to `TRUE`; however, use only when absolutely necessary. See [edb\_stmt\_level\_tx](https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/01_introduction/04_edb_stmt_level_tx/#edb_stmt_level_tx).
- `oracle_home` — Point EDB Postgres Advanced Server to the correct Oracle installation directory. See [oracle\_home](https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/01_introduction/05_oracle_home/).

* [edb\_redwood\_date](https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/01_introduction/01_edb_redwood_date/): DATE can appear as the data type of a column in the commands. To translate it to TIMESTAMP when the table definition is stored in the database, set the configuration parameter edbredwooddate to TRUE. In this case, a time component is stored in the column with the date. This is consistent with Oracle’s DATE data type.
* [edb\_redwood\_raw\_names](https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/01_introduction/02_edb_redwood_raw_names/): About database object name display
* [edb\_redwood\_strings](https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/01_introduction/03_edb_redwood_strings/): About string display after concatenation
* [edb\_stmt\_level\_tx](https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/01_introduction/04_edb_stmt_level_tx/): About statement level transaction isolation
* [oracle\_home](https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/01_introduction/05_oracle_home/): Before creating a link to an Oracle server, you must direct EDB Postgres Advanced Server to the correct Oracle home directory. Set the LDLIBRARYPATH environment variable on Linux (or PATH on Windows) to the lib directory of the Oracle client installation directory.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
