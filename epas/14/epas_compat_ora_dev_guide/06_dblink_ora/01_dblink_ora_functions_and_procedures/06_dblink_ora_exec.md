---
title: dblink_ora_exec()
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/06_dblink_ora/01_dblink_ora_functions_and_procedures/06_dblink_ora_exec/
lastModified: 2023-02-14T16:10:29+05:30
---

# dblink\_ora\_exec()

<div id="dblink_ora_exec" class="registered_link"></div>

The `dblink_ora_exec()` procedure executes a DML or DDL statement in the remote database. The signature is:

```text
dblink_ora_exec(<conn_name>, <command>)
```

Where:

- `conn_name` specifies the name of the link.

- `command` specifies the text of the `INSERT`, `UPDATE`, or `DELETE` SQL statement invoked on the Oracle server.

The function returns a `VOID`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
