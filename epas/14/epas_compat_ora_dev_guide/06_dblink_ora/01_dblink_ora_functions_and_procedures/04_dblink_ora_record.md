---
title: dblink_ora_record()
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/06_dblink_ora/01_dblink_ora_functions_and_procedures/04_dblink_ora_record/
lastModified: 2023-02-14T16:10:29+05:30
---

# dblink\_ora\_record()

<div id="dblink_ora_record" class="registered_link"></div>

The `dblink_ora_record()` function retrieves information from a database. The signature is:

```text
dblink_ora_record(<conn_name>, <query_text>)
```

Where:

- `conn_name` specifies the name of the link.

- `query_text` specifies the text of the SQL `SELECT` statement invoked on the Oracle server.

The function returns a `SETOF` record.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
