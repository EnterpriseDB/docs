---
title: ANCHOR and ANCHOR2
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/anchor/
lastModified: 2023-11-09T17:35:38+05:30
---

# ANCHOR and ANCHOR2

These functions and procedures generate the `<A>` and `</A>` HTML tags, which specify the source or destination of a hypertext link.

## Syntax

The following is the syntax for HTP:

```
HTP.ANCHOR (
   curl           IN       VARCHAR2
   ctext          IN       VARCHAR2
   cname          IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.ANCHOR2 (
   curl           IN       VARCHAR2
   ctext          IN       VARCHAR2
   cname          IN       VARCHAR2   DEFAULT NULL
   ctarget        IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.ANCHOR (curl, ctext, cname, cattributes) RETURN VARCHAR2;

HTF.ANCHOR2 (curl, ctext, cname, ctarget, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                |
| ----------- | ------------------------------------------------------ |
| curl        | The value for the HREF attribute                       |
| ctext       | The string that goes between the `<A>` and `</A>` tags |
| cname       | The value for the NAME attribute                       |
| ctarget     | The value for the TARGET attribute                     |
| cattributes | Other attributes to include as is in the tag           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
