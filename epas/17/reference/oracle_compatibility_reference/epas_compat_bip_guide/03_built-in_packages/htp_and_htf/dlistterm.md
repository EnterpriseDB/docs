---
title: DLISTTERM
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/dlistterm/
lastModified: 2025-11-25T20:57:39+05:30
---

# DLISTTERM

This function and procedure generates the `<DT>` tag, which defines a term in a definition list `<DL>`.

## Syntax

The following is the syntax for HTP:

```
HTP.DLISTTERM (
   ctext          IN       VARCHAR2   DEFAULT NULL
   cclear         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.DLISTTERM (ctext, cclear, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The term                                     |
| cclear      | The value for the CLEAR attribute            |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
