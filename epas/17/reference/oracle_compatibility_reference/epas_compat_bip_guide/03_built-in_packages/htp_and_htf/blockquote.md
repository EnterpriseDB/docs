---
title: BLOCKQUOTEOPEN and BLOCKQUOTECLOSE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/blockquote/
lastModified: 2025-11-25T20:57:39+05:30
---

# BLOCKQUOTEOPEN and BLOCKQUOTECLOSE

These functions and procedures generate the `<BLOCKQUOTE>` and `</BLOCKQUOTE>` tags, which mark a block of quoted text.

## Syntax

The following is the syntax for HTP:

```
HTP.BLOCKQUOTEOPEN (
   cnowrap        IN       VARCHAR2   DEFAULT NULL
   cclear         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.blockquoteClose;
```

The following is the syntax for HTF:

```
HTF.BLOCKQUOTEOPEN (cnowrap, cclear, cattributes) RETURN VARCHAR2;

HTF.BLOCKQUOTECLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                            |
| ----------- | ---------------------------------------------------------------------------------- |
| cnowrap     | If the value for this parameter isn't `NULL`, adds the NOWRAP attribute to the tag |
| cclear      | The value for the CLEAR attribute                                                  |
| cattributes | Other attributes to include as is in the tag                                       |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
