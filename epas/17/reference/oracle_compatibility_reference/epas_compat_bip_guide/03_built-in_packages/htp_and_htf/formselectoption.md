---
title: FORMSELECTOPTION
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/formselectoption/
lastModified: 2025-11-25T20:57:39+05:30
---

# FORMSELECTOPTION

This function and procedure generates the `<OPTION>` tag, which represents one choice in a `<SELECT>` element.

## Syntax

The following is the syntax for HTP:

```
HTP.FORMSELECTOPTION (
   cvalue         IN       VARCHAR2
   cselected      IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.FORMSELECTOPTION (cvalue, cselected, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                              |
| ----------- | ------------------------------------------------------------------------------------ |
| cvalue      | The text for the option                                                              |
| cselected   | If the value for this parameter isn't `NULL`, adds the SELECTED attribute to the tag |
| cattributes | Other attributes to include as is in the tag                                         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
