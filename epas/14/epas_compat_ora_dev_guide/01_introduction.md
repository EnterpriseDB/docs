---
title: Configuration parameters compatible with Oracle databases
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/
lastModified: 2023-02-14T16:10:29+05:30
---

# Configuration parameters compatible with Oracle databases

<div id="configuration_parameters_compatible_with_oracle_databases" class="registered_link"></div>

EDB Postgres Advanced Server supports developing and running applications compatible with PostgreSQL and Oracle. You can alter some system behaviors to act in a more PostgreSQL- or in a more Oracle-compliant manner. You control these behaviors by using configuration parameters.

- `edb_redwood_date` — Controls whether or not a time component is stored in `DATE` columns. For behavior compatible with Oracle databases, set `edb_redwood_date` to `TRUE`. See [edb\_redwood\_date](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/01_edb_redwood_date/#edb_redwood_date).
- `edb_redwood_raw_names` — Controls whether database object names appear in uppercase or lowercase letters when viewed from Oracle system catalogs. For behavior compatible with Oracle databases, `edb_redwood_raw_names` is set to its default value of `FALSE`. To view database object names as they are actually stored in the PostgreSQL system catalogs, set `edb_redwood_raw_names` to `TRUE`. See [edb\_redwood\_raw\_names](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/02_edb_redwood_raw_names/#edb_redwood_raw_names).
- `edb_redwood_strings` — Equates `NULL` to an empty string for purposes of string concatenation operations. For behavior compatible with Oracle databases, set `edb_redwood_strings` to `TRUE`. See [edb\_redwood\_strings](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/03_edb_redwood_strings/#edb_redwood_strings).
- `edb_stmt_level_tx` — Isolates automatic rollback of an aborted SQL command to statement level rollback only – the entire, current transaction is not automatically rolled back as is the case for default PostgreSQL behavior. For behavior compatible with Oracle databases, set `edb_stmt_level_tx` to `TRUE`; however, use only when absolutely necessary. See [edb\_stmt\_level\_tx](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/04_edb_stmt_level_tx/#edb_stmt_level_tx).
- `oracle_home` — Point EDB Postgres Advanced Server to the correct Oracle installation directory. See [oracle\_home](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/05_oracle_home/).

* [edb\_redwood\_date](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/01_edb_redwood_date/): DATE can appear as the data type of a column in the commands. To translate it to TIMESTAMP when the table definition is stored in the database, set the configuration parameter edbredwooddate to TRUE. In this case, a time component is stored in the column with the date. This is consistent with Oracle’s DATE data type.
* [edb\_redwood\_raw\_names](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/02_edb_redwood_raw_names/): When edbredwoodrawnames is set to its default value of FALSE, database object names such as table names, column names, trigger names, program names, and user names appear in uppercase letters when viewed from Oracle catalogs. For a complete list of supported catalog views, see Catalog views. In addition, quotation marks enclose names that were created with enclosing quotation marks.
* [edb\_redwood\_strings](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/03_edb_redwood_strings/): In Oracle, when a string is concatenated with a null variable or null column, the result is the original string. However, in PostgreSQL, concatenation of a string with a null variable or null column gives a null result. If the edbredwoodstrings parameter is set to TRUE, the concatenation operation results in the original string as done by Oracle. If edbredwoodstrings is set to FALSE, the native PostgreSQL behavior is maintained.
* [edb\_stmt\_level\_tx](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/04_edb_stmt_level_tx/): In Oracle, when a runtime error occurs in a SQL command, all the updates on the database caused by that single command are rolled back. This is called statement level transaction isolation. For example, if a single UPDATE command successfully updates five rows but an attempt to update a sixth row results in an exception, the updates to all six rows made by this UPDATE command are rolled back. The effects of prior SQL commands that weren't yet committed or rolled back are pending until a COMMIT or ROLLBACK command is executed.
* [oracle\_home](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/05_oracle_home/): Before creating a link to an Oracle server, you must direct EDB Postgres Advanced Server to the correct Oracle home directory. Set the LDLIBRARYPATH environment variable on Linux (or PATH on Windows) to the lib directory of the Oracle client installation directory.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
