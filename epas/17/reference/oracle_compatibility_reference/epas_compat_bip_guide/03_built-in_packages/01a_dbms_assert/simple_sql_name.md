---
title: SIMPLE_SQL_NAME
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/simple_sql_name/
lastModified: 2025-11-25T20:57:39+05:30
---

# SIMPLE\_SQL\_NAME

The `SIMPLE_SQL_NAME` function determines whether the input is a simple SQL name.

```sql
SIMPLE_SQL_NAME(str VARCHAR2) RETURN VARCHAR2;
```

## Parameters

`str`

The input string. White space is trimmed from the string. Mixed case is allowed. A quotation mark is allowed within the string.

## Examples

```sql
edb=# SELECT SYS.DBMS_ASSERT.SIMPLE_SQL_NAME('ABCD789$#_zxcvbnm') FROM DUAL;
  simple_sql_name  
-------------------
 ABCD789$#_zxcvbnm
(1 row)

edb=# SELECT SYS.DBMS_ASSERT.SIMPLE_SQL_NAME('"12 valid name"') FROM DUAL;
 simple_sql_name 
-----------------
 "12 valid name"

edb=# SELECT dbms_assert.simple_sql_name('    sch1.a1   ');
ERROR:  invalid SQL name
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
