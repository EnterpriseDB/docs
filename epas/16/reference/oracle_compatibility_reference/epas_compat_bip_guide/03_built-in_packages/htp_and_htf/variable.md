---
title: VARIABLE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/variable/
lastModified: 2024-11-22T12:16:04+01:00
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
