---
title: TABLEROWOPEN and TABLEROWCLOSE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/tablerow/
lastModified: 2025-11-25T20:39:04+05:30
---

# TABLEROWOPEN and TABLEROWCLOSE

This function and procedure generates the `<TR>` and `</TR>` tags, which insert a row in an HTML table.

## Syntax

The following is the syntax for HTP:

```
HTP.TABLEROWOPEN (
   calign         IN       VARCHAR2   DEFAULT NULL
   cvalign        IN       VARCHAR2   DEFAULT NULL
   cdp            IN       VARCHAR2   DEFAULT NULL
   cnowrap        IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.TABLEROWCLOSE;
```

The following is the syntax for HTF:

```
HTF.TABLEROWOPEN (calign, cvalign,cdp, cnowrap, cattributes) RETURN VARCHAR2;

HTF.TABLEROWCLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                           |
| ----------- | --------------------------------------------------------------------------------- |
| calign      | The value for the ALIGN attribute                                                 |
| cvalign     | The value for the VALIGN attribute                                                |
| cdp         | The value for the DP attribute                                                    |
| cnowrap     | If the value of this parameter isn't `NULL`, adds the NOWRAP attribute to the tag |
| cattributes | Other attributes to include as is in the tag                                      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
