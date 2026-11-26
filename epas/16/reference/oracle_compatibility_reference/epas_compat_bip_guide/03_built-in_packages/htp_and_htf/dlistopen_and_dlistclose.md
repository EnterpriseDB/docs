---
title: DLISTOPEN and DLISTCLOSE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/dlistopen_and_dlistclose/
lastModified: 2024-11-22T12:16:04+01:00
---

# DLISTOPEN and DLISTCLOSE

These functions and procedures generate the `<DL>` and `</DL>` tags, which create a definition list.

## Syntax

The following is the syntax for HTP:

```
HTP.DLISTOPEN (
   cclear         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

htp.dlistClose;
```

The following is the syntax for HTF:

```
HTF.DLISTOPEN (cclear, cattributes) RETURN VARCHAR2;

HTF.DLISTCLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| cclear      | The value for the CLEAR attribute            |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
