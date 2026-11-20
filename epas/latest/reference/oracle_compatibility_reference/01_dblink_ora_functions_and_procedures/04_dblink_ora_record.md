---
title: dblink_ora_record()
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/04_dblink_ora_record/
lastModified: 2025-11-25T20:39:04+05:30
---

# dblink\_ora\_record()

<div id="dblink_ora_record" class="registered_link"></div>

The `dblink_ora_record()` function retrieves information from a database. The signature is:

```c
dblink_ora_record(<conn_name>, <query_text>)
```

Where:

- `conn_name` specifies the name of the link.

- `query_text` specifies the text of the SQL `SELECT` statement invoked on the Oracle server.

The function returns a `SETOF` record.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
