---
title: BOLD
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/bold/
lastModified: 2025-11-25T20:57:39+05:30
---

# BOLD

This function and procedure generates the `<B>` and `</B>` tags, which display the text in bold.

## Syntax

The following is the syntax for HTP:

```
HTP.BOLD (
   ctext          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.BOLD (ctext, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text that goes between the tags          |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
