---
title: SUB
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/sub/
lastModified: 2023-11-09T17:35:38+05:30
---

# SUB

This function and procedure generates the `<SUB>` and `</SUB>` tags, which render text in subscript.

## Syntax

The following is the syntax for HTP:

```
HTP.SUB(
   ctext          IN       VARCHAR2
   calign         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTP.SUB(ctext, calign, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text to render in subscript              |
| calign      | The value for the ALIGN attribute            |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
