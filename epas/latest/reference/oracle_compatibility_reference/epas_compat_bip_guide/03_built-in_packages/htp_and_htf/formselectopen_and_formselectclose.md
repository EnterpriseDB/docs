---
title: FROMSELECTOPEN and FORMSELECTCLOSE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/formselectopen_and_formselectclose/
lastModified: 2025-11-25T20:39:04+05:30
---

# FROMSELECTOPEN and FORMSELECTCLOSE

This function and procedure generates the `<SELECT>` and `</SELECT>` tags, which create a select form element. A select form element is a list box from which the user selects one or more values.

## Syntax

The following is the syntax for HTP:

```
Htp.FORMSELECTOPEN (
   cname          IN       VARCHAR2
   cprompt        IN       VARCHAR2   DEFAULT NULL
   nsize          IN       INTEGER    DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

htp.formSelectClose;
```

The following is the syntax for HTF:

```
HTF.FORMSELECTOPEN (cname, cprompt, nsize, cattributes) RETURN VARCHAR2;

HTF.FORMSELECTCLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| cname       | The value for the NAME attribute             |
| cprompt     | The string preceding the list box            |
| nsize       | The value for the SIZE attribute             |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
