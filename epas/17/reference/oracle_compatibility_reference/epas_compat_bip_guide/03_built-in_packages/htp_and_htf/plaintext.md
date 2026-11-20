---
title: PLAINTEXT
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/plaintext/
lastModified: 2025-11-25T20:57:39+05:30
---

# PLAINTEXT

This function and procedure generates the `<PLAINTEXT>` and `</PLAINTEXT>` tags, which render text in a fixed-width font.

## Syntax

The following is the syntax for HTP:

```
HTP.PLAINTEXT(
   ctext          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.PLAINTEXT(ctext, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text to render in fixed-width font       |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
