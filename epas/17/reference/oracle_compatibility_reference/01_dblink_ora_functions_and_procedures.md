---
title: dblink_ora functions and procedures
description: Describes the functions and procedures supported by dblink_ora
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/
lastModified: 2025-11-25T20:57:39+05:30
---

# dblink\_ora functions and procedures

<div id="dblink_ora_functions_and_procedures" class="registered_link"></div>

The dblink\_ora utility supports functions and procedures that enable you to issue arbitrary queries to a remote Oracle server.

- [dblink\_ora\_connect()](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/01_dblink_ora_connect/): The dblinkoraconnect() function establishes a connection to an Oracle database with user-specified connection information. The function comes in two forms.
- [dblink\_ora\_status()](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/02_dblink_ora_status/): The dblinkorastatus() function returns the database connection status. The signature is:
- [dblink\_ora\_disconnect()](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/03_dblink_ora_disconnect/): The dblinkoradisconnect() function closes a database connection. The signature is:
- [dblink\_ora\_record()](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/04_dblink_ora_record/): The dblinkorarecord() function retrieves information from a database. The signature is:
- [dblink\_ora\_call()](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/05_dblink_ora_call/): The dblinkoracall() function executes a non-SELECT statement on an Oracle database and returns a result set. The signature is:
- [dblink\_ora\_exec()](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/06_dblink_ora_exec/): The dblinkoraexec() procedure executes a DML or DDL statement in the remote database. The signature is:
- [dblink\_ora\_copy()](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/01_dblink_ora_functions_and_procedures/07_dblink_ora_copy/): The dblinkoracopy() function copies an Oracle table to an EDB table. The dblinkoracopy() function returns a BIGINT value that represents the number of rows copied. The signature is:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
