---
title: EM and EMPHASIS
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/em_and_emphasis/
lastModified: 2023-11-09T17:35:38+05:30
---

# EM and EMPHASIS

This function and procedure generates the `<EM>` and `</EM>` tags, which define text to emphasize.

## Syntax

The following is the syntax for HTP:

```
HTP.EM (
   ctext          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);

htp.emphasis (
   ctext          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.EM (ctext, cattributes) RETURN VARCHAR2;

HTF.EMPHASIS (ctext, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text to emphasize                        |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
