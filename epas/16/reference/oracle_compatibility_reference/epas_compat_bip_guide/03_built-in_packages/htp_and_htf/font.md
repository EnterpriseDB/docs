---
title: FONT
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/font/
lastModified: 2024-11-22T12:16:04+01:00
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
