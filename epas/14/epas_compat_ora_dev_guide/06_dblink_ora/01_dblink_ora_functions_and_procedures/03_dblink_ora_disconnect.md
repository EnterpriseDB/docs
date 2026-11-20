---
title: dblink_ora_disconnect()
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/06_dblink_ora/01_dblink_ora_functions_and_procedures/03_dblink_ora_disconnect/
lastModified: 2023-02-14T16:10:29+05:30
---

# dblink\_ora\_disconnect()

<div id="dblink_ora_disconnect" class="registered_link"></div>

The `dblink_ora_disconnect()` function closes a database connection. The signature is:

```text
dblink_ora_disconnect(<conn_name>)
```

Where:

`conn_name` specifies the name of the link.

The function returns a `TEXT` value.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
