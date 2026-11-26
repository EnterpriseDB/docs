---
title: MIMEHEADER_ENCODE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/04_mimeheader_encode/
lastModified: 2023-11-09T17:35:38+05:30
---

# MIMEHEADER\_ENCODE

Use the `MIMEHEADER_ENCODE` function to convert a string into mime header format and then encode the string. The signature is:

```sql
MIMEHEADER_ENCODE(<buf> IN VARCHAR2, <encode_charset> IN VARCHAR2
DEFAULT NULL, <encoding> IN INTEGER DEFAULT NULL)
```

This function returns a `VARCHAR2` value.

## Parameters

`buf`

`buf` contains the string to format and encode. The string is a `VARCHAR2` value.

`encode_charset`

`encode_charset` specifies the character set to which to convert the string before formatting and encoding it. The default value is `NULL`.

`encoding`

`encoding` specifies the encoding type used when encoding the string. You can specify:

- `Q` to enable quoted-printable encoding. If you don't specify a value, `MIMEHEADER_ENCODE` uses quoted-printable encoding.
- `B` to enable base-64 encoding.

## Examples

These example use the `MIMEHEADER_ENCODE` and `MIMEHEADER_DECODE` functions to first encode and then decode a string:

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
