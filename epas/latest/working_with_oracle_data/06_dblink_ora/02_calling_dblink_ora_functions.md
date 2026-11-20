---
title: Calling dblink_ora functions
description: Describes how to call the dblink_ora functions
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/working_with_oracle_data/06_dblink_ora/02_calling_dblink_ora_functions/
lastModified: 2025-11-25T20:39:04+05:30
---

# Calling dblink\_ora functions

<div id="calling_dblink_ora_functions" class="registered_link"></div>

## Using the dblink\_ora\_connect function

The following command establishes a connection using the `dblink_ora_connect()` function:

```sql
SELECT dblink_ora_connect('acctg', 'localhost', 'xe', 'hr', 'pwd', 1521);
```

The example connects to:

- A service named `xe`
- Running on port `1521` on the `localhost`
- With a user name of `hr`
- With a password of `pwd`

You can use the connection name `acctg` to refer to this connection when calling other dblink\_ora functions.

## Using the dblink\_ora\_copy function

The following command uses the `dblink_ora_copy()` function over a connection named `edb_conn`. It copies the `empid` and `deptno` columns from a table on an Oracle server named `ora_acctg` to a table located in the `public` schema on an instance of EDB Postgres Advanced Server named `as_acctg`. The `TRUNCATE` option is enforced, and a feedback count of `3` is specified:

```sql
edb=# SELECT dblink_ora_copy('edb_conn','select empid, deptno FROM
ora_acctg', 'public', 'as_acctg', true, 3);
```

```output title="Output"
INFO:  Row: 0
INFO:  Row: 3
INFO:  Row: 6
INFO:  Row: 9
INFO:  Row: 12

 dblink_ora_copy
-----------------
 12

(1 row)
```

## Using the dblink\_ora\_record function

The following `SELECT` statement uses the `dblink_ora_record()` function and the `acctg` connection to retrieve information from the Oracle server:

```sql
SELECT * FROM dblink_ora_record( 'acctg', 'SELECT first_name from employees') AS t1(id VARCHAR);
```

The command retrieves a list that includes all of the entries in the `first_name` column of the `employees` table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
