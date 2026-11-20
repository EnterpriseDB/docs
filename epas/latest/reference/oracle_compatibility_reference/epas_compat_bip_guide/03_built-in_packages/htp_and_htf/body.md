---
title: BODYOPEN and BODYCLOSE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/body/
lastModified: 2025-11-25T20:39:04+05:30
---

# BODYOPEN and BODYCLOSE

These functions and procedures generate the `<BODY>` and `</BODY>` tags, which mark the body section of an HTML document.

## Syntax

The following is the syntax for HTP:

```
HTP.BODYOPEN(
   cbackground    IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

htp.bodyClose;
```

The following is the syntax for HTF:

```
HTF.BODYOPEN(cbackground, cattributes) RETURN VARCHAR2;

HTF.BODYCLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| cbackground | The value for the BACKGROUND attribute, which specifies a graphic file to use for the background of the document |
| cattributes | Other attributes to include as is in the tag                                                                     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
