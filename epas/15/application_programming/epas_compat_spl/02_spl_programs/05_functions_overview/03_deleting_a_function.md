---
title: Deleting a function
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/02_spl_programs/05_functions_overview/03_deleting_a_function/
lastModified: 2023-11-09T17:35:38+05:30
---

# Deleting a function

<div id="deleting_a_function" class="registered_link"></div>

You can delete a function from the database using `DROP FUNCTION`.

```sql
DROP FUNCTION [ IF EXISTS ] <name> [ (<parameters>) ]
    [ CASCADE | RESTRICT ];
```

Where `name` is the name of the function to drop.

> **Note**
>
> - Specifying the parameter list is required in EDB Postgres Advanced Server under certain circumstances such as in an overloaded function. Oracle requires that you always omit the parameter list.
>
> - Use of `IF EXISTS`, `CASCADE`, or `RESTRICT` isn't compatible with Oracle databases. See the [SQL reference](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/47_drop_function/) for information on these options.

This example drops the function `simple_function`:

```sql
DROP FUNCTION simple_function;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
