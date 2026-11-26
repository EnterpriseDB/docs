---
title: CITE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/cite/
lastModified: 2023-11-09T17:35:38+05:30
---

# CITE

This function and procedure generates the `<CITE>` and `</CITE>` tags, which render text as a citation.

## Syntax

The following is the syntax for HTP:

```
HTP.CITE (
   ctext          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.CITE (ctext, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text to render as a citation             |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
