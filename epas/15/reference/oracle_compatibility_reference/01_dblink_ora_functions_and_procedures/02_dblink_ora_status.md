---
title: dblink_ora_status()
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/02_dblink_ora_status/
lastModified: 2023-11-09T17:35:38+05:30
---

# dblink\_ora\_status()

<div id="dblink_ora_status" class="registered_link"></div>

The `dblink_ora_status()` function returns the database connection status. The signature is:

```c
dblink_ora_status(<conn_name>)
```

Where:

`conn_name` specifies the name of the link.

If the specified connection is active, the function returns a `TEXT` value of `OK`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
