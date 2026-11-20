---
title: CLOSE_CURSOR
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/04_close_cursor/
lastModified: 2023-02-14T16:10:29+05:30
---

# CLOSE\_CURSOR

The `CLOSE_CURSOR` procedure closes an open cursor. The resources allocated to the cursor are released and you can no longer use it.

```text
CLOSE_CURSOR(<c> IN OUT NUMBER)
```

## Parameters

`c`

Cursor ID of the cursor to be closed.

## Examples

This example closes an open cursor:

```text
DECLARE
    curid         NUMBER;
    v_sql         VARCHAR2(150);
    v_status      INTEGER;
BEGIN
    v_sql:='INSERT INTO emp VALUES (9001,''JONES'',''SALESMAN'',7369,TO_DATE(''13-DEC-07'',''DD-MON-YY''),8500.00,1500.00,50)';
    curid := DBMS_SQL.OPEN_CURSOR;
    DBMS_SQL.PARSE(curid,v_sql,DBMS_SQL.native);
    v_status := DBMS_SQL.EXECUTE(curid);
    DBMS_OUTPUT.PUT_LINE('Number of rows processed: ' || v_status);
    DBMS_SQL.CLOSE_CURSOR(curid);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
