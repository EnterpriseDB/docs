---
title: QUOTED_PRINTABLE_DECODE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/05_quoted_printable_decode/
lastModified: 2025-11-25T20:39:04+05:30
---

# QUOTED\_PRINTABLE\_DECODE

Use the `QUOTED_PRINTABLE_DECODE` function to translate an encoded quoted-printable string into a decoded `RAW` string.

The signature is:

```sql
QUOTED_PRINTABLE_DECODE(<r> IN RAW)
```

This function returns a `RAW` value.

## Parameters

`r`

`r` contains the encoded string to decode. The string is a `RAW` value encoded by `QUOTED_PRINTABLE_ENCODE`.

## Examples

Before executing the example, invoke the command:

```sql
SET bytea_output = escape;
```

This command escapes any nonprintable characters and displays `BYTEA` or `RAW` values onscreen in readable form. For more information, see the [Postgres core documentation](https://www.postgresql.org/docs/current/static/datatype-binary.html).

This example first encodes and then decodes a string:

```sql
edb=# SELECT UTL_ENCODE.QUOTED_PRINTABLE_ENCODE('E=mc2') FROM DUAL;
```

```output title="Output"
quoted_printable_encode
-------------------------
 E=3Dmc2
(1 row)
```

```sql
edb=# SELECT UTL_ENCODE.QUOTED_PRINTABLE_DECODE('E=3Dmc2') FROM DUAL;
```

```output title="Output"
 quoted_printable_decode
-------------------------
 E=mc2
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
