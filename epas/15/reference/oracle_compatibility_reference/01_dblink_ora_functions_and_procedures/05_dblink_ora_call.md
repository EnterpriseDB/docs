---
title: dblink_ora_call()
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/05_dblink_ora_call/
lastModified: 2023-11-09T17:35:38+05:30
---

# dblink\_ora\_call()

<div id="dblink_ora_call" class="registered_link"></div>

The `dblink_ora_call()` function executes a non-`SELECT` statement on an Oracle database and returns a result set. The signature is:

```c
dblink_ora_call(<conn_name>, <command>, <iterations>)
```

Where:

- `conn_name` specifies the name of the link.

- `command` specifies the text of the SQL statement invoked on the Oracle server.

- `iterations` specifies the number of times the statement is executed.

The function returns a `SETOF` record.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
