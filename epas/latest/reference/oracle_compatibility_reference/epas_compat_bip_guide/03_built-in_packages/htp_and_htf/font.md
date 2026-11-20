---
title: FONT
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/font/
lastModified: 2025-11-25T20:39:04+05:30
---

# FONT

This function and procedure generates the `<FONT>` and `</FONT>` tags, which mark text with the specified font characteristics.

## Syntax

The following is the syntax for HTP:

```
HTP.FONTOPEN(
   ccolor         IN       VARCHAR2   DEFAULT NULL
   cface          IN       VARCHAR2   DEFAULT NULL
   csize          IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.fontClose;
```

The following is the syntax for HTF:

```
HTF.FONTOPEN(ccolor, cface, csize, cattributes) RETURN VARCHAR2;

HTF.FONTCLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ccolor      | The value for the COLOR attribute            |
| cface       | The value for the FACE attribute             |
| csize       | The value for the SIZE attribute             |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
