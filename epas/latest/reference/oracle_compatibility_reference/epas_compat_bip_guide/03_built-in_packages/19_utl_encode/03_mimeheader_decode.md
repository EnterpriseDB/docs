---
title: MIMEHEADER_DECODE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/03_mimeheader_decode/
lastModified: 2025-11-25T20:39:04+05:30
---

# MIMEHEADER\_DECODE

Use the `MIMEHEADER_DECODE` function to decode values that are encoded by the `MIMEHEADER_ENCODE` function. The signature is:

```sql
MIMEHEADER_DECODE(<buf> IN VARCHAR2)
```

This function returns a `VARCHAR2` value.

## Parameters

`buf`

`buf` contains the value encoded by `MIMEHEADER_ENCODE` to decode.

## Examples

These examples use the `MIMEHEADER_ENCODE` and `MIMEHEADER_DECODE` functions to first encode and then decode a string:

```sql
edb=# SELECT UTL_ENCODE.MIMEHEADER_ENCODE('What is the date?') FROM DUAL;
```

```output title="Output"
      mimeheader_encode
------------------------------
 =?UTF8?Q?What is the date??=
(1 row)
```

```sql
edb=# SELECT UTL_ENCODE.MIMEHEADER_DECODE('=?UTF8?Q?What is the date??=')
FROM DUAL;
```

```output title="Output"
 mimeheader_decode
-------------------
 What is the date?
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
