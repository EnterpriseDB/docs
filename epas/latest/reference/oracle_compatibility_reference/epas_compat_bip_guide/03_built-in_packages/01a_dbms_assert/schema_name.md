---
title: SCHEMA_NAME
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/schema_name/
lastModified: 2025-11-25T20:39:04+05:30
---

# SCHEMA\_NAME

The `SCHEMA_NAME` function determines whether the input string is an existing schema name. An error occurs if the input value is not a valid schema name.

```sql
SCHEMA_NAME(str VARCHAR2) RETURN VARCHAR2;
```

## Parameters

`str`

The input string. White space is trimmed from the string unless that white space is contained within quotation marks. Mixed case is allowed.

The input string is converted to lower case by default. If you want to search for a case-sensitive name, enclose it in quotation marks.

## Examples

```sql
edb=# SELECT SYS.DBMS_ASSERT.SCHEMA_NAME(current_database() || '."SCHEMA1"') FROM DUAL;
 schema_name 
-------------
 edb."SCHEMA1"
(1 row)

edb=# SELECT SYS.DBMS_ASSERT.SCHEMA_NAME('"SCHEMA1"') FROM DUAL;
 schema_name 
-------------
 SCHEMA1
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
