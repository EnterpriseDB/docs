---
title: PRINT and PRN
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/print_and_prn/
lastModified: 2025-11-25T20:39:04+05:30
---

# PRINT and PRN

`htp.print` generates the specified parameter as a string terminated with the `\n` newline character. The `\n` character is different from `<BR>`.
`htp.prn` generates the specified parameter as a string. Unlike `print`, the string isn't terminated with the `\n` newline character.

> **Note**
>
> `PRINT` and `PRN` operate only as HTPs.

## Syntax

The following is the syntax for HTP:

```
HTP.PRINT (cbuf IN VARCHAR2);
HTP.PRINT (dbuf IN DATE);
HTP.PRINT (nbuf IN NUMBER);

HTP.PRN (cbuf IN VARCHAR2);
HTP.PRN (dbuf IN DATE);
HTP.PRN (nbuf IN NUMBER);
```

## Parameters

| Parameter            | Purpose                |
| -------------------- | ---------------------- |
| cbuf, dbuf, and nbuf | The string to generate |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
