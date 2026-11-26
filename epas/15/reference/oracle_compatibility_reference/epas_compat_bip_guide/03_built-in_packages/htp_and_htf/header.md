---
title: HEADER
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/header/
lastModified: 2023-11-09T17:35:38+05:30
---

# HEADER

This function and procedure generates heading tags (`<H1>` to `<H6>`) and their corresponding closing tags (`</H1>` to `</H6>`).

## Syntax

The following is the syntax for HTP:

```
HTP.HEADER (
   nsize          IN       INTEGER
   cheader        IN       VARCHAR2
   calign         IN       VARCHAR2   DEFAULT NULL
   cnowrap        IN       VARCHAR2   DEFAULT NULL
   cclear         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.HEADER (nsize, cheader, calign, cnowrap, cclear, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                              |
| ----------- | ---------------------------------------------------- |
| nsize       | The heading level, set as an integer between 1 and 6 |
| calign      | The value for the ALIGN attribute                    |
| cheader     | The text to display in the heading                   |
| cnowrap     | The value for the NOWRAP attribute                   |
| cclear      | The value for the CLEAR attribute                    |
| cattributes | Other attributes to include as is in the tag         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
