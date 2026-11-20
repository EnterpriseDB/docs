---
title: PRINTS and PS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/prints_and_ps/
lastModified: 2024-11-22T12:16:04+01:00
---

# PRINTS and PS

These procedures generate a string and replace the following characters with the corresponding escape sequence:

- `<` with `&lt;`
- `>` with `&gt;`
- `""` with `&quot;`
- `&` with `&amp;`

> **Note**
>
> `PRINTS` and `PS` operate only as HTPs.

## Syntax

The following is the syntax for HTP:

```
HTP.PRINTS(ctext IN VARCHAR2);
HTP.PS(ctext IN VARCHAR2);
```

## Parameters

| Parameter | Purpose                                               |
| --------- | ----------------------------------------------------- |
| ctext     | The string on which to perform character substitution |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
