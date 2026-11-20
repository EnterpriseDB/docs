---
title: NOOP
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/noop/
lastModified: 2025-11-25T20:57:39+05:30
---

# NOOP

The `NOOP` function returns a string without any checking.

```sql
NOOP(str <anycompatible>) RETURN <anycompatible>;
```

## Parameters

`str`

The input string.

## Examples

```sql
edb=# SELECT sys.DBMS_ASSERT.NOOP('Literal with ''''two single'''' quotes.') FROM DUAL;
                noop                 
-------------------------------------
 Literal with ''two single'' quotes.
(1 row)

edb=# SELECT sys.DBMS_ASSERT.NOOP('Literal with no quotes.') FROM DUAL;
          noop           
-------------------------
 Literal with no quotes.
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
