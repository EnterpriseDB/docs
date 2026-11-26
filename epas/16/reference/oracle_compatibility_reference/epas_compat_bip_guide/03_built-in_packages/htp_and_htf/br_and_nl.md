---
title: BR and NL
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/br_and_nl/
lastModified: 2024-11-22T12:16:04+01:00
---

# BR and NL

These functions and procedures generate the `<BR>` tag, which begins a new line of text.

## Syntax

The following is the syntax for HTP:

```
HTP.NL (
   cclear         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

htp.br (
   cclear         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.NL (cclear, cattributes) RETURN VARCHAR2;

HTF.BR (cclear, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| cclear      | The value for the CLEAR attribute            |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
