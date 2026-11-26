---
title: VARIABLE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/variable/
lastModified: 2025-11-25T20:39:04+05:30
---

# VARIABLE

This function and procedure generates the `<VAR>` and `</VAR>` tags, which render text in italics.

## Syntax

The following is the syntax for HTP:

```
HTP.VARIABLE (
   ctext          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.VARIABLE (ctext, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text to render in italics                |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
