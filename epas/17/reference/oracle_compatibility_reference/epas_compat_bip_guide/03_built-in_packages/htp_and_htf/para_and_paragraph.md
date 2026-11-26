---
title: PARA and PARAGRAPH
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/para_and_paragraph/
lastModified: 2025-11-25T20:57:39+05:30
---

# PARA and PARAGRAPH

These functions and procedures generate the `<P>` tag, which marks the text as a paragraph. `htp.paragraph` enables you to add attributes to the tag.

## Syntax

The following is the syntax for HTP:

```
HTP.PARA;

HTP.PARAGRAPH (
   calign         IN       VARCHAR2   DEFAULT NULL
   cnowrap        IN       VARCHAR2   DEFAULT NULL
   cclear         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.PARA RETURN VARCHAR2;

HTF.PARAGRAPH (calign, cnowrap, cclear, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                            |
| ----------- | ---------------------------------------------------------------------------------- |
| calign      | The value for the ALIGN attribute                                                  |
| cnowrap     | If the value for this parameter isn't `NULL`, adds the NOWRAP attribute to the tag |
| cclear      | The value for the CLEAR attribute                                                  |
| cattributes | Other attributes to include as is in the tag                                       |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
