---
title: SAMPLE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/sample/
lastModified: 2025-11-25T20:39:04+05:30
---

# SAMPLE

This function and procedure generates the `<SAMP>` and `</SAMP>` tags, which render text in a monospace font.

## Syntax

The following is the syntax for HTP:

```
HTP.SAMPLE (
   ctext          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTP.SAMPLE (ctext, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text to render in a monospace font       |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
