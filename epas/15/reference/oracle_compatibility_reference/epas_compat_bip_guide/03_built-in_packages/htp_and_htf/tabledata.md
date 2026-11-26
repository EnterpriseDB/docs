---
title: TABLEDATA
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/tabledata/
lastModified: 2023-11-09T17:35:38+05:30
---

# TABLEDATA

This function and procedure generates the `<TD>` and `</TD>` tags, which insert data into a cell of an HTML table.

## Syntax

The following is the syntax for HTP:

```
HTP.TABLEDATA (
   cvalue         IN       VARCHAR2   DEFAULT NULL
   calign         IN       VARCHAR2   DEFAULT NULL
   cdp            IN       VARCHAR2   DEFAULT NULL
   cnowrap        IN       VARCHAR2   DEFAULT NULL
   crowspan       IN       VARCHAR2   DEFAULT NULL
   ccolspan       IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTP.TABLEDATA (cvalue, calign, cdp, cnowrap, crowspan, ccolspan, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                           |
| ----------- | --------------------------------------------------------------------------------- |
| cvalue      | The data for the cell in the table                                                |
| calign      | The value for the ALIGN attribute                                                 |
| cdp         | The value for the DP attribute                                                    |
| cnowrap     | If the value of this parameter isn't `NULL`, adds the NOWRAP attribute to the tag |
| crowspan    | The value for the ROWSPAN attribute                                               |
| ccolspan    | The value for the COLSPAN attribute                                               |
| cattributes | Other attributes to include as is in the tag                                      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
