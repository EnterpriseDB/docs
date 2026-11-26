---
title: TABLEOPEN and TABLECLOSE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/tableopen_and_tableclose/
lastModified: 2025-11-25T20:39:04+05:30
---

# TABLEOPEN and TABLECLOSE

This function and procedure generates the `<TABLE>` and `</TABLE>` tags, which define an HTML table.

## Syntax

The following is the syntax for HTP:

```
HTP.TABLEOPEN (
   cborder        IN       VARCHAR2   DEFAULT NULL
   calign         IN       VARCHAR2   DEFAULT NULL
   cnowrap        IN       VARCHAR2   DEFAULT NULL
   cclear         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.TABLECLOSE;
```

The following is the syntax for HTF:

```
HTF.TABLEOPEN (cborder, calign, cnowrap, cclear, cattributes) RETURN VARCHAR2;

HTF.TABLECLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                           |
| ----------- | --------------------------------------------------------------------------------- |
| cborder     | The value for the BORDER attribute                                                |
| calign      | The value for the ALIGN attribute                                                 |
| cnowrap     | If the value of this parameter isn't `NULL`, adds the NOWRAP attribute to the tag |
| cclear      | The value for the CLEAR attribute                                                 |
| cattributes | Other attributes to include as is in the tag                                      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
