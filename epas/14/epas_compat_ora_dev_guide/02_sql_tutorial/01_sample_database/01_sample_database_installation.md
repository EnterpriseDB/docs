---
title: Sample database installation
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/01_sample_database/01_sample_database_installation/
lastModified: 2023-02-14T16:10:29+05:30
---

# Sample database installation

<div id="sample_database_installation" class="registered_link"></div>

When EDB Postgres Advanced Server is installed, a sample database named `edb` is automatically created. This sample database contains the tables and programs used in this tutorial after you execute the script `edb-sample.sql`, located in the `/usr/edb/as14/share` directory.

This script does the following:

- Creates the sample tables and programs in the currently connected database
- Grants all permissions on the tables to the `PUBLIC` group

The tables and programs are created in the first schema of the search path in which the current user has permission to create tables and procedures. You can display the search path by issuing the command:

```text
SHOW SEARCH_PATH;
```

You can alter the search path using commands in PSQL.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
