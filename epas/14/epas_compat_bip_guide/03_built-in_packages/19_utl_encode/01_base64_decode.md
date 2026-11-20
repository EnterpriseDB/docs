---
title: BASE64_DECODE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/01_base64_decode/
lastModified: 2023-02-14T16:10:29+05:30
---

# BASE64\_DECODE

Use the `BASE64_DECODE` function to translate a Base64 encoded string to the original value originally encoded by `BASE64_ENCODE`. The signature is:

```text
BASE64_DECODE (<r> IN RAW)
```

This function returns a `RAW` value.

## Parameters

`r`

`r` is the string that contains the Base64 encoded data to translate to `RAW` form.

## Examples

Before executing the following example, invoke the command:

```
SET bytea_output = escape;
```

This command instructs the server to escape any non-printable characters and to display `BYTEA` or `RAW` values onscreen in readable form. For more information, see the [Postgres core documentation](https://www.postgresql.org/docs/current/static/datatype-binary.html).

This example encodes a string that contains the text `abc` using `BASE64_ENCODE` and then decodes the string using `BASE64_DECODE`:

```text
edb=# SELECT UTL_ENCODE.BASE64_ENCODE(CAST ('abc' AS RAW));
 base64_encode
---------------
 YWJj
(1 row)

edb=# SELECT UTL_ENCODE.BASE64_DECODE(CAST ('YWJj' AS RAW));
 base64_decode
---------------
 abc
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
