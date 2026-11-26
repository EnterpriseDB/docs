---
title: ULISTOPEN and ULISTCLOSE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/ulist/
lastModified: 2025-11-25T20:57:39+05:30
---

# ULISTOPEN and ULISTCLOSE

These function and procedure generate the `<UL>` and `</UL>` tags, which define an unordered (bullet) list.

## Syntax

The following is the syntax for HTP:

```
HTP.ULISTOPEN (
   cclear         IN       VARCHAR2   DEFAULT NULL
   cwrap          IN       VARCHAR2   DEFAULT NULL
   cdingbat       IN       VARCHAR2   DEFAULT NULL
   csrc           IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.ULISTCLOSE;
```

The following is the syntax for HTF:

```
HTF.ULISTOPEN (cclear, cwrap, cdingbat, csrc, cattributes) RETURN VARCHAR2;

HTF.ULISTCLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| cclear      | The value for the CLEAR attribute            |
| cwrap       | The value for the WRAP attribute             |
| cdingbat    | The value for the DINGBAT attribute          |
| csrc        | The value for the SRC attribute              |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
