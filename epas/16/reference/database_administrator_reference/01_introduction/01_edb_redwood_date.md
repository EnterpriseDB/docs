---
title: edb_redwood_date
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/database_administrator_reference/01_introduction/01_edb_redwood_date/
lastModified: 2024-11-22T12:16:04+01:00
---

# edb\_redwood\_date

<div id="edb_redwood_date" class="registered_link"></div>

`DATE` can appear as the data type of a column in the commands. To translate it to `TIMESTAMP` when the table definition is stored in the database, set the configuration parameter `edb_redwood_date` to `TRUE`. In this case, a time component is stored in the column with the date. This is consistent with Oracle’s `DATE` data type.

If `edb_redwood_date` is set to `FALSE`, the column’s data type in a `CREATE TABLE` or `ALTER TABLE` command remains as a native PostgreSQL `DATE` data type. It's stored as such in the database. The PostgreSQL `DATE` data type stores only the date without a time component in the column.

Regardless of the setting of `edb_redwood_date`, when `DATE` appears as a data type in any other context, it's always internally translated to a `TIMESTAMP` and thus can handle a time component if present. These contexts include the data type of a variable in an SPL declaration section or the data type of a formal parameter in an SPL procedure or SPL function or the return type of an SPL function.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
