---
title: BASE64_ENCODE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/02_base64_encode/
lastModified: 2025-11-25T20:39:04+05:30
---

# BASE64\_ENCODE

Use the `BASE64_ENCODE` function to translate and encode a string in Base64 format, as described in RFC 4648. This function can be useful when composing `MIME` email that you intend to send using the `UTL_SMTP` package. The `BASE64_ENCODE` function has two signatures:

```sql
BASE64_ENCODE(<r> IN RAW)
```

and

```sql
BASE64_ENCODE(<loid> IN OID)
```

This function returns a `RAW` value or an `OID`.

## Parameters

`r`

`r` specifies the `RAW` string to translate to Base64.

`loid`

`loid` specifies the object ID of a large object to translate to Base64.

## Examples

Before executing the example, invoke the command:

```sql
SET bytea_output = escape;
```

This command instructs the server to escape any nonprintable characters and to display `BYTEA` or `RAW` values onscreen in readable form. For more information, see the [Postgres core documentation](https://www.postgresql.org/docs/current/static/datatype-binary.html).

This example first encodes a string that contains the text `abc` using `BASE64_ENCODE` and then decodes the string using `BASE64_DECODE`:

```sql
edb=# SELECT UTL_ENCODE.BASE64_ENCODE(CAST ('abc' AS RAW));
```

```output title="Output"
 base64_encode
---------------
 YWJj
(1 row)
```

```sql
edb=# SELECT UTL_ENCODE.BASE64_DECODE(CAST ('YWJj' AS RAW));
```

```output title="Output"
 base64_decode
---------------
 abc
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
