---
title: dblink_ora_exec()
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/06_dblink_ora_exec/
lastModified: 2025-11-25T20:39:04+05:30
---

# dblink\_ora\_exec()

<div id="dblink_ora_exec" class="registered_link"></div>

The `dblink_ora_exec()` procedure executes a DML or DDL statement in the remote database. The signature is:

```c
dblink_ora_exec(<conn_name>, <command>)
```

Where:

- `conn_name` specifies the name of the link.

- `command` specifies the text of the `INSERT`, `UPDATE`, or `DELETE` SQL statement invoked on the Oracle server.

The function returns a `VOID`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
