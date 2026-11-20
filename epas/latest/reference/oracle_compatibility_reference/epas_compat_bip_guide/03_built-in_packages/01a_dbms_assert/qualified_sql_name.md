---
title: QUALIFIED_SQL_NAME
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/qualified_sql_name/
lastModified: 2025-11-25T20:39:04+05:30
---

# QUALIFIED\_SQL\_NAME

The `QUALIFIED_SQL_NAME` function determines whether the input string is a qualified SQL name.

Use the following grammar to represent a qualified SQL name.

```
<simple qualified name>  => <simple name> ['.' <simple name>]
<dblink name>            => <simple qualified name> ['@' <conn string>]
<conn string>            => <simple name>
<qualified name>         => <simple qualified name> ['@' <dblink name>]
```

## Parameters

`str`

The input string. A quotation mark is allowed within the input string.

## Examples

```sql
edb=# SELECT SYS.DBMS_ASSERT.QUALIFIED_SQL_NAME('schema_name."object_name"@dblink_name') FROM DUAL;
          qualified_sql_name           
---------------------------------------
 schema_name."object_name"@dblink_name
(1 row)


edb=# SELECT SYS.DBMS_ASSERT.QUALIFIED_sql_name('こんにちは') FROM DUAL;
 qualified_sql_name 
--------------------
 こんにちは
(1 row)

edb=# SELECT dbms_assert.qualified_sql_name('db1".etc"');
ERROR:  invalid qualified SQL name
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
