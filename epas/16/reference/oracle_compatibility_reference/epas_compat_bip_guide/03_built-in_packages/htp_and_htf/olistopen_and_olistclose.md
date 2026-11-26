---
title: OLISTOPEN and OLISTCLOSE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/olistopen_and_olistclose/
lastModified: 2024-11-22T12:16:04+01:00
---

# OLISTOPEN and OLISTCLOSE

These functions and procedures generate the `<OL>` and `</OL>` tags, which define an ordered (numbered) list.

## Syntax

The following is the syntax for HTP:

```
HTP.OLISTOPEN (
   cclear         IN       VARCHAR2   DEFAULT NULL
   cwrap          IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.OLISTCLOSE;
```

The following is the syntax for HTF:

```
HTF.OLISTOPEN (cclear, cwrap, cattributes) RETURN VARCHAR2;

HTF.OLISTCLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| cclear      | The value for the CLEAR attribute            |
| cwrap       | The value for the WRAP attribute             |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
