---
title: S
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/s/
lastModified: 2023-11-09T17:35:38+05:30
---

# S

This function and procedure generates the `<S>` and `</S>` tags, which render the text with a strikethrough.

## Syntax

The following is the syntax for HTP:

```
HTP.S(
   ctext          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTP.S(ctext, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text to render with a strikethrough      |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
