---
title: PREOPEN and PRECLOSE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/preopen_and_preclose/
lastModified: 2025-11-25T20:39:04+05:30
---

# PREOPEN and PRECLOSE

These functions and procedures generate the `<PRE>` and `</PRE>` tags, which mark preformatted text in the body of the HTML page.

## Syntax

The following is the syntax for HTP:

```
HTP.PREOPEN (
   cclear         IN       VARCHAR2   DEFAULT NULL
   cwidth         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.PRECLOSE;
```

The following is the syntax for HTF:

```
HTF.PREOPEN (cclear, cwidth, cattributes) RETURN VARCHAR2;

HTF.PRECLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| cclear      | The value for the CLEAR attribute            |
| cwidth      | The value for the WIDTH attribute            |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
