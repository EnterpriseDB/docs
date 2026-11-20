---
title: RANDOMINTEGER
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/04_dbms_crypto/06_randominteger/
lastModified: 2023-11-09T17:35:38+05:30
---

# RANDOMINTEGER

The `RANDOMINTEGER()` function returns a random integer between `0` and `268,435,455`. The signature is:

```sql
RANDOMINTEGER() RETURNS INTEGER
```

## Examples

This example uses the `RANDOMINTEGER` function to return a cryptographically strong random `INTEGER` value:

```sql
DECLARE
  result INTEGER;
BEGIN
  result := DBMS_CRYPTO.RANDOMINTEGER();
  DBMS_OUTPUT.PUT_LINE(result);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
