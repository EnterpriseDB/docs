---
title: FRAMESETOPEN and FRAMESETCLOSE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/framesetopen_and_framsetclose/
lastModified: 2024-11-22T12:16:04+01:00
---

# FRAMESETOPEN and FRAMESETCLOSE

These functions and procedures generate the `<FRAMESET>` and `</FRAMESET>` tags, which define a frame set section.

## Syntax

The following is the syntax for HTP:

```
HTP.FRAMESETOPEN(
   crows          IN       VARCHAR2   DEFAULT NULL
   ccols          IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       varchar2   DEFAULT NULL);

HTP.FRAMESETCLOSE;
```

The following is the syntax for HTF:

```
HTF.FRAMESETOPEN (crows, ccols, cattributes) RETURN VARCHAR2;

HTF.FORMSETCLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| crows       | The value for the ROWS attribute             |
| ccols       | The value for the COLS attribute             |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
