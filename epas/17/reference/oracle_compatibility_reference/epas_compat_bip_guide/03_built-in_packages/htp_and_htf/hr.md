---
title: HR
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/hr/
lastModified: 2025-11-25T20:57:39+05:30
---

# HR

This function and procedure generates the `<HR>` tag, which generates a line in the HTML document.

## Syntax

The following is the syntax for HTP:

```
HTP.HR (
   cclear         IN       VARCHAR2   DEFAULT NULL
   csrc           IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.LINE (
   cclear         IN       VARCHAR2   DEFAULT NULL
   csrc           IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.HR (cclear, csrc, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------- |
| cclear      | The value for the CLEAR attribute                                                         |
| csrc        | The value for the SRC attribute, which specifies a custom image as the source of the line |
| cattributes | Other attributes to include as is in the tag                                              |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
