---
title: Deleting a procedure
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/02_spl_programs/04_procedures_overview/03_deleting_a_procedure/
lastModified: 2023-11-09T17:35:38+05:30
---

# Deleting a procedure

<div id="deleting_a_procedure" class="registered_link"></div>

You can delete a procedure from the database using the `DROP PROCEDURE` command.

```sql
DROP PROCEDURE [ IF EXISTS ] <name> [ (<parameters>) ]
    [ CASCADE | RESTRICT ];
```

Where `name` is the name of the procedure to drop.

> **Note**
>
> - The specification of the parameter list is required in EDB Postgres Advanced Server under certain circumstances such as in an overloaded procedure. Oracle requires that you always omit the parameter list.
>
> - Using `IF EXISTS`, `CASCADE`, or `RESTRICT` isn't compatible with Oracle databases. See [SQL reference](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/50_drop_procedure/) for information on these options.

This example drops the procedure `simple_procedure`:

```sql
DROP PROCEDURE simple_procedure;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
