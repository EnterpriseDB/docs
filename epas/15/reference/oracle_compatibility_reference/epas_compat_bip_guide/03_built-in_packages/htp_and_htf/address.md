---
title: ADDRESS
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/address/
lastModified: 2023-11-09T17:35:38+05:30
---

# ADDRESS

This function and procedure generates the `<ADDRESS>` and `</ADDRESS>` tags, which specify the address, author, and signature of a document.

## Syntax

The following is the syntax for HTP:

```
HTP.ADDRESS (
   cvalue         IN       VARCHAR2
   cnowrap        IN       VARCHAR2   DEFAULT NULL
   cclear         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.ADDRESS (cvalue, cnowrap, cclear, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                            |
| ----------- | ---------------------------------------------------------------------------------- |
| cvalue      | The string between the `<ADDRESS>` and `</ADDRESS>` tags                           |
| cnowrap     | If the value for this parameter isn't `NULL`, adds the NOWRAP attribute in the tag |
| cclear      | The value for the CLEAR attribute                                                  |
| cattributes | Other attributes to include as is in the tag                                       |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
