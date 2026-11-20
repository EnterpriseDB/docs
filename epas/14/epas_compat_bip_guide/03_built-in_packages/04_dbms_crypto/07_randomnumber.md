---
title: RANDOMNUMBER
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/04_dbms_crypto/07_randomnumber/
lastModified: 2023-02-14T16:10:29+05:30
---

# RANDOMNUMBER

The `RANDOMNUMBER()` function returns a random number between 0 and 268,435,455. The signature is:

```text
RANDOMNUMBER() RETURNS NUMBER
```

## Examples

This example uses the `RANDOMNUMBER` function to return a cryptographically strong random number:

```text
DECLARE
  result NUMBER;
BEGIN
  result := DBMS_CRYPTO.RANDOMNUMBER();
  DBMS_OUTPUT.PUT_LINE(result);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
