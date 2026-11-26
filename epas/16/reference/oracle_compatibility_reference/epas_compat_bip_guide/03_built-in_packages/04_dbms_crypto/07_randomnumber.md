---
title: RANDOMNUMBER
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/04_dbms_crypto/07_randomnumber/
lastModified: 2024-11-22T12:16:04+01:00
---

# RANDOMNUMBER

The `RANDOMNUMBER()` function returns a random number between 0 and 268,435,455. The signature is:

```sql
RANDOMNUMBER() RETURNS NUMBER
```

## Examples

This example uses the `RANDOMNUMBER` function to return a cryptographically strong random number:

```sql
DECLARE
  result NUMBER;
BEGIN
  result := DBMS_CRYPTO.RANDOMNUMBER();
  DBMS_OUTPUT.PUT_LINE(result);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
