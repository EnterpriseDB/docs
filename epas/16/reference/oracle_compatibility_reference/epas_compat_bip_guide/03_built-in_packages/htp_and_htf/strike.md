---
title: STRIKE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/strike/
lastModified: 2024-11-22T12:16:04+01:00
---

# STRIKE

This function and procedure generates the `<STRIKE>` and `</STRIKE>` tags, which render text with a strikethrough.

## Syntax

The following is the syntax for HTP:

```
HTP.STRIKE(
   ctext          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTP.STRIKE(ctext, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text to render with a strikethrough      |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
