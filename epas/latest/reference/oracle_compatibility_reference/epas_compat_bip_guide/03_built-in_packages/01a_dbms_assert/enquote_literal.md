---
title: ENQUOTE_LITERAL
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/enquote_literal/
lastModified: 2025-11-25T20:39:04+05:30
---

# ENQUOTE\_LITERAL

The `ENQUOTE_LITERAL` function wraps single quotes around a string unless the string is already enclosed in single quotes.

Only an even number of single quotes are allowed in the string, excluding the enclosing quotes.

```sql
ENQUOTE_LITERAL(str VARCHAR2) RETURN VARCHAR2;
```

## Parameters

`str`

The string to be wrapped in single quotes.

## Examples

```sql
edb=# SELECT sys.DBMS_ASSERT.ENQUOTE_LITERAL('literal without ''''quotes') FROM DUAL;
      enquote_literal       
----------------------------
 'literal without ''quotes'
(1 row)

edb=# SELECT dbms_assert.ENQUOTE_LITERAL('''ab''') FROM dual;
 enquote_literal 
-----------------
 'ab'
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
