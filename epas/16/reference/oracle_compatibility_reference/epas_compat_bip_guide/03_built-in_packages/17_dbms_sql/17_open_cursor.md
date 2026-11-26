---
title: OPEN_CURSOR
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/17_open_cursor/
lastModified: 2024-11-22T12:16:04+01:00
---

# OPEN\_CURSOR

The `OPEN_CURSOR` function creates a cursor. A cursor must be used to parse and execute any dynamic SQL statement. Once a cursor is open, you can reuse it with the same or different SQL statements. You don't have to close the cursor and reopen it to reuse it.

```sql
<c> INTEGER OPEN_CURSOR
```

## Parameters

`c`

Cursor ID number associated with the newly created cursor.

## Examples

This example creates a new cursor:

```sql
DECLARE
    curid           NUMBER;
    v_sql           VARCHAR2(150);
    v_status        INTEGER;
BEGIN
    v_sql:='INSERT INTO dept VALUES (50,''HR'',''LOS ANGELES'')';
    curid := DBMS_SQL.OPEN_CURSOR;
    DBMS_SQL.PARSE(curid,v_sql,DBMS_SQL.native);
    v_status := DBMS_SQL.EXECUTE(curid);
    DBMS_OUTPUT.PUT_LINE('Number of rows processed: ' || v_status);
    DBMS_SQL.CLOSE_CURSOR(curid);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
