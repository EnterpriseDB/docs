---
title: dblink_ora_disconnect()
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/03_dblink_ora_disconnect/
lastModified: 2025-11-25T20:57:39+05:30
---

# dblink\_ora\_disconnect()

<div id="dblink_ora_disconnect" class="registered_link"></div>

The `dblink_ora_disconnect()` function closes a database connection. The signature is:

```c
dblink_ora_disconnect(<conn_name>)
```

Where:

`conn_name` specifies the name of the link.

The function returns a `TEXT` value.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
